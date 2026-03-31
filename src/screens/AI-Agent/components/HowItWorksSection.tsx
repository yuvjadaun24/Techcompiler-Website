import { useEffect, useRef, useState } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const STEPS = [
  {
    num: "01",
    label: "We map your database",
    h3: "Schema Analysis & Relationship Mapping",
    body: "Our setup process begins with a deep analysis of your database structure — every table, column, relationship, and foreign key. We build a semantic map that the AI agent uses to understand how your data is connected.",
    time: "1\u20132 days",
    color: "#C8FF00",
    interactive: "graph",
  },
  {
    num: "02",
    label: "We train it on your context",
    h3: "Business Context & Terminology Training",
    body: 'Generic AI models don\'t know that your "MRR" means Monthly Recurring Revenue, or that "enterprise accounts" have a specific definition in your CRM. We train the agent on your business vocabulary, common queries, and reporting patterns.',
    time: "2\u20133 days",
    color: "#C8FF00",
    interactive: "mapping",
  },
  {
    num: "03",
    label: "We deploy inside your infrastructure",
    h3: "Private, On-Premise Deployment",
    body: "The agent is deployed entirely within your own infrastructure — whether that\u2019s on-premise servers, your private cloud (AWS, GCP, Azure), or a hybrid setup. Zero external data transfer. Your IT team retains full control.",
    time: "1 day",
    color: "#059669",
    interactive: "deploy",
  },
  {
    num: "04",
    label: "Your team starts asking",
    h3: "Instant Access for Your Entire Organisation",
    body: "From day one, anyone on your team — finance, operations, sales, HR — can ask questions about your data in plain English and get answers in seconds. No training required. No SQL. No tickets.",
    time: "Immediate",
    color: "#C8FF00",
    interactive: "chat",
  },
];

function MiniGraph({ visible }: { visible: boolean }) {
  const nodes = [
    { x: 30, y: 20 }, { x: 90, y: 15 }, { x: 70, y: 55 },
    { x: 130, y: 40 }, { x: 20, y: 65 }, { x: 110, y: 70 },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 4], [2, 3], [3, 5], [4, 5]];

  return (
    <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(200,255,0,0.1)" strokeWidth="1.5"
          style={{
            strokeDasharray: 80,
            strokeDashoffset: visible ? 0 : 80,
            transition: `stroke-dashoffset 600ms ease ${200 + i * 100}ms`,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i} cx={n.x} cy={n.y} r="6" fill="#C8FF00"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0)",
            transformOrigin: `${n.x}px ${n.y}px`,
            transition: `all 300ms ease ${i * 120}ms`,
          }}
        />
      ))}
    </svg>
  );
}

function MiniMapping({ visible }: { visible: boolean }) {
  const left = ["MRR", "Enterprise", "Churn"];
  const right = ["monthly_revenue", "acct_tier = 'ENT'", "status = 'churned'"];
  return (
    <svg width="200" height="90" viewBox="0 0 200 90" fill="none">
      {left.map((label, i) => {
        const y = 18 + i * 28;
        return (
          <g key={i}>
            <text x="8" y={y + 4} style={{ fontFamily: mono, fontSize: 10, fill: "#C8FF00" }}>{label}</text>
            <text x="112" y={y + 4} style={{ fontFamily: mono, fontSize: 9, fill: "#9CA3AF" }}>{right[i]}</text>
            <line
              x1="56" y1={y} x2="108" y2={y}
              stroke="rgba(200,255,0,0.1)" strokeWidth="1" strokeDasharray="4 3"
              style={{
                strokeDashoffset: visible ? 0 : 60,
                transition: `stroke-dashoffset 500ms ease ${300 + i * 150}ms`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function MiniDeploy({ visible }: { visible: boolean }) {
  const boxes = [
    { x: 8, label: "Your DB", w: 52 },
    { x: 72, label: "AI Agent", w: 52 },
    { x: 136, label: "Your Team", w: 56 },
  ];
  return (
    <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
      <rect
        x="2" y="2" width="194" height="76" rx="8" fill="none"
        stroke="rgba(5,150,105,0.3)" strokeWidth="1.5" strokeDasharray="6 4"
        style={{
          strokeDashoffset: visible ? 0 : 600,
          transition: "stroke-dashoffset 1200ms ease 400ms",
        }}
      />
      <text x="8" y="74" style={{ fontFamily: mono, fontSize: 8, fill: "#059669" }}>Your Infrastructure</text>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x} y="16" width={b.w} height="36" rx="6"
            fill="rgba(255,255,255,0.9)" stroke="rgba(0,0,0,0.08)" strokeWidth="1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: `all 400ms ease ${i * 200}ms`,
            }}
          />
          <text
            x={b.x + b.w / 2} y="38" textAnchor="middle"
            style={{ fontFamily: mono, fontSize: 9, fill: "#0D1117" }}
          >
            {b.label}
          </text>
        </g>
      ))}
      {/* Arrows */}
      {[60, 124].map((ax, i) => (
        <path key={i} d={`M${ax} 34 h12`} stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" markerEnd="url(#arrowG)"
          style={{ opacity: visible ? 1 : 0, transition: `opacity 400ms ease ${600 + i * 200}ms` }}
        />
      ))}
      <defs>
        <marker id="arrowG" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L6 3L0 6z" fill="rgba(0,0,0,0.2)" />
        </marker>
      </defs>
    </svg>
  );
}

function MiniChat({ visible }: { visible: boolean }) {
  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 500ms ease 300ms" }}>
      <div
        style={{
          background: "linear-gradient(135deg,#0f0c29,#302b63)",
          color: "#fff",
          fontFamily: mono,
          fontSize: 11,
          padding: "8px 12px",
          borderRadius: "12px 12px 3px 12px",
          maxWidth: "85%",
          marginLeft: "auto",
          marginBottom: 8,
          lineHeight: 1.4,
        }}
      >
        Top 5 sales reps by revenue this month?
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.04)",
          fontFamily: mono,
          fontSize: 11,
          padding: "8px 12px",
          borderRadius: "12px 12px 12px 3px",
          maxWidth: "85%",
          lineHeight: 1.5,
          color: "#0D1117",
        }}
      >
        1. Priya Sharma — ₹14.2L<br />
        2. Arjun Mehta — ₹12.8L<br />
        3. Ravi Kumar — ₹11.4L
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [vis, setVis] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.stepIdx);
            setVis((prev) => { const n = [...prev]; n[idx] = true; return n; });
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.3 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto" }}>
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          How It Works
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
          margin: "0 0 56px",
        }}
      >
        How TechCompiler's AI Agent Works — Step by Step
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical connector line */}
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 40,
            bottom: 40,
            width: 2,
            background: "rgba(0,0,0,0.06)",
            zIndex: 0,
          }}
          className="hidden md:block"
        />

        {STEPS.map((step, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-step-idx={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
              marginBottom: i < STEPS.length - 1 ? 64 : 0,
              position: "relative",
              opacity: vis[i] ? 1 : 0,
              transform: vis[i] ? "translateY(0)" : "translateY(24px)",
              transition: "all 600ms cubic-bezier(0.34,1.1,0.64,1)",
            }}
            className="md:!grid-cols-[56px_1fr_200px]"
          >
            {/* Step number circle */}
            <div className="hidden md:flex" style={{ display: "none", alignItems: "flex-start", justifyContent: "center", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#F8F9FB",
                  border: `2px solid ${step.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: syne,
                  fontSize: 18,
                  fontWeight: 800,
                  color: step.color,
                }}
              >
                {step.num}
              </div>
            </div>

            {/* Content */}
            <div>
              <div style={{ fontFamily: mono, fontSize: 11, color: step.color, marginBottom: 4 }}>
                Step {step.num} — {step.label}
              </div>
              <h3 style={{ fontFamily: syne, fontSize: 20, fontWeight: 700, color: "#0D1117", margin: "0 0 8px" }}>
                {step.h3}
              </h3>
              <p style={{ fontFamily: dmSans, fontSize: 15, color: "#6B7280", lineHeight: 1.65, margin: "0 0 10px" }}>
                {step.body}
              </p>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: step.color,
                  background: step.color === "#059669" ? "rgba(5,150,105,0.08)" : "rgba(200,255,0,0.1)",
                  padding: "3px 10px",
                  borderRadius: 999,
                }}
              >
                {step.time}
              </span>
            </div>

            {/* Interactive mini */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {step.interactive === "graph" && <MiniGraph visible={vis[i]} />}
              {step.interactive === "mapping" && <MiniMapping visible={vis[i]} />}
              {step.interactive === "deploy" && <MiniDeploy visible={vis[i]} />}
              {step.interactive === "chat" && <MiniChat visible={vis[i]} />}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-\\[56px_1fr_200px\\] { grid-template-columns: 56px 1fr 200px !important; }
          .md\\:flex { display: flex !important; }
          .md\\:block { display: block !important; }
        }
      `}</style>
    </section>
  );
}
