import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaUsers,
  FaClone,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBell,
  FaQuestionCircle,
} from "react-icons/fa";

import BrandLogo from "./BrandLogo";
import "./StaffAdminLayout.css";

export default function StaffAdminLayout({ children, activeTab = "dashboard" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="staff-admin-shell">
      {/* Sidebar matching PPT Pages 12-17 */}
      <aside className="staff-sidebar-fixed">
        <div className="staff-sidebar-brand">
          <BrandLogo to="/staff/dashboard" subtitle="Admin Console" size="md" />
        </div>

        <nav className="staff-nav-list">
          <NavLink
            to="/staff/dashboard"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
            end
          >
            <FaThLarge />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/staff/complaints"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
          >
            <FaExclamationTriangle />
            <span>Complaints</span>
          </NavLink>

          <NavLink
            to="/staff/map"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
          >
            <FaMapMarkedAlt />
            <span>Map View</span>
          </NavLink>

          <NavLink
            to="/staff/workers"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
          >
            <FaUsers />
            <span>Workers</span>
          </NavLink>

          <NavLink
            to="/staff/clusters"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
          >
            <FaClone />
            <span>Duplicate Clusters</span>
          </NavLink>

          <NavLink
            to="/staff/analytics"
            className={({ isActive }) => `staff-nav-item ${isActive ? "active" : ""}`}
          >
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </nav>

        <div className="staff-sidebar-footer">
          <button
            type="button"
            className="staff-nav-item"
            style={{ background: "none", border: "none", width: "100%", cursor: "pointer" }}
            onClick={() => alert("Municipal settings: Ward 12 configuration loaded")}
          >
            <FaCog />
            <span>Settings</span>
          </button>

          <button
            type="button"
            className="staff-nav-item"
            style={{ background: "none", border: "none", width: "100%", color: "#dc2626", cursor: "pointer" }}
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="staff-main-wrap">
        {/* Topbar matching PPT Pages 12-17 */}
        <header className="staff-topbar">
          <div className="staff-search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search complaints, IDs, or locations..."
              className="staff-search-input"
            />
          </div>

          <div className="staff-topbar-right">
            <button type="button" className="clean-icon-btn" title="Help & Docs">
              <FaQuestionCircle />
            </button>

            <button type="button" className="clean-icon-btn notification-btn" title="Alerts">
              <FaBell />
              <span className="bell-badge" />
            </button>

            <div className="staff-avatar-box" title="Admin Profile">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Municipal Administrator"
              />
            </div>
          </div>
        </header>

        <main className="staff-page-container">
          {children}
        </main>
      </div>
    </div>
  );
}
