import React from 'react';
import DashLayout from './DashLayout';
import PersonLogo from '../../Assets/person.png';

const Dashboard = (props) => {
  return (
    <DashLayout>
      <div className="container mx-auto py-8">
        {/* Page header */}
        <div>
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
    <div className="max-w-md bg-white rounded-lg flex justify-between p-8">
      <div>
        <img className="w-32 h-32 rounded-full mx-auto" src={PersonLogo} alt="Profile" />
        <div className="text-center mt-4">
          <div className="font-bold text-xl">John Doe</div>
          <p className="text-gray-700 text-base">Username: 123456</p>
          <p className="text-gray-700 text-base">Dob: 10/12/1999</p>
        </div>
      </div>
      <form className='w-1/2 flex'>
        <div className='flex flex-col w-full'>
          <div className="flex items-center mb-4 ">
            <label className="w-full text-right mr-2">Firstname:</label>
            <input type="text" value="Suraj Kumar" className="w-full p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">Middlename:</label>
            <input type="text" value="Lastname" className="w-2/3 p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">Lastname:</label>
            <input type="text" value="Lastname" className="w-full p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">E-mail ID:</label>
            <input type="text" value="Lastname" className="w-2/3 p-2 border rounded-md" />
          </div>
          {/* Add more fields similarly */}
        </div>
        <div className='flex flex-col w-1/2 ml-72'>
          <div className="flex items-center mb-4 ">
            <label className="w-full text-right mr-2">Firstname:</label>
            <input type="text" value="Suraj Kumar" className="w-full p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">Middlename:</label>
            <input type="text" value="Lastname" className="w-2/3 p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">Lastname:</label>
            <input type="text" value="Lastname" className="w-full p-2 border rounded-md" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-full text-right mr-2">E-mail ID:</label>
            <input type="text" value="Lastname" className="w-2/3 p-2 border rounded-md" />
          </div>
          {/* Add more fields similarly */}
        </div>
        <div>
          {/* Add additional fields or buttons */}
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
