
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLeaf,
  FaThLarge,
  FaClipboardList,
  FaMapMarkerAlt,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaSearch,
  FaBell,
  FaBars,
  FaCheckCircle,
  FaClock,
  FaSyncAlt,
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./CitizenDashboard.css";

const initialReports = [
  {
    id: "CP-1024",
    title: "Garbage near main road",
    location: "Sector 12, Main Road",
    date: "24 Oct 2026",
    status: "Pending",
  },
  {
    id: "CP-1023",
    title: "Overflowing dustbin",
    location: "Central Market",
    date: "23 Oct 2026",
    status: "In Progress",
  },
  {
    id: "CP-1022",
    title: "Waste collection completed",
    location: "Green Park, Block B",
    date: "21 Oct 2026",
    status: "Resolved",
  },
  {
    id: "CP-1021",
    title: "Garbage near public park",
    location: "City Park, Gate 2",
    date: "20 Oct 2026",
    status: "Resolved",
  },
];

function CitizenDashboard() {
  const navigate = useNavigate();
  const [reports] = useState(initialReports);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const counts = {
    total: reports.length,
    pending: reports.filter((r) => r.status === "Pending").length,
    progress: reports.filter((r) => r.status === "In Progress").length,
    resolved: reports.filter((r) => r.status === "Resolved").length,
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      `${report.id} ${report.title} ${report.location}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  const logout = () => navigate("/");

  return (
    <div className="citizen-app">
      <aside className={`citizen-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="citizen-brand">
          <span className="citizen-brand-icon">
            <FaLeaf />
          </span>
          <span>CivicPlus<span className="brand-plus">+</span></span>
        </div>

        <p className="sidebar-label">MAIN MENU</p>

        <nav className="sidebar-nav">
          <a href="#dashboard" className="sidebar-link active">
            <FaThLarge /> <span>Dashboard</span>
          </a>
          <a href="#reports" className="sidebar-link">
            <FaClipboardList /> <span>My Reports</span>
          </a>
          <a href="#reports" className="sidebar-link">
            <FaMapMarkerAlt /> <span>Track Complaints</span>
          </a>
        </nav>

        <p className="sidebar-label account-label">ACCOUNT</p>

        <nav className="sidebar-nav">
          <a href="#profile" className="sidebar-link">
            <FaUserCircle /> <span>My Profile</span>
          </a>
          <a href="#settings" className="sidebar-link">
            <FaCog /> <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <FaLeaf />
            <strong>Keep your city clean!</strong>
            <p>Your small action makes a big difference.</p>
          </div>

          <button className="sidebar-logout" onClick={logout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      <main className="citizen-main" id="dashboard">
        <header className="citizen-topbar">
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <FaBars />
          </button>

          <div className="topbar-breadcrumb">
            <span>Home</span>
            <span>/</span>
            <strong>Dashboard</strong>
          </div>

          <div className="topbar-right">
            <button className="notification-button" aria-label="Notifications">
              <FaBell />
              <span className="notification-dot" />
            </button>
            <div className="topbar-user">
              <div className="user-avatar">C</div>
              <div className="user-details">
                <strong>Citizen</strong>
                <span>Citizen Account</span>
              </div>
            </div>
          </div>
        </header>

        <div className="citizen-content">
          <section className="welcome-section">
            <div>
              <p className="welcome-eyebrow">CITIZEN PORTAL</p>
              <h1>Welcome back, Citizen! <span>👋</span></h1>
              <p className="welcome-description">
                Together, let's make our city cleaner, greener and healthier.
              </p>
            </div>

            <button
              className="report-primary-button"
              onClick={() => navigate("/citizen/report")}
            >
              <FaPlus /> Report an Issue
            </button>
          </section>

          <section className="impact-banner">
            <div className="impact-icon"><FaLeaf /></div>
            <div>
              <h2>Your voice matters!</h2>
              <p>
                Reporting local waste problems helps your municipality take action.
              </p>
            </div>
            <span className="impact-decoration">♻</span>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-green"><FaClipboardList /></div>
              <p>Total Reports</p>
              <h2>{counts.total}</h2>
              <span className="stat-caption">All your submitted reports</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-orange"><FaClock /></div>
              <p>Pending</p>
              <h2>{counts.pending}</h2>
              <span className="stat-caption">Awaiting action</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-blue"><FaSyncAlt /></div>
              <p>In Progress</p>
              <h2>{counts.progress}</h2>
              <span className="stat-caption">Currently being handled</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-purple"><FaCheckCircle /></div>
              <p>Resolved</p>
              <h2>{counts.resolved}</h2>
              <span className="stat-caption">Successfully completed</span>
            </div>
          </section>

          <section className="reports-panel" id="reports">
            <div className="reports-heading">
              <div>
                <h2>Recent Reports</h2>
                <p>Keep track of the issues you've reported.</p>
              </div>

              <button
                className="view-all-button"
                onClick={() => {
                  setFilter("All");
                  setSearch("");
                }}
              >
                Reset filters <FaArrowRight />
              </button>
            </div>

            <div className="report-toolbar">
              <div className="report-search">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search reports or locations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter reports by status"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div className="reports-list">
              <div className="report-table-header">
                <span>REPORT DETAILS</span>
                <span>DATE</span>
                <span>STATUS</span>
              </div>

              {filteredReports.map((report) => (
                <div className="report-row" key={report.id}>
                  <div className="report-info">
                    <div className="report-location-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <strong>{report.title}</strong>
                      <span>{report.id} · {report.location}</span>
                    </div>
                  </div>

                  <span className="report-date">{report.date}</span>

                  <span className={`status-badge ${
                    report.status === "Pending"
                      ? "status-pending"
                      : report.status === "In Progress"
                      ? "status-progress"
                      : "status-resolved"
                  }`}>
                    {report.status === "Pending" && <FaExclamationCircle />}
                    {report.status === "In Progress" && <FaSyncAlt />}
                    {report.status === "Resolved" && <FaCheckCircle />}
                    {report.status}
                  </span>
                </div>
              ))}

              {filteredReports.length === 0 && (
                <div className="reports-empty">
                  No reports match your search.
                </div>
              )}
            </div>

            <div className="reports-footer">
              Showing {filteredReports.length} of {reports.length} reports
            </div>
          </section>

          <footer className="citizen-footer">
            <span>© 2026 CivicPlus+ · Building cleaner communities together.</span>
            <span>Made for a cleaner tomorrow <FaLeaf /></span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default CitizenDashboard;
