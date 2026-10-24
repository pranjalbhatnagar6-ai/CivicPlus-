
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import CitizenDashboard from "./pages/CitizenDashboard.jsx";
import ReportIssue from "./pages/ReportIssue.jsx";

import CitizenLogin from "./pages/CitizenLogin.jsx";
import StaffLogin from "./pages/StaffLogin.jsx";
import WorkerLogin from "./pages/WorkerLogin.jsx";

import StaffDashboard from "./pages/StaffDashboard.jsx";
import WorkerDashboard from "./pages/WorkerDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/citizen/login"
        element={<CitizenLogin />}
      />

      <Route
        path="/citizen/dashboard"
        element={<CitizenDashboard />}
      />

      <Route
        path="/citizen/report"
        element={<ReportIssue />}
      />

      <Route
        path="/staff/login"
        element={<StaffLogin />}
      />

      <Route
        path="/staff/dashboard"
        element={<StaffDashboard />}
      />

      <Route
        path="/worker/login"
        element={<WorkerLogin />}
      />

      <Route
        path="/worker/dashboard"
        element={<WorkerDashboard />}
      />
    </Routes>
  );
}

export default App;
