export default function IllustrationProductEngineering() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connecting lines */}
      <line x1="20" y1="22" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="90" y1="18" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="15" y1="65" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="95" y1="70" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="42" y1="78" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="75" y1="30" x2="55" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {/* Gear outline around center node */}
      <polygon
        points="55,33 60,35 63,40 63,50 60,55 55,57 50,55 47,50 47,40 50,35"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"
      />
      {/* Center hub node — accent */}
      <circle cx="55" cy="45" r="7" stroke="#C8FF00" strokeWidth="1.5" fill="rgba(200,255,0,0.12)" />
      {/* Outer nodes */}
      <circle cx="20" cy="22" r="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      <circle cx="90" cy="18" r="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      <circle cx="15" cy="65" r="5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      <circle cx="95" cy="70" r="3.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      <circle cx="42" cy="78" r="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      <circle cx="75" cy="30" r="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      {/* Junction dots */}
      <circle cx="20" cy="22" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="90" cy="18" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="15" cy="65" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="95" cy="70" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="42" cy="78" r="1.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="75" cy="30" r="1.5" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
