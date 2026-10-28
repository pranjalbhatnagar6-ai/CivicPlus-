import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaClock,
  FaExclamationTriangle,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry to municipal support backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "General Inquiry",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-badge">
          <FaHeadset /> We're Here For You
        </div>
        <h1>
          Get in Touch with <span>CivicPlus+</span>
        </h1>
        <p>
          Have questions about our grievance platform, need technical support, or want
          to partner your municipal ward with CivicPlus+? Reach out to our team.
        </p>
      </section>

      {/* Contact Quick Info Cards */}
      <section className="contact-info-section">
        <div className="contact-cards-grid">
          <div className="contact-card">
            <div className="contact-icon-wrap">
              <FaPhoneAlt />
            </div>
            <h3>Toll-Free Helpline</h3>
            <p>Direct 24/7 assistance for citizen queries and complaint follow-ups.</p>
            <a href="tel:18002484275" className="contact-card-link">
              1800-CIVIC-PLUS <FaArrowRight />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrap">
              <FaEnvelope />
            </div>
            <h3>Email Support</h3>
            <p>Send documents, partnership inquiries, or detailed civic escalations.</p>
            <a href="mailto:support@civicplus.gov" className="contact-card-link">
              support@civicplus.gov <FaArrowRight />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrap">
              <FaMapMarkerAlt />
            </div>
            <h3>Central Ward Hub</h3>
            <p>Civic Operations Directorate, 4th Floor, Municipal Governance Complex.</p>
            <span className="contact-card-link">Sector 4, Central City</span>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrap">
              <FaExclamationTriangle />
            </div>
            <h3>Emergency Waste Line</h3>
            <p>Immediate 2-hour sanitation response for hazardous spills or blockage.</p>
            <a href="tel:112" className="contact-card-link">
              Emergency Dispatch (112) <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="contact-main-section">
        <div className="contact-layout">
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header-wrap">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and a representative will reply within 24 hours.</p>
            </div>

            {submitted && (
              <div className="contact-alert-success" role="alert">
                <FaCheckCircle /> Thank you! Your message has been sent successfully. A ticket
                confirmation has been emailed to you.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="category">Inquiry Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Grievance Follow-up">Grievance Follow-up</option>
                    <option value="Technical Support">Technical Support with Portal</option>
                    <option value="Ward Onboarding">Municipal Ward Onboarding</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Brief summary of your inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending your message..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar Information */}
          <div className="contact-sidebar">
            <div className="sidebar-box">
              <h3>
                <FaClock /> Municipal Helpdesk Hours
              </h3>
              <p>Our citizen assistance team is available during the following hours:</p>

              <ul className="timings-list">
                <li>
                  <span>Monday – Friday:</span>
                  <span>8:00 AM – 8:00 PM</span>
                </li>
                <li>
                  <span>Saturday:</span>
                  <span>9:00 AM – 5:00 PM</span>
                </li>
                <li>
                  <span>Sunday & Public Holidays:</span>
                  <span>Emergency Line Only</span>
                </li>
                <li>
                  <span>Digital Portal (App):</span>
                  <span>24 Hours / 7 Days</span>
                </li>
              </ul>
            </div>

            <div className="emergency-alert-card">
              <h4>
                <FaExclamationTriangle /> Critical Waste Emergency?
              </h4>
              <p>
                For immediate dangers such as toxic chemical dumping, burst sewer lines,
                or hospital biohazard waste in public areas, do not wait for email. Call our
                rapid action division directly.
              </p>
              <a href="tel:112" className="emergency-btn">
                Call Emergency Line 112
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
