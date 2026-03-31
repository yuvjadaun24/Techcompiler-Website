import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

/* ── Design tokens ──────────────────────────────────── */
const C = {
  bg: "#FFFFFF",
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  inkDim: "rgba(10,14,26,0.08)",
  accent: "#C8FF00",
  accentBg: "rgba(200,255,0,0.09)",
  accentBorder: "rgba(200,255,0,0.4)",
};

const SECTION_PAD: React.CSSProperties = { padding: "clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)" };
const FONT = "'Syne', sans-serif";

/* ── Types ──────────────────────────────────────────── */
export interface ServiceStat { value: string; label: string }
export interface ServiceItem { name: string; subtitle: string; description: string; image: string }
export interface WhyCard { title: string; desc: string }
export interface WorkflowStep { step: string; desc: string }
export interface WhyUsCard { title: string; desc: string }

export interface ServicePageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  stats: ServiceStat[];
  heroImage?: string;
  useNav?: boolean;

  overviewTitle: string;
  overviewParagraphs: string[];
  overviewList?: { label: string; text: string }[];

  servicesHeading: string;
  servicesSubline: string;
  services: ServiceItem[];

  whyTitle: string;
  whyCards: WhyCard[];

  workflowTitle: string;
  workflowSteps: WorkflowStep[];

  techTitle: string;
  techItems: string[];

  whyUsTitle: string;
  whyUsCards: WhyUsCard[];
}

