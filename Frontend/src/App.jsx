import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CitizenLogin from "./pages/CitizenLogin";
import StaffLogin from "./pages/StaffLogin";
import WorkerLogin from "./pages/WorkerLogin";

import CitizenDashboard from "./pages/CitizenDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

import ReportIssue from "./pages/ReportIssue";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Citizen */}
      <Route path="/citizen/login" element={<CitizenLogin />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/report" element={<ReportIssue />} />

      {/* Municipality Staff */}
      <Route path="/staff/login" element={<StaffLogin />} />
      <Route path="/staff/dashboard" element={<StaffDashboard />} />

      {/* Sanitation Worker */}
      <Route path="/worker/login" element={<WorkerLogin />} />
      <Route path="/worker/dashboard" element={<WorkerDashboard />} />
    </Routes>
  );
}

export default App;