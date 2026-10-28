
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBroom, FaClipboardList, FaCheckCircle } from "react-icons/fa";

function WorkerDashboard() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "#1f2937",
              cursor: "pointer",
            }}
            title="Go to CivicPlus+ Homepage"
          >
            <div
              style={{
                width: 44,
                height: 44,
                backgroundColor: "#08775e",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "white",
                boxShadow: "0 2px 8px rgba(8,119,94,0.2)",
              }}
            >
              <FaLocationDot />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.1 }}>
                CivicPlus<span style={{ color: "#08775e" }}>+</span>
              </div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>Sanitation Services</div>
            </div>
          </Link>

          <div
            style={{
              width: 1,
              height: 36,
              background: "#d1d5db",
              display: "inline-block",
            }}
          />

          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>
              Worker Dashboard
            </h1>
            <p style={{ margin: 0, fontSize: 13, color: "#6b7280", marginTop: 2 }}>
              Welcome to CivicPlus+ Sanitation Services
            </p>
          </div>
        </div>

        <span style={styles.badge}>Sanitation Worker</span>
      </header>

      <section style={styles.banner}>
        <FaBroom size={28} />
        <div>
          <h2>Keep your city clean!</h2>
          <p>View your assigned tasks and update your work progress.</p>
        </div>
      </section>

      <section style={styles.grid}>
        <article style={styles.card}>
          <FaClipboardList color="#08775e" size={24} />
          <p>Assigned Tasks</p>
          <h2>0</h2>
        </article>

        <article style={styles.card}>
          <FaBroom color="#d98b22" size={24} />
          <p>Tasks In Progress</p>
          <h2>0</h2>
        </article>

        <article style={styles.card}>
          <FaCheckCircle color="#168052" size={24} />
          <p>Completed Tasks</p>
          <h2>0</h2>
        </article>
      </section>

      <section style={styles.tasks}>
        <h2>My Assigned Tasks</h2>
        <p>No tasks assigned yet.</p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "32px",
    background: "#f5f8f6",
    color: "#1f2937",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "28px",
  },
  badge: {
    padding: "10px 14px",
    borderRadius: "8px",
    background: "#e1f4eb",
    color: "#08775e",
    fontSize: "13px",
  },
  banner: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "24px",
    borderRadius: "12px",
    background: "#e5f6e9",
    color: "#08775e",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "18px",
    marginBottom: "24px",
  },
  card: {
    padding: "24px",
    background: "#fff",
    border: "1px solid #e1eae3",
    borderRadius: "12px",
  },
  tasks: {
    padding: "24px",
    background: "#fff",
    border: "1px solid #e1eae3",
    borderRadius: "12px",
  },
};

export default WorkerDashboard;
