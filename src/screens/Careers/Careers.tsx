import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  dark: "#0A0E1A",
  white: "#FFFFFF",
  accent: "#C8FF00",
  inkMuted: "rgba(255,255,255,0.45)",
  inkDim: "rgba(255,255,255,0.35)",
  grayText: "#6B7280",
  offWhite: "#F7F7F5",
};

const VALUES = [
  { icon: "◆", title: "Build to Last", desc: "We write code that stands the test of time. Quality over speed, always." },
  { icon: "○", title: "Grow Together", desc: "Every team member's growth is our growth. Learning is built into how we work." },
  { icon: "□", title: "Own Your Work", desc: "Autonomy and accountability go hand in hand here. We trust our people." },
  { icon: "△", title: "Think Global", desc: "With offices across three continents, your work reaches the world." },
];

function revealUp(el: Element | null, delay = 0) {
  if (!el) return;
  gsap.fromTo(el,
    { autoAlpha: 0, y: 32 },
    { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", delay,
      scrollTrigger: { trigger: el, start: "top 84%", once: true } }
  );
}

const CareersPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pencilRef = useRef<SVGLineElement>(null);
  const valHeadRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaH2Ref = useRef<HTMLHeadingElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const bracketRefs = useRef<(SVGPathElement | null)[]>([]);
  const blCornerRef = useRef(null);
  const brCornerRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      // Hero h1
      if (h1Ref.current) {
        try {
          const s = new SplitText(h1Ref.current, { type: "words" });
          splits.push(s);
          gsap.set(s.words, { autoAlpha: 0, y: 24 });
          gsap.to(s.words, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", delay: 0.1 });
        } catch {
          gsap.fromTo(h1Ref.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 });
        }
      }
      if (subRef.current) gsap.fromTo(subRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.4 });
      if (pencilRef.current) {
        gsap.fromTo(pencilRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.9, ease: "power2.inOut", delay: 0.5 });
      }
      // Corner marks
      gsap.fromTo(
        [blCornerRef.current, brCornerRef.current],
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out", delay: 0.85, stagger: 0.06 }
      );

      // Values heading
      if (valHeadRef.current) {
        try {
          const s = new SplitText(valHeadRef.current, { type: "words" });
          splits.push(s);
          gsap.set(s.words, { autoAlpha: 0, y: 24 });
          gsap.to(s.words, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
            scrollTrigger: { trigger: valHeadRef.current, start: "top 82%", once: true } });
        } catch {
          gsap.fromTo(valHeadRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6,
            scrollTrigger: { trigger: valHeadRef.current, start: "top 82%", once: true } });
        }
      }

      // Value cards
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length) {
        gsap.fromTo(cards, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: cards[0]!, start: "top 85%", once: true } });
      }

      // CTA container
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 84%", once: true } });
      }
      // CTA h2
      if (ctaH2Ref.current) {
        try {
          const s = new SplitText(ctaH2Ref.current, { type: "words" });
          splits.push(s);
          gsap.set(s.words, { autoAlpha: 0, y: 24 });
          gsap.to(s.words, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
            scrollTrigger: { trigger: ctaH2Ref.current, start: "top 82%", once: true } });
        } catch {}
      }
      revealUp(ctaBtnRef.current, 0.3);

      // Bracket corners
      if (!isMobile) {
        bracketRefs.current.filter(Boolean).forEach(p => {
          gsap.fromTo(p!, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.7, ease: "power2.inOut",
            scrollTrigger: { trigger: ctaRef.current, start: "top 80%", once: true } });
        });
      }
    }, pageRef);
    return () => { splits.forEach(s => { try { s.revert(); } catch {} }); ctx.revert(); };
  }, []);

  const bracketSize = 28;
  const bracketCorners = !isMobile ? (
    <>
      {/* TL */}
      <svg style={{ position: "absolute", top: -1, left: -1, width: bracketSize, height: bracketSize }} viewBox="0 0 28 28" fill="none">
        <path ref={el => { bracketRefs.current[0] = el; }} d="M0 28 L0 0 L28 0" stroke={C.accent} strokeWidth="2" />
      </svg>
      {/* TR */}
      <svg style={{ position: "absolute", top: -1, right: -1, width: bracketSize, height: bracketSize }} viewBox="0 0 28 28" fill="none">
        <path ref={el => { bracketRefs.current[1] = el; }} d="M0 0 L28 0 L28 28" stroke={C.accent} strokeWidth="2" />
      </svg>
      {/* BL */}
      <svg style={{ position: "absolute", bottom: -1, left: -1, width: bracketSize, height: bracketSize }} viewBox="0 0 28 28" fill="none">
        <path ref={el => { bracketRefs.current[2] = el; }} d="M0 0 L0 28 L28 28" stroke={C.accent} strokeWidth="2" />
      </svg>
      {/* BR */}
      <svg style={{ position: "absolute", bottom: -1, right: -1, width: bracketSize, height: bracketSize }} viewBox="0 0 28 28" fill="none">
        <path ref={el => { bracketRefs.current[3] = el; }} d="M28 0 L28 28 L0 28" stroke={C.accent} strokeWidth="2" />
      </svg>
    </>
  ) : null;

  return (
    <div ref={pageRef}>
      {/* ── SECTION 1 — Hero ── */}
      <section style={{
        background: C.white,
        padding: "clamp(100px, 14vw, 160px) clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)",
        position: "relative",
      }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 20, height: 1, background: C.accent }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(10,14,26,0.45)", fontFamily: "'Syne', sans-serif" }}>Careers</span>
          <div style={{ width: 20, height: 1, background: C.accent }} />
        </div>

        <h1 ref={h1Ref} style={{
          fontSize: "clamp(2.2rem, 5.5vw, 4rem)", fontWeight: 900, color: C.dark, lineHeight: 0.88,
          letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", maxWidth: 700, margin: 0,
        }}>
          Join Our{" "}
          <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.accent }}>Team</em>
        </h1>

        {/* Pencil line */}
        <svg viewBox="0 0 320 3" width="320" height="3" style={{ marginTop: 16, overflow: "visible" }}>
          <line ref={pencilRef} x1="0" y1="1.5" x2="320" y2="1.5" stroke="rgba(10,14,26,0.15)" strokeWidth="1.5" />
        </svg>

        <p ref={subRef} style={{
          fontSize: "1rem", color: "rgba(10,14,26,0.55)", maxWidth: 480, lineHeight: 1.65,
          marginTop: 24, fontFamily: "'Syne', sans-serif", visibility: "hidden",
        }}>
          We're always looking for passionate and talented individuals to join our journey in building the future of technology.
        </p>

        {/* Gradient fade */}
        <svg ref={blCornerRef} style={{ position: "absolute", bottom: 20, left: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 32,4 L 4,4 L 4,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg ref={brCornerRef} style={{ position: "absolute", bottom: 20, right: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 0,4 L 28,4 L 28,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", bottom: 0, left: "clamp(24px,5vw,72px)", right: "clamp(24px,5vw,72px)", height: "1px", background: "rgba(200,255,0,0.3)" }} />
      </section>

      {/* ── SECTION 2 — Culture Values ── */}
      <section style={{ background: C.white, padding: "clamp(64px, 8vw, 100px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 ref={valHeadRef} style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: C.dark,
            fontFamily: "'Syne', sans-serif", marginBottom: 40, lineHeight: 1.1,
          }}>
            What makes us{" "}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>different</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="careers-values-grid">
            {VALUES.map((v, i) => (
              <div key={i} ref={el => { cardRefs.current[i] = el; }} style={{
                background: C.offWhite, borderRadius: 16, padding: "28px 24px",
                border: "1px solid rgba(10,14,26,0.07)", visibility: "hidden",
              }}>
                <span style={{ fontSize: 24, color: C.accent, display: "block" }}>{v.icon}</span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: C.dark, fontFamily: "'Syne', sans-serif", margin: "16px 0 8px" }}>{v.title}</h3>
                <p style={{ fontSize: "0.8rem", color: C.grayText, lineHeight: 1.65, fontFamily: "'Syne', sans-serif" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Got What It Takes? ── */}
      <section style={{ padding: `0 ${isMobile ? "0" : "clamp(24px, 4vw, 64px)"}`, background: C.white }}>
        <div ref={ctaRef} style={{
          background: C.dark, borderRadius: isMobile ? 0 : 24,
          padding: "clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)",
          maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative",
          visibility: "hidden",
        }}>
          {bracketCorners}

          <h2 ref={ctaH2Ref} style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 900, color: C.white,
            fontFamily: "'Syne', sans-serif", lineHeight: 0.92, margin: "0 auto",
          }}>
            Got what it{" "}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.accent }}>takes?</em>
          </h2>

          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "20px auto", maxWidth: 680, fontFamily: "'Syne', sans-serif" }}>
            While we may not have specific openings listed right now, we are always on the lookout for exceptional talent. If you believe you'd be a great fit for our team, we'd love to hear from you.
          </p>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.4)", marginBottom: 28, fontFamily: "'Syne', sans-serif" }}>
            Send us your resume and a cover letter to:
          </p>

          <a ref={ctaBtnRef} href="mailto:hr@techcompiler.com" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: C.accent, color: C.dark, borderRadius: 100, padding: "16px 40px",
            fontWeight: 800, fontSize: "0.9rem", fontFamily: "'Syne', sans-serif",
            textDecoration: "none", transition: "background 0.22s, color 0.22s", visibility: "hidden",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.white; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.accent; }}
          >
            <Mail size={18} />
            hr@techcompiler.com
          </a>
        </div>
      </section>

      {/* Spacer below CTA */}
      <div style={{ height: "clamp(48px, 6vw, 80px)", background: C.white }} />

      <style>{`
        @media (max-width: 768px) {
          .careers-values-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .careers-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CareersPage;