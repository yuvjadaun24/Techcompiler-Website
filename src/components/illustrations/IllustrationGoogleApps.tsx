export default function IllustrationGoogleApps() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ga-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0,0 L6,2 L0,4" fill="rgba(255,255,255,0.15)" />
        </marker>
      </defs>
      {/* Three overlapping circles — Venn */}
      <circle cx="40" cy="40" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
      {/* Accent circle */}
      <circle cx="70" cy="40" r="22" stroke="rgba(200,255,0,0.4)" strokeWidth="1" fill="rgba(200,255,0,0.08)" />
      <circle cx="55" cy="62" r="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="rgba(255,255,255,0.03)" />
      {/* Connecting arrows */}
      <line x1="48" y1="35" x2="62" y2="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#ga-arrow)" />
      <line x1="66" y1="50" x2="60" y2="58" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#ga-arrow)" />
      <line x1="48" y1="55" x2="44" y2="48" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#ga-arrow)" />
      {/* Intersection dots */}
      <circle cx="55" cy="38" r="1.5" fill="rgba(255,255,255,0.2)" />
      <circle cx="48" cy="52" r="1.5" fill="rgba(255,255,255,0.2)" />
      <circle cx="62" cy="52" r="1.5" fill="rgba(255,255,255,0.2)" />
      {/* Tiny app icons inside each circle */}
      <rect x="34" y="34" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <rect x="38" y="38" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <rect x="72" y="34" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <rect x="68" y="38" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <rect x="52" y="66" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
      <rect x="56" y="62" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}
