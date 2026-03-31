import { useState, useRef } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

const FAQS = [
  {
    q: "Does the AI agent send my data to any external server or cloud?",
    a: "No. TechCompiler\u2019s AI Agent is deployed entirely within your own infrastructure. Your data never leaves your servers. There is no external API call that transmits data rows, queries, or results to any third party \u2014 including TechCompiler. The agent operates like software you own, not a service you subscribe to.",
  },
  {
    q: "What databases does it support?",
    a: "The agent works with all major relational databases \u2014 PostgreSQL, MySQL, Microsoft SQL Server, Oracle, and SQLite. We also support cloud warehouses including BigQuery, Snowflake, and Redshift. NoSQL support (MongoDB, DynamoDB) is available on request for structured collections.",
  },
  {
    q: "How long does deployment take?",
    a: "Most deployments complete within 3 working days. Day 1: schema mapping and analysis. Days 2\u20133: business context training and accuracy calibration. Day 4 onwards: your team is live. Complex multi-database setups may take up to 7 days.",
  },
  {
    q: "What technical expertise does my team need to use it?",
    a: "None. The agent is designed for non-technical users. Your analysts, managers, and executives ask questions in plain English and receive answers directly. No SQL, no dashboards, no training required.",
  },
  {
    q: "How accurate are the answers?",
    a: "During deployment, we establish a set of known ground-truth queries against your database. The agent is calibrated until it achieves consistent accuracy on these benchmarks before going live. It also communicates its confidence level with every response \u2014 if it\u2019s uncertain, it says so.",
  },
  {
    q: "Can I control who in my organisation can use it?",
    a: "Yes. Access is fully role-based. You define which users, teams, or departments can access which parts of the database through the agent. An HR manager can query the HR schema but not financial records, for example.",
  },
  {
    q: "What happens if our database schema changes?",
    a: "Schema changes are detected and flagged automatically. Minor changes (new columns, renamed fields) are handled by the agent during its next calibration cycle. Major schema changes (new tables, restructuring) require a brief recalibration session \u2014 typically half a day.",
  },
  {
    q: "Does it work with real-time data or only historical data?",
    a: "Both. The agent queries your live database directly \u2014 so any data that exists in your database at the time of the question is accessible. There is no caching delay or data sync lag.",
  },
  {
    q: "Is there a limit to how many questions our team can ask?",
    a: "No query limits. The agent is deployed as infrastructure within your environment, so usage scales with your own hardware capacity, not a metered subscription tier.",
  },
  {
    q: "What makes this different from just giving our team access to a BI tool?",
    a: "BI tools require someone to pre-build dashboards for every question you might ever ask \u2014 and they\u2019re limited to those pre-built views. Our agent handles any question, including ones no one anticipated. It also understands relationships between tables that BI tools can\u2019t navigate without manual joins, and it communicates in natural language rather than charts and graphs.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.background = "rgba(0,0,0,0.015)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
        }}
      >
        <span style={{ fontFamily: syne, fontSize: 15, fontWeight: 600, color: "#0D1117", paddingRight: 16 }}>
          {faq.q}
        </span>
        <span
          style={{
            fontFamily: syne,
            fontSize: 20,
            fontWeight: 300,
            color: "#9CA3AF",
            transition: "transform 220ms ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }} ref={contentRef}>
          <div style={{ padding: "0 0 20px", fontFamily: dmSans, fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "120px 24px", maxWidth: 760, margin: "0 auto" }}>
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          FAQ
        </span>
      </div>
      <h2
        data-animate
        style={{
          fontFamily: syne,
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700,
          color: "#0D1117",
          textAlign: "center",
          margin: "0 0 48px",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div data-animate>
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={i}
            faq={faq}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
