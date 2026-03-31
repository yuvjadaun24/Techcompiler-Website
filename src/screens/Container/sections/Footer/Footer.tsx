import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import logo from "@/assets/TC-Logo-Main.png";
import { useDropdown } from "@/context/DropdownContext";
import { useNavigate } from "react-router-dom";

/* â”€â”€â”€ BARE SOCIAL ICON â€” no container, raw SVG â”€â”€â”€ */
function SocialIcon({ children, href }: { children: ReactNode; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        transition: "transform 180ms ease",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 180ms ease" }}
      >
        {children}
      </svg>
    </a>
  );
}

/* â”€â”€â”€ FOOTER LINK â€” colour-only hover, no slide â”€â”€â”€ */
function FooterLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: 13,
        color: hovered ? "#FAFAFA" : "rgba(255,255,255,0.46)",
        padding: "7px 0",
        cursor: "pointer",
        transition: "color 160ms ease",
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
}

/* â”€â”€â”€ LEGAL LINK â”€â”€â”€ */
function LegalLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "DM Mono, monospace",
        fontSize: 11,
        color: hovered ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.26)",
        transition: "color 160ms ease",
        cursor: "pointer",
      }}
    >
      {label}
    </span>
  );
}

/* â”€â”€â”€ CTA BUTTON â”€â”€â”€ */
function CtaButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#E4E4E7" : "#FAFAFA",
        color: "#09090B",
        fontFamily: "Syne, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        padding: "11px 22px",
        borderRadius: 999,
        border: "none",
        width: "100%",
        textAlign: "center",
        cursor: "pointer",
        display: "block",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        transition: "background 180ms ease, transform 180ms ease",
      }}
    >
      Get in touch â†’
    </button>
  );
}

/* â”€â”€â”€ EMAIL LINK â”€â”€â”€ */
function EmailLink() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:hello@techcompiler.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        marginTop: 14,
        textAlign: "center",
        fontFamily: "DM Mono, monospace",
        fontSize: 11,
        color: hovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.30)",
        transition: "color 160ms ease",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      hello@techcompiler.com
    </a>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   FOOTER COMPONENT
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export const FooterByAnima = (): JSX.Element => {
  const { openServices, openTechnologies } = useDropdown();
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement>(null);
  const [cardHovered, setCardHovered] = useState(false);

  // â”€â”€ Navigation helpers â”€â”€
  const handleLinkClick = useCallback(
    (link: string) => {
      const homeUrl = new URL(window.location.href);
      homeUrl.pathname = "/";
      navigate(homeUrl.pathname);
      window.scrollTo(0, 0);
      if (link === "Services") setTimeout(() => openServices(), 100);
      else if (link === "Technologies") setTimeout(() => openTechnologies(), 100);
    },
    [navigate, openServices, openTechnologies]
  );

  const getLinkPath = (link: string) => {
    switch (link) {
      case "Home":       return "/";
      case "Clients":    return "/Our-Clients";
      case "Careers":    return "/Careers";
      case "Contact Us": return "/Contact-Us";
      default:           return "/";
    }
  };

  const navLinks = ["Home", "Services", "Technologies", "Clients", "Careers", "Contact Us"];
  const serviceLinks = [
    "Custom AI Agent",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Data Engineering",
    "Cloud Solutions",
  ];

  // â”€â”€ Scroll-in animations â”€â”€
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const footer = footerRef.current;
    if (!footer) return;

    const targets = footer.querySelectorAll<HTMLElement>("[data-fade]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{ background: "#09090B", position: "relative" }}
    >
      <style>{`
        @keyframes aurora-shift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 0 2.5px rgba(34,197,94,0.22); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0.07); }
        }
        .footer-aurora-line {
          height: 1.5px;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent          0%,
            rgba(99,102,241,0)   8%,
            rgba(99,102,241,0.7) 20%,
            rgba(20,184,166,0.8) 38%,
            rgba(99,102,241,0.9) 50%,
            rgba(245,158,11,0.6) 68%,
            rgba(99,102,241,0.7) 82%,
            rgba(99,102,241,0)   92%,
            transparent          100%
          );
          background-size: 300% 100%;
          animation: aurora-shift 6s ease-in-out infinite alternate;
        }
        [data-fade] {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 500ms ease, transform 500ms ease;
        }
        [data-fade].footer-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-aurora-line { animation: none !important; }
          [data-fade] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Aurora + structural border */}
      <div className="footer-aurora-line" />
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

      {/* Main body â€” 4-column grid */}
      <div
        className="grid grid-cols-[28fr_20fr_20fr_32fr] gap-12 max-w-[1200px] mx-auto pt-14 pb-12 px-20 max-lg:grid-cols-2 max-lg:px-12 max-lg:pt-12 max-lg:pb-12 max-md:grid-cols-1 max-md:px-6 max-md:pt-10 max-md:pb-10"
      >
        {/* Col 1 â€” Brand */}
        <div data-fade="" style={{ transitionDelay: "0ms" }}>
          <img src={logo} alt="TechCompiler" style={{ width: 110 }} />
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 13,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 200,
              marginTop: 18,
              marginBottom: 24,
            }}
          >
            Creating bold digital experiences
            <br />
            that redefine brands
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {/* LinkedIn */}
            <SocialIcon href="https://linkedin.com">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </SocialIcon>
            {/* Twitter/X */}
            <SocialIcon href="https://x.com">
              <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.768L20 4" />
            </SocialIcon>
            {/* GitHub */}
            <SocialIcon href="https://github.com">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </SocialIcon>
          </div>
        </div>

        {/* Col 2 â€” Navigate */}
        <div data-fade="" style={{ transitionDelay: "80ms" }}>
          <div
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 18,
              textTransform: "uppercase",
            }}
          >
            Navigate
          </div>
          <div>
            {navLinks.map((link) => (
              <FooterLink
                key={link}
                label={link}
                onClick={() => {
                  if (link === "Services" || link === "Technologies") {
                    handleLinkClick(link);
                  } else {
                    navigate(getLinkPath(link));
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Col 3 â€” Services */}
        <div data-fade="" style={{ transitionDelay: "160ms" }}>
          <div
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 18,
              textTransform: "uppercase",
            }}
          >
            Services
          </div>
          <div>
            {serviceLinks.map((link) => (
              <FooterLink
                key={link}
                label={link}
                onClick={() => navigate("/Services")}
              />
            ))}
          </div>
        </div>

        {/* Col 4 â€” CTA Card */}
        <div
          data-fade=""
          style={{ transitionDelay: "240ms" }}
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
        >
          <div
            style={{
              background: "#111113",
              borderRadius: 16,
              boxShadow: cardHovered
                ? "inset 0 0 0 1px rgba(255,255,255,0.14)"
                : "inset 0 0 0 1px rgba(255,255,255,0.08)",
              padding: "28px 28px 24px",
              transition: "box-shadow 250ms ease",
            }}
          >
            {/* Availability dot */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 0 2.5px rgba(34,197,94,0.22)",
                  animation: "breathe 2.4s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                Open to new projects
              </span>
            </div>

            {/* Headline */}
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#FAFAFA",
                lineHeight: 1.3,
                marginBottom: 8,
              }}
            >
              Let's build something
              <br />
              remarkable.
            </div>

            {/* Sub-text */}
            <div
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.42)",
                marginBottom: 20,
                lineHeight: 1.55,
              }}
            >
              We'd love to hear about your next project.
            </div>

            <CtaButton onClick={() => navigate("/Contact-Us")} />
            <EmailLink />
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div
        data-fade=""
        style={{
          height: 48,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          flexWrap: "wrap",
          gap: 12,
          transitionDelay: "300ms",
        }}
        className="max-lg:px-12 max-md:px-6 max-md:h-auto max-md:py-5 max-md:flex-col max-md:items-center"
      >
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.22)",
          }}
        >
          TechCompiler Data Systems Pvt. Ltd.
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <LegalLink label="Privacy Policy" />
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>Â·</span>
          <LegalLink label="Terms of Service" />
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>Â·</span>
          <LegalLink label="Sitemap" />
        </div>
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.22)",
          }}
        >
          Â© 2025 All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
