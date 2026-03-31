import { useState, useEffect, useRef, useCallback } from "react";

//  Fonts 
const mono = "'DM Mono', monospace";

//  Shadow constants 
const SHADOW_ACTIVE =
  "0 2px 4px rgba(0,0,0,0.02), 0 12px 32px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)";
const SHADOW_STACKED =
  "0 4px 16px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)";

//  Fixed card height — all cards share the same pixel height 
const CARD_HEIGHT = 500;

// How far each back card peeks below the front card.
// peek = translateY - CARD_HEIGHT*(1-scale)/2
// next:    28 - 500*0.035/2 = 28 - 8.75 ≈ 19px peek
// waiting: 56 - 500*0.07/2  = 56 - 17.5 ≈ 39px peek
const POSITIONS = {
  active: {
    transform: "translateX(0px) translateY(0px) scale(1)",
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 30,
    transition: "all 650ms cubic-bezier(0.34, 1.10, 0.64, 1)",
  },
  next: {
    transform: "translateX(0px) translateY(28px) scale(0.965)",
    opacity: 0.75,
    filter: "blur(0px)",
    zIndex: 20,
    transition: "all 650ms cubic-bezier(0.34, 1.10, 0.64, 1)",
  },
  waiting: {
    transform: "translateX(0px) translateY(56px) scale(0.93)",
    opacity: 0.5,
    filter: "blur(0px)",
    zIndex: 10,
    transition: "all 650ms cubic-bezier(0.34, 1.10, 0.64, 1)",
  },
  exiting: {
    transform: "translateX(115%) translateY(-35px) rotateZ(14deg) scale(0.8)",
    opacity: 0,
    filter: "blur(2px)",
    zIndex: 40,
    transition: "all 430ms cubic-bezier(0.55, 0.05, 1, 0.45)",
  },
};

//  Ambient blobs 
const BLOBS = [
  { w: 380, h: 380, top: -60, left: -40, color: "rgba(99,102,241,0.07)", blur: 80 },
  { w: 300, h: 300, top: 180, left: 260, color: "rgba(20,184,166,0.055)", blur: 70 },
  { w: 260, h: 260, top: 320, left: 20, color: "rgba(245,158,11,0.04)", blur: 60 },
];

//  Card definitions 
const CARDS = [
  { id: "revenue", query: "What\u2019s our revenue growth this quarter?" },
  { id: "churn", query: "Analyse customer churn for the last 6 months" },
  { id: "compare", query: "Compare Q3 vs Q4 sales across regions" },
];

//  Helpers 
const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

//  Typing hook 
function useAutoSequence(
  query: string,
  isActive: boolean,
  onDone: () => void
) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<
    "idle" | "typing" | "sending" | "thinking" | "answering" | "reading" | "done"
  >("idle");
  const cancelRef = useRef(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayText("");
      setPhase("idle");
      cancelRef.current = true;
      return;
    }

    cancelRef.current = false;

    const run = async () => {
      await delay(600);
      if (cancelRef.current) return;
      setPhase("typing");

      for (let i = 0; i <= query.length; i++) {
        if (cancelRef.current) return;
        await delay(42);
        setDisplayText(query.slice(0, i));
        if (Math.random() < 0.08) await delay(80);
      }

      if (cancelRef.current) return;
      await delay(320);
      setPhase("sending");
      await delay(380);
      if (cancelRef.current) return;
      setDisplayText("");
      setPhase("thinking");
      await delay(900);
      if (cancelRef.current) return;
      setPhase("answering");
      await delay(2600);
      if (cancelRef.current) return;
      setPhase("done");
      onDone();
    };

    run();

    return () => {
      cancelRef.current = true;
    };
  }, [isActive, query, onDone]);

  return { displayText, phase };
}

//  Shared Top Bar 
function CardTopBar() {
  return (
    <div
      style={{
        height: 44,
        padding: "0 16px",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57", opacity: 0.85, display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FEBC2E", opacity: 0.85, display: "inline-block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28C840", opacity: 0.85, display: "inline-block" }} />
      </div>
      <span style={{ fontFamily: mono, fontSize: 11, color: "#9CA3AF", letterSpacing: "0.02em" }}>
        your-database.internal
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#059669", display: "inline-block", animation: "live-breathe 2s ease-in-out infinite" }} />
        <span style={{ fontFamily: mono, fontSize: 10, color: "#059669" }}>Live</span>
      </div>
    </div>
  );
}

//  Send button SVG icon 
function SendIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h10M8 4l3 3-3 3"
        stroke={active ? "#fff" : "#9CA3AF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

//  Input Bar 
function InputBar({
  displayText,
  phase,
}: {
  displayText: string;
  phase: string;
}) {
  const hasText = displayText.length > 0;
  const isSending = phase === "sending";

  return (
    <div
      style={{
        borderTop: "1px solid rgba(0,0,0,0.05)",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          flex: 1,
          background: "rgba(0,0,0,0.03)",
          borderRadius: 12,
          outline: "1px solid rgba(0,0,0,0.07)",
          padding: "10px 14px",
          minHeight: 20,
        }}
      >
        {phase === "typing" || hasText ? (
          <span style={{ fontFamily: mono, fontSize: 12, color: "#0D1117" }}>
            {displayText}
            <span
              style={{
                display: "inline-block",
                width: 1.5,
                height: 14,
                background: "#6366F1",
                marginLeft: 1,
                verticalAlign: "text-bottom",
                animation: "blink-cursor 0.9s step-end infinite",
              }}
            />
          </span>
        ) : (
          <span style={{ fontFamily: mono, fontSize: 12, color: "#B0B8C4" }}>
            Ask your database anything...
          </span>
        )}
      </div>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: hasText || isSending ? "#0D1117" : "rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 200ms ease, transform 150ms ease",
          flexShrink: 0,
          animation: isSending ? "send-pulse 400ms ease-out" : "none",
          transform: isSending ? "scale(1.06)" : "scale(1)",
        }}
      >
        <SendIcon active={hasText || isSending} />
      </div>
    </div>
  );
}

