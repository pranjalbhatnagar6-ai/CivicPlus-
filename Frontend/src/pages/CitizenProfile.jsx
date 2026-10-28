import { Link, useNavigate } from "react-router-dom";
import {
  FaAward,
  FaGlobe,
  FaBell,
  FaSignOutAlt,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import "./CitizenProfile.css";

const leaderboardData = [
  {
    rank: 1,
    name: "Priya S.",
    area: "Indiranagar",
    pts: 3120,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    rankClass: "rank-first",
  },
  {
    rank: 2,
    name: "Rahul K.",
    area: "Koramangala",
    pts: 2850,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rankClass: "rank-second",
  },
  {
    rank: 3,
    name: "Siddhant J (You)",
    area: "Indiranagar",
    pts: 2450,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rankClass: "rank-third",
    isCurrent: true,
  },
  {
    rank: 4,
    name: "Ananya M.",
    area: "Jayanagar",
    pts: 2100,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    rankClass: "rank-normal",
  },
  {
    rank: 5,
    name: "Vikram D.",
    area: "Whitefield",
    pts: 1890,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    rankClass: "rank-normal",
  },
];

export default function CitizenProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("clean_city_guest");
    navigate("/");
  };

  return (
    <div className="clean-profile-page">
      <CitizenNav activeItem="profile" />

      <div className="citizen-page-with-sidebar">
        <main className="profile-main-container">
          <h1 className="profile-page-title">Profile & Rewards</h1>

          {/* Two-column layout matching PPT Page 10 */}
          <div className="profile-content-grid">
            {/* Left Column: User Card & Settings */}
            <div className="profile-user-sidebar">
              <div className="profile-ident-card">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                  alt="Siddhant J"
                  className="user-photo-large"
                />
                <h2 className="user-name-title">Siddhant J</h2>
                <span className="user-member-since">Member since: June 2024</span>
              </div>

              {/* Settings Nav */}
              <div className="profile-settings-card">
                <h3 className="settings-box-heading">Settings</h3>

                <div className="settings-nav-list">
                  <button
                    type="button"
                    className="settings-row-item"
                    onClick={() => alert("Language Preferences: English (Default)")}
                  >
                    <div className="settings-item-left">
                      <FaGlobe />
                      <span>Language Preferences</span>
                    </div>
                    <FaChevronRight style={{ color: "#94a3b8", fontSize: 12 }} />
                  </button>

                  <button
                    type="button"
                    className="settings-row-item"
                    onClick={() => alert("Notifications: SMS & Push Enabled")}
                  >
                    <div className="settings-item-left">
                      <FaBell />
                      <span>Notification Settings</span>
                    </div>
                    <FaChevronRight style={{ color: "#94a3b8", fontSize: 12 }} />
                  </button>

                  <button
                    type="button"
                    className="settings-row-item logout"
                    onClick={handleLogout}
                  >
                    <div className="settings-item-left">
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Tier Progress & Leaderboard */}
            <div className="profile-rewards-column">
              {/* Tier Progress Card */}
              <div className="tier-progress-card">
                <div className="tier-top-row">
                  <div className="tier-medal-icon">
                    <FaAward />
                  </div>

                  <div className="tier-titles-wrap">
                    <div className="tier-badge-label">
                      <span>CURRENT TIER</span>
                      <span className="premium-badge">PREMIUM</span>
                    </div>
                    <h3 className="tier-main-name">Community Cleanliness Contributor</h3>
                  </div>
                </div>

                <div className="tier-points-display">
                  2,450 <span>pts / 3,000</span>
                </div>

                <div className="tier-bar-track">
                  <div className="tier-bar-fill" style={{ width: "81%" }} />
                </div>

                <div className="tier-bottom-info">
                  <span className="tier-next-target">Next: Eco Warrior</span>
                  <span className="tier-perks-tag">
                    <FaStar style={{ fontSize: 11 }} /> Priority Support & Special Badges
                  </span>
                </div>
              </div>

              {/* Local Leaderboard Card */}
              <div className="leaderboard-card">
                <div className="leaderboard-header">
                  <h3>Local Leaderboard</h3>
                  <span className="leaderboard-date-badge">June 2024</span>
                </div>

                <div className="leaderboard-rows-list">
                  {leaderboardData.map((item) => (
                    <div
                      key={item.rank}
                      className={`leader-row ${item.isCurrent ? "current-user" : ""}`}
                    >
                      <div className="leader-left">
                        <span className={`leader-rank-badge ${item.rankClass}`}>
                          {item.rank}
                        </span>

                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="leader-avatar-thumb"
                        />

                        <div className="leader-names">
                          <strong>{item.name}</strong>
                          <span>{item.area}</span>
                        </div>
                      </div>

                      <div className="leader-pts">
                        {item.pts.toLocaleString()} <small>pts</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
