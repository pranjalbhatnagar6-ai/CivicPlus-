
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = { name: "", email: "", password: "", confirmPassword: "" };

export default function CitizenLogin() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(initialForm);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
    setMessage("");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setForm(initialForm);
    setError("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (mode === "login") {
      if (!form.password) {
        setError("Please enter your password.");
        return;
      }

      if (remember) {
        localStorage.setItem("civicplus_remembered_email", form.email.trim());
      } else {
        localStorage.removeItem("civicplus_remembered_email");
      }

      // Demo navigation only. Real authentication requires a backend.
      navigate("/citizen/dashboard");
      return;
    }

    if (mode === "register") {
      if (!form.name.trim()) {
        setError("Please enter your full name.");
        return;
      }

      if (form.password.length < 8) {
        setError("Password must contain at least 8 characters.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setMessage(
        "Registration form validated. Account creation requires a connected backend."
      );
      return;
    }

    setMessage(
      "Password reset requested. Connect an authentication backend to send a real reset email."
    );
  };

  const styles = {
    page: {
      minHeight: "calc(100vh - 80px)",
      background: "#f4f9f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "35px 16px",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: 400,
      background: "#fff",
      border: "1px solid #e0e8e3",
      borderRadius: 15,
      padding: "34px",
      boxSizing: "border-box",
      boxShadow: "0 8px 30px rgba(20, 60, 40, 0.07)",
    },
    input: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: "12px",
      border: "1px solid #d2ddd6",
      borderRadius: 7,
      fontSize: 14,
      marginTop: 7,
      outlineColor: "#0b8064",
    },
    label: {
      display: "block",
      fontSize: 13,
      fontWeight: 600,
      color: "#263b32",
      marginTop: 17,
    },
    primary: {
      width: "100%",
      border: 0,
      borderRadius: 7,
      background: "#087d62",
      color: "white",
      padding: 13,
      fontWeight: 700,
      fontSize: 14,
      cursor: "pointer",
      marginTop: 22,
    },
    link: {
      color: "#087d62",
      fontWeight: 600,
      cursor: "pointer",
      border: 0,
      background: "none",
      padding: 0,
      fontSize: 13,
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.card}>
        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#087d62",
              color: "#fff",
              borderRadius: 11,
              display: "grid",
              placeItems: "center",
              margin: "0 auto 14px",
              fontSize: 24,
            }}
          >
            📍
          </div>

          <h2 style={{ margin: 0, color: "#172033", fontSize: 22 }}>
            {mode === "login"
              ? "Citizen Login"
              : mode === "register"
                ? "Create an Account"
                : "Reset Password"}
          </h2>

          <p style={{ color: "#64748b", fontSize: 13, marginBottom: 0 }}>
            {mode === "login"
              ? "Sign in to your CivicPlus+ account"
              : mode === "register"
                ? "Join your community and help keep the city clean"
                : "Enter your email to begin password recovery"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label style={styles.label} htmlFor="citizen-name">
                Full Name
              </label>
              <input
                id="citizen-name"
                style={styles.input}
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </>
          )}

          <label style={styles.label} htmlFor="citizen-email">
            Email Address
          </label>
          <input
            id="citizen-email"
            style={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          {mode !== "forgot" && (
            <>
              <label style={styles.label} htmlFor="citizen-password">
                Password
              </label>
              <input
                id="citizen-password"
                style={styles.input}
                type="password"
                name="password"
                value={form.password}
                onChange={updateField}
                placeholder={
                  mode === "register"
                    ? "At least 8 characters"
                    : "Enter your password"
                }
                autoComplete={
                  mode === "register" ? "new-password" : "current-password"
                }
                minLength={mode === "register" ? 8 : undefined}
                required
              />
            </>
          )}

          {mode === "register" && (
            <>
              <label style={styles.label} htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                style={styles.input}
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={updateField}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                required
              />
            </>
          )}

          {mode === "login" && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                marginTop: 15,
                fontSize: 12,
              }}
            >
              <label
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </label>

              <button
                type="button"
                style={styles.link}
                onClick={() => switchMode("forgot")}
              >
                Forgot password?
              </button>
            </div>
          )}

          {error && (
            <p role="alert" style={{ color: "#b91c1c", fontSize: 13 }}>
              {error}
            </p>
          )}

          {message && (
            <p
              role="status"
              style={{
                color: "#166534",
                background: "#dcfce7",
                padding: 10,
                borderRadius: 7,
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              {message}
            </p>
          )}

          <button type="submit" style={styles.primary}>
            {mode === "login"
              ? "Login"
              : mode === "register"
                ? "Create Account"
                : "Reset Password"}
          </button>
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: 22,
            fontSize: 13,
            color: "#64748b",
          }}
        >
          {mode === "login" && (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                style={styles.link}
                onClick={() => switchMode("register")}
              >
                Create an account
              </button>
            </>
          )}

          {mode === "register" && (
            <>
              Already registered?{" "}
              <button
                type="button"
                style={styles.link}
                onClick={() => switchMode("login")}
              >
                Sign in
              </button>
            </>
          )}

          {mode === "forgot" && (
            <button
              type="button"
              style={styles.link}
              onClick={() => switchMode("login")}
            >
              Back to login
            </button>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 22 }}>
          <button
            type="button"
            style={{
              ...styles.link,
              color: "#475569",
              fontWeight: 400,
            }}
            onClick={() => navigate("/")}
          >
            ← Back to CivicPlus+
          </button>
        </div>
      </section>
    </div>
  );
}
