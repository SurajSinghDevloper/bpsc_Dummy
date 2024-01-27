import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../ContextApis/MyContext";
import { Notify } from "../Configuration/Notify";

const UploadModal = ({
  conditionToShow,
  fileToView,
  keyName,
  fileToDelete,
  setFormData,
  uploadUrl,
  deleteUrl,
  idToDelete,
}) => {
  const { userInfo } = useContext(MyContext);

  const handleDocUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    console.log(keyName);
    formData.append("pdf", file);
    formData.append("documentType", keyName);
    formData.append("username", userInfo.username);
    const Authorization = localStorage.getItem("token");
    const response = await fetch(process.env.REACT_APP_BASE_URL + uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Authorization}`,
      },
      body: formData,
    });
    if (response.status === 200) {
      const resText = await response.text();
      Notify("success", "Document Uploaded Successfully");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [keyName]: resText,
      }));
    }
  };

  const handleDocDelete = () => {
    (async () => {
      const formData = new FormData();
      formData.append("docId", idToDelete);
      formData.append("documentType", keyName);
      formData.append("filename", fileToView);
      const Authorization = localStorage.getItem("token");
      const response = await fetch(process.env.REACT_APP_BASE_URL + deleteUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
        body: formData,
      });
      if (response.status === 200) {
        Notify("warning", "Document Deleted Successfully");
        setFormData((prevFormData) => ({
          ...prevFormData,
          [keyName]: "",
        }));
      }
    })();
  };
  return conditionToShow ? (
    <div className="flex flex-row space-x-7">
      <a
        className="cursor-pointer my-auto ml-2 w-4/8  bg-green-600 text-white p-1 rounded-lg"
        href={`${process.env.REACT_APP_BASE_URL}/api/files/view/${fileToView}`}
        target="_blank"
        rel="noreferrer"
      >
        View Document
      </a>
      <div
        className="cursor-pointer w-1/5 bg-red-600 text-white p-1 rounded-lg mr-2"
        name="section2f"
        onClick={() => handleDocDelete(fileToDelete)}
      >
        <FontAwesomeIcon icon={faTrash} className="text-lg mr-2" />
        Delete File
      </div>
    </div>
  ) : (
    <label
      className="custom-file-upload border  bg-gradient-to-br from-slate-100 to-slate-200
        text-black/80
        rounded-md
        cursor-pointer
        shadow-xl shadow-slate-300/60 p-1"
      title={conditionToShow ? fileToView : ""}
      onChange={(e) => handleDocUpload(e)}
    >
      <input
        type="file"
        id="fileInput"
        name="fileInput"
        accept=".pdf"
        style={{ display: "none" }}
      />
      Upload File
    </label>
  );
};

export default UploadModal;
