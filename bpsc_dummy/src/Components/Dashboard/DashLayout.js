import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashLayout = (props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="ml-64 h-full overflow-y-auto px-4 py-8">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
