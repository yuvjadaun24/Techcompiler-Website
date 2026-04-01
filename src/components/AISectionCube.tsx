import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, DrawSVGPlugin);

CustomEase.create("silk", "M0,0 C0.11,0 0.19,0.53 0.27,0.53 0.41,0.78 0.51,1 1,1");
CustomEase.create("ai-snap", "M0,0 C0.2,0 0.2,1 1,1");
CustomEase.create("ai-card", "M0,0 C0.16,1 0.3,1 1,1");

/* ── Colour tokens ────────────────────────────────────────── */
const C = {
  dark: "#0A0E1A",
  white: "#FFFFFF",
  cardBorder: "rgba(10,14,26,0.09)",
  ink: "#0A0E1A",
  inkMuted: "rgba(10,14,26,0.45)",
  accent: "#C8FF00",
};

/* ── SVG icons (stroke only, 26 × 26) ─────────────────────── */
const iconProps: React.SVGProps<SVGSVGElement> = {
  width: 26,
  height: 26,
  viewBox: "0 0 26 26",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const MLIcon = (
  <svg {...iconProps}>
    <path d="M3 18l6-4 4 3 6-5 4 3" />
    <path d="M3 12l6-3 4 2 6-4 4 2" stroke="#C8FF00" />
    <path d="M3 6l6-2 4 2 6-3 4 1" />
  </svg>
);
const NLPIcon = (
  <svg {...iconProps}>
    <rect x="3" y="4" width="20" height="14" rx="3" />
    <text x="13" y="14" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace">&lt;/&gt;</text>
    <path d="M10 18l-2 4M16 18l2 4" />
  </svg>
);
const CVIcon = (
  <svg {...iconProps}>
    <circle cx="13" cy="13" r="10" />
    <circle cx="13" cy="13" r="4" />
    <line x1="13" y1="3" x2="13" y2="9" />
    <line x1="13" y1="17" x2="13" y2="23" />
    <line x1="3" y1="13" x2="9" y2="13" />
    <line x1="17" y1="13" x2="23" y2="13" />
  </svg>
);
const GenAIIcon = (
  <svg {...iconProps}>
    <circle cx="5" cy="7" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="5" cy="13" r="2" />
    <circle cx="15" cy="10" r="2" /><circle cx="15" cy="16" r="2" />
    <circle cx="23" cy="13" r="2.5" stroke="#C8FF00" />
    <line x1="7" y1="7" x2="13" y2="10" /><line x1="7" y1="13" x2="13" y2="10" />
    <line x1="7" y1="13" x2="13" y2="16" /><line x1="7" y1="19" x2="13" y2="16" />
    <line x1="17" y1="10" x2="21" y2="13" /><line x1="17" y1="16" x2="21" y2="13" />
  </svg>
);
const ChatIcon = (
  <svg {...iconProps}>
    <path d="M4 4h12a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 3v-3H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
    <path d="M10 11h10a2 2 0 012 2v5a2 2 0 01-2 2h-1v3l-4-3h-3" opacity="0.45" />
  </svg>
);
const PredictIcon = (
  <svg {...iconProps}>
    <circle cx="13" cy="13" r="10" />
    <polyline points="8 16 11 12 14 14 19 8" stroke="#C8FF00" />
    <polyline points="16 8 19 8 19 11" stroke="#C8FF00" />
  </svg>
);

/* ── Card data ────────────────────────────────────────────── */
const AI_SERVICES = [
  { number: "01", category: "Machine Learning", title: "Machine Learning Solutions", desc: "Develop custom models to uncover insights, automate processes, and make data-driven predictions with proven accuracy.", icon: MLIcon },
  { number: "02", category: "Language AI", title: "Natural Language Processing", desc: "Enable applications to understand, interpret, and respond to human language with advanced NLP pipelines.", icon: NLPIcon },
  { number: "03", category: "Computer Vision", title: "Computer Vision Systems", desc: "Build powerful systems that analyze and understand visual information from images and video streams.", icon: CVIcon },
  { number: "04", category: "Generative AI", title: "Generative AI Development", desc: "Leverage large language models and diffusion models to generate novel content — text, code, images, and beyond.", icon: GenAIIcon },
  { number: "05", category: "Conversational AI", title: "AI-Powered Chatbots", desc: "Create intelligent, context-aware assistants that enhance customer engagement and automate support at scale.", icon: ChatIcon },
  { number: "06", category: "Predictive Analytics", title: "Predictive Analytics", desc: "Utilize historical data and ML models to forecast future trends, behaviors, and outcomes with measurable accuracy.", icon: PredictIcon },
];

/* ── Connection path definitions ──────────────────────────── */
// Layer 1 → Layer 2
const L1_PATHS = [
  "M 160,70  C 290,70  290,40  420,40",
  "M 160,70  C 290,70  290,115 420,115",
  "M 160,70  C 290,90  290,190 420,190",
  "M 160,70  C 290,100 290,245 420,245",
  "M 160,140 C 290,140 290,40  420,40",
  "M 160,140 C 290,140 290,115 420,115",
  "M 160,140 C 290,140 290,190 420,190",
  "M 160,140 C 290,140 290,245 420,245",
  "M 160,210 C 290,210 290,40  420,40",
  "M 160,210 C 290,190 290,115 420,115",
  "M 160,210 C 290,210 290,190 420,190",
  "M 160,210 C 290,210 290,245 420,245",
];
// Layer 2 → Hub
const L2_PATHS = [
  "M 420,40  C 510,40  510,140 600,140",
  "M 420,115 C 510,115 510,140 600,140",
  "M 420,190 C 510,190 510,140 600,140",
  "M 420,245 C 510,245 510,140 600,140",
];
// Hub → Layer 3
const HUB_PATHS = [
  "M 600,140 C 690,140 690,55  780,55",
  "M 600,140 C 690,140 690,140 780,140",
  "M 600,140 C 690,140 690,225 780,225",
];
// Layer 3 → Layer 4
const L3_PATHS = [
  "M 780,55  C 910,55  910,85  1040,85",
  "M 780,55  C 910,55  910,140 1040,140",
  "M 780,55  C 910,70  910,195 1040,195",
  "M 780,140 C 910,140 910,85  1040,85",
  "M 780,140 C 910,140 910,140 1040,140",
  "M 780,140 C 910,140 910,195 1040,195",
  "M 780,225 C 910,210 910,85  1040,85",
  "M 780,225 C 910,210 910,140 1040,140",
  "M 780,225 C 910,225 910,195 1040,195",
];

// Signal pulse timing per layer
const L1_SIGNALS = L1_PATHS.map((d, i) => ({
  d,
  duration: `${(2.4 + (i % 5) * 0.16).toFixed(2)}s`,
  delay:    `${(i * 0.15).toFixed(2)}s`,
}));
const L2_SIGNALS = L2_PATHS.map((d, i) => ({
  d,
  duration: `${(1.8 + i * 0.15).toFixed(2)}s`,
  delay:    `${(i * 0.3).toFixed(2)}s`,
}));
const HUB_SIGNALS = HUB_PATHS.map((d, i) => ({
  d,
  duration: `${(2.0 + i * 0.2).toFixed(2)}s`,
  delay:    `${(i * 0.4).toFixed(2)}s`,
}));
const L3_SIGNALS = L3_PATHS.map((d, i) => ({
  d,
  duration: `${(2.8 + (i % 5) * 0.16).toFixed(2)}s`,
  delay:    `${(0.3 + i * 0.2).toFixed(2)}s`,
}));

// Mobile simplified paths (Hub only — L2→Hub and Hub→L3)
const MOBILE_SIGNALS = [
  ...L2_SIGNALS,
  ...HUB_SIGNALS,
];

/* ================================================================
   MAIN COMPONENT — SIGNAL FLOW
   ================================================================ */
export default function AISectionCube() {
  const navigate = useNavigate();

  const sectionRef       = useRef<HTMLDivElement>(null);
  const headlineRef      = useRef<HTMLHeadingElement>(null);
  const subRef           = useRef<HTMLParagraphElement>(null);
  const networkSvgRef    = useRef<SVGSVGElement>(null);
  const connectorLineRef = useRef<SVGLineElement>(null);
  const gridRef          = useRef<HTMLDivElement>(null);
  const cardRefs         = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs          = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let splitInstance: InstanceType<typeof SplitText> | null = null;

    const ctx = gsap.context(() => {
      // ── 1. Initial hidden states ───────────────────────────
      try {
        gsap.set(".wire-l1, .wire-l2, .wire-hub, .wire-l3", { drawSVG: "0% 0%" });
      } catch { /* DrawSVG unavailable */ }
      gsap.set(".network-node, .hub-core", { autoAlpha: 0, scale: 0 });
      if (connectorLineRef.current) {
        try { gsap.set(connectorLineRef.current, { drawSVG: "0% 0%" }); } catch { /* noop */ }
      }
      gsap.set(cardRefs.current.filter(Boolean), { autoAlpha: 0, clipPath: "inset(100% 0% 0% 0%)" });

      // ── 2. Headline SplitText ──────────────────────────────
      try {
        splitInstance = new SplitText(headlineRef.current!, { type: "words" });
        gsap.set(splitInstance.words, { autoAlpha: 0, y: 28 });
        gsap.to(splitInstance.words, {
          autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        });
      } catch {
        gsap.fromTo(headlineRef.current,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: section, start: "top 72%", once: true } },
        );
      }

      // ── 3. Subtext ─────────────────────────────────────────
      gsap.fromTo(subRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out", delay: 0.35,
          scrollTrigger: { trigger: section, start: "top 72%", once: true } },
      );

      // ── 4. Network draw sequence ───────────────────────────
      ScrollTrigger.create({
        trigger: section,
        start: "top 65%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          try {
            tl.to(".wire-l1", { drawSVG: "0% 100%", duration: 0.7, stagger: 0.04, ease: "power2.inOut" })
              .to(".wire-l2", { drawSVG: "0% 100%", duration: 0.5, stagger: 0.05, ease: "power2.inOut" }, "-=0.3")
              .to(".wire-hub", { drawSVG: "0% 100%", duration: 0.6, stagger: 0.06, ease: "power2.inOut" }, "-=0.2")
              .to(".wire-l3", { drawSVG: "0% 100%", duration: 0.7, stagger: 0.04, ease: "power2.inOut" }, "-=0.3");
          } catch { /* DrawSVG unavailable — wires inherit base visibility */ }
          tl.fromTo(".network-node",
            { autoAlpha: 0, scale: 0 },
            { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.04, ease: "back.out(2)", transformOrigin: "center" },
            "-=0.4",
          )
            .fromTo(".hub-core",
              { autoAlpha: 0, scale: 0 },
              { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(3)", transformOrigin: "center" },
              "-=0.2",
            );
          if (connectorLineRef.current) {
            try {
              tl.to(connectorLineRef.current, { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out" });
            } catch { /* noop */ }
          }
        },
      });

      // ── 5. Card reveals ────────────────────────────────────
      if (gridRef.current) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.to(cardRefs.current.filter(Boolean), {
              autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0,
              duration: 0.65, stagger: 0.1, ease: "power3.out",
              onComplete: () => {
                dotRefs.current.forEach((dot, i) => {
                  if (!dot) return;
                  gsap.to(dot, {
                    backgroundColor: "#C8FF00", scale: 1.4,
                    duration: 0.3, delay: i * 0.09, ease: "back.out(2)",
                  });
                });
              },
            });
          },
        });
      }

      // ── 6. Mouse parallax (desktop / fine pointer only) ───
      if (!window.matchMedia("(pointer: coarse)").matches) {
        const onMouseMove = (e: MouseEvent) => {
          if (!section || !networkSvgRef.current) return;
          const rect = section.getBoundingClientRect();
          const dx = (e.clientX - rect.left  - rect.width  / 2) / rect.width;
          const dy = (e.clientY - rect.top   - rect.height / 2) / rect.height;
          gsap.to(networkSvgRef.current, {
            x: dx * 18, y: dy * 10, duration: 1.2, ease: "power2.out",
          });
        };
        section.addEventListener("mousemove", onMouseMove, { passive: true });
      }

      // ── 7. IntersectionObserver — pause signal animations ──
      const io = new IntersectionObserver(([entry]) => {
        networkSvgRef.current?.classList.toggle("network-active", entry.isIntersecting);
      }, { threshold: 0.1 });
      io.observe(section);

      return () => { io.disconnect(); };
    }, sectionRef);

    return () => {
      ctx.revert();
      try { splitInstance?.revert(); } catch { /* noop */ }
    };
  }, []);

  /* ── Shared: signal pulses renderer ──────────────────────── */
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const signalData = isMobile
    ? MOBILE_SIGNALS
    : [...L1_SIGNALS, ...L2_SIGNALS, ...HUB_SIGNALS, ...L3_SIGNALS];

  const wireClass = (group: string) =>
    `network-wire wire-${group}`;

  return (
    <>
      {/* ── Inline CSS for network animations ─────────────── */}
      <style>{`
        @keyframes signal-travel {
          0%   { stroke-dashoffset: 200; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes hub-breathe {
          0%, 100% { r: 20px; opacity: 0.2; }
          50%       { r: 26px; opacity: 0.08; }
        }
        .signal-pulse {
          stroke: #C8FF00;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 12 200;
          stroke-dashoffset: 200;
          stroke-linecap: round;
          opacity: 0;
          animation: signal-travel var(--duration, 3s) linear var(--delay, 0s) infinite;
          animation-play-state: paused;
          filter: url(#glow-lime);
        }
        .network-active .signal-pulse {
          animation-play-state: running;
        }
        .hub-ring {
          animation: hub-breathe 2.8s ease-in-out infinite;
        }
        @media (max-width: 767px) {
          .layer-label { display: none; }
        }
      `}</style>

      {/* ================================================================
          SECTION WRAPPER
          ================================================================ */}
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {/* ── ZONE A — Light ─────────────────────────────────── */}
        <div
          className="relative w-full"
          style={{
            background: C.white,
            paddingTop: "clamp(72px, 10vw, 120px)",
            paddingBottom: "clamp(32px, 4vw, 56px)",
          }}
        >
          {/* Header */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#C8FF00]" />
              <span className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-[rgba(10,14,26,0.45)]">
                Artificial Intelligence
              </span>
              <div className="w-6 h-px bg-[#C8FF00]" />
            </div>

            {/* Headline */}
            <h2
              ref={headlineRef}
              className="font-black text-[#0A0E1A] leading-[0.91] tracking-[-0.025em] text-center"
              style={{ fontSize: "clamp(2.8rem, 6vw, 2.5rem)" }}
            >
              Embrace the Future
              <br />
              with Cutting-Edge{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#C8FF00" }}>
                AI
              </em>
            </h2>

            {/* Subtext */}
            <p
              ref={subRef}
              className="text-[rgba(10,14,26,0.45)] text-center mt-5 max-w-md mx-auto leading-relaxed"
              style={{ fontSize: "0.92rem" }}
            >
              From machine learning to generative AI — we build systems that think.
            </p>
          </div>

          {/* Neural Network SVG */}
          <div className="relative w-full mt-12" style={{ height: isMobile ? 200 : 280 }}>
            <svg
              ref={networkSvgRef}
              viewBox="0 0 1200 280"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                <filter id="glow-lime" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-ink" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="hub-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#C8FF00" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C8FF00" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* ── Layer labels ── */}
              <text x="160"  y="16" textAnchor="middle" fill="rgba(10,14,26)" fontSize="9" fontFamily="Syne" letterSpacing="1" fontWeight="700" className="layer-label">INPUT</text>
              <text x="420"  y="16" textAnchor="middle" fill="rgba(10,14,26)" fontSize="9" fontFamily="Syne" letterSpacing="1" fontWeight="700" className="layer-label">HIDDEN A</text>
              <text x="600"  y="16" textAnchor="middle" fill="rgba(10,14,26)" fontSize="9" fontFamily="Syne" letterSpacing="1" fontWeight="700" className="layer-label">CORE</text>
              <text x="780"  y="16" textAnchor="middle" fill="rgba(10,14,26)" fontSize="9" fontFamily="Syne" letterSpacing="1" fontWeight="700" className="layer-label">HIDDEN B</text>
              <text x="1040" y="16" textAnchor="middle" fill="rgba(10,14,26)" fontSize="9" fontFamily="Syne" letterSpacing="1" fontWeight="700" className="layer-label">OUTPUT</text>

              {/* ── BASE WIRES — Layer 1 → Layer 2 ── */}
              {L1_PATHS.map((d, i) => (
                <path key={`l1-wire-${i}`} d={d} className={wireClass("l1")} fill="none" stroke="rgba(10,14,26,0.08)" strokeWidth="1" strokeLinecap="round" />
              ))}
              {/* ── BASE WIRES — Layer 2 → Hub ── */}
              {L2_PATHS.map((d, i) => (
                <path key={`l2-wire-${i}`} d={d} className={wireClass("l2")} fill="none" stroke="rgba(10,14,26,0.08)" strokeWidth="1" strokeLinecap="round" />
              ))}
              {/* ── BASE WIRES — Hub → Layer 3 ── */}
              {HUB_PATHS.map((d, i) => (
                <path key={`hub-wire-${i}`} d={d} className={wireClass("hub")} fill="none" stroke="rgba(10,14,26,0.08)" strokeWidth="1" strokeLinecap="round" />
              ))}
              {/* ── BASE WIRES — Layer 3 → Layer 4 ── */}
              {L3_PATHS.map((d, i) => (
                <path key={`l3-wire-${i}`} d={d} className={wireClass("l3")} fill="none" stroke="rgba(10,14,26,0.08)" strokeWidth="1" strokeLinecap="round" />
              ))}

              {/* ── SIGNAL PULSES ── */}
              {signalData.map((s, i) => (
                <path
                  key={`signal-${i}`}
                  d={s.d}
                  className="signal-pulse"
                  style={{ "--duration": s.duration, "--delay": s.delay } as React.CSSProperties}
                />
              ))}

              {/* ── NODES — Layer 1 ── */}
              {[{ cx: 160, cy: 70 }, { cx: 160, cy: 140 }, { cx: 160, cy: 210 }].map((n, i) => (
                <circle key={`n1-${i}`} cx={n.cx} cy={n.cy} r={i === 1 ? 8 : 6}
                  stroke={i === 1 ? "rgba(10,14,26,0.45)" : "rgba(10,14,26,0.2)"}
                  strokeWidth={i === 1 ? 1.5 : 1.2}
                  fill={i === 1 ? "rgba(10,14,26,0.06)" : "rgba(10,14,26,0.03)"}
                  filter="url(#glow-ink)"
                  className="network-node"
                />
              ))}

              {/* ── NODES — Layer 2 ── */}
              {[{ cx: 420, cy: 40 }, { cx: 420, cy: 115 }, { cx: 420, cy: 190 }, { cx: 420, cy: 245 }].map((n, i) => (
                <circle key={`n2-${i}`} cx={n.cx} cy={n.cy} r={i === 1 ? 8 : 6}
                  stroke={i === 1 ? "rgba(10,14,26,0.45)" : "rgba(10,14,26,0.2)"}
                  strokeWidth={i === 1 ? 1.5 : 1.2}
                  fill={i === 1 ? "rgba(10,14,26,0.06)" : "rgba(10,14,26,0.03)"}
                  filter="url(#glow-ink)"
                  className="network-node"
                />
              ))}

              {/* ── NODES — Layer 3 ── */}
              {[{ cx: 780, cy: 55 }, { cx: 780, cy: 140 }, { cx: 780, cy: 225 }].map((n, i) => (
                <circle key={`n3-${i}`} cx={n.cx} cy={n.cy} r={i === 1 ? 8 : 6}
                  stroke={i === 1 ? "rgba(10,14,26,0.45)" : "rgba(10,14,26,0.2)"}
                  strokeWidth={i === 1 ? 1.5 : 1.2}
                  fill={i === 1 ? "rgba(10,14,26,0.06)" : "rgba(10,14,26,0.03)"}
                  filter="url(#glow-ink)"
                  className="network-node"
                />
              ))}

              {/* ── NODES — Layer 4 ── */}
              {[{ cx: 1040, cy: 85 }, { cx: 1040, cy: 140 }, { cx: 1040, cy: 195 }].map((n, i) => (
                <circle key={`n4-${i}`} cx={n.cx} cy={n.cy} r={i === 1 ? 8 : 6}
                  stroke={i === 1 ? "rgba(10,14,26,0.45)" : "rgba(10,14,26,0.2)"}
                  strokeWidth={i === 1 ? 1.5 : 1.2}
                  fill={i === 1 ? "rgba(10,14,26,0.06)" : "rgba(10,14,26,0.03)"}
                  filter="url(#glow-ink)"
                  className="network-node"
                />
              ))}

              {/* ── HUB NODE ── */}
              <g className="hub-core">
                {/* Glow aura */}
                <circle cx="640" cy="140" r="32" fill="url(#hub-grad)" />
                {/* Breathing outer ring */}
                <circle cx="640" cy="140" r="20"
                  stroke="rgba(200,255,0,0.2)"
                  strokeWidth="1"
                  fill="none"
                  className="hub-ring"
                />
                {/* Middle ring */}
                <circle cx="640" cy="140" r="13"
                  stroke="rgba(200,255,0,0.45)"
                  strokeWidth="1.2"
                  fill="rgba(200,255,0,0.06)"
                />
                {/* Core */}
                <circle cx="640" cy="140" r="7"
                  stroke="#C8FF00"
                  strokeWidth="1.5"
                  fill="rgba(200,255,0,0.2)"
                  filter="url(#glow-lime)"
                />
              </g>
            </svg>
          </div>

          {/* ── Zone A → B connector ──────────────────────────── */}
          <div className="flex flex-col items-center mt-4">
            <svg width="2" height="64" viewBox="0 0 2 64" style={{ display: "block" }}>
              <line
                ref={connectorLineRef}
                x1="1" y1="0" x2="1" y2="64"
                stroke="#C8FF00"
                strokeWidth="1.5"
                strokeDasharray="3 4"
              />
            </svg>
            <div className="flex gap-2 mt-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(10,14,26,0.1)" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── ZONE B — Card grid ───────────────────────────────── */}
        <div className="w-full bg-white" style={{ paddingTop: "clamp(32px,4vw,56px)", paddingBottom: "clamp(64px,8vw,100px)" }}>
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            {/* 2×3 grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            >
              {AI_SERVICES.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="group relative"
                >
                  <div
                    className="relative bg-white rounded-2xl p-7 h-full overflow-hidden
                                transition-all duration-300 ease-out
                                group-hover:-translate-y-1"
                    style={{
                      border: `1px solid ${C.cardBorder}`,
                      transition: "border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,255,0,0.45)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(10,14,26,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = C.cardBorder;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#C8FF00]">
                        {card.number}
                      </span>
                      <span className="text-[0.58rem] tracking-[0.12em] uppercase text-[rgba(10,14,26,0.3)]">
                        {card.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-5 text-[rgba(10,14,26,0.45)] group-hover:text-[#0A0E1A] transition-colors duration-200">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-black text-[#0A0E1A] leading-tight mb-3"
                      style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] leading-relaxed" style={{ fontSize: "0.82rem" }}>
                      {card.desc}
                    </p>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-[#C8FF00] rounded-full
                                  scale-x-0 group-hover:scale-x-100 origin-left"
                      style={{ transition: "transform 400ms ease-out" }}
                    />

                    {/* Watermark number */}
                    <span
                      className="absolute -bottom-3 -right-2 font-black leading-none select-none pointer-events-none text-[rgba(10,14,26,0.03)]"
                      style={{ fontSize: "7rem" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-16">
              <button
                onClick={() => navigate("/Contact-Us")}
                className="group relative overflow-hidden font-black text-sm px-10 py-4 rounded-full tracking-[0.06em] uppercase transition-colors duration-200 hover:bg-white"
                style={{ background: C.accent, color: C.dark }}
              >
                Get In Touch
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
