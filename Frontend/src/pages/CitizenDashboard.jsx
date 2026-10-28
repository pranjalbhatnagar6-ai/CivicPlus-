import { Link } from "react-router-dom";
import {
  FaCamera,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import CityBackdrop from "../components/CityBackdrop";
import "./CitizenDashboard.css";

const recentReports = [
  {
    id: "CC-10482",
    title: "Overflowing Bin",
    location: "124 MG Road, Downtown",
    status: "In Progress",
    badgeClass: "badge-progress",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-10481",
    title: "Bulk Waste Dumped",
    location: "45 Park Avenue South",
    status: "Pending",
    badgeClass: "badge-pending",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-10475",
    title: "Park Litter Cleared",
    location: "Central Botanical Gardens",
    status: "Resolved",
    badgeClass: "badge-resolved",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80",
  },
];

export default function CitizenDashboard() {
  return (
    <div className="clean-citizen-dashboard">
      <CitizenNav activeItem="home" />

      <div className="citizen-page-with-sidebar">
        {/* Top Hero Banner with City Backdrop & Big Action Button */}
        <section className="citizen-dash-hero">
          <CityBackdrop variant="hero-only" opacity={0.6} />

          <div className="hero-action-container">
            <Link to="/citizen/report" className="primary-report-btn">
              <FaCamera />
              <span>Report garbage</span>
            </Link>

            <p className="hero-action-caption">
              Take a photo to automatically log a cleanup request with the city maintenance team.
            </p>
          </div>
        </section>

        {/* Dashboard Content */}
        <main className="citizen-dash-body">
          {/* 3 Summary Stats Cards */}
          <section className="citizen-summary-stats">
            <div className="summary-stat-box">
              <div className="stat-box-value">
                <span>5</span>
                <FaFileAlt style={{ color: "#64748b" }} />
              </div>
              <span className="stat-box-label">YOUR REPORTS</span>
            </div>

            <div className="summary-stat-box">
              <div className="stat-box-value">
                <span>3</span>
                <FaCheckCircle style={{ color: "#10b981" }} />
              </div>
              <span className="stat-box-label">RESOLVED</span>
            </div>

            <div className="summary-stat-box">
              <div className="stat-box-value">
                <span>2</span>
                <FaClock style={{ color: "#f59e0b" }} />
              </div>
              <span className="stat-box-label">IN PROGRESS</span>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="recent-activity-section">
            <div className="section-bar-header">
              <h2>Recent Activity</h2>
              <Link to="/citizen/complaints" className="view-all-link">
                View all <FaArrowRight />
              </Link>
            </div>

            <div className="activity-cards-grid">
              {recentReports.map((report) => (
                <Link
                  key={report.id}
                  to={`/citizen/complaint/${report.id}`}
                  className="activity-photo-card"
                >
                  <div className="card-img-wrap">
                    <img src={report.image} alt={report.title} />
                    <span className={`card-floating-badge ${report.badgeClass}`}>
                      ● {report.status}
                    </span>
                  </div>

                  <div className="card-text-body">
                    <h3 className="card-complaint-title">{report.title}</h3>
                    <div className="card-location-row">
                      <FaMapMarkerAlt />
                      <span>{report.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
