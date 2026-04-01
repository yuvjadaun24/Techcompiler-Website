import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import frontend from '@/assets/Technologies Icon/front-development.png';
import backend from '@/assets/Technologies Icon/developer.png';
import mobile from '@/assets/Technologies Icon/reservation-smartphone (1) 1.png';
import ecommerce from '@/assets/Technologies Icon/marketplace-alt 1.png';
import { useNavigate } from 'react-router-dom';

const C = {
  bg: '#FFFFFF',
  ink: '#0A0E1A',
  inkMuted: '#6B7280',
  border: 'rgba(10,14,26,0.09)',
  accent: '#C8FF00',
};

const techCategories = [
  {
    title: 'Frontend',
    icon: frontend,
    links: [
      { name: 'Angular JS', href: '/Technologies/Angular-JS' },
      { name: 'React JS', href: '/Technologies/React-JS' },
      { name: 'Vue.Js', href: '/Technologies/Vue-JS' },
      { name: 'JavaScript', href: '/Technologies/JavaScript' },
      { name: 'TypeScript', href: '/Technologies/TypeScript' },
      { name: 'CSS3', href: '/Technologies/CSS-3' },
      { name: 'HTML5', href: '/Technologies/HTML-5' },
    ],
  },
  {
    title: 'Backend',
    icon: backend,
    links: [
      { name: '.NET', href: '/Technologies/Dot-Net' },
      { name: '.NET Core', href: '/Technologies/Dot-Net-Core' },
      { name: 'PHP', href: '/Technologies/PHP' },
      { name: 'JAVA', href: '/Technologies/Java' },
      { name: 'Node.Js', href: '/Technologies/Node-JS' },
    ],
  },
  {
    title: 'Mobile',
    icon: mobile,
    links: [
      { name: 'iOS', href: '/Technologies/IOS' },
      { name: 'Android', href: '/Technologies/Android' },
      { name: 'React Native', href: '/Technologies/React-Native' },
    ],
  },
  {
    title: 'E-Commerce',
    icon: ecommerce,
    links: [
      { name: 'WooCommerce', href: '/Technologies/Woo-Commerce' },
      { name: 'Magento', href: '/Technologies/Magento' },
    ],
  },
];

interface TechnologiesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  navHeight: number;
}

const TechnologiesDropdown: React.FC<TechnologiesDropdownProps> = ({ isOpen, onClose, navHeight }) => {
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);
  const categoryHeaderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const subLinkGroupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaPanelRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const fontBase: React.CSSProperties = { fontFamily: "'Syne', sans-serif" };

  // ── Open/close animation ──
  useEffect(() => {
    if (!panelRef.current) return;

    tlRef.current?.kill();

    const ctx = gsap.context(() => {
      if (isOpen) {
        const tl = gsap.timeline();
        tlRef.current = tl;

        tl.fromTo(
          panelRef.current!,
          { autoAlpha: 0, y: -16 },
          { autoAlpha: 1, y: 0, duration: 0.38, ease: 'drop' }
        );

        const headers = categoryHeaderRefs.current.filter(Boolean);
        if (headers.length) {
          tl.fromTo(
            headers,
            { autoAlpha: 0, x: -14 },
            { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.06, ease: 'nav' },
            '-=0.22'
          );
        }

        const groups = subLinkGroupRefs.current.filter(Boolean);
        if (groups.length) {
          tl.fromTo(
            groups,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.05, ease: 'nav' },
            '-=0.2'
          );
        }

        if (ctaPanelRef.current) {
          tl.fromTo(
            ctaPanelRef.current,
            { autoAlpha: 0, x: 20 },
            { autoAlpha: 1, x: 0, duration: 0.35, ease: 'nav' },
            '-=0.28'
          );
        }
      }
    }, panelRef);

    return () => { tlRef.current?.kill(); ctx.revert(); };
  }, [isOpen]);

  // ── Escape key ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // ── Sub-link hover ──
  const handleSubLinkEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const dot = el.querySelector('.sublink-dot') as HTMLElement;
    gsap.to(el, { color: C.ink, duration: 0.2, ease: 'nav' });
    if (dot) gsap.to(dot, { opacity: 1, x: 0, duration: 0.2, ease: 'nav' });
  };

  const handleSubLinkLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const dot = el.querySelector('.sublink-dot') as HTMLElement;
    gsap.to(el, { color: C.inkMuted, duration: 0.2, ease: 'nav' });
    if (dot) gsap.to(dot, { opacity: 0, x: -8, duration: 0.15 });
  };

  // ── CTA button hover ──
  const handleCtaEnter = () => gsap.to(ctaBtnRef.current, { background: C.bg, duration: 0.2 });
  const handleCtaLeave = () => gsap.to(ctaBtnRef.current, { background: C.accent, duration: 0.2 });

  let catIdx = 0;
  let linkGroupIdx = 0;

  return (
    <div
      ref={panelRef}
      className="mega-menu-panel"
      role="menu"
      aria-label="Technologies menu"
      style={{ top: navHeight, visibility: 'hidden', opacity: 0, ...fontBase }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          gap: 0,
        }}
      >
        {/* ── Content Zone ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px 24px',
            paddingRight: 40,
          }}
        >
          {techCategories.map((cat) => {
            const hIdx = catIdx++;
            const gIdx = linkGroupIdx++;
            return (
              <div key={cat.title}>
                <div
                  ref={(el) => { categoryHeaderRefs.current[hIdx] = el; }}
                  style={{ visibility: 'hidden', opacity: 0 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <img
                      src={cat.icon}
                      alt=""
                      style={{ width: 20, height: 20 }}
                    />
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        color: C.ink,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  <div className="category-bar" />
                </div>

                <div
                  ref={(el) => { subLinkGroupRefs.current[gIdx] = el; }}
                  style={{ visibility: 'hidden', opacity: 0 }}
                >
                  {cat.links.map((link) => (
                    <div
                      key={link.name}
                      onClick={() => { navigate(link.href); onClose(); }}
                      onMouseEnter={handleSubLinkEnter}
                      onMouseLeave={handleSubLinkLeave}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '7px 0',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: C.inkMuted,
                        lineHeight: 1,
                        cursor: 'pointer',
                        ...fontBase,
                      }}
                    >
                      <span className="sublink-dot" />
                      {link.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA Panel ── */}
        <div
          ref={ctaPanelRef}
          style={{
            background: C.ink,
            borderLeft: `1px solid ${C.border}`,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            visibility: 'hidden',
            opacity: 0,
            borderRadius: '0 0 4px 0',
          }}
        >
          <div
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 16,
              ...fontBase,
            }}
          >
            OUR TECH STACK
          </div>
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.3,
              marginBottom: 10,
              ...fontBase,
            }}
          >
            Modern technologies for scalable, future-proof solutions.
          </div>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.6,
              marginBottom: 28,
              ...fontBase,
            }}
          >
            From frontend to backend, mobile to cloud — we've got the expertise.
          </div>
          <button
            ref={ctaBtnRef}
            onClick={() => { navigate('/Contact-Us'); onClose(); }}
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            style={{
              background: C.accent,
              color: C.ink,
              borderRadius: 8,
              padding: '12px 22px',
              fontSize: '0.8rem',
              fontWeight: 800,
              width: '100%',
              textAlign: 'center',
              border: 'none',
              cursor: 'pointer',
              ...fontBase,
            }}
          >
            Explore all tech →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDropdown;
