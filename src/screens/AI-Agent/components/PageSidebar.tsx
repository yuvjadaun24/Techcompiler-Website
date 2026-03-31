import { useEffect, useState } from "react";

const dmSans = "'DM Sans', sans-serif";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "what-is-it", label: "What Is It" },
  { id: "how-it-works", label: "How It Works" },
  { id: "architecture", label: "Architecture" },
  { id: "use-cases", label: "Use Cases" },
  { id: "impact", label: "Impact" },
  { id: "comparison", label: "Comparison" },
  { id: "trust", label: "Why Trust Us" },
  { id: "faq", label: "FAQ" },
] as const;

export default function PageSidebar() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Page table of contents"
      style={{
        position: "fixed",
        left: 32,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        width: 160,
      }}
    >
      <style>{`
        @media (max-width: 1399px) {
          .ai-sidebar-toc { display: none !important; }
        }
      `}</style>

      <div className="ai-sidebar-toc" style={{ display: "flex", flexDirection: "column" }}>
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                textAlign: "left",
              }}
            >
              {/* Indicator line */}
              <span
                style={{
                  width: 2,
                  height: isActive ? 24 : 18,
                  borderRadius: 999,
                  background: isActive ? "#C8FF00" : "rgba(0,0,0,0.12)",
                  transition: "background 250ms ease, height 250ms ease",
                  flexShrink: 0,
                }}
              />
              {/* Label */}
              <span
                style={{
                  fontFamily: dmSans,
                  fontSize: 12,
                  color: isActive ? "#0D1117" : "#9CA3AF",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 250ms ease, font-weight 150ms ease",
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#6B7280";
                    const line = e.currentTarget.previousElementSibling as HTMLElement;
                    if (line) line.style.background = "rgba(0,0,0,0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#9CA3AF";
                    const line = e.currentTarget.previousElementSibling as HTMLElement;
                    if (line) line.style.background = "rgba(0,0,0,0.12)";
                  }
                }}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
