import PageMeta from "@/seo/PageMeta";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { useNavigate } from "react-router-dom";

import client1 from "@/assets/ClientLogos/client1.png";
import client2 from "@/assets/ClientLogos/client2.png";
import client3 from "@/assets/ClientLogos/client3.png";
import client4 from "@/assets/ClientLogos/client4.png";
import client5 from "@/assets/ClientLogos/client5.png";
import client6 from "@/assets/ClientLogos/client6.png";
import client7 from "@/assets/ClientLogos/client7.png";
import client8 from "@/assets/ClientLogos/client8.png";
import client9 from "@/assets/ClientLogos/client9.png";
import client10 from "@/assets/ClientLogos/client10.png";
import client11 from "@/assets/ClientLogos/client11.png";
import client12 from "@/assets/ClientLogos/client12.png";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  dark: "#0A0E1A",
  white: "#FFFFFF",
  accent: "#C8FF00",
  inkMuted: "rgba(255,255,255,0.45)",
  inkDim: "rgba(255,255,255,0.35)",
  grayText: "#6B7280",
  border: "rgba(10,14,26,0.08)",
};

const row1Logos = [
  { src: client1, alt: "Yepme" },
  { src: client2, alt: "Onix Networking" },
  { src: client3, alt: "Perfect Wedding Guide" },
  { src: client4, alt: "Imaginative Minds" },
  { src: client5, alt: "Sparkloft" },
  { src: client6, alt: "HT Media" },
];
const row2Logos = [
  { src: client7, alt: "ABS-CBN" },
  { src: client8, alt: "Guavus" },
  { src: client9, alt: "Shoppers Drug Mart" },
  { src: client10, alt: "IBM" },
  { src: client11, alt: "JLL" },
  { src: client12, alt: "Whirlpool Corporation" },
];

const STATS_HERO = [
  { value: 12, suffix: "+", label: "Industries" },
  { value: 80, suffix: "+", label: "Projects Delivered" }, //THis is a test comment
  { value: 100, suffix: "%", label: "Delivery Rate" },
];

