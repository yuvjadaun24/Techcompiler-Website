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

export interface SolutionCategoryLayoutProps {
  pageNumber?: string; // e.g. "01"
}

const SolutionCategoryLayout: React.FC<PropsWithChildren<SolutionCategoryLayoutProps>> = ({ children, pageNumber: _pageNumber = "01" }) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroLineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // heading reveal for first h1/h2 inside children
      const h1 = pageRef.current?.querySelector("h1");
      const headings = pageRef.current?.querySelectorAll("h1, h2");
      if (headings) headings.forEach((h) => headingReveal(h as HTMLElement));

      // hero line: insert if a h1 exists
      if (h1) {
        // create an inline svg after h1 if not present
        if (!heroLineRef.current) {
          // animate by drawing the path if present
          const inserted = document.createElement("div");
          inserted.innerHTML = `<svg viewBox=\"0 0 700 3\" width=\"100%\" height=\"3\" style=\"margin-top:20px;overflow:visible\"><path d=\"M 0,1.5 L 700,1.5\" stroke=\"rgba(10,14,26,0.15)\" stroke-width=\"1\" fill=\"none\" /></svg>`;
          h1.insertAdjacentElement("afterend", inserted.firstElementChild as Element);
          const p = (h1.nextElementSibling as SVGElement)?.querySelector("path") as SVGPathElement | null;
          if (p) {
            gsap.fromTo(
              p,
              { drawSVG: "0% 0%" },
              { drawSVG: "0% 100%", duration: 1.1, ease: "power2.inOut", delay: 0.3 }
            );
          }
        }
      }

      // reveal paragraphs, images, cards
      const paras = pageRef.current?.querySelectorAll("p, img, ul, .card, section");
      paras && paras.forEach((p, i) => revealOnScroll({ current: p }, { delay: i * 0.03, y: 28 }));
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} style={{ background: C.bg, color: C.ink }}>
      <PageMeta />
      <div style={{ borderBottom: `1px solid ${C.inkDim}` }} className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Hero/children remain provided by pages — layout only provides the canvas and utilities */}
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">{children}</main>
    </div>
  );
};

export default SolutionCategoryLayout;
