import React from "react";

const VacancyInfoPage = ({ isOpen, closeModal, moreInfoContent }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";
  return (
    <div className={`${modalClasses} bg-black bg-opacity-50`}>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">More Information</h2>
        <p>{moreInfoContent}</p>
        <SeatTable />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
const SeatTable = () => {
  return (
    <>
      <table>
        <thead className="border border-r border-black ">
          <tr>
            <td className=" border border-r border-black  font-semibold">
              Sl. No
            </td>
            <td className=" border border-r border-black  font-semibold">
              Category
            </td>
            <td className=" border border-r border-black font-semibold">
              Total No of Permisible seat
            </td>
            <td className=" border border-r border-black  font-semibold">
              No of Permisible seats For women according to 35% regional
              reservation
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" border border-r border-black text-center">1. </td>
            <td className=" border border-r border-black text-center">
              General Category
            </td>
            <td className=" border border-r border-black text-center">07</td>
            <td className=" border border-r border-black text-center">03</td>
          </tr>

          <tr>
            <td className=" border border-r border-black text-center">2. </td>
            <td className=" border border-r border-black text-center">
              EWS Category
            </td>
            <td className=" border border-r border-black text-center">02</td>
            <td className=" border border-r border-black text-center">00</td>
          </tr>
          <tr>
            <td className=" border border-r border-black text-center">3. </td>
            <td className=" border border-r border-black text-center">
              SC Category
            </td>
            <td className=" border border-r border-black text-center">03</td>
            <td className=" border border-r border-black text-center">01</td>
          </tr>
          <tr>
            <td className=" border border-r border-black text-center">4. </td>
            <td className=" border border-r border-black text-center">
              ST Category
            </td>
            <td className=" border border-r border-black text-center">00</td>
            <td className=" border border-r border-black text-center">00</td>
          </tr>
          <tr>
            <td className=" border border-r border-black text-center">5. </td>
            <td className=" border border-r border-black text-center">
              EBC Category
            </td>
            <td className=" border border-r border-black text-center">03</td>
            <td className=" border border-r border-black text-center">01</td>
          </tr>
          <tr>
            <td className=" border border-r border-black text-center">6. </td>
            <td className=" border border-r border-black text-center">
              BC Category
            </td>
            <td className=" border border-r border-black text-center">02</td>
            <td className=" border border-r border-black text-center">01</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default VacancyInfoPage;
