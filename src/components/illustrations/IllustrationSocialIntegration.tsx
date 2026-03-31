export default function IllustrationSocialIntegration() {
  // 5 satellite positions at 72° intervals
  const satellites = [
    { cx: 55, cy: 14 },   // top
    { cx: 90, cy: 34 },   // top-right
    { cx: 77, cy: 72 },   // bottom-right
    { cx: 33, cy: 72 },   // bottom-left
    { cx: 20, cy: 34 },   // top-left
  ];

  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Inter-satellite lines (thinner, subtle) */}
      {satellites.map((s, i) => {
        const next = satellites[(i + 1) % satellites.length];
        return (
          <line
            key={`inter-${i}`}
            x1={s.cx} y1={s.cy} x2={next.cx} y2={next.cy}
            stroke="rgba(255,255,255,0.07)" strokeWidth="1"
          />
        );
      })}
      {/* Dashed lines from center to satellites */}
      {satellites.map((s, i) => (
        <line
          key={`conn-${i}`}
          x1="55" y1="45" x2={s.cx} y2={s.cy}
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"
        />
      ))}
      {/* Concentric ring around center */}
      <circle cx="55" cy="45" r="16" stroke="rgba(200,255,0,0.2)" strokeWidth="1" fill="none" strokeDasharray="2 4" />
      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <circle key={`sat-${i}`} cx={s.cx} cy={s.cy} r="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
      ))}
      {/* Secondary nodes on some satellites */}
      <circle cx="99" cy="28" r="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="26" cy="80" r="2.5" fill="rgba(255,255,255,0.15)" />
      <circle cx="12" cy="28" r="2.5" fill="rgba(255,255,255,0.15)" />
      {/* Center node — accent */}
      <circle cx="55" cy="45" r="8" fill="#C8FF00" opacity="0.9" />
    </svg>
  );
}
