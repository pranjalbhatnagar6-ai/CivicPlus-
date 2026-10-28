import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCamera,
  FaClipboardList,
  FaUsers,
  FaUserCircle,
  FaGlobe,
  FaBell,
  FaLeaf,
} from "react-icons/fa";

import BrandLogo from "./BrandLogo";
import "./CitizenNav.css";

export default function CitizenNav({ activeItem = "home" }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Bar for Citizen Portal */}
      <header className="citizen-portal-topbar">
        <div className="topbar-brand-area">
          <BrandLogo to="/citizen/dashboard" subtitle="Civic Engagement" size="md" />
          <span className="user-greeting-tag">Hi, Siddhant</span>
        </div>

        <div className="topbar-actions-area">
          <button type="button" className="clean-icon-btn" aria-label="Select Language">
            <FaGlobe />
          </button>

          <button type="button" className="clean-icon-btn notification-btn" aria-label="Notifications">
            <FaBell />
            <span className="bell-badge" />
          </button>

          <Link to="/citizen/profile" className="citizen-avatar-link" title="My Profile">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Siddhant"
              className="citizen-avatar-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Siddhant+J&background=08775e&color=fff";
              }}
            />
          </Link>
        </div>
      </header>

      {/* Left Sidebar (Desktop) */}
      <aside className="citizen-desktop-sidebar">
        <div className="sidebar-brand-header">
          <BrandLogo to="/citizen/dashboard" subtitle="Civic Engagement" size="md" />
        </div>

        <nav className="citizen-sidebar-links">
          <NavLink
            to="/citizen/dashboard"
            className={({ isActive }) => `sidebar-link-btn ${isActive ? "active" : ""}`}
            end
          >
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/citizen/report"
            className={({ isActive }) => `sidebar-link-btn ${isActive ? "active" : ""}`}
          >
            <FaCamera />
            <span>Report</span>
          </NavLink>

          <NavLink
            to="/citizen/complaints"
            className={({ isActive }) => `sidebar-link-btn ${isActive ? "active" : ""}`}
          >
            <FaClipboardList />
            <span>My Complaints</span>
          </NavLink>

          <NavLink
            to="/citizen/community"
            className={({ isActive }) => `sidebar-link-btn ${isActive ? "active" : ""}`}
          >
            <FaUsers />
            <span>Community</span>
          </NavLink>

          <NavLink
            to="/citizen/profile"
            className={({ isActive }) => `sidebar-link-btn ${isActive ? "active" : ""}`}
          >
            <FaUserCircle />
            <span>Profile</span>
          </NavLink>
        </nav>
      </aside>

      {/* Bottom Floating App Bar (Mobile) */}
      <nav className="citizen-bottom-nav" aria-label="Mobile Navigation">
        <NavLink to="/citizen/dashboard" className={({ isActive }) => `bottom-tab ${isActive ? "active" : ""}`} end>
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/citizen/report" className={({ isActive }) => `bottom-tab ${isActive ? "active" : ""}`}>
          <FaCamera />
          <span>Report</span>
        </NavLink>
        <NavLink to="/citizen/complaints" className={({ isActive }) => `bottom-tab ${isActive ? "active" : ""}`}>
          <FaClipboardList />
          <span>My Complaints</span>
        </NavLink>
        <NavLink to="/citizen/community" className={({ isActive }) => `bottom-tab ${isActive ? "active" : ""}`}>
          <FaUsers />
          <span>Community</span>
        </NavLink>
        <NavLink to="/citizen/profile" className={({ isActive }) => `bottom-tab ${isActive ? "active" : ""}`}>
          <FaUserCircle />
          <span>Profile</span>
        </NavLink>
      </nav>
    </>
  );
}
