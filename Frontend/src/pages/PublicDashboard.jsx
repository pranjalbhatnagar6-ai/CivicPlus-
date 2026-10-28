import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaInfoCircle,
  FaCheckCircle,
  FaClock,
  FaMapMarkedAlt,
  FaChartBar,
  FaSyncAlt,
  FaExclamationTriangle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import BrandLogo from "../components/BrandLogo";
import "./PublicDashboard.css";

export default function PublicDashboard() {
  const [activeTab, setActiveTab] = useState("performance");
  const [showHotspots, setShowHotspots] = useState(true);
  const [showCleanZones, setShowCleanZones] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="pub-dash-page">
      {/* Header matching PPT Page 2 */}
      <header className="pub-dash-header">
        <div className="pub-header-left">
          <BrandLogo to="/" size="md" />
          <div className="pub-badge-divider" />
          <span className="pub-dash-label">Public Accountability Dashboard</span>
        </div>

        <nav className="pub-nav-tabs">
          <button
            type="button"
            className={`pub-tab-link ${activeTab === "performance" ? "active" : ""}`}
            onClick={() => setActiveTab("performance")}
          >
            Performance
          </button>
          <button
            type="button"
            className={`pub-tab-link ${activeTab === "heatmap" ? "active" : ""}`}
            onClick={() => setActiveTab("heatmap")}
          >
            Heatmap
          </button>
          <button
            type="button"
            className={`pub-tab-link ${activeTab === "impact" ? "active" : ""}`}
            onClick={() => setActiveTab("impact")}
          >
            Impact
          </button>
          <button
            type="button"
            className={`pub-tab-link ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </button>
        </nav>

        <button type="button" className="clean-lang-btn">
          <FaGlobe />
          <span>Language</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="pub-main-content">
        <div className="pub-intro-header">
          <h1>Citywide Performance</h1>
          <p>
            Real-time public accountability metrics for municipal waste management and urban
            cleanliness initiatives.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <section className="pub-stats-grid">
          {/* 1. Total Complaints */}
          <div className="pub-stat-card">
            <div className="pub-stat-top">
              <span>Total Complaints</span>
              <FaInfoCircle />
            </div>
            <div className="pub-stat-value-row">
              <span className="pub-stat-num">12,480</span>
              <span className="pub-stat-pill green">+5%</span>
            </div>
            <span className="pub-stat-subtext">Last 30 days</span>
          </div>

          {/* 2. Resolved */}
          <div className="pub-stat-card">
            <div className="pub-stat-top">
              <span>Resolved</span>
              <FaCheckCircle style={{ color: "#10b981" }} />
            </div>
            <div className="pub-stat-value-row">
              <span className="pub-stat-num">10,120</span>
              <span className="pub-stat-pill green">+12%</span>
            </div>
            <span className="pub-stat-subtext">81% Resolution Rate</span>
            <div className="pub-stat-progress-bar">
              <div className="pub-stat-progress-fill" style={{ width: "81%" }} />
            </div>
          </div>

          {/* 3. Pending */}
          <div className="pub-stat-card">
            <div className="pub-stat-top">
              <span>Pending</span>
              <FaClock style={{ color: "#f59e0b" }} />
            </div>
            <div className="pub-stat-value-row">
              <span className="pub-stat-num">2,360</span>
              <span className="pub-stat-pill orange">-2%</span>
            </div>
            <span className="pub-stat-subtext">Across all municipalities</span>
          </div>

          {/* 4. Avg Resolution Time */}
          <div className="pub-stat-card">
            <div className="pub-stat-top">
              <span>Avg. Resolution Time</span>
              <FaClock />
            </div>
            <div className="pub-stat-value-row">
              <span className="pub-stat-num">3.2 days</span>
            </div>
            <span className="pub-stat-subtext" style={{ color: "#08775e", fontWeight: 600 }}>
              ↘ Faster by 0.4 days
            </span>
          </div>
        </section>

        {/* Heatmap & Analytics Row */}
        <div className="pub-dashboard-grid">
          {/* Left: Live Incident Heatmap */}
          <section className="pub-heatmap-card">
            <div className="heatmap-card-header">
              <div className="heatmap-title-wrap">
                <FaMapMarkedAlt />
                <span>Live Incident Heatmap</span>
              </div>

              <div className="heatmap-toggles">
                <button
                  type="button"
                  className={`heatmap-toggle-btn hotspot ${showHotspots ? "active" : ""}`}
                  onClick={() => setShowHotspots(!showHotspots)}
                >
                  <span className="heatmap-toggle-dot dot-red" />
                  Hotspots
                </button>
                <button
                  type="button"
                  className={`heatmap-toggle-btn cleanzone ${showCleanZones ? "active" : ""}`}
                  onClick={() => setShowCleanZones(!showCleanZones)}
                >
                  <span className="heatmap-toggle-dot dot-green" />
                  Clean Zones
                </button>
              </div>
            </div>

            {/* Simulated Interactive Vector Map */}
            <div className="heatmap-visual-box">
              <svg className="heatmap-canvas-svg" viewBox="0 0 700 380" fill="none">
                {/* City Blocks Base */}
                <rect x="0" y="0" width="700" height="380" fill="#f0f7f3" />

                {/* River */}
                <path
                  d="M 520 0 Q 560 140, 500 240 T 620 380 L 700 380 L 700 0 Z"
                  fill="#d8edf0"
                />

                {/* Major Arterial Roads Grid */}
                <g stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity="0.9">
                  <line x1="40" y1="90" x2="660" y2="90" />
                  <line x1="40" y1="190" x2="660" y2="190" />
                  <line x1="40" y1="290" x2="660" y2="290" />
                  <line x1="140" y1="20" x2="140" y2="360" />
                  <line x1="300" y1="20" x2="300" y2="360" />
                  <line x1="450" y1="20" x2="450" y2="360" />
                </g>

                {/* Street Names */}
                <text x="50" y="82" fill="#94a3b8" fontSize="10" fontWeight="600">MG ROAD NORTH</text>
                <text x="50" y="182" fill="#94a3b8" fontSize="10" fontWeight="600">CENTRAL AVENUE</text>
                <text x="50" y="282" fill="#94a3b8" fontSize="10" fontWeight="600">RIVERSIDE BOULEVARD</text>

                {/* Heatmap Radial Gradients */}
                <defs>
                  <radialGradient id="hotspotGrad1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                    <stop offset="40%" stopColor="#f87171" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#fee2e2" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="hotspotGrad2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f87171" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#fee2e2" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="cleanGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#34d399" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d1fae5" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Hotspots layer */}
                {showHotspots && (
                  <g className="heatmap-hotspots">
                    {/* Hotspot 1 (Downtown market) */}
                    <circle cx="180" cy="190" r="50" fill="url(#hotspotGrad1)" />
                    <circle cx="180" cy="190" r="10" fill="#dc2626" />
                    <path
                      d="M 175 185 L 180 176 L 185 185 Z"
                      fill="#ffffff"
                    />

                    {/* Hotspot 2 (Industrial cross) */}
                    <circle cx="340" cy="270" r="65" fill="url(#hotspotGrad2)" />
                    <circle cx="340" cy="270" r="9" fill="#dc2626" />

                    {/* Hotspot 3 */}
                    <circle cx="430" cy="110" r="40" fill="url(#hotspotGrad2)" opacity="0.6" />
                  </g>
                )}

                {/* Clean Zones layer */}
                {showCleanZones && (
                  <g className="heatmap-cleanzones">
                    <circle cx="320" cy="240" r="60" fill="url(#cleanGrad)" />
                    <circle cx="120" cy="110" r="55" fill="url(#cleanGrad)" />
                    <circle cx="480" cy="260" r="50" fill="url(#cleanGrad)" />
                  </g>
                )}
              </svg>
            </div>

            <div className="heatmap-footer-info">
              <span className="last-updated-badge">
                <FaSyncAlt className={isRefreshing ? "spin-icon" : ""} />
                Last updated Just now
              </span>

              <button
                type="button"
                className="clean-lang-btn"
                onClick={handleRefresh}
                style={{ fontSize: 13 }}
              >
                Refresh live metrics
              </button>
            </div>
          </section>

          {/* Right Column: Waste Categories & Top Zones */}
          <div className="pub-analytics-column">
            {/* Waste Categories Breakdown */}
            <div className="pub-analytics-card">
              <div className="analytics-card-header">
                <span>Waste Categories</span>
                <FaChartBar />
              </div>

              <div className="category-bars-list">
                <div className="category-bar-item">
                  <div className="cat-bar-labels">
                    <span>Plastic</span>
                    <span>45%</span>
                  </div>
                  <div className="cat-progress-track">
                    <div className="cat-progress-bar plastic" style={{ width: "45%" }} />
                  </div>
                </div>

                <div className="category-bar-item">
                  <div className="cat-bar-labels">
                    <span>Organic</span>
                    <span>30%</span>
                  </div>
                  <div className="cat-progress-track">
                    <div className="cat-progress-bar organic" style={{ width: "30%" }} />
                  </div>
                </div>

                <div className="category-bar-item">
                  <div className="cat-bar-labels">
                    <span>Construction</span>
                    <span>15%</span>
                  </div>
                  <div className="cat-progress-track">
                    <div className="cat-progress-bar construction" style={{ width: "15%" }} />
                  </div>
                </div>

                <div className="category-bar-item">
                  <div className="cat-bar-labels">
                    <span>E-Waste</span>
                    <span>10%</span>
                  </div>
                  <div className="cat-progress-track">
                    <div className="cat-progress-bar ewaste" style={{ width: "10%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Zones Efficiency */}
            <div className="pub-analytics-card">
              <div className="analytics-card-header">
                <span>Top Zones</span>
                <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>Efficiency</span>
              </div>

              <div className="zones-list">
                <div className="zone-item-row">
                  <div className="zone-left">
                    <span className="zone-rank-badge rank-1">1</span>
                    <div className="zone-name-wrap">
                      <strong>Zone A - Downtown</strong>
                      <span>1,204 resolved</span>
                    </div>
                  </div>
                  <span className="zone-rate">98%</span>
                </div>

                <div className="zone-item-row">
                  <div className="zone-left">
                    <span className="zone-rank-badge rank-2">2</span>
                    <div className="zone-name-wrap">
                      <strong>Zone B - Riverside</strong>
                      <span>890 resolved</span>
                    </div>
                  </div>
                  <span className="zone-rate">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pub-dash-footer">
        <BrandLogo to="/" size="sm" />
        <div style={{ display: "flex", gap: 18 }}>
          <Link to="/about">About CleanCity</Link>
          <Link to="/contact">Contact Support</Link>
          <a href="#api">Open Data API</a>
        </div>
        <span>© 2026 CleanCity Civic Initiatives. All rights reserved.</span>
      </footer>
    </div>
  );
}
