import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import { Notify } from "../../Configuration/Notify";

const FormCriteria = ({ setActivePage }) => {
  const { userInfo, selectedVacancy, formCriteria, setFormCriteria } =
    useContext(MyContext);

  const [isAagreed, setIsAgreed] = useState(false);
  const [formCriteriaData, setFormCriteriaData] = useState({
    isCitizenOfIndia: "",
    isOriginOfBihar: "",
    isSonOfFreedomFighter: "",
    isEXServiceManOfArmy: "",
    isRegServiceInBiharGov: "",
    hasRequiredQualification: "",
  });
  const handleCheckboxChange = () => {
    setIsAgreed((prevValue) => !prevValue);
  };
  const handleSelectChange = (criteria, value) => {
    setFormCriteriaData((prevData) => ({
      ...prevData,
      [criteria]: value,
    }));
  };
  // console.log(selectedVacancy);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("isCitizenOfIndia", formCriteriaData.isCitizenOfIndia);
    formData.append("isOriginOfBihar", formCriteriaData.isOriginOfBihar);
    formData.append(
      "isSonOfFreedomFighter",
      formCriteriaData.isSonOfFreedomFighter
    );
    formData.append(
      "isEXServiceManOfArmy",
      formCriteriaData.isEXServiceManOfArmy
    );
    formData.append(
      "isRegServiceInBiharGov",
      formCriteriaData.isRegServiceInBiharGov
    );
    formData.append(
      "hasRequiredQualification",
      formCriteriaData.hasRequiredQualification
    );
    formData.append("aggreWithDeclaration", isAagreed);
    if (!formCriteria) {
      try {
        const Authorization = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/vac-bps/save/form-criteria?advNo=${selectedVacancy.advertismentNumber}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${Authorization}`,
            },
            body: formData,
          }
        );

        if (response.status == 200) {
          Notify("success", "Data Saved Successfully");
          const data = await response.json();

          // Redirect or handle success as needed
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    } else {
      setActivePage("Payment");
    }
  };

  useEffect(() => {
    const getFormCriteria = async () => {
      const Authorization = localStorage.getItem("token");
      let response = "";

      response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/vac-bps/found-criteria?username=${userInfo.username}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setFormCriteria(data);
      } else {
        console.error("Failed to retrieve form criteria:", response.statusText);
      }
    };

    // Call getFormCriteria only when selectedVacancy is not null or undefined

    getFormCriteria();
  }, [userInfo.username]);

  useEffect(() => {
    // Set the initial state of formCriteriaData based on the data obtained from the API
    if (formCriteria) {
      setFormCriteriaData({
        isCitizenOfIndia: formCriteria.isCitizenOfIndia,
        isOriginOfBihar: formCriteria.isOriginOfBihar,
        isSonOfFreedomFighter: formCriteria.isSonOfFreedomFighter,
        isEXServiceManOfArmy: formCriteria.isEXServiceManOfArmy,
        isRegServiceInBiharGov: formCriteria.isRegServiceInBiharGov,
        hasRequiredQualification: formCriteria.hasRequiredQualification,
      });
      setIsAgreed(true);
    }
  }, [formCriteria]);

  const fullName =
    userInfo.firstname + " " + userInfo.middlename + " " + userInfo.lastname;
  return (
    <>
      <div>
        <div className=" mx-auto bg-white rounded overflow-hidden shadow-lg my-10">
          <div className="px-6 py-4">
            <div className="text-center">
              <div className="font-bold text-3xl mb-2">
                {selectedVacancy
                  ? selectedVacancy.nameOfExam + " Form Criteria"
                  : "Not Selected Vacancy!"}
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <td className="border border-r border-black text-center text-white text-xl font-semibold bg-slate-400 p-2">
                    Criterias
                  </td>
                  <td className="border border-r border-black  text-center text-white text-xl font-semibold bg-slate-400 p-2">
                    Fill Details
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Are you a citizen of India ?
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select
                      className="w-full"
                      onChange={(e) =>
                        handleSelectChange("isCitizenOfIndia", e.target.value)
                      }
                      value={formCriteriaData.isCitizenOfIndia}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Are you a Permanent Resident(Origin) of State of Bihar?
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select
                      className="w-full"
                      onChange={(e) =>
                        handleSelectChange("isOriginOfBihar", e.target.value)
                      }
                      value={formCriteriaData.isOriginOfBihar}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Are you a grand son/ grand daughter of freedom fighters as
                    per advertisement ?
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select
                      className="w-full"
                      onChange={(e) =>
                        handleSelectChange(
                          "isSonOfFreedomFighter",
                          e.target.value
                        )
                      }
                      value={formCriteriaData.isSonOfFreedomFighter}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Are you an Ex-Serviceman ? (Retired From Army,Navy &
                    Airforce) *
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select
                      className="w-full"
                      onChange={(e) =>
                        handleSelectChange(
                          "isEXServiceManOfArmy",
                          e.target.value
                        )
                      }
                      value={formCriteriaData.isEXServiceManOfArmy}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Have You Completed 3 Years Of Regular Service In Bihar
                    Government?*
                  </td>
                  <td className="border border-r border-black w-1/5">
                    <select
                      className="w-full"
                      onChange={(e) =>
                        handleSelectChange(
                          "isRegServiceInBiharGov",
                          e.target.value
                        )
                      }
                      value={formCriteriaData.isRegServiceInBiharGov}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="border border-r border-black w-4/5">
                    Do you have required essential qualification/criteria for
                    this post as mentioned in the advertisement ? (For details
                    please read the advertisement carefully.) *{" "}
                  </td>
                  <td
                    className="border border-r border-black w-1/5"
                    onChange={(e) =>
                      handleSelectChange(
                        "hasRequiredQualification",
                        e.target.value
                      )
                    }
                    value={formCriteriaData.hasRequiredQualification}
                  >
                    <select
                      className="w-full"
                      value={formCriteriaData.hasRequiredQualification}
                    >
                      <option>select</option>
                      <option value={"Yes"}>Yes</option>
                      <option value={"No"}>No</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row px-6 py-4">
            <div className="w-5 h-5 my-auto mr-2">
              <input
                className="w-full h-full align-middle cursor-pointer"
                type="checkbox"
                checked={isAagreed}
                onChange={handleCheckboxChange}
              />
            </div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              I, <b>{fullName}</b>, hereby declare that all the information
              provided above is true and correct to the best of my knowledge,
              belief, and understanding. I understand that providing false
              information may have legal consequences.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              disabled={!isAagreed}
              className={`bg-green-600 p-2 text-white text-center font-semibold rounded-2xl w-1/3 mb-10 ${
                !isAagreed && "opacity-50 cursor-not-allowed"
              }`}
            >
              {formCriteria ? <p>Go To Payment</p> : <p>Submit Form</p>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCriteria;
