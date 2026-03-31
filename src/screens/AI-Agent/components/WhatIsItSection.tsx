import { useState, useEffect, useRef } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const CALLOUTS = [
  {
    title: "Speaks your language",
    body: "Ask questions in plain English. The agent translates intent to precision — across tables, relationships, and time periods — without requiring any SQL knowledge.",
  },
  {
    title: "Lives inside your walls",
    body: "Installed on your servers, in your cloud, behind your firewall. Your data never travels to an external API. No third-party model ever sees it.",
  },
  {
    title: "Gets smarter with use",
    body: "As your team asks questions, the agent learns your preferred terminology, your most common queries, and your business context — becoming more accurate over time.",
  },
];

const QUESTIONS = [
  {
    q: "How many customers signed up this week?",
    headers: ["Metric", "Value"],
    rows: [["New sign-ups", "142"], ["vs last week", "+18%"]],
    meta: "1 table \u00B7 0.2s",
  },
  {
    q: "Which sales rep closed the most deals last month?",
    headers: ["Rep", "Deals", "Revenue"],
    rows: [["Priya Sharma", "14", "\u20B914.2L"], ["Arjun Mehta", "11", "\u20B912.8L"]],
    meta: "2 tables \u00B7 0.3s",
  },
  {
    q: "What\u2019s the average order value by region?",
    headers: ["Region", "Avg Order Value"],
    rows: [["North", "\u20B92,340"], ["South", "\u20B91,890"], ["West", "\u20B92,710"]],
    meta: "2 tables \u00B7 0.4s",
  },
  {
    q: "Show me products with inventory below reorder threshold",
    headers: ["Product", "Stock", "Threshold"],
    rows: [["Widget Pro", "12", "50"], ["SensorX", "8", "25"]],
    meta: "1 table \u00B7 0.2s",
  },
  {
    q: "Compare this quarter\u2019s support tickets to last quarter",
    headers: ["Quarter", "Tickets", "Avg Resolve"],
    rows: [["Q3", "1,024", "4.2h"], ["Q4", "876", "3.1h"]],
    meta: "2 tables \u00B7 0.3s",
  },
];

export default function WhatIsItSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "querying" | "result">("idle");
  const cancelRef = useRef(false);

  const handleSelect = (idx: number) => {
    cancelRef.current = true;
    setSelected(idx);
    setTypedText("");
    setPhase("typing");
    cancelRef.current = false;

    const q = QUESTIONS[idx].q;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (cancelRef.current) { clearInterval(typeInterval); return; }
      i++;
      setTypedText(q.slice(0, i));
      if (i >= q.length) {
        clearInterval(typeInterval);
        setPhase("querying");
        setTimeout(() => {
          if (!cancelRef.current) setPhase("result");
        }, 800);
      }
    }, 25);
  };

  useEffect(() => () => { cancelRef.current = true; }, []);

  const data = selected !== null ? QUESTIONS[selected] : null;

  return (
    <section id="what-is-it" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Eyebrow */}
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          The Solution
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
        What Is TechCompiler's Custom AI Agent?
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="md:!grid-cols-2">
        {/* Left column */}
        <div data-animate>
          <p style={{ fontFamily: dmSans, fontSize: 17, color: "#0D1117", lineHeight: 1.7, marginBottom: 32 }}>
            TechCompiler's Custom AI Agent is a private intelligence layer
            installed directly inside your own database infrastructure.
            It learns your schema, your relationships, your business terminology —
            and becomes the fastest analyst your organisation has ever had.
          </p>

          {CALLOUTS.map((c, i) => (
            <div
              key={i}
              data-animate
              data-animate-delay={String(i * 100)}
              style={{
                borderLeft: "3px solid #C8FF00",
                paddingLeft: 16,
                marginBottom: 24,
              }}
            >
              <div style={{ fontFamily: syne, fontSize: 15, fontWeight: 600, color: "#0D1117", marginBottom: 4 }}>
                {c.title}
              </div>
              <div style={{ fontFamily: dmSans, fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>
                {c.body}
              </div>
            </div>
          ))}
        </div>

        {/* Right column — Query explorer */}
        <div data-animate>
          <div
            style={{
              borderRadius: 20,
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(24px)",
              outline: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <span style={{ fontFamily: syne, fontSize: 14, fontWeight: 600, color: "#0D1117" }}>
                What can you ask it?
              </span>
            </div>

            {/* Input area */}
            <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <div
                style={{
                  background: "rgba(0,0,0,0.03)",
                  borderRadius: 12,
                  outline: "1px solid rgba(0,0,0,0.07)",
                  padding: "10px 14px",
                  minHeight: 20,
                  fontFamily: mono,
                  fontSize: 12,
                  color: typedText ? "#0D1117" : "#B0B8C4",
                }}
              >
                {typedText || "Click a question below..."}
                {phase === "typing" && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 1.5,
                      height: 14,
                      background: "#C8FF00",
                      marginLeft: 1,
                      verticalAlign: "text-bottom",
                      animation: "blink-cursor 0.9s step-end infinite",
                    }}
                  />
                )}
              </div>
              <style>{`@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
            </div>

            {/* Questions list */}
            <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              {QUESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: selected === idx ? "rgba(200,255,0,0.1)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: mono,
                    fontSize: 12,
                    color: "#0D1117",
                    padding: "8px 10px",
                    borderRadius: 8,
                    transition: "background 150ms ease",
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => {
                    if (selected !== idx) e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (selected !== idx) e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.q}
                </button>
              ))}
            </div>

            {/* Result area */}
            <div style={{ padding: "16px 20px", minHeight: 100 }}>
              {phase === "querying" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "#9CA3AF" }}>Querying your database</span>
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#9CA3AF",
                        display: "inline-block",
                        animation: `dot-pulse 1s ease-in-out ${d * 0.15}s infinite`,
                      }}
                    />
                  ))}
                  <style>{`@keyframes dot-pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.1)} }`}</style>
                </div>
              )}

              {phase === "result" && data && (
                <div style={{ animation: "fade-in 280ms ease forwards" }}>
                  {/* Header row */}
                  <div style={{ display: "flex", gap: 1, marginBottom: 4 }}>
                    {data.headers.map((h) => (
                      <div
                        key={h}
                        style={{
                          flex: 1,
                          fontFamily: mono,
                          fontSize: 10,
                          color: "#9CA3AF",
                          padding: "4px 0",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                  {data.rows.map((row, ri) => (
                    <div key={ri} style={{ display: "flex", gap: 1, borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                      {row.map((cell, ci) => (
                        <div
                          key={ci}
                          style={{
                            flex: 1,
                            fontFamily: mono,
                            fontSize: 12,
                            color: "#0D1117",
                            padding: "6px 0",
                            fontWeight: ci === 0 ? 500 : 400,
                          }}
                        >
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div style={{ textAlign: "right", marginTop: 8 }}>
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 10,
                        color: "#9CA3AF",
                        background: "rgba(0,0,0,0.03)",
                        padding: "3px 8px",
                        borderRadius: 6,
                      }}
                    >
                      {data.meta}
                    </span>
                  </div>
                  <style>{`@keyframes fade-in { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }`}</style>
                </div>
              )}

              {phase === "idle" && (
                <div style={{ fontFamily: dmSans, fontSize: 13, color: "#B0B8C4", textAlign: "center", paddingTop: 24 }}>
                  Select a question above to see a live preview
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-2 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
