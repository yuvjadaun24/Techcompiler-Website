import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  accent: "#C8FF00",
  white: "#FFFFFF",
  border: "rgba(10,14,26,0.1)",
};

const PROCESS_STEPS = [
  { title: "Discovery", desc: "We analyse your goals, systems, and data landscape to define requirements and identify the highest-impact opportunities." },
  { title: "Architecture", desc: "We design scalable, secure architectures — selecting the right tech stack, APIs, and infrastructure for long-term success." },
  { title: "Development", desc: "Our engineers build iteratively with CI/CD, code reviews, and automated testing baked into every sprint." },
  { title: "Deployment", desc: "We release, monitor, and optimise in production — ensuring reliability, performance, and seamless handover." },
];

export default function OurProcess(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);

  const connectorRef = useRef<SVGSVGElement | null>(null);
  const connectorLineRef = useRef<SVGLineElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const bracketRefs = useRef<Array<SVGPathElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, descRef.current], { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          try {
            const split = new SplitText(headlineRef.current as HTMLElement, { type: "words" });
            gsap.fromTo((split as any).words, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" });
          } catch {
            gsap.to(headlineRef.current, { autoAlpha: 1, duration: 0.6 });
          }
          if (descRef.current) gsap.fromTo(descRef.current, { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 0.55, delay: 0.25 });
        },
      });

      // connector draw
      try {
        gsap.fromTo(connectorLineRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.4, ease: "power2.inOut", delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } });
      } catch {
        gsap.set(connectorLineRef.current, { opacity: 0.4 });
      }

      // step bracket draw per step
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(step, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } });

        try {
          gsap.fromTo(bracketRefs.current[i], { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: step, start: "top 80%", once: true } });
        } catch {
          gsap.set(bracketRefs.current[i], { opacity: 0.5 });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white" style={{ padding: "clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)" }}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between" style={{ gap: 40, marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: 24, height: 1, background: C.accent }} />
              <div style={{ color: C.inkMuted, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' }}>HOW WE WORK</div>
              <div style={{ width: 24, height: 1, background: C.accent }} />
            </div>
            <h2 ref={headlineRef} style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: C.ink }}>Our <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>process</span></h2>
          </div>
          <div ref={descRef} style={{ maxWidth: 320, fontSize: '0.88rem', color: C.inkMuted, lineHeight: 1.72 }}>A structured, transparent engineering process — from strategy through deployment — built for enterprise-grade software and AI solutions.</div>
        </div>

        <div style={{ position: 'relative' }}>
          {/* connector line */}
          <svg ref={connectorRef} viewBox="0 0 1200 2" preserveAspectRatio="none" style={{ position: 'absolute', top: 28, left: 0, right: 0, height: 2, width: '100%', pointerEvents: 'none', zIndex: 0 }}>
            <line ref={connectorLineRef} x1="0" y1="1" x2="1200" y2="1" stroke={C.accent} strokeWidth={1.5} strokeDasharray="4 6" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative" style={{ position: 'relative', zIndex: 1 }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} ref={el => (stepRefs.current[i] = el)} className="flex flex-col items-start" style={{ padding: '0 clamp(16px, 2.5vw, 32px)', position: 'relative' }}>
                <div style={{ marginBottom: 14 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFFFFF', border: `2px solid ${C.accent}`, marginBottom: 12 }} />
                  <p style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.18em', color: C.accent, textTransform: 'uppercase', marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>0{String(i + 1)}</p>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, color: C.ink, marginBottom: 14, fontFamily: "'Syne', sans-serif" }}>{step.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: C.inkMuted, lineHeight: 1.72, maxWidth: 240, fontFamily: "'Syne', sans-serif" }}>{step.desc}</p>
                </div>

                <svg viewBox="0 0 60 24" width="60" height="24" style={{ marginTop: 20, opacity: 0.5 }}>
                  <path ref={el => (bracketRefs.current[i] = el)} d="M 4,4 L 4,20 L 56,20 L 56,4" fill="none" stroke={C.accent} strokeWidth={1.2} strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
