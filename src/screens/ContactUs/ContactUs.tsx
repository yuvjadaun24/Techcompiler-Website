import PageMeta from "@/seo/PageMeta";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import usFlag from "../../assets/united-states.png";
import japanFlag from "../../assets/japan.png";
import indiaFlag from "../../assets/india.png";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);

const C = {
  dark: "#0A0E1A",
  white: "#FFFFFF",
  accent: "#C8FF00",
  inkDim: "rgba(255,255,255,0.4)",
  grayText: "#6B7280",
  offWhite: "#F7F7F5",
  border: "rgba(10,14,26,0.1)",
};

const COUNTRIES = [
  { code: "US", name: "United States",    dialCode: "+1",   flag: "🇺🇸", placeholder: "(555) 000-0000" },
  { code: "CA", name: "Canada",             dialCode: "+1",   flag: "🇨🇦", placeholder: "(555) 000-0000" },
  { code: "GB", name: "United Kingdom",    dialCode: "+44",  flag: "🇬🇧", placeholder: "7700 900000" },
  { code: "AU", name: "Australia",          dialCode: "+61",  flag: "🇦🇺", placeholder: "0412 345 678" },
  { code: "IN", name: "India",              dialCode: "+91",  flag: "🇮🇳", placeholder: "98765 43210" },
  { code: "JP", name: "Japan",              dialCode: "+81",  flag: "🇯🇵", placeholder: "90-1234-5678" },
  { code: "CN", name: "China",              dialCode: "+86",  flag: "🇨🇳", placeholder: "131 2345 6789" },
  { code: "DE", name: "Germany",            dialCode: "+49",  flag: "🇩🇪", placeholder: "0151 12345678" },
  { code: "FR", name: "France",             dialCode: "+33",  flag: "🇫🇷", placeholder: "06 12 34 56 78" },
  { code: "IT", name: "Italy",              dialCode: "+39",  flag: "🇮🇹", placeholder: "312 345 6789" },
  { code: "ES", name: "Spain",              dialCode: "+34",  flag: "🇪🇸", placeholder: "612 34 56 78" },
  { code: "PT", name: "Portugal",           dialCode: "+351", flag: "🇵🇹", placeholder: "912 345 678" },
  { code: "NL", name: "Netherlands",        dialCode: "+31",  flag: "🇳🇱", placeholder: "06 12345678" },
  { code: "BE", name: "Belgium",            dialCode: "+32",  flag: "🇧🇪", placeholder: "0470 12 34 56" },
  { code: "CH", name: "Switzerland",        dialCode: "+41",  flag: "🇨🇭", placeholder: "079 123 45 67" },
  { code: "AT", name: "Austria",            dialCode: "+43",  flag: "🇦🇹", placeholder: "0664 1234567" },
  { code: "SE", name: "Sweden",             dialCode: "+46",  flag: "🇸🇪", placeholder: "070-123 45 67" },
  { code: "NO", name: "Norway",             dialCode: "+47",  flag: "🇳🇴", placeholder: "400 12 345" },
  { code: "DK", name: "Denmark",            dialCode: "+45",  flag: "🇩🇰", placeholder: "20 12 34 56" },
  { code: "FI", name: "Finland",            dialCode: "+358", flag: "🇫🇮", placeholder: "040 1234567" },
  { code: "PL", name: "Poland",             dialCode: "+48",  flag: "🇵🇱", placeholder: "512 345 678" },
  { code: "CZ", name: "Czech Republic",     dialCode: "+420", flag: "🇨🇿", placeholder: "601 123 456" },
  { code: "RO", name: "Romania",            dialCode: "+40",  flag: "🇷🇴", placeholder: "0712 345 678" },
  { code: "GR", name: "Greece",             dialCode: "+30",  flag: "🇬🇷", placeholder: "691 234 5678" },
  { code: "HU", name: "Hungary",            dialCode: "+36",  flag: "🇭🇺", placeholder: "20 123 4567" },
  { code: "RU", name: "Russia",             dialCode: "+7",   flag: "🇷🇺", placeholder: "912 345-67-89" },
  { code: "UA", name: "Ukraine",            dialCode: "+380", flag: "🇺🇦", placeholder: "050 123 4567" },
  { code: "TR", name: "Turkey",             dialCode: "+90",  flag: "🇹🇷", placeholder: "0532 123 45 67" },
  { code: "AE", name: "UAE",                dialCode: "+971", flag: "🇦🇪", placeholder: "50 123 4567" },
  { code: "SA", name: "Saudi Arabia",       dialCode: "+966", flag: "🇸🇦", placeholder: "51 234 5678" },
  { code: "IL", name: "Israel",             dialCode: "+972", flag: "🇮🇱", placeholder: "050-123-4567" },
  { code: "EG", name: "Egypt",              dialCode: "+20",  flag: "🇪🇬", placeholder: "0100 123 4567" },
  { code: "SG", name: "Singapore",          dialCode: "+65",  flag: "🇸🇬", placeholder: "9123 4567" },
  { code: "MY", name: "Malaysia",           dialCode: "+60",  flag: "🇲🇾", placeholder: "012-345 6789" },
  { code: "TH", name: "Thailand",           dialCode: "+66",  flag: "🇹🇭", placeholder: "081 234 5678" },
  { code: "ID", name: "Indonesia",          dialCode: "+62",  flag: "🇮🇩", placeholder: "0812-3456-7890" },
  { code: "PH", name: "Philippines",        dialCode: "+63",  flag: "🇵🇭", placeholder: "917 123 4567" },
  { code: "VN", name: "Vietnam",            dialCode: "+84",  flag: "🇻🇳", placeholder: "091 234 5678" },
  { code: "KR", name: "South Korea",        dialCode: "+82",  flag: "🇰🇷", placeholder: "010-1234-5678" },
  { code: "PK", name: "Pakistan",           dialCode: "+92",  flag: "🇵🇰", placeholder: "0301 2345678" },
  { code: "BD", name: "Bangladesh",         dialCode: "+880", flag: "🇧🇩", placeholder: "01812-345678" },
  { code: "BR", name: "Brazil",             dialCode: "+55",  flag: "🇧🇷", placeholder: "(11) 91234-5678" },
  { code: "MX", name: "Mexico",             dialCode: "+52",  flag: "🇲🇽", placeholder: "55 1234 5678" },
  { code: "AR", name: "Argentina",          dialCode: "+54",  flag: "🇦🇷", placeholder: "11 2345-6789" },
  { code: "CO", name: "Colombia",           dialCode: "+57",  flag: "🇨🇴", placeholder: "310 123 4567" },
  { code: "CL", name: "Chile",              dialCode: "+56",  flag: "🇨🇱", placeholder: "9 1234 5678" },
  { code: "ZA", name: "South Africa",       dialCode: "+27",  flag: "🇿🇦", placeholder: "71 123 4567" },
  { code: "NG", name: "Nigeria",            dialCode: "+234", flag: "🇳🇬", placeholder: "0801 234 5678" },
  { code: "KE", name: "Kenya",              dialCode: "+254", flag: "🇰🇪", placeholder: "0712 345678" },
  { code: "NZ", name: "New Zealand",        dialCode: "+64",  flag: "🇳🇿", placeholder: "021 123 4567" },
];

