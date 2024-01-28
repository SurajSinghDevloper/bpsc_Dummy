import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import { Notify } from "../../Configuration/Notify";
import useRazorpay from "react-razorpay";

const SubmittedForm = ({ setActivePage }) => {
  const { userInfo } = useContext(MyContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [appliedData, setAppliedData] = useState([]);
  const [Razorpay, _] = useRazorpay();

  const pay = async (orderId, paymentAmount) => {
    if (isLoaded && orderId) {
      const options = {
        key: "rzp_test_VFuNBAwLFlcO6m",
        amount: parseInt(paymentAmount) * 100, // Multiply by 100 for paise
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
    }
  };

  useEffect(() => {
    const fetchAppliedData = async () => {
      try {
        const Authorization = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/vac-bps/getAll/${userInfo.username}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${Authorization}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAppliedData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAppliedData();
  }, [userInfo]);

  const handleIsPayment = async (form) => {
    setIsLoaded(true);
    await pay(form.orderId, form.paymentAmount);
  };

  return (
    <div className="mt-10 ml-10">
      <h1 className="text-3xl font-bold mb-4">Submitted Forms</h1>
      <table className="min-w-full bg-white border border-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-r border-black">
              Applied For
            </th>
            <th className="py-2 px-4 border border-r border-black w-1/4">
              Form Status
            </th>
            <th className="py-2 px-4">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedData.map((form, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-r border-black">
                {form.appliedFor}
              </td>
              <td className="py-2 px-4 border border-r text-center border-black w-1/4">
                {form.isCompleted === "Y" ? "Submitted" : "Pending"}
              </td>
              <td
                className={`py-2 px-4 border-t text-center ${
                  form.paymentStatus === "ND"
                    ? "border-black"
                    : "bg-green-500 text-white"
                }`}
              >
                {form.paymentStatus === "ND" ? (
                  <button
                    className="bg-red-400 text-white p-2 rounded-lg w-full"
                    onClick={() => handleIsPayment(form)}
                  >
                    Go To Payment
                  </button>
                ) : (
                  "Approved"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedForm;
