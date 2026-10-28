
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const initialReports = [
  {
    id: "CP-1001",
    title: "Garbage on roadside",
    location: "Main Market Road",
    citizen: "Rahul Kumar",
    date: "2026-10-24",
    priority: "High",
    status: "Pending",
  },
  {
    id: "CP-1002",
    title: "Overflowing dustbin",
    location: "City Park",
    citizen: "Priya Singh",
    date: "2026-10-23",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: "CP-1003",
    title: "Plastic waste dumping",
    location: "Near Bus Stand",
    citizen: "Amit Verma",
    date: "2026-10-22",
    priority: "High",
    status: "Pending",
  },
  {
    id: "CP-1004",
    title: "Garbage collection completed",
    location: "Sector 5",
    citizen: "Neha Gupta",
    date: "2026-10-21",
    priority: "Low",
    status: "Resolved",
  },
];

const statusColors = {
  Pending: { bg: "#fff1d6", color: "#a16207" },
  "In Progress": { bg: "#dbeafe", color: "#1d4ed8" },
  Resolved: { bg: "#dcfce7", color: "#15803d" },
};

export default function StaffDashboard() {
  const [reports, setReports] = useState(initialReports);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);
  const [notice, setNotice] = useState("");

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesFilter =
        filter === "All" || report.status === filter;

      const query = search.toLowerCase();
      const matchesSearch = [
        report.id,
        report.title,
        report.location,
        report.citizen,
      ].some((value) => value.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [reports, filter, search]);

  const updateStatus = (id, status) => {
    setReports((previous) =>
      previous.map((report) =>
        report.id === id ? { ...report, status } : report
      )
    );

    setSelectedReport((previous) =>
      previous?.id === id ? { ...previous, status } : previous
    );

    setNotice(`${id} updated to "${status}".`);
  };

  const counts = {
    total: reports.length,
    pending: reports.filter((r) => r.status === "Pending").length,
    progress: reports.filter((r) => r.status === "In Progress").length,
    resolved: reports.filter((r) => r.status === "Resolved").length,
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f3f7f4",
      color: "#18352a",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      background: "#14532d",
      color: "white",
      padding: "20px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
    },
    content: {
      maxWidth: 1250,
      margin: "0 auto",
      padding: "30px 20px",
    },
    card: {
      background: "white",
      border: "1px solid #e2ebe4",
      borderRadius: 14,
      padding: 22,
      boxShadow: "0 3px 12px rgba(20,83,45,0.04)",
    },
    button: {
      border: "none",
      borderRadius: 8,
      padding: "10px 14px",
      cursor: "pointer",
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            title="Go to CivicPlus+ Homepage"
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#22c55e",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <FaLocationDot />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.1 }}>
                CivicPlus<span style={{ color: "#86efac" }}>+</span>
              </div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>Staff Portal</div>
            </div>
          </Link>

          <div
            style={{
              width: 1,
              height: 36,
              background: "rgba(255,255,255,0.25)",
              display: "inline-block",
            }}
          />

          <div>
            <h1 style={{ margin: "0", fontSize: 22, fontWeight: 700 }}>
              Staff Dashboard
            </h1>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 2 }}>
              Manage public waste complaints and cleanup activities.
            </div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Staff Administrator</div>
          <div style={{ fontSize: 12, opacity: 0.85, marginTop: 3 }}>
            Waste Management Department
          </div>
        </div>
      </header>

      <main style={styles.content}>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ marginBottom: 6 }}>Overview</h2>
          <p style={{ margin: 0, color: "#64756b" }}>
            Monitor reports and keep your city clean.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {[
            { label: "Total Reports", value: counts.total, icon: "📋", color: "#166534" },
            { label: "Pending", value: counts.pending, icon: "⏳", color: "#b45309" },
            { label: "In Progress", value: counts.progress, icon: "🚛", color: "#1d4ed8" },
            { label: "Resolved", value: counts.resolved, icon: "✅", color: "#15803d" },
          ].map((item) => (
            <div key={item.label} style={styles.card}>
              <div style={{ fontSize: 25 }}>{item.icon}</div>
              <div style={{ color: "#64756b", marginTop: 12, fontSize: 14 }}>
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: item.color,
                  marginTop: 5,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <section style={styles.card}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 15,
              marginBottom: 20,
            }}
          >
            <div>
              <h2 style={{ margin: "0 0 6px" }}>Citizen Reports</h2>
              <p style={{ margin: 0, color: "#64756b", fontSize: 14 }}>
                Search reports and update their progress.
              </p>
            </div>

            <button
              style={{
                ...styles.button,
                background: "#166534",
                color: "white",
              }}
              onClick={() => {
                const csv = [
                  ["ID", "Issue", "Location", "Citizen", "Date", "Priority", "Status"],
                  ...reports.map((r) => [
                    r.id, r.title, r.location, r.citizen,
                    r.date, r.priority, r.status,
                  ]),
                ]
                  .map((row) =>
                    row.map((value) =>
                      `"${String(value).replace(/"/g, '""')}"`
                    ).join(",")
                  )
                  .join("\n");

                const url = URL.createObjectURL(
                  new Blob(["\uFEFF" + csv], {
                    type: "text/csv;charset=utf-8;",
                  })
                );

                const link = document.createElement("a");
                link.href = url;
                link.download = "civicplus-reports.csv";
                link.click();
                URL.revokeObjectURL(url);
              }}
            >
              ↓ Export CSV
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search ID, issue, citizen..."
              aria-label="Search reports"
              style={{
                padding: 12,
                border: "1px solid #d5e1d7",
                borderRadius: 8,
                minWidth: 0,
                fontSize: 14,
              }}
            />

            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              aria-label="Filter by status"
              style={{
                padding: 12,
                border: "1px solid #d5e1d7",
                borderRadius: 8,
                background: "white",
                fontSize: 14,
              }}
            >
              <option value="All">All Reports</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          {notice && (
            <div
              role="status"
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding: 12,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              {notice}
              <button
                onClick={() => setNotice("")}
                aria-label="Dismiss notification"
                style={{
                  float: "right",
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          )}

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: 14,
              }}
            >
              <thead>
                <tr style={{ background: "#f3f7f4" }}>
                  {["Report", "Location", "Citizen", "Priority", "Status", "Action"].map(
                    (heading) => (
                      <th
                        key={heading}
                        style={{
                          padding: 13,
                          borderBottom: "1px solid #e2ebe4",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id}>
                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      <strong>{report.title}</strong>
                      <div style={{ color: "#758278", marginTop: 5 }}>
                        {report.id} · {report.date}
                      </div>
                    </td>

                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      {report.location}
                    </td>

                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      {report.citizen}
                    </td>

                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      <span
                        style={{
                          color: report.priority === "High" ? "#b91c1c" :
                            report.priority === "Medium" ? "#a16207" : "#15803d",
                          fontWeight: 600,
                        }}
                      >
                        {report.priority}
                      </span>
                    </td>

                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "6px 9px",
                          borderRadius: 20,
                          whiteSpace: "nowrap",
                          background: statusColors[report.status].bg,
                          color: statusColors[report.status].color,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {report.status}
                      </span>
                    </td>

                    <td style={{ padding: 13, borderBottom: "1px solid #edf1ee" }}>
                      <button
                        onClick={() => setSelectedReport(report)}
                        style={{
                          ...styles.button,
                          background: "#e5f3e8",
                          color: "#166534",
                        }}
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredReports.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ padding: 30, textAlign: "center" }}>
                      No reports match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 14, color: "#64756b", fontSize: 13 }}>
            Showing {filteredReports.length} of {reports.length} reports
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            color: "#718076",
            fontSize: 13,
            padding: "25px 0 10px",
          }}
        >
          © 2026 CivicPlus · Building a cleaner and greener city
        </footer>
      </main>

      {selectedReport && (
        <div
          onClick={() => setSelectedReport(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-dialog-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 460,
              background: "white",
              borderRadius: 16,
              padding: 25,
              boxSizing: "border-box",
            }}
          >
            <h2 id="report-dialog-title">Manage Report</h2>
            <p><strong>ID:</strong> {selectedReport.id}</p>
            <p><strong>Issue:</strong> {selectedReport.title}</p>
            <p><strong>Location:</strong> {selectedReport.location}</p>
            <p><strong>Reported by:</strong> {selectedReport.citizen}</p>

            <label
              htmlFor="report-status"
              style={{ display: "block", marginTop: 20, marginBottom: 8 }}
            >
              Update status
            </label>

            <select
              id="report-status"
              value={selectedReport.status}
              onChange={(event) =>
                updateStatus(selectedReport.id, event.target.value)
              }
              style={{
                width: "100%",
                padding: 12,
                border: "1px solid #d5e1d7",
                borderRadius: 8,
                background: "white",
              }}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <button
              onClick={() => setSelectedReport(null)}
              style={{
                ...styles.button,
                width: "100%",
                marginTop: 20,
                background: "#166534",
                color: "white",
              }}
            >
              Save and Close
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
