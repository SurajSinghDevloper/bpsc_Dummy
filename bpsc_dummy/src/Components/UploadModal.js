import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../ContextApis/MyContext";

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
        setFormData((prevFormData) => ({
          ...prevFormData,
          [keyName]: "",
        }));
      }
    })();
  };
  return conditionToShow ? (
    <div className="flex flex-row">
      <a
        className="cursor-pointer my-auto ml-2"
        href={`${process.env.REACT_APP_BASE_URL}/api/files/view/${fileToView}`}
        target="_blank"
        rel="noreferrer"
      >
        View Document
      </a>
      <div
        className="ml-2 my-auto cursor-pointer"
        name="section2f"
        onClick={() => handleDocDelete(fileToDelete)}
      >
        <FontAwesomeIcon icon={faTrash} className="text-lg mr-2" />
      </div>
    </div>
  ) : (
    <label
      className="custom-file-upload border  bg-gradient-to-br from-slate-100 to-slate-200
        text-black/80
        rounded-md
        cursor-pointer
        shadow-xl shadow-slate-300/60 p-2"
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
