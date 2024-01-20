// PaymentForm.js

import React, { useState } from "react";

const PaymentForm = () => {
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handlePayment = async () => {
    // Send a request to your server to initiate the PayPal payment
    const response = await fetch(
      "http://localhost:8988/api/bpsc-user/payment/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          currency,
          method: "paypal", // Specify the payment method
          intent: "sale", // Specify the payment intent
          description: "Payment for something", // Provide a description
        }),
      }
    );

    if (response.ok) {
      const approvalUrl = await response.text();
      // Redirect the user to the PayPal approval URL
      window.location.href = approvalUrl;
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-4 rounded shadow-md w-3/5">
          <div className="justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-center">
              Payment Information
            </h2>
            {/* Add your payment options here */}
            <div className="flex space-x-4 mt-2">
              <button className="text-white flex-1 py-3 rounded bg-blue-500">
                Card
              </button>
              <button className="text-white flex-1 py-3 rounded bg-blue-500">
                UPI
              </button>
              <button className="text-white flex-1 py-3 rounded bg-blue-500">
                Netbanking
              </button>
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                placeholder="**** **** **** ****"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium text-gray-600"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-600"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
                  placeholder="123"
                />
              </div>
            </div>
            <div className="w-full flex justify-end ">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-600 transition duration-300"
              >
                Pay Now
              </button>
              <button
                type="submit"
                className="bg-red-600 text-white p-2 rounded mt-6 hover:bg-blue-600 transition duration-300 ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
