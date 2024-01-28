import React, { useEffect, useState, useContext } from "react";
import { getData } from "../../Configuration/ApiCalls";
import { MyContext } from "../../ContextApis/MyContext";
import { postData } from "../../Configuration/ApiCalls";
import { getCookie } from "../../Configuration/Cookies";
import { Notify } from "../../Configuration/Notify";

const PersonalInformation = ({ saveInfo }) => {
  // const [usrInfo, setUsrInfo] = useState("");
  const usr = getCookie("user");
  const userData = JSON.parse(localStorage.getItem("user"));
  const { setUserInfo, setProfileInfo, userInfo } = useContext(MyContext);
  const [messageShown, setMessageShown] = useState(false);
  // const [isDisability, setIsDisability] = useState(false);
  const [aadharNo, setaadharNo] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleaadharNoChange = (event) => {
    const value = event.target.value;
    setaadharNo(value);
  };
  const validateAadhar = (aadhar) => {
    const d = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    ];

    const p = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
    ];

    const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

    const invArray = (array) => {
      if (typeof array === "number") {
        array = String(array);
      }

      if (typeof array === "string") {
        array = array.split("").map(Number);
      }

      return array.reverse();
    };

    const c = invArray(aadhar).reduce((acc, val, i) => {
      return d[acc][p[i % 8][val]];
    }, 0);

    return inv[c] === 0;
  };
  const handleAadharCheckClick = () => {
    const isValidAadhar = validateAadhar(aadharNo);
    if (isValidAadhar) {
      Notify("Success", "Valid Aadhar No");
    } else if (!isValidAadhar) {
      Notify("error", "Not Valid Aadhar No");
    }
    setValidationMessage(`Is Valid Aadhar Number: ${isValidAadhar}`);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    fname: "",
    gender: "",
    maritialStatus: "",
    state: "",
    cityOrVillage: "",
    domicile: "",
    pLanguage: "",
    middlename: "",
    mname: "",
    category: "",
    mobile: "",
    district: "",
    address: "",
    disablity: "",
    disablityType: "",
    disablityRemark: "",
    document: "",
    permanentAddress: "",
    lastname: "",
    email: userInfo.email,
    nationality: "",
    aadharNo: "",
    pincode: "",
    religion: "",
    identification: "",
    locationType: "",
  });

  useEffect(() => {
    if (userInfo) {
      setFormData({
        firstname: userInfo.firstname || "",
        fname: userInfo.fname || "",
        gender: userInfo.gender || "",
        maritialStatus: userInfo.maritialStatus || "",
        state: userInfo.state || "",
        cityOrVillage: userInfo.cityOrVillage || "",
        domicile: userInfo.domicile || "",
        pLanguage: userInfo.pLanguage || "",
        middlename: userInfo.middlename || "",
        mname: userInfo.mname || "",
        category: userInfo.category || "",
        mobile: userInfo.mobile || "",
        district: userInfo.district || "",
        address: userInfo.address || "",
        disablity: userInfo.disablity || "",
        disablityType: userInfo.disablityType || "",
        disablityRemark: userInfo.disablityRemark || "",
        permanentAddress: userInfo.permanentAddress || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || "",
        nationality: userInfo.nationality || "",
        aadharNo: userInfo.aadharNo || "",
        pincode: userInfo.pincode || "",
        religion: userInfo.religion || "",
        identification: userInfo.identification || "",
        locationType: userInfo.locationType || "",
      });
    }
  }, [userInfo]);
  const onFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (usr !== null) {
        try {
          const resData = await getData(
            `${process.env.REACT_APP_BASE_URL}/api/v1/user/info/${userData.emailID}`
          );
          if (resData) {
            setUserInfo(resData);
            await setProfileInfo(resData);
            if (resData.aadharNo) {
              setaadharNo(resData.aadharNo);
            }
            setUserInfo(resData);
            // Notify("info", "Wait To Retrive Data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [setUserInfo, setProfileInfo, usr, userData.emailID]);

  useEffect(() => {
    const handleFormSubmitOnce = async () => {
      if (saveInfo === true && !messageShown) {
        const fData = new FormData();
        for (const key in formData) {
          if (key !== "document") {
            fData.append(key, formData[key]);
          }
        }
        console.log(aadharNo);
        fData.append("aadharNo", aadharNo);
        console.log(fData);
        const Authorization = localStorage.getItem("token");
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/user/new-user/info/${userInfo.email}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${Authorization}`,
            },
            body: fData,
          }
        );

        if (res.status === 200) {
          Notify("success", "Personal Data Saved Successfully");
          // alert("Personal Info Saved Successfully");
          setMessageShown(true);
        }
      }
    };

    handleFormSubmitOnce();
  }, [saveInfo, formData, userInfo.email, messageShown]);

  const handleDisabilityChange = (event) => {
    const value = event.target.value === "true";
    // setIsDisability(value);

    if (value) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
    handleInputChange("isDisability", value);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCategoryChange = (event) => {
    handleInputChange("category", event.target.value);
  };

  const handleMaritalStatus = (event) => {
    handleInputChange("maritialStatus", event.target.value);
  };

  const handleNationalityChange = (event) => {
    handleInputChange("nationality", event.target.value);
  };

  const handleReligionChange = (event) => {
    handleInputChange("religion", event.target.value);
  };

  const handleBelongToChange = (event) => {
    handleInputChange("locationType", event.target.value);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleGenderChange = (event) => {
    handleInputChange("gender", event.target.value);
  };

  return (
    <>
      <div className=" ">
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Firstname:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => onFormChange("firstname", e.target.value)}
            placeholder="Firstname"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Father:</label>
          <input
            type="text"
            name="father"
            value={formData.fname}
            onChange={(e) => onFormChange("fname", e.target.value)}
            placeholder="Father"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2 text-right mr-2">Gender :</label>

          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleGenderChange}
            value={formData.gender}
          >
            <option>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2 text-right mr-2">Maritial Status:</label>
          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleMaritalStatus}
            value={formData.maritialStatus}
          >
            <option>Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widows">Widows</option>
            <option value="Divorsed">Divorsed</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={(e) => onFormChange("state", e.target.value)}
            placeholder="State"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">City / Village:</label>
          <input
            type="text"
            name="city"
            value={formData.cityOrVillage}
            onChange={(e) => onFormChange("cityOrVillage", e.target.value)}
            placeholder="City / Village"
            className=" p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">State Of Domicile:</label>
          <input
            type="text"
            name="domicile"
            value={formData.domicile}
            onChange={(e) => onFormChange("domicile", e.target.value)}
            placeholder="State Of Domicile"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Prefered Language:</label>
          <input
            type="text"
            name="preferredLanguage"
            value={formData.pLanguage}
            onChange={(e) => onFormChange("pLanguage", e.target.value)}
            placeholder="Prefered Language"
            className=" p-2 border rounded-md"
          />
        </div>
      </div>
      <div className=" ">
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Middlename:</label>
          <input
            type="text"
            name="middlename"
            value={formData.middlename}
            onChange={(e) => onFormChange("middlename", e.target.value)}
            placeholder="Middlename"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4 ">
          <label className="w-full text-right mr-2">Mother:</label>
          <input
            type="text"
            name="mother"
            value={formData.mname}
            onChange={(e) => onFormChange("mname", e.target.value)}
            placeholder="Mother"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2 text-right mr-2">Category:</label>
          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleCategoryChange}
            value={formData.category}
          >
            <option>Select</option>
            <option value={"GEN"}>GEN</option>
            <option value={"ST"}>ST</option>
            <option value={"OBC"}>BC</option>
            <option value={"SC"}>SC</option>
            <option value={"EWS"}>EWS</option>
            <option value={"EBC"}>EBC</option>
            <option value={"OTHER"}>OTHER</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Mobile :</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => onFormChange("mobile", e.target.value)}
            placeholder="Mobile"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">District:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={(e) => onFormChange("district", e.target.value)}
            placeholder="District"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => onFormChange("address", e.target.value)}
            placeholder="Address"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2 text-right mr-2">Disablity :</label>
          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleDisabilityChange}
            value={formData.disablity && formData.disablity.toString()}
          >
            <option>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute bg-slate-400 text-white p-8 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Disability Information
              </h2>
              <div className="flex flex-row">
                <div className="mb-4 mr-2">
                  <label htmlFor="input1" className="block mb-1">
                    Disability Type:
                  </label>
                  <select
                    className="w-full p-2 border rounded-md text-black"
                    id="disabilityType"
                    name="disabilityType"
                    onChange={(e) =>
                      onFormChange("disabilityType", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="Visually Disabled">Visually Disabled</option>
                    <option value="Hearing Disabled">Hearing Disabled</option>
                    <option value="Orthopedically Disabled">
                      Orthopedically Disabled
                    </option>
                    <option value="Mentally Disabled/Multiple Disabled">
                      Mentally Disabled/Multiple Disabled
                    </option>
                  </select>
                </div>
                {/* <div className="mb-4 mr-2">
                  <label htmlFor="input2" className="block mb-1">
                    Disability Remark:
                  </label>
                  <input
                    type="text"
                    id="disabilityRemark"
                    value={formData.disablityRemark || ""}
                    onChange={(e) =>
                      onFormChange("disabilityRemark", e.target.value)
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div> */}
                <div className="mb-4">
                  <label htmlFor="input3" className="block mb-1">
                    If Any Certificate Document:
                  </label>
                  <input
                    type="file"
                    id="document"
                    className="p-1 border rounded-md"
                    onChange={(e) => onFormChange("document", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-lime-700 w-1/2"
                  onClick={handleModalClose}
                >
                  Save
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-48"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Permanent Address:</label>
          <input
            type="text"
            id="permanentAddress"
            value={formData.permanentAddress}
            onChange={(e) => onFormChange("permanentAddress", e.target.value)}
            placeholder="Permanent Address"
            className=" p-2 border rounded-md"
          />
        </div>
      </div>
      <div className=" ">
        <div className="flex items-center mb-4 ">
          <label className="w-full text-right mr-2">Lastname:</label>
          <input
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={(e) => onFormChange("lastname", e.target.value)}
            placeholder="Lastname"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">E-mail Id:</label>
          <input
            type="text"
            id="email"
            disabled
            value={formData.email || ""}
            onChange={(e) => onFormChange("email", e.target.value)}
            placeholder="E-mail Id"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4 ">
          <label className="w-1/2 text-right mr-2">Nationality:</label>

          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleNationalityChange}
            value={formData.nationality}
          >
            <option value="">Select</option>
            <option value="Indian">Indian</option>
            <option value="NRI">NRI</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Aadhar No:</label>
          <div className="flex items-center">
            <input
              type="text"
              id="aadharNo"
              value={aadharNo}
              onChange={handleaadharNoChange}
              onBlur={handleAadharCheckClick}
              placeholder="Aadhar No"
              className="p-2 border rounded-md mr-2"
            />
          </div>
          {/* {aadharNo && validationMessage && (
            <span>{validationMessage}</span>
          )} */}
        </div>

        <div className="flex items-center mb-4">
          <label className="w-full text-right mr-2">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={formData.pincode}
            onChange={(e) => onFormChange("pincode", e.target.value)}
            placeholder="Pincode"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4 ">
          <label className="w-1/2 text-right ">Religion:</label>
          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleReligionChange}
            value={formData.religion}
          >
            <option>Select</option>
            <option value={"Hindu"}>Hindu</option>
            <option value={"Muslim"}>Muslim</option>
            <option value={"Christian"}>Christian</option>
            <option value={"Buddhist"}>Buddhist</option>
            <option value={"Sikh"}>Sikh</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>
        <div className="flex items-center mb-4 ">
          <label className="w-full text-right mr-2">
            Identification marks:
          </label>
          <input
            type="text"
            id="identificationMarks"
            value={formData.identification}
            onChange={(e) => onFormChange("identification", e.target.value)}
            placeholder="Identification marks"
            className=" p-2 border rounded-md"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/2 text-right mr-2">
            Do you belong <br />
            to City/Town/Village:
          </label>
          <select
            className="w-60 p-2 border rounded-md"
            onChange={handleBelongToChange}
            value={formData.locationType}
          >
            <option>Select</option>
            <option value="City">City</option>
            <option value="Town">Town</option>
            <option value="Village">Village</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
