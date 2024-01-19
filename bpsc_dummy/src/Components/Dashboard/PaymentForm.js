// PaymentForm.js

import React, { useState } from 'react';

const PaymentForm = () => {
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('USD');

    const handlePayment = async () => {
        // Send a request to your server to initiate the PayPal payment
        const response = await fetch('http://localhost:8988/api/bpsc-user/payment/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price,
                currency,
                method: 'paypal', // Specify the payment method
                intent: 'sale',   // Specify the payment intent
                description: 'Payment for something', // Provide a description
            }),
        });

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
            <div className="max-w-md  mt-8 p-2 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Payment Form</h1>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-600">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
                <button
                    onClick={handlePayment}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Proceed to Payment
                </button>



            </div>

        </>

    );
};

export default PaymentForm;
