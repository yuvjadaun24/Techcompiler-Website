import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { LockKeyhole, Zap, BrainCircuit } from "lucide-react";
import HeroRightSection from "./HeroRightSection";

gsap.registerPlugin(ScrollTrigger, CustomEase, DrawSVGPlugin, SplitText);

// Custom eases — wrapped so a bad SVG path doesn't crash the module
try {
  CustomEase.create("silk", "M0,0 C0.11,0 0.192,0.394 0.272,0.534 0.408,0.78 0.512,1 1,1");
  CustomEase.create("reveal", "M0,0 C0.2,0 0.08,1 1,1");
} catch { /* falls back to built-in eases */ }

// ── Color tokens ───────────────────────────────────────────
const C = {
  bg: "#FFFFFF",
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  inkDim: "rgba(10,14,26,0.08)",
  accent: "#C8FF00",
  accentBg: "rgba(200,255,0,0.08)",
};

// ── Social proof items ─────────────────────────────────────
const PROOF_ITEMS = [
  "Questions answered in under 2 seconds",
  "100% private",
  "Works on any database",
  "No data leaves your servers",
  "CMMI Certified",
  "Enterprise Grade",
];

// ── Value pills data ───────────────────────────────────────
const pills = [
  { icon: "🔒", label: "Zero data exposure" },
  { icon: "⚡", label: "Instant answers" },
  { icon: "🧠", label: "Learns your data" },
];

// ── Feature cards data ─────────────────────────────────────
const FEATURE_CARDS = [
  {
    num: "01",
    Icon: LockKeyhole,
    stat: "100% Private",
    statStyle: { background: "rgba(200,255,0,0.1)", color: "#3A6200", border: "1px solid rgba(200,255,0,0.4)" },
    title: "Private by Architecture",
    desc: "Your data never leaves your servers. The AI agent runs entirely within your own infrastructure — no cloud routing, no third-party exposure, full data sovereignty.",
  },
  {
    num: "02",
    Icon: Zap,
    stat: "< 2s Response",
    statStyle: { background: "rgba(10,14,26,0.05)", color: C.ink, border: "1px solid rgba(10,14,26,0.12)" },
    title: "Instant Intelligence",
    desc: "Ask anything in plain English. Get answers in under 2 seconds across any database, ERP, or CRM — no SQL, no engineers, no waiting.",
  },
  {
    num: "03",
    Icon: BrainCircuit,
    stat: "Self-Learning AI",
    statStyle: { background: "rgba(10,14,26,0.05)", color: C.ink, border: "1px solid rgba(10,14,26,0.12)" },
    title: "Learns Your Business",
    desc: "Automatically adapts to your schema, vocabulary, and KPIs. Every query makes it smarter — no manual training, no prompt engineering required.",
  },
];

// ── Font constants ─────────────────────────────────────────
const SYNE = "'Syne', sans-serif";
const SERIF = "'Instrument Serif', serif";

// ── Ribbon SVG path — diagonal top-right → bottom-left ───
const RIBBON_D = "M -80,700 C 80,700 180,350 400,360 C 620,370 700,710 880,710 C 1060,710 1200,340 1540,330";

