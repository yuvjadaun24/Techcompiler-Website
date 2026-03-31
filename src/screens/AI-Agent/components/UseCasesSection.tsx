import { useState, useEffect, useRef } from "react";

const syne = "'Syne', sans-serif";
const dmSans = "'DM Sans', sans-serif";
const mono = "'DM Mono', monospace";

interface TabData {
  label: string;
  headline: string;
  icon: JSX.Element;
  queries: { q: string; a: string }[];
  chart: (visible: boolean) => JSX.Element;
}

const TABS: TabData[] = [
  {
    label: "Sales & Revenue",
    headline: "Close faster. Forecast better.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14l4-5 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    queries: [
      { q: "Which leads have been inactive for 30+ days?", a: "47 leads \u2014 \u20B92.3Cr potential. Top 5: Acme Corp, Zenith Ltd, Orbit Inc, Nova Tech, Apex Labs" },
      { q: "What\u2019s our average deal cycle this quarter vs last?", a: "31 days (down from 44). Enterprise deals: 58 days." },
      { q: "Which product SKU has the highest attach rate?", a: "SKU-2291 (CRM Module) \u2014 73% attach in Enterprise tier" },
    ],
    chart: (vis) => (
      <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
        {/* Funnel */}
        {[
          { y: 5, w: 140, label: "Leads", val: "2,340", color: "rgba(200,255,0,0.1)" },
          { y: 35, w: 100, label: "Prospects", val: "890", color: "rgba(200,255,0,0.1)" },
          { y: 65, w: 60, label: "Closed", val: "312", color: "rgba(200,255,0,0.1)" },
        ].map((bar, i) => (
          <g key={i}>
            <rect
              x={(160 - bar.w) / 2} y={bar.y} width={vis ? bar.w : 0} height="24" rx="4"
              fill={bar.color}
              style={{ transition: `width 600ms ease ${i * 150}ms` }}
            />
            <text x="10" y={bar.y + 16} style={{ fontFamily: mono, fontSize: 9, fill: "#6B7280" }}>{bar.label}</text>
            <text x="150" y={bar.y + 16} textAnchor="end" style={{ fontFamily: mono, fontSize: 9, fill: "#C8FF00", fontWeight: 500 }}>{bar.val}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    label: "Finance & Operations",
    headline: "Reports in seconds. Not spreadsheets.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>,
    queries: [
      { q: "Cash flow projection for next 90 days?", a: "Projected net: +\u20B918.4L. 3 large receivables pending." },
      { q: "Which departments are over-budget this month?", a: "Marketing (+12%), IT (+7%). Engineering on track." },
      { q: "Vendor payment status summary?", a: "14 paid, 6 pending (\u20B94.1L), 2 overdue." },
    ],
    chart: (vis) => (
      <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
        {[
          { x: 10, h: 60, label: "Mkt", color: "#F87171" },
          { x: 45, h: 45, label: "IT", color: "#FBBF24" },
          { x: 80, h: 70, label: "Eng", color: "#34D399" },
          { x: 115, h: 35, label: "HR", color: "#C8FF00" },
        ].map((bar, i) => (
          <g key={i}>
            <rect
              x={bar.x} y={vis ? 90 - bar.h : 90} width="25" height={vis ? bar.h : 0} rx="3"
              fill={bar.color} opacity="0.7"
              style={{ transition: `all 600ms ease ${i * 100}ms` }}
            />
            <text x={bar.x + 12} y="98" textAnchor="middle" style={{ fontFamily: mono, fontSize: 8, fill: "#9CA3AF" }}>{bar.label}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    label: "Customer Success",
    headline: "Know every customer. Instantly.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M2 16c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.2" /><path d="M12 5l1.5 1.5L12 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>,
    queries: [
      { q: "Which accounts are at highest churn risk?", a: "8 accounts flagged. NPS < 6, usage down >40% MoM." },
      { q: "Average resolution time for P1 tickets this week?", a: "3.2 hours. Up from 2.8h last week \u2014 Infra team understaffed?" },
      { q: "Customers on legacy plan who haven\u2019t upgraded?", a: "134 accounts \u2014 \u20B96.8Cr upgrade opportunity" },
    ],
    chart: (vis) => {
      const segments = [
        { pct: 35, color: "#C8FF00", label: "Bug" },
        { pct: 25, color: "#F87171", label: "Feature" },
        { pct: 22, color: "#FBBF24", label: "Support" },
        { pct: 18, color: "#34D399", label: "Other" },
      ];
      let offset = 0;
      return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {segments.map((seg, i) => {
            const r = 40;
            const circ = 2 * Math.PI * r;
            const dash = (seg.pct / 100) * circ;
            const gap = circ - dash;
            const start = offset;
            offset += seg.pct;
            return (
              <circle
                key={i} cx="60" cy="60" r={r}
                fill="none" stroke={seg.color} strokeWidth="14"
                strokeDasharray={`${vis ? dash : 0} ${vis ? gap : circ}`}
                strokeDashoffset={-(start / 100) * circ}
                style={{ transition: `stroke-dasharray 800ms ease ${i * 120}ms` }}
                transform="rotate(-90 60 60)"
              />
            );
          })}
          <text x="60" y="64" textAnchor="middle" style={{ fontFamily: mono, fontSize: 10, fill: "#0D1117", fontWeight: 500 }}>Tickets</text>
        </svg>
      );
    },
  },
  {
    label: "Product & Engineering",
    headline: "Ship what users actually need.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 3l-3 3 3 3M13 9l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 2l-2 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
    queries: [
      { q: "Most-used features in the last 30 days?", a: "Dashboard (94% MAU), Reports (71%), API (58%), Exports (34%)" },
      { q: "Which user segments have the lowest feature adoption?", a: "SMB tier: only 38% use automations. Opportunity for onboarding." },
      { q: "Bug reports by module this sprint?", a: "Auth: 3, Payments: 7, Reports: 2, Onboarding: 11 (\u2191 attention needed)" },
    ],
    chart: (vis) => (
      <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
        {[
          { label: "Dashboard", pct: 94 },
          { label: "Reports", pct: 71 },
          { label: "API", pct: 58 },
          { label: "Exports", pct: 34 },
        ].map((f, i) => {
          const y = 5 + i * 24;
          const w = (f.pct / 100) * 100;
          return (
            <g key={i}>
              <text x="0" y={y + 12} style={{ fontFamily: mono, fontSize: 9, fill: "#6B7280" }}>{f.label}</text>
              <rect
                x="58" y={y} width={vis ? w : 0} height="16" rx="3"
                fill="rgba(200,255,0,0.1)"
                style={{ transition: `width 600ms ease ${i * 100}ms` }}
              />
              <text x={60 + (vis ? w : 0) + 4} y={y + 12} style={{ fontFamily: mono, fontSize: 9, fill: "#C8FF00", fontWeight: 500 }}>{f.pct}%</text>
            </g>
          );
        })}
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [chartVis, setChartVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChartVis(false);
    const t = requestAnimationFrame(() => setChartVis(true));
    return () => cancelAnimationFrame(t);
  }, [activeTab]);

  const tab = TABS[activeTab];

  return (
    <section id="use-cases" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div data-animate style={{ textAlign: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Use Cases
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
          margin: "0 0 40px",
        }}
      >
        Built for Every Team That Runs on Data
      </h2>

      {/* Tabs */}
      <div
        data-animate
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 40,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          paddingBottom: 0,
        }}
      >
        {TABS.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: i === activeTab ? syne : dmSans,
              fontSize: 14,
              fontWeight: i === activeTab ? 600 : 400,
              color: i === activeTab ? "#0D1117" : "#6B7280",
              borderBottom: i === activeTab ? "2px solid #C8FF00" : "2px solid transparent",
              padding: "8px 4px",
              transition: "all 200ms ease",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ color: i === activeTab ? "#C8FF00" : "#9CA3AF" }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        ref={ref}
        key={activeTab}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 32,
          animation: "tab-fade 280ms ease forwards",
        }}
        className="md:!grid-cols-[1fr_200px]"
      >
        <div>
          <h3 style={{ fontFamily: syne, fontSize: 22, fontWeight: 700, color: "#0D1117", marginBottom: 24 }}>
            {tab.headline}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tab.queries.map((qr, qi) => (
              <div
                key={qi}
                style={{
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(24px)",
                  outline: "1px solid rgba(0,0,0,0.05)",
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", fontStyle: "italic", marginBottom: 6 }}>
                  {qr.q}
                </div>
                <div style={{ fontFamily: mono, fontSize: 12, color: "#0D1117", fontWeight: 500, lineHeight: 1.5 }}>
                  {qr.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {tab.chart(chartVis)}
        </div>
      </div>

      <style>{`
        @keyframes tab-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .md\\:!grid-cols-\\[1fr_200px\\] { grid-template-columns: 1fr 200px !important; }
        }
      `}</style>
    </section>
  );
}
