export default function IllustrationBigData() {
  const cols = [
    { x: 20, opacities: [0.08, 0.15, 0.1, 0.2, 0.06, 0.12], accent: false },
    { x: 32, opacities: [0.12, 0.2, 0.15, 0.08, 0.18, 0.1], accent: false },
    { x: 44, opacities: [0.7, 0.5, 0.9, 0.6, 0.3, 0.8], accent: true },
    { x: 56, opacities: [0.1, 0.06, 0.18, 0.12, 0.08, 0.15], accent: false },
    { x: 68, opacities: [0.15, 0.1, 0.08, 0.2, 0.12, 0.06], accent: false },
    { x: 80, opacities: [0.06, 0.12, 0.1, 0.15, 0.08, 0.18], accent: false },
  ];

  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pixel heatmap columns */}
      {cols.map((col, ci) =>
        col.opacities.map((op, ri) => (
          <rect
            key={`${ci}-${ri}`}
            x={col.x}
            y={12 + ri * 9}
            width="6"
            height="6"
            rx="1"
            fill={col.accent ? "#C8FF00" : "rgba(255,255,255,1)"}
            opacity={op}
          />
        ))
      )}
      {/* Trend line */}
      <path
        d="M 16,72 C 30,60 50,50 70,32 Q 82,22 96,16"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowheads along the line */}
      <polygon points="94,14 98,16 94,20" fill="rgba(255,255,255,0.2)" />
      <polygon points="68,31 72,32 69,36" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}
