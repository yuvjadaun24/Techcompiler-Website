import { useState, useEffect } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const PILLARS = [
  {
    title: "We've built with data, not around it",
    body: "TechCompiler was founded by engineers from enterprise data infrastructure backgrounds. We don't wrap external models \u2014 we build purpose-specific agents trained on the architecture of your actual data.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="6" rx="3" stroke="#C8FF00" strokeWidth="1.5" fill="none" />
        <rect x="4" y="18" width="28" height="6" rx="3" stroke="#C8FF00" strokeWidth="1.5" fill="none" />
        <rect x="4" y="28" width="28" height="6" rx="3" stroke="#C8FF00" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    ),
    color: "#C8FF00",
  },
  {
    title: "You own the deployment",
    body: "Your instance of the agent runs on infrastructure you control. We have zero access to your data post-deployment. You can audit, inspect, or shut it down at any time. Full transparency, no lock-in.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="14" width="20" height="16" rx="3" stroke="#059669" strokeWidth="1.5" fill="none" />
        <path d="M12 14v-3a6 6 0 0112 0v3" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="23" r="2" fill="#059669" />
      </svg>
    ),
    color: "#059669",
  },
  {
    title: "Accuracy is a product commitment",
    body: "We measure response accuracy against your own known ground-truth queries during setup. If the agent can't confidently answer something, it says so \u2014 it will never fabricate a data point.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#C8FF00" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="18" r="9" stroke="#C8FF00" strokeWidth="1.2" fill="none" opacity="0.5" />
        <circle cx="18" cy="18" r="4" stroke="#C8FF00" strokeWidth="1.2" fill="none" opacity="0.3" />
        <circle cx="18" cy="18" r="2.5" fill="#C8FF00" />
      </svg>
    ),
    color: "#C8FF00",
  },
];

const DEMOS = [
  {
    label: "A question it can answer",
    query: "Total revenue for October?",
    response: "\u20B947.3L \u2014 Enterprise: \u20B928.1L, SMB: \u20B912.6L, Startup: \u20B96.6L",
    confidence: 96,
    barColor: "#C8FF00",
    barLabel: "High confidence",
  },
  {
    label: "A question it's uncertain about",
    query: "Will revenue grow next quarter?",
    response:
      "I can model Q4 based on current pipeline and historical trends, but I can't predict with certainty. Want me to show you the projection with confidence intervals?",
    confidence: 58,
    barColor: "#D97706",
    barLabel: "Projection \u2014 not fact",
  },
  {
    label: "A question outside the database",
    query: "What are our competitors doing?",
    response:
      "I only have visibility into your internal database. I can't access external market data. I'd suggest pairing me with a market intelligence tool for this type of question.",
    confidence: 0,
    barColor: "transparent",
    barLabel: "Outside my scope",
  },
];

export default function TrustSection() {
  const [active, setActive] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(0);
    const t = setTimeout(() => setBarWidth(DEMOS[active].confidence), 50);
    return () => clearTimeout(t);
  }, [active]);

  const demo = DEMOS[active];

  return (
    <section id="trust" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: "#9CA3AF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Why Trust Us
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
          margin: "0 0 48px",
        }}
      >
        Why Enterprises Trust TechCompiler DataSystems
      </h2>

      {/* 3 Pillars */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 56,
        }}
      >
        {PILLARS.map((p, i) => (
          <div
            key={i}
            data-animate
            data-animate-delay={String(i * 100)}
            style={{
              borderRadius: 20,
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(24px)",
              outline: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06)",
              padding: "28px 24px",
            }}
          >
            <div style={{ marginBottom: 16 }}>{p.icon}</div>
            <div
              style={{
                fontFamily: syne,
                fontSize: 16,
                fontWeight: 700,
                color: "#0D1117",
                marginBottom: 8,
              }}
            >
              {p.title}
            </div>
            <div style={{ fontFamily: dmSans, fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
              {p.body}
            </div>
          </div>
        ))}
      </div>

      {/* Accuracy demo */}
      <div data-animate>
        <div
          style={{
            borderRadius: 20,
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            outline: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06)",
            padding: "28px 24px",
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontFamily: syne,
              fontSize: 16,
              fontWeight: 700,
              color: "#0D1117",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            The agent only answers what it knows
          </div>

          {/* Toggles */}
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {DEMOS.map((d, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: dmSans,
                  fontSize: 13,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 999,
                  padding: "7px 16px",
                  background: active === i ? "#0D1117" : "rgba(0,0,0,0.04)",
                  color: active === i ? "#fff" : "#6B7280",
                  transition: "all 200ms ease",
                }}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Query + response */}
          <div key={active} style={{ animation: "trust-fade 280ms ease forwards" }}>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                color: "#9CA3AF",
                marginBottom: 8,
              }}
            >
              Q: {demo.query}
            </div>
            <div
              style={{
                fontFamily: dmSans,
                fontSize: 14,
                color: "#0D1117",
                lineHeight: 1.6,
                marginBottom: 16,
                padding: "12px 14px",
                background: "rgba(0,0,0,0.025)",
                borderRadius: 12,
              }}
            >
              {demo.response}
            </div>

            {/* Confidence bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${barWidth}%`,
                    borderRadius: 999,
                    background: demo.barColor,
                    transition: "width 600ms cubic-bezier(0.34,1.1,0.64,1), background 400ms ease",
                  }}
                />
              </div>
              <span style={{ fontFamily: mono, fontSize: 11, color: demo.barColor === "transparent" ? "#9CA3AF" : demo.barColor, whiteSpace: "nowrap" }}>
                {demo.barLabel}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trust-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
