import React, { useState } from "react";
import vid from "../../public/data/Auth/vid.mp4";
import insta from "../../public/data/Auth/insta.jpg";
import fb from "../../public/data/Auth/fb.jpg";
import tw from "../../public/data/Auth/twitter.jpg";
import go from "../../public/data/Auth/google.jpg";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [isAdminLogin, setIsAdminLogin] = useState(false); // Toggle between User and Admin Login
  const navigate=useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleLoginType = (isAdmin) => {
    setIsAdminLogin(isAdmin); // Switch between User and Admin login
  };

  const adminLogger=()=>{
    if(isAdminLogin){
      navigate('/admin');
    }
  }

  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen flex">
        {/* Left Side: Authentication Options */}
        <div className="w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
          <div className="form-container bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto text-center">
            {isLogin ? (
              <>
                <h2 className="text-xl font-bold mb-4">Login</h2>

                {/* Buttons to switch between User and Admin login */}
                <div className="flex justify-center mb-4">
                  <button
                    className={`px-4 py-2 mx-2 ${
                      !isAdminLogin ? "bg-blue-500 text-white" : "bg-gray-300"
                    } rounded-lg`}
                    onClick={() => toggleLoginType(false)}
                  >
                    User Login
                  </button>
                  <button
                    className={`px-4 py-2 mx-2 ${
                      isAdminLogin ? "bg-blue-500 text-white" : "bg-gray-300"
                    } rounded-lg`}
                    onClick={() => toggleLoginType(true)}
                  >
                    Admin Login
                  </button>
                </div>

                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder={`Enter your ${
                        isAdminLogin ? "admin" : "user"
                      } email`}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={adminLogger}>
                    {isAdminLogin ? "Admin Login" : "User Login"}
                  </button>
                </form>

                <p className="mt-4">
                  Don't have an account?{" "}
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={toggleForm}
                  >
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg">
                    Sign Up
                  </button>
                </form>

                <p className="mt-4">
                  Already have an account?{" "}
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={toggleForm}
                  >
                    Login
                  </button>
                </p>
              </>
            )}
          </div>

          {/* Authentication Links */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
            >
              <img src={go} alt="Google" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
            >
              <img src={fb} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
            >
              <img src={tw} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full"
            >
              <img src={insta} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="w-1/2 flex items-center justify-center relative">
          <video
            src={vid} // Update path to your video file
            autoPlay
            loop
            muted
            className="absolute right-0 w-full h-[80vh] object-cover rounded-l-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
