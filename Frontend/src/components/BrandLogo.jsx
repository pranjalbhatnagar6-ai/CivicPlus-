import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa6";
import "./BrandLogo.css";

export default function BrandLogo({
  to = "/",
  subtitle = "",
  theme = "dark", // "dark", "light", "white"
  size = "md", // "sm", "md", "lg"
}) {
  return (
    <Link to={to} className={`clean-brand-logo ${theme} ${size}`} title="CleanCity Civic Portal">
      <div className="brand-leaf-icon">
        <FaLeaf />
      </div>
      <div className="brand-text-wrap">
        <span className="brand-name">CleanCity</span>
        {subtitle && <span className="brand-subtitle">{subtitle}</span>}
      </div>
    </Link>
  );
}
