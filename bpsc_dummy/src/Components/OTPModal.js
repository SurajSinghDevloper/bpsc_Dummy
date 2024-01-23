import React, { useState, useEffect } from "react";

import { Notify } from "../Configuration/Notify";

const OTPModal = ({ isOpen, onClose, emailID }) => {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(60);

  const handleInputChange = (e) => {
    setOTP(e.target.value);
  };

  useEffect(() => {
    let countdown;
    if (isOpen) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isOpen]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", emailID);
      formData.append("otp", otp);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/otp/verify-otp`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.status === 200) {
        Notify("success", "OTP Verified");
        onClose();
        setOTP("");
      }
    } catch (error) {
      Notify("error", "Not Verified");
      console.error("Error verifying OTP:", error);
      // Handle error accordingly (e.g., display a message to the user)
    }
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="z-50 bg-white p-8 w-full max-w-md mx-auto rounded-lg shadow-xl">
          <button
            onClick={onClose}
            className=" top-2 right-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            X
          </button>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            OTP Verification
          </h2>
          <p>OTP has been sent to your email. Please check your mail.</p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                value={otp}
                onChange={handleInputChange}
                className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter OTP"
              />
            </div>
            <div className="text-center">
              <p>Time remaining: {formatTime(timer)}</p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
