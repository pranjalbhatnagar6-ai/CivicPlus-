import { useState } from "react";
import { FaExclamationTriangle, FaUsers, FaClock, FaCheck, FaCompressAlt } from "react-icons/fa";

import StaffAdminLayout from "../components/StaffAdminLayout";
import "./StaffClusters.css";

const clustersData = [
  {
    id: 1,
    title: "Waste Management - Market Dumping",
    severity: "Critical",
    severityClass: "tag-critical",
    reportedCount: 37,
    updatedAgo: "2h ago",
    mergedIds: ["#CC-5284", "#CC-5290", "#CC-5301"],
    extraCount: 34,
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=80",
    managed: false,
  },
  {
    id: 2,
    title: "Infrastructure - 5th Ave Crossing",
    severity: "Moderate",
    severityClass: "tag-moderate",
    reportedCount: 12,
    updatedAgo: "5h ago",
    mergedIds: ["#CC-4912", "#CC-4915"],
    extraCount: 10,
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&auto=format&fit=crop&q=80",
    managed: false,
  },
  {
    id: 3,
    title: "Public Parks - Overgrown Vegetation",
    severity: "Low",
    severityClass: "tag-low",
    reportedCount: 8,
    updatedAgo: "1d ago",
    mergedIds: ["#CC-4100", "#CC-4108"],
    extraCount: 6,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80",
    managed: false,
  },
];

export default function StaffClusters() {
  const [clusters, setClusters] = useState(clustersData);

  const handleManage = (id) => {
    setClusters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, managed: true } : c))
    );
    alert(`Cluster merged into a unified master work ticket! Dispatched to field crew.`);
  };

  return (
    <StaffAdminLayout activeTab="clusters">
      <div className="clusters-container">
        <header className="clusters-header-wrap">
          <h1>Duplicate Clusters (Active)</h1>
          <p>Identify and manage overlapping reports to optimize municipal response.</p>
        </header>

        {/* 3 Cards Grid matching PPT Page 16 */}
        <div className="clusters-cards-grid">
          {clusters.map((cluster) => (
            <div key={cluster.id} className="cluster-card">
              <div className="cluster-img-box">
                <img src={cluster.image} alt={cluster.title} />
                <span className={`cluster-severity-tag ${cluster.severityClass}`}>
                  <FaExclamationTriangle /> {cluster.severity}
                </span>
              </div>

              <div className="cluster-card-body">
                <h3 className="cluster-card-title">{cluster.title}</h3>

                <div className="cluster-stats-banner">
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <FaUsers /> Reported by {cluster.reportedCount} citizens
                  </span>
                  <span style={{ color: "#64748b", fontWeight: 500 }}>
                    {cluster.updatedAgo}
                  </span>
                </div>

                <div className="cluster-ids-box">
                  <span className="cluster-ids-label">Merged Complaint IDs:</span>
                  <div className="cluster-ids-tags-row">
                    {cluster.mergedIds.map((id) => (
                      <span key={id} className="complaint-chip">{id}</span>
                    ))}
                    {cluster.extraCount > 0 && (
                      <span className="complaint-chip">+{cluster.extraCount} more</span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="manage-one-btn"
                  onClick={() => handleManage(cluster.id)}
                  style={{ background: cluster.managed ? "#10b981" : "#08775e" }}
                >
                  <FaCompressAlt />
                  <span>{cluster.managed ? "Unified Ticket Active ✔" : "Manage as One"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StaffAdminLayout>
  );
}
