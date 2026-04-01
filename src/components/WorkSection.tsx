import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { useNavigate } from "react-router-dom";

import Emerge360Hero from "@/assets/Emerge-360-Hero.png";
import GrowthCloudHero from "@/assets/GrowthCloud-Hero.png";
import RCCTVHero from "@/assets/RCC-Hero.png";
import shopDrugMart from "@/assets/drug-mart-hero-img.png";

gsap.registerPlugin(ScrollTrigger, CustomEase, DrawSVGPlugin, SplitText);

/* ── Custom eases ─────────────────────────────────────── */
try { CustomEase.create("panel",  "M0,0 C0.16,1 0.3,1 1,1"); } catch {}
try { CustomEase.create("title",  "M0,0 C0.2,0 0.08,1 1,1"); } catch {}
try { CustomEase.create("wk-silk","M0,0 C0.11,0 0.19,0.53 0.27,0.53 0.41,0.78 0.51,1 1,1"); } catch {}
try { CustomEase.create("snap",   "M0,0 C0,0 0.1,1 1,1"); } catch {}

/* ── Color tokens ─────────────────────────────────────── */
const C = {
  sectionBg:    "#FFFFFF",
  panelBg:      "#FFFFFF",
  panelBorder:  "rgba(10,14,26,0.08)",
  ink:          "#0A0E1A",
  inkMuted:     "rgba(10,14,26,0.5)",
  inkDimmer:    "rgba(10,14,26,0.14)",
  accent:       "#C8FF00",
  accentDim:    "rgba(200,255,0,0.12)",
  accentBorder: "rgba(200,255,0,0.35)",
  imageFrame:   "#C8FF00",
  progressBg:   "rgba(10,14,26,0.08)",
  progressFill: "#C8FF00",
};

/* ── Project data ─────────────────────────────────────── */
const PROJECTS = [
  {
    index: "01",
    title: "Emerge 360",
    category: "Product Engineering",
    tags: ["React.js", "Python", "TensorFlow", "AWS"],
    year: "2024",
    image: Emerge360Hero,
    description:
      "An AI-powered business intelligence platform consolidating managed services with intelligent dashboards, predictive analytics, and automated reporting — surfacing actionable insights in real time.",
    accentWord: "360",
    href: "/Emerge-360",
  },
  {
    index: "02",
    title: "GrowthCloud",
    category: "Product Engineering",
    tags: ["Next.js", "NestJS", "GraphQL", "OpenAI"],
    year: "2024",
    image: GrowthCloudHero,
    description:
      "A full-featured SaaS growth operations suite built from scratch — sprint boards, AI task recommendations, cloud file storage, and real-time collaboration under one unified interface.",
    accentWord: "GrowthCloud",
    href: "/GrowthCloud",
  },
  {
    index: "03",
    title: "RCC TV Stream Director",
    category: "Product Engineering",
    tags: ["Vue.js", "Django", "FFmpeg", "AWS Media"],
    year: "2023",
    image: RCCTVHero,
    description:
      "A web-based media operations platform for broadcast scheduling, multi-network stream management, and precision local ad insertion — giving broadcast teams full control from a single interface.",
    accentWord: "Stream Director",
    href: "/RCC-TV-Stream-Director",
  },
  {
    index: "04",
    title: "Shoppers Drug Mart",
    category: "Product Engineering",
    tags: ["React", "Java", "Oracle", "Cloud"],
    year: "2019",
    image: shopDrugMart,
    description:
      "A resource demand and capacity management system for a major pharmacy chain — enabling project-level forecasting, utilisation tracking, and health reporting.",
    accentWord: "Drug Mart",
    href: "/Shopper-Drug-Mart",
  },
];

/* ── Helpers ───────────────────────────────────────────── */
function renderAccentTitle(title: string, accentWord: string) {
  const idx = title.indexOf(accentWord);
  if (idx === -1) return <span>{title}</span>;
  const before = title.slice(0, idx);
  const after  = title.slice(idx + accentWord.length);
  return (
    <>
      {before && <span>{before}</span>}
      <span style={{ color: C.accent }}>{accentWord}</span>
      {after && <span>{after}</span>}
    </>
  );
}

