import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const ACCORDION = [
  {
    number: "01",
    question: "Who we are?",
    answer:
      "At TechCompiler, we pioneer change through technology and innovation. As a global enterprise technology solutions provider headquartered in Rochester, NY, we empower organizations and professionals to adapt to the digital landscape.",
  },
  {
    number: "02",
    question: "Our core values",
    answer:
      "We are committed to integrity, innovation, collaboration, and excellence. Every solution we build reflects our belief that technology should empower people — not complicate their lives.",
  },
  {
    number: "03",
    question: "Why choose us?",
    answer:
      "With deep technical expertise, a proven delivery track record, and a client-first mindset, TechCompiler brings the capabilities of a large firm with the agility and attention of a boutique partner.",
  },
  {
    number: "04",
    question: "What we do best?",
    answer:
      "We specialize in custom software development, AI integration, data intelligence, mobile solutions, and enterprise digital transformation — delivering end-to-end from strategy to deployment.",
  },
];

const C = {
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  accent: "#C8FF00",
  border: "rgba(10,14,26,0.1)",
  white: "#FFFFFF",
};

export default function AboutAccordion(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const statRefs = useRef<HTMLSpanElement[]>([]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const vertLineRefs = useRef<Array<SVGLineElement | null>>([]);
  const waveRefs = useRef<Array<SVGPathElement | null>>([]);

  /* copy from existing file (verbatim) */
  const description =
    "At TechCompiler, we pioneer change through technology and innovation. As a global enterprise technology solutions provider headquartered in Rochester, NY, we empower organizations and professionals to adapt to the digital landscape. With deep technical expertise and industry experience, we unlock our clients' full potential.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // initial hides
      if (descRef.current) gsap.set(descRef.current, { autoAlpha: 0, y: 20 });
      statRefs.current.forEach((el) => el && gsap.set(el, { textContent: "0" }));

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          // SplitText on company name
          try {
            new SplitText(nameRef.current as HTMLElement, { type: "chars", charsClass: "char" });
            gsap.set(nameRef.current!.querySelectorAll(".char"), { autoAlpha: 0, yPercent: 100, rotationX: -60, transformOrigin: "50% 100%" });
            gsap.to(nameRef.current!.querySelectorAll(".char"), { autoAlpha: 1, yPercent: 0, rotationX: 0, duration: 0.9, stagger: { amount: 0.4 }, ease: "power3.out" });
          } catch {
            gsap.to(nameRef.current, { autoAlpha: 1 });
          }

          // description
          if (descRef.current) gsap.to(descRef.current, { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.35 });

          // stat count ups
          const targets = [150, 8, 3];
          statRefs.current.forEach((el, i) => {
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: targets[i],
              duration: 1.2,
              delay: 0.4 + i * 0.12,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = i === 1 ? Math.round(obj.val).toString() : Math.round(obj.val).toString() + (i === 0 ? "+" : "");
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function toggleItem(i: number) {
    // close previous
    if (openIndex !== null && openIndex !== i) {
      const prevPanel = panelRefs.current[openIndex];
      const prevWave = waveRefs.current[openIndex];
      const prevVert = vertLineRefs.current[openIndex];
      if (prevPanel) gsap.to(prevPanel, { height: 0, duration: 0.35, ease: "power2.in" });
      try { if (prevWave) gsap.to(prevWave, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (prevWave) gsap.set(prevWave, { opacity: 0.4 }); }
      if (prevVert) gsap.to(prevVert, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      setOpenIndex(null);
    }

    if (openIndex === i) {
      // close
      const panel = panelRefs.current[i];
      const wave = waveRefs.current[i];
      const vert = vertLineRefs.current[i];
      if (panel) gsap.to(panel, { height: 0, duration: 0.35, ease: "power2.in" });
      try { if (wave) gsap.to(wave, { drawSVG: "100% 100%", duration: 0.3, ease: "power2.in" }); } catch { if (wave) gsap.set(wave, { opacity: 0.4 }); }
      if (vert) gsap.to(vert, { scaleY: 1, duration: 0.25, ease: "power2.out" });
      setOpenIndex(null);
      return;
    }

    // open new
    const panel = panelRefs.current[i];
    const wave = waveRefs.current[i];
    const vert = vertLineRefs.current[i];
    if (panel) gsap.to(panel, { height: "auto", duration: 0.45, ease: "power2.out" });
    try { if (wave) gsap.fromTo(wave, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.7, ease: "power2.out", delay: 0.15 }); } catch { if (wave) gsap.set(wave, { opacity: 0.4 }); }
    if (vert) gsap.to(vert, { scaleY: 0, duration: 0.25, ease: "power2.out" });
    setOpenIndex(i);
  }

  return (
    <section ref={sectionRef} className="w-full bg-white" style={{ padding: "clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)" }}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-start" style={{ gap: "clamp(40px, 8vw, 120px)" }}>
          {/* Left column */}
          <div className="w-full md:w-5/12">
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: 24, height: 1, background: C.accent }} />
              <div style={{ color: C.inkMuted, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' }}>ABOUT US</div>
              <div style={{ width: 24, height: 1, background: C.accent }} />
            </div>

            <h2 ref={nameRef} className="leading-[0.92]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: C.ink }}>
              <span>Tech</span>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', marginLeft: 6 }}>Compiler</span>
            </h2>

            <p ref={descRef} style={{ fontSize: '0.88rem', color: C.inkMuted, lineHeight: 1.72, maxWidth: 340, marginTop: 20 }}>
              {description}
            </p>

            <div className="flex items-center mt-7" style={{ gap: 24 }}>
              <div className="flex items-center" style={{ gap: 24 }}>
                <div className="flex items-center">
                  <div className="flex flex-col items-center pr-6" style={{ borderRight: `1px solid ${C.border}` }}>
                    <span ref={el => (statRefs.current[0] = el!)} style={{ fontSize: '1.8rem', fontWeight: 900, color: C.ink, fontFamily: "'Syne', sans-serif" }}>150+</span>
                    <span style={{ fontSize: '0.62rem', color: C.inkMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Clients</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center px-6" style={{ borderRight: `1px solid ${C.border}` }}>
                    <span ref={el => (statRefs.current[1] = el!)} style={{ fontSize: '1.8rem', fontWeight: 900, color: C.ink, fontFamily: "'Syne', sans-serif" }}>8</span>
                    <span style={{ fontSize: '0.62rem', color: C.inkMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Experience</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center pl-6">
                    <span ref={el => (statRefs.current[2] = el!)} style={{ fontSize: '1.8rem', fontWeight: 900, color: C.ink, fontFamily: "'Syne', sans-serif" }}>CMMI 3</span>
                    <span style={{ fontSize: '0.62rem', color: C.inkMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Accordion */}
          <div className="w-full md:w-7/12">
            <div className="w-full">
              {ACCORDION.map((item, i) => (
                <div key={i} className="w-full">
                  <div style={{ borderTop: `1px solid ${C.border}`, width: '100%' }} />
                  <div className="flex items-center justify-between" style={{ padding: '28px 0', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      <div style={{ minWidth: 28, color: C.accent, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em' }}>{item.number}</div>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', fontWeight: 800, color: C.ink, fontFamily: "'Syne', sans-serif", lineHeight: 1.1 }}>{item.question}</div>
                    </div>
                    <div style={{ width: 20, height: 20, cursor: 'pointer' }} onClick={() => toggleItem(i)}>
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <line x1={2} y1={10} x2={18} y2={10} stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" />
                        <line ref={el => (vertLineRefs.current[i] = el)} x1={10} y1={2} x2={10} y2={18} stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" style={{ transformOrigin: '10px 10px' }} />
                      </svg>
                    </div>
                  </div>

                  <div ref={el => (panelRefs.current[i] = el)} style={{ height: 0, overflow: 'hidden', paddingLeft: 48 }}>
                    <div style={{ paddingBottom: 28 }}>
                      <p style={{ fontSize: '0.88rem', color: C.inkMuted, lineHeight: 1.72, maxWidth: 480 }}>{item.answer}</p>
                    </div>
                    <div style={{ height: 24 }}>
                      <svg viewBox="0 0 400 24" width="100%" height="24" overflow="visible">
                        <path ref={el => (waveRefs.current[i] = el)} d="M 0,12 C 50,4 100,20 150,12 C 200,4 250,20 300,12 C 350,4 400,20 400,12" fill="none" stroke={C.accent} strokeWidth={1.5} strokeLinecap={"round"} opacity={0.6} />
                      </svg>
                    </div>
                  </div>

                  {i === ACCORDION.length - 1 && <div style={{ borderTop: `1px solid ${C.border}`, width: '100%' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
