import React, { useContext } from "react";
import { MyContext } from "../../ContextApis/MyContext";

const FormCriteria = () => {
  const { userInfo } = useContext(MyContext);
  const fullName =
    userInfo.firstname + " " + userInfo.middlename + " " + userInfo.lastname;
  return (
    <>
      <div>
        <div class=" mx-auto bg-white rounded overflow-hidden shadow-lg my-10">
          <div class="px-6 py-4">
            <div className="text-center">
              <div class="font-bold text-3xl mb-2">
                Form Submission Criteria
              </div>
            </div>

            <table>
              <thead>
                <td className="border border-r border-black text-center text-white text-xl font-semibold bg-slate-400 p-2">
                  Criterias
                </td>
                <td className="border border-r border-black  text-center text-white text-xl font-semibold bg-slate-400 p-2">
                  Fill Details
                </td>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select className="w-full">
                      <option>select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select className="w-full">
                      <option>select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select className="w-full">
                      <option>select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select className="w-full">
                      <option>select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-row px-6 py-4">
            <div className="w-5 h-5 my-auto mr-2">
              <input className="w-full h-full align-middle" type="checkbox" />
            </div>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              I, <b>{fullName}</b>, hereby declare that all the information
              provided above is true and correct to the best of my knowledge,
              belief, and understanding. I understand that providing false
              information may have legal consequences.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-green-600 p-2 text-white font-semibold rounded-2xl w-1/3 mb-10">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCriteria;
