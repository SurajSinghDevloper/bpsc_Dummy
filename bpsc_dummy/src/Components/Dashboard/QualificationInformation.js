import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import UploadModal from "../UploadModal";
import { Notify } from "../../Configuration/Notify";

const QualificationInformation = ({ handleFormSubmit }) => {
  const { userInfo } = useContext(MyContext);
  const [qualificationInfoId, setQualificationInfoId] = useState("");
  const [messageShown, setMessageShown] = useState(false);
  const [qualificationData, setQualificationData] = useState({
    10: { name: "10", specialization: "", school: "", marks: "", year: "" },
    12: { name: "12", specialization: "", school: "", marks: "", year: "" },
    UG: { name: "UG", specialization: "", school: "", marks: "", year: "" },
    PG: { name: "PG", specialization: "", school: "", marks: "", year: "" },
    OTHER: {
      name: "OTHER",
      specialization: "",
      school: "",
      marks: "",
      year: "",
    },
  });
  const [uploadedFiles, setUploadedFiles] = useState({
    tenthDoc: "",
    twelethDoc: "",
    ugDoc: "",
    pgDoc: "",
    otherDoc: "",
  });
  useEffect(() => {
    if (userInfo && userInfo.qualificationDoc) {
      const updatedInfo = {
        tenthDoc: userInfo.qualificationDoc.tenthDoc || "",
        twelethDoc: userInfo.qualificationDoc.twelethDoc || "",
        ugDoc: userInfo.qualificationDoc.ugDoc || "",
        pgDoc: userInfo.qualificationDoc.pgDoc || "",
        otherDoc: userInfo.qualificationDoc.otherDoc || "",
      };
      setQualificationInfoId(userInfo.qualificationDoc.qualificationId);
      setUploadedFiles(updatedInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo.qualificationType && userInfo.qualificationType.length > 0) {
      const initialQualificationData = {};

      userInfo.qualificationType.forEach(
        ({ qualificationId, name, specialization, school, marks, year }) => {
          initialQualificationData[qualificationId] = {
            name: name,
            specialization: specialization,
            school: school,
            marks: marks,
            year: year,
          };
        }
      );

      setQualificationData(initialQualificationData);
    }
  }, [userInfo.qualificationType]);

  const handleQualificationChange = (key, field, event) => {
    setQualificationData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        [field]: event.target.value,
      },
    }));
  };

  // let isFormSubmitHandled = false;

  // if (handleFormSubmit === true && !isFormSubmitHandled) {
  //   isFormSubmitHandled = true;
  //   const handleUserQuali = async () => {
  //     const requestData = Object.values(qualificationData).map(
  //       ({ name, specialization, school, marks, year }) => ({
  //         name,
  //         specialization,
  //         school,
  //         marks,
  //         year,
  //       })
  //     );

  //     try {
  //       const Authorization = localStorage.getItem("token");
  //       const response = await fetch(
  //         `${process.env.REACT_APP_BASE_URL}/api/qualification-types/qualification?username=${userInfo.username}`,
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${Authorization}`,
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(requestData),
  //         }
  //       );
  //       if (response.ok) {
  //         Notify("success", "Data Saved Successfully");
  //         console.log(response);
  //       } else {
  //         Notify("error", "Somthing Went Wrong");
  //         console.error("API request failed");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   handleUserQuali();
  // }

  useEffect(() => {
    const handleFormSubmitOnce = async () => {
      if (handleFormSubmit === true && !messageShown) {
        const handleUserQuali = async () => {
          const requestData = Object.values(qualificationData).map(
            ({ name, specialization, school, marks, year }) => ({
              name,
              specialization,
              school,
              marks,
              year,
            })
          );

          try {
            const Authorization = localStorage.getItem("token");
            const response = await fetch(
              `${process.env.REACT_APP_BASE_URL}/api/qualification-types/qualification?username=${userInfo.username}`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${Authorization}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
              }
            );
            if (response.ok) {
              Notify("success", "Data Saved Successfully");
              console.log(response);
              setMessageShown(true);
            } else {
              Notify("error", "Something Went Wrong");
              console.error("API request failed");
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };

        await handleUserQuali();
      }
    };

    handleFormSubmitOnce();
  }, [handleFormSubmit, qualificationData, userInfo, messageShown]);

  return (
    <>
      <table className="w-full">
        <thead className="border ">
          <tr>
            <td className="text-lg border text-center">Qualification Name</td>
            <td className="text-lg border text-center">
              Qualification <br /> (Specialization)
            </td>
            <td className="text-lg border text-center">
              Name of School <br />
              University
            </td>
            <td className="text-lg border text-center">Marks Score %</td>
            <td className="text-lg border text-center">Year of Completion</td>
          </tr>
        </thead>
        <tbody className="mt-2">
          {Object.keys(qualificationData).map((key) => (
            <tr key={key} className="border p-2">
              <td className="border p-2">
                <input
                  type="text"
                  className="text-center"
                  value={qualificationData[key].name}
                  readOnly
                />
              </td>
              <td className="border">
                <input
                  type="text"
                  className="w-full"
                  value={qualificationData[key].specialization}
                  onChange={(e) =>
                    handleQualificationChange(key, "specialization", e)
                  }
                />
              </td>
              <td className="border">
                <input
                  type="text"
                  className="w-full"
                  value={qualificationData[key].school}
                  onChange={(e) => handleQualificationChange(key, "school", e)}
                />
              </td>
              <td className="border">
                <input
                  type="number"
                  className="w-full"
                  value={qualificationData[key].marks}
                  onChange={(e) => handleQualificationChange(key, "marks", e)}
                />
              </td>
              <td className="border">
                <input
                  type="date"
                  className="w-full"
                  value={qualificationData[key].year}
                  onChange={(e) => handleQualificationChange(key, "year", e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container">
        <div className="bg-slate-200">
          <h3 className="text-2xl text-center text-gray-500 p-2">
            Accademic Documents
          </h3>
          <hr className="w-11/12 ml-12 text-center" />
        </div>
        <div>
          <table className="w-full">
            <thead className="border">
              <tr>
                <td className="text-lg border text-center">
                  Qualification Name
                </td>
                <td className="text-lg border text-center">
                  Marks Sheet Upload In only PDF
                </td>
              </tr>
            </thead>
            <tbody className="mt-2">
              {Object.keys(uploadedFiles).map((ele, key) => (
                <tr key={key} className="border p-2">
                  <td className="border p-3">
                    <input
                      type="text"
                      className="text-center"
                      value={ele}
                      readOnly
                    />
                  </td>
                  <td className="border">
                    <UploadModal
                      conditionToShow={uploadedFiles[ele]}
                      fileToView={uploadedFiles[ele]}
                      keyName={ele}
                      formdata={uploadedFiles}
                      setFormData={setUploadedFiles}
                      uploadUrl={"/api/qualification-types/save"}
                      deleteUrl={"/api/qualification-types/remove-file"}
                      idToDelete={qualificationInfoId}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default QualificationInformation;
