import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

import "./LoginForm.css";

function LoginForm({ role }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isCitizen = role === "citizen";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login
    if (isCitizen) {
      navigate("/citizen/dashboard");
    } else if (role === "staff") {
      navigate("/staff/dashboard");
    } else {
      navigate("/worker/dashboard");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <div className="login-logo">📍</div>

          <h1>
            {isCitizen
              ? "Citizen Login"
              : role === "staff"
              ? "Municipality Staff Login"
              : "Sanitation Worker Login"}
          </h1>

          <p>
            Sign in to your CivicPlus+ account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-wrapper">
              <FaLock />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        {isCitizen && (
          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/citizen/register">
              Create an account
            </Link>
          </p>
        )}

        <Link to="/" className="back-home">
          ← Back to CivicPlus+
        </Link>

      </div>

    </div>
  );
}

export default LoginForm;