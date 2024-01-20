import React from "react";

const EventList = ({ setActivePage }) => {
  return (
    <>
      <div className=" mt-10 p-1 ">
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
                FormCriteria Last Date
              </td>
              <td className="border border-r border-black">Read Information</td>
              <td className="border border-r border-black">
                Download Advertisment
              </td>
              <td className=" p-2">Apply </td>
            </tr>
          </thead>
          <tbody className=" border border-black">
            <tr className="border border-black">
              <td className="border border-r border-black text-center">1</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-r border-black text-center">2</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-r border-black text-center">3</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-r border-black text-center">4</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-r border-black text-center">5</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-r border-black text-center">6</td>
              <td className="border border-r border-black text-center">
                00210
              </td>
              <td className="border border-r border-black text-center">
                Vacany for Kala yua aayog
              </td>
              <td className="border border-r border-black text-center">
                23/1/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                23/2/2024
              </td>
              <td className="border border-r border-black text-center">
                Read More...
              </td>
              <td className="border border-r border-black text-center">
                View Doc
              </td>
              <td
                className="bg-green-400 text-white p-2 cursor-pointer font-bold"
                onClick={() => setActivePage("FormCriteria")}
              >
                Apply To Form
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventList;
