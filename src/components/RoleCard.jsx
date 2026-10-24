import "./RoleCard.css";

function RoleCard({
  icon,
  title,
  description,
  buttonText,
  color,
  iconBackground,
}) {
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
      >
        {buttonText}
      </button>

    </div>
  );
}

export default RoleCard;