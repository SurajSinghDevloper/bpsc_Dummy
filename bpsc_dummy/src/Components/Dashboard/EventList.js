import React, { useContext, useEffect, useState } from "react";
import VacancyInfoPage from "../VacancyInfoPage";
import { MyContext } from "../../ContextApis/MyContext";
import { Notify } from "../../Configuration/Notify";

const EventList = ({ setActivePage }) => {
  const { setSelectedVacancy, userInfo } = useContext(MyContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [moreInfoContent, setMoreInfoContent] = useState("");
  const [vacancies, setVacancies] = useState([]);
  // console.log(vacancies);

  const openModal = (content) => {
    setMoreInfoContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getVacancies = async () => {
    const Authorization = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/vac-bps/found`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      setVacancies(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getVacancies();
  }, []);

  const handleApplyClick = (index) => {
    // You can access the vacancy detail using vacancies[index]
    const selectedVacancy = vacancies[index];
    // Now you have the selected vacancy data, you can perform further actions
    console.log("Selected Vacancy:", selectedVacancy);

    setSelectedVacancy(selectedVacancy);
    if (!vacancies[index].criteria) {
      createFormCriteria(index);
      setActivePage("FormCriteria");
    } else {
      // alert("Already Applied");
      setActivePage("FormCriteria");
    }
  };

  const createFormCriteria = async (index) => {
    const Authorization = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("advertismentNumber", vacancies[index].advertismentNumber);
    formData.append("nameOfExam", vacancies[index].nameOfExam);
    formData.append("formOpening", vacancies[index].formOpening);
    formData.append("formClosing", vacancies[index].formClosing);
    formData.append("lastPaymentDate", vacancies[index].lastPaymentDate);
    formData.append("seatForVacancy", vacancies[index].seatForVacancy);
    formData.append("feesOfVacancy", vacancies[index].feesOfVacancy);
    formData.append("totalSeats", vacancies[index].totalSeats);
    formData.append("reservedSeats", vacancies[index].reservedSeats);
    formData.append("vacancyType", vacancies[index].vacancyType);
    formData.append("userName", userInfo.username);
    formData.append("slno", vacancies[index].slno);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/vac-bps/create-criteria`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Authorization}`,
        },
        body: formData,
      }
    );
    if (response.status === 201 || 200) {
      const data = await response.json();
      Notify("success", "Data Saved Successfully");
      setVacancies(data);
      console.log(data);
    } else if (response.status === 409) {
      alert("already Applied");
    }
  };

  return (
    <>
      <div className="mt-10 p-1">
        <table className="table w-full border border-black p-2">
          <thead className="bg-slate-300  border border-r border-black">
            <tr className="border border-black">
              <td className="border border-r border-black">Sl. No</td>
              <td className="border border-r border-black">
                Advertisment Number
              </td>
              <td className="border border-r border-black">
                Name of the Examination
              </td>
              <td className="border border-r border-black">Form Opening</td>
              <td className="border border-r border-black">Form Closing</td>
              <td className="border border-r border-black">
                Payment Last Date
              </td>
              <td className="border border-r border-black">Read Information</td>
              <td className="border border-r border-black">
                Download Advertisment
              </td>
              <td className="p-2">Apply</td>
            </tr>
          </thead>
          <tbody className="border border-black">
            {vacancies.map((vacancy, index) => (
              <tr key={index} className="border border-black">
                <td className="border border-r border-black text-center">
                  {index + 1}
                </td>
                <td className="border border-r border-black text-center">
                  {vacancy.advertismentNumber}
                </td>
                <td className="border border-r border-black text-center">
                  {vacancy.nameOfExam}
                </td>
                <td className="border border-r border-black text-center">
                  {vacancy.formOpening}
                </td>
                <td className="border border-r border-black text-center">
                  {vacancy.formClosing}
                </td>
                <td className="border border-r border-black text-center">
                  {vacancy.lastPaymentDate}
                </td>
                <td className="border border-r border-black text-center">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      openModal(`Read more about ${vacancy.nameOfExam}`)
                    }
                  >
                    Read More...
                  </button>
                </td>
                <td className="border border-r border-black text-center">
                  View Doc
                </td>
                <td
                  className="bg-green-400 text-white text-center p-2 cursor-pointer font-bold"
                  onClick={() => handleApplyClick(index)}
                >
                  {vacancies[index].criteria ? (
                    <p>View </p>
                  ) : (
                    <p>Apply To Form</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <VacancyInfoPage
          isOpen={modalIsOpen}
          closeModal={closeModal}
          moreInfoContent={moreInfoContent}
        />
      </div>
    </>
  );
};

export default EventList;
