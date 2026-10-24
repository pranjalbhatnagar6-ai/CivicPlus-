import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ReportIssue from "./Pages/ReportIssue.jsx";
import Home from "./Pages/Home.jsx";
import CitizenDashboard from "./Pages/CitizenDashboard.jsx";
=======

import Home from "./pages/Home";
>>>>>>> 6fa762a6ca8782d43ce139aa7ff33dd0299db4cf

import CitizenLogin from "./pages/CitizenLogin";
import StaffLogin from "./pages/StaffLogin";
import WorkerLogin from "./pages/WorkerLogin";

import CitizenDashboard from "./pages/CitizenDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route 
      path="/citizen/report"
      element={<ReportIssue />}
      />
      <Route path="/" element={<Home />} />
      <Route
        path="/citizen/dashboard"
        element={<CitizenDashboard />}
      />
=======
      <Route path="/" element={<Home />} />

      <Route path="/citizen/login" element={<CitizenLogin />} />
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />

      <Route path="/staff/login" element={<StaffLogin />} />
      <Route path="/staff/dashboard" element={<StaffDashboard />} />

      <Route path="/worker/login" element={<WorkerLogin />} />
      <Route path="/worker/dashboard" element={<WorkerDashboard />} />
>>>>>>> 6fa762a6ca8782d43ce139aa7ff33dd0299db4cf
    </Routes>
  );
}

export default App;