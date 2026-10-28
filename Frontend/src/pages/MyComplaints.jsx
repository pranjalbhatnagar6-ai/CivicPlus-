import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTrashAlt,
  FaExclamationTriangle,
  FaLightbulb,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import "./MyComplaints.css";

const complaintsData = [
  {
    id: "CC-10482",
    title: "Overflowing Public Bin",
    category: "Waste Management",
    location: "Downtown, 124 MG Road",
    date: "Oct 24, 2026",
    status: "IN PROGRESS",
    statusKey: "In Progress",
    icon: <FaTrashAlt />,
  },
  {
    id: "CC-10481",
    title: "Deep Pothole on Main Arterial",
    category: "Infrastructure",
    location: "Westside, 5th Avenue Crossing",
    date: "Oct 23, 2026",
    status: "PENDING",
    statusKey: "Pending",
    icon: <FaExclamationTriangle />,
  },
  {
    id: "CC-10475",
    title: "Broken Streetlight",
    category: "Electrical",
    location: "North Park, Elm Street",
    date: "Oct 20, 2026",
    status: "RESOLVED",
    statusKey: "Resolved",
    icon: <FaLightbulb />,
  },
];

export default function MyComplaints() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = complaintsData.filter((item) => {
    if (activeFilter === "All") return true;
    return item.statusKey === activeFilter;
  });

  return (
    <div className="clean-complaints-page">
      <CitizenNav activeItem="complaints" />

      <div className="citizen-page-with-sidebar">
        <main className="complaints-main-container">
          <div className="complaints-title-header">
            <h1>My Complaints</h1>
          </div>

          {/* Filter Tabs matching PPT Page 7 */}
          <div className="complaints-filter-tabs">
            {["All", "Pending", "In Progress", "Resolved"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`filter-pill-btn ${activeFilter === tab ? "active" : ""}`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Complaints List */}
          <div className="complaints-list-items">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`/citizen/complaint/${item.id}`}
                className="complaint-row-card"
              >
                <div className="complaint-card-left">
                  <div className="complaint-type-icon">{item.icon}</div>

                  <div className="complaint-card-details">
                    <div className="id-badge-row">
                      <span className="complaint-tag-id">#{item.id}</span>
                      <span
                        className={`complaint-status-pill ${
                          item.statusKey === "In Progress"
                            ? "in-progress"
                            : item.statusKey === "Pending"
                            ? "pending"
                            : "resolved"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="complaint-main-title">{item.title}</h3>

                    <div className="complaint-location-line">
                      <FaMapMarkerAlt />
                      <span>
                        {item.location} · {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                <FaChevronRight className="chevron-arrow-icon" />
              </Link>
            ))}

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
                No complaints found in this category.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