/* ── Component ─────────────────────────────────────────── */
const WorkSection: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ─── Refs: section-level ─── */
  const sectionRef      = useRef<HTMLDivElement>(null);
  const wrapperRef      = useRef<HTMLDivElement>(null);
  const stageRef        = useRef<HTMLDivElement>(null);
  const trackRef        = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const sweepLineRef    = useRef<HTMLDivElement>(null);
  const cursorRef       = useRef<HTMLDivElement>(null);
  const cursorLabelRef  = useRef<HTMLSpanElement>(null);
  const headerRef       = useRef<HTMLDivElement>(null);
  const headerTitleRef  = useRef<HTMLHeadingElement>(null);
  const crayonLineRef   = useRef<SVGPathElement>(null);

  /* ─── Refs: per-panel ─── */
  const panelRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const categoryRefs= useRef<(HTMLDivElement | null)[]>([]);
  const descRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const tagRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs     = useRef<(HTMLAnchorElement | null)[]>([]);
  const lineRefs    = useRef<(HTMLSpanElement | null)[]>([]);
  const imageFrameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs   = useRef<(HTMLImageElement | null)[]>([]);
  const numRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const svgTLRefs   = useRef<(SVGPathElement | null)[]>([]);
  const svgTRRefs   = useRef<(SVGPathElement | null)[]>([]);
  const svgBLRefs   = useRef<(SVGPathElement | null)[]>([]);
  const svgBRRefs   = useRef<(SVGPathElement | null)[]>([]);
  const splitRefs   = useRef<any[]>([]);

  /* ─── Detect mobile ─── */
  useEffect(() => {
    const check = () => {
      isMobile.current = window.matchMedia("(max-width: 1023px)").matches;
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ─── Custom cursor (desktop only) ─── */
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const section = sectionRef.current;
    const cursor  = cursorRef.current;
    const label   = cursorLabelRef.current;
    if (!section || !cursor || !label) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onEnterFrame = () => {
      gsap.to(cursor, {
        width: 90,
        height: 90,
        background: "transparent",
        border: `1.5px solid ${C.accent}`,
        duration: 0.35,
        ease: "wk-silk",
      });
      gsap.to(label, { autoAlpha: 1, duration: 0.2 });
    };

    const onLeaveFrame = () => {
      gsap.to(cursor, {
        width: 12,
        height: 12,
        background: C.accent,
        border: "none",
        duration: 0.35,
        ease: "wk-silk",
      });
      gsap.to(label, { autoAlpha: 0, duration: 0.2 });
    };

    const onEnterSection = () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
    };

    const onLeaveSection = () => {
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnterSection);
    section.addEventListener("mouseleave", onLeaveSection);

    const frames = section.querySelectorAll<HTMLElement>(".project-image-frame");
    frames.forEach((f) => {
      f.addEventListener("mouseenter", onEnterFrame);
      f.addEventListener("mouseleave", onLeaveFrame);
    });

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnterSection);
      section.removeEventListener("mouseleave", onLeaveSection);
      frames.forEach((f) => {
        f.removeEventListener("mouseenter", onEnterFrame);
        f.removeEventListener("mouseleave", onLeaveFrame);
      });
    };
  }, []);

  /* ─── Image hover zoom ─── */
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cleanups: (() => void)[] = [];
    imageFrameRefs.current.forEach((frame, i) => {
      const img = imageRefs.current[i];
      if (!frame || !img) return;
      const onEnter = () =>
        gsap.to(img, { scale: 1.06, duration: 0.8, ease: "wk-silk" });
      const onLeave = () =>
        gsap.to(img, { scale: 1, duration: 0.8, ease: "wk-silk" });
      frame.addEventListener("mouseenter", onEnter);
      frame.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        frame.removeEventListener("mouseenter", onEnter);
        frame.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ─── Main GSAP (desktop horizontal scroll) ─── */
  useEffect(() => {
    if (isMobile.current) return;

    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    const progressFill = progressFillRef.current;
    if (!wrapper || !track || !progressFill) return;

    const ctx = gsap.context(() => {
      /* ── Header SplitText ── */
      if (headerTitleRef.current) {
        try {
          const hSplit = new SplitText(headerTitleRef.current, {
            type: "chars",
            charsClass: "char",
          });
          splitRefs.current.push(hSplit);

          // Ensure chars are clipped
          const lines = headerTitleRef.current.querySelectorAll<HTMLElement>(".char");
          gsap.set(lines, { willChange: "transform, opacity" });

          gsap.fromTo(
            hSplit.chars,
            { autoAlpha: 0, yPercent: 100, rotationX: -60, transformOrigin: "50% 100%" },
            {
              autoAlpha: 1,
              yPercent: 0,
              rotationX: 0,
              duration: 0.8,
              stagger: { amount: 0.5, ease: "power2.out" },
              ease: "title",
              onComplete() { gsap.set(lines, { clearProps: "willChange" }); },
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } catch {
          gsap.fromTo(
            headerTitleRef.current,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "panel",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      /* ── Crayon underline DrawSVG ── */
      if (crayonLineRef.current) {
        gsap.fromTo(
          crayonLineRef.current,
          { drawSVG: "0% 0%" },
          {
            drawSVG: "0% 100%",
            duration: 1.4,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* ── Horizontal scroll driver ── */
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (PROJECTS.length - 1));
            setActiveIndex(idx);

            /* sweep line on velocity */
            const velocity = self.getVelocity();
            if (Math.abs(velocity) > 800 && sweepLineRef.current) {
              gsap.fromTo(
                sweepLineRef.current,
                { x: -2, autoAlpha: 1 },
                {
                  x: window.innerWidth + 2,
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "power2.in",
                  overwrite: true,
                }
              );
            }
          },
        },
      });

      /* ── Progress bar ── */
      gsap.to(progressFill, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      /* ── Per-panel entry / exit animations ── */
      const animatedPanels = new Set<number>();

      function animatePanelIn(i: number) {
        if (animatedPanels.has(i)) return;
        animatedPanels.add(i);

        const tl = gsap.timeline();

        /* Image frame slides in from right */
        if (imageFrameRefs.current[i]) {
          tl.fromTo(
            imageFrameRefs.current[i],
            { x: 60 },
            { x: 0, duration: 0.75, ease: "panel" },
            0
          );
        }

        /* DrawSVG brackets */
        const brackets = [
          svgTLRefs.current[i],
          svgTRRefs.current[i],
          svgBLRefs.current[i],
          svgBRRefs.current[i],
        ].filter(Boolean);
        if (brackets.length) {
          tl.fromTo(
            brackets,
            { drawSVG: "0% 0%" },
            { drawSVG: "0% 100%", duration: 0.65, ease: "wk-silk", stagger: 0.08 },
            0
          );
        }
      }

      function animatePanelOut(_i: number) {
        // Content stays visible — no fade-out
      }

      /* Animate first panel immediately */
      animatePanelIn(0);

      PROJECTS.forEach((_, i) => {
        const panelStart = i / PROJECTS.length;
        const panelEnd   = (i + 1) / PROJECTS.length;

        ScrollTrigger.create({
          trigger: wrapper,
          start: () => `${panelStart * 100}% top`,
          end:   () => `${panelEnd * 100}% top`,
          onEnter:     () => animatePanelIn(i),
          onEnterBack: () => animatePanelIn(i),
          onLeave:     () => animatePanelOut(i),
          onLeaveBack: () => animatePanelOut(i),
        });
      });
    }, sectionRef);

    return () => {
      splitRefs.current.forEach((s) => {
        try { s.revert(); } catch {}
      });
      splitRefs.current = [];
      ctx.revert();
    };
  }, []);

  /* ─── Mobile GSAP ─── */
  useEffect(() => {
    if (!isMobile.current) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll<HTMLElement>(".mobile-project-card");
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "wk-silk",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* ─── Nav arrows ─── */
  const scrollToPanel = useCallback(
    (dir: 1 | -1) => {
      const next = Math.min(
        Math.max(activeIndex + dir, 0),
        PROJECTS.length - 1
      );
      if (next === activeIndex) return;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = wrapper.offsetHeight - window.innerHeight;
      const targetScroll =
        wrapperTop + (next / (PROJECTS.length - 1)) * sectionHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
    [activeIndex]
  );

  /* ─── CTA arrow hover ─── */
  const onCtaEnter = (i: number) => {
    if (lineRefs.current[i]) {
      gsap.to(lineRefs.current[i], { width: 56, duration: 0.3, overwrite: true });
    }
  };
  const onCtaLeave = (i: number) => {
    if (lineRefs.current[i]) {
      gsap.to(lineRefs.current[i], { width: 32, duration: 0.3, overwrite: true });
    }
  };

  /* bracket SVG dimensions */
  const W = 552; // clamp(320,38vw,520) + 16*2 padding
  const H = 392; // clamp(220,50vh,360) + 16*2 padding

  const isCoarse =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  /* ═══════════════════════════════════════════════════════
     MOBILE LAYOUT
     ═══════════════════════════════════════════════════════ */
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
    return (
      <section
        ref={sectionRef}
        style={{
          background: C.sectionBg,
          padding: "60px 20px",
          width: "100%",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 24,
                height: 1,
                background: C.accent,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: "rgba(10,14,26,0.45)",
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              OUR WORK
            </span>
            <span
              style={{
                width: 24,
                height: 1,
                background: C.accent,
                display: "inline-block",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
              fontWeight: 900,
              color: C.ink,
              fontFamily: "'Syne', sans-serif",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            Projects that{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: C.accent,
              }}
            >
              define
            </span>{" "}
            us
          </h2>
        </div>

        {/* Cards */}
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="mobile-project-card"
            style={{
              background: "rgba(10,14,26,0.03)",
              border: `1px solid rgba(10,14,26,0.08)`,
              borderBottom: `2px solid rgba(200,255,0,0.4)`,
              borderRadius: 20,
              padding: 28,
              marginBottom: 20,
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: 12,
                filter: "grayscale(15%)",
                marginBottom: 20,
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.accent,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {p.category}
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "rgba(10,14,26,0.25)",
                  letterSpacing: "0.18em",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                &copy; {p.year}
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: C.ink,
                fontFamily: "'Syne', sans-serif",
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              {renderAccentTitle(p.title, p.accentWord)}
            </h3>

            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(10,14,26,0.5)",
                lineHeight: 1.72,
                fontFamily: "'Syne', sans-serif",
                marginBottom: 20,
              }}
            >
              {p.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 20,
              }}
            >
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(10,14,26,0.05)",
                    border: "1px solid rgba(10,14,26,0.1)",
                    borderRadius: 100,
                    padding: "6px 14px",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "rgba(10,14,26,0.6)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              onClick={() => navigate(p.href)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.82rem",
                fontWeight: 800,
                color: C.ink,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              View &rarr;
            </a>
          </div>
        ))}

        {/* View All */}
        <div style={{ textAlign: "center", paddingTop: 32 }}>
          <button
            onClick={() => navigate("/Contact-Us")}
            style={{
              background: C.accent,
              color: C.sectionBg,
              borderRadius: 10,
              padding: "14px 32px",
              fontWeight: 800,
              fontSize: "0.88rem",
              fontFamily: "'Syne', sans-serif",
              border: "none",
              cursor: "pointer",
            }}
          >
            View All Works &rarr;
          </button>
        </div>
      </section>
    );
  }

  /* ═══════════════════════════════════════════════════════
     DESKTOP LAYOUT
     ═══════════════════════════════════════════════════════ */
  return (
    <section ref={sectionRef} style={{ background: C.sectionBg, cursor: "none" }}>
      {/* ── Custom cursor ── */}
      {!isCoarse && (
        <div
          ref={cursorRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: C.accent,
            zIndex: 9999,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            visibility: "hidden" as const,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            ref={cursorLabelRef}
            style={{
              fontSize: "0.55rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: C.accent,
              fontFamily: "'Syne', sans-serif",
              whiteSpace: "nowrap",
              opacity: 0,
              visibility: "hidden" as const,
            }}
          >
            VIEW &rarr;
          </span>
        </div>
      )}

      {/* ── Section header (above the scroll runway) ── */}
      <div
        ref={headerRef}
        style={{
          background: C.sectionBg,
          height: "52vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              width: 24,
              height: 1,
              background: C.accent,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "rgba(10,14,26,0.45)",
              textTransform: "uppercase",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            OUR WORK
          </span>
          <span
            style={{
              width: 24,
              height: 1,
              background: C.accent,
              display: "inline-block",
            }}
          />
        </div>

        <h2
          ref={headerTitleRef}
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            color: C.ink,
            fontFamily: "'Syne', sans-serif",
            lineHeight: 0.92,
            margin: 0,
            overflow: "hidden",
            perspective: 600,
          }}
        >
          Projects that{" "}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: C.accent,
            }}
          >
            define
          </span>{" "}
          us
        </h2>

        {/* Crayon DrawSVG separator line */}
        <svg
          viewBox="0 0 640 18"
          width="clamp(260px,46vw,600px)"
          height="18"
          style={{ marginTop: 20, overflow: "visible", display: "block" }}
        >
          <path
            ref={crayonLineRef}
            d="M 0,9 C 50,4 110,14 180,8 C 250,3 320,15 400,9 C 470,4 540,14 640,9"
            fill="none"
            stroke={C.accent}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p
          style={{
            fontSize: "0.72rem",
            color: "rgba(10,14,26,0.35)",
            marginTop: 20,
            letterSpacing: "0.12em",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Scroll to explore &rarr;
        </p>
      </div>

      {/* ── Scroll runway (tall wrapper) ── */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          height: `${PROJECTS.length * 100}dvh`,
          width: "100%",
        }}
      >
        {/* ── Sticky stage ── */}
        <div
          ref={stageRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100dvh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          {/* ── Persistent UI: section label ── */}
          <div
            style={{
              position: "absolute",
              top: 32,
              left: "clamp(32px, 5vw, 72px)",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                width: 20,
                height: 1,
                background: C.accent,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.22em",
                color: C.inkMuted,
                textTransform: "uppercase",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              OUR WORK
            </span>
          </div>

          {/* ── Persistent UI: project counter ── */}
          <div
            style={{
              position: "absolute",
              top: 32,
              right: "clamp(32px, 5vw, 72px)",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: C.ink,
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                width: 16,
                height: 1,
                background: "rgba(10,14,26,0.3)",
                display: "inline-block",
                transform: "rotate(30deg)",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(10,14,26,0.45)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          {/* ── Sweep line ── */}
          <div
            ref={sweepLineRef}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 2,
              background: "rgba(200,255,0,0.6)",
              zIndex: 50,
              pointerEvents: "none",
              opacity: 0,
              visibility: "hidden" as const,
            }}
          />

          {/* ── Horizontal track ── */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${PROJECTS.length * 100}vw`,
              height: "100%",
            }}
          >
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                ref={(el) => { panelRefs.current[i] = el; }}
                style={{
                  width: "100vw",
                  height: "100dvh",
                  position: "relative",
                  flexShrink: 0,
                  overflow: "hidden",
                  background: C.panelBg,
                  display: "flex",
                }}
              >
                {/* ── Left zone (52vw) ── */}
                <div
                  style={{
                    width: "52vw",
                    height: "100dvh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "clamp(32px, 5vw, 72px)",
                    paddingRight: 40,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Watermark number */}
                  <span
                    ref={(el) => { numRefs.current[i] = el; }}
                    style={{
                      position: "absolute",
                      left: "clamp(28px, 4vw, 56px)",
                      bottom: "10%",
                      zIndex: 1,
                      fontSize: "clamp(14rem, 22vw, 22rem)",
                      fontWeight: 900,
                      fontFamily: "'Syne', sans-serif",
                      color: "rgba(10,14,26,0.04)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {p.index}
                  </span>

                  {/* Year badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "clamp(32px, 5vw, 72px)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: "rgba(10,14,26,0.25)",
                      letterSpacing: "0.18em",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    &copy; {p.year}
                  </span>

                  {/* Category tag */}
                  <div
                    ref={(el) => { categoryRefs.current[i] = el; }}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: C.accent,
                      fontFamily: "'Syne', sans-serif",
                      marginBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    <span
                      style={{
                        width: 20,
                        height: 1,
                        background: C.accent,
                        display: "inline-block",
                      }}
                    />
                    {p.category}
                  </div>

                  {/* Title */}
                  <div
                    ref={(el) => { titleRefs.current[i] = el; }}
                    style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                      fontWeight: 900,
                      fontFamily: "'Syne', sans-serif",
                      lineHeight: 0.92,
                      letterSpacing: "-0.025em",
                      color: C.ink,
                      marginBottom: 28,
                      maxWidth: 580,
                      overflow: "hidden",
                      perspective: 600,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    {renderAccentTitle(p.title, p.accentWord)}
                  </div>

                  {/* Description */}
                  <p
                    ref={(el) => { descRefs.current[i] = el; }}
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.72,
                      color: "rgba(10,14,26,0.55)",
                      fontFamily: "'Syne', sans-serif",
                      maxWidth: 440,
                      marginBottom: 36,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div
                    ref={(el) => { tagRefs.current[i] = el; }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 40,
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(10,14,26,0.05)",
                          border: "1px solid rgba(10,14,26,0.1)",
                          borderRadius: 100,
                          padding: "6px 14px",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          color: "rgba(10,14,26,0.6)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontFamily: "'Syne', sans-serif",
                          transition: "border-color 0.2s, color 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.borderColor = C.accentBorder;
                          (e.target as HTMLElement).style.color = C.accent;
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.borderColor = "rgba(10,14,26,0.1)";
                          (e.target as HTMLElement).style.color = "rgba(10,14,26,0.6)";
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    ref={(el) => { ctaRefs.current[i] = el; }}
                    onClick={() => navigate(p.href)}
                    onMouseEnter={() => onCtaEnter(i)}
                    onMouseLeave={() => onCtaLeave(i)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: C.ink,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "'Syne', sans-serif",
                      textDecoration: "none",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 3,
                    }}
                  >
                    <span
                      ref={(el) => { lineRefs.current[i] = el; }}
                      style={{
                        display: "inline-block",
                        width: 32,
                        height: 1,
                        background: C.accent,
                      }}
                    />
                    View Project &rarr;
                  </a>
                </div>

                {/* ── Right zone (48vw) ── */}
                <div
                  style={{
                    width: "48vw",
                    height: "100dvh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingRight: "clamp(32px, 5vw, 72px)",
                    paddingLeft: 20,
                    position: "relative",
                  }}
                >
                  {/* Image frame */}
                  <div
                    ref={(el) => { imageFrameRefs.current[i] = el; }}
                    className="project-image-frame"
                    style={{
                      position: "relative",
                      width: "clamp(320px, 38vw, 520px)",
                      height: "clamp(220px, 50vh, 360px)",
                      borderRadius: 16,
                      overflow: "hidden",
                      cursor: "none",
                      border: "1px solid rgba(10,14,26,0.08)",
                    }}
                  >
                    <img
                      ref={(el) => { imageRefs.current[i] = el; }}
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        filter: "grayscale(15%) contrast(1.05)",
                        display: "block",
                      }}
                    />
                    {/* Dark overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(10,14,26,0.6) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* DrawSVG bracket frame */}
                    <svg
                      style={{
                        position: "absolute",
                        inset: -8,
                        width: "calc(100% + 16px)",
                        height: "calc(100% + 16px)",
                        pointerEvents: "none",
                        zIndex: 10,
                        overflow: "visible",
                      }}
                      viewBox={`0 0 ${W} ${H}`}
                      preserveAspectRatio="none"
                    >
                      {/* Top-left bracket */}
                      <path
                        ref={(el) => { svgTLRefs.current[i] = el; }}
                        d="M 24,8 L 8,8 L 8,24"
                        fill="none"
                        stroke={C.imageFrame}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Top-right bracket */}
                      <path
                        ref={(el) => { svgTRRefs.current[i] = el; }}
                        d={`M ${W - 24},8 L ${W - 8},8 L ${W - 8},24`}
                        fill="none"
                        stroke={C.imageFrame}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Bottom-left bracket */}
                      <path
                        ref={(el) => { svgBLRefs.current[i] = el; }}
                        d={`M 8,${H - 24} L 8,${H - 8} L 24,${H - 8}`}
                        fill="none"
                        stroke={C.imageFrame}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Bottom-right bracket */}
                      <path
                        ref={(el) => { svgBRRefs.current[i] = el; }}
                        d={`M ${W - 8},${H - 24} L ${W - 8},${H - 8} L ${W - 24},${H - 8}`}
                        fill="none"
                        stroke={C.imageFrame}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Image caption */}
                  <p
                    style={{
                      marginTop: 16,
                      textAlign: "right",
                      fontSize: "0.62rem",
                      color: "rgba(10,14,26,0.4)",
                      letterSpacing: "0.1em",
                      fontFamily: "'Syne', sans-serif",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.title}
                  </p>

                  {/* Decorative vertical index */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "20%",
                      right: "clamp(32px, 5vw, 72px)",
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      color: "rgba(10,14,26,0.25)",
                      fontFamily: "'Syne', sans-serif",
                      writingMode: "vertical-rl",
                    }}
                  >
                    {p.index}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Navigation arrows ── */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              right: "clamp(32px, 5vw, 72px)",
              zIndex: 20,
              display: "flex",
              gap: 12,
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => scrollToPanel(-1)}
              aria-label="Previous project"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(10,14,26,0.15)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = C.accent;
                const svg = (e.currentTarget as HTMLElement).querySelector("svg");
                if (svg) svg.style.stroke = C.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,14,26,0.15)";
                const svg = (e.currentTarget as HTMLElement).querySelector("svg");
                if (svg) svg.style.stroke = "rgba(10,14,26,0.5)";
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="rgba(10,14,26,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.2s" }}
              >
                <polyline points="7,1 3,5 7,9" />
              </svg>
            </button>
            <button
              onClick={() => scrollToPanel(1)}
              aria-label="Next project"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "1px solid rgba(10,14,26,0.15)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = C.accent;
                const svg = (e.currentTarget as HTMLElement).querySelector("svg");
                if (svg) svg.style.stroke = C.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,14,26,0.15)";
                const svg = (e.currentTarget as HTMLElement).querySelector("svg");
                if (svg) svg.style.stroke = "rgba(10,14,26,0.5)";
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="rgba(10,14,26,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.2s" }}
              >
                <polyline points="3,1 7,5 3,9" />
              </svg>
            </button>
          </div>

          {/* ── Progress bar ── */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 20,
              height: 3,
              pointerEvents: "none",
            }}
          >
            {/* Dot markers */}
            {PROJECTS.map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: `${(i / (PROJECTS.length - 1)) * 100}%`,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    i === activeIndex
                      ? C.accent
                      : "rgba(10,14,26,0.2)",
                  transform:
                    i === activeIndex
                      ? "scale(1.5) translateX(-50%)"
                      : "scale(1) translateX(-50%)",
                  transition: "background 0.3s, transform 0.3s",
                  transformOrigin: "left center",
                }}
              />
            ))}

            {/* Track */}
            <div
              style={{
                width: "100%",
                height: 3,
                background: C.progressBg,
              }}
            >
              <div
                ref={progressFillRef}
                style={{
                  width: "0%",
                  height: "100%",
                  background: C.progressFill,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── View All Works CTA (after scroll runway) ── */}
      <div
        style={{
          background: C.sectionBg,
          padding: "80px 0",
          textAlign: "center",
          borderTop: `1px solid ${C.panelBorder}`,
        }}
      >
        <button
          onClick={() => navigate("/Contact-Us")}
          style={{
            background: C.accent,
            color: C.sectionBg,
            borderRadius: 10,
            padding: "14px 32px",
            fontWeight: 800,
            fontSize: "0.88rem",
            fontFamily: "'Syne', sans-serif",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = C.ink;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = C.accent;
          }}
        >
          View All Works &rarr;
        </button>
      </div>
    </section>
  );
};

export default WorkSection;
