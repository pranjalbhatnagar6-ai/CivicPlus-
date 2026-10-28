
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const STORAGE_KEY = "civicplus_reports";

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

function getSavedReports() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : initialReports;
    }

    return initialReports;
  } catch {
    return initialReports;
  }
}

function CitizenDashboard() {
  const navigate = useNavigate();

  const [reports, setReports] = useState(getSavedReports);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notice, setNotice] = useState("");

  // Save reports whenever the list changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch {
      setNotice("Unable to save reports in this browser.");
    }
  }, [reports]);

  // Refresh when another page or browser tab updates reports.
  useEffect(() => {
    const refreshReports = () => {
      setReports(getSavedReports());
    };

    window.addEventListener("focus", refreshReports);
    window.addEventListener("storage", refreshReports);

    return () => {
      window.removeEventListener("focus", refreshReports);
      window.removeEventListener("storage", refreshReports);
    };
  }, []);

  const counts = {
    total: reports.length,
    pending: reports.filter((r) => r.status === "Pending").length,
    progress: reports.filter((r) => r.status === "In Progress").length,
    resolved: reports.filter((r) => r.status === "Resolved").length,
  };

  const filteredReports = reports.filter((report) => {
    const searchText =
      `${report.id} ${report.title} ${report.location}`.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  const logout = () => {
    navigate("/");
  };

  const resetFilters = () => {
    setFilter("All");
    setSearch("");
  };

  const statusClass = (status) => {
    if (status === "Pending") return "status-pending";
    if (status === "In Progress") return "status-progress";
    if (status === "Resolved") return "status-resolved";
    return "";
  };

  const statusIcon = (status) => {
    if (status === "Pending") return <FaExclamationCircle />;
    if (status === "In Progress") return <FaSyncAlt />;
    if (status === "Resolved") return <FaCheckCircle />;
    return null;
  };

  return (
    <div className="citizen-app">
      <aside className={`citizen-sidebar ${sidebarOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="citizen-brand"
          style={{ textDecoration: "none" }}
          title="Go to CivicPlus+ Homepage"
        >
          <span className="citizen-brand-icon">
            <FaLeaf />
          </span>
          <span>
            CivicPlus<span className="brand-plus">+</span>
          </span>
        </Link>

        <p className="sidebar-label">MAIN MENU</p>

        <nav className="sidebar-nav">
          <a
            href="#dashboard"
            className="sidebar-link active"
            onClick={() => setSidebarOpen(false)}
          >
            <FaThLarge />
            <span>Dashboard</span>
          </a>

          <a
            href="#reports"
            className="sidebar-link"
            onClick={() => {
              resetFilters();
              setSidebarOpen(false);
            }}
          >
            <FaClipboardList />
            <span>My Reports</span>
          </a>

          <a
            href="#reports"
            className="sidebar-link"
            onClick={() => {
              setFilter("All");
              setSidebarOpen(false);
            }}
          >
            <FaMapMarkerAlt />
            <span>Track Complaints</span>
          </a>
        </nav>

        <p className="sidebar-label account-label">ACCOUNT</p>

        <nav className="sidebar-nav">
          <button
            type="button"
            className="sidebar-link"
            onClick={() => {
              setNotice("Profile settings are not connected yet.");
              setSidebarOpen(false);
            }}
          >
            <FaUserCircle />
            <span>My Profile</span>
          </button>

          <button
            type="button"
            className="sidebar-link"
            onClick={() => {
              setNotice("Account settings are not connected yet.");
              setSidebarOpen(false);
            }}
          >
            <FaCog />
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <FaLeaf />
            <strong>Keep your city clean!</strong>
            <p>Your small action makes a big difference.</p>
          </div>

          <button className="sidebar-logout" onClick={logout}>
            <FaSignOutAlt />
            Logout
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
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <strong>Dashboard</strong>
          </div>

          <div className="topbar-right">
            <button
              className="notification-button"
              aria-label="Notifications"
              onClick={() =>
                setNotice(
                  counts.pending
                    ? `You have ${counts.pending} pending report(s).`
                    : "You have no pending reports."
                )
              }
            >
              <FaBell />
              {counts.pending > 0 && (
                <span className="notification-dot" />
              )}
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
              <h1>
                Welcome back, Citizen! <span>👋</span>
              </h1>
              <p className="welcome-description">
                Together, let's make our city cleaner, greener and healthier.
              </p>
            </div>

            <button
              className="report-primary-button"
              onClick={() => navigate("/citizen/report")}
            >
              <FaPlus />
              Report an Issue
            </button>
          </section>

          {notice && (
            <div
              role="status"
              style={{
                background: "#e8f7ee",
                color: "#166534",
                padding: "12px 16px",
                borderRadius: 8,
                marginBottom: 18,
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span>{notice}</span>
              <button
                onClick={() => setNotice("")}
                aria-label="Dismiss notification"
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          )}

          <section className="impact-banner">
            <div className="impact-icon">
              <FaLeaf />
            </div>
            <div>
              <h2>Your voice matters!</h2>
              <p>
                Reporting local waste problems helps your municipality take
                action.
              </p>
            </div>
            <span className="impact-decoration">♻</span>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-green">
                <FaClipboardList />
              </div>
              <p>Total Reports</p>
              <h2>{counts.total}</h2>
              <span className="stat-caption">
                All submitted reports
              </span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-orange">
                <FaClock />
              </div>
              <p>Pending</p>
              <h2>{counts.pending}</h2>
              <span className="stat-caption">Awaiting action</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-blue">
                <FaSyncAlt />
              </div>
              <p>In Progress</p>
              <h2>{counts.progress}</h2>
              <span className="stat-caption">
                Currently being handled
              </span>
            </div>

            <div className="stat-card">
              <div className="stat-icon stat-purple">
                <FaCheckCircle />
              </div>
              <p>Resolved</p>
              <h2>{counts.resolved}</h2>
              <span className="stat-caption">
                Successfully completed
              </span>
            </div>
          </section>

          <section className="reports-panel" id="reports">
            <div className="reports-heading">
              <div>
                <h2>My Reports</h2>
                <p>Search your complaints and track their status.</p>
              </div>

              <button
                className="view-all-button"
                onClick={resetFilters}
              >
                Reset filters <FaArrowRight />
              </button>
            </div>

            <div className="report-toolbar">
              <div className="report-search">
                <FaSearch />
                <input
                  type="search"
                  placeholder="Search reports or locations..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search reports"
                />
              </div>

              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
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
                      <span>
                        {report.id} · {report.location}
                      </span>
                    </div>
                  </div>

                  <span className="report-date">{report.date}</span>

                  <span
                    className={`status-badge ${statusClass(report.status)}`}
                  >
                    {statusIcon(report.status)}
                    {report.status}
                  </span>
                </div>
              ))}

              {filteredReports.length === 0 && (
                <div className="reports-empty">
                  No reports match your search. Try changing your search or
                  filter.
                </div>
              )}
            </div>

            <div className="reports-footer">
              Showing {filteredReports.length} of {reports.length} reports
            </div>
          </section>

          <footer className="citizen-footer">
            <span>
              © 2026 CivicPlus+ · Building cleaner communities together.
            </span>
            <span>
              Made for a cleaner tomorrow <FaLeaf />
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default CitizenDashboard;
