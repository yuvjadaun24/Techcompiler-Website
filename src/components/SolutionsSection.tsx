import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import IllustrationProductEngineering from "./illustrations/IllustrationProductEngineering";
import IllustrationMobileSolutions from "./illustrations/IllustrationMobileSolutions";
import IllustrationBigData from "./illustrations/IllustrationBigData";
import IllustrationGoogleApps from "./illustrations/IllustrationGoogleApps";
import IllustrationSocialIntegration from "./illustrations/IllustrationSocialIntegration";

gsap.registerPlugin(ScrollTrigger, CustomEase, DrawSVGPlugin);

try {
  CustomEase.create("peel", "M0,0 C0.08,0 0.06,0.84 0.44,0.96 0.7,1.04 0.86,1 1,1");
  CustomEase.create("land", "M0,0 C0.2,0 0.1,1.08 0.6,1.04 0.8,1.02 1,1");
  CustomEase.create("sol-silk", "M0,0 C0.11,0 0.192,0.394 0.272,0.534 0.408,0.78 0.512,1 1,1");
} catch { /* fallback */ }

// ── Color tokens ───────────────────────────────────────────
const C = {
  bg: "#F7F7F5",
  cardBg: "#0A0E1A",
  cardBgHover: "#111827",
  accent: "#C8FF00",
  accentDim: "rgba(200,255,0,0.12)",
  accentBorder: "rgba(200,255,0,0.3)",
  ink: "#FFFFFF",
  inkMuted: "rgba(255,255,255,0.5)",
  inkDimmer: "rgba(255,255,255,0.22)",
  connector: "#C8FF00",
};

const SYNE = "'Syne', sans-serif";
const SERIF = "'Instrument Serif', serif";

// ── Card data ──────────────────────────────────────────────
const SOLUTIONS = [
  {
    number: "01",
    title: "Product Engineering",
    desc: "End-to-end product development from architecture to deployment — built to scale, designed to last.",
    highlight: "Full-cycle dev",
    url: "/Product-Engineering",
    Illustration: IllustrationProductEngineering,
  },
  {
    number: "02",
    title: "Mobile Solutions",
    desc: "Native and cross-platform apps that perform flawlessly across iOS and Android at any scale.",
    highlight: "iOS · Android · RN",
    url: "/Mobile-Applications",
    Illustration: IllustrationMobileSolutions,
  },
  {
    number: "03",
    title: "Big Data Analytics",
    desc: "Transform raw data into strategic intelligence — real-time pipelines, BI dashboards, and predictive models.",
    highlight: "Real-time insights",
    url: "/Big-Data-Analytics",
    Illustration: IllustrationBigData,
  },
  {
    number: "04",
    title: "Google Apps for Business",
    desc: "Seamless Google Workspace integration, custom automation, and cloud migration for enterprise teams.",
    highlight: "Workspace · Cloud",
    url: "/Google-Apps-for-Business",
    Illustration: IllustrationGoogleApps,
  },
  {
    number: "05",
    title: "Social Integration",
    desc: "Connect platforms, unify data streams, and build social-native experiences that grow with your audience.",
    highlight: "Multi-platform",
    url: "/Social-Integration",
    Illustration: IllustrationSocialIntegration,
  },
];

// ── Stacking offsets (deck illusion) ───────────────────────
const STACK_OFFSETS = [
  { x: 6, y: 8, rotate: -7, scale: 0.91 },
  { x: 3, y: 4, rotate: -3.5, scale: 0.94 },
  { x: 0, y: 0, rotate: 0, scale: 0.97 },
  { x: -3, y: 4, rotate: 3.5, scale: 0.94 },
  { x: -6, y: 8, rotate: 7, scale: 0.91 },
];

