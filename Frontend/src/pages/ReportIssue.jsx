
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCamera,
  FaTrashAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./ReportIssue.css";

const STORAGE_KEY = "civicplus_reports";
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;

function getSavedReports() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

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
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    setPhoto(null);
    setError("");

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a JPG, PNG, or WEBP image.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_PHOTO_SIZE) {
      setError("The image must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (
      !form.title.trim() ||
      !form.category ||
      !form.location.trim() ||
      !form.description.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const savedReports = getSavedReports();

      const complaint = {
        id: `CP-${Date.now()}`,
        title: form.title.trim(),
        category: form.category,
        location: form.location.trim(),
        description: form.description.trim(),
        photoName: photo?.name || "",
        status: "Pending",
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([complaint, ...savedReports])
      );

      setMessage("Your complaint was submitted successfully!");

      // Navigate after successful browser storage save.
      window.setTimeout(() => {
        navigate("/citizen/dashboard");
      }, 900);
    } catch {
      setError(
        "Unable to save this complaint in your browser. Please try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="issue-page">
      <header className="issue-header">
        <Link to="/" className="issue-logo-link" title="Go to CivicPlus+ Homepage">
          <div className="issue-logo-icon">
            <FaLocationDot />
          </div>
          <span className="issue-logo-text">
            CivicPlus<span>+</span>
          </span>
        </Link>

        <button
          type="button"
          className="issue-back"
          onClick={() => navigate("/citizen/dashboard")}
        >
          <FaArrowLeft /> Back to Dashboard
        </button>
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
          <div className="issue-success" role="status">
            <FaCheckCircle /> {message}
          </div>
        )}

        {error && (
          <div
            role="alert"
            style={{
              padding: "12px 16px",
              marginBottom: 16,
              borderRadius: 8,
              color: "#b91c1c",
              background: "#fef2f2",
            }}
          >
            {error}
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
              onChange={handlePhotoChange}
            />

            {photo && (
              <button
                type="button"
                className="issue-back"
                onClick={() => setPhoto(null)}
                style={{ marginTop: 8 }}
              >
                Remove selected photo
              </button>
            )}
          </div>

          <div className="issue-actions">
            <button
              type="button"
              className="issue-cancel"
              onClick={() => navigate("/citizen/dashboard")}
              disabled={submitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="issue-submit"
              disabled={submitting}
            >
              <FaTrashAlt />
              {submitting ? "Submitting..." : "Submit Complaint"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ReportIssue;
