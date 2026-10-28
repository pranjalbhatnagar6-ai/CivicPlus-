import "./CityBackdrop.css";

export default function CityBackdrop({ variant = "full", opacity = 0.85 }) {
  return (
    <div className={`city-backdrop-wrap ${variant}`} style={{ opacity }}>
      <svg
        className="city-backdrop-svg"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f7f3" />
            <stop offset="60%" stopColor="#e3f2ea" />
            <stop offset="100%" stopColor="#d2ebd9" />
          </linearGradient>

          <linearGradient id="bldgFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d5e8dc" />
            <stop offset="100%" stopColor="#c5ded0" />
          </linearGradient>

          <linearGradient id="bldgMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b4d7c2" />
            <stop offset="100%" stopColor="#a3caa1" />
          </linearGradient>

          <linearGradient id="tramBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e6f4ea" />
          </linearGradient>

          <linearGradient id="accentGreen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#08775e" />
          </linearGradient>
        </defs>

        {/* Sky wash */}
        <rect width="1440" height="600" fill="url(#skyGrad)" opacity="0.4" />

        {/* Far Skyscrapers */}
        <g opacity="0.45">
          <rect x="80" y="140" width="110" height="460" rx="6" fill="url(#bldgFar)" />
          <rect x="220" y="90" width="130" height="510" rx="8" fill="url(#bldgFar)" />
          <rect x="420" y="160" width="90" height="440" rx="6" fill="url(#bldgFar)" />
          <rect x="980" y="110" width="120" height="490" rx="8" fill="url(#bldgFar)" />
          <rect x="1140" y="70" width="140" height="530" rx="10" fill="url(#bldgFar)" />
          <rect x="1310" y="150" width="90" height="450" rx="6" fill="url(#bldgFar)" />

          {/* Roof Gardens on far buildings */}
          <ellipse cx="285" cy="88" rx="45" ry="10" fill="#a7d5b8" />
          <ellipse cx="1210" cy="68" rx="55" ry="12" fill="#a7d5b8" />
        </g>

        {/* Mid-ground Modern Architecture & Windows */}
        <g opacity="0.65">
          <rect x="40" y="210" width="140" height="390" rx="10" fill="url(#bldgMid)" />
          {/* Windows columns */}
          <line x1="75" y1="240" x2="75" y2="520" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />
          <line x1="110" y1="240" x2="110" y2="520" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />
          <line x1="145" y1="240" x2="145" y2="520" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />

          {/* Solar panels roof */}
          <rect x="35" y="202" width="150" height="10" rx="3" fill="#08775e" opacity="0.4" />

          {/* Right mid building */}
          <rect x="1230" y="170" width="160" height="430" rx="12" fill="url(#bldgMid)" />
          <line x1="1270" y1="200" x2="1270" y2="530" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />
          <line x1="1310" y1="200" x2="1310" y2="530" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />
          <line x1="1350" y1="200" x2="1350" y2="530" stroke="#ffffff" strokeWidth="18" strokeDasharray="14 12" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Civic Banner Poles */}
        <g opacity="0.7">
          {/* Left Banner */}
          <rect x="160" y="290" width="6" height="260" fill="#94a3b8" />
          <rect x="110" y="320" width="50" height="95" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M125 350 L135 340 L145 350 L145 375 L125 375 Z" fill="#a7d5b8" opacity="0.7" />
          <text x="135" y="395" fontSize="8" fontWeight="bold" fill="#08775e" textAnchor="middle">FUTURE CITY</text>

          {/* Right Banner */}
          <rect x="1270" y="290" width="6" height="260" fill="#94a3b8" />
          <rect x="1276" y="320" width="50" height="95" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M1291 350 L1301 340 L1311 350 L1311 375 L1291 375 Z" fill="#a7d5b8" opacity="0.7" />
          <text x="1301" y="395" fontSize="8" fontWeight="bold" fill="#08775e" textAnchor="middle">CIVIC PRIDE</text>
        </g>

        {/* Lush Green Trees */}
        <g opacity="0.8">
          <ellipse cx="260" cy="460" rx="36" ry="60" fill="#99d6ab" />
          <ellipse cx="310" cy="480" rx="30" ry="48" fill="#82c797" />
          <ellipse cx="220" cy="490" rx="26" ry="40" fill="#b0e3bf" />

          <ellipse cx="1180" cy="460" rx="36" ry="60" fill="#99d6ab" />
          <ellipse cx="1130" cy="480" rx="30" ry="48" fill="#82c797" />
          <ellipse cx="1220" cy="490" rx="26" ry="40" fill="#b0e3bf" />
        </g>

        {/* Modern Clean Electric Tram (Right Foreground) */}
        <g opacity="0.95" transform="translate(860, 330)">
          {/* Tram Body */}
          <path
            d="M 50 180 C 50 60, 90 20, 160 20 L 320 20 C 370 20, 390 50, 390 120 L 390 260 L 50 260 Z"
            fill="url(#tramBody)"
            stroke="#94d3a8"
            strokeWidth="3"
          />
          {/* Tram Green Stripe */}
          <path d="M 50 170 C 80 170, 120 170, 160 170 L 390 170 L 390 195 L 50 195 Z" fill="url(#accentGreen)" />

          {/* Tram Large Curved Windshield */}
          <path
            d="M 80 150 C 75 70, 110 40, 160 40 L 220 40 C 230 40, 235 45, 235 55 L 235 150 Z"
            fill="#a5d8d8"
            stroke="#ffffff"
            strokeWidth="4"
            opacity="0.85"
          />

          {/* Tram Side Windows */}
          <rect x="250" y="45" width="60" height="105" rx="8" fill="#a5d8d8" stroke="#ffffff" strokeWidth="3" opacity="0.85" />
          <rect x="325" y="45" width="60" height="105" rx="8" fill="#a5d8d8" stroke="#ffffff" strokeWidth="3" opacity="0.85" />

          {/* Headlights */}
          <ellipse cx="85" cy="205" rx="10" ry="6" fill="#fef08a" />
          <ellipse cx="115" cy="205" rx="10" ry="6" fill="#fef08a" />
        </g>

        {/* Cyclist and Pedestrians Silhouettes (Muted pastel green) */}
        <g opacity="0.5" transform="translate(190, 430)">
          {/* Cyclist */}
          <circle cx="50" cy="90" r="14" stroke="#08775e" strokeWidth="2.5" fill="none" />
          <circle cx="85" cy="90" r="14" stroke="#08775e" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="90" x2="68" y2="76" stroke="#08775e" strokeWidth="2.5" />
          <line x1="68" y1="76" x2="85" y2="90" stroke="#08775e" strokeWidth="2.5" />
          <line x1="68" y1="76" x2="65" y2="60" stroke="#08775e" strokeWidth="2.5" />
          <line x1="58" y1="60" x2="72" y2="60" stroke="#08775e" strokeWidth="2.5" />
          <circle cx="65" cy="50" r="6" fill="#08775e" />
        </g>

        {/* Clean Pavement Curve */}
        <path
          d="M 0 540 Q 720 500, 1440 540 L 1440 600 L 0 600 Z"
          fill="#f1f8f3"
          stroke="#dbeade"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
