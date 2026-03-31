const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

export default function CTASection() {
  return (
    <section
      id="cta"
      style={{
        padding: "120px 24px",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,255,0,0.1) 0%, rgba(248,249,251,0) 70%)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div data-animate style={{ marginBottom: 12 }}>
          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              color: "#9CA3AF",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Get Started
          </span>
        </div>

        <h2
          data-animate
          style={{
            fontFamily: syne,
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "#0D1117",
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}
        >
          Your answers are already in your database.
        </h2>

        <p
          data-animate
          style={{
            fontFamily: dmSans,
            fontSize: 18,
            color: "#6B7280",
            lineHeight: 1.6,
            margin: "0 0 40px",
          }}
        >
          We'll help you unlock them — in under 3 days, without moving a single
          byte of data outside your walls.
        </p>

        {/* CTAs */}
        <div data-animate style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
          <a
            href="/Contact-Us"
            style={{
              display: "inline-block",
              fontFamily: syne,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              background: "#0D1117",
              borderRadius: 999,
              padding: "14px 32px",
              textDecoration: "none",
              transition: "transform 250ms ease, box-shadow 250ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Free Demo &rarr;
          </a>
          <a
            href="/Contact-Us"
            style={{
              display: "inline-block",
              fontFamily: syne,
              fontSize: 14,
              fontWeight: 600,
              color: "#0D1117",
              background: "transparent",
              outline: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 999,
              padding: "14px 32px",
              textDecoration: "none",
              transition: "background 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Talk to our team
          </a>
        </div>

        {/* Reassurance */}
        <div
          data-animate
          style={{
            fontFamily: mono,
            fontSize: 11,
            color: "#9CA3AF",
            marginBottom: 40,
          }}
        >
          No commitment. &middot; Setup in 3 days. &middot; Your data never leaves your servers.
        </div>

        {/* Floating testimonial */}
        <div
          data-animate
          style={{
            display: "inline-block",
            maxWidth: 280,
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(24px)",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            outline: "1px solid rgba(0,0,0,0.05)",
            padding: "16px 20px",
            textAlign: "left",
            animation: "cta-drift 6s ease-in-out infinite",
          }}
        >
          <div style={{ fontFamily: dmSans, fontSize: 13, fontStyle: "italic", color: "#6B7280", lineHeight: 1.55, marginBottom: 8 }}>
            "We used to spend 3 days preparing for board meetings. Now we walk in and ask the agent."
          </div>
          <div style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF" }}>
            — Head of Strategy, Series B SaaS Company
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cta-drift {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
