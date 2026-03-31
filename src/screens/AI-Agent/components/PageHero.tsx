import { useEffect, useRef, useState } from "react";

const syne = "'Syne', sans-serif";
const serif = "'Instrument Serif', serif";

const C = {
  dark:    "#0A0E1A",
  white:   "#FFFFFF",
  accent:  "#C8FF00",
  muted:   "rgba(10,14,26,0.5)",
  dimmer:  "rgba(10,14,26,0.35)",
  border:  "rgba(10,14,26,0.08)",
};

function useCountUp(end: number, duration: number, isVisible: boolean, decimals = 0) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, end, duration, decimals]);

  return val;
}

const STATS = [
  { end: 2, prefix: "< ", suffix: " sec", label: "average query response time" },
  { end: 87, suffix: "%", label: "reduction in manual reporting time" },
  { end: 100, suffix: "%", label: "data stays inside your infrastructure" },
];

export default function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const v0 = useCountUp(STATS[0].end, 1800, visible);
  const v1 = useCountUp(STATS[1].end, 1800, visible);
  const v2 = useCountUp(STATS[2].end, 1800, visible);
  const vals = [v0, v1, v2];

  return (
    <section id="overview" style={{ background: C.white, padding: "clamp(100px,12vw,140px) clamp(24px,6vw,80px) clamp(60px,8vw,100px)", textAlign: "center", position: "relative" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div data-animate style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 20, height: 1, background: C.accent }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.dimmer, fontFamily: syne }}>
            AI Agent &middot; Private by Architecture
          </span>
          <div style={{ width: 20, height: 1, background: C.accent }} />
        </div>

        {/* H1 */}
        <h1
          data-animate
          style={{
            fontFamily: syne,
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: C.dark,
            margin: "0 0 24px",
          }}
        >
          Your Database,{" "}
          <br />
          Now Has a{" "}
          <em style={{ fontFamily: serif, fontStyle: "italic", color: C.accent }}>Voice.</em>
        </h1>

        {/* Sub */}
        <p
          data-animate
          style={{
            fontFamily: syne,
            fontSize: "1rem",
            color: C.muted,
            lineHeight: 1.7,
            maxWidth: 540,
            margin: "0 auto 36px",
          }}
        >
          Most organisations are sitting on a goldmine of data they can't access quickly
          enough to act on. TechCompiler's Custom AI Agent changes that — permanently.
        </p>

        {/* Scroll indicator */}
        <div
          data-animate
          style={{
            marginBottom: 48,
            color: C.accent,
            fontSize: 22,
            animation: "hero-bounce 2.4s ease-in-out infinite",
          }}
        >
          <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>&rsaquo;</span>
        </div>
        <style>{`
          @keyframes hero-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `}</style>

        {/* Stat strip */}
        <div
          ref={ref}
          data-animate
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {STATS.map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>
              {i > 0 && (
                <div style={{ width: 1, height: 56, background: C.border, margin: "0 32px", flexShrink: 0 }} />
              )}
              <div style={{ textAlign: "center", minWidth: 120 }}>
                <div style={{ fontFamily: syne, fontSize: "clamp(2rem,5vw,2.8rem)", fontWeight: 900, color: C.dark, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {stat.prefix || ""}{Math.round(vals[i])}{stat.suffix}
                </div>
                <div style={{ fontFamily: syne, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.dimmer, marginTop: 8 }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
