import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGlobe, FaBuilding, FaLock, FaEnvelope } from "react-icons/fa";

import CityBackdrop from "../components/CityBackdrop";
import "./CitizenLogin.css";

export default function StaffLogin() {
  const navigate = useNavigate();
  const [municipality, setMunicipality] = useState("Metropolis City Corporation");
  const [department, setDepartment] = useState("Waste Management & Sanitation");
  const [email, setEmail] = useState("staff@municipality.gov");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/staff/dashboard");
    }, 700);
  };

  return (
    <div className="clean-auth-page">
      <CityBackdrop opacity={0.65} />

      {/* Top Bar matching PPT Page 11 */}
      <header className="clean-auth-topbar">
        <Link to="/" className="back-role-btn">
          <FaArrowLeft />
          <span>Back to role selection</span>
        </Link>

        <button type="button" className="clean-lang-btn">
          <FaGlobe />
          <span>English / Regional</span>
        </button>
      </header>

      {/* Centered Staff Login Card */}
      <main className="clean-auth-card-container">
        <div className="clean-auth-card" style={{ maxWidth: 460 }}>
          <div className="auth-badge-icon" style={{ background: "#064e3b" }}>
            <FaBuilding />
          </div>

          <h1 className="auth-card-title">Municipal Staff Login</h1>
          <p className="auth-card-subtitle">
            Access the CleanCity administration dashboard.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-input-group">
              <label htmlFor="municipality">Municipality</label>
              <select
                id="municipality"
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  border: "1px solid #d1d5db",
                  borderRadius: 9,
                  padding: "0 14px",
                  fontSize: 14,
                  backgroundColor: "#fff",
                  color: "#111827",
                  outline: "none",
                }}
              >
                <option value="Metropolis City Corporation">Metropolis City Corporation</option>
                <option value="Central Municipal Council">Central Municipal Council</option>
                <option value="Riverside Urban Development Board">Riverside Urban Development Board</option>
              </select>
            </div>

            <div className="auth-input-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  border: "1px solid #d1d5db",
                  borderRadius: 9,
                  padding: "0 14px",
                  fontSize: 14,
                  backgroundColor: "#fff",
                  color: "#111827",
                  outline: "none",
                }}
              >
                <option value="Waste Management & Sanitation">Waste Management & Sanitation</option>
                <option value="Urban Infrastructure & Roads">Urban Infrastructure & Roads</option>
                <option value="Public Parks & Greenery">Public Parks & Greenery</option>
                <option value="Drainage & Sewerage Board">Drainage & Sewerage Board</option>
              </select>
            </div>

            <div className="auth-input-group">
              <label htmlFor="staff-email">Email Address</label>
              <input
                id="staff-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  border: "1px solid #d1d5db",
                  borderRadius: 9,
                  padding: "0 14px",
                  fontSize: 14,
                  backgroundColor: "#fff",
                  color: "#111827",
                  outline: "none",
                }}
                required
              />
            </div>

            <div className="auth-input-group">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                <label htmlFor="staff-password" style={{ margin: 0 }}>Password</label>
                <Link
                  to="/forgot-password"
                  state={{ role: "staff" }}
                  style={{ fontSize: 12.5, color: "#08775e", fontWeight: 600 }}
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                id="staff-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  height: 48,
                  border: "1px solid #d1d5db",
                  borderRadius: 9,
                  padding: "0 14px",
                  fontSize: 14,
                  backgroundColor: "#fff",
                  color: "#111827",
                  outline: "none",
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-cta-btn green"
              disabled={loading}
              style={{ marginTop: 10 }}
            >
              {loading ? "Verifying Credentials..." : "Login as Administrator →"}
            </button>
          </form>
        </div>
      </main>

      <footer className="clean-auth-bottom-footer">
        © 2026 CleanCity. All rights reserved.
      </footer>
    </div>
  );
}