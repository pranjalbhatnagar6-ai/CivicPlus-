import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGlobe, FaRecycle, FaUserShield, FaArrowRight } from "react-icons/fa";

import CityBackdrop from "../components/CityBackdrop";
import "./CitizenLogin.css";

export default function CitizenLogin() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState("enter_phone"); // "enter_phone" | "enter_otp"
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("enter_otp");
    }, 700);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/citizen/dashboard");
    }, 800);
  };

  const handleGuestLogin = () => {
    localStorage.setItem("clean_city_guest", "true");
    navigate("/citizen/dashboard");
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="clean-auth-page">
      <CityBackdrop opacity={0.65} />

      {/* Top Bar matching PPT Page 3 */}
      <header className="clean-auth-topbar">
        <Link to="/" className="back-role-btn">
          <FaArrowLeft />
          <span>Back to role selection</span>
        </Link>

        <button type="button" className="clean-lang-btn">
          <FaGlobe />
          <span>English ▾</span>
        </button>
      </header>

      {/* Centered Login Card */}
      <main className="clean-auth-card-container">
        <div className="clean-auth-card">
          <div className="auth-badge-icon">
            <FaRecycle />
          </div>

          <h1 className="auth-card-title">CleanCity</h1>
          <p className="auth-card-subtitle">
            Report garbage. Track cleanup. Build a cleaner city.
          </p>

          {error && (
            <div style={{ color: "#dc2626", fontSize: 13, marginBottom: 14, fontWeight: 500 }}>
              {error}
            </div>
          )}

          {step === "enter_phone" ? (
            <form onSubmit={handleSendOtp} className="auth-form">
              <div className="auth-input-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="mobile-input-split">
                  <span className="country-code-btn">+91 ▾</span>
                  <input
                    id="mobile"
                    type="tel"
                    className="mobile-number-input"
                    placeholder="Enter your number"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    autoFocus
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="auth-cta-btn amber"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP →"}
              </button>

              <div className="auth-divider">
                <span>OR</span>
              </div>

              <button
                type="button"
                className="auth-secondary-btn"
                onClick={handleGuestLogin}
              >
                <FaUserShield /> Continue as guest / report anonymously
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="auth-form">
              <div className="auth-input-group">
                <label style={{ textAlign: "center", display: "block" }}>
                  Enter verification code sent to +91 {phoneNumber}
                </label>
                <div className="otp-inputs-row">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      className="otp-digit"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="auth-cta-btn green"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify & Access Dashboard →"}
              </button>

              <button
                type="button"
                onClick={() => setStep("enter_phone")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#08775e",
                  fontSize: 13,
                  marginTop: 14,
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Change mobile number
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="clean-auth-bottom-footer">
        © 2026 CleanCity Civic Portal. <a href="#terms">Terms</a> & <a href="#privacy">Privacy</a> applied.
      </footer>
    </div>
  );
}