function revealUp(el: Element | null, delay = 0) {
  if (!el) return;
  gsap.fromTo(el,
    { autoAlpha: 0, y: 32 },
    { autoAlpha: 1, y: 0, duration: 0.65, ease: "power3.out", delay,
      scrollTrigger: { trigger: el, start: "top 84%", once: true } }
  );
}

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<typeof COUNTRIES[0]>(COUNTRIES[0]);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [phoneFocused, setPhoneFocused] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: !validateEmail(value) ? "Please enter a valid email address." : "" }));
    }
    if (name === "phone") {
      setErrors((prev) => ({ ...prev, phone: value && !/^[\d\s\-().+]*$/.test(value) ? "Please enter a valid phone number." : "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  const pageRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const pencilRef = useRef<SVGLineElement>(null);
  const blCornerRef = useRef(null);
  const brCornerRef = useRef(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const sideLineRef = useRef<SVGLineElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      if (h1Ref.current) {
        try {
          const s = new SplitText(h1Ref.current, { type: "words" });
          splits.push(s);
          gsap.set(s.words, { autoAlpha: 0, y: 24 });
          gsap.to(s.words, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", delay: 0.1 });
        } catch {
          gsap.fromTo(h1Ref.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 });
        }
      }
      if (heroSubRef.current) gsap.fromTo(heroSubRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.4 });
      if (pencilRef.current) gsap.fromTo(pencilRef.current, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 0.9, ease: "power2.inOut", delay: 0.5 });
      // Corner marks
      gsap.fromTo(
        [blCornerRef.current, brCornerRef.current],
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", duration: 0.5, ease: "power2.out", delay: 0.85, stagger: 0.06 }
      );

      revealUp(leftColRef.current, 0);

      if (sideLineRef.current && !isMobile) {
        gsap.fromTo(sideLineRef.current, { drawSVG: "0% 0%" },
          { drawSVG: "0% 100%", duration: 0.8, ease: "power2.inOut",
            scrollTrigger: { trigger: leftColRef.current, start: "top 80%", once: true } });
      }

      if (formRef.current) {
        gsap.fromTo(formRef.current, { autoAlpha: 0, x: 40 },
          { autoAlpha: 1, x: 0, duration: 0.75, ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true } });
      }
      const fields = fieldRefs.current.filter(Boolean);
      if (fields.length) {
        gsap.fromTo(fields, { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.4, ease: "power2.out",
            scrollTrigger: { trigger: formRef.current, start: "top 78%", once: true }, delay: 0.2 });
      }

      if (statsRef.current) {
        const items = statsRef.current.children;
        gsap.fromTo(items, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 88%", once: true } });
      }
    }, pageRef);
    return () => { splits.forEach(s => { try { s.revert(); } catch {} }); ctx.revert(); };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
        setPhoneDropdownOpen(false);
        setCountrySearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%", background: C.white, border: `1.5px solid ${C.border}`,
    borderRadius: 10, padding: "14px 16px", fontSize: "0.88rem", color: C.dark,
    fontFamily: "'Syne', sans-serif", outline: "none", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.16em",
    textTransform: "uppercase", color: C.grayText, marginBottom: 8, fontFamily: "'Syne', sans-serif",
  };

  return (
    <div ref={pageRef}>
      <PageMeta />
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ opacity: 0, y: -30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30, scale: 0.95 }} transition={{ duration: 0.4 }}
            className="fixed top-6 right-6 z-50 bg-black border border-white-400 shadow-lg rounded-lg px-5 py-3 flex items-center gap-3">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e" /><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-white font-medium">Form submitted successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <section style={{ background: C.white, padding: "clamp(100px,12vw,140px) clamp(24px,6vw,80px) clamp(48px,6vw,72px)", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 20, height: 1, background: C.accent }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(10,14,26,0.45)", fontFamily: "'Syne',sans-serif" }}>Get In Touch</span>
          <div style={{ width: 20, height: 1, background: C.accent }} />
        </div>
        <h1 ref={h1Ref} style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: C.dark, lineHeight: 0.91, letterSpacing: "-0.03em", fontFamily: "'Syne',sans-serif", margin: 0 }}>
          Let's build<br />something{" "}<em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", color: C.accent }}>great.</em>
        </h1>
        <svg viewBox="0 0 320 3" width="320" height="3" style={{ marginTop: 16, overflow: "visible" }}><line ref={pencilRef} x1="0" y1="1.5" x2="320" y2="1.5" stroke="rgba(10,14,26,0.15)" strokeWidth="1.5" /></svg>
        <p ref={heroSubRef} style={{ fontSize: "0.9rem", color: "rgba(10,14,26,0.5)", marginTop: 20, fontFamily: "'Syne',sans-serif", visibility: "hidden" }}>We typically respond within 24 hours.</p>
        <svg ref={blCornerRef} style={{ position: "absolute", bottom: 20, left: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 32,4 L 4,4 L 4,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg ref={brCornerRef} style={{ position: "absolute", bottom: 20, right: "clamp(24px,5vw,72px)", width: 32, height: 24, overflow: "visible" }} viewBox="0 0 32 24">
          <path d="M 0,4 L 28,4 L 28,24" fill="none" stroke="#C8FF00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", bottom: 0, left: "clamp(24px,5vw,72px)", right: "clamp(24px,5vw,72px)", height: "1px", background: "rgba(200,255,0,0.3)" }} />
      </section>

      <section style={{ background: C.white, padding: "clamp(60px,8vw,100px) clamp(24px,6vw,80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "320px 1fr", gap: "clamp(48px,7vw,100px)", alignItems: "start", maxWidth: 1200, margin: "0 auto" }}>
          <div ref={leftColRef} style={{ position: "relative", paddingLeft: isMobile ? 0 : 20, visibility: "hidden" }}>
            {!isMobile && (<svg style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, height: "100%" }} viewBox="0 0 2 400" preserveAspectRatio="none"><line ref={sideLineRef} x1="1" y1="0" x2="1" y2="400" stroke={C.accent} strokeWidth="1.5" opacity="0.4" /></svg>)}
            <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid rgba(10,14,26,0.08)" }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: C.accent, display: "block", marginBottom: 6, fontFamily: "'Syne',sans-serif" }}>Email us</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <a href="mailto:hr@techcompiler.com" style={{ fontSize: "1.05rem", fontWeight: 700, color: C.dark, fontFamily: "'Syne',sans-serif", textDecoration: "none" }}>hr@techcompiler.com</a>
                <button type="button" aria-label="Copy email"
                  style={{ padding: 4, borderRadius: 4, border: "none", background: "transparent", cursor: "pointer", color: "rgba(10,14,26,0.4)", transition: "color 0.2s", position: "relative" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.accent; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,14,26,0.4)"; }}
                  onClick={() => { navigator.clipboard.writeText("hr@techcompiler.com"); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2" strokeWidth="2" fill="none" /><rect x="3" y="3" width="13" height="13" rx="2" strokeWidth="2" fill="none" /></svg>
                  {copied && (<span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: -32, background: C.dark, color: C.white, fontSize: "0.7rem", borderRadius: 4, padding: "4px 8px", whiteSpace: "nowrap", zIndex: 10 }}>Copied to your clipboard</span>)}
                </button>
              </div>
            </div>
            <div>
              <span style={{ fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: C.accent, display: "block", marginBottom: 6, fontFamily: "'Syne',sans-serif" }}>Location</span>
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 800, color: C.dark, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontFamily: "'Syne',sans-serif" }}>North America</p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                  <img src={usFlag} alt="US Flag" style={{ width: 24, height: 24, borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.82rem", color: C.grayText, lineHeight: 1.5, fontFamily: "'Syne',sans-serif" }}>412 Linden Avenue, Rochester, NY 14625</span>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 800, color: C.dark, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontFamily: "'Syne',sans-serif" }}>Asia</p>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                  <img src={japanFlag} alt="Japan Flag" style={{ width: 24, height: 24, borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.82rem", color: C.grayText, lineHeight: 1.5, fontFamily: "'Syne',sans-serif" }}>4F Kabutocho Dai-6 Hayama Building, 17-2 Nihonbashi Kabutocho, Chuo-ku, Tokyo, Japan</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <img src={indiaFlag} alt="India Flag" style={{ width: 24, height: 24, borderRadius: 4, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.82rem", color: C.grayText, lineHeight: 1.5, fontFamily: "'Syne',sans-serif" }}>Gold Tower, Wave One, Sector 18 Noida UP India 201301</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} style={{ background: C.offWhite, borderRadius: 20, padding: "clamp(32px,4vw,48px)", border: "1px solid rgba(10,14,26,0.07)", visibility: "hidden" }}>
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
              <div ref={el => { fieldRefs.current[0] = el; }} style={{ visibility: "hidden" }}>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = C.accent; }} onBlur={e => { e.target.style.borderColor = C.border; }} />
              </div>
              <div ref={el => { fieldRefs.current[1] = el; }} style={{ visibility: "hidden" }}>
                <label style={labelStyle}>Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = C.accent; }} onBlur={e => { e.target.style.borderColor = C.border; }} />
              </div>
              <div ref={el => { fieldRefs.current[2] = el; }} style={{ visibility: "hidden" }}>
                <label style={labelStyle}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@gmail.com"
                  style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : C.border }}
                  onFocus={e => { if (!errors.email) e.target.style.borderColor = C.accent; }} onBlur={e => { if (!errors.email) e.target.style.borderColor = C.border; }} />
                {errors.email && <p style={{ color: "#ef4444", fontSize: "0.7rem", marginTop: 4 }}>{errors.email}</p>}
              </div>
              <div ref={el => { fieldRefs.current[3] = el; }} style={{ visibility: "hidden", position: "relative", zIndex: 10 }}>
                <label style={labelStyle}>Phone</label>
                <div ref={phoneDropdownRef} style={{ position: "relative" }}>
                  <div style={{ display: "flex", border: `1.5px solid ${errors.phone ? "#ef4444" : phoneFocused ? C.accent : C.border}`, borderRadius: 10, background: C.white, transition: "border-color 0.2s", overflow: "visible" }}>
                    <button
                      type="button"
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 12px 0 14px", background: "transparent", border: "none", borderRight: `1px solid ${C.border}`, cursor: "pointer", flexShrink: 0, alignSelf: "stretch" }}
                      onClick={() => { setPhoneDropdownOpen(v => !v); setCountrySearch(""); }}
                    >
                      <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} style={{ width: 20, height: 15, objectFit: "cover", borderRadius: 2, display: "block", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: C.dark, fontFamily: "'Syne',sans-serif", letterSpacing: "0.01em" }}>{selectedCountry.dialCode}</span>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: phoneDropdownOpen ? "rotate(180deg)" : "none", color: "rgba(10,14,26,0.4)" }}>
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={selectedCountry.placeholder}
                      style={{ flex: 1, background: "transparent", border: "none", padding: "14px 14px", fontSize: "0.88rem", color: C.dark, fontFamily: "'Syne',sans-serif", outline: "none", minWidth: 0 }}
                      onFocus={() => setPhoneFocused(true)}
                      onBlur={() => setPhoneFocused(false)}
                    />
                  </div>
                  {phoneDropdownOpen && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, minWidth: "100%", background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 12, zIndex: 200, boxShadow: "0 12px 40px rgba(10,14,26,0.14)", overflow: "hidden" }}>
                      <div style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, background: C.white, position: "sticky", top: 0 }}>
                        <input
                          autoFocus
                          type="text"
                          placeholder="Search country or code…"
                          value={countrySearch}
                          onChange={e => setCountrySearch(e.target.value)}
                          style={{ width: "100%", border: "none", outline: "none", fontSize: "0.82rem", fontFamily: "'Syne',sans-serif", color: C.dark, background: "transparent" }}
                        />
                      </div>
                      <div style={{ overflowY: "auto", maxHeight: 224 }}>
                        {COUNTRIES.filter(c =>
                          !countrySearch ||
                          c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                          c.dialCode.includes(countrySearch)
                        ).map(country => (
                          <button
                            key={country.code}
                            type="button"
                            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "9px 14px", background: selectedCountry.code === country.code ? "rgba(200,255,0,0.1)" : "transparent", border: "none", cursor: "pointer", transition: "background 0.15s" }}
                            onMouseEnter={e => { if (selectedCountry.code !== country.code) (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,14,26,0.04)"; }}
                            onMouseLeave={e => { if (selectedCountry.code !== country.code) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                            onClick={() => { setSelectedCountry(country); setPhoneDropdownOpen(false); setCountrySearch(""); setFormData(prev => ({ ...prev, phone: "" })); setErrors(prev => ({ ...prev, phone: "" })); }}
                          >
                            <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} style={{ width: 20, height: 15, objectFit: "cover", borderRadius: 2, flexShrink: 0 }} />
                            <span style={{ fontSize: "0.8rem", color: C.dark, fontFamily: "'Syne',sans-serif", flex: 1, textAlign: "left" }}>{country.name}</span>
                            <span style={{ fontSize: "0.78rem", color: "rgba(10,14,26,0.45)", fontFamily: "'Syne',sans-serif", flexShrink: 0 }}>{country.dialCode}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {errors.phone && <p style={{ color: "#ef4444", fontSize: "0.7rem", marginTop: 4 }}>{errors.phone}</p>}
              </div>
              <div ref={el => { fieldRefs.current[4] = el; }} style={{ gridColumn: isMobile ? undefined : "1 / -1", visibility: "hidden" }}>
                <label style={labelStyle}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4}
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical" as const }}
                  onFocus={e => { e.target.style.borderColor = C.accent; }} onBlur={e => { e.target.style.borderColor = C.border; }} />
              </div>
              <div ref={el => { fieldRefs.current[5] = el; }} style={{ gridColumn: isMobile ? undefined : "1 / -1", marginTop: 8, visibility: "hidden" }}>
                <button type="submit" disabled={!!errors.email || !!errors.phone}
                  style={{ width: "100%", background: C.dark, color: C.white, borderRadius: 10, padding: 16, fontSize: "0.88rem", fontWeight: 800, fontFamily: "'Syne',sans-serif", letterSpacing: "0.04em", border: "none", cursor: "pointer", transition: "background 0.22s, color 0.22s, transform 0.1s", opacity: (errors.email || errors.phone) ? 0.5 : 1 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = C.accent; (e.currentTarget as HTMLButtonElement).style.color = C.dark; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = C.dark; (e.currentTarget as HTMLButtonElement).style.color = C.white; }}
                  onMouseDown={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)"; }}
                  onMouseUp={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section style={{ background: C.dark, padding: "40px clamp(24px,6vw,80px)" }}>
        <div ref={statsRef} style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { icon: "\u26A1", value: "24hr", label: "Response Time" },
            { icon: "\u2709", value: "hr@techcompiler.com", label: "Direct Contact" },
            { icon: "\uD83C\uDF0D", value: "3 Continents", label: "Global Presence" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, visibility: "hidden" }}>
              <span style={{ fontSize: "1.1rem", color: C.accent }}>{item.icon}</span>
              <div>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: C.white, fontFamily: "'Syne',sans-serif", display: "block" }}>{item.value}</span>
                <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginTop: 2, fontFamily: "'Syne',sans-serif" }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;