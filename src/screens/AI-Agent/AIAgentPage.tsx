import PageMeta from "@/seo/PageMeta";
import { useEffect } from "react";
import PageSidebar from "./components/PageSidebar";
import PageHero from "./components/PageHero";
import ProblemSection from "./components/ProblemSection";
import WhatIsItSection from "./components/WhatIsItSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ArchitectureSection from "./components/ArchitectureSection";
import UseCasesSection from "./components/UseCasesSection";
import ImpactSection from "./components/ImpactSection";
import ComparisonSection from "./components/ComparisonSection";
import TrustSection from "./components/TrustSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export const META = {
  title: "Custom AI Agent for Your Database | TechCompiler DataSystems",
  description:
    "TechCompiler's Custom AI Agent installs directly inside your database infrastructure — giving your team instant, natural-language answers about your data without exposing it to third-party servers. Private by architecture.",
  canonical: "/ai-agent",
  ogImage: "/og-ai-agent.png",
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TechCompiler Custom AI Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description: META.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  publisher: {
    "@type": "Organization",
    name: "TechCompiler DataSystems",
    url: "https://www.techcompiler.com",
  },
};

export default function AIAgentPage() {
  // Global scroll-reveal observer
  useEffect(() => {
    const animObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            animObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      const d = el.getAttribute("data-animate-delay");
      if (d) (el as HTMLElement).style.transitionDelay = `${d}ms`;
      animObs.observe(el);
    });

    return () => animObs.disconnect();
  }, []);

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      <PageMeta />
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms ease, transform 600ms cubic-bezier(0.34, 1.10, 0.64, 1);
        }
        [data-animate].in-view {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-animate] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <PageSidebar />

      <PageHero />
      <ProblemSection />
      <WhatIsItSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <UseCasesSection />
      <ImpactSection />
      <ComparisonSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
