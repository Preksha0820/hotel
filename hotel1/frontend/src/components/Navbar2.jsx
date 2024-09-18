import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../public/data/logo2.png";

const Navbar2 = ({ color = "black" }) => {
  const [isLoggedIn] = useState(false); // removed setIsLoggedIn for now as it's not used
  const textColor = color === "white" ? "text-white" : "text-black"; // Use dynamic color for all text

  return (
    <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-10">
      {/* Logo and title */}
      <div className="flex items-center">
        <img src={logo} alt="Hotel Logo" className="w-20 h-20" />
        <span className={`font-bold text-lg ${textColor}`}>URBAN OASIS</span>
      </div>

      {/* Links */}
      <div className={`ml-auto flex items-center space-x-7 font-bold`}>
        <Link to="/" className={`hover:underline ${textColor}`}>
          Home
        </Link>
        <Link to="/AboutUs" className={`hover:underline ${textColor}`}>
          About Us
        </Link>
        <Link to="/Facilities" className={`hover:underline ${textColor}`}>
          Facilities
        </Link>
        <Link to="/RoomsPage" className={`hover:underline ${textColor}`}>
          Rooms
        </Link>
      </div>

      {/* Login/Signup Icon */}
      <div className="flex items-center ml-5">
        <Link to="/AuthPage" className={`hover:text-gray-300 px-4`}>
          <FaUser className={`text-xl ${textColor}`} />
        </Link>
        <span className={`ml-2 font-bold ${textColor}`}>
          {isLoggedIn ? (
            <Link to="/AuthPage" className={textColor}>
              Login
            </Link>
          ) : (
            <Link to="/AuthPage" className={textColor}>
              Sign Up
            </Link>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar2;
