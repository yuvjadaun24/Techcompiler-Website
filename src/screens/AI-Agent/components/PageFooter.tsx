const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

export default function PageFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "40px 24px",
        background: "#F8F9FB",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Left */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2, marginBottom: 4 }}>
            <span style={{ fontFamily: syne, fontWeight: 700, fontSize: 14, color: "#0D1117", letterSpacing: "0.04em" }}>
              TECHCOMPILER
            </span>
            <span style={{ fontFamily: mono, fontSize: 10, color: "#9CA3AF" }}>DataSystems</span>
          </div>
          <div style={{ fontFamily: dmSans, fontSize: 12, color: "#9CA3AF" }}>
            &copy; {new Date().getFullYear()} TechCompiler DataSystems. All rights reserved.
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Contact" ? "/Contact-Us" : "#"}
              style={{
                fontFamily: dmSans,
                fontSize: 13,
                color: "#6B7280",
                textDecoration: "none",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#0D1117"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