const STATS_CARD = [
  { value: 80, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years in Business" },
];

function revealUp(el: Element | null, delay = 0) {
  if (!el) return;
  gsap.fromTo(el,
    { autoAlpha: 0, y: 32 },
    { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", delay,
      scrollTrigger: { trigger: el, start: "top 84%", once: true } }
  );
}

const Clients = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<SVGLineElement>(null);
  const dividerRef = useRef<SVGLineElement>(null);
  const blCornerRef = useRef(null);
  const brCornerRef = useRef(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statNumRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardStatRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      // Hero h1 SplitText
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
      // Subtext
      if (subRef.current) gsap.fromTo(subRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.4 });
      // Stats
      if (statsRef.current) {
        const items = statsRef.current.children;
        gsap.fromTo(items, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.55, ease: "power3.out" });
      }
      // Hero stats count up
      STATS_HERO.forEach((s, i) => {
        const el = statNumRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, { val: s.value, duration: 1.6, ease: "power2.out", delay: 0.6 + i * 0.1,
          onUpdate: () => { el.textContent = Math.round(obj.val) + s.suffix; }
        });
      });
      // Hero line
      if (heroLineRef.current) {
        gsap.fromTo(heroLineRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.0, ease: "power2.inOut", delay: 0.3 });
      }
      // Corner marks
      gsap.fromTo(
        [blCornerRef.current, brCornerRef.current],
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out", delay: 0.85, stagger: 0.06 }
      );
      // Marquee divider
      if (dividerRef.current) {
        gsap.fromTo(dividerRef.current, { drawSVG: "0% 0%" },
          { drawSVG: "0% 100%", duration: 1.0, ease: "power2.inOut",
            scrollTrigger: { trigger: dividerRef.current, start: "top 85%", once: true } });
      }
      // CTA section
      revealUp(leftRef.current, 0);
      if (rightRef.current) {
        gsap.fromTo(rightRef.current, { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 84%", once: true } });
      }
      // Card stats count
      STATS_CARD.forEach((s, i) => {
        const el = cardStatRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, { val: s.value, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.val) + s.suffix; }
        });
      });
    }, pageRef);
    return () => { splits.forEach(s => { try { s.revert(); } catch {} }); ctx.revert(); };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div ref={pageRef}>
      <PageMeta />
      {/* ── SECTION 1 — Hero ── */}
      <section style={{
        background: C.white,
        padding: "clamp(100px, 14vw, 160px) clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)",
        textAlign: "center",
        position: "relative",
      }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 20, height: 1, background: C.accent }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(10,14,26,0.45)", fontFamily: "'Syne', sans-serif" }}>Our Clients</span>
          <div style={{ width: 20, height: 1, background: C.accent }} />
        </div>

        <h1 ref={h1Ref} style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: C.dark, lineHeight: 0.91,
          letterSpacing: "-0.03em", fontFamily: "'Syne', sans-serif", margin: "0 auto",
        }}>
          Trusted by Leading{" "}
          <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.accent }}>Brands</em>
        </h1>

        <p ref={subRef} style={{
          fontSize: "1rem", color: "rgba(10,14,26,0.55)", maxWidth: 480, margin: "20px auto 0",
          textAlign: "center", lineHeight: 1.65, fontFamily: "'Syne', sans-serif", visibility: "hidden",
        }}>
          From Fortune 500 enterprises to high-growth startups — we deliver results that matter.
        </p>

        {/* Stats */}
        <div ref={statsRef} style={{ display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 72px)", marginTop: 40, flexWrap: "wrap" }}>
          {STATS_HERO.map((s, i) => (
            <div key={i} style={{ textAlign: "center", visibility: "hidden" }}>
              <span ref={el => { statNumRefs.current[i] = el; }} style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.accent, fontFamily: "'Syne', sans-serif",
              }}>0{s.suffix}</span>
              <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "rgba(10,14,26,0.4)", textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginTop: 6, fontFamily: "'Syne', sans-serif" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Hero line */}
        <svg viewBox="0 0 1200 2" width="100%" height="2" style={{ marginTop: 48, overflow: "visible" }} preserveAspectRatio="none">
          <line ref={heroLineRef} x1="0" y1="1" x2="1200" y2="1" stroke="rgba(10,14,26,0.1)" strokeWidth="1" />
        </svg>

        {/* Gradient fade */}
        <svg ref={blCornerRef} style={{ position: "absolute", bottom: 20, left: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 32,4 L 4,4 L 4,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg ref={brCornerRef} style={{ position: "absolute", bottom: 20, right: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 0,4 L 28,4 L 28,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", bottom: 0, left: "clamp(24px,5vw,72px)", right: "clamp(24px,5vw,72px)", height: "1px", background: "rgba(200,255,0,0.3)" }} />
      </section>

      {/* ── SECTION 2 — Logo Marquees ── */}
      <section style={{ background: C.white, padding: "clamp(48px, 6vw, 80px) 0", overflow: "hidden" }}>
        {/* Divider */}
        <div style={{ maxWidth: 1200, margin: "0 auto 32px", padding: "0 clamp(24px, 6vw, 80px)" }}>
          <svg viewBox="0 0 1200 2" width="100%" height="2" preserveAspectRatio="none">
            <line ref={dividerRef} x1="0" y1="1" x2="1200" y2="1" stroke={C.border} strokeWidth="1" />
          </svg>
        </div>

        {/* Row 1 — scrolls LEFT */}
        <div style={{ overflow: "hidden" }} onMouseEnter={e => { const d = e.currentTarget.querySelector(".mq") as HTMLElement; if (d) d.style.animationPlayState = "paused"; }} onMouseLeave={e => { const d = e.currentTarget.querySelector(".mq") as HTMLElement; if (d) d.style.animationPlayState = "running"; }}>
          <div className="mq" style={{ display: "flex", animation: `marqueeLeft ${isMobile ? "34s" : "28s"} linear infinite`, width: "max-content" }}>
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <div key={i} style={{ width: "clamp(140px, 16vw, 200px)", height: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", flexShrink: 0 }}>
                <img src={logo.src} alt={logo.alt}
                  style={{ maxWidth: "100%", maxHeight: 44, objectFit: "contain", filter: isMobile ? "none" : "grayscale(100%) opacity(0.55)", transition: "filter 0.3s" }}
                  onMouseEnter={e => { if (!isMobile) (e.target as HTMLImageElement).style.filter = "grayscale(0%) opacity(1)"; }}
                  onMouseLeave={e => { if (!isMobile) (e.target as HTMLImageElement).style.filter = "grayscale(100%) opacity(0.55)"; }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 20 }} />

        {/* Row 2 — scrolls RIGHT */}
        <div style={{ overflow: "hidden" }} onMouseEnter={e => { const d = e.currentTarget.querySelector(".mq") as HTMLElement; if (d) d.style.animationPlayState = "paused"; }} onMouseLeave={e => { const d = e.currentTarget.querySelector(".mq") as HTMLElement; if (d) d.style.animationPlayState = "running"; }}>
          <div className="mq" style={{ display: "flex", animation: `marqueeRight ${isMobile ? "43s" : "36s"} linear infinite`, width: "max-content" }}>
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <div key={i} style={{ width: "clamp(140px, 16vw, 200px)", height: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", flexShrink: 0 }}>
                <img src={logo.src} alt={logo.alt}
                  style={{ maxWidth: "100%", maxHeight: 44, objectFit: "contain", filter: isMobile ? "none" : "grayscale(100%) opacity(0.55)", transition: "filter 0.3s" }}
                  onMouseEnter={e => { if (!isMobile) (e.target as HTMLImageElement).style.filter = "grayscale(0%) opacity(1)"; }}
                  onMouseLeave={e => { if (!isMobile) (e.target as HTMLImageElement).style.filter = "grayscale(100%) opacity(0.55)"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — Become Our Client Today ── */}
      <section style={{ background: C.white, padding: "clamp(64px, 8vw, 100px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center", maxWidth: 1200, margin: "0 auto" }}
          className="clients-cta-grid"
        >
          {/* Left */}
          <div ref={leftRef} style={{ visibility: "hidden" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: C.dark, fontFamily: "'Syne', sans-serif", lineHeight: 1.0, margin: 0 }}>
              Become Our Client{" "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Today</em>
            </h2>
            <p style={{ fontSize: "0.9rem", color: C.grayText, lineHeight: 1.75, margin: "20px 0", fontFamily: "'Syne', sans-serif" }}>
              Join our growing family of satisfied clients who trust us to deliver exceptional digital experiences. We combine innovative design with cutting-edge technology to elevate your brand.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", margin: "20px 0 28px" }}>
              {["Custom solutions", "Proven results", "Dedicated support", "Flexible engagement"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem", color: C.dark, fontFamily: "'Syne', sans-serif" }}>
                  <div style={{ width: 6, height: 6, background: C.accent, flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/Contact-Us")}
              style={{ background: C.dark, color: C.white, borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: "0.85rem", border: "none", cursor: "pointer", fontFamily: "'Syne', sans-serif", transition: "background 0.22s, color 0.22s" }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = C.accent; (e.target as HTMLButtonElement).style.color = C.dark; }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = C.dark; (e.target as HTMLButtonElement).style.color = C.white; }}
            >
              Get In Touch
            </button>
          </div>

          {/* Right — Dark stats card */}
          <div ref={rightRef} style={{
            background: C.dark, borderRadius: 24, padding: "44px 40px", position: "relative", overflow: "hidden", visibility: "hidden",
          }}>
            <span style={{ fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: 28, display: "block", fontFamily: "'Syne', sans-serif" }}>Why Clients Trust Us</span>

            {STATS_CARD.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span ref={el => { cardStatRefs.current[i] = el; }} style={{ fontSize: "2.2rem", fontWeight: 900, color: C.accent, fontFamily: "'Syne', sans-serif" }}>0{s.suffix}</span>
                <span style={{ fontSize: "0.7rem", color: C.inkMuted, fontFamily: "'Syne', sans-serif", marginLeft: 16, letterSpacing: "0.06em" }}>{s.label}</span>
              </div>
            ))}

            <p style={{ fontSize: "0.8rem", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "rgba(255,255,255,0.55)", marginTop: 24, lineHeight: 1.6 }}>
              "Every great product starts with a great partner."
            </p>

            {/* Watermark */}
            <span style={{ position: "absolute", bottom: -20, right: -10, fontSize: "9rem", fontWeight: 900, color: "rgba(255,255,255,0.02)", fontFamily: "'Syne', sans-serif", userSelect: "none", lineHeight: 1, pointerEvents: "none" }}>TC</span>
          </div>
        </div>
      </section>

      {/* Mobile responsive style */}
      <style>{`
        @keyframes marqueeLeft  { from { transform: translateX(0) }  to { transform: translateX(-50%) } }
        @keyframes marqueeRight { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        @media (max-width: 768px) {
          .clients-cta-grid { grid-template-columns: 1fr !important; }
          .clients-cta-grid > div:last-child { order: -1; }
        }
      `}</style>
    </div>
  );
};

export default Clients;