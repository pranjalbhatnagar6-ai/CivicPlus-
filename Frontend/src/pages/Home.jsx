import { Link } from "react-router-dom";
import { FaUser, FaShieldAlt, FaBroom, FaGlobe } from "react-icons/fa";

import BrandLogo from "../components/BrandLogo";
import CityBackdrop from "../components/CityBackdrop";
import "./Home.css";

function Home() {
  return (
    <div className="clean-home-page">
      {/* Top Header */}
      <header className="clean-home-header">
        <BrandLogo to="/" size="md" />

        <div className="header-right-tools">
          <Link to="/public-dashboard" className="header-public-dash-link">
            Public Dashboard
          </Link>
          <button type="button" className="clean-lang-btn" aria-label="Select Language">
            <FaGlobe />
            <span>English</span>
          </button>
        </div>
      </header>

      {/* Hero Section with City Backdrop Illustration */}
      <section className="clean-hero-section">
        <CityBackdrop variant="hero-only" opacity={0.7} />

        <div className="hero-text-content">
          <h1 className="clean-hero-title">
            A cleaner city starts with you
          </h1>
          <p className="clean-hero-subtitle">
            Report garbage, track cleanup, and hold your municipality accountable.
          </p>
        </div>
      </section>

      {/* Role Selection Cards Grid */}
      <main className="clean-roles-container">
        <div className="clean-roles-grid">
          {/* Card 1: Citizen */}
          <div className="clean-role-card citizen">
            <div className="role-icon-circle citizen-icon">
              <FaUser />
            </div>
            <h2 className="role-title">Citizen</h2>
            <p className="role-description">
              Report garbage in your area and track cleanup progress directly from your phone.
            </p>
            <Link to="/citizen/login" className="role-action-btn btn-citizen">
              Continue as Citizen
            </Link>
          </div>

          {/* Card 2: Municipality Staff */}
          <div className="clean-role-card staff">
            <div className="role-icon-circle staff-icon">
              <FaShieldAlt />
            </div>
            <h2 className="role-title">Municipality Staff</h2>
            <p className="role-description">
              Manage complaints, assign resources, and coordinate cleanup efforts for your designated ward.
            </p>
            <Link to="/staff/login" className="role-action-btn btn-staff">
              Continue as Staff
            </Link>
          </div>

          {/* Card 3: Sanitation Worker */}
          <div className="clean-role-card worker">
            <div className="role-icon-circle worker-icon">
              <FaBroom />
            </div>
            <h2 className="role-title">Sanitation Worker</h2>
            <p className="role-description">
              View your assigned cleanup tasks, update status, and log completed work efficiently.
            </p>
            <Link to="/worker/login" className="role-action-btn btn-worker">
              Continue as Worker
            </Link>
          </div>
        </div>
      </main>

      {/* Footer matching PPT Page 1 */}
      <footer className="clean-home-footer">
        <div className="footer-left-info">
          <BrandLogo to="/" size="sm" />
          <span className="footer-copyright">
            © 2026 CleanCity Civic Portal
          </span>
        </div>

        <nav className="footer-nav-links" aria-label="Footer Navigation">
          <Link to="/about">About CleanCity</Link>
          <Link to="/public-dashboard">Public Dashboard</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/how-it-works">How It Works</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home;