import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaCamera,
  FaRoute,
  FaBroom,
  FaCheckCircle,
  FaChevronDown,
  FaUser,
  FaShieldAlt,
  FaArrowRight,
  FaMobileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HowItWorks.css";

const steps = [
  {
    num: "1",
    title: "Spot & Report",
    icon: <FaCamera />,
    desc: "A citizen notices roadside waste, an overflowing bin, or illegal dumping. They snap a quick photo, enter the location, and submit via our portal in under a minute.",
    tag: "Citizen Action",
  },
  {
    num: "2",
    title: "Ward Routing",
    icon: <FaRoute />,
    desc: "CivicPlus+ automatically logs the grievance, assigns an official tracking ID, and notifies the responsible municipal ward sanitation supervisor.",
    tag: "Automated Dispatch",
  },
  {
    num: "3",
    title: "Crews in Action",
    icon: <FaBroom />,
    desc: "Assigned sanitation workers view prioritized daily work orders on their mobile dashboard, navigate to the site, and perform the cleanup.",
    tag: "Field Execution",
  },
  {
    num: "4",
    title: "Verify & Resolve",
    icon: <FaCheckCircle />,
    desc: "A cleanup confirmation photo is uploaded. The ticket is officially resolved, and the citizen receives a status update with an option to provide feedback.",
    tag: "Quality Closure",
  },
];

const faqs = [
  {
    q: "How long does it take for a reported issue to be cleaned up?",
    a: "Standard waste complaints (overflowing bins, roadside litter) are addressed within 12 to 24 hours. Hazardous materials or large construction debris are prioritized based on municipal guidelines.",
  },
  {
    q: "Do I have to pay anything to report garbage?",
    a: "No. CivicPlus+ is completely free for all citizens as part of municipal digital governance and public hygiene initiatives.",
  },
  {
    q: "Can I track the real-time status of my reported complaint?",
    a: "Yes! Every complaint receives a unique tracking number (e.g., CP-1024). You can track live progress from 'Pending' to 'In Progress' to 'Resolved' directly on your Citizen Dashboard.",
  },
  {
    q: "What categories of waste can be reported?",
    a: "You can report household garbage, public dustbin overflow, construction debris, roadside plastics, and open illegal dumpsites.",
  },
  {
    q: "How does the municipality ensure field workers actually cleaned the site?",
    a: "Sanitation workers are required to log completed tasks with timestamped cleanup verification. Supervisors review and sign off before a ticket is officially marked as resolved.",
  },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState("citizen");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="how-page">
      <Navbar />

      {/* Hero Section */}
      <section className="how-hero">
        <div className="how-hero-badge">
          <FaCogs /> The Process
        </div>
        <h1>
          From Grievance to Greenery in <span>4 Seamless Steps</span>
        </h1>
        <p>
          Discover how CivicPlus+ streamlines communication between city residents,
          municipal coordinators, and sanitation crews to keep public spaces clean.
        </p>
      </section>

      {/* 4 Steps Process */}
      <section className="how-process-section">
        <div className="section-title-wrap">
          <span className="section-badge">Step-by-Step</span>
          <h2>How It Works on the Ground</h2>
          <p>
            An end-to-end transparent pipeline designed for speed and accountability.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.num}>
              <span className="process-step-num">{step.num}</span>
              <div className="process-icon-wrap">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="process-tag">{step.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Role Perspective Section */}
      <section className="how-roles-section">
        <div className="roles-inner">
          <div className="section-title-wrap">
            <span className="section-badge">Workflows</span>
            <h2>Tailored for Every Role</h2>
            <p>Select your user profile to see how CivicPlus+ works for you.</p>
          </div>

          <div className="role-tabs" role="tablist">
            <button
              type="button"
              className={`role-tab-btn ${activeTab === "citizen" ? "active" : ""}`}
              onClick={() => setActiveTab("citizen")}
            >
              <FaUser /> For Citizens
            </button>
            <button
              type="button"
              className={`role-tab-btn ${activeTab === "staff" ? "active" : ""}`}
              onClick={() => setActiveTab("staff")}
            >
              <FaShieldAlt /> For Municipal Staff
            </button>
            <button
              type="button"
              className={`role-tab-btn ${activeTab === "worker" ? "active" : ""}`}
              onClick={() => setActiveTab("worker")}
            >
              <FaBroom /> For Sanitation Workers
            </button>
          </div>

          {activeTab === "citizen" && (
            <div className="role-content-box">
              <div className="role-content-text">
                <h3>The Citizen Experience</h3>
                <p>
                  No more visiting municipal offices or filing paper forms. With
                  CivicPlus+, you become an active guardian of your neighbourhood's
                  cleanliness right from your smartphone.
                </p>
                <ul className="role-features-list">
                  <li>
                    <FaCheckCircle /> Easy photo uploads with landmark details
                  </li>
                  <li>
                    <FaCheckCircle /> Transparent progress bar from submission to resolution
                  </li>
                  <li>
                    <FaCheckCircle /> History log of all past complaints submitted
                  </li>
                </ul>
              </div>

              <div className="role-action-card">
                <h4>Ready to report?</h4>
                <p>Help keep your street clean by filing an issue right now.</p>
                <Link to="/citizen/report" className="role-action-btn">
                  File a Complaint <FaArrowRight />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="role-content-box">
              <div className="role-content-text">
                <h3>The Municipal Command Center</h3>
                <p>
                  Ward administrators gain instant visibility over all incoming tickets,
                  high-density garbage clusters, and response timelines across their
                  designated zones.
                </p>
                <ul className="role-features-list">
                  <li>
                    <FaCheckCircle /> High, medium, and low priority complaint triage
                  </li>
                  <li>
                    <FaCheckCircle /> Real-time status toggle (Pending ➔ Progress ➔ Resolved)
                  </li>
                  <li>
                    <FaCheckCircle /> Comprehensive ward data and SLA accountability
                  </li>
                </ul>
              </div>

              <div className="role-action-card">
                <h4>Municipal Staff Portal</h4>
                <p>Sign in with your department credentials to manage ward tasks.</p>
                <Link to="/staff/login" className="role-action-btn">
                  Access Staff Portal <FaArrowRight />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "worker" && (
            <div className="role-content-box">
              <div className="role-content-text">
                <h3>The Field Sanitation Crew</h3>
                <p>
                  Sanitation staff receive straightforward, clutter-free task lists.
                  No paperwork or confusion—just actionable addresses and real-time
                  progress updates.
                </p>
                <ul className="role-features-list">
                  <li>
                    <FaCheckCircle /> Clear daily cleanup roster with addresses
                  </li>
                  <li>
                    <FaCheckCircle /> One-tap status updates directly from the field
                  </li>
                  <li>
                    <FaCheckCircle /> Transparent recognition for completed tasks
                  </li>
                </ul>
              </div>

              <div className="role-action-card">
                <h4>Worker Portal</h4>
                <p>Log in to view assigned routes and update task progress.</p>
                <Link to="/worker/login" className="role-action-btn">
                  Access Worker Portal <FaArrowRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="section-title-wrap">
          <span className="section-badge">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about CivicPlus+.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.q}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <FaChevronDown />
                </button>
                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorks;