// ── Component ──────────────────────────────────────────────
export default function HeroSection() {
  const navigate = useNavigate();

  // ── Refs ─────────────────────────────────────────────────
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ribbonWrapRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const bottomFadeRef = useRef<HTMLDivElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);

  // ── GSAP master effect ───────────────────────────────────
  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(pointer: coarse)").matches;

      // ── SplitText (graceful) ───────────────────────────
      let allChars: HTMLElement[] = [];
      if (!isMobile && headlineRef.current) {
        try {
          const lineEls = headlineRef.current.querySelectorAll(".hl-line");
          lineEls.forEach((line: Element) => {
            const split = new SplitText(line as HTMLElement, { type: "chars", charsClass: "char" });
            if (split.chars) allChars.push(...(split.chars as HTMLElement[]));
          });
        } catch { /* SplitText unavailable */ }
      }
      const hasSplit = allChars.length > 0;

      // ── Initial states for non-animated layers ────────
      // Ribbon fades in subtly (decorative layer — fade is fine)
      gsap.set(ribbonWrapRef.current, { autoAlpha: 0 });
      // Feature cards panel starts off-screen BELOW the sticky stage
      gsap.set(expandedRef.current, { y: "100%" });
      if (expandedRef.current) expandedRef.current.style.pointerEvents = "none";
      // Keep bottom fade div invisible (not used in scroll mode)
      gsap.set(bottomFadeRef.current, { autoAlpha: 0 });
      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", "150%");
      }

      const fcEls = expandedRef.current?.querySelectorAll(".fc");
      // Cards start invisible and below — each slides up one by one on scroll
      if (fcEls) gsap.set(fcEls, { y: 120, autoAlpha: 0 });
      // Crayon line starts invisible (DrawSVG will handle both strokes)
      if (linePathRef.current) gsap.set(linePathRef.current, { drawSVG: "0%" });
      gsap.set("#crayon-glow", { drawSVG: "0%", autoAlpha: 1 });

      // ── Entry timeline — uses from() so elements stay visible if GSAP fails
      const entry = gsap.timeline({ defaults: { ease: "silk" }, delay: 0.1 });

      entry.from(badgeRef.current, { autoAlpha: 0, y: 20, duration: 0.6 }, 0);

      if (hasSplit) {
        entry.from(allChars, {
          autoAlpha: 0,
          yPercent: 115,
          rotationX: -80,
          transformOrigin: "50% 100%",
          duration: 0.9,
          stagger: { amount: 0.6, ease: "power2.out" },
          ease: "reveal",
        }, 0.35);
      } else {
        entry.from(headlineRef.current, { autoAlpha: 0, y: 30, duration: 0.9 }, 0.35);
      }

      entry.from(subRef.current, { autoAlpha: 0, y: 24, duration: 0.65 }, 0.7);

      if (pillsRef.current) {
        entry.from(Array.from(pillsRef.current.children), {
          autoAlpha: 0,
          x: -20,
          duration: 0.45,
          stagger: 0.09,
        }, 0.85);
      }

      entry.from(ctaRef.current, { autoAlpha: 0, y: 18, duration: 0.5 }, 1.05);
      entry.from(rightColRef.current, { autoAlpha: 0, x: 60, scale: 0.94, duration: 1.1, ease: "silk" }, 0.4);
      entry.to(ribbonWrapRef.current, { autoAlpha: 0.6, duration: 0.9 }, 1.35);

      // ── Scroll timeline ────────────────────────────────
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 68px",     // aligns with fixed navbar height (68px)
          end: "bottom bottom",
          scrub: 1.8,             // snappier than 2.8 so it doesn't feel laggy
        },
      });

      // Phase 1 (t 0–7): ribbon travels, hero is COMPLETELY STILL
      scrollTl.to(ribbonWrapRef.current, { autoAlpha: 0.9, duration: 2.5 }, 0);
      scrollTl.to(textPathRef.current,  { attr: { startOffset: "-80%" }, duration: 7, ease: "none" }, 0);

      // Phase 2 (t 7–11): ribbon text done → hero content scrolls UP naturally
      scrollTl.to(leftColRef.current,  { y: "-60vh", duration: 4, ease: "power1.in" }, 7);
      scrollTl.to(rightColRef.current, { y: "-60vh", duration: 4, ease: "power1.in" }, 7.3);
      // Ribbon drifts up with the content and fades
      scrollTl.to(ribbonWrapRef.current, { y: "-30vh", autoAlpha: 0, duration: 3, ease: "power1.in" }, 7);

      // Phase 2 (t 7–12): next section (feature cards) rises from below simultaneously
      scrollTl.to(expandedRef.current, {
        y: "0%",
        duration: 5,
        ease: "power1.inOut",
        onStart: () => {
          if (expandedRef.current) expandedRef.current.style.pointerEvents = "auto";
        },
      }, 7);

      // Phase 3 (t 10.5–16): cards rise one by one as user scrolls
      if (fcEls) {
        fcEls.forEach((card, i) => {
          scrollTl.fromTo(
            card,
            { y: 120, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.8, ease: "power2.out" },
            10.5 + i * 2,
          );
        });
      }

      // Phase 4 (t 10.5–16.3): crayon draws left → right in sync with cards appearing
      if (linePathRef.current) {
        scrollTl.to("#crayon-glow", { drawSVG: "100%", duration: 5.8, ease: "power1.inOut" }, 10.5);
        scrollTl.to(linePathRef.current, { drawSVG: "100%", duration: 5.8, ease: "power1.inOut" }, 10.5);
      }

      // Dwell buffer — breathe before normal scroll resumes
      scrollTl.to({}, { duration: 1.5 }, 16.5);
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .headline-wrap { perspective: 900px; }
        .hl-line-clip {
          overflow: hidden;
          padding-bottom: 0.08em;
          display: block;
        }
        .char { display: inline-block; }
        .fc {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.3s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
        }
        .fc:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(10,14,26,0.09);
          border-color: rgba(200,255,0,0.6) !important;
        }
        @keyframes ribbonPulse {
          0%, 100% { opacity: 0.28; }
          50%       { opacity: 0.6; }
        }
        .ribbon-text { animation: ribbonPulse 3.2s ease-in-out infinite; }
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hero-marquee {
          animation: marqueeLeft 24s linear infinite;
          display: flex;
          width: max-content;
        }
        .hero-marquee-wrap:hover .hero-marquee {
          animation-play-state: paused;
        }
        .hero-runway { overflow-x: clip; }
        /* Animated button with skewed background slide */
        .demo-button-animated {
          outline: none;
          cursor: pointer;
          border: none;
          padding: 0.6rem 1.2rem;
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.04rem;
          font-weight: 700;
          border-radius: 8px;
          overflow: hidden;
          background: #C8FF00;
          color: #fff;
          transition: none;
        }
        .demo-button-animated span {
          position: relative;
          z-index: 10;
          transition: color 0.4s;
        }
        .demo-button-animated:hover span {
          color: #000;
        }
        .demo-button-animated::before {
          content: "";
          background: #0A0E1A;
          width: 120%;
          left: -10%;
          position: absolute;
          top: 0;
          height: 100%;
          z-index: 0;
          transform: skew(30deg);
          transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
        }
        .demo-button-animated:hover::before {
          transform: translate3d(100%, 0, 0);
        }
        /* Star burst button animation */
        .explore-button-animated {
          position: relative;
          padding: 0.6rem 1.4rem;
          background: #0A0E1A;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          border: none;
          border-radius: 8px;
          box-shadow: 0 0 0 transparent;
          transition: all 0.25s ease-in-out;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04rem;
          overflow: hidden;
        }
        .explore-button-animated span {
          position: relative;
          z-index: 10;
        }
        .star-1, .star-2, .star-3, .star-4, .star-5, .star-6 {
          position: absolute;
          width: 25px;
          height: auto;
          z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }
        .star-1 { top: 20%; left: 20%; width: 25px; }
        .star-2 { top: 45%; left: 45%; width: 15px; }
        .star-3 { top: 40%; left: 40%; width: 5px; }
        .star-4 { top: 20%; left: 40%; width: 8px; transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01); }
        .star-5 { top: 25%; left: 45%; width: 15px; transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01); }
        .star-6 { top: 5%; left: 50%; width: 5px; transition: all 0.8s ease; }
        .star-1 svg, .star-2 svg, .star-3 svg, .star-4 svg, .star-5 svg, .star-6 svg {
          filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0.9));
          width: 100%;
          height: auto;
        }
        .explore-button-animated:hover {
          background: #C8FF00;
          color: #0A0E1A;
          box-shadow: 0 0 25px rgba(200, 255, 0, 0.55);
        }
        .explore-button-animated:hover .star-1 {
          top: -80%;
          left: -30%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-1 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .explore-button-animated:hover .star-2 {
          top: -25%;
          left: 10%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-2 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .explore-button-animated:hover .star-3 {
          top: 55%;
          left: 25%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-3 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .explore-button-animated:hover .star-4 {
          top: 30%;
          left: 80%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-4 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .explore-button-animated:hover .star-5 {
          top: 25%;
          left: 115%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-5 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .explore-button-animated:hover .star-6 {
          top: 5%;
          left: 60%;
          z-index: 2;
        }
        .explore-button-animated:hover .star-6 svg { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9)); }
        .star-fill {
          fill: rgba(255, 255, 255, 0.9);
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 32px 16px 0 !important;
          }
          .feature-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Scroll runway ─────────────────────────────── */}
      <div
        ref={wrapperRef}
        className="hero-runway"
        style={{ position: "relative", minHeight: "360vh", width: "100%", background: C.bg }}
      >
        {/* ── Sticky stage ───────────────────────────── */}
        <div
          ref={stickyRef}
          style={{
            position: "sticky",
            top: 68,                          /* sits below the fixed navbar (68px) */
            width: "100%",
            height: "calc(100dvh - 68px)",    /* fill remaining viewport under navbar */
            overflow: "hidden",
            background: C.bg,
          }}
        >
          {/* ── LAYER 1 — Hero grid ─────────────────────── */}
          <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
            <div
              className="hero-grid"
              style={{
                maxWidth: 1280,
                width: "100%",
                margin: "0 auto",
                padding: "100px 32px 0",
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: 40,
                alignItems: "start",
              }}
            >
              {/* ── LEFT COLUMN ─────────────────────────── */}
              <div ref={leftColRef} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Badge pill */}
                <div
                  ref={badgeRef}
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 18px",
                    borderRadius: 100,
                    border: "1px solid rgba(10,14,26,0.12)",
                    background: C.bg,
                    cursor: "default",
                    transition: "border-color 0.25s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(10,14,26,0.12)")}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: C.accent,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: SYNE,
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: C.ink,
                      fontWeight: 600,
                    }}
                  >
                    Enterprise AI Agent · Private by Architecture
                  </span>
                </div>

                {/* Headline */}
                <div ref={headlineRef} className="headline-wrap" style={{ display: "block" }}>
                  <h1
                    style={{
                      fontFamily: SYNE,
                      fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.02em",
                      margin: 0,
                      color: C.ink,
                    }}
                  >
                    <span className="hl-line-clip">
                      <span className="hl-line" style={{ fontWeight: 900 }}>
                        Your Data,
                      </span>
                    </span>
                    <span className="hl-line-clip">
                      <span className="hl-line" style={{ fontWeight: 900, color: C.accent }}>
                        Now Speaks
                      </span>
                    </span>
                    <span className="hl-line-clip">
                      <span
                        className="hl-line"
                        style={{
                          fontFamily: SERIF,
                          fontWeight: 500,
                          fontStyle: "italic",
                        }}
                      >
                        to You.
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Subheadline */}
                <p
                  ref={subRef}
                  style={{
                    fontFamily: SYNE,
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: C.inkMuted,
                    maxWidth: 480,
                    margin: 0,
                  }}
                >
                  A custom AI agent installed inside your infrastructure —
                  answering any question about your business in seconds.
                </p>

                {/* Value pills */}
                <div ref={pillsRef} style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {pills.map((pill, i) => (
                    <span
                      key={i}
                      className="glass-pill"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 16px",
                        borderRadius: 100,
                        border: "2px solid transparent",
                        background: "rgba(255,255,255,0.02)",
                        boxShadow: "0 0 0 2px rgba(255,255,255,0.6), 0 16px 32px rgba(0,0,0,0.12)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        fontSize: "0.8rem",
                        fontFamily: SYNE,
                        color: C.ink,
                        cursor: "default",
                        transition: "box-shadow 0.3s, background 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(200,255,0,0.08)";
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(200,255,0,0.6), 0 16px 32px rgba(0,0,0,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(255,255,255,0.6), 0 16px 32px rgba(0,0,0,0.12)";
                      }}
                    >
                      <span>{pill.icon}</span>
                      <span>{pill.label}</span>
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div ref={ctaRef} style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <button
                    onClick={() => navigate("/ai-agent")}
                    className="explore-button-animated"
                  >
                    <span>Explore How It Works</span>
                    <span style={{ display: "inline-block", transition: "transform 0.2s" }}>→</span>
                    <div className="star-1">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                    <div className="star-2">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                    <div className="star-3">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                    <div className="star-4">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                    <div className="star-5">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                    <div className="star-6">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink"><path className="star-fill" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
                    </div>
                  </button>
                  <button
                    onClick={() => navigate("/Contact-Us")}
                    className="demo-button-animated"
                  >
                    <span>Book a Demo</span>
                  </button>
                </div>
              </div>

              {/* ── RIGHT COLUMN ────────────────────────── */}
              <div
                ref={rightColRef}
                style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end" }}
              >
                <HeroRightSection />
              </div>
            </div>
          </div>

          {/* ── LAYER 2 — Ribbon band + path text ─────── */}
          <div
            ref={ribbonWrapRef}
            style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none", overflow: "hidden" }}
          >
            <svg
              viewBox="0 0 1440 800"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              <defs>
                <path id="ribbon-text-path" d={RIBBON_D} />
              </defs>

              {/* Broad diagonal ribbon band */}
              <path
                d={RIBBON_D}
                fill="none"
                stroke="rgba(10,14,26,0.055)"
                strokeWidth={200}
                strokeLinecap="round"
              />

              {/* White paint-order stroke so text is legible inside the band */}
              <text
                paintOrder="stroke fill"
                stroke="white"  
                strokeWidth="6"
                strokeLinejoin="round"
                fill={C.ink}
                opacity={0.7}
                fontFamily="'Syne', sans-serif"
                fontSize="16"
                fontWeight="700"
                letterSpacing="4"
              >
                <textPath
                  ref={textPathRef}
                  href="#ribbon-text-path"
                  startOffset="150%"
                >
                  {[...PROOF_ITEMS, ...PROOF_ITEMS, ...PROOF_ITEMS, ...PROOF_ITEMS]
                    .map((t) => t.toUpperCase())
                    .join("   ·   ")}
                </textPath>
              </text>
            </svg>
          </div>

          {/* ── LAYER 3 — Feature cards overlay ────────── */}
          <div
            ref={expandedRef}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 40,
              background: C.bg,
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 32px",
            }}
          >
            {/* ── Crayon line — drawn behind the cards via DrawSVG ── */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", overflow: "visible" }}
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="crayon-filter" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" result="noise" seed="5" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
              {/* Wider glow pass */}
              <path
                id="crayon-glow"
                d="M -80,440 C 30,480 130,380 240,450 C 460,600 660,330 890,490 C 1120,650 1320,400 1480,560"
                fill="none"
                stroke="rgba(200,255,0,0.25)"
                strokeWidth="18"
                strokeLinecap="round"
                filter="url(#crayon-filter)"
              />
              {/* Main crayon stroke */}
              <path
                ref={linePathRef}
                d="M -80,440 C 30,480 130,380 240,450 C 460,600 660,330 890,490 C 1120,650 1320,400 1480,560"
                fill="none"
                stroke="#C8FF00"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#crayon-filter)"
                opacity="0.9"
              />
            </svg>

            <div style={{ maxWidth: 1280, width: "100%", position: "relative", zIndex: 1 }}>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 24, height: 4, background: C.accent, borderRadius: 2, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: SYNE,
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: C.inkMuted,
                    fontWeight: 600,
                  }}
                >
                  WHY TECHCOMPILER
                </span>
              </div>

              {/* Section headline */}
              <h2
                style={{
                  fontFamily: SYNE,
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  fontWeight: 900,
                  color: C.ink,
                  margin: "0 0 48px",
                  lineHeight: 1.15,
                }}
              >
                Three promises we{" "}
                <span style={{ fontFamily: SERIF, fontStyle: "italic", color: C.accent }}>
                  never
                </span>{" "}
                break.
              </h2>

              {/* Feature cards grid */}
              <div
                className="feature-cards-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
              >
                {FEATURE_CARDS.map((card) => (
                  <div
                    key={card.num}
                    className="fc"
                    style={{
                      position: "relative",
                      background: C.bg,
                      border: "1px solid rgba(10,14,26,0.09)",
                      borderRadius: 20,
                      padding: 32,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: -8,
                        right: 12,
                        fontSize: "7rem",
                        fontWeight: 900,
                        fontFamily: SYNE,
                        color: "rgba(10,14,26,0.04)",
                        userSelect: "none",
                        pointerEvents: "none",
                        lineHeight: 1,
                      }}
                    >
                      {card.num}
                    </span>
                    <card.Icon size={26} color={C.ink} style={{ marginBottom: 16 }} />
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: 100,
                        fontSize: "0.7rem",
                        fontFamily: SYNE,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        marginBottom: 16,
                        ...card.statStyle,
                      }}
                    >
                      {card.stat}
                    </span>
                    <h3
                      style={{
                        fontFamily: SYNE,
                        fontWeight: 900,
                        fontSize: "1.15rem",
                        color: C.ink,
                        margin: "0 0 10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: SYNE,
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: C.inkMuted,
                        margin: 0,
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Continue scrolling nudge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 40,
                  justifyContent: "center",
                }}
              >
                <span style={{ width: 16, height: 1, background: C.ink }} />
                <span
                  style={{
                    fontFamily: SYNE,
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(10,14,26,0.35)",
                  }}
                >
                  Continue scrolling
                </span>
              </div>
            </div>
          </div>

          {/* ── Bottom dissolve: blends sticky hero into next section ── */}
          <div
            ref={bottomFadeRef}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 160,
              background: "linear-gradient(to bottom, transparent, #FFFFFF)",
              zIndex: 50,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ── Marquee strip (normal flow, below sticky) ──── */}
      {/* <div
        className="hero-marquee-wrap"
        style={{
          borderTop: "1px solid rgba(10,14,26,0.1)",
          background: C.bg,
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <div className="hero-marquee">
          {[...PROOF_ITEMS, ...PROOF_ITEMS].map((item, i) => (
            <span
              key={`a-${i}`}
              style={{
                whiteSpace: "nowrap",
                fontFamily: SYNE,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9AA3B5",
              }}
            >
              {item}
              <span style={{ margin: "0 1.5rem" }}>·</span>
            </span>
          ))}
          {[...PROOF_ITEMS, ...PROOF_ITEMS].map((item, i) => (
            <span
              key={`b-${i}`}
              style={{
                whiteSpace: "nowrap",
                fontFamily: SYNE,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9AA3B5",
              }}
            >
              {item}
              <span style={{ margin: "0 1.5rem" }}>·</span>
            </span>
          ))}
        </div>
      </div> */}
    </>
  );
}
