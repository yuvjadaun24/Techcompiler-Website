import { Component, Suspense, useEffect, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const CARD_COUNT = 6;

/* ── Error boundary so WebGL failures don't crash the page ── */
class SplineErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(_: Error, info: ErrorInfo) {
    console.warn("Spline 3D scene failed to load — hiding.", info);
  }
  render() { return this.state.hasError ? null : this.props.children; }
}

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

CustomEase.create("silk", "M0,0 C0.11,0 0.19,0.53 0.27,0.53 0.41,0.78 0.51,1 1,1");
CustomEase.create("ai-snap", "M0,0 C0.2,0 0.2,1 1,1");
CustomEase.create("ai-card", "M0,0 C0.16,1 0.3,1 1,1");

/* ── Colour tokens ────────────────────────────────────────── */
const C = {
  sectionBg: "#FFFFFF",
  cardBg: "rgba(255,255,255,0.9)",
  cardBorder: "rgba(10,14,26,0.06)",
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
  stroke: "rgba(10,14,26,0.55)",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const MLIcon = (
  <svg {...iconProps}>
    <path d="M3 18l6-4 4 3 6-5 4 3" />
    <path d="M3 12l6-3 4 2 6-4 4 2" stroke={C.accent} />
    <path d="M3 6l6-2 4 2 6-3 4 1" />
  </svg>
);
const NLPIcon = (
  <svg {...iconProps}>
    <rect x="3" y="4" width="20" height="14" rx="3" />
    <text x="13" y="14" textAnchor="middle" fill={C.inkMuted} stroke="none" fontSize="7" fontFamily="monospace">&lt;/&gt;</text>
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
    <circle cx="23" cy="13" r="2.5" stroke={C.accent} />
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
    <polyline points="8 16 11 12 14 14 19 8" stroke={C.accent} />
    <polyline points="16 8 19 8 19 11" stroke={C.accent} />
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

/* ── Mobile wireframe cube SVG ────────────────────────────── */
const WireframeCube = () => (
  <svg viewBox="0 0 120 104" width={120} height={104} fill="none"
    stroke={C.accent} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.6}>
    <path d="M60 10 L100 32 L100 72 L60 94 L20 72 L20 32 Z" />
    <path d="M60 10 L60 52 M60 52 L100 32 M60 52 L20 32" strokeDasharray="3 4" opacity={0.4} />
  </svg>
);

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export default function AISectionCube() {
  const navigate = useNavigate();
  const isMobile = useRef(typeof window !== "undefined" && window.innerWidth < 1024);

  /* refs — scroll structure */
  const sectionRef = useRef<HTMLDivElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const flashOverlayRef = useRef<HTMLDivElement>(null);

  /* refs — header */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  /* refs — cards & dots */
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const solveTextRef = useRef<HTMLSpanElement>(null);



  /* ── GSAP orchestration ─────────────────────────────────── */
  useEffect(() => {
    const splitInstances: SplitText[] = [];

    const ctx = gsap.context(() => {

      /* ── Section header SplitText (fires once) ────────── */
      if (headlineRef.current) {
        gsap.set(headlineRef.current, { autoAlpha: 1 });
      }
      if (subRef.current) {
        gsap.set(subRef.current, { autoAlpha: 0, y: 20 });
      }

      ScrollTrigger.create({
        trigger: runwayRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (!headlineRef.current) return;
          try {
            const split = new SplitText(headlineRef.current, { type: "chars", charsClass: "char" });
            splitInstances.push(split);
            gsap.set(headlineRef.current.querySelectorAll(".char"), {
              autoAlpha: 0, yPercent: 100, rotationX: -70, transformOrigin: "50% 100%",
            });
            const tl = gsap.timeline();
            tl.to(headlineRef.current.querySelectorAll(".char"), {
              autoAlpha: 1, yPercent: 0, rotationX: 0,
              duration: 0.8, stagger: { amount: 0.55, ease: "power2.out" }, ease: "ai-snap",
            });
            if (subRef.current) {
              tl.to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "silk" }, "-=0.3");
            }
          } catch {
            gsap.to(headlineRef.current, { autoAlpha: 1 });
            if (subRef.current) gsap.to(subRef.current, { autoAlpha: 1, y: 0 });
          }
        },
      });

      if (isMobile.current) {
        /* ── Mobile: simple scroll-triggered card reveals ── */
        cardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(card,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1, y: 0, duration: 0.6, ease: "ai-card",
              scrollTrigger: { trigger: card, start: "top 85%", once: true },
            },
          );
        });
        return;
      }

      /* ── Desktop: Spline + scroll card reveals ─────── */

      /* Hide cards initially */
      cardRefs.current.forEach((card) => {
        if (card) gsap.set(card, { autoAlpha: 0 });
      });

      /* ── Per-card scroll-triggered reveals ─────────── */
      let solvedCount = 0;

      function revealCard(index: number) {
        const card = cardRefs.current[index];
        if (!card) return;
        const isLeft = index < 3;
        gsap.fromTo(card,
          { autoAlpha: 0, x: isLeft ? -60 : 60, scale: 0.92 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.7, ease: "ai-card" },
        );
        gsap.fromTo(card,
          { borderColor: "rgba(200,255,0,0.7)" },
          { borderColor: C.cardBorder, duration: 1.2, ease: "power2.out", delay: 0.05 },
        );
        const dot = dotRefs.current[index];
        if (dot) gsap.to(dot, { backgroundColor: C.accent, scale: 1.6, duration: 0.4, ease: "bounce.out" });
        if (solveTextRef.current) solveTextRef.current.textContent = `Solved: ${index + 1} / 6`;

        if (index === 5) {
          if (flashOverlayRef.current) {
            gsap.fromTo(flashOverlayRef.current,
              { autoAlpha: 0.15 },
              { autoAlpha: 0, duration: 0.8, ease: "power2.out" },
            );
          }
        }
      }

      function hideCard(index: number) {
        const card = cardRefs.current[index];
        if (!card) return;
        const isLeft = index < 3;
        gsap.to(card, { autoAlpha: 0, x: isLeft ? -40 : 40, scale: 0.94, duration: 0.4, ease: "power2.in" });
        const dot = dotRefs.current[index];
        if (dot) gsap.to(dot, { backgroundColor: "rgba(10,14,26,0.06)", scale: 1, duration: 0.3 });
        if (solveTextRef.current) solveTextRef.current.textContent = index > 0 ? `Solved: ${index} / 6` : "Solving… 0 / 6";
      }

      Array.from({ length: CARD_COUNT }).forEach((_, i) => {
        ScrollTrigger.create({
          trigger: runwayRef.current,
          start: `${20 + i * 11.5}% top`,
          end: `${31.5 + i * 11.5}% top`,
          onEnter() {
            if (solvedCount === i) {
              revealCard(i);
              solvedCount++;
            }
          },
          onLeaveBack() {
            if (solvedCount === i + 1) {
              hideCard(i);
              solvedCount--;
            }
          },
        });
      });

    }, sectionRef);

    return () => {
      splitInstances.forEach((s) => { try { s.revert(); } catch { } });
      ctx.revert();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── MOBILE LAYOUT ──────────────────────────────────────── */
  if (isMobile.current) {
    return (
      <section
        ref={sectionRef}
        style={{ background: C.sectionBg, fontFamily: "'Syne', sans-serif" }}
        className="w-full py-20 px-6"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px" style={{ background: C.accent }} />
            <span className="text-[0.62rem] font-bold tracking-[0.22em] uppercase" style={{ color: C.inkMuted }}>Artificial Intelligence</span>
            <div className="w-5 h-px" style={{ background: C.accent }} />
          </div>
          <h2
            ref={headlineRef}
            className="text-3xl font-black leading-tight mb-4"
            style={{ autoAlpha: 0, color: C.ink } as React.CSSProperties}
          >
            Embrace the Future with Cutting-Edge{" "}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.accent }}>AI</em>
          </h2>
          <p ref={subRef} className="text-sm leading-relaxed max-w-md" style={{ color: C.inkMuted }}>
            From machine learning to generative AI — we build systems that think.
          </p>
          <div className="mt-8">
            <WireframeCube />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {AI_SERVICES.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="glass-card glass-card--soft group relative rounded-2xl"
            >
              <div className="card-inner">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.58rem] font-black tracking-[0.2em] uppercase" style={{ color: C.accent }}>{card.number}</span>
                  <span className="text-[0.58rem] tracking-[0.12em] uppercase" style={{ color: C.inkMuted }}>{card.category}</span>
                </div>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-[0.98rem] font-black leading-tight mb-3" style={{ color: C.ink }}>{card.title}</h3>
                <p className="text-[0.75rem] leading-relaxed" style={{ color: C.inkMuted }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/Contact-Us")}
            className="font-black text-sm px-10 py-4 rounded-full tracking-[0.06em] uppercase transition-colors duration-200 hover:bg-white"
            style={{ background: C.accent, color: C.sectionBg }}
          >
            Get In Touch <span className="ml-2">→</span>
          </button>
        </div>
      </section>
    );
  }

  /* ── DESKTOP LAYOUT ─────────────────────────────────────── */
  return (
    <section ref={sectionRef} style={{ background: C.sectionBg, fontFamily: "'Syne', sans-serif", width: "100%" }}>
      {/* Scroll runway */}
      <div ref={runwayRef} style={{ position: "relative", minHeight: "500vh", width: "100%" }}>
        {/* Sticky stage */}
        <div
          ref={stageRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100dvh",
            width: "100vw",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Spline 3D scene */}
          <SplineErrorBoundary>
            <Suspense fallback={null}>
              <Spline scene="https://prod.spline.design/E2NnPus9oWYPVrZP/scene.splinecode" />
            </Suspense>
          </SplineErrorBoundary>

          {/* Radial light overlay — brightens centre, fades edges */}
          <div
            className="Radial-light-overlay"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 1,
              background:
                "radial-gradient(circle, hsla(0, 0%, 100%, 0.1) 0%, hsla(0, 0%, 100%, 1) 100%)",
            }}
          />

          {/* Lime flash overlay */}
          <div
            ref={flashOverlayRef}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 60,
              background: C.accent,
              opacity: 0,
              visibility: "hidden" as const,
            }}
          />

          {/* ── Header ─────────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px" style={{ background: C.accent }} />
              <span
                className="text-[0.62rem] font-bold tracking-[0.22em] uppercase"
                style={{ color: C.inkMuted }}
              >
                Artificial Intelligence
              </span>
              <div className="w-5 h-px" style={{ background: C.accent }} />
            </div>
            <h2
              ref={headlineRef}
              className="text-[clamp(1.5rem,3vw,2.6rem)] font-black leading-tight text-center max-w-2xl"
              style={{ color: C.ink }}
            >
              Embrace the Future
              <br />
              with Cutting-Edge{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.accent }}>
                AI
              </em>
            </h2>
            <p
              ref={subRef}
              className="text-[0.85rem] mt-4 text-center max-w-md leading-relaxed"
              style={{ color: C.inkMuted }}
            >
              From machine learning to generative AI — we build systems that think.
            </p>
          </div>

          {/* ── Left card column (cards 0, 1, 2) ───────── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "15vh",
              width: "30vw",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: "3vw",
              zIndex: 20,
            }}
          >
            {AI_SERVICES.slice(0, 3).map((card, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="glass-card glass-card--soft group relative"
                style={{ opacity: 0, visibility: "hidden" as const }}
              >
                <div className="card-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.58rem] font-black tracking-[0.2em] uppercase" style={{ color: C.accent }}>{card.number}</span>
                    <span className="text-[0.58rem] tracking-[0.12em] uppercase" style={{ color: C.inkMuted }}>{card.category}</span>
                  </div>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-[0.98rem] font-black leading-tight mb-3" style={{ color: C.ink }}>{card.title}</h3>
                  <p className="text-[0.75rem] leading-relaxed" style={{ color: C.inkMuted }}>{card.desc}</p>
                  <div
                    className="absolute bottom-0 left-5 right-5 h-[1.5px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: C.accent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Right card column (cards 3, 4, 5) ──────── */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "15vh",
              width: "30vw",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingRight: "3vw",
              zIndex: 20,
            }}
          >
            {AI_SERVICES.slice(3).map((card, i) => (
              <div
                key={i + 3}
                ref={(el) => { cardRefs.current[i + 3] = el; }}
                className="glass-card glass-card--soft group relative"
                style={{ opacity: 0, visibility: "hidden" as const }}
              >
                <div className="card-inner">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.58rem] font-black tracking-[0.2em] uppercase" style={{ color: C.accent }}>{card.number}</span>
                    <span className="text-[0.58rem] tracking-[0.12em] uppercase" style={{ color: C.inkMuted }}>{card.category}</span>
                  </div>
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-[0.98rem] font-black leading-tight mb-3" style={{ color: C.ink }}>{card.title}</h3>
                  <p className="text-[0.75rem] leading-relaxed" style={{ color: C.inkMuted }}>{card.desc}</p>
                  <div
                    className="absolute bottom-0 left-5 right-5 h-[1.5px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: C.accent }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Solve status bar ──────────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              zIndex: 20,
              pointerEvents: "none",
            }}
          >
            {AI_SERVICES.map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "rgba(10,14,26,0.06)",
                  transition: "all 0.5s",
                }}
              />
            ))}
            <span
              ref={solveTextRef}
              className="text-[0.6rem] font-bold tracking-[0.2em] uppercase"
              style={{ color: C.inkMuted }}
            >
              Solving… 0 / 6
            </span>
          </div>
        </div>
      </div>

      {/* ── CTA below sticky section ──────────────────────── */}
      <div
        className="w-full flex flex-col items-center gap-6 py-20"
        style={{
          background: C.sectionBg,
          borderTop: `1px solid ${C.cardBorder}`,
        }}
      >
        <p className="text-sm tracking-[0.1em]" style={{ color: C.inkMuted }}>
          Ready to apply AI to your business?
        </p>
        <button
          onClick={() => navigate("/Contact-Us")}
          className="group relative overflow-hidden font-black text-sm px-10 py-4 rounded-full tracking-[0.06em] uppercase transition-colors duration-200 hover:bg-white"
          style={{ background: C.accent, color: C.sectionBg }}
        >
          Get In Touch
          <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </div>
    </section>
  );
}
