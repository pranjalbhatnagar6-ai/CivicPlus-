
import { FaBroom, FaClipboardList, FaCheckCircle } from "react-icons/fa";

function WorkerDashboard() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1>Worker Dashboard</h1>
          <p>Welcome to CivicPlus+ Sanitation Services</p>
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
