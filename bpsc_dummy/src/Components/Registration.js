import React, { useState } from "react";
import Layout from "./LandingPages/Layout";
import SignupSVG from "../Assets/SignupSVG.svg";
import OTPModal from "./OTPModal";
import { useHistory } from "react-router-dom";
import {
  OtpPostData,
  postData,
  registrationPostData,
} from "../Configuration/ApiCalls";
import { Notify } from "../Configuration/Notify";

const Registration = () => {
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [signupDisabled, setSignupDisabled] = useState(true);
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    middlename: "",
    lastname: "",
    dob: "",
    emailID: "",
    mobileNo: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.firstName !== "" ||
      formData.middlename !== "" ||
      formData.lastname !== "" ||
      formData.emailID !== "" ||
      formData.mobileNo !== "" ||
      formData.dob !== "" ||
      formData.password !== ""
    ) {
      try {
        const registrationData = new FormData();
        registrationData.append("firstName", formData.firstName);
        registrationData.append("middlename", formData.middlename);
        registrationData.append("lastname", formData.lastname);
        registrationData.append("emailID", formData.emailID);
        registrationData.append("mobileNo", formData.mobileNo);
        registrationData.append("dob", formData.dob);
        registrationData.append("password", formData.password);
        console.log(formData);
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/auth/registration`,
          { method: "POST", body: registrationData }
        );
        if (res.status === 201) {
          Notify("success", "Register SuccessFully");
        } else if (res.status === 409) {
          Notify("info", "Already Register ");
        }
        history.push("/");
      } catch (error) {
        Notify("error", "Somthing Went Wrong");
        console.error("Error in handleSubmit:", error.message);
      }
    } else {
      alert("All Fields are Mandatory !");
    }
  };

  const openOTPModal = () => {
    setIsOTPModalOpen(true);
  };

  const closeOTPModal = () => {
    setIsOTPModalOpen(false);
  };

  const sendOTP = async () => {
    try {
      const otpFormData = new FormData();
      otpFormData.append("emailID", formData.emailID);
      const res = await OtpPostData(
        `${process.env.REACT_APP_BASE_URL}/otp/send-otp`,
        otpFormData
      );

      setSignupDisabled(false);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setSignupDisabled(false);
    }
  };

  const handleVerifyClick = () => {
    openOTPModal();
    sendOTP();
    setSignupDisabled(false);
  };
  return (
    <Layout>
      <div className=" flex h-1/2 items-center  bg-blue-100 justify-center">
        <div className="flex flex-col sm:flex-row items-center ml-auto  pt-1 pb-1">
          <img src={SignupSVG} alt="Signup" className="w-1/2  mr-20 " />
          <div className="  bg-blue-500 h-1/2">
            <h2 className="text-5xl text-white text-center">Register</h2>
            {/* <hr className='font-bold text-white w-1/2 ml-28 p-2' /> */}
            <p className="mt-2 text-md text-white text-center">
              Create an account to get started
            </p>
            <form
              className="mt-6 space-y-4 p-8 w-full bg-blue-500"
              onSubmit={handleSubmit}
            >
              <div className="space-y-8">
                <div className="flex justify-center items-center ">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block mr-2 w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="First Name"
                  />
                  <label htmlFor="middlename" className="sr-only">
                    Middle Name
                  </label>
                  <input
                    id="middlename"
                    name="middlename"
                    type="text"
                    autoComplete="middlename"
                    required
                    value={formData.middlename}
                    onChange={handleInputChange}
                    className="block w-full mr-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Middle Name"
                  />
                  <label htmlFor="lastname" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex justify-center items-center ">
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="emailID"
                    name="emailID"
                    type="text"
                    autoComplete="emailID"
                    required
                    value={formData.emailID}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="E-mail"
                  />
                  <button
                    onClick={handleVerifyClick}
                    className="p-2 w-20 border rounded-md text-white ml-3 hover:bg-slate-600 border-rose-50"
                  >
                    Verify
                  </button>
                </div>
                <div className="flex justify-center items-center ">
                  <label htmlFor="mobile" className="sr-only">
                    Mobile
                  </label>
                  <input
                    id="mobileNo"
                    name="mobileNo"
                    type="text"
                    autoComplete="mobileNo"
                    required
                    value={formData.mobileNo || ""}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Mobile"
                  />
                </div>
                <div className="flex justify-center items-center ">
                  <label
                    htmlFor="dob"
                    className="text-white cursor-pointer w-1/2 p-2"
                    title="Once entered, Date of Birth cannot be changed"
                  >
                    Date Of Birth*
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="dob"
                    required
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Date of Birth"
                  />
                </div>
                <div className="flex justify-center items-center ">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="w-full flex flex-row">
                <a
                  href="/"
                  className={`w-full cursor-pointer mr-2 py-2 px-4 border font-medium rounded-md text-white focus:ring-2 focus:ring-offset-2 bg-blue-500 hover:bg-blue-600`}
                >
                  All Ready Register ?
                </a>

                <button
                  type="submit"
                  disabled={signupDisabled}
                  className={`w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                    signupDisabled
                      ? "bg-gray-400"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
                >
                  Sign up
                </button>
              </div>
            </form>
            <OTPModal
              isOpen={isOTPModalOpen}
              onClose={closeOTPModal}
              emailID={formData.emailID}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
