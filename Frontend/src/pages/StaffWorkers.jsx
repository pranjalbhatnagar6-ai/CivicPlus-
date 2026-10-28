import { useState } from "react";
import { FaSearch, FaPlus, FaStar, FaPhone, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

import StaffAdminLayout from "../components/StaffAdminLayout";
import "./StaffWorkers.css";

const workersList = [
  {
    id: "W-8492",
    name: "Rajesh Kumar",
    title: "Senior Field Operator",
    status: "On Task",
    statusClass: "orange",
    tasks: 3,
    avgTime: "2h 15m",
    rating: 4.2,
    phone: "+91 98765 43210",
    zone: "Zone 4, Downtown Sector",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    activeTasksCount: 3,
    completedTasksCount: 12,
  },
  {
    id: "W-8493",
    name: "Amit Singh",
    title: "Sanitation Technician",
    status: "Available",
    statusClass: "green",
    tasks: 0,
    avgTime: "1h 45m",
    rating: 4.8,
    phone: "+91 98765 11223",
    zone: "Zone 1, North District",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    activeTasksCount: 0,
    completedTasksCount: 24,
  },
  {
    id: "W-8494",
    name: "Sunita Devi",
    title: "Field Supervisor",
    status: "On Task",
    statusClass: "orange",
    tasks: 1,
    avgTime: "3h 10m",
    rating: 3.1,
    phone: "+91 98765 99887",
    zone: "Zone 3, Eastside",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    activeTasksCount: 1,
    completedTasksCount: 8,
  },
  {
    id: "W-8495",
    name: "Vikram Kapoor",
    title: "Rapid Response Crew",
    status: "Available",
    statusClass: "green",
    tasks: 0,
    avgTime: "1h 15m",
    rating: 4.5,
    phone: "+91 98765 33445",
    zone: "Zone 2, Westside",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    activeTasksCount: 0,
    completedTasksCount: 19,
  },
];

export default function StaffWorkers() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedWorker, setSelectedWorker] = useState(workersList[0]);

  const filtered = workersList.filter((w) => {
    const matchFilter = filter === "All" || w.status === filter;
    const matchSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <StaffAdminLayout activeTab="workers">
      <div className="staff-workers-page-wrap">
        {/* Table Area */}
        <div className="workers-table-area">
          <div className="workers-top-controls">
            <div className="workers-search-filter-group">
              <div className="worker-search-input-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="worker-filter-pills">
                {["All", "Available", "On Task"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`filter-pill-tab ${filter === tab ? "active" : ""}`}
                    onClick={() => setFilter(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="add-worker-btn"
              onClick={() => alert("Add Worker modal dialog")}
            >
              <FaPlus />
              <span>Add New Worker</span>
            </button>
          </div>

          {/* Roster Table matching PPT Page 15 */}
          <div className="staff-table-card">
            <table className="staff-data-table">
              <thead>
                <tr>
                  <th>Worker</th>
                  <th>Status</th>
                  <th>Tasks</th>
                  <th>Avg. Res Time</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((w) => (
                  <tr
                    key={w.id}
                    onClick={() => setSelectedWorker(w)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: selectedWorker?.id === w.id ? "#f4f9f6" : "transparent",
                    }}
                  >
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <img
                          src={w.avatar}
                          alt={w.name}
                          style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover" }}
                        />
                        <div>
                          <strong>{w.name}</strong>
                          <div style={{ fontSize: 11.5, color: "#64748b" }}>ID: {w.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: 99,
                          background: w.status === "Available" ? "#ecfdf5" : "#ffedd5",
                          color: w.status === "Available" ? "#059669" : "#ea580c",
                        }}
                      >
                        ● {w.status}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700 }}>{w.tasks}</td>
                    <td style={{ color: "#64748b" }}>{w.avgTime}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#f59e0b" }}>
                        <FaStar />
                        <span style={{ color: "#111827", fontWeight: 700, fontSize: 13 }}>
                          {w.rating}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Worker Profile Drawer matching PPT Page 15 */}
        {selectedWorker && (
          <aside className="worker-profile-drawer">
            <div className="worker-drawer-top">
              <button
                type="button"
                className="drawer-close-worker-btn"
                onClick={() => setSelectedWorker(null)}
              >
                ✕
              </button>

              <img
                src={selectedWorker.avatar}
                alt={selectedWorker.name}
                className="worker-avatar-large"
              />
              <h3 className="worker-drawer-name">{selectedWorker.name}</h3>
              <span className="worker-drawer-sub">
                {selectedWorker.title} · ID: {selectedWorker.id}
              </span>
            </div>

            {/* Counters */}
            <div className="worker-stat-counters-row">
              <div className="worker-stat-box">
                <strong>{selectedWorker.activeTasksCount}</strong>
                <span>Active</span>
              </div>
              <div className="worker-stat-box">
                <strong>{selectedWorker.completedTasksCount}</strong>
                <span>Completed</span>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#64748b", textTransform: "uppercase", marginBottom: 8 }}>
                CONTACT INFORMATION
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "#374151" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaPhone style={{ color: "#08775e", fontSize: 11 }} />
                  <span>{selectedWorker.phone}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaMapMarkerAlt style={{ color: "#08775e", fontSize: 11 }} />
                  <span>{selectedWorker.zone}</span>
                </div>
              </div>
            </div>

            {/* Current Tasks */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "#64748b", textTransform: "uppercase" }}>
                  CURRENT TASKS ({selectedWorker.tasks})
                </span>
                <span style={{ fontSize: 11.5, color: "#08775e", fontWeight: 700 }}>View All</span>
              </div>

              <div className="worker-tasks-list">
                <div className="worker-task-item">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong>C-1042: Illegal Dumping</strong>
                    <span style={{ color: "#ea580c", fontSize: 10 }}>● High</span>
                  </div>
                  <span style={{ color: "#64748b" }}>12 Main St, Behind City Mall</span>
                </div>

                <div className="worker-task-item">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong>C-1045: Broken Bin</strong>
                    <span style={{ color: "#f59e0b", fontSize: 10 }}>● Medium</span>
                  </div>
                  <span style={{ color: "#64748b" }}>Park Avenue, Gate 2</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="worker-drawer-actions-row">
              <button
                type="button"
                className="worker-msg-btn"
                onClick={() => alert(`Direct SMS message channel opened with ${selectedWorker.name}`)}
              >
                Message
              </button>
              <button
                type="button"
                className="worker-assign-btn"
                onClick={() => alert(`Task assigned to ${selectedWorker.name}`)}
              >
                Assign Task
              </button>
            </div>
          </aside>
        )}
      </div>
    </StaffAdminLayout>
  );
}
