import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import UploadModal from "../UploadModal";

const CandidateDocuments = () => {
  const { userInfo } = useContext(MyContext);

  const [uploadedFiles, setUploadedFiles] = useState({
    "Photo Of Candidate": null,
    "Signature Of Candidate": null,
    "Aadhar Card": null,
    "Domicile Certificate": null,
    "Income Certificate": null,
    "Cast Certificate": null,
    "Birt Certificate": null,
    "Other Relivant Doc": null,
  });

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      const newObj = {
        "Photo Of Candidate": userInfo.profileImage,
        "Signature Of Candidate": userInfo.signature,
        "Aadhar Card": userInfo.aadharDoc,
        "Domicile Certificate": userInfo.domicileDoc,
        "Income Certificate": userInfo.incomeProfDoc,
        "Cast Certificate": userInfo.castProfDoc,
        "Birt Certificate": userInfo.birthDoc,
        "Other Relivant Doc": userInfo.otherDoc,
      };
      setUploadedFiles(newObj);
    }
  }, [userInfo]);

  return (
    <>
      <table className="w-full">
        <thead className="border">
          <tr>
            <td className="text-lg border text-center">Documents</td>
            <td className="text-lg border text-center">
              Upload Document in PDF
            </td>
          </tr>
        </thead>
        <tbody className="mt-2">
          {Object.keys(uploadedFiles).map((ele, key) => (
            <tr key={key} className="border">
              <td className="text-lg border text-center w-2/5">{ele}</td>
              <td className="border w-2/5 p-2">
                <UploadModal
                  conditionToShow={uploadedFiles[ele]}
                  fileToView={uploadedFiles[ele]}
                  keyName={ele}
                  formdata={uploadedFiles}
                  setFormData={setUploadedFiles}
                  uploadUrl={"/api/v1/user/save-doc"}
                  deleteUrl={"/api/v1/user/remove-file"}
                  idToDelete={userInfo.slno}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CandidateDocuments;
