import { Link, useLocation } from "react-router-dom";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

import CityBackdrop from "../components/CityBackdrop";
import BrandLogo from "../components/BrandLogo";
import "./ReportSuccess.css";

export default function ReportSuccess() {
  const location = useLocation();
  const complaint = location.state?.complaint || {
    id: "CC-10482",
    location: "Downtown, 124 MG Road",
    category: "Street Sweeping Needed",
  };

  return (
    <div className="clean-success-page">
      <CityBackdrop opacity={0.65} />

      {/* Top Header */}
      <header style={{ height: 68, padding: "0 4%", display: "flex", alignItems: "center", position: "relative", zIndex: 10 }}>
        <BrandLogo to="/citizen/dashboard" size="md" />
      </header>

      {/* Centered Success Card matching PPT Page 6 */}
      <main className="success-card-wrapper">
        <div className="clean-success-card">
          <div className="success-check-circle">
            <FaCheck />
          </div>

          <h1 className="success-title">Complaint Submitted Successfully</h1>
          <p className="success-subtitle">
            Thank you for helping us keep the city clean!
          </p>

          <div className="complaint-id-box">
            <span className="id-label">COMPLAINT ID</span>
            <span className="id-value">#{complaint.id}</span>
          </div>

          <div className="location-brief-box">
            <div className="location-brief-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="location-brief-text">
              <strong>{complaint.location}</strong>
              <span>{complaint.category || "Waste Management Needed"}</span>
            </div>
          </div>

          {/* Stepper Status tracker */}
          <div className="submission-stepper">
            <div className="stepper-line" />

            <div className="step-node completed">
              <div className="step-dot-indicator" />
              <span className="step-node-text">Submitted</span>
            </div>

            <div className="step-node">
              <div className="step-dot-indicator" />
              <span className="step-node-text">Assigned</span>
            </div>

            <div className="step-node">
              <div className="step-dot-indicator" />
              <span className="step-node-text">In Progress</span>
            </div>

            <div className="step-node">
              <div className="step-dot-indicator" />
              <span className="step-node-text">Resolved</span>
            </div>
          </div>

          <div className="success-actions-row">
            <Link
              to={`/citizen/complaint/${complaint.id}`}
              className="track-btn"
            >
              Track this complaint
            </Link>

            <Link
              to="/citizen/report"
              className="report-another-btn"
            >
              Report another
            </Link>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "16px", color: "#64748b", fontSize: 12.5, position: "relative", zIndex: 10 }}>
        © 2026 CleanCity. All rights reserved.
      </footer>
    </div>
  );
}