//  Thinking dots 
function ThinkingDots() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "14px 16px", alignItems: "center" }}>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: mono,
          fontSize: 8,
          color: "#9CA3AF",
          flexShrink: 0,
        }}
      >
        AI
      </div>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#9CA3AF",
            animation: `dot-rise 1.2s ease-in-out ${i * 0.18}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

//  Revenue Card (Card 1) 
function RevenueResponse() {
  return (
    <div style={{ animation: "reveal-up 320ms cubic-bezier(0.34, 1.20, 0.64, 1) forwards" }}>
      <div
        style={{
          background: "rgba(0,0,0,0.034)",
          outline: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "16px 16px 16px 3px",
          padding: "14px 16px",
          maxWidth: "92%",
        }}
      >
        <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: "#0D1117", marginBottom: 8 }}>
          Revenue grew {"\u2191"}23.4% this quarter
        </div>

        {/* Sparkline */}
        <svg
          width="180"
          height="40"
          viewBox="0 0 180 40"
          fill="none"
          style={{ display: "block", marginBottom: 10, animation: "reveal-up 320ms ease forwards 120ms", opacity: 0, transform: "translateZ(0)" }}
        >
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
            </linearGradient>
          </defs>
          <path d="M 0,35 C 30,32 50,26 80,20 S 130,10 180,3 L 180,40 L 0,40 Z" fill="url(#sparkGrad)" />
          <path d="M 0,35 C 30,32 50,26 80,20 S 130,10 180,3" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {[
            [0, 35], [36, 30], [72, 24], [108, 17], [144, 10], [180, 3],
          ].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="3" fill="#6366F1" />
          ))}
        </svg>

        {/* Stat chips */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Q1: \u20B938L", "Q2: \u20B942L", "Q3: \u20B947L"].map((label, i) => (
            <span
              key={label}
              style={{
                fontFamily: mono,
                fontSize: 10,
                color: "#6366F1",
                background: "rgba(99,102,241,0.07)",
                padding: "3px 10px",
                borderRadius: 999,
                animation: `reveal-up 280ms ease forwards ${180 + i * 60}ms`,
                opacity: 0,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

//  Churn Card (Card 2) 
function ChurnResponse() {
  const bars = [
    { month: "Apr", pct: 82, color: "#F87171", label: "8.2%" },
    { month: "May", pct: 58, color: "#FBBF24", label: "5.8%" },
    { month: "Jun", pct: 47, color: "#34D399", label: "4.7%" },
  ];
  const maxW = 140;

  return (
    <div style={{ animation: "reveal-up 320ms cubic-bezier(0.34, 1.20, 0.64, 1) forwards" }}>
      <div
        style={{
          background: "rgba(0,0,0,0.034)",
          outline: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "16px 16px 16px 3px",
          padding: "14px 16px",
          maxWidth: "92%",
        }}
      >
        {/* Insight tag */}
        <span
          style={{
            display: "inline-block",
            fontFamily: mono,
            fontSize: 10,
            fontWeight: 500,
            color: "#059669",
            background: "rgba(5,150,105,0.08)",
            padding: "3px 10px",
            borderRadius: 999,
            marginBottom: 10,
          }}
        >
          Positive trend detected
        </span>

        <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: "#0D1117", marginBottom: 10 }}>
          Churn rate dropped from 8.2% {"\u2192"} 4.7%
        </div>

        {/* Bar chart */}
        <svg
          width="220"
          height="72"
          viewBox="0 0 220 72"
          fill="none"
          style={{ display: "block", marginBottom: 10, animation: "reveal-up 320ms ease forwards 120ms", opacity: 0, transform: "translateZ(0)" }}
        >
          {/* Guide lines */}
          {[18, 38, 58].map((y) => (
            <line key={y} x1="30" y1={y} x2="210" y2={y} stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          ))}
          {bars.map((bar, i) => {
            const y = 10 + i * 20;
            const w = (bar.pct / 100) * maxW;
            return (
              <g key={bar.month}>
                <text x="0" y={y + 11} style={{ fontFamily: mono, fontSize: 9, fill: "#9CA3AF" }}>
                  {bar.month}
                </text>
                <rect x="30" y={y} width={w} height="14" rx="4" fill={bar.color} opacity="0.85" />
                <text x={34 + w} y={y + 11} style={{ fontFamily: mono, fontSize: 9, fill: bar.color }}>
                  {bar.label}
                </text>
              </g>
            );
          })}
        </svg>

        <div style={{ fontFamily: mono, fontSize: 11, color: "#6B7280", lineHeight: 1.6 }}>
          Key driver: Onboarding improvements in May
          <br />
          Projected Q4 churn: 3.9%
        </div>
      </div>
    </div>
  );
}

//  Comparison Card (Card 3) 
function ComparisonResponse() {
  const rows = [
    { region: "North", q3: "\u20B912.4L", q4: "\u20B916.8L", delta: "\u219135%" },
    { region: "South", q3: "\u20B99.1L", q4: "\u20B911.3L", delta: "\u219124%" },
    { region: "West", q3: "\u20B914.2L", q4: "\u20B918.9L", delta: "\u219133%" },
  ];

  return (
    <div style={{ animation: "reveal-up 320ms cubic-bezier(0.34, 1.20, 0.64, 1) forwards" }}>
      <div
        style={{
          background: "rgba(0,0,0,0.034)",
          outline: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "16px 16px 16px 3px",
          padding: "14px 16px",
          maxWidth: "92%",
        }}
      >
        {/* Insight tag */}
        <span
          style={{
            display: "inline-block",
            fontFamily: mono,
            fontSize: 10,
            fontWeight: 500,
            color: "#6366F1",
            background: "rgba(99,102,241,0.07)",
            padding: "3px 10px",
            borderRadius: 999,
            marginBottom: 10,
          }}
        >
          Cross-region comparison
        </span>

        <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: "#0D1117", marginBottom: 10 }}>
          Q4 outperformed Q3 by {"\u2191"}31% overall
        </div>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            animation: "reveal-up 320ms ease forwards 120ms",
            opacity: 0,
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              {["Region", "Q3", "Q4", "\u0394"].map((h) => (
                <th
                  key={h}
                  style={{
                    fontFamily: mono,
                    fontSize: 10,
                    color: "#9CA3AF",
                    letterSpacing: "0.06em",
                    fontWeight: 400,
                    textAlign: "left",
                    paddingBottom: 6,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.region}
                style={{
                  borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.03)" : "none",
                  animation: `reveal-up 280ms ease forwards ${180 + i * 60}ms`,
                  opacity: 0,
                }}
              >
                <td style={{ fontFamily: mono, fontSize: 11, color: "#0D1117", padding: "6px 0" }}>{r.region}</td>
                <td style={{ fontFamily: mono, fontSize: 11, color: "#0D1117", padding: "6px 0" }}>{r.q3}</td>
                <td style={{ fontFamily: mono, fontSize: 11, color: "#0D1117", padding: "6px 0" }}>{r.q4}</td>
                <td style={{ fontFamily: mono, fontSize: 11, color: "#059669", fontWeight: 500, padding: "6px 0" }}>{r.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ fontFamily: mono, fontSize: 10, color: "#9CA3AF", fontStyle: "italic", marginTop: 10 }}>
          West region shows highest absolute growth
        </div>
      </div>
    </div>
  );
}

//  Card content map 
const RESPONSE_MAP: Record<string, () => JSX.Element> = {
  revenue: RevenueResponse,
  churn: ChurnResponse,
  compare: ComparisonResponse,
};

//  Single Card Component 
function StackCard({
  card,
  position,
  isActive,
  onDone,
  floatAnim,
  isExiting,
  suppressTransition,
}: {
  card: { id: string; query: string };
  position: "active" | "next" | "waiting";
  isActive: boolean;
  onDone: () => void;
  floatAnim: string;
  isExiting: boolean;
  suppressTransition: boolean;
}) {
  const stableDone = useCallback(onDone, [onDone]);
  const { displayText, phase } = useAutoSequence(card.query, isActive, stableDone);
  const Response = RESPONSE_MAP[card.id];
  const pos = isExiting ? POSITIONS.exiting : POSITIONS[position];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 430,
        transform: pos.transform,
        opacity: pos.opacity,
        filter: pos.filter,
        zIndex: pos.zIndex,
        transition: suppressTransition ? "none" : pos.transition,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Inner wrapper for independent float animation */}
      <div
        style={{
          animation: isExiting ? "none" : floatAnim,
          transformOrigin: "center top",
        }}
      >
      <div
        style={{
          borderRadius: 22,
          background: "#ffffff",
          backdropFilter: "blur(32px) saturate(160%)",
          WebkitBackdropFilter: "blur(32px) saturate(160%)",
          outline: "1px solid rgba(0,0,0,0.05)",
          boxShadow: position === "active" ? SHADOW_ACTIVE : SHADOW_STACKED,
          overflow: "hidden",
          height: CARD_HEIGHT,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardTopBar />

        {/* Chat area */}
        <div style={{ padding: 16, flex: 1, overflow: "hidden" }}>
          {/* User bubble  show when sending/thinking/answering/done */}
          {(phase === "sending" || phase === "thinking" || phase === "answering" || phase === "reading" || phase === "done") && (
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
                  color: "#fff",
                  fontFamily: mono,
                  fontSize: 12,
                  padding: "10px 15px",
                  borderRadius: "16px 16px 3px 16px",
                  maxWidth: "85%",
                  lineHeight: 1.5,
                  animation: "reveal-up 280ms ease forwards",
                }}
              >
                {card.query}
              </div>
            </div>
          )}

          {/* Thinking dots */}
          {phase === "thinking" && <ThinkingDots />}

          {/* AI response */}
          {(phase === "answering" || phase === "done") && Response && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Response />
            </div>
          )}
        </div>

        {/* Input bar */}
        <InputBar displayText={displayText} phase={phase} />
      </div>
      </div>
    </div>
  );
}

const FLOAT_ANIMS = [
  "card-float-a 5.4s ease-in-out infinite",
  "card-float-b 4.6s ease-in-out 0.8s infinite",
  "card-float-c 6.2s ease-in-out 1.2s infinite",
];

//  Main Component 
export default function HeroRightSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef([0, 1, 2]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [order, setOrder] = useState([0, 1, 2]);
  const [exitingCard, setExitingCard] = useState<number | null>(null);
  const [noTransitionCard, setNoTransitionCard] = useState<number | null>(null);

  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 8, y: dx * 10 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const advanceStack = useCallback(() => {
    const cardToExit = orderRef.current[0];
    setExitingCard(cardToExit);
    setTimeout(() => {
      setOrder((prev) => [prev[1], prev[2], prev[0]]);
      setNoTransitionCard(cardToExit);
      setExitingCard(null);
      setTimeout(() => setNoTransitionCard(null), 50);
    }, 440);
  }, []);

  const positionNames = ["active", "next", "waiting"] as const;

  return (
    <>
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes dot-rise {
          0%, 60%, 100% { transform: translateY(0px); opacity: 0.4; }
          30%            { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes live-breathe {
          0%, 100% { box-shadow: 0 0 0 3px rgba(5,150,105,0.15); }
          50%      { box-shadow: 0 0 0 6px rgba(5,150,105,0.07); }
        }
        @keyframes send-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
          60%  { box-shadow: 0 0 0 10px rgba(99,102,241,0); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        @keyframes blob-drift-a {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(4px, -6px); }
          50%  { transform: translate(-3px, -10px); }
          75%  { transform: translate(-5px, -3px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes blob-drift-b {
          0%   { transform: translate(0px, 0px); }
          30%  { transform: translate(-5px, -7px); }
          60%  { transform: translate(3px, -12px); }
          80%  { transform: translate(2px, -4px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes blob-drift-c {
          0%   { transform: translate(0px, 0px); }
          35%  { transform: translate(3px, -8px); }
          65%  { transform: translate(-4px, -5px); }
          90%  { transform: translate(1px, -10px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes card-float-a {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50%      { transform: translateX(-12px) translateY(-14px); }
        }
        @keyframes card-float-b {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50%      { transform: translateX(10px) translateY(-10px); }
        }
        @keyframes card-float-c {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50%      { transform: translateX(-8px) translateY(-16px); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/*  Desktop  */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block"
        style={{
          position: "relative",
          width: 470,
          height: 600,
          perspective: "1200px",
          perspectiveOrigin: "50% 40%",
        }}
      >
        {/* Ambient blobs */}
        {BLOBS.map((blob, i) => (
          <div
            key={`blob-${i}`}
            style={{
              position: "absolute",
              width: blob.w,
              height: blob.h,
              top: blob.top,
              left: blob.left,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              borderRadius: "50%",
              filter: `blur(${blob.blur}px)`,
              pointerEvents: "none",
              zIndex: 0,
              willChange: "opacity",
              animation: `blob-drift-${["a", "b", "c"][i]} ${[16, 14, 18][i]}s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`,
            }}
          />
        ))}

        {/* 3D Stack wrapper  receives tilt */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
            position: "absolute",
            inset: 0,
          }}
        >
          {[0, 1, 2].map((stackIdx) => {
            const cardIdx = order[stackIdx];
            const card = CARDS[cardIdx];
            const pos = positionNames[stackIdx];
            return (
              <StackCard
                key={card.id}
                card={card}
                position={pos}
                isActive={stackIdx === 0}
                onDone={advanceStack}
                floatAnim={FLOAT_ANIMS[stackIdx]}
                isExiting={exitingCard === cardIdx}
                suppressTransition={noTransitionCard === cardIdx}
              />
            );
          })}
        </div>
      </div>

      {/*  Mobile: single flat card  */}
      <div
        className="block md:hidden"
        style={{
          width: "100%",
          maxWidth: 380,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <MobileCard />
      </div>
    </>
  );
}

//  Mobile-only flat card 
function MobileCard() {
  const card = CARDS[0];
  const [phase, setPhase] = useState<"idle" | "done">("idle");

  useEffect(() => {
    const t = setTimeout(() => setPhase("done"), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        borderRadius: 22,
        background: "#ffffff",
        backdropFilter: "blur(32px) saturate(160%)",
        WebkitBackdropFilter: "blur(32px) saturate(160%)",
        outline: "1px solid rgba(0,0,0,0.05)",
        boxShadow: SHADOW_ACTIVE,
        overflow: "hidden",
        height: CARD_HEIGHT,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardTopBar />
      <div style={{ padding: 16, flex: 1, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
              color: "#fff",
              fontFamily: mono,
              fontSize: 12,
              padding: "10px 15px",
              borderRadius: "16px 16px 3px 16px",
              maxWidth: "85%",
              lineHeight: 1.5,
            }}
          >
            {card.query}
          </div>
        </div>
        {phase === "done" && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <RevenueResponse />
          </div>
        )}
      </div>
      <InputBar displayText="" phase="idle" />
    </div>
  );
}
