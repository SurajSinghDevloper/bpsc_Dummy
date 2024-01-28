import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import useRazorpay from "react-razorpay";
import { Notify } from "../../Configuration/Notify";

const PaymentForm = ({ setActivePage }) => {
  const [finalPayableAmount, setFinalPayableAmount] = useState("");
  const [orderId, setOrderId] = useState("");
  const { userInfo, selectedVacancy } = useContext(MyContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Razorpay, _] = useRazorpay(); // Destructuring the array returned by useRazorpay

  const generateOrderId = async () => {
    try {
      const Authorization = localStorage.getItem("token");
      const orderData = new FormData();
      orderData.append("amount", finalPayableAmount);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/payment/order`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
          body: orderData,
        }
      );
      if (response.ok) {
        const data = await response.text();
        console.log(data);
        setOrderId(data);
        Notify("success", "Order Info Created");
      } else {
        throw new Error("Failed to generate order ID");
      }
    } catch (error) {
      console.error("Failed to generate order ID:", error.message);
      Notify("error", "Failed to generate order ID");
    }
  };

  const saveAppliedDetails = async () => {
    try {
      const appliedData = new FormData();
      appliedData.append("appliedFor", selectedVacancy.nameOfExam);
      appliedData.append("paymentStatus", "ND");
      appliedData.append("isCompleted", "Y");
      appliedData.append("isVerified", "ND"); // Corrected typo
      appliedData.append("vacancyType", selectedVacancy.vacancyType);
      appliedData.append(
        "advertismentNumber",
        selectedVacancy.advertismentNumber
      );
      appliedData.append("orderId", orderId);
      appliedData.append("mobileNo", userInfo.mobile);
      appliedData.append("userName", userInfo.username);
      appliedData.append("paymentAmount", finalPayableAmount);

      const Authorization = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/vac-bps/save-applied-details`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
          body: appliedData,
        }
      );
      if (response.status === 201 || 200) {
        Notify("success", "Data Saved Successfully");
      } else {
        throw new Error("Failed to save applied details");
      }
    } catch (error) {
      console.error("Failed to save applied details:", error.message);
      Notify("error", "Something Went Wrong");
    }
  };

  const pay = async () => {
    console.log(orderId, isLoaded);
    if (isLoaded && orderId) {
      const options = {
        key: "rzp_test_VFuNBAwLFlcO6m",
        amount: parseInt(finalPayableAmount) * 100, // Multiply by 100 for paise
        currency: "INR",
        name: "UMU",
        description: "Payment for something",
        order_id: orderId,
        handler: function (response) {
          if (response.razorpay_payment_id) {
            Notify("success", "Payment Successful");
          } else {
            Notify("error", "Payment Failed");
          }
        },
        prefill: {
          name: `${userInfo.firstname} ${userInfo.lastname}`,
          email: userInfo.email,
          contact: userInfo.contactNumber,
        },
        notes: {},
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new Razorpay(options); // Using the Razorpay class
      rzp.open();
      saveAppliedDetails();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    setIsLoaded(true);
    generateOrderId();
    await pay();
  };

  useEffect(() => {
    if (
      userInfo.category === "ST" ||
      userInfo.category === "EWS" ||
      userInfo.category === "EBC" ||
      userInfo.category === "SC" ||
      userInfo.disability === "true"
    ) {
      setFinalPayableAmount("200");
    } else {
      setFinalPayableAmount(selectedVacancy.feesOfVacancy);
    }
  }, [selectedVacancy, userInfo]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md w-3/5">
        <table className="border border-black w-full">
          <thead className="border border-r border-black">
            <tr className="border border-r border-black">
              <th>Particular</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="border border-black">
            <tr className="border border-r border-black">
              <td className="border border-r border-black">
                {selectedVacancy.nameOfExam}
              </td>
              <td className="border border-r border-black">
                {selectedVacancy.feesOfVacancy}
              </td>
            </tr>
            <tr className="border border-r border-black">
              <td className="border border-r border-black">
                BPSC Fee allowance
              </td>
              <td className="border border-r border-black">
                {parseInt(selectedVacancy.feesOfVacancy) - finalPayableAmount}
              </td>
            </tr>
            <tr className="border border-r border-black">
              <td className="border border-r border-black">
                Net Payable Amount
              </td>
              <td className="border border-r border-black">
                {finalPayableAmount}
              </td>
            </tr>
          </tbody>
        </table>
        <hr className="bg-slate-800 mt-2" />
        <div className="justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-center">
            Payment Information
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-row">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Amount
              </label>
              <input
                type="text"
                id="price"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter amount"
                value={finalPayableAmount}
                readOnly
              />
              <h1>
                The Payment Amount is for Vacancy No :
                <span>{selectedVacancy.advertismentNumber}</span>
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-600 transition duration-300"
            >
              Pay Now
            </button>
            <button
              type="button"
              className="bg-red-600 text-white p-2 rounded mt-6 hover:bg-blue-600 transition duration-300 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
