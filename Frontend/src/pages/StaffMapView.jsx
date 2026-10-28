import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";

import StaffAdminLayout from "../components/StaffAdminLayout";
import "./StaffMapView.css";

export default function StaffMapView() {
  const [mapMode, setMapMode] = useState("pins"); // "pins" | "heatmap"
  const [selectedComplaint, setSelectedComplaint] = useState({
    id: "CC-5284",
    priority: "Critical",
    category: "Waste Mgmt",
    location: "Downtown Plaza, NE Corner",
    description: "Public trash bin overflowing onto the sidewalk. Needs immediate clearing before weekend event.",
    assignedWorker: "Unassigned",
    status: "Pending Dispatch",
    photo: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=80",
  });

  return (
    <StaffAdminLayout activeTab="map">
      <div className="staff-map-page-wrap">
        {/* Main Canvas Area */}
        <div className="map-view-canvas-area">
          {/* Top Bar with District & Mode Toggle */}
          <div className="map-floating-top-bar">
            <span className="map-district-badge">
              CleanCity · Admin Map View | Metropolis District
            </span>

            <div className="map-mode-toggle">
              <button
                type="button"
                className={`map-toggle-btn ${mapMode === "pins" ? "active" : ""}`}
                onClick={() => setMapMode("pins")}
              >
                Pins
              </button>
              <button
                type="button"
                className={`map-toggle-btn ${mapMode === "heatmap" ? "active" : ""}`}
                onClick={() => setMapMode("heatmap")}
              >
                Heatmap
              </button>
            </div>
          </div>

          {/* Detailed Metropolis Vector Map */}
          <svg className="staff-interactive-map-svg" viewBox="0 0 900 600" fill="none">
            <rect width="900" height="600" fill="#f2f8f4" />

            {/* River Curve */}
            <path
              d="M 680 0 Q 740 220, 640 380 T 820 600 L 900 600 L 900 0 Z"
              fill="#cbe8eb"
            />

            {/* Street System */}
            <g stroke="#ffffff" strokeWidth="18" strokeLinecap="round">
              <line x1="60" y1="120" x2="840" y2="120" />
              <line x1="60" y1="260" x2="840" y2="260" />
              <line x1="60" y1="420" x2="840" y2="420" />
              <line x1="200" y1="40" x2="200" y2="560" />
              <line x1="420" y1="40" x2="420" y2="560" />
              <line x1="600" y1="40" x2="600" y2="560" />
            </g>

            {/* Secondary roads */}
            <g stroke="#e2ece5" strokeWidth="6" strokeLinecap="round">
              <line x1="60" y1="190" x2="600" y2="190" />
              <line x1="60" y1="340" x2="600" y2="340" />
              <line x1="310" y1="40" x2="310" y2="560" />
              <line x1="510" y1="40" x2="510" y2="560" />
            </g>

            {/* Street Labels */}
            <text x="70" y="112" fill="#94a3b8" fontSize="11" fontWeight="600">NORTH HIGHWAY 4</text>
            <text x="70" y="252" fill="#94a3b8" fontSize="11" fontWeight="600">CENTRAL METRO AVE</text>
            <text x="70" y="412" fill="#94a3b8" fontSize="11" fontWeight="600">SOUTH PARK WAY</text>

            {/* Cluster Bubble (12 complaints) */}
            <g transform="translate(420, 260)" className="map-pin-interactive">
              <circle cx="0" cy="0" r="22" fill="#f59e0b" opacity="0.25" />
              <circle cx="0" cy="0" r="16" fill="#f59e0b" />
              <text x="0" y="5" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">12</text>
            </g>

            {/* Critical Pin: Downtown Plaza (Selected) */}
            <g
              transform="translate(310, 190)"
              className="map-pin-interactive"
              onClick={() =>
                setSelectedComplaint({
                  id: "CC-5284",
                  priority: "Critical",
                  category: "Waste Mgmt",
                  location: "Downtown Plaza, NE Corner",
                  description: "Public trash bin overflowing onto the sidewalk. Needs immediate clearing before weekend event.",
                  assignedWorker: "Unassigned",
                  status: "Pending Dispatch",
                  photo: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=80",
                })
              }
            >
              <circle cx="0" cy="0" r="18" fill="#ef4444" opacity="0.3" />
              <circle cx="0" cy="0" r="13" fill="#dc2626" />
              <polygon points="-4,4 0,-4 4,4" fill="#ffffff" />
            </g>

            {/* Resolved Pin */}
            <g
              transform="translate(540, 380)"
              className="map-pin-interactive"
              onClick={() =>
                setSelectedComplaint({
                  id: "CC-5286",
                  priority: "Low",
                  category: "Water Supply",
                  location: "South Park Dist.",
                  description: "Water valve leakage repaired and drainage cleaned.",
                  assignedWorker: "S. Rivera",
                  status: "Resolved",
                  photo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80",
                })
              }
            >
              <circle cx="0" cy="0" r="14" fill="#10b981" />
              <path d="M -4 0 L -1 3 L 4 -3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* High Priority Pin */}
            <g
              transform="translate(500, 140)"
              className="map-pin-interactive"
              onClick={() =>
                setSelectedComplaint({
                  id: "CC-5285",
                  priority: "High",
                  category: "Infrastructure",
                  location: "North Zone, 5th Ave",
                  description: "Large pothole formation causing minor traffic disruptions.",
                  assignedWorker: "M. Johnson",
                  status: "In Progress",
                  photo: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&auto=format&fit=crop&q=80",
                })
              }
            >
              <circle cx="0" cy="0" r="14" fill="#ea580c" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
          </svg>

          {/* Status Legend matching PPT Page 13 */}
          <div className="map-status-legend">
            <span className="legend-title">Status Legend</span>
            <div className="legend-row">
              <span className="legend-dot" style={{ background: "#dc2626" }} />
              <span>Critical / Overdue</span>
            </div>
            <div className="legend-row">
              <span className="legend-dot" style={{ background: "#ea580c" }} />
              <span>High Priority</span>
            </div>
            <div className="legend-row">
              <span className="legend-dot" style={{ background: "#f59e0b" }} />
              <span>Medium Priority</span>
            </div>
            <div className="legend-row">
              <span className="legend-dot" style={{ background: "#10b981" }} />
              <span>Resolved / Low</span>
            </div>
          </div>
        </div>

        {/* Slide-out Drawer matching PPT Page 13 */}
        {selectedComplaint && (
          <aside className="map-detail-drawer">
            <div className="drawer-header">
              <h3>Complaint Details</h3>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setSelectedComplaint(null)}
              >
                ✕
              </button>
            </div>

            <div className="drawer-body">
              <div className="drawer-badge-row">
                <span className="drawer-critical-pill">
                  ● {selectedComplaint.priority}
                </span>
                <span className="drawer-complaint-id">#{selectedComplaint.id}</span>
              </div>

              <div className="drawer-field-block">
                <strong>Category</strong>
                <p>{selectedComplaint.category}</p>
              </div>

              <div className="drawer-field-block">
                <strong>Location</strong>
                <p>{selectedComplaint.location}</p>
              </div>

              <div className="drawer-field-block">
                <strong>Description</strong>
                <p>{selectedComplaint.description}</p>
              </div>

              <div className="drawer-field-block">
                <strong>Assigned Worker</strong>
                <p>{selectedComplaint.assignedWorker}</p>
              </div>

              <div className="drawer-field-block">
                <strong>Status</strong>
                <p>{selectedComplaint.status}</p>
              </div>

              <div className="drawer-field-block">
                <strong>Attached Media</strong>
                <img
                  src={selectedComplaint.photo}
                  alt={selectedComplaint.category}
                  className="drawer-media-img"
                />
              </div>
            </div>

            <div className="drawer-actions-block">
              <button
                type="button"
                className="drawer-dispatch-btn"
                onClick={() => alert(`Worker dispatched for complaint #${selectedComplaint.id}`)}
              >
                Dispatch Worker
              </button>

              <Link
                to={`/staff/complaint/${selectedComplaint.id}`}
                className="drawer-full-report-btn"
              >
                View Full Report
              </Link>
            </div>
          </aside>
        )}
      </div>
    </StaffAdminLayout>
  );
}
