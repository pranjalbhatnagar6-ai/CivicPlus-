import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <div className="logo-icon">
          <FaLocationDot />
        </div>

        <div className="logo-text">
          <h2>CivicPlus+</h2>
          <p>Smart City Management</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">How It Works</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;