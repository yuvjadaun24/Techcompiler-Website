import React, { useEffect, useRef, useCallback, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const C = {
  bg: '#FFFFFF',
  ink: '#0A0E1A',
  inkMuted: '#6B7280',
  accent: '#C8FF00',
  border: 'rgba(10,14,26,0.09)',
  borderLight: 'rgba(10,14,26,0.07)',
  borderDim: 'rgba(10,14,26,0.05)',
};

const serviceCategories = [
  {
    title: 'Web & Application Development',
    links: [
      { name: 'Application Services', href: '/services/web-dev' },
      { name: 'Full Stack Development', href: '/services/Full-Stack-Development' },
    ],
  },
  {
    title: 'Infrastructure & IT Management',
    links: [
      { name: 'Infrastructure Service', href: '/services/Infrastructure-Services' },
      { name: 'Managed IT Services', href: '/services/Managed-IT-Services' },
      { name: 'IT Outsourcing', href: '/services/IT-Outsourcing' },
      { name: 'DevOps', href: '/services/DevOps' },
    ],
  },
  {
    title: 'Strategy & Consulting',
    links: [
      { name: 'Digital Transformation', href: '/services/Digital-Transformation' },
      { name: 'IT Consulting', href: '/services/IT-Consulting' },
    ],
  },
  {
    title: 'Design',
    links: [
      { name: 'UI/UX Design', href: '/services/UI-UX-Designing' },
    ],
  },
  {
    title: 'Data & Intelligence',
    links: [
      { name: 'Business Intelligence', href: '/services/Business-Intelligence' },
      { name: 'Data Analytics', href: '/services/Data-Analytics' },
      { name: 'Database Migration', href: '/services/Database-Migration' },
    ],
  },
  {
    title: 'Embedded & Specialized Solutions',
    links: [
      { name: 'Embedded Product', href: '/services/Embedded-Product' },
    ],
  },
];

const techCategories = [
  {
    title: 'Frontend',
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
    links: [
      { name: '.NET', href: '/Technologies/Dot-Net' },
      { name: '.NET Core', href: '/Technologies/Dot-Net-Core' },
      { name: 'PHP', href: '/Technologies/PHP' },
      { name: 'JAVA', href: '/Technologies/Java' },
      { name: 'Node.Js', href: '/Technologies/Node-Js' },
    ],
  },
  {
    title: 'Mobile',
    links: [
      { name: 'iOS', href: '/Technologies/IOS' },
      { name: 'Android', href: '/Technologies/Android' },
      { name: 'React Native', href: '/Technologies/React-Native' },
    ],
  },
  {
    title: 'E-Commerce',
    links: [
      { name: 'WooCommerce', href: '/Technologies/Woo-Commerce' },
      { name: 'Magento', href: '/Technologies/Magento' },
    ],
  },
];

interface NavItem {
  text: string;
  href?: string;
  accordion?: 'services' | 'technologies';
}

const navItems: NavItem[] = [
  { text: 'Home', href: '/' },
  { text: 'Services', accordion: 'services' },
  { text: 'Technologies', accordion: 'technologies' },
  { text: 'Clients', href: '/Our-Clients' },
  { text: 'Careers', href: '/Careers' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const subListRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const iconRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const wasOpen = useRef(false);

  const fontBase: React.CSSProperties = { fontFamily: "'Syne', sans-serif" };

  // ── Scroll lock ──
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Open / Close animation ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen && !wasOpen.current) {
        wasOpen.current = true;

        if (backdropRef.current) {
          gsap.fromTo(backdropRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 });
        }
        if (drawerRef.current) {
          gsap.to(drawerRef.current, { x: 0, duration: 0.52, ease: 'slide' });
        }

        // Stagger items in
        const items = drawerItemRefs.current.filter(Boolean);
        if (items.length) {
          gsap.fromTo(
            items,
            { autoAlpha: 0, x: 24 },
            { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.055, ease: 'nav', delay: 0.15 }
          );
        }
      }

      if (!isOpen && wasOpen.current) {
        wasOpen.current = false;

        if (drawerRef.current) {
          gsap.to(drawerRef.current, { x: '100%', duration: 0.38, ease: 'power3.in' });
        }
        if (backdropRef.current) {
          gsap.to(backdropRef.current, { autoAlpha: 0, duration: 0.3 });
        }
        setOpenAccordion(null);
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  // ── Escape key ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // ── Navigate and close ──
  const go = useCallback((href: string) => {
    navigate(href);
    onClose();
  }, [navigate, onClose]);

  // ── Accordion toggle ──
  const toggleAccordion = useCallback((key: string) => {
    if (openAccordion === key) {
      // Close current
      const el = subListRefs.current[key];
      const icon = iconRefs.current[key];
      if (el) gsap.to(el, { height: 0, autoAlpha: 0, duration: 0.35, ease: 'nav' });
      if (icon) gsap.to(icon, { rotate: 0, duration: 0.25 });
      setOpenAccordion(null);
    } else {
      // Close previous
      if (openAccordion) {
        const prevEl = subListRefs.current[openAccordion];
        const prevIcon = iconRefs.current[openAccordion];
        if (prevEl) gsap.to(prevEl, { height: 0, autoAlpha: 0, duration: 0.3, ease: 'nav' });
        if (prevIcon) gsap.to(prevIcon, { rotate: 0, duration: 0.25 });
      }
      // Open new
      const el = subListRefs.current[key];
      const icon = iconRefs.current[key];
      if (el) gsap.fromTo(el, { height: 0, autoAlpha: 0 }, { height: 'auto', autoAlpha: 1, duration: 0.35, ease: 'nav' });
      if (icon) gsap.to(icon, { rotate: 45, duration: 0.25 });
      setOpenAccordion(key);
    }
  }, [openAccordion]);

  // ── CTA hover ──
  const handleCtaEnter = () => gsap.to(ctaBtnRef.current, { background: C.accent, color: C.ink, duration: 0.22 });
  const handleCtaLeave = () => gsap.to(ctaBtnRef.current, { background: C.ink, color: C.bg, duration: 0.22 });

  const getCategoriesForAccordion = (type: string) =>
    type === 'services' ? serviceCategories : techCategories;

  let itemIdx = 0;

  return (
    <>
      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          ref={backdropRef}
          className="mobile-drawer-backdrop"
          style={{ visibility: 'hidden', opacity: 0 }}
          onClick={onClose}
        />
      )}

      {/* ── Drawer ── */}
      <div
        ref={drawerRef}
        className="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={fontBase}
      >
        {/* ── Header ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: `1px solid rgba(10,14,26,0.08)`,
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.4rem',
              color: C.ink,
              fontWeight: 300,
              lineHeight: 1,
              padding: 4,
            }}
          >
            ✕
          </button>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: C.inkMuted,
              ...fontBase,
            }}
          >
            Menu
          </span>
        </div>

        {/* ── Nav Items ── */}
        <div style={{ padding: '24px 28px', flex: 1 }}>
          {navItems.map((item) => {
            const rIdx = itemIdx++;
            if (item.accordion) {
              const categories = getCategoriesForAccordion(item.accordion);
              return (
                <div
                  key={item.text}
                  ref={(el) => { drawerItemRefs.current[rIdx] = el; }}
                  style={{ visibility: 'hidden', opacity: 0 }}
                >
                  <div
                    onClick={() => toggleAccordion(item.text)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      borderBottom: `1px solid ${C.borderLight}`,
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: C.ink, ...fontBase }}>
                      {item.text}
                    </span>
                    <span
                      ref={(el) => { iconRefs.current[item.text] = el; }}
                      style={{ fontSize: '1.2rem', color: C.inkMuted, display: 'inline-block', lineHeight: 1 }}
                    >
                      +
                    </span>
                  </div>

                  {/* Accordion content */}
                  <div
                    ref={(el) => { subListRefs.current[item.text] = el; }}
                    style={{ height: 0, overflow: 'hidden', visibility: 'hidden', opacity: 0 }}
                  >
                    {categories.map((cat) => (
                      <div key={cat.title}>
                        <div
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: C.ink,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: '14px 0 6px 16px',
                            ...fontBase,
                          }}
                        >
                          {cat.title}
                        </div>
                        {cat.links.map((link) => (
                          <div
                            key={link.name}
                            onClick={() => go(link.href)}
                            style={{
                              padding: '10px 0 10px 16px',
                              fontSize: '0.87rem',
                              fontWeight: 500,
                              color: C.inkMuted,
                              borderBottom: `1px solid ${C.borderDim}`,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              cursor: 'pointer',
                              ...fontBase,
                            }}
                          >
                            <span className="mobile-sublink-dot" />
                            {link.name}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.text}
                ref={(el) => { drawerItemRefs.current[rIdx] = el; }}
                onClick={() => go(item.href!)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: `1px solid ${C.borderLight}`,
                  cursor: 'pointer',
                  visibility: 'hidden',
                  opacity: 0,
                }}
              >
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: C.ink, ...fontBase }}>
                  {item.text}
                </span>
                <span style={{ color: C.inkMuted, fontSize: '0.9rem' }}>→</span>
              </div>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div
          style={{
            borderTop: `1px solid rgba(10,14,26,0.08)`,
            padding: '24px 28px',
          }}
        >
          <button
            ref={ctaBtnRef}
            onClick={() => go('/Contact-Us')}
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            style={{
              width: '100%',
              background: C.ink,
              color: C.bg,
              borderRadius: 10,
              padding: 15,
              fontSize: '0.9rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              ...fontBase,
            }}
          >
            Get in Touch
          </button>
          <div
            style={{
              textAlign: 'center',
              marginTop: 14,
              fontSize: '0.68rem',
              color: '#9AA3B5',
              ...fontBase,
            }}
          >
            CMMI Certified · Enterprise Grade
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
