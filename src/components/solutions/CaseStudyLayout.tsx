import PageMeta from "@/seo/PageMeta";
import React, { useEffect, useRef, PropsWithChildren } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  bg: "#FFFFFF",
  bgAlt: "#F7F7F5",
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  inkDim: "rgba(10,14,26,0.08)",
  accent: "#C8FF00",
  accentBg: "rgba(200,255,0,0.08)",
  accentBorder: "rgba(200,255,0,0.38)",
  dark: "#0A0E1A",
};

function revealOnScroll(ref: any, { delay = 0, y = 30, x = 0 } = {}) {
  const el = ref?.current ?? ref;
  gsap.fromTo(
    el,
    { autoAlpha: 0, y, x },
    {
      autoAlpha: 1,
      y: 0,
      x: 0,
      duration: 0.65,
      ease: "power3.out",
      delay,
      scrollTrigger: { trigger: el, start: "top 84%", once: true },
    }
  );
}

function headingReveal(el: any) {
  try {
    const split = new SplitText(el, { type: "words" });
    gsap.set(split.words, { autoAlpha: 0, y: 22 });
    gsap.to(split.words, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 82%", once: true },
    });
  } catch {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: el, start: "top 82%", once: true } }
    );
  }
}

export interface CaseStudyLayoutProps {
  parentCategory?: string;
}

const CaseStudyLayout: React.FC<PropsWithChildren<CaseStudyLayoutProps>> = ({ children, parentCategory = "Product Engineering" }) => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h1 = pageRef.current?.querySelector("h1");
      if (h1) {
        // style h1 for dark hero
        (h1 as HTMLElement).style.color = "white";
        (h1 as HTMLElement).style.fontFamily = "Syne, sans-serif";
        headingReveal(h1 as HTMLElement);

        // insert hero line after h1
        const inserted = document.createElement("div");
        inserted.innerHTML = `<svg viewBox=\"0 0 700 3\" width=\"100%\" height=\"3\" style=\"margin-top:20px;overflow:visible\"><path d=\"M 0,1.5 L 700,1.5\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1\" fill=\"none\" /></svg>`;
        h1.insertAdjacentElement("afterend", inserted.firstElementChild as Element);
        const p = (h1.nextElementSibling as SVGElement)?.querySelector("path") as SVGPathElement | null;
        if (p) gsap.fromTo(p, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1.0, ease: "power2.inOut", delay: 0.5 });
      }

      const headings = pageRef.current?.querySelectorAll("h2, h3");
      headings && headings.forEach((h) => headingReveal(h as HTMLElement));

      const paras = pageRef.current?.querySelectorAll("p, img, ul, .card, section");
      paras && paras.forEach((p, i) => revealOnScroll({ current: p }, { delay: i * 0.03, y: 28 }));
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // breadcrumb rendering is driven by parentCategory + first h1 text (if present)
  const breadcrumb = (
    <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", fontFamily: "Syne" }}>
      <a href="/solutions" style={{ color: "rgba(255,255,255,0.35)" }}>Solutions</a>
      <span style={{ color: C.accent, margin: "0 8px" }}>→</span>
      <span style={{ color: "rgba(255,255,255,0.35)" }}>{parentCategory}</span>
    </div>
  );

  return (
    <div ref={pageRef} style={{ background: C.bg, color: C.ink }}>
      <PageMeta />
      <header style={{ background: C.dark, padding: "clamp(80px, 10vw, 130px) clamp(24px,6vw,80px) clamp(60px,8vw,100px)", color: "white", position: "relative" }}>
        <div className="max-w-6xl mx-auto">
          {breadcrumb}
          {/* The page's own h1 will be inside children; we style/animate it in useEffect */}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, rgba(10,14,26,0), #ffffff)", pointerEvents: "none" }} />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">{children}</main>
    </div>
  );
};

export default CaseStudyLayout;
