import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaKey,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaEye,
  FaEyeSlash,
  FaPaperPlane,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  // Role can be passed via location.state (e.g. from LoginForm) or defaults to citizen
  const initialRole = location.state?.role || "citizen";
  const [role, setRole] = useState(initialRole);

  // Steps: 1 = Request Reset, 2 = Verify OTP & Enter New Password, 3 = Success
  const [step, setStep] = useState(1);

  // Form states
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // UI status
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const getRoleLoginPath = () => {
    switch (role) {
      case "staff":
        return "/staff/login";
      case "worker":
        return "/worker/login";
      case "citizen":
      default:
        return "/citizen/login";
    }
  };

  const getRoleTitle = () => {
    switch (role) {
      case "staff":
        return "Municipality Staff";
      case "worker":
        return "Sanitation Worker";
      case "citizen":
      default:
        return "Citizen";
    }
  };

  // Step 1: Send reset email / code
  const handleRequestReset = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }

    setIsLoading(true);

    // Simulate backend password reset request
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setResendCooldown(30);
      setInfoMessage(`A 6-digit recovery code has been sent to ${email}`);
    }, 1000);
  };

  // Step 2: Verify code and set new password
  const handleResetPassword = (e) => {
    e.preventDefault();
    setError("");

    if (!otp.trim() || otp.length < 4) {
      setError("Please enter the recovery code received on your email.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    setIsLoading(true);

    // Simulate backend password update
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1200);
  };

  // Resend code handler
  const handleResendCode = () => {
    if (resendCooldown > 0) return;
    setResendCooldown(30);
    setInfoMessage(`A fresh recovery code has been sent to ${email}`);
    setError("");
  };

  return (
    <>
      <Navbar />

      <div className="forgot-page">
        <div className="forgot-card">
          {/* Step 1 & 2: Steps progress dots */}
          {step < 3 && (
            <div className="forgot-steps-indicator" aria-hidden="true">
              <span className={`step-dot ${step >= 1 ? "active" : ""}`} />
              <span className={`step-dot ${step >= 2 ? "active" : ""}`} />
            </div>
          )}

          {/* STEP 1: Request Email */}
          {step === 1 && (
            <>
              <div className="forgot-header">
                <div className="forgot-icon-badge">
                  <FaKey />
                </div>
                <h1>Forgot Password?</h1>
                <p>
                  No worries! Enter your registered account email and we'll send you
                  instructions to reset your password.
                </p>
              </div>

              {/* Portal / Role Switcher */}
              <div className="role-pills" role="tablist" aria-label="Account Role">
                <button
                  type="button"
                  className={`role-pill ${role === "citizen" ? "active" : ""}`}
                  onClick={() => setRole("citizen")}
                >
                  Citizen
                </button>
                <button
                  type="button"
                  className={`role-pill ${role === "staff" ? "active" : ""}`}
                  onClick={() => setRole("staff")}
                >
                  Staff
                </button>
                <button
                  type="button"
                  className={`role-pill ${role === "worker" ? "active" : ""}`}
                  onClick={() => setRole("worker")}
                >
                  Worker
                </button>
              </div>

              {error && (
                <div className="forgot-alert alert-error" role="alert">
                  <FaShieldAlt /> {error}
                </div>
              )}

              <form onSubmit={handleRequestReset} className="forgot-form">
                <div className="form-group">
                  <label htmlFor="reset-email">Email Address</label>
                  <div className="input-wrapper">
                    <FaEnvelope />
                    <input
                      id="reset-email"
                      type="email"
                      placeholder={`Enter your ${getRoleTitle().toLowerCase()} email`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="forgot-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending recovery link..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Recovery Code
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          {/* STEP 2: Verify Code & Reset */}
          {step === 2 && (
            <>
              <div className="forgot-header">
                <div className="forgot-icon-badge">
                  <FaShieldAlt />
                </div>
                <h1>Reset Password</h1>
                <p>
                  Enter the verification code sent to <strong>{email}</strong> and choose a
                  new password.
                </p>
              </div>

              {infoMessage && (
                <div className="forgot-alert alert-info" role="status">
                  <FaCheckCircle /> {infoMessage}
                </div>
              )}

              {error && (
                <div className="forgot-alert alert-error" role="alert">
                  <FaShieldAlt /> {error}
                </div>
              )}

              <form onSubmit={handleResetPassword} className="forgot-form">
                <div className="form-group">
                  <label htmlFor="otp-code">Verification Code</label>
                  <div className="input-wrapper">
                    <FaKey />
                    <input
                      id="otp-code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <div className="resend-row">
                  <span>Didn't receive the code?</span>
                  <button
                    type="button"
                    className="link-button"
                    onClick={handleResendCode}
                    disabled={resendCooldown > 0}
                  >
                    {resendCooldown > 0
                      ? `Resend in ${resendCooldown}s`
                      : "Resend Code"}
                  </button>
                </div>

                <div className="form-group">
                  <label htmlFor="new-password">New Password</label>
                  <div className="input-wrapper">
                    <FaLock />
                    <input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 6 characters"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm New Password</label>
                  <div className="input-wrapper">
                    <FaLock />
                    <input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Re-enter new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="forgot-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Updating password..." : "Confirm & Reset Password"}
                </button>
              </form>
            </>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === 3 && (
            <div className="success-box">
              <div className="success-icon-wrap">
                <FaCheckCircle />
              </div>
              <h2>Password Reset Successful!</h2>
              <p>
                Your password for <strong>{email}</strong> has been updated
                successfully. You can now log into your account using your new
                credentials.
              </p>

              <button
                type="button"
                className="forgot-button"
                onClick={() => navigate(getRoleLoginPath())}
              >
                Proceed to Login
              </button>
            </div>
          )}

          {/* Footer Back Links */}
          <div className="forgot-footer-links">
            <Link to={getRoleLoginPath()} className="back-to-login">
              <FaArrowLeft /> Back to {getRoleTitle()} Login
            </Link>

            <Link to="/" className="back-home-link">
              ← Return to CivicPlus+ Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
