import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import RoomsPage from "./pages/RoomsPage";
import Booking from "./components/Booking";
import Facilities from "./pages/Facilities";
import AuthPage from "./pages/AuthPage";
import Navbar2 from "./components/Navbar2";
import "./index.css"; // Tailwind's CSS file

function App() {
  return (
    <>
      {/* Render Navbar on all pages */}
    

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/RoomsPage" element={<RoomsPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