/* ── Helper: last word italic ───────────────────────── */
function TitleWithItalicLast({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words.pop()!;
  return (
    <>
      {words.join(" ")}{" "}
      <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>{last}</span>
    </>
  );
}

/* ── Heading reveal hook ────────────────────────────── */
function useHeadingReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    let split: SplitText | undefined;
    const el = ref.current;
    try {
      split = new SplitText(el, { type: "words", wordsClass: "word" });
      gsap.set(split.words, { autoAlpha: 0, y: 24 });
      gsap.to(split.words, {
        autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    } catch {
      gsap.fromTo(el, { autoAlpha: 0, y: 20 }, {
        autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }
    return () => { split?.revert(); };
  }, [ref]);
}

/* ── Reveal on scroll ───────────────────────────────── */
function revealOnScroll(el: HTMLElement | null, delay = 0) {
  if (!el) return;
  gsap.fromTo(el, { autoAlpha: 0, y: 28 }, {
    autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", delay,
    scrollTrigger: { trigger: el, start: "top 84%", once: true },
  });
}

/* ════════════════════════════════════════════════════════
   MAIN LAYOUT COMPONENT
   ════════════════════════════════════════════════════════ */
export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  /* hero refs */
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const heroLineRef = useRef<SVGPathElement>(null);
  const heroTagRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const statNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  /* image grid ref */
  const gridRef = useRef<HTMLDivElement>(null);

  /* what-is refs */
  const whatH2Ref = useRef<HTMLHeadingElement>(null);
  const whatTextRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const highlightPathRef = useRef<SVGPathElement>(null);

  /* accordion refs */
  const accordionH2Ref = useRef<HTMLHeadingElement>(null);
  const openIndex = useRef<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const vertLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const borderLineRefs = useRef<(SVGLineElement | null)[]>([]);

  /* why matters refs */
  const whyH2Ref = useRef<HTMLHeadingElement>(null);
  const whyLineRef = useRef<SVGPathElement>(null);
  const whyCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whyGridRef = useRef<HTMLDivElement>(null);

  /* workflow refs */
  const workflowH2Ref = useRef<HTMLHeadingElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const ribbonPathRef = useRef<SVGPathElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* tech stack refs */
  const techH2Ref = useRef<HTMLHeadingElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bracketTL = useRef<SVGPathElement>(null);
  const bracketTR = useRef<SVGPathElement>(null);
  const bracketBL = useRef<SVGPathElement>(null);
  const bracketBR = useRef<SVGPathElement>(null);

  /* why us refs */
  const whyUsH2Ref = useRef<HTMLHeadingElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const cardLine1Ref = useRef<HTMLDivElement>(null);
  const cardLine2Ref = useRef<HTMLDivElement>(null);

  /* heading reveals */
  useHeadingReveal(whatH2Ref);
  useHeadingReveal(accordionH2Ref);
  useHeadingReveal(whyH2Ref);
  useHeadingReveal(workflowH2Ref);
  useHeadingReveal(techH2Ref);
  useHeadingReveal(whyUsH2Ref);

  /* ── GSAP master setup ────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── HERO ── */
      // SplitText on h1
      try {
        const split = new SplitText(h1Ref.current!, { type: "words", wordsClass: "word" });
        gsap.set(split.words, { autoAlpha: 0, y: 30 });
        gsap.to(split.words, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power3.out", delay: 0.05 });
      } catch {
        gsap.fromTo(h1Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
      }

      // Hero DrawSVG line
      try {
        gsap.fromTo(heroLineRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.0, ease: "power2.inOut", delay: 0.4 });
      } catch {
        if (heroLineRef.current) gsap.set(heroLineRef.current, { opacity: 0.12 });
      }

      // Tagline + desc
      if (heroTagRef.current) gsap.fromTo(heroTagRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, delay: 0.35 });
      if (heroDescRef.current) gsap.fromTo(heroDescRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, delay: 0.45 });

      // Stat count-up
      data.stats.forEach((stat, i) => {
        const el = statNumberRefs.current[i];
        if (!el) return;
        const numeric = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
        if (isNaN(numeric)) return;
        const suffix = stat.value.replace(String(numeric), "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numeric, duration: 1.8, ease: "power2.out", delay: 0.3 + i * 0.15,
          onUpdate: () => { el.textContent = (numeric % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix; },
        });
      });

      /* ── IMAGE GRID ── */
      if (data.heroImage && gridRef.current) {
        gsap.fromTo(gridRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true } });
      }

      /* ── WHAT IS ── */
      if (whatTextRef.current) revealOnScroll(whatTextRef.current, 0.15);

      // Highlight DrawSVG
      try {
        if (highlightPathRef.current) {
          gsap.fromTo(highlightPathRef.current, { drawSVG: "0% 0%" }, {
            drawSVG: "0% 100%", duration: 0.9, ease: "power2.inOut", delay: 0.3,
            scrollTrigger: { trigger: highlightRef.current, start: "top 80%", once: true },
          });
        }
      } catch {
        if (highlightPathRef.current) gsap.set(highlightPathRef.current, { opacity: 0.7 });
      }

      /* ── WHY MATTERS ── */
      // DrawSVG wavy underline
      try {
        if (whyLineRef.current) gsap.fromTo(whyLineRef.current, { drawSVG: "0% 0%" }, {
          drawSVG: "0% 100%", duration: 0.9, ease: "power2.inOut", delay: 0.2,
          scrollTrigger: { trigger: whyH2Ref.current, start: "top 80%", once: true },
        });
      } catch {
        if (whyLineRef.current) gsap.set(whyLineRef.current, { opacity: 0.8 });
      }

      // Cards stagger
      if (whyGridRef.current) {
        gsap.fromTo(whyCardRefs.current.filter(Boolean), { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: whyGridRef.current, start: "top 80%", once: true },
        });
      }

      /* ── WORKFLOW ── */
      // Ribbon draw
      try {
        if (ribbonPathRef.current) gsap.fromTo(ribbonPathRef.current, { drawSVG: "0% 0%" }, {
          drawSVG: "0% 100%", duration: 1.6, ease: "power2.inOut", delay: 0.2,
          scrollTrigger: { trigger: workflowRef.current, start: "top 75%", once: true },
        });
      } catch {
        if (ribbonPathRef.current) gsap.set(ribbonPathRef.current, { opacity: 0.5 });
      }

      // Steps stagger
      gsap.fromTo(stepRefs.current.filter(Boolean), { autoAlpha: 0, y: 30 }, {
        autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.55, ease: "power3.out",
        scrollTrigger: { trigger: workflowRef.current, start: "top 80%", once: true },
      });

      /* ── TECH STACK ── */
      // Bracket corners draw
      const corners = [bracketTL, bracketTR, bracketBL, bracketBR].map(r => r.current).filter(Boolean);
      try {
        gsap.fromTo(corners, { drawSVG: "0% 0%" }, {
          drawSVG: "0% 100%", duration: 0.6, ease: "power2.out", stagger: 0.08,
          scrollTrigger: { trigger: techRef.current, start: "top 80%", once: true },
        });
      } catch {
        corners.forEach(c => c && gsap.set(c, { opacity: 0.5 }));
      }

      // Chips stagger
      gsap.fromTo(chipRefs.current.filter(Boolean), { autoAlpha: 0, scale: 0.88 }, {
        autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: "back.out(1.4)",
        scrollTrigger: { trigger: techRef.current, start: "top 80%", once: true },
      });

      /* ── WHY US ── */
      if (card1Ref.current) gsap.fromTo(card1Ref.current, { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: whyUsRef.current, start: "top 80%", once: true } });
      if (card2Ref.current) gsap.fromTo(card2Ref.current, { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: whyUsRef.current, start: "top 80%", once: true } });

      // Card top line draw – simple width animation
      [cardLine1Ref, cardLine2Ref].forEach(ref => {
        if (ref.current) gsap.fromTo(ref.current, { width: "0%" }, { width: "calc(100% - 56px)", duration: 0.7, ease: "power2.out", delay: 0.2, scrollTrigger: { trigger: whyUsRef.current, start: "top 80%", once: true } });
      });

    }, pageRef);

    return () => ctx.revert();
  }, [data]);

  /* ── Accordion toggle ─────────────────────────────── */
  function toggleAccordion(i: number) {
    const prev = openIndex.current;
    // close prev
    if (prev !== null && prev !== i) {
      const p = panelRefs.current[prev];
      if (p) gsap.to(p, { height: 0, duration: 0.35, ease: "power2.in" });
      const v = vertLineRefs.current[prev];
      if (v) gsap.to(v, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      const bl = borderLineRefs.current[prev];
      try { if (bl) gsap.to(bl, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (bl) gsap.set(bl, { opacity: 0 }); }
    }

    if (prev === i) {
      // close current
      const p = panelRefs.current[i];
      if (p) gsap.to(p, { height: 0, duration: 0.35, ease: "power2.in" });
      const v = vertLineRefs.current[i];
      if (v) gsap.to(v, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      const bl = borderLineRefs.current[i];
      try { if (bl) gsap.to(bl, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (bl) gsap.set(bl, { opacity: 0 }); }
      openIndex.current = null;
      return;
    }

    // open new
    const p = panelRefs.current[i];
    if (p) gsap.to(p, { height: "auto", duration: 0.45, ease: "power2.out" });
    const v = vertLineRefs.current[i];
    if (v) gsap.to(v, { scaleY: 0, duration: 0.25, ease: "power2.out" });
    const bl = borderLineRefs.current[i];
    try { if (bl) gsap.fromTo(bl, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out", delay: 0.1 }); } catch { if (bl) gsap.set(bl, { opacity: 0.4 }); }
    openIndex.current = i;
  }

  /* ── Highlight first sentence helper ──────────────── */
  const secondPara = data.overviewParagraphs[1] || "";
  const firstSentenceMatch = secondPara.match(/^[^.!?]+[.!?]/);
  const firstSentence = firstSentenceMatch ? firstSentenceMatch[0] : "";
  const restOfSecond = firstSentence ? secondPara.slice(firstSentence.length) : secondPara;

  return (
    <div ref={pageRef} style={{ fontFamily: FONT, background: C.bg, color: C.ink }}>

      {/* ════════ SECTION 1 — HERO ════════ */}
      <section style={{ ...SECTION_PAD, borderBottom: `1px solid ${C.inkDim}` }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-start">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 20, height: 1, background: C.accent }} />
                <span style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: C.accent }}>{data.eyebrow}</span>
                <div style={{ width: 20, height: 1, background: C.accent }} />
              </div>

              <h1 ref={h1Ref} style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", fontWeight: 900, color: C.ink, lineHeight: 0.92, letterSpacing: "-0.02em", fontFamily: FONT }}>
                <TitleWithItalicLast text={data.title} />
              </h1>

              {/* DrawSVG pencil line */}
              <svg viewBox="0 0 600 4" width="100%" height="4" style={{ overflow: "visible", marginTop: 16, marginBottom: 20 }}>
                <path ref={heroLineRef} d="M 0,2 L 600,2" stroke={C.ink} strokeWidth="1" fill="none" opacity="0.12" />
              </svg>

              <h3 ref={heroTagRef} style={{ fontSize: "1rem", color: C.inkMuted, lineHeight: 1.65, maxWidth: 480, margin: "0 0 20px" }}>{data.subtitle}</h3>
              <p ref={heroDescRef} style={{ fontSize: "0.88rem", color: C.inkMuted, lineHeight: 1.72, maxWidth: 520 }}>{data.description}</p>

              {/* CTA */}
              <button
                onClick={() => data.useNav ? navigate("/Contact-Us") : undefined}
                style={{ marginTop: 28, background: C.ink, color: "#fff", borderRadius: 10, padding: "14px 28px", fontWeight: 700, fontSize: "0.85rem", fontFamily: FONT, border: "none", cursor: "pointer", transition: "background 0.22s, color 0.22s" }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = C.accent; (e.target as HTMLButtonElement).style.color = C.ink; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = C.ink; (e.target as HTMLButtonElement).style.color = "#fff"; }}
              >
                Get In Touch
              </button>
            </div>

            {/* Right — Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {data.stats.map((stat, i) => (
                <div key={i} style={{ padding: "24px 0", borderBottom: i < data.stats.length - 1 ? `1px solid ${C.inkDim}` : "none" }}>
                  <span ref={el => (statNumberRefs.current[i] = el)} style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: C.ink, display: "block" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, color: C.inkMuted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 2 — FEATURED IMAGE ════════ */}
      {data.heroImage && (
        <section style={SECTION_PAD}>
          <div className="mx-auto max-w-screen-xl">
            <div ref={gridRef} style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${C.inkDim}` }}>
              <img src={data.heroImage} alt={data.title} style={{ width: "100%", display: "block", objectFit: "cover" }} />
            </div>
          </div>
        </section>
      )}

      {/* ════════ SECTION 3 — WHAT IS ════════ */}
      <section style={{ ...SECTION_PAD, borderTop: `1px solid ${C.inkDim}` }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left — heading */}
            <div>
              <h2 ref={whatH2Ref} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, lineHeight: 1.05, maxWidth: 360 }}>
                {data.overviewTitle}
              </h2>
              <div style={{ width: 48, height: 3, background: C.accent, marginTop: 16, borderRadius: 2 }} />
            </div>

            {/* Right — text */}
            <div ref={whatTextRef}>
              <p style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78 }}>
                {data.overviewParagraphs[0]}
              </p>
              {secondPara && (
                <p style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: 20 }}>
                  {firstSentence ? (
                    <>
                      <span ref={highlightRef} style={{ position: "relative", display: "inline" }}>
                        {firstSentence}
                        <svg style={{ position: "absolute", bottom: -3, left: -4, right: -4, width: "calc(100% + 8px)", height: 10, pointerEvents: "none", overflow: "visible" }} viewBox="0 0 300 10" preserveAspectRatio="none">
                          <path ref={highlightPathRef} d="M 2,7 C 50,5 100,9 150,6 C 200,3 250,8 298,6" fill="none" stroke={C.accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                        </svg>
                      </span>
                      {restOfSecond}
                    </>
                  ) : secondPara}
                </p>
              )}
              {data.overviewList && data.overviewList.length > 0 && (
                <ul style={{ marginTop: 16, paddingLeft: 20, listStyleType: "disc" }}>
                  {data.overviewList.map((item, i) => (
                    <li key={i} style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: 8 }}>
                      <strong style={{ color: C.ink }}>{item.label}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 4 — SUB-SERVICES ACCORDION ════════ */}
      <section style={SECTION_PAD}>
        <div className="mx-auto max-w-screen-xl">
          <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 ref={accordionH2Ref} style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, fontFamily: FONT, color: C.ink }}>{data.servicesHeading}</h2>
            {data.servicesSubline && <p style={{ fontSize: "0.88rem", color: C.inkMuted, marginTop: 8, maxWidth: 480 }}>{data.servicesSubline}</p>}
          </div>

          <div>
            {data.services.map((svc, i) => (
              <div key={i}>
                <div style={{ borderTop: `1px solid ${C.inkDim}` }} />
                {/* Trigger */}
                <div
                  onClick={() => toggleAccordion(i)}
                  style={{ padding: "24px 0", display: "flex", alignItems: "center", gap: 20, cursor: "pointer" }}
                  onMouseEnter={e => { const t = (e.currentTarget.querySelector(".acc-title") as HTMLElement); if (t) t.style.color = "rgba(10,14,26,0.6)"; }}
                  onMouseLeave={e => { const t = (e.currentTarget.querySelector(".acc-title") as HTMLElement); if (t) t.style.color = C.ink; }}
                >
                  <span style={{ fontSize: "0.6rem", fontWeight: 800, color: C.accent, letterSpacing: "0.18em", minWidth: 24 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="acc-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: C.ink, fontFamily: FONT, flex: 1, transition: "color 0.2s" }}>{svc.name}</span>
                  <div style={{ width: 20, height: 20, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <line x1={2} y1={10} x2={18} y2={10} stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" />
                      <line ref={el => (vertLineRefs.current[i] = el)} x1={10} y1={2} x2={10} y2={18} stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" style={{ transformOrigin: "10px 10px" }} />
                    </svg>
                  </div>
                </div>

                {/* Content panel */}
                <div ref={el => (panelRefs.current[i] = el)} style={{ height: 0, overflow: "hidden", position: "relative" }}>
                  {/* DrawSVG left border */}
                  <svg style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, height: "100%" }} viewBox="0 0 2 100" preserveAspectRatio="none">
                    <line ref={el => (borderLineRefs.current[i] = el)} x1="1" y1="0" x2="1" y2="100" stroke={C.accent} strokeWidth="1.5" />
                  </svg>

                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]" style={{ gap: 32, padding: "0 0 28px 44px" }}>
                    <img src={svc.image} alt={svc.name} className="hidden md:block" style={{ width: 200, height: 130, objectFit: "cover", borderRadius: 10, filter: "grayscale(10%)" }} />
                    <div>
                      <h3 style={{ fontSize: "0.82rem", fontWeight: 700, color: C.inkMuted, marginBottom: 6 }}>{svc.subtitle}</h3>
                      <p style={{ fontSize: "0.88rem", color: C.inkMuted, lineHeight: 1.72 }}>{svc.description}</p>
                    </div>
                  </div>
                </div>

                {i === data.services.length - 1 && <div style={{ borderTop: `1px solid ${C.inkDim}` }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SECTION 5 — WHY MATTERS ════════ */}
      <section style={SECTION_PAD}>
        <div className="mx-auto max-w-screen-xl">
          <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 ref={whyH2Ref} style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.ink, fontFamily: FONT }}>{data.whyTitle}</h2>
            <svg viewBox="0 0 500 12" width="260" height="12" style={{ display: "block", marginTop: 12, overflow: "visible" }}>
              <path ref={whyLineRef} d="M 2,8 C 80,4 180,11 280,7 C 380,3 460,9 498,7" fill="none" stroke={C.accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            </svg>
          </div>

          <div ref={whyGridRef} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: C.inkDim }} className="grid-cols-1 md:!grid-cols-2">
            {data.whyCards.map((card, i) => (
              <div key={i} ref={el => (whyCardRefs.current[i] = el)} style={{ background: C.bg, padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, background: C.accent, flexShrink: 0 }} />
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: C.ink, fontFamily: FONT }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: C.inkMuted, lineHeight: 1.72 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SECTION 6 — WORKFLOW ════════ */}
      <section style={SECTION_PAD}>
        <div className="mx-auto max-w-screen-xl">
          <h2 ref={workflowH2Ref} style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, marginBottom: "clamp(40px, 6vw, 64px)" }}>{data.workflowTitle}</h2>

          <div ref={workflowRef} style={{ position: "relative" }}>
            {/* Ribbon SVG — hidden on mobile */}
            <svg className="hidden md:block" style={{ position: "absolute", top: 28, left: 0, right: 0, width: "100%", height: 60, pointerEvents: "none", zIndex: 0, overflow: "visible" }} viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path ref={ribbonPathRef} d="M 0,30 C 120,10 240,50 360,30 C 480,10 600,50 720,30 C 840,10 960,50 1080,30 C 1140,20 1180,32 1200,30" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" opacity="0.5" />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: 0, position: "relative", zIndex: 1 }}>
              {data.workflowSteps.map((ws, i) => (
                <div key={i} ref={el => (stepRefs.current[i] = el)} style={{ padding: `0 clamp(12px, 2vw, 24px)`, textAlign: "left", borderLeft: undefined }} className="md:border-l-0 border-l-2 border-[#C8FF00] md:border-none pl-4 md:pl-0 mb-6 md:mb-0">
                  {/* Dot */}
                  <div className="hidden md:flex" style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${C.accent}`, background: "white", alignItems: "center", justifyContent: "center", fontSize: "0.58rem", fontWeight: 800, color: C.accent, marginBottom: 16 }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "0.58rem", fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 8 }}>Step {i + 1}</p>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: C.ink, fontFamily: FONT, marginBottom: 8, lineHeight: 1.2 }}>{ws.step}</h3>
                  <p style={{ fontSize: "0.78rem", color: C.inkMuted, lineHeight: 1.65 }}>{ws.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECTION 7 — TECH STACK ════════ */}
      {data.techItems.length > 0 && (
        <section style={SECTION_PAD}>
          <div className="mx-auto max-w-screen-xl">
            <h2 ref={techH2Ref} style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, marginBottom: 32 }}>{data.techTitle}</h2>

            <div ref={techRef} style={{ position: "relative" }}>
              {/* Bracket SVG */}
              <svg style={{ position: "absolute", inset: -12, width: "calc(100% + 24px)", height: "calc(100% + 24px)", pointerEvents: "none" }} viewBox="0 0 600 120" preserveAspectRatio="none" overflow="visible">
                <path ref={bracketTL} d="M 20,4 L 4,4 L 4,20" fill="none" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
                <path ref={bracketTR} d="M 580,4 L 596,4 L 596,20" fill="none" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
                <path ref={bracketBL} d="M 4,100 L 4,116 L 20,116" fill="none" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
                <path ref={bracketBR} d="M 596,100 L 596,116 L 580,116" fill="none" stroke={C.accent} strokeWidth="1.2" strokeLinecap="round" />
              </svg>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 12px" }}>
                {data.techItems.map((tech, i) => (
                  <div
                    key={i}
                    ref={el => (chipRefs.current[i] = el)}
                    style={{ background: "white", border: `1px solid rgba(10,14,26,0.1)`, borderRadius: 100, padding: "8px 18px", fontSize: "0.75rem", fontWeight: 600, color: C.ink, fontFamily: FONT, cursor: "default", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.target as HTMLDivElement).style.borderColor = C.accent; (e.target as HTMLDivElement).style.background = C.accentBg; }}
                    onMouseLeave={e => { (e.target as HTMLDivElement).style.borderColor = "rgba(10,14,26,0.1)"; (e.target as HTMLDivElement).style.background = "white"; }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════ SECTION 8 — WHY US ════════ */}
      <section style={SECTION_PAD}>
        <div className="mx-auto max-w-screen-xl">
          <h2 ref={whyUsH2Ref} style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, marginBottom: "clamp(40px, 6vw, 64px)" }}>{data.whyUsTitle}</h2>

          <div ref={whyUsRef} className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
            {data.whyUsCards.map((card, i) => {
              const ref = i === 0 ? card1Ref : card2Ref;
              const lineRef = i === 0 ? cardLine1Ref : cardLine2Ref;
              return (
                <div key={i} ref={ref} style={{ background: C.ink, borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}>
                  {/* Accent top line */}
                  <div ref={lineRef} style={{ position: "absolute", top: 0, left: 28, height: 1.5, background: C.accent, opacity: 0.5, width: 0 }} />
                  {/* Watermark */}
                  <div style={{ position: "absolute", bottom: -12, right: 16, fontSize: "7rem", fontWeight: 900, color: "rgba(255,255,255,0.035)", fontFamily: FONT, userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFFFFF", fontFamily: FONT, marginBottom: 14 }}>{card.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.72 }}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
