import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCamera,
  FaRecycle,
  FaHome,
  FaWrench,
  FaUtensils,
  FaMedkit,
  FaPlug,
  FaTrashAlt,
  FaPaw,
  FaTint,
  FaIndustry,
  FaDumpster,
  FaEllipsisH,
  FaMicrophone,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPlay,
  FaRobot,
} from "react-icons/fa";

import CitizenNav from "../components/CitizenNav";
import "./ReportIssue.css";

const categories = [
  { id: "plastic", label: "Plastic Waste", icon: <FaRecycle /> },
  { id: "household", label: "Household", icon: <FaHome /> },
  { id: "construction", label: "Construction", icon: <FaWrench /> },
  { id: "food", label: "Food Waste", icon: <FaUtensils /> },
  { id: "biomedical", label: "Biomedical", icon: <FaMedkit /> },
  { id: "ewaste", label: "E-waste", icon: <FaPlug /> },
  { id: "overflow_bin", label: "Overflowing Bin", icon: <FaTrashAlt /> },
  { id: "dead_animal", label: "Dead Animal", icon: <FaPaw /> },
  { id: "sewage", label: "Sewage Leak", icon: <FaTint /> },
  { id: "industrial", label: "Industrial", icon: <FaIndustry /> },
  { id: "dumping", label: "Open Dumping", icon: <FaDumpster /> },
  { id: "other", label: "Other", icon: <FaEllipsisH /> },
];

export default function ReportIssue() {
  const navigate = useNavigate();

  const [selectedCat, setSelectedCat] = useState("plastic");
  const [details, setDetails] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(
    "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=600&auto=format&fit=crop&q=80"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newComplaint = {
      id: "CC-10482",
      category: categories.find((c) => c.id === selectedCat)?.label || "Plastic Waste",
      location: "Downtown, 124 MG Road",
      landmark: "Near Central Metro Station",
      description: details || "Plastic waste accumulation and overflowing garbage near street crossing.",
      isAnonymous,
      photo: photoPreview,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "In Progress",
    };

    try {
      const existing = JSON.parse(localStorage.getItem("clean_city_reports") || "[]");
      localStorage.setItem("clean_city_reports", JSON.stringify([newComplaint, ...existing]));
    } catch {
      // ignore localstorage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/citizen/submitted", { state: { complaint: newComplaint } });
    }, 600);
  };

  return (
    <div className="clean-report-page">
      <CitizenNav activeItem="report" />

      <div className="citizen-page-with-sidebar">
        {/* Header */}
        <header className="report-page-header">
          <h1 className="report-header-title">New Complaint</h1>
          <span style={{ fontSize: 13, color: "#64748b" }}>Ward 12 · Central Zone</span>
        </header>

        {/* Content Grid matching PPT Page 5 */}
        <main className="report-content-grid">
          {/* Left Column: Photo, AI Analysis, Mini Map */}
          <div className="report-media-column">
            {/* Photo Upload Zone */}
            <label className="photo-upload-zone" htmlFor="camera-upload">
              <input
                id="camera-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoUpload}
              />
              <img src={photoPreview} alt="Complaint preview" className="photo-preview-img" />

              <div className="retake-overlay-btn">
                <FaCamera />
                <span>Tap to retake photo or upload from gallery</span>
              </div>
            </label>

            {/* AI Analysis Active Banner */}
            <div className="ai-analysis-banner">
              <div className="ai-sparkle-badge">
                <FaRobot />
              </div>
              <div className="ai-banner-text">
                <strong>AI Analysis Active</strong>
                <span>Scanning image for category and severity...</span>
              </div>
            </div>

            {/* Mini Map Box */}
            <div className="mini-map-card">
              <div className="mini-map-svg-wrap">
                <svg className="mini-map-svg" viewBox="0 0 350 140" fill="none">
                  {/* Grid of city blocks */}
                  <rect width="350" height="140" fill="#e8f3ec" />
                  <rect x="20" y="15" width="80" height="45" rx="4" fill="#d0e8d9" />
                  <rect x="120" y="15" width="90" height="45" rx="4" fill="#d0e8d9" />
                  <rect x="230" y="15" width="100" height="45" rx="4" fill="#d0e8d9" />

                  <rect x="20" y="75" width="80" height="50" rx="4" fill="#d0e8d9" />
                  <rect x="120" y="75" width="90" height="50" rx="4" fill="#d0e8d9" />
                  <rect x="230" y="75" width="100" height="50" rx="4" fill="#d0e8d9" />

                  {/* Roads */}
                  <line x1="0" y1="67" x2="350" y2="67" stroke="#ffffff" strokeWidth="8" />
                  <line x1="110" y1="0" x2="110" y2="140" stroke="#ffffff" strokeWidth="8" />
                  <line x1="220" y1="0" x2="220" y2="140" stroke="#ffffff" strokeWidth="8" />

                  {/* Pin */}
                  <circle cx="175" cy="67" r="14" fill="#08775e" opacity="0.3" />
                  <circle cx="175" cy="67" r="7" fill="#08775e" />
                  <circle cx="175" cy="67" r="3" fill="#ffffff" />
                </svg>

                <button
                  type="button"
                  className="map-edit-btn"
                  title="Adjust location pin"
                  onClick={() => alert("Pin calibrated to current GPS position")}
                >
                  <FaPencilAlt />
                </button>
              </div>

              <div className="mini-map-meta">
                <div className="map-street-row">
                  <FaMapMarkerAlt />
                  <span>124 MG Road, Downtown</span>
                </div>
                <span className="map-landmark-sub">Near Central Metro Station</span>
                <span className="map-time-sub">Today, 10:42 AM</span>
              </div>
            </div>
          </div>

          {/* Right Column: 12 Category Grid, Details, Anonymous Toggle, Submit */}
          <form className="report-form-column" onSubmit={handleSubmit}>
            <div>
              <h2 className="category-selection-header">
                Select Category <span>*</span>
              </h2>

              <div className="categories-12-grid">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`category-btn ${selectedCat === cat.id ? "selected" : ""}`}
                    onClick={() => setSelectedCat(cat.id)}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label htmlFor="additional-details" className="form-section-label">
                Additional Details
              </label>
              <div className="details-textarea-wrap">
                <textarea
                  id="additional-details"
                  rows={4}
                  className="details-textarea"
                  placeholder="Describe the issue, landmarks, or any specific hazards..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
                <button
                  type="button"
                  className="mic-voice-btn"
                  title="Speech to text"
                  onClick={() => alert("Voice input active")}
                >
                  <FaMicrophone />
                </button>
              </div>
            </div>

            {/* Report Anonymously Switch */}
            <div className="anonymous-toggle-row">
              <div className="anon-text-wrap">
                <strong>Report Anonymously</strong>
                <span>Your profile details will be hidden from public view.</span>
              </div>

              <label className="clean-switch">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <span className="slider-round" />
              </label>
            </div>

            {/* Action Buttons */}
            <div className="report-actions-row">
              <button
                type="button"
                className="report-cancel-btn"
                onClick={() => navigate("/citizen/dashboard")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="report-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Submitting..." : "Submit Complaint"}</span>
                <FaPlay style={{ fontSize: 11 }} />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
