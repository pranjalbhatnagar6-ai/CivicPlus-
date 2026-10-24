import "./Footer.css";

export default function Footer() {
  return (
    <footer className="civic-footer">
      <div className="civic-footer-content">
        <div className="civic-footer-brand">
          <h2>CivicPlus</h2>
          <p>
            Together, let's build cleaner, greener, and healthier
            communities.
          </p>
        </div>

        <div className="civic-footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/report-issue">Report an Issue</a>
        </div>

        <div className="civic-footer-contact">
          <h3>Our Mission</h3>
          <p>
            Connecting citizens and local authorities to improve
            waste management and keep our cities clean.
          </p>
        </div>
      </div>

      <div className="civic-footer-bottom">
        © {new Date().getFullYear()} CivicPlus. Building a cleaner future.
      </div>
    </footer>
  );
}
