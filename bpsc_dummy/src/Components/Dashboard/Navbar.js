import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <nav className="bg-blue-500 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img className="w-60 h-7 pr-2 pl-2 " src={logo} alt="" />

        {/* Navbar links */}
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLogout} className="hover:text-gray-300">
              Log-Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
