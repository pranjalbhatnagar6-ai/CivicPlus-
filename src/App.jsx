import { Routes, Route } from "react-router-dom";
import ReportIssue from "./Pages/ReportIssue.jsx";
import Home from "./Pages/Home.jsx";
import CitizenDashboard from "./Pages/CitizenDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route 
      path="/citizen/report"
      element={<ReportIssue />}
      />
      <Route path="/" element={<Home />} />
      <Route
        path="/citizen/dashboard"
        element={<CitizenDashboard />}
      />
    </Routes>
  );
}

export default App;