import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import teamPhoto from "@/assets/hero-landscape-image.jpg";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  accent: "#C8FF00",
  white: "#FFFFFF",
};

export default function TeamPhotoSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const topLineRef = useRef<SVGLineElement | null>(null);
  const topBarRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const statNumberEls = useRef<Array<HTMLSpanElement | null>>([]);
  const creditRef = useRef<HTMLDivElement | null>(null);

  const statData = [
    { value: "80+", label: "Team Members", accent: true },
    { value: "150+", label: "Projects Delivered", accent: false },
    { value: "8+", label: "Years of Expertise", accent: false },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 80%", once: true };

      // initial states
      if (photoRef.current) gsap.set(photoRef.current, { scale: 1.07 });
      if (watermarkRef.current) gsap.set(watermarkRef.current, { x: 80, opacity: 0 });
      if (topBarRef.current) gsap.set(topBarRef.current.children, { autoAlpha: 0, y: -12 });
      statItemRefs.current.forEach((el) => el && gsap.set(el, { autoAlpha: 0, x: -28 }));
      if (creditRef.current) gsap.set(creditRef.current, { autoAlpha: 0, y: 20 });

      // photo zoom
      if (photoRef.current) gsap.fromTo(photoRef.current, { scale: 1.07 }, { scale: 1, duration: 1.8, ease: "power2.out", scrollTrigger: st });

      // watermark slide in
      try {
        if (watermarkRef.current) gsap.fromTo(watermarkRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.15, scrollTrigger: st });
      } catch {
        if (watermarkRef.current) gsap.to(watermarkRef.current, { opacity: 1, duration: 0.6, scrollTrigger: st });
      }

      // top line draw
      try {
        if (topLineRef.current) gsap.fromTo(topLineRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.2, ease: "power2.inOut", delay: 0.1, scrollTrigger: st });
      } catch {
        if (topLineRef.current) gsap.set(topLineRef.current, { opacity: 0.25 });
      }

      // top bar items fade in
      if (topBarRef.current) gsap.fromTo(topBarRef.current.children, { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08, ease: "power3.out", delay: 0.05, scrollTrigger: st });

      // stats stagger + count up
      statItemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { autoAlpha: 0, x: -28 }, { autoAlpha: 1, x: 0, duration: 0.55, ease: "power3.out", delay: 0.25 + i * 0.12, scrollTrigger: st });

        const numEl = statNumberEls.current[i];
        if (numEl) {
          const numericVal = parseInt(statData[i].value, 10);
          const suffix = statData[i].value.replace(String(numericVal), "");
          const obj = { val: 0 };
          gsap.to(obj, { val: numericVal, duration: 1.6, ease: "power2.out", delay: 0.4 + i * 0.12, onUpdate: () => { numEl.textContent = Math.round(obj.val) + suffix; }, scrollTrigger: st });
        }
      });

      // credit fade
      if (creditRef.current) gsap.fromTo(creditRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out", delay: 0.45, scrollTrigger: st });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(500px, 100dvh, 920px)",
        overflow: "hidden",
      }}
    >
      {/* Layer 0 — Photo */}
      <img
        ref={photoRef}
        src={teamPhoto}
        alt="TechCompiler team"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 35%",
          filter: "contrast(1.06) saturate(0.92)",
        }}
      />

      {/* Layer 1 — Gradients */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to bottom, rgba(10,14,26,0.88) 0%, rgba(10,14,26,0.3) 60%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.85) 30%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "30%", background: "linear-gradient(to right, rgba(10,14,26,0.35), transparent)", zIndex: 1, pointerEvents: "none" }} />

      {/* Layer 2 — Watermark headline */}
      <div
        ref={watermarkRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(5rem, 14vw, 13rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        OUR TEAM
      </div>

      {/* Layer 3 — Top content bar */}
      <div ref={topBarRef} style={{ position: "absolute", top: "clamp(24px, 4vh, 44px)", left: "clamp(24px, 5vw, 72px)", right: "clamp(24px, 5vw, 72px)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 20, height: 1, background: C.accent }} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            The People
          </span>
        </div>

        <div style={{ textAlign: "right" }} className="hidden md:block">
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>
            Est. 2015
          </p>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
            Rochester, NY · Noida, India
          </p>
        </div>
      </div>

      {/* Layer 6 — Top DrawSVG line */}
      <svg style={{ position: "absolute", top: "clamp(68px, 10vh, 88px)", left: 0, right: 0, width: "100%", height: 2, zIndex: 10, pointerEvents: "none" }} viewBox="0 0 1440 2" preserveAspectRatio="none">
        <line ref={topLineRef} x1="0" y1="1" x2="1440" y2="1" stroke={C.accent} strokeWidth={1} opacity={0.25} />
      </svg>

      {/* Layer 4 — Bottom-left stat cluster */}
      <div ref={statsRef} style={{ position: "absolute", bottom: "clamp(60px, 8vh, 100px)", left: "clamp(24px, 5vw, 72px)", display: "flex", flexDirection: "column", gap: 20, zIndex: 10 }}>
        {statData.map((stat, i) => (
          <div key={i} ref={(el) => (statItemRefs.current[i] = el)} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span ref={(el) => (statNumberEls.current[i] = el)} style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 900, lineHeight: 1, color: stat.accent ? C.accent : C.white }}>
              {stat.value}
            </span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Layer 5 — Bottom-right credit rotated vertical (hidden on mobile) */}
      <div ref={creditRef} className="hidden md:flex" style={{ position: "absolute", bottom: "clamp(60px, 8vh, 100px)", right: "clamp(24px, 5vw, 72px)", writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)", fontFamily: "'Syne', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 10, zIndex: 10 }}>
        TechCompiler
        <span style={{ width: 1, height: 32, background: C.accent, display: "block", opacity: 0.6 }} />
        Global Delivery
      </div>
    </section>
  );
}
