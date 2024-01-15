import React, { useState } from "react";
import Sidebar from './Sidebar'
import Container from './Container'
const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  
  return (
    <div className="w-full">
      <Sidebar setActivePage={setActivePage} />
      <Container activePage={activePage} />
    </div>
  );
};

export default Dashboard;