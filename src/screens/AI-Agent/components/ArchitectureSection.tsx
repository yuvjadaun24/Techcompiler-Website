import { useState } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const ZONE_ELEMENTS = [
  { id: "db", label: "Your Database", sub: "PostgreSQL / MySQL", x: 40, y: 50, w: 130, tooltip: "Your production database. The AI agent reads schema metadata and executes read-only queries here. No write access." },
  { id: "agent", label: "AI Agent Layer", sub: "TechCompiler Core", x: 220, y: 50, w: 130, tooltip: "The private AI model running inside your infrastructure. Translates natural language to SQL, executes, and formats results." },
  { id: "user", label: "Your Team", sub: "Browser / App", x: 400, y: 50, w: 110, tooltip: "Anyone on your team accesses the agent through a simple chat interface. No SQL knowledge required." },
];

const GUARANTEES = [
  { icon: "lock", label: "End-to-end encryption" },
  { icon: "home", label: "On-premise deployable" },
  { icon: "doc", label: "No data logging" },
  { icon: "check", label: "SOC 2 compliant" },
];

function GuaranteeIcon({ type }: { type: string }) {
  if (type === "lock")
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="2" stroke="#C8FF00" strokeWidth="1.2" /><path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="#C8FF00" strokeWidth="1.2" strokeLinecap="round" /></svg>;
  if (type === "home")
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l6-5 6 5" stroke="#C8FF00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 8v5a1 1 0 001 1h8a1 1 0 001-1V8" stroke="#C8FF00" strokeWidth="1.2" /></svg>;
  if (type === "doc")
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="#C8FF00" strokeWidth="1.2" /><path d="M6 6h4M6 9h3" stroke="#C8FF00" strokeWidth="1.2" strokeLinecap="round" /></svg>;
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ArchitectureSection() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section id="architecture" style={{ padding: "120px 24px", background: "rgba(13,17,23,0.02)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Security & Privacy
          </span>
        </div>
        <h2
          data-animate
          style={{
            fontFamily: syne,
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#0D1117",
            textAlign: "center",
            margin: "0 0 20px",
          }}
        >
          Private by Architecture — How Your Data Stays Secure
        </h2>
        <p
          data-animate
          style={{
            fontFamily: dmSans,
            fontSize: 17,
            color: "#6B7280",
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 48px",
            lineHeight: 1.65,
          }}
        >
          "Private by architecture" is not a marketing phrase. It's a technical guarantee.
          Here's exactly what happens — and what never happens — with your data.
        </p>

        {/* Diagram */}
        <div data-animate style={{ overflowX: "auto", paddingBottom: 16 }}>
          <svg
            width="600"
            height="200"
            viewBox="0 0 600 200"
            fill="none"
            style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
          >
            {/* Zone 1 boundary */}
            <rect x="20" y="10" width="530" height="110" rx="12" stroke="rgba(200,255,0,0.1)" strokeWidth="1.5" strokeDasharray="8 5" fill="rgba(200,255,0,0.1)" />
            <text x="30" y="28" style={{ fontFamily: mono, fontSize: 10, fill: "#C8FF00" }}>Your Infrastructure</text>

            {/* Elements */}
            {ZONE_ELEMENTS.map((el) => (
              <g
                key={el.id}
                onMouseEnter={() => setTooltip(el.id)}
                onMouseLeave={() => setTooltip(null)}
                style={{ cursor: "pointer" }}
              >
                <rect x={el.x} y={el.y} width={el.w} height={48} rx="8" fill="rgba(255,255,255,0.95)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                <text x={el.x + el.w / 2} y={el.y + 22} textAnchor="middle" style={{ fontFamily: syne, fontSize: 11, fontWeight: 600, fill: "#0D1117" }}>{el.label}</text>
                <text x={el.x + el.w / 2} y={el.y + 38} textAnchor="middle" style={{ fontFamily: mono, fontSize: 9, fill: "#9CA3AF" }}>{el.sub}</text>
              </g>
            ))}

            {/* Encrypted arrows */}
            {[{ x1: 170, x2: 220 }, { x1: 350, x2: 400 }].map((a, i) => (
              <g key={i}>
                <line x1={a.x1} y1={74} x2={a.x2} y2={74} stroke="rgba(200,255,0,0.1)" strokeWidth="1.5" markerEnd="url(#arrowA)" />
                <text x={(a.x1 + a.x2) / 2} y={66} textAnchor="middle" style={{ fontFamily: mono, fontSize: 7, fill: "#9CA3AF" }}>encrypted</text>
              </g>
            ))}

            {/* Zone 2 — what we see */}
            <rect x="20" y="135" width="280" height="50" rx="8" fill="rgba(255,255,255,0.8)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <svg x="28" y="147" width="14" height="14" viewBox="0 0 14 14"><rect x="2" y="6" width="10" height="6" rx="1.5" stroke="#C8FF00" strokeWidth="1" fill="none" /><path d="M4 6V4.5a3 3 0 016 0V6" stroke="#C8FF00" strokeWidth="1" /></svg>
            <text x="48" y="153" style={{ fontFamily: mono, fontSize: 10, fill: "#0D1117", fontWeight: 500 }}>What we see during setup</text>
            <text x="48" y="172" style={{ fontFamily: dmSans, fontSize: 9, fill: "#6B7280" }}>Schema structure + anonymised query patterns only</text>

            {/* Zone 3 — blocked */}
            <rect x="360" y="135" width="190" height="50" rx="8" fill="rgba(225,29,72,0.04)" stroke="rgba(225,29,72,0.15)" strokeWidth="1" />
            <text x="380" y="155" style={{ fontFamily: mono, fontSize: 10, fill: "#E11D48", fontWeight: 500 }}>External AI APIs</text>
            <text x="380" y="172" style={{ fontFamily: mono, fontSize: 8, fill: "#E11D48" }}>Your data NEVER reaches here</text>
            {/* Red X barrier */}
            <line x1="330" y1="140" x2="350" y2="180" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
            <line x1="350" y1="140" x2="330" y2="180" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />

            <defs>
              <marker id="arrowA" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0 0L6 3L0 6z" fill="rgba(200,255,0,0.1)" />
              </marker>
            </defs>
          </svg>

          {/* Tooltip overlay */}
          {tooltip && (
            <div
              style={{
                position: "relative",
                maxWidth: 340,
                margin: "-16px auto 0",
                background: "rgba(13,17,23,0.92)",
                backdropFilter: "blur(16px)",
                color: "#fff",
                fontFamily: dmSans,
                fontSize: 12,
                lineHeight: 1.5,
                padding: "10px 14px",
                borderRadius: 10,
                zIndex: 10,
                textAlign: "center",
              }}
            >
              {ZONE_ELEMENTS.find((e) => e.id === tooltip)?.tooltip}
            </div>
          )}
        </div>

        {/* Guarantee chips */}
        <div
          data-animate
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          {GUARANTEES.map((g, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(16px)",
                padding: "8px 16px",
                borderRadius: 12,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                outline: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <GuaranteeIcon type={g.icon} />
              <span style={{ fontFamily: mono, fontSize: 11, color: "#0D1117" }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
