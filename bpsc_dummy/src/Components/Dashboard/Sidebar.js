import React from "react";

const Sidebar = ({ setActivePage }) => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Sidebar header */}
      <div className="p-4 bg-blue-500">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      {/* Sidebar links */}
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Dashboard')}>Dashboard</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Event List')}>Event List</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Submitted Form')}>Submitted Form</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Payment')}>Payment</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Admit-Card')}>Admit-Card</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Submitted Form Status')}>Submitted Form Status </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('Help')}>Help </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => setActivePage('FAQs')}>FAQ's </li>
        {/* ... Add more sidebar links */}
      </ul>

      {/* Sidebar footer */}
      <div className="absolute bottom-0 w-full py-4">
        <p className="text-center text-gray-500">© 2024 Company Name</p>
      </div>
    </div>
  );
};


export default Sidebar;