import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";
import UploadModal from "../UploadModal";

const CandidateDocuments = () => {
  const { userInfo } = useContext(MyContext);

  const [uploadedFiles, setUploadedFiles] = useState({
    profileImage: null,
    signature: null,
    aadharDoc: null,
    domicileDoc: null,
    incomeProfDoc: null,
    castProfDoc: null,
    birthDoc: null,
    otherDoc: null,
  });

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      const newObj = {
        profileImage: userInfo.profileImage,
        signatureImage: userInfo.signature,
        aadharDoc: userInfo.aadharDoc,
        domicileDoc: userInfo.domicileDoc,
        incomeProfDoc: userInfo.incomeProfDoc,
        castProfDoc: userInfo.castProfDoc,
        birthDoc: userInfo.birthDoc,
        otherDoc: userInfo.otherDoc,
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
