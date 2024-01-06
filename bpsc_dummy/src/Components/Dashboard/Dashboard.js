import React from 'react';
import DashLayout from './DashLayout';
import PersonLogo from '../../Assets/person.png';

const Dashboard = (props) => {
  return (
    <DashLayout>
      <div className="container  p-9 ">
        {/* Page header */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <IDCard />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Statistic Cards */}
          {/* ... */}
        </div>

        {/* Quick Links Section */}
        {/* ... */}

        {/* Footer */}
        <footer className="text-center text-gray-500">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </DashLayout>
  );
};

const IDCard = () => {
  return (
    <div className="w-11/12  bg-white rounded-lg flex justify-between ">
      <div>
        <img className="w-48 h-32 rounded-full mx-auto" src={PersonLogo} alt="Profile" />
        <div className="text-center mt-4">
          <div className="font-bold text-xl">John Doe</div>
          <p className="text-gray-700 text-base">Username: 123456</p>
          <p className="text-gray-700 text-base">Dob: 10/12/1999</p>
        </div>
      </div>
      <div className=' container  '>
        <form className=' w-full flex '>
          <div className=' w-full'>
            <div className="flex items-center mb-4 ">
              <label className="w-1/2 text-right mr-2">Firstname:</label>
              <input type="text" value="Suraj Kumar" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">Middlename:</label>
              <input type="text" value="Lastname" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">Lastname:</label>
              <input type="text" value="Lastname" className="p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/2 text-right mr-2">E-mail ID:</label>
              <input type="text" value="Lastname" className="p-2 border rounded-md" />
            </div>
            {/* Add more fields similarly */}
          </div>

          <div className=' '>
            <div className="flex items-center mb-4 ">
              <label className="w-full text-right mr-2">Username:</label>
              <input type="text" value="Suraj Kumar" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Mobile:</label>
              <input type="text" value="Lastname" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Mother :</label>
              <input type="text" value="Lastname" className=" p-2 border rounded-md" />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-full text-right mr-2">Father:</label>
              <input type="text" value="Lastname" className=" p-2 border rounded-md" />
            </div>
            {/* Add more fields similarly */}
          </div>
        </form>

      </div>

    </div>
  );
};

export default Dashboard;
