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
};

const SECTION_PAD: React.CSSProperties = { padding: "clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)" };
const FONT = "'Syne', sans-serif";

/* ── Types ──────────────────────────────────────────── */
export interface TechStat { value: string; label: string }
export interface TechService { name: string; subtitle: string; description: string; image: string }
export interface TechSection { title: string; paragraphs: string[] }
export interface TechFeature { label: string; text: string }

export interface TechPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  stats: TechStat[];
  heroImage: string;

  /** First entry is the "What Is" section (2-col). Rest are additional body sections. */
  overviewSections: TechSection[];

  /** Optional bullet-point features list */
  featuresTitle?: string;
  featuresIntro?: string;
  features?: TechFeature[];
  featuresSuffix?: string;

  servicesHeading: string;
  services: TechService[];
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
export default function TechPageLayout({ data }: { data: TechPageData }) {
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

  /* additional overview section refs (sections[1+]) */
  const addSecRefs = useRef<(HTMLDivElement | null)[]>([]);
  const addSecH2Refs = useRef<(HTMLHeadingElement | null)[]>([]);

  /* features refs */
  const featH2Ref = useRef<HTMLHeadingElement>(null);
  const featListRef = useRef<HTMLUListElement>(null);

  /* accordion refs */
  const accordionH2Ref = useRef<HTMLHeadingElement>(null);
  const openIndex = useRef<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const vertLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const borderLineRefs = useRef<(SVGLineElement | null)[]>([]);

  /* heading reveals */
  useHeadingReveal(whatH2Ref);
  useHeadingReveal(featH2Ref);
  useHeadingReveal(accordionH2Ref);

  /* ── GSAP master setup ────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── HERO ── */
      try {
        const split = new SplitText(h1Ref.current!, { type: "words", wordsClass: "word" });
        gsap.set(split.words, { autoAlpha: 0, y: 30 });
        gsap.to(split.words, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power3.out", delay: 0.05 });
      } catch {
        gsap.fromTo(h1Ref.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
      }

      try {
        gsap.fromTo(heroLineRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.0, ease: "power2.inOut", delay: 0.4 });
      } catch {
        if (heroLineRef.current) gsap.set(heroLineRef.current, { opacity: 0.12 });
      }

      if (heroTagRef.current) gsap.fromTo(heroTagRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, delay: 0.35 });
      if (heroDescRef.current) gsap.fromTo(heroDescRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, delay: 0.45 });

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

      /* ── FEATURED IMAGE ── */
      if (gridRef.current) {
        gsap.fromTo(gridRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true } });
      }

      /* ── WHAT IS (section 0) ── */
      if (whatTextRef.current) revealOnScroll(whatTextRef.current, 0.15);

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

      /* ── ADDITIONAL OVERVIEW SECTIONS (1+) ── */
      addSecRefs.current.forEach(el => { if (el) revealOnScroll(el); });

      addSecH2Refs.current.forEach(el => {
        if (!el) return;
        let split: SplitText | undefined;
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
      });

      /* ── FEATURES ── */
      if (featListRef.current) revealOnScroll(featListRef.current, 0.15);

    }, pageRef);

    return () => ctx.revert();
  }, [data]);

  /* ── Accordion toggle ─────────────────────────────── */
  function toggleAccordion(i: number) {
    const prev = openIndex.current;
    if (prev !== null && prev !== i) {
      const p = panelRefs.current[prev];
      if (p) gsap.to(p, { height: 0, duration: 0.35, ease: "power2.in" });
      const v = vertLineRefs.current[prev];
      if (v) gsap.to(v, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      const bl = borderLineRefs.current[prev];
      try { if (bl) gsap.to(bl, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (bl) gsap.set(bl, { opacity: 0 }); }
    }

    if (prev === i) {
      const p = panelRefs.current[i];
      if (p) gsap.to(p, { height: 0, duration: 0.35, ease: "power2.in" });
      const v = vertLineRefs.current[i];
      if (v) gsap.to(v, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      const bl = borderLineRefs.current[i];
      try { if (bl) gsap.to(bl, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (bl) gsap.set(bl, { opacity: 0 }); }
      openIndex.current = null;
      return;
    }

    const p = panelRefs.current[i];
    if (p) gsap.to(p, { height: "auto", duration: 0.45, ease: "power2.out" });
    const v = vertLineRefs.current[i];
    if (v) gsap.to(v, { scaleY: 0, duration: 0.25, ease: "power2.out" });
    const bl = borderLineRefs.current[i];
    try { if (bl) gsap.fromTo(bl, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out", delay: 0.1 }); } catch { if (bl) gsap.set(bl, { opacity: 0.4 }); }
    openIndex.current = i;
  }

  /* ── What Is helpers ──────────────────────────────── */
  const whatIsSection = data.overviewSections[0];
  const additionalSections = data.overviewSections.slice(1);
  const secondPara = whatIsSection?.paragraphs[1] || "";
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

              {/* DrawSVG underline */}
              <svg viewBox="0 0 600 4" width="100%" height="4" style={{ overflow: "visible", marginTop: 16, marginBottom: 20 }}>
                <path ref={heroLineRef} d="M 0,2 L 600,2" stroke={C.ink} strokeWidth="1" fill="none" opacity="0.12" />
              </svg>

              <h3 ref={heroTagRef} style={{ fontSize: "1rem", color: C.inkMuted, lineHeight: 1.65, maxWidth: 480, margin: "0 0 20px" }}>
                {data.subtitle}
              </h3>
              <p ref={heroDescRef} style={{ fontSize: "0.88rem", color: C.inkMuted, lineHeight: 1.72, maxWidth: 520 }}>
                {data.description}
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate("/Contact-Us")}
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
                  <span
                    ref={el => (statNumberRefs.current[i] = el)}
                    style={{ fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: C.ink, display: "block" }}
                  >
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
      {whatIsSection && (
        <section style={{ ...SECTION_PAD, borderTop: `1px solid ${C.inkDim}` }}>
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Left — heading */}
              <div>
                <h2 ref={whatH2Ref} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, lineHeight: 1.05, maxWidth: 360 }}>
                  {whatIsSection.title}
                </h2>
                <div style={{ width: 48, height: 3, background: C.accent, marginTop: 16, borderRadius: 2 }} />
              </div>

              {/* Right — paragraphs */}
              <div ref={whatTextRef}>
                {whatIsSection.paragraphs.map((para, pi) => {
                  if (pi === 0) {
                    return (
                      <p key={pi} style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78 }}>
                        {para}
                      </p>
                    );
                  }
                  if (pi === 1 && firstSentence) {
                    return (
                      <p key={pi} style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: 20 }}>
                        <span ref={highlightRef} style={{ position: "relative", display: "inline" }}>
                          {firstSentence}
                          <svg style={{ position: "absolute", bottom: -3, left: -4, right: -4, width: "calc(100% + 8px)", height: 10, pointerEvents: "none", overflow: "visible" }} viewBox="0 0 300 10" preserveAspectRatio="none">
                            <path ref={highlightPathRef} d="M 2,7 C 50,5 100,9 150,6 C 200,3 250,8 298,6" fill="none" stroke={C.accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                          </svg>
                        </span>
                        {restOfSecond}
                      </p>
                    );
                  }
                  return (
                    <p key={pi} style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: 20 }}>
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════ SECTION 4 — ADDITIONAL OVERVIEW SECTIONS ════════ */}
      {additionalSections.length > 0 && (
        <section style={{ ...SECTION_PAD, borderTop: `1px solid ${C.inkDim}` }}>
          <div className="mx-auto max-w-screen-xl">
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 7vw, 80px)" }}>
              {additionalSections.map((sec, si) => (
                <div key={si}>
                  <h2
                    ref={el => (addSecH2Refs.current[si] = el)}
                    style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, lineHeight: 1.1, marginBottom: 20, maxWidth: 680 }}
                  >
                    {sec.title}
                  </h2>
                  <div ref={el => (addSecRefs.current[si] = el)}>
                    {sec.paragraphs.map((para, pi) => (
                      <p key={pi} style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: pi > 0 ? 16 : 0 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════ SECTION 5 — FEATURES (optional) ════════ */}
      {data.features && data.features.length > 0 && (
        <section style={{ ...SECTION_PAD, borderTop: `1px solid ${C.inkDim}`, background: "rgba(10,14,26,0.02)" }}>
          <div className="mx-auto max-w-screen-xl">
            {data.featuresTitle && (
              <h2 ref={featH2Ref} style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.ink, fontFamily: FONT, marginBottom: 8 }}>
                {data.featuresTitle}
              </h2>
            )}
            {data.featuresIntro && (
              <p style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginBottom: 24, maxWidth: 680 }}>
                {data.featuresIntro}
              </p>
            )}
            <ul ref={featListRef} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {data.features.map((f, fi) => (
                <li key={fi} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, background: C.accent, flexShrink: 0, marginTop: 7, borderRadius: 1 }} />
                  <p style={{ fontSize: "0.88rem", color: C.inkMuted, lineHeight: 1.72, margin: 0 }}>
                    <strong style={{ color: C.ink }}>{f.label}:</strong> {f.text}
                  </p>
                </li>
              ))}
            </ul>
            {data.featuresSuffix && (
              <p style={{ fontSize: "0.9rem", color: C.inkMuted, lineHeight: 1.78, marginTop: 24, maxWidth: 680 }}>
                {data.featuresSuffix}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ════════ SECTION 6 — SERVICES ACCORDION ════════ */}
      <section style={{ ...SECTION_PAD, borderTop: `1px solid ${C.inkDim}` }}>
        <div className="mx-auto max-w-screen-xl">
          {data.servicesHeading && (
            <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
              <h2 ref={accordionH2Ref} style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, fontFamily: FONT, color: C.ink }}>
                {data.servicesHeading}
              </h2>
            </div>
          )}

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
                  <span className="acc-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: C.ink, fontFamily: FONT, flex: 1, transition: "color 0.2s" }}>
                    {svc.name}
                  </span>
                  <div style={{ width: 20, height: 20, flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <line x1={2} y1={10} x2={18} y2={10} stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" />
                      <line
                        ref={el => (vertLineRefs.current[i] = el)}
                        x1={10} y1={2} x2={10} y2={18}
                        stroke={C.ink} strokeWidth={1.6} strokeLinecap="round"
                        style={{ transformOrigin: "10px 10px" }}
                      />
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
                    <img
                      src={svc.image}
                      alt={svc.name}
                      className="hidden md:block"
                      style={{ width: 200, height: 130, objectFit: "cover", borderRadius: 10, filter: "grayscale(10%)" }}
                    />
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

    </div>
  );
}
