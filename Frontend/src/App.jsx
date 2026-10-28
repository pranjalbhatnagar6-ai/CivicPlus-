import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CitizenLogin from "./pages/CitizenLogin";
import StaffLogin from "./pages/StaffLogin";
import WorkerLogin from "./pages/WorkerLogin";

import CitizenDashboard from "./pages/CitizenDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

import ReportIssue from "./pages/ReportIssue";
import ForgotPassword from "./pages/ForgotPassword";

import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* Informational Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

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