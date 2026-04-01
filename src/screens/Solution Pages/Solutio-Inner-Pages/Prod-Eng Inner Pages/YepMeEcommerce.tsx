import CaseStudyLayout from "@/components/solutions/CaseStudyLayout";
import yepme1 from "@/assets/yepme1.png";
import yepme2 from "@/assets/yepme2.png";
import yepmeHero from "@/assets/yepme-hero-img.png";

// Design tokens matching CaseStudyLayout palette
const C = {
  ink: "#0A0E1A",
  inkMuted: "#6B7280",
  accent: "#C8FF00",
  accentBg: "rgba(200,255,0,0.10)",
  bgAlt: "#F7F7F5",
  dark: "#0A0E1A",
  border: "rgba(10,14,26,0.08)",
};

const metrics = [
  { value: "ASP.NET MVC", label: "Rebuilt Platform" },
  { value: "2", label: "Mobile Apps Launched" },
  { value: "0 to Full", label: "SEO Coverage" },
  { value: "50k+", label: "SKUs Supported" },
];

const challenges = [
  {
    title: "Legacy 2.0 Architecture",
    body: "The platform was originally built in 2010 on ASP.NET 2.0 without layered architecture, making feature development slow and each change a regression risk.",
  },
  {
    title: "No Mobile Presence",
    body: "With mobile commerce accelerating, Yepme had no mobile-optimised website and no native apps, blocking a critical and growing customer segment entirely.",
  },
  {
    title: "Zero SEO Capability",
    body: "The existing platform generated non-indexable pages, preventing search engine discovery and closing off organic acquisition as a growth channel.",
  },
  {
    title: "Scalability Ceiling",
    body: "The monolithic structure could not support the catalogue volume and concurrent user load required as the private label fashion brand expanded.",
  },
];

const timeline = [
  {
    phase: "01 Discovery",
    duration: "2 weeks",
    desc: "Full audit of the existing ASP.NET 2.0 codebase, database schema review, and dependency mapping to define a migration strategy with minimised downtime.",
  },
  {
    phase: "02 Architecture",
    duration: "4 weeks",
    desc: "MVC 4.0 application structure designed with clear separation of concerns, a shared component library defined, and the data access layer reengineered.",
  },
  {
    phase: "03 Core Platform",
    duration: "10 weeks",
    desc: "E-commerce engine rebuilt end-to-end: product catalogue, faceted search, cart, checkout, payment gateway integration, and order management.",
  },
  {
    phase: "04 SEO & Mobile Web",
    duration: "4 weeks",
    desc: "Semantic HTML5 markup, clean URL structure, XML sitemaps, and a fully responsive CSS layout implemented across all catalogue and checkout flows.",
  },
  {
    phase: "05 Mobile Apps",
    duration: "8 weeks",
    desc: "Native iOS and Android applications built against the same product and order APIs, providing feature parity with the desktop experience on launch day.",
  },
  {
    phase: "06 QA & Launch",
    duration: "3 weeks",
    desc: "Cross-browser and device testing executed, load testing run against peak traffic projections, and a phased DNS cutover performed with rollback plan in place.",
  },
];

const techStack = [
  "ASP.NET MVC 4.0",
  "C#",
  ".NET 4.0",
  "SQL Server",
  "HTML5",
  "jQuery",
  "IIS 7",
  "XAML",
  "Team Foundation Server",
  "iOS SDK",
  "Android SDK",
];

const results = [
  {
    stat: "2 apps shipped",
    detail: "Native iOS and Android applications launched alongside the rebuilt web platform, giving Yepme a full mobile presence on day one.",
  },
  {
    stat: "Full SEO coverage",
    detail: "Every page type gained clean URLs, canonical tags, and semantic markup, opening organic search as a viable acquisition channel.",
  },
  {
    stat: "MVC architecture",
    detail: "The layered ASP.NET MVC codebase gave the internal development team the structure needed to ship features independently and safely.",
  },
  {
    stat: "Social commerce ready",
    detail: "Facebook, Instagram, Twitter, and Pinterest integrations built at the platform level, enabling product sharing and referral traffic from launch.",
  },
];

const YepmeEcommerce = () => {
  return (
    <CaseStudyLayout parentCategory="Product Engineering">
      {/* Title */}
      <h1
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: C.ink,
          marginBottom: "0.5rem",
        }}
      >
        Yepme E-Commerce Platform Rebuild
      </h1>
      <p style={{ color: C.inkMuted, fontSize: "1.125rem", marginBottom: "3rem" }}>
        Fashion e-commerce &middot; Platform migration &middot; iOS &amp; Android &middot; SEO
      </p>

      {/* Metrics bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: C.border,
          border: `1px solid ${C.border}`,
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "4rem",
        }}
      >
        {metrics.map((m) => (
          <div key={m.label} style={{ background: "#fff", padding: "1.75rem 1.5rem" }}>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: C.ink,
                marginBottom: "0.25rem",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: C.inkMuted,
                textTransform: "uppercase" as const,
                letterSpacing: "0.06em",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Hero image */}
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "4rem",
          background: C.bgAlt,
        }}
      >
        <img
          src={yepmeHero}
          alt="Yepme e-commerce platform"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>

      {/* About */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "1rem",
          }}
        >
          About Yepme
        </h2>
        <p style={{ color: C.inkMuted, lineHeight: 1.75, fontSize: "1.0625rem", maxWidth: "70ch" }}>
          Yepme is an online fashion retailer founded in April 2011 and headquartered in Gurgaon, India.
          The company specialises in men{"'"}s and women{"'"}s garments and accessories, and positioned
          itself as a fully private-label fashion brand in August 2011. Operating in a high-velocity
          market, Yepme needed a platform capable of handling a growing catalogue, scaling through
          promotional traffic spikes, and reaching customers across desktop and mobile.
        </p>
      </section>

      {/* Challenges */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "1.75rem",
          }}
        >
          The Challenge
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {challenges.map((c) => (
            <div
              key={c.title}
              style={{
                background: C.bgAlt,
                borderRadius: "12px",
                padding: "1.5rem",
                borderLeft: `3px solid ${C.accent}`,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  color: C.ink,
                  marginBottom: "0.5rem",
                  fontSize: "0.9375rem",
                }}
              >
                {c.title}
              </div>
              <p style={{ color: C.inkMuted, fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "1rem",
          }}
        >
          The Solution
        </h2>
        <p
          style={{
            color: C.inkMuted,
            lineHeight: 1.75,
            fontSize: "1.0625rem",
            maxWidth: "70ch",
            marginBottom: "1rem",
          }}
        >
          TechCompiler designed and delivered a full platform migration from ASP.NET 2.0 to ASP.NET MVC
          4.0 using a clean layered architecture. The rebuild covered the complete e-commerce engine,
          a responsive HTML5 front-end, and full SEO instrumentation including structured URLs, canonical
          tags, XML sitemaps, and semantic markup applied across every page type.
        </p>
        <p style={{ color: C.inkMuted, lineHeight: 1.75, fontSize: "1.0625rem", maxWidth: "70ch" }}>
          Alongside the web platform, TechCompiler delivered native iOS and Android applications sharing
          the same product catalogue and order management APIs. Social media integration across Facebook,
          Instagram, Twitter, and Pinterest was built into the platform at launch, establishing a
          consistent cross-channel presence from day one.
        </p>
      </section>

      {/* Timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "2rem",
          }}
        >
          Project Timeline
        </h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
          {timeline.map((item, i) => (
            <div
              key={item.phase}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "0 2.5rem",
                paddingBottom: "2rem",
                position: "relative" as const,
              }}
            >
              {/* Left */}
              <div style={{ textAlign: "right" as const, paddingRight: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: C.ink,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase" as const,
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.phase}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    background: C.accentBg,
                    color: "#4d5800",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {item.duration}
                </span>
              </div>

              {/* Right */}
              <div style={{ position: "relative" as const, paddingLeft: "1.5rem" }}>
                <div
                  style={{
                    position: "absolute" as const,
                    left: "0",
                    top: "4px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: C.accent,
                    border: `2px solid ${C.ink}`,
                    zIndex: 1,
                  }}
                />
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute" as const,
                      left: "4px",
                      top: "16px",
                      bottom: "-0.5rem",
                      width: "1px",
                      background: C.border,
                    }}
                  />
                )}
                <p style={{ color: C.inkMuted, fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "1.5rem",
          }}
        >
          Platform Screenshots
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            { src: yepme1, caption: "Homepage & Product Catalogue" },
            { src: yepme2, caption: "Product Listing & Category Views" },
          ].map((img) => (
            <div
              key={img.caption}
              style={{
                background: C.bgAlt,
                borderRadius: "12px",
                overflow: "hidden",
                border: `1px solid ${C.border}`,
              }}
            >
              <img src={img.src} alt={img.caption} style={{ width: "100%", display: "block" }} />
              <div
                style={{
                  padding: "0.75rem 1rem",
                  fontSize: "0.8125rem",
                  color: C.inkMuted,
                  fontWeight: 500,
                }}
              >
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: C.ink,
            marginBottom: "1.25rem",
          }}
        >
          Technology Used
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.625rem" }}>
          {techStack.map((tech) => (
            <span
              key={tech}
              style={{
                background: C.bgAlt,
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
                padding: "0.375rem 0.875rem",
                fontSize: "0.875rem",
                color: C.ink,
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Results */}
      <section
        style={{
          background: C.dark,
          borderRadius: "16px",
          padding: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "white",
            marginBottom: "1.75rem",
          }}
        >
          Results
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {results.map((r) => (
            <div key={r.stat}>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: C.accent,
                  marginBottom: "0.5rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                }}
              >
                {r.stat}
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default YepmeEcommerce;
