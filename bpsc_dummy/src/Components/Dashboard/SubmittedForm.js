import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../ContextApis/MyContext";

const SubmittedForm = () => {
  const { userInfo } = useContext(MyContext);
  const [appliedData, setAppliedData] = useState([]);

  useEffect(() => {
    const fetchAppliedData = async () => {
      try {
        const Authorization = localStorage.getItem("token");
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/vac-bps/getAll/${userInfo.username}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${Authorization}`,
            },
          }
        );

        if (response.status === 200) {
          const data = await response.json();
          setAppliedData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAppliedData();
  }, [userInfo]);

  return (
    <div className="mt-10 ml-10">
      <h1 className="text-3xl font-bold mb-4">Submitted Forms</h1>
      <table className="min-w-full bg-white border border-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-r border-black">
              Applied For
            </th>
            <th className="py-2 px-4 border border-r border-black w-1/4">
              Form Status
            </th>
            <th className="py-2 px-4">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedData.map((form, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-r border-black">
                {form.appliedFor}
              </td>
              <td className="py-2 px-4 border border-r border-black w-1/4">
                {form.isCompleted === "Y" ? "Approved" : "Pending"}
              </td>
              <td className="py-2 px-4">{form.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedForm;
