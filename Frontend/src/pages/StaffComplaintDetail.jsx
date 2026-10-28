import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaPrint,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUser,
  FaSave,
  FaExclamationCircle,
} from "react-icons/fa";

import StaffAdminLayout from "../components/StaffAdminLayout";
import "./StaffComplaintDetail.css";

export default function StaffComplaintDetail() {
  const { id = "CC-5284" } = useParams();

  const [status, setStatus] = useState("Pending Dispatch");
  const [priority, setPriority] = useState("High");
  const [assignedWorker, setAssignedWorker] = useState("Rajesh Kumar");
  const [isEscalated, setIsEscalated] = useState(false);
  const [notes, setNotes] = useState("");
  const [savedNotice, setSavedNotice] = useState("");

  const handleSaveNote = () => {
    if (!notes.trim()) return;
    setSavedNotice("Note saved to complaint audit trail.");
    setTimeout(() => setSavedNotice(""), 3000);
  };

  return (
    <StaffAdminLayout activeTab="complaints">
      <div className="staff-detail-container">
        {/* Breadcrumb matching PPT Page 14 */}
        <div className="staff-breadcrumb-row">
          <Link to="/staff/complaints">Complaints</Link>
          <span>›</span>
          <span>Detail #{id}</span>
        </div>

        {/* Title Header */}
        <div className="staff-detail-header">
          <div className="staff-detail-title-group">
            <h1>Complaint #{id}</h1>
            <span className="priority-pill high">● High Priority</span>
          </div>

          <button
            type="button"
            className="print-btn"
            onClick={() => window.print()}
          >
            <FaPrint />
            <span>Print</span>
          </button>
        </div>

        {/* Grid: Left Details & Right Action Panel */}
        <div className="staff-detail-grid">
          {/* Left Main Information */}
          <div className="staff-left-cards">
            {/* Overview Card */}
            <div className="complaint-overview-card">
              <div className="overview-top-meta">
                <div>
                  <span className="meta-field-label">CATEGORY</span>
                  <span className="meta-field-val">Waste Mgmt</span>
                </div>
                <div>
                  <span className="meta-field-label">SUBMITTED</span>
                  <span className="meta-field-val">Today, 10:45 AM</span>
                </div>
              </div>

              <div>
                <span className="meta-field-label">DESCRIPTION</span>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, margin: 0 }}>
                  Public trash bin overflowing onto the sidewalk. Needs immediate clearing
                  before weekend event.
                </p>
              </div>

              {/* Photos & Location Map */}
              <div className="photo-map-split">
                <div>
                  <span className="meta-field-label">ATTACHED PHOTO</span>
                  <img
                    src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=600&auto=format&fit=crop&q=80"
                    alt="Garbage overflow"
                    className="evidence-thumb-img"
                  />
                </div>

                <div>
                  <span className="meta-field-label">LOCATION</span>
                  <div className="mini-map-loc-frame">
                    <svg viewBox="0 0 200 160" style={{ width: "100%", height: "100%" }}>
                      <rect width="200" height="160" fill="#e2ede5" />
                      <line x1="20" y1="80" x2="180" y2="80" stroke="#fff" strokeWidth="12" />
                      <line x1="100" y1="20" x2="100" y2="140" stroke="#fff" strokeWidth="12" />
                      <circle cx="100" cy="80" r="10" fill="#08775e" />
                      <circle cx="100" cy="80" r="4" fill="#ffffff" />
                    </svg>
                    <div className="loc-overlay-caption">
                      Downtown Plaza, NE Corner
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reporter Information Card */}
            <div className="reporter-card">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Siddhant Jaiswal"
                className="reporter-avatar-circle"
              />

              <div className="reporter-names-block">
                <strong>
                  Siddhant Jaiswal
                  <span className="verified-pill">✔ Verified</span>
                </strong>
                <div className="reporter-contact-line">
                  +1 (555) 019-2834 · s.jaiswal@example.com
                </div>
              </div>
            </div>

            {/* Activity Log Audit Timeline */}
            <div className="activity-log-card">
              <h3>Activity Log</h3>

              <div className="audit-timeline">
                <div className="audit-step">
                  <div className="audit-bullet" />
                  <strong>Admin reviewed details.</strong>
                  <span>11:00 AM</span>
                </div>

                <div className="audit-step">
                  <div className="audit-bullet" />
                  <strong>AI System assigned 'High' priority.</strong>
                  <span>10:46 AM</span>
                </div>

                <div className="audit-step">
                  <div className="audit-bullet" style={{ background: "#cbd5e1" }} />
                  <strong>Complaint filed by Citizen.</strong>
                  <span>10:45 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Panel matching PPT Page 14 */}
          <aside className="action-panel-card">
            <h3>Action Panel</h3>

            {/* Current Status Dropdown */}
            <div className="action-form-section">
              <span className="action-field-label">CURRENT STATUS</span>
              <select
                className="status-dropdown-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending Dispatch">Pending Dispatch</option>
                <option value="Assigned">Assigned</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            {/* Assign Worker */}
            <div className="action-form-section">
              <span className="action-field-label">ASSIGN WORKER</span>
              <div className="worker-search-box">
                <div className="worker-quick-info">
                  <div className="worker-init-badge">RK</div>
                  <div className="worker-text-info">
                    <strong>{assignedWorker}</strong>
                    <span>0.5km away · Available</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="assign-action-btn"
                  onClick={() => alert(`Assigned complaint to ${assignedWorker}!`)}
                >
                  Assign
                </button>
              </div>
            </div>

            {/* Priority Override */}
            <div className="action-form-section">
              <span className="action-field-label">PRIORITY OVERRIDE</span>
              <div className="priority-override-btns">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`priority-choice-btn ${priority === p ? "active high" : ""}`}
                    onClick={() => setPriority(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Escalation Flag */}
            <div className="escalate-switch-row">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Escalation Flag</span>
                <small style={{ color: "#64748b", fontSize: 11.5 }}>Notify city council supervisor</small>
              </div>

              <label className="clean-switch">
                <input
                  type="checkbox"
                  checked={isEscalated}
                  onChange={(e) => setIsEscalated(e.target.checked)}
                />
                <span className="slider-round" />
              </label>
            </div>

            {/* Internal Notes */}
            <div className="action-form-section">
              <span className="action-field-label">INTERNAL NOTES</span>
              <textarea
                rows={3}
                className="internal-notes-textarea"
                placeholder="Add administrative notes here... (Not visible to citizen)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <button
                type="button"
                className="save-note-btn"
                onClick={handleSaveNote}
              >
                <FaSave />
                <span>Save Note</span>
              </button>

              {savedNotice && (
                <span style={{ color: "#10b981", fontSize: 12, fontWeight: 600 }}>
                  ✔ {savedNotice}
                </span>
              )}
            </div>
          </aside>
        </div>
      </div>
    </StaffAdminLayout>
  );
}
