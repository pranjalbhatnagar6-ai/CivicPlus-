import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaTrashAlt,
  FaShareAlt,
  FaCheck,
  FaClock,
  FaMapMarkerAlt,
  FaCamera,
  FaCheckDouble,
} from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import "./ComplaintDetail.css";

export default function ComplaintDetail() {
  const { id = "CC-10482" } = useParams();
  const [verifiedState, setVerifiedState] = useState(null); // null | "resolved" | "not_resolved"

  return (
    <div className="clean-detail-page">
      <CitizenNav activeItem="complaints" />

      <div className="citizen-page-with-sidebar">
        <main className="detail-main-container">
          {/* Top Header Card matching PPT Page 8 */}
          <section className="detail-header-card">
            <div className="detail-header-left">
              <div className="detail-type-square">
                <FaTrashAlt />
              </div>

              <div>
                <div className="detail-heading-row">
                  <h1>#{id}</h1>
                  <span className="priority-badge-pill medium">Medium Priority</span>
                </div>
                <span className="detail-category-subtitle">Plastic Waste Accumulation</span>
              </div>
            </div>

            <button
              type="button"
              className="share-update-btn"
              onClick={() => alert(`Tracking link for complaint #${id} copied to clipboard!`)}
            >
              <FaShareAlt />
              <span>Share Update</span>
            </button>
          </section>

          {/* Two-Column Layout */}
          <div className="detail-content-layout">
            {/* Left Column: Status Timeline */}
            <div className="detail-status-card">
              <h2>Status</h2>

              <div className="vertical-status-timeline">
                {/* 1. Submitted */}
                <div className="timeline-step-node done">
                  <div className="timeline-indicator">
                    <FaCheck />
                  </div>
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Submitted</span>
                  </div>
                  <span className="timeline-step-date">May 10, 09:15 AM</span>
                </div>

                {/* 2. Verified */}
                <div className="timeline-step-node done">
                  <div className="timeline-indicator">
                    <FaCheck />
                  </div>
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Verified</span>
                  </div>
                  <span className="timeline-step-date">May 11, 11:30 AM</span>
                </div>

                {/* 3. Assigned */}
                <div className="timeline-step-node done">
                  <div className="timeline-indicator">
                    <FaCheck />
                  </div>
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Assigned</span>
                  </div>
                  <span className="timeline-step-date">May 12, 10:00 AM</span>
                </div>

                {/* 4. Cleanup in Progress (Active) */}
                <div className="timeline-step-node active">
                  <div className="timeline-indicator" />
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Cleanup in Progress</span>
                  </div>
                  <span className="timeline-step-date" style={{ color: "#08775e", fontWeight: 600 }}>
                    Currently active
                  </span>
                </div>

                {/* 5. Cleaned */}
                <div className="timeline-step-node pending">
                  <div className="timeline-indicator" />
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Cleaned</span>
                  </div>
                  <span className="timeline-step-date">Pending</span>
                </div>

                {/* 6. Closed */}
                <div className="timeline-step-node pending">
                  <div className="timeline-indicator" />
                  <div className="timeline-title-row">
                    <span className="timeline-step-title">Closed</span>
                  </div>
                  <span className="timeline-step-date">Pending</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Evidence, Location, Verification */}
            <div className="detail-info-column">
              {/* Visual Evidence (Before vs After) */}
              <div className="detail-evidence-card">
                <h3>Visual Evidence</h3>

                <div className="evidence-photos-grid">
                  <div className="evidence-box">
                    <div className="evidence-img-frame">
                      <img
                        src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=600&auto=format&fit=crop&q=80"
                        alt="Before reported evidence"
                      />
                    </div>
                    <span className="evidence-caption">Before (Reported)</span>
                  </div>

                  <div className="evidence-box">
                    <div className="awaiting-photo-frame">
                      <FaCamera />
                      <span>Awaiting 'After' Photo</span>
                    </div>
                    <span className="evidence-caption">After (Pending)</span>
                  </div>
                </div>
              </div>

              {/* Location & Recent Activity */}
              <div className="detail-meta-two-col">
                <div className="detail-sub-card">
                  <h4>Location</h4>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaMapMarkerAlt style={{ color: "#08775e" }} />
                    <span className="sub-card-text">124 MG Road, Downtown</span>
                  </div>
                </div>

                <div className="detail-sub-card">
                  <h4>Recent Activity</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span className="sub-card-text">
                      <strong>2:30 PM</strong> Cleanup started
                    </span>
                    <span className="sub-card-text" style={{ color: "#64748b" }}>
                      <strong>10:00 AM</strong> Assigned to worker Ramesh K.
                    </span>
                  </div>
                </div>
              </div>

              {/* Citizen Verification Prompt */}
              <div className="citizen-verify-box">
                <div className="verify-box-header">
                  <div className="verify-icon-wrap">
                    <FaCheckDouble />
                  </div>
                  <div className="verify-header-text">
                    <h4>Has the garbage been removed?</h4>
                    <p>Help us verify the completion of this task.</p>
                  </div>
                </div>

                {verifiedState === null ? (
                  <div className="verify-actions-row">
                    <button
                      type="button"
                      className="btn-not-resolved"
                      onClick={() => setVerifiedState("not_resolved")}
                    >
                      No, still present
                    </button>
                    <button
                      type="button"
                      className="btn-resolved-yes"
                      onClick={() => setVerifiedState("resolved")}
                    >
                      Yes, resolved
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      background: verifiedState === "resolved" ? "#dcfce7" : "#fee2e2",
                      color: verifiedState === "resolved" ? "#15803d" : "#b91c1c",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      fontSize: 13.5,
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    {verifiedState === "resolved"
                      ? "✔ Thank you for confirming! Your verification has been recorded."
                      : "⚠ Thank you for the update. Ticket has been re-escalated to supervisor."}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
