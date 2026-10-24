import { useNavigate } from "react-router-dom";
import "./RoleCard.css";

function RoleCard({
  icon,
  title,
  description,
  buttonText,
  color,
  iconBackground,
  path,
}) {
  const navigate = useNavigate();

  return (
    <div className="role-card">
      <div
        className="role-icon"
        style={{
          backgroundColor: iconBackground,
          color: color,
        }}
      >
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <button
        className="role-button"
        style={{ backgroundColor: color }}
        onClick={() => navigate(path)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default RoleCard;