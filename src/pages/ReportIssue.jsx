
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCamera,
  FaTrashAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./ReportIssue.css";

function ReportIssue() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });

  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo only; backend integration comes next.
    const complaint = {
      ...form,
      photoName: photo?.name || "",
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const savedReports = JSON.parse(
      localStorage.getItem("civicplus-reports") || "[]"
    );

    localStorage.setItem(
      "civicplus-reports",
      JSON.stringify([...savedReports, complaint])
    );

    setMessage("Your complaint has been submitted successfully!");
    setTimeout(() => navigate("/citizen/dashboard"), 1200);
  };

  return (
    <div className="issue-page">
      <header className="issue-header">
        <button
          className="issue-back"
          onClick={() => navigate("/citizen/dashboard")}
        >
          <FaArrowLeft /> Back to Dashboard
        </button>
        <strong>CivicPlus<span>+</span></strong>
      </header>

      <main className="issue-container">
        <div className="issue-intro">
          <span className="issue-eyebrow">CITIZEN PORTAL</span>
          <h1>Report a Garbage Issue</h1>
          <p>
            Help keep your neighbourhood clean. Share the details below
            so your municipality can take action.
          </p>
        </div>

        {message && (
          <div className="issue-success">
            <FaCheckCircle /> {message}
          </div>
        )}

        <form className="issue-form" onSubmit={handleSubmit}>
          <div className="issue-form-heading">
            <h2>Complaint Details</h2>
            <p>Fields marked * are required.</p>
          </div>

          <div className="issue-field">
            <label htmlFor="title">Complaint title *</label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Garbage overflowing near road"
              required
              maxLength={100}
            />
          </div>

          <div className="issue-field">
            <label htmlFor="category">Waste category *</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Household waste">Household waste</option>
              <option value="Overflowing dustbin">Overflowing dustbin</option>
              <option value="Roadside garbage">Roadside garbage</option>
              <option value="Construction waste">Construction waste</option>
              <option value="Illegal dumping">Illegal dumping</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="issue-field">
            <label htmlFor="location">Location / address *</label>
            <div className="issue-input-icon">
              <FaMapMarkerAlt />
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter street, area or landmark"
                required
                maxLength={200}
              />
            </div>
          </div>

          <div className="issue-field">
            <label htmlFor="description">Describe the issue *</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the garbage problem and nearby landmarks..."
              rows={5}
              required
              maxLength={2000}
            />
          </div>

          <div className="issue-field">
            <label htmlFor="photo">Upload a photo (optional)</label>
            <label className="issue-upload" htmlFor="photo">
              <FaCamera />
              <span>
                <strong>{photo ? photo.name : "Choose an image"}</strong>
                <small>JPG, PNG or WEBP · Maximum 5 MB</small>
              </span>
            </label>
            <input
              className="issue-file-input"
              id="photo"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                if (file.size > 5 * 1024 * 1024) {
                  alert("Please select an image smaller than 5 MB.");
                  e.target.value = "";
                  setPhoto(null);
                  return;
                }

                setPhoto(file);
              }}
            />
          </div>

          <div className="issue-actions">
            <button
              type="button"
              className="issue-cancel"
              onClick={() => navigate("/citizen/dashboard")}
            >
              Cancel
            </button>

            <button type="submit" className="issue-submit">
              <FaTrashAlt /> Submit Complaint
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ReportIssue;
