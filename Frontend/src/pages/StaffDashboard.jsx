import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaFilter,
  FaCheck,
  FaUserCheck,
  FaSyncAlt,
  FaTimes,
  FaEllipsisV,
} from "react-icons/fa";

import StaffAdminLayout from "../components/StaffAdminLayout";
import "./StaffDashboard.css";

const complaintsRows = [
  {
    id: "CC-5284",
    category: "Waste Mgmt",
    location: "Downtown Plaza",
    priority: "High",
    status: "Pending",
    assignedTo: "Unassigned",
    assignedAvatar: null,
    date: "Oct 24, 09:30 AM",
    photo: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-5285",
    category: "Infrastructure",
    location: "North Zone, 5th Ave",
    priority: "Medium",
    status: "In Progress",
    assignedTo: "M. Johnson",
    assignedAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    date: "Oct 23, 14:15 PM",
    photo: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-5286",
    category: "Water Supply",
    location: "South Park Dist.",
    priority: "Low",
    status: "Resolved",
    assignedTo: "S. Rivera",
    assignedAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    date: "Oct 21, 08:00 AM",
    photo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-5287",
    category: "Waste Mgmt",
    location: "Central Market Gate 1",
    priority: "High",
    status: "Pending",
    assignedTo: "Unassigned",
    assignedAvatar: null,
    date: "Oct 20, 11:45 AM",
    photo: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "CC-5288",
    category: "Parks & Greenery",
    location: "Botanical Boulevard",
    priority: "Low",
    status: "Resolved",
    assignedTo: "Rajesh Kumar",
    assignedAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    date: "Oct 19, 16:30 PM",
    photo: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=100&auto=format&fit=crop&q=80",
  },
];

export default function StaffDashboard() {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState(["CC-5284", "CC-5285", "CC-5286"]);
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(complaintsRows.map((r) => r.id));
    } else {
      setSelectedIds([]);
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <StaffAdminLayout activeTab="dashboard">
      <div className="staff-dash-container">
        {/* Title Header Bar matching PPT Page 12 */}
        <header className="staff-dash-header-bar">
          <div className="staff-dash-title-wrap">
            <h1>Complaints Management</h1>
            <p>Review, assign, and track civic issues reported by citizens.</p>
          </div>

          <button
            type="button"
            className="manual-entry-btn"
            onClick={() => navigate("/citizen/report")}
          >
            <FaPlus />
            <span>New Manual Entry</span>
          </button>
        </header>

        {/* Filters Toolbar */}
        <div className="staff-filter-toolbar">
          <div className="filter-dropdowns-group">
            <select
              className="staff-filter-select"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="All Locations">Location ▾</option>
              <option value="Downtown">Downtown Plaza</option>
              <option value="North Zone">North Zone</option>
              <option value="South Park">South Park Dist.</option>
            </select>

            <select
              className="staff-filter-select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All Priorities">! Severity ▾</option>
              <option value="High">High Severity</option>
              <option value="Medium">Medium Severity</option>
              <option value="Low">Low Severity</option>
            </select>

            <select className="staff-filter-select">
              <option>Category ▾</option>
              <option>Waste Management</option>
              <option>Infrastructure</option>
              <option>Water Supply</option>
            </select>

            <select
              className="staff-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Statuses">Status ▾</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <select className="staff-filter-select">
              <option>Last 30 Days ▾</option>
              <option>Today</option>
              <option>This Week</option>
              <option>All Time</option>
            </select>
          </div>

          <button
            type="button"
            className="clear-filters-btn"
            onClick={() => {
              setLocationFilter("All Locations");
              setPriorityFilter("All Priorities");
              setStatusFilter("All Statuses");
            }}
          >
            <FaTimes />
            <span>Clear Filters</span>
          </button>
        </div>

        {/* Bulk Action Bar (when rows selected) */}
        {selectedIds.length > 0 && (
          <div className="bulk-action-bar">
            <div className="bulk-selected-count">
              <FaCheck />
              <span>{selectedIds.length} items selected</span>
            </div>

            <div className="bulk-buttons-group">
              <button
                type="button"
                className="bulk-btn"
                onClick={() => alert(`Bulk assigned ${selectedIds.length} complaints to field staff`)}
              >
                <FaUserCheck />
                <span>Bulk Assign</span>
              </button>

              <button
                type="button"
                className="bulk-btn"
                onClick={() => alert(`Updated status for ${selectedIds.length} complaints`)}
              >
                <FaSyncAlt />
                <span>Update Status</span>
              </button>

              <button
                type="button"
                className="bulk-close-btn"
                onClick={() => setSelectedIds([])}
                title="Deselect all"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Complaints Data Table */}
        <div className="staff-table-card">
          <table className="staff-data-table">
            <thead>
              <tr>
                <th style={{ width: 40 }}>
                  <input
                    type="checkbox"
                    checked={selectedIds.length === complaintsRows.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th style={{ width: 70 }}>Photo</th>
                <th>ID & Category</th>
                <th>Location</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Date Reported</th>
                <th style={{ width: 40 }} />
              </tr>
            </thead>
            <tbody>
              {complaintsRows.map((row) => {
                const isChecked = selectedIds.includes(row.id);
                return (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleSelectRow(row.id)}
                      />
                    </td>
                    <td>
                      <img src={row.photo} alt={row.category} className="table-thumb-img" />
                    </td>
                    <td>
                      <div className="table-id-block">
                        <strong onClick={() => navigate(`/staff/complaint/${row.id}`)}>
                          #{row.id}
                        </strong>
                        <span>{row.category}</span>
                      </div>
                    </td>
                    <td>{row.location}</td>
                    <td>
                      <span
                        className={`priority-pill ${
                          row.priority === "High"
                            ? "high"
                            : row.priority === "Medium"
                            ? "medium"
                            : "low"
                        }`}
                      >
                        ● {row.priority}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`status-pill ${
                          row.status === "Pending"
                            ? "pending"
                            : row.status === "In Progress"
                            ? "in-progress"
                            : "resolved"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {row.assignedAvatar && (
                          <img
                            src={row.assignedAvatar}
                            alt=""
                            style={{ width: 24, height: 24, borderRadius: "50%" }}
                          />
                        )}
                        <span style={{ color: row.assignedTo === "Unassigned" ? "#94a3b8" : "inherit" }}>
                          {row.assignedTo}
                        </span>
                      </div>
                    </td>
                    <td style={{ color: "#64748b", fontSize: 13 }}>{row.date}</td>
                    <td>
                      <button
                        type="button"
                        style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}
                        onClick={() => navigate(`/staff/complaint/${row.id}`)}
                      >
                        <FaEllipsisV />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="table-pagination-footer">
            <span>Showing 1-10 of 248 items</span>

            <div className="pagination-pages-group">
              <button type="button" className="page-num-btn">‹</button>
              <button type="button" className="page-num-btn active">1</button>
              <button type="button" className="page-num-btn">2</button>
              <button type="button" className="page-num-btn">3</button>
              <span style={{ padding: "0 4px" }}>...</span>
              <button type="button" className="page-num-btn">25</button>
              <button type="button" className="page-num-btn">›</button>
            </div>
          </div>
        </div>
      </div>
    </StaffAdminLayout>
  );
}
