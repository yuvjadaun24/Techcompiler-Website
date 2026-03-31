import { useEffect, useRef, useState } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

type CellType = "yes2" | "yes" | "no" | "partial" | "danger";

const HEADERS = ["Feature", "BI Dashboards", "Generic AI Chatbots", "TechCompiler Agent"];

const ROWS: { feature: string; cells: [CellType, CellType, CellType] }[] = [
  { feature: "Asks questions in plain English", cells: ["no", "yes", "yes2"] },
  { feature: "Knows your full schema", cells: ["no", "no", "yes2"] },
  { feature: "Cross-table analysis", cells: ["partial", "no", "yes2"] },
  { feature: "Real-time answers", cells: ["no", "yes", "yes2"] },
  { feature: "Data stays in your servers", cells: ["yes", "danger", "yes2"] },
  { feature: "Learns your business terminology", cells: ["no", "no", "yes2"] },
  { feature: "No SQL required", cells: ["yes", "yes", "yes2"] },
  { feature: "Deploy in under 3 days", cells: ["no", "yes", "yes2"] },
];

const CELL_LABELS: Record<CellType, string> = {
  yes2: "\u2713\u2713",
  yes: "\u2713",
  no: "\u2717",
  partial: "Partial",
  danger: "\u2717 \u2190 data leaves",
};

const CELL_STYLES: Record<CellType, { color: string; bg?: string; weight?: number }> = {
  yes2: { color: "#059669", bg: "rgba(5,150,105,0.08)", weight: 700 },
  yes: { color: "#059669" },
  no: { color: "#9CA3AF" },
  partial: { color: "#D97706" },
  danger: { color: "#E11D48" },
};

export default function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setVisibleRows(i);
            if (i >= ROWS.length) clearInterval(iv);
          }, 100);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="comparison" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Why Not the Alternatives
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
        Custom AI Agent vs BI Tools vs Generic Chatbots
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
        You've probably tried dashboards. Maybe even a general-purpose AI chatbot.
        Here's why they're not the same thing.
      </p>

      <div ref={ref} style={{ overflowX: "auto" }}>
        <div style={{ minWidth: 640 }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 0, marginBottom: 8 }}>
            {HEADERS.map((h, i) => (
              <div
                key={h}
                style={{
                  fontFamily: i === 3 ? syne : mono,
                  fontSize: 13,
                  fontWeight: i === 3 ? 700 : 400,
                  color: i === 3 ? "#C8FF00" : "#9CA3AF",
                  letterSpacing: "0.04em",
                  padding: "12px 16px",
                  borderRadius: i === 3 ? "12px 12px 0 0" : 0,
                  background: i === 3 ? "rgba(200,255,0,0.1)" : "transparent",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {ROWS.map((row, ri) => (
            <div
              key={ri}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: 0,
                background: ri % 2 === 0 ? "rgba(0,0,0,0.015)" : "transparent",
                opacity: ri < visibleRows ? 1 : 0,
                transform: ri < visibleRows ? "translateY(0)" : "translateY(8px)",
                transition: "all 350ms ease",
              }}
            >
              <div style={{ fontFamily: dmSans, fontSize: 14, color: "#0D1117", padding: "12px 16px" }}>
                {row.feature}
              </div>
              {row.cells.map((cell, ci) => {
                const s = CELL_STYLES[cell];
                return (
                  <div key={ci} style={{ padding: "12px 16px", background: ci === 2 ? "rgba(200,255,0,0.1)" : "transparent" }}>
                    <span
                      style={{
                        fontFamily: cell === "yes2" ? syne : mono,
                        fontSize: cell === "yes2" ? 13 : 12,
                        fontWeight: s.weight || 400,
                        color: s.color,
                        ...(s.bg
                          ? { background: s.bg, padding: "2px 8px", borderRadius: 999, display: "inline-block" }
                          : {}),
                      }}
                    >
                      {CELL_LABELS[cell]}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
