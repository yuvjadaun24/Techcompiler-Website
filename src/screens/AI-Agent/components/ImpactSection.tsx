import { useEffect, useRef, useState } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

function useCountUp(end: number, duration: number, isVisible: boolean, decimals = 0) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(0);
  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, end, duration, decimals]);
  return val;
}

const STATS = [
  { end: 94, suffix: "%", label: "of queries answered in under 2 seconds", color: "#C8FF00" },
  { end: 73, suffix: "%", label: "reduction in analyst bottleneck requests", color: "#C8FF00" },
  { end: 4.8, suffix: "\u00D7", label: "faster business decisions on average", color: "#C8FF00", decimals: 1 },
  { end: 0, suffix: "", label: "data records ever leave your infrastructure", color: "#C8FF00", prefix: "" },
  { end: 3, suffix: " days", label: "average deployment timeline", color: "#C8FF00", prefix: "< " },
  { end: 100, suffix: "%", label: "uptime SLA \u2014 agent available when your DB is", color: "#C8FF00" },
];

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const vals = STATS.map((s) => useCountUp(s.end, 1800, visible, s.decimals || 0));

  return (
    <section id="impact" style={{ padding: "120px 24px", background: "rgba(13,17,23,0.025)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            By the Numbers
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
          The Measurable Impact of Faster Data Access
        </h2>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              data-animate
              data-animate-delay={String(i * 80)}
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(24px)",
                outline: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06)",
                padding: "28px 24px",
                borderLeft: `3px solid ${stat.color}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
                <span style={{ fontFamily: syne, fontSize: 52, fontWeight: 800, color: "#0D1117", lineHeight: 1 }}>
                  {stat.prefix || ""}{stat.decimals ? vals[i].toFixed(stat.decimals) : Math.round(vals[i])}
                </span>
                <span style={{ fontFamily: syne, fontSize: 20, fontWeight: 600, color: stat.color }}>
                  {stat.suffix}
                </span>
              </div>
              <div style={{ fontFamily: dmSans, fontSize: 14, color: "#6B7280", lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
