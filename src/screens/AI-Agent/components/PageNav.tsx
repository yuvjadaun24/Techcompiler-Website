const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const NAV_LINKS = [
  { label: "Overview", id: "overview" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Use Cases", id: "use-cases" },
  { label: "FAQ", id: "faq" },
];

export default function PageNav({ activeSection }: { activeSection: string }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 60,
        background: "rgba(248,249,251,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        maxWidth: "100%",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, flexShrink: 0 }}>
        <span style={{ fontFamily: syne, fontWeight: 700, fontSize: 14, color: "#0D1117", letterSpacing: "0.04em" }}>
          TECHCOMPILER
        </span>
        <span style={{ fontFamily: mono, fontSize: 10, color: "#9CA3AF" }}>DataSystems</span>
      </div>

      {/* Center links — hidden on small screens */}
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}
        className="hidden md:flex"
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: dmSans,
                fontSize: 13,
                color: isActive ? "#0D1117" : "#6B7280",
                fontWeight: isActive ? 500 : 400,
                padding: "4px 0",
                borderBottom: isActive ? "2px solid #C8FF00" : "2px solid transparent",
                transition: "all 200ms ease",
              }}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo("cta")}
        style={{
          fontFamily: syne,
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          background: "#0D1117",
          border: "none",
          borderRadius: 999,
          padding: "8px 18px",
          cursor: "pointer",
          transition: "box-shadow 250ms ease, transform 250ms ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Book a Demo
      </button>
    </nav>
  );
}