// ── Component ──────────────────────────────────────────────
export default function SolutionsSection() {
  const navigate = useNavigate();
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRef = useRef<SVGPathElement>(null);
  const junctionRefs = useRef<(SVGCircleElement | null)[]>([]);
  const progressDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLDivElement>(null);
  const counterNumRef = useRef<HTMLSpanElement>(null);
  const spreadComplete = useRef(false);

  // ── AI Banner refs ──────────────────────────────────
  const aiSectionRef  = useRef<HTMLDivElement>(null);
  const aiPathRef     = useRef<SVGPathElement>(null);
  const aiOverlineRef = useRef<HTMLDivElement>(null);
  const aiHeadlineRef = useRef<HTMLHeadingElement>(null);
  const aiSubRef      = useRef<HTMLParagraphElement>(null);
  const aiCtaRef      = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  // ── Mobile detection ─────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Mouse parallax tilt (desktop only) ───────────────────
  const attachTilt = useCallback(() => {
    if (isMobile) return () => {};
    const cleanups: (() => void)[] = [];
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / (rect.height / 2)) * 8;
        const ry = ((e.clientX - cx) / (rect.width / 2)) * -8;
        gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.4, ease: "power2.out", transformPerspective: 800 });
      };
      const onLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power2.out" });
        card.style.borderColor = "rgba(255,255,255,0.08)";
        card.style.background = C.cardBg;
        const accent = card.querySelector<HTMLDivElement>(".card-bottom-accent");
        if (accent) accent.style.opacity = "0";
        const illus = card.querySelector<HTMLDivElement>(".card-illus");
        if (illus) gsap.to(illus, { y: 0, duration: 0.4, ease: "power2.out" });
      };
      const onEnter = () => {
        card.style.borderColor = "rgba(200,255,0,0.25)";
        card.style.background = C.cardBgHover;
        const accent = card.querySelector<HTMLDivElement>(".card-bottom-accent");
        if (accent) accent.style.opacity = "1";
        const illus = card.querySelector<HTMLDivElement>(".card-illus");
        if (illus) gsap.to(illus, { y: -6, duration: 0.6, ease: "power2.out" });
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("mouseenter", onEnter);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("mouseenter", onEnter);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [isMobile]);

  // ── GSAP scroll animation (desktop) ─────────────────────
  useEffect(() => {
    if (isMobile || !runwayRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length !== 5) return;

      // -- Compute final positions --
      const CARD_W = 240;
      const GAP = 18;
      const TOTAL = CARD_W * 5 + GAP * 4;
      const START_X = -TOTAL / 2 + CARD_W / 2;
      const FINAL_X = SOLUTIONS.map((_, i) => START_X + i * (CARD_W + GAP));

      // -- Set initial stacked state --
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          x: STACK_OFFSETS[i].x,
          y: STACK_OFFSETS[i].y,
          rotation: STACK_OFFSETS[i].rotate,
          scale: STACK_OFFSETS[i].scale,
          zIndex: 5 - i,
        });
      });

      // Header — visible immediately
      gsap.set(headerRef.current, { autoAlpha: 1, y: 0 });
      // Counter
      gsap.set(counterRef.current, { autoAlpha: 1 });
      // Connector
      if (connectorRef.current) gsap.set(connectorRef.current, { drawSVG: "0%" });
      // Junctions
      junctionRefs.current.forEach((j) => { if (j) gsap.set(j, { scale: 0, transformOrigin: "center center" }); });
      // Progress dots
      progressDotRefs.current.forEach((d) => { if (d) gsap.set(d, { opacity: 0.2, scale: 1 }); });

      // -- Build scroll timeline --
      // Cards are centered in the sticky stage (50vh below runway top).
      // "top 50%" = runway top hits mid-viewport = cards top entering viewport bottom.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: runwayRef.current,
          start: "top 50%",       // cards enter the viewport from the bottom
          end: "bottom bottom",   // spread fully done as section scrolls off
          scrub: 2,
        },
      });

      // Phase 0 → 1.8: Cards 0 and 4 peel off (outermost) — immediately
      tl.to(cards[0], {
        keyframes: [
          { x: FINAL_X[0] * 0.5, rotation: -14, scale: 0.95, duration: 0.8, ease: "power2.in" },
          { x: FINAL_X[0], rotation: 0, scale: 1, duration: 1.0, ease: "land" },
        ],
      }, 0);
      tl.to(cards[4], {
        keyframes: [
          { x: FINAL_X[4] * 0.5, rotation: 14, scale: 0.95, duration: 0.8, ease: "power2.in" },
          { x: FINAL_X[4], rotation: 0, scale: 1, duration: 1.0, ease: "land" },
        ],
      }, 0);

      // Progress dot 0 & 4
      tl.to(progressDotRefs.current[0], { opacity: 1, scale: 1.4, background: C.accent, duration: 0.3 }, 1.0);
      tl.to(progressDotRefs.current[4], { opacity: 1, scale: 1.4, background: C.accent, duration: 0.3 }, 1.0);
      // Junction 0 & 4
      tl.to(junctionRefs.current[0], { scale: 1, duration: 0.3, ease: "back.out(2)" }, 1.6);
      tl.to(junctionRefs.current[4], { scale: 1, duration: 0.3, ease: "back.out(2)" }, 1.6);

      // Phase 0.6 → 2.4: Cards 1 and 3
      tl.to(cards[1], {
        keyframes: [
          { x: FINAL_X[1] * 0.5, rotation: -10, scale: 0.95, duration: 0.8, ease: "power2.in" },
          { x: FINAL_X[1], rotation: 0, scale: 1, duration: 1.0, ease: "land" },
        ],
      }, 0.6);
      tl.to(cards[3], {
        keyframes: [
          { x: FINAL_X[3] * 0.5, rotation: 10, scale: 0.95, duration: 0.8, ease: "power2.in" },
          { x: FINAL_X[3], rotation: 0, scale: 1, duration: 1.0, ease: "land" },
        ],
      }, 0.6);

      // Progress dot 1 & 3
      tl.to(progressDotRefs.current[1], { opacity: 1, scale: 1.4, background: C.accent, duration: 0.3 }, 1.6);
      tl.to(progressDotRefs.current[3], { opacity: 1, scale: 1.4, background: C.accent, duration: 0.3 }, 1.6);
      // Junction 1 & 3
      tl.to(junctionRefs.current[1], { scale: 1, duration: 0.3, ease: "back.out(2)" }, 2.2);
      tl.to(junctionRefs.current[3], { scale: 1, duration: 0.3, ease: "back.out(2)" }, 2.2);

      // Phase 1.2 → 2.6: Card 2 (center) settles
      tl.to(cards[2], { scale: 1, rotation: 0, duration: 1.4, ease: "land" }, 1.2);
      // Progress dot 2
      tl.to(progressDotRefs.current[2], { opacity: 1, scale: 1.4, background: C.accent, duration: 0.3 }, 2.2);
      // Junction 2
      tl.to(junctionRefs.current[2], { scale: 1, duration: 0.3, ease: "back.out(2)" }, 2.6);
      // Counter fades out
      tl.to(counterRef.current, { autoAlpha: 0, duration: 0.4 }, 2.8);

      // Phase 2.6 → 4.0: Connector line draws
      if (connectorRef.current) {
        tl.to(connectorRef.current, { drawSVG: "100%", duration: 1.4, ease: "power1.inOut" }, 2.6);
      }

      // Phase 3.6 → 4.2: Cards breathe into interactive state
      tl.to(cards, {
        scale: 1.01,
        duration: 0.3,
        stagger: 0.08,
        ease: "power2.out",
        onComplete: () => { spreadComplete.current = true; },
      }, 3.6);
      tl.to(cards, { scale: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }, 4.0);
    }, runwayRef);

    return () => ctx.revert();
  }, [isMobile]);

  // ── Attach tilt after spread ─────────────────────────────
  useEffect(() => {
    if (isMobile) return;
    const cleanup = attachTilt();
    return cleanup;
  }, [isMobile, attachTilt]);

  // ── Mobile reveal animation ──────────────────────────────
  useEffect(() => {
    if (!isMobile || !runwayRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.12,
            ease: "sol-silk",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          },
        );
      });
    }, runwayRef);

    return () => ctx.revert();
  }, [isMobile]);

  // ── AI Banner DrawSVG animation ─────────────────────────
  useEffect(() => {
    if (!aiSectionRef.current || !aiPathRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(aiPathRef.current, { drawSVG: "0% 0%" });
      gsap.set(
        [aiOverlineRef.current, aiHeadlineRef.current, aiSubRef.current, aiCtaRef.current],
        { autoAlpha: 0, y: 22 },
      );
      const tl = gsap.timeline({
        scrollTrigger: { trigger: aiSectionRef.current, start: "top 78%", once: true },
      });
      tl.to(aiPathRef.current, { drawSVG: "0% 100%", duration: 1.5, ease: "power2.inOut" }, 0);
      tl.to(
        [aiOverlineRef.current, aiHeadlineRef.current, aiSubRef.current, aiCtaRef.current],
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.14 },
        0.35,
      );
    }, aiSectionRef);
    return () => ctx.revert();
  }, []);

  // ── Connector path d ─────────────────────────────────────
  const CARD_W = 240;
  const GAP = 18;
  const TOTAL = CARD_W * 5 + GAP * 4;
  const START_X = -TOTAL / 2 + CARD_W / 2;
  const FINAL_X = SOLUTIONS.map((_, i) => START_X + i * (CARD_W + GAP));
  // SVG viewBox is centered at 0,0 — shift to positive coords (center = 720)
  const svgCX = 720;
  const svgCY = 450;
  const cardBottom = svgCY + 200; // approximate bottom of card area
  const x0 = svgCX + FINAL_X[0];
  const x4 = svgCX + FINAL_X[4];
  const connectorD = `M ${x0},${cardBottom} C ${x0},${cardBottom + 60} ${x4},${cardBottom + 60} ${x4},${cardBottom}`;
  const junctionPositions = FINAL_X.map((fx) => ({ cx: svgCX + fx, cy: cardBottom }));

  // ── Render a single card ─────────────────────────────────
  const renderCard = (sol: typeof SOLUTIONS[number], i: number) => (
    <div
      key={sol.number}
      ref={(el) => { cardRefs.current[i] = el; }}
      onClick={() => navigate(sol.url)}
      style={{
        width: isMobile ? "100%" : "clamp(220px, 18vw, 250px)",
        height: isMobile ? "auto" : "clamp(290px, 30vh, 340px)",
        minHeight: isMobile ? 300 : undefined,
        background: C.cardBg,
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 22,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: isMobile ? "relative" : undefined,
        fontFamily: SYNE,
        transition: "border-color 0.3s, background 0.3s",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top zone */}
      <div style={{ position: "relative", flex: "1 1 55%" }}>
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.14em",
            color: C.inkDimmer,
            fontFamily: SYNE,
          }}
        >
          {sol.number}
        </span>
        <div className="card-illus" style={{ display: "flex", justifyContent: "center", paddingTop: 12 }}>
          <sol.Illustration />
        </div>
      </div>

      {/* Bottom zone */}
      <div style={{ flex: "1 1 45%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <span
          style={{
            display: "inline-block",
            width: "fit-content",
            background: C.accentDim,
            border: `1px solid ${C.accentBorder}`,
            borderRadius: 100,
            padding: "4px 12px",
            fontSize: "0.62rem",
            fontWeight: 700,
            color: C.accent,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {sol.highlight}
        </span>
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 800,
            color: C.ink,
            lineHeight: 1.2,
            margin: "0 0 10px",
          }}
        >
          {sol.title}
        </h3>
        <p
          style={{
            fontSize: "0.76rem",
            color: C.inkMuted,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {sol.desc}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div
        className="card-bottom-accent"
        style={{
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          height: 2,
          background: `linear-gradient(90deg, ${C.accent} 0%, transparent 100%)`,
          borderRadius: "0 0 20px 20px",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );

  // ═════════════════════════════════════════════════════════
  // MOBILE LAYOUT
  // ═════════════════════════════════════════════════════════
  // ── Flagship AI Banner ──────────────────────────────────
  const AIBanner = (
    <div
      ref={aiSectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #070A13 0%, #0C1022 55%, #060810 100%)",
        overflow: "hidden",
        fontFamily: SYNE,
        width  : "100%",
      }}
    >
      {/* Ambient radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: isMobile ? "50%" : "36%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 500,
        background: "radial-gradient(ellipse at center, rgba(200,255,0,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* DrawSVG chamfered-corner border */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          filter: "drop-shadow(0 0 7px rgba(200,255,0,0.75))",
        }}
        viewBox="0 0 1000 260"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ai-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8FF00" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C8FF00" stopOpacity="1" />
            <stop offset="100%" stopColor="#C8FF00" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Static bloom layer */}
        <path
          d="M 30,4 L 970,4 L 996,26 L 996,234 L 970,256 L 30,256 L 4,234 L 4,26 L 30,4"
          fill="none" stroke="rgba(200,255,0,0.07)" strokeWidth="22"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Animated stroke */}
        <path
          ref={aiPathRef}
          d="M 30,4 L 970,4 L 996,26 L 996,234 L 970,256 L 30,256 L 4,234 L 4,26 L 30,4"
          fill="none" stroke="url(#ai-line-grad)" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.9"
        />
        {/* Corner accent ticks */}
        <line x1="30" y1="4" x2="100" y2="4" stroke="#C8FF00" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
        <line x1="4" y1="26" x2="4" y2="96" stroke="#C8FF00" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
        <line x1="970" y1="256" x2="900" y2="256" stroke="#C8FF00" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
        <line x1="996" y1="234" x2="996" y2="164" stroke="#C8FF00" strokeWidth="4" opacity="0.4" strokeLinecap="round" />
        {/* Corner dots */}
        <circle cx="30" cy="4" r="3.5" fill="#C8FF00" opacity="0.6" />
        <circle cx="970" cy="4" r="3.5" fill="#C8FF00" opacity="0.6" />
        <circle cx="996" cy="234" r="3.5" fill="#C8FF00" opacity="0.6" />
        <circle cx="4" cy="234" r="3.5" fill="#C8FF00" opacity="0.6" />
        {/* Subtle circuit line */}
        <path
          d="M 80,130 L 160,130 L 180,110 L 820,110 L 840,130 L 920,130"
          fill="none" stroke="rgba(200,255,0,0.06)" strokeWidth="1"
          strokeDasharray="4 8" strokeLinecap="round"
        />
      </svg>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1280,
        margin: "0 auto",
        padding: isMobile ? "56px 28px" : "68px 72px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? 36 : 48,
      }}>
        {/* Left — text */}
        <div style={{ flex: 1 }}>
          <div
            ref={aiOverlineRef}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
          >
            <span style={{
              background: C.accent,
              color: "#0A0E1A",
              fontSize: "0.55rem",
              fontWeight: 900,
              letterSpacing: "0.18em",
              padding: "4px 12px",
              borderRadius: 100,
              textTransform: "uppercase" as const,
            }}>
              NEW
            </span>
            <span style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.64rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              fontWeight: 600,
            }}>
              Flagship Capability
            </span>
            <span style={{ width: 28, height: 1, background: "rgba(200,255,0,0.28)", flexShrink: 0 }} />
          </div>

          <h2
            ref={aiHeadlineRef}
            style={{
              fontFamily: SYNE,
              fontSize: "clamp(1.9rem, 3.4vw, 3.1rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              margin: "0 0 18px",
            }}
          >
            We now build{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", color: C.accent }}>
              Custom AI
            </em>
            {" "}Models
          </h2>

          <p
            ref={aiSubRef}
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 520,
              margin: 0,
            }}
          >
            Fine-tuned LLMs, private on-premise agents, and fully custom AI pipelines —
            architected, trained, and deployed entirely within your infrastructure.
          </p>
        </div>

        {/* Right — CTA */}
        <div
          ref={aiCtaRef}
          style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "center", gap: 12 }}
        >
          <button
            onClick={() => navigate("/ai-agent")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: C.accent,
              color: "#0A0E1A",
              fontFamily: SYNE,
              fontWeight: 800,
              fontSize: "0.88rem",
              letterSpacing: "0.04em",
              padding: "16px 36px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
              whiteSpace: "nowrap" as const,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 36px rgba(200,255,0,0.45)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore AI Agent
            <span style={{ fontSize: "1rem" }}>→</span>
          </button>
          <p style={{
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            margin: 0,
            textAlign: "center",
          }}>
            Private · On-Premise · Custom
          </p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
      <section
        ref={runwayRef}
        id="optimal-solutions"
        style={{ background: C.bg, padding: "80px 16px", width: "100%" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 24, height: 1, background: C.accent }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7280", fontFamily: SYNE }}>
              What We Build
            </span>
            <span style={{ width: 24, height: 1, background: C.accent }} />
          </div>
          <h2 style={{ fontFamily: SYNE, fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 900, color: "#0A0E1A", lineHeight: 1.15, margin: 0 }}>
            Our Optimal{" "}
            <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "#0A0E1A" }}>Solutions</em>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth >= 640 ? "1fr 1fr" : "1fr",
            gap: 16,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {SOLUTIONS.map((sol, i) => renderCard(sol, i))}
        </div>
      </section>
      {AIBanner}
    </>
    );
  }

  // ═════════════════════════════════════════════════════════
  // DESKTOP LAYOUT — Sticky deck spread
  // ═════════════════════════════════════════════════════════
  return (
    <>
    <section
      ref={runwayRef}
      id="optimal-solutions"
      style={{ position: "relative", minHeight: "100vh", background: C.bg, overflow: "hidden", width: "100%" }}
    >
      <div
        ref={stageRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          overflow: "hidden",
        }}
      >
        {/* Centered wrapper — header + cards as one group.
            top:50% + translateY(-50%) = geometric center of 100dvh.
            +34px shifts it into the visual center of the area below the 68px navbar. */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(calc(-50% + 34px))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 5,
        }}>
          {/* Section header */}
          <div
            ref={headerRef}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              marginBottom: 48,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 24, height: 1, background: C.accent }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6B7280",
                  fontFamily: SYNE,
                }}
              >
                What We Build
              </span>
              <span style={{ width: 24, height: 1, background: C.accent }} />
            </div>
            <h2
              style={{
                fontFamily: SYNE,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 900,
                color: "#0A0E1A",
                lineHeight: 1.1,
                textAlign: "center",
                margin: 0,
              }}
            >
              Our Optimal{" "}
              <em style={{ fontFamily: SERIF, fontStyle: "italic", color: "#0A0E1A" }}>Solutions</em>
            </h2>
            {/* Progress dots */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              {SOLUTIONS.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => { progressDotRefs.current[i] = el; }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#0A0E1A",
                    opacity: 0.2,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Cards container — fixed height so cards position relative to this */}
          <div style={{ position: "relative", width: "100%", height: "clamp(290px, 30vh, 340px)" }}>
            {SOLUTIONS.map((sol, i) => renderCard(sol, i))}
          </div>
        </div>

        {/* Deck counter — overlay */}
        <div
          ref={counterRef}
          style={{
            position: "absolute",
            zIndex: 2,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <span
            ref={counterNumRef}
            style={{
              fontFamily: SYNE,
              fontWeight: 900,
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "#0A0E1A",
              opacity: 0.04,
              userSelect: "none",
              lineHeight: 1,
              display: "block",
            }}
          >
            05
          </span>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginTop: 8,
              fontFamily: SYNE,
            }}
          >
            solutions
          </div>
        </div>

        {/* Connector SVG — sits below cards */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 4,
          }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={connectorRef}
            d={connectorD}
            fill="none"
            stroke={C.connector}
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.6"
          />
          {junctionPositions.map((pos, i) => (
            <circle
              key={i}
              ref={(el) => { junctionRefs.current[i] = el; }}
              cx={pos.cx}
              cy={pos.cy}
              r="3"
              fill={C.connector}
              opacity="0.7"
            />
          ))}
        </svg>
      </div>
    </section>
    {AIBanner}
    </>
  );
}
