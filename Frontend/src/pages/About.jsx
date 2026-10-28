import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaBullseye,
  FaEye,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaCity,
  FaRecycle,
  FaClock,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-badge">
          <FaLeaf /> About CivicPlus+
        </div>
        <h1>
          Empowering Clean, Sustainable & <span>Transparent Cities</span>
        </h1>
        <p>
          CivicPlus+ is an urban civic technology platform that connects citizens,
          municipal corporations, and sanitation teams to resolve waste challenges
          faster, smarter, and with complete accountability.
        </p>
      </section>

      {/* Impact Stats */}
      <div className="about-stats-container">
        <div className="about-stats-grid">
          <div className="stat-item">
            <div className="stat-number">120+</div>
            <div className="stat-label">Municipal Wards</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">45,000+</div>
            <div className="stat-label">Cleanups Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98.4%</div>
            <div className="stat-label">Resolution Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">&lt; 24 hrs</div>
            <div className="stat-label">Avg. Response Time</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="about-section">
        <div className="section-title-wrap">
          <span className="section-badge">Our Purpose</span>
          <h2>Driven by Purpose, Built for Communities</h2>
          <p>
            We believe that clean neighbourhoods are a fundamental public right. Our
            technology simplifies civic action into a seamless daily habit.
          </p>
        </div>

        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To democratize urban sanitation by putting intuitive reporting tools in the
              hands of every citizen, empowering municipal authorities with actionable
              ward intelligence, and supporting field workers with dignity and efficiency.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              A zero-waste urban ecosystem where community participation and modern civic
              infrastructure seamlessly collaborate to maintain hygienic, thriving, and
              climate-resilient cities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-section">
        <div className="section-title-wrap">
          <span className="section-badge">Core Pillars</span>
          <h2>Values That Guide CivicPlus+</h2>
          <p>Every feature we build adheres to our commitment to civic responsibility.</p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-card-icon">
              <FaShieldAlt />
            </div>
            <h4>Radical Transparency</h4>
            <p>
              Live ticket tracking from reporting to cleanup verification ensures absolute
              public accountability.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card-icon">
              <FaRecycle />
            </div>
            <h4>Sustainable Ecology</h4>
            <p>
              Encouraging waste segregation at source and preventing toxic accumulation in
              public commons.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card-icon">
              <FaUsers />
            </div>
            <h4>Citizen Inclusivity</h4>
            <p>
              Designed for ease of use across smartphones, age groups, and diverse
              demographics.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card-icon">
              <FaClock />
            </div>
            <h4>Rapid Dispatch</h4>
            <p>
              Optimized routing that delivers issues directly to the closest sanitation
              crews for speedy closure.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section className="stakeholders-container">
        <div className="stakeholders-inner">
          <div className="section-title-wrap">
            <span className="section-badge">Ecosystem</span>
            <h2>Connecting Every Urban Partner</h2>
            <p>A unified portal catering to three distinct pillars of city hygiene.</p>
          </div>

          <div className="stakeholders-grid">
            <div className="stakeholder-card">
              <span className="stakeholder-tag tag-citizen">For Citizens</span>
              <h3>Engaged Residents</h3>
              <p>
                Spot garbage, click a picture, and report it in under 60 seconds. Receive live
                SMS and dashboard updates as your issue gets addressed.
              </p>
              <ul className="stakeholder-list">
                <li><FaCheckCircle /> One-click complaint submission</li>
                <li><FaCheckCircle /> Real-time status progression</li>
                <li><FaCheckCircle /> Community cleanliness scores</li>
              </ul>
            </div>

            <div className="stakeholder-card">
              <span className="stakeholder-tag tag-staff">For Municipalities</span>
              <h3>Ward Officers & Staff</h3>
              <p>
                Centralized dashboard providing actionable ward-level complaint data,
                automated ticket prioritization, and supervisor analytics.
              </p>
              <ul className="stakeholder-list">
                <li><FaCheckCircle /> Ward-wise grievance management</li>
                <li><FaCheckCircle /> Priority & SLA monitoring</li>
                <li><FaCheckCircle /> Direct crew task dispatching</li>
              </ul>
            </div>

            <div className="stakeholder-card">
              <span className="stakeholder-tag tag-worker">For Sanitation Crews</span>
              <h3>Ground Heroes</h3>
              <p>
                Field workers access simplified daily route lists, task location markers,
                and instant closure validation upon clearing the waste.
              </p>
              <ul className="stakeholder-list">
                <li><FaCheckCircle /> Clear localized work orders</li>
                <li><FaCheckCircle /> Real-time job status updates</li>
                <li><FaCheckCircle /> Transparent work logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <div className="about-cta">
        <h2>Help Shape the Future of Your City</h2>
        <p>
          Join thousands of proactive citizens who are transforming their neighbourhoods
          today.
        </p>
        <Link to="/citizen/report" className="about-cta-btn">
          Report an Issue Now <FaArrowRight />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default About;
