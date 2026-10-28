import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" style={{ textDecoration: "none" }}>
        <div className="logo-icon">
          <FaLocationDot />
        </div>

        <div className="logo-text">
          <h2>CivicPlus+</h2>
          <p>Smart City Management</p>
        </div>
      </Link>

      {/* Navigation */}
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          About
        </NavLink>
        <NavLink
          to="/how-it-works"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          How It Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;