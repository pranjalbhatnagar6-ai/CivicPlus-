import { useState } from "react";
import { FaPlus, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import "./CommunityDrives.css";

const initialDrives = [
  {
    id: 1,
    title: "Park cleanup at Indiranagar",
    badge: "UPCOMING",
    badgeClass: "badge-upcoming",
    location: "Indiranagar Park, 2nd Stage",
    desc: "Join us this weekend to clear out plastic waste and restore the walking paths in our local neighborhood...",
    supportCount: 126,
    isSupported: false,
  },
  {
    id: 2,
    title: "Beach Cleanliness Drive",
    badge: "PLANNING",
    badgeClass: "badge-planning",
    location: "Marina Cove",
    desc: "Organizing a massive coastal cleanup to protect marine life. Need volunteers and equipment sponsors.",
    supportCount: 45,
    isSupported: false,
  },
  {
    id: 3,
    title: "E-Waste Collection Camp",
    badge: "TOMORROW",
    badgeClass: "badge-tomorrow",
    location: "City Center Mall Plaza",
    desc: "Drop off your old electronics, batteries, and cables for safe and certified recycling.",
    supportCount: 210,
    isSupported: true,
  },
  {
    id: 4,
    title: "Street Mural Project",
    badge: "PLANNING",
    badgeClass: "badge-planning",
    location: "Downtown Underpass",
    desc: "Beautifying the concrete walls with civic-themed art to discourage vandalism and fly-tipping.",
    supportCount: 18,
    isSupported: false,
  },
];

export default function CommunityDrives() {
  const [drives, setDrives] = useState(initialDrives);

  const toggleSupport = (id) => {
    setDrives((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const supported = !item.isSupported;
          return {
            ...item,
            isSupported: supported,
            supportCount: supported ? item.supportCount + 1 : item.supportCount - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="clean-community-page">
      <CitizenNav activeItem="community" />

      <div className="citizen-page-with-sidebar">
        <main className="community-main-container">
          <header className="community-header-bar">
            <h1>Cleanliness drives near you</h1>

            <button
              type="button"
              className="start-community-btn"
              onClick={() => alert("Community drive proposal submitted for ward approval!")}
            >
              <FaPlus />
              <span>Start a community request</span>
            </button>
          </header>

          {/* 2x2 Drives Grid matching PPT Page 9 */}
          <div className="drives-2x2-grid">
            {drives.map((drive) => (
              <div key={drive.id} className="drive-event-card">
                <div className="drive-card-top-row">
                  <h3 className="drive-title">{drive.title}</h3>
                  <span className={`drive-status-badge ${drive.badgeClass}`}>
                    {drive.badge}
                  </span>
                </div>

                <div className="drive-location-row">
                  <FaMapMarkerAlt />
                  <span>{drive.location}</span>
                </div>

                <p className="drive-desc-text">{drive.desc}</p>

                <div className="drive-bottom-action-row">
                  <div className="residents-supported-meta">
                    <div className="resident-avatar-circles">
                      <div className="avatar-mini" style={{ background: "#6ee7b7" }} />
                      <div className="avatar-mini" style={{ background: "#93c5fd" }} />
                      <div className="avatar-mini" style={{ background: "#fcd34d" }} />
                    </div>
                    <span>Supported by {drive.supportCount} residents</span>
                  </div>

                  <button
                    type="button"
                    className={`drive-support-btn ${drive.isSupported ? "supported" : ""}`}
                    onClick={() => toggleSupport(drive.id)}
                  >
                    {drive.isSupported ? "Supported ✔" : "Support"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
