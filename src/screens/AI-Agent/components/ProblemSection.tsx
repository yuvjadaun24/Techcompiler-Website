import { useEffect, useRef, useState } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const STEPS = [
  {
    title: "Employee has a question",
    detail: '"How many enterprise accounts churned this quarter?"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#6B7280" strokeWidth="1.5" fill="none" />
        <path d="M5 24c0-5 4-8 9-8s9 3 9 8" stroke="#6B7280" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    badge: "Day 1",
    badgeColor: "#D97706",
  },
  {
    title: "Submits data request to analyst team",
    detail: '"Ticket #4821 created — awaiting assignment"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#6B7280" strokeWidth="1.5" fill="none" />
        <path d="M4 12h20M10 17h8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    badge: "Day 2",
    badgeColor: "#D97706",
  },
  {
    title: "Analyst manually queries the database",
    detail: "SELECT * FROM accounts WHERE...",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="#6B7280" strokeWidth="1.5" fill="none" />
        <path d="M7 12l3 3-3 3M13 18h6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "Day 3",
    badgeColor: "#D97706",
  },
  {
    title: "Receives a spreadsheet",
    detail: '"Here\'s the CSV, let me know if you need changes"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#6B7280" strokeWidth="1.5" fill="none" />
        <path d="M4 10h20M4 16h20M11 4v20" stroke="#6B7280" strokeWidth="1.5" />
      </svg>
    ),
    badge: "Day 4",
    badgeColor: "#D97706",
  },
  {
    title: "Data is already outdated",
    detail: '"One of those accounts just renewed yesterday."',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#E11D48" strokeWidth="1.5" fill="none" />
        <path d="M14 8v6l4 2" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9l10 10M19 9L9 19" stroke="#E11D48" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    badge: "Day 5 — Too Late",
    badgeColor: "#E11D48",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleCount(i);
            if (i >= STEPS.length) clearInterval(interval);
          }, 280);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="problem" style={{ padding: "120px 24px", margin: "0 auto", alignItems: "center", maxWidth: 1300 }}>
      {/* Eyebrow */}
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          The Problem
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
        Why Traditional Data Access Is Broken
      </h2>

      <p
        data-animate
        style={{
          fontFamily: dmSans,
          fontSize: 17,
          color: "#6B7280",
          textAlign: "center",
          maxWidth: 660,
          margin: "0 auto 56px",
          lineHeight: 1.65,
        }}
      >
        Your team asks questions about your business every day.
        Questions that should take seconds. Instead, they take meetings,
        ticket queues, and manual spreadsheets — by which time, the moment has passed.
      </p>

      {/* Timeline */}
      <div
        ref={ref}
        style={{
            width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", 
          gap: 0,
          overflowX: "auto",
          paddingBottom: 16,
          scrollbarWidth: "thin",
        }}
      >
        {STEPS.map((step, i) => {
          const isVisible = i < visibleCount;
          const isLast = i === STEPS.length - 1;

          return (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
              {/* Card */}
              <div
                style={{
                  width: 175,
                  padding: "18px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(24px)",
                  outline: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06)",
                  opacity: isVisible ? 1 : 0.15,
                  transform: isVisible ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.34,1.1,0.64,1)",
                }}
              >
                <div style={{ marginBottom: 10 }}>{step.icon}</div>
                <div style={{ fontFamily: syne, fontSize: 13, fontWeight: 600, color: "#0D1117", marginBottom: 6 }}>
                  {step.title}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    color: "#6B7280",
                    lineHeight: 1.5,
                    marginBottom: 10,
                    fontStyle: step.detail.startsWith("SELECT") ? "normal" : "italic",
                    ...(step.detail.startsWith("SELECT")
                      ? { background: "rgba(0,0,0,0.04)", borderRadius: 6, padding: "4px 8px", fontSize: 10 }
                      : {}),
                  }}
                >
                  {step.detail}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: mono,
                    fontSize: 10,
                    fontWeight: 500,
                    color: step.badgeColor,
                    background: step.badgeColor === "#E11D48" ? "rgba(225,29,72,0.08)" : "rgba(217,119,6,0.08)",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {step.badge}
                </span>
              </div>

              {/* Connector arrow */}
              {!isLast && (
                <div style={{ display: "flex", alignItems: "center", padding: "60px 8px 0", flexShrink: 0 }}>
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                    <path
                      d="M0 6h24M20 2l6 4-6 4"
                      stroke="rgba(0,0,0,0.15)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              {isLast && (
                <div style={{ display: "flex", alignItems: "center", padding: "60px 8px 0", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4l12 12M16 4L4 16" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bold statement */}
      <div data-animate style={{ textAlign: "center", marginTop: 48 }}>
        <div style={{ fontFamily: syne, fontSize: 24, fontWeight: 700, color: "#0D1117", marginBottom: 8 }}>
          "4 days. 3 handoffs. 1 outdated answer."
        </div>
        <div style={{ fontFamily: dmSans, fontSize: 15, color: "#6B7280" }}>
          This is the data gap. And it costs your business more than you realise.
        </div>
      </div>
    </section>
  );
}
