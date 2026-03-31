import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import logo from '@/assets/TC-Logo-Main.png';
import './Navbar.css';
import ServicesDropdown from './ServicesDropdown';
import TechnologiesDropdown from './TechnologiesDropdown';
import MobileNav from './MobileNav';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDropdown } from '@/context/DropdownContext';

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create('nav', 'M0,0 C0.16,1 0.3,1 1,1');
CustomEase.create('drop', 'M0,0 C0.12,0 0.1,1 1,1');
CustomEase.create('slide', 'M0,0 C0.25,0.46 0.45,0.94 1,1');

const C = {
  bg: '#FFFFFF',
  ink: '#0A0E1A',
  inkMuted: '#6B7280',
  inkDim: 'rgba(10,14,26,0.06)',
  border: 'rgba(10,14,26,0.09)',
  borderHover: 'rgba(10,14,26,0.22)',
  accent: '#C8FF00',
  accentBg: 'rgba(200,255,0,0.09)',
  accentBorder: 'rgba(200,255,0,0.45)',
  overlay: 'rgba(10,14,26,0.38)',
};

const NAV_HEIGHT_DEFAULT = 68;
const NAV_HEIGHT_SCROLLED = 58;

const ChevronSvg = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg ref={ref} width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ display: 'block' }}>
    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));

interface NavLinkItem {
  href?: string;
  text: string;
  isDropdown?: boolean;
  dropdownType?: 'services' | 'technologies';
}

const navLinks: NavLinkItem[] = [
  { href: '/', text: 'Home' },
  { text: 'Services', isDropdown: true, dropdownType: 'services' },
  { text: 'Technologies', isDropdown: true, dropdownType: 'technologies' },
  { href: '/Our-Clients', text: 'Clients' },
  { href: '/Careers', text: 'Careers' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(NAV_HEIGHT_DEFAULT);

  const {
    isServicesOpen,
    isTechnologiesOpen,
    setServicesOpen,
    setTechnologiesOpen,
    openServices,
    openTechnologies,
  } = useDropdown();

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contactBtnRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const navLinkRefs = useRef<(HTMLElement | null)[]>([]);
  const chevronRefs = useRef<(SVGSVGElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const techTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const anyDropdownOpen = isServicesOpen || isTechnologiesOpen;

  // ── Scroll-based navbar state ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -60',
        onEnter: () => {
          setNavHeight(NAV_HEIGHT_SCROLLED);
          gsap.to(headerRef.current, {
            height: NAV_HEIGHT_SCROLLED,
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(20px) saturate(180%)',
            borderBottomColor: 'rgba(10,14,26,0.08)',
            boxShadow: '0 1px 0 rgba(10,14,26,0.06)',
            duration: 0.4,
            ease: 'nav',
          });
        },
        onLeaveBack: () => {
          setNavHeight(NAV_HEIGHT_DEFAULT);
          gsap.to(headerRef.current, {
            height: NAV_HEIGHT_DEFAULT,
            background: 'rgba(255,255,255,0.0)',
            backdropFilter: 'none',
            borderBottomColor: 'transparent',
            boxShadow: 'none',
            duration: 0.4,
            ease: 'nav',
          });
        },
      });

      // ── Scroll progress bar ──
      gsap.to(progressBarRef.current, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });

      // Show progress bar only after 100px scroll
      ScrollTrigger.create({
        start: 'top -100',
        onEnter: () => gsap.to(progressBarRef.current, { autoAlpha: 1, duration: 0.3 }),
        onLeaveBack: () => gsap.to(progressBarRef.current, { autoAlpha: 0, duration: 0.3 }),
      });
    });

    return () => ctx.revert();
  }, []);

  // ── Entry animation ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -80, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: 'nav', delay: 0.05 }
      );

      const linkEls = navLinkRefs.current.filter(Boolean);
      if (linkEls.length) {
        gsap.fromTo(
          linkEls,
          { autoAlpha: 0, y: -12 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'nav', delay: 0.3 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // ── Chevron rotation ──
  useEffect(() => {
    const sIdx = navLinks.findIndex((l) => l.dropdownType === 'services');
    const tIdx = navLinks.findIndex((l) => l.dropdownType === 'technologies');
    if (chevronRefs.current[sIdx]) {
      gsap.to(chevronRefs.current[sIdx], { rotate: isServicesOpen ? 180 : 0, duration: 0.3, ease: 'nav' });
    }
    if (chevronRefs.current[tIdx]) {
      gsap.to(chevronRefs.current[tIdx], { rotate: isTechnologiesOpen ? 180 : 0, duration: 0.3, ease: 'nav' });
    }
  }, [isServicesOpen, isTechnologiesOpen]);

  // ── Backdrop animation ──
  useEffect(() => {
    if (!backdropRef.current) return;
    if (anyDropdownOpen) {
      gsap.fromTo(backdropRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
    } else {
      gsap.to(backdropRef.current, { autoAlpha: 0, duration: 0.25 });
    }
  }, [anyDropdownOpen]);

  // ── Escape key ──
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setTechnologiesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [setServicesOpen, setTechnologiesOpen]);

  // ── Resize: close mobile ──
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Hover intent for dropdowns ──
  const handleDropdownEnter = useCallback(
    (type: 'services' | 'technologies') => {
      if (type === 'services') {
        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
        openServices();
      } else {
        if (techTimeoutRef.current) clearTimeout(techTimeoutRef.current);
        openTechnologies();
      }
    },
    [openServices, openTechnologies]
  );

  const handleDropdownLeave = useCallback(
    (type: 'services' | 'technologies') => {
      if (type === 'services') {
        servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
      } else {
        techTimeoutRef.current = setTimeout(() => setTechnologiesOpen(false), 200);
      }
    },
    [setServicesOpen, setTechnologiesOpen]
  );

  const handleDropdownPanelEnter = useCallback(
    (type: 'services' | 'technologies') => {
      if (type === 'services' && servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (type === 'technologies' && techTimeoutRef.current) clearTimeout(techTimeoutRef.current);
    },
    []
  );

  const handleDropdownPanelLeave = useCallback(
    (type: 'services' | 'technologies') => {
      if (type === 'services') setServicesOpen(false);
      else setTechnologiesOpen(false);
    },
    [setServicesOpen, setTechnologiesOpen]
  );

  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setTechnologiesOpen(false);
  }, [setServicesOpen, setTechnologiesOpen]);

  // ── Logo hover ──
  const handleLogoEnter = () => gsap.to(logoRef.current, { scale: 1.03, duration: 0.25, ease: 'nav' });
  const handleLogoLeave = () => gsap.to(logoRef.current, { scale: 1, duration: 0.25, ease: 'nav' });

  // ── Contact button hover ──
  const handleContactEnter = () => {
    gsap.to(contactBtnRef.current, {
      background: C.accent,
      color: C.ink,
      borderColor: C.accent,
      duration: 0.22,
      ease: 'nav',
    });
  };
  const handleContactLeave = () => {
    gsap.to(contactBtnRef.current, {
      background: C.ink,
      color: C.bg,
      borderColor: C.ink,
      duration: 0.22,
      ease: 'nav',
    });
  };
  const handleContactDown = () => gsap.to(contactBtnRef.current, { scale: 0.96, duration: 0.1 });
  const handleContactUp = () => gsap.to(contactBtnRef.current, { scale: 1, duration: 0.1 });

  // ── Dot hover ──
  const handleLinkEnter = (idx: number) => {
    if (dotRefs.current[idx]) {
      gsap.to(dotRefs.current[idx], { scale: 1, duration: 0.2, ease: 'back.out(2)' });
    }
  };
  const handleLinkLeave = (idx: number) => {
    const link = navLinks[idx];
    const isActive =
      link.href === location.pathname ||
      (link.dropdownType === 'services' && location.pathname.startsWith('/services')) ||
      (link.dropdownType === 'technologies' && location.pathname.startsWith('/Technologies'));
    if (!isActive && dotRefs.current[idx]) {
      gsap.to(dotRefs.current[idx], { scale: 0, duration: 0.15 });
    }
  };

  const isLinkActive = (link: NavLinkItem) => {
    if (link.href) return link.href === location.pathname;
    if (link.dropdownType === 'services') return location.pathname.startsWith('/services');
    if (link.dropdownType === 'technologies') return location.pathname.startsWith('/Technologies');
    return false;
  };

  const fontBase: React.CSSProperties = { fontFamily: "'Syne', sans-serif" };

  return (
    <>
      <header
        ref={headerRef}
        style={{
          ...fontBase,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: NAV_HEIGHT_DEFAULT,
          background: 'rgba(255,255,255,0.0)',
          borderBottom: '1px solid transparent',
          backdropFilter: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 48px)',
          visibility: 'hidden',
          opacity: 0,
        }}
      >
        {/* ── Logo ── */}
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        >
          <img ref={logoRef} className="navbar-logo" src={logo} alt="TechCompiler Logo" />
        </div>

        {/* ── Center Nav Links (desktop) ── */}
        <nav
          style={{
            alignItems: 'center',
            gap: 0,
            height: '100%',
          }}
          className="hidden lg:flex"
        >
          {navLinks.map((link, idx) => {
            const active = isLinkActive(link);

            if (link.isDropdown) {
              return (
                <div
                  key={link.text}
                  style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => handleDropdownEnter(link.dropdownType!)}
                  onMouseLeave={() => handleDropdownLeave(link.dropdownType!)}
                >
                  <button
                    ref={(el) => { navLinkRefs.current[idx] = el; }}
                    aria-haspopup="true"
                    aria-expanded={link.dropdownType === 'services' ? isServicesOpen : isTechnologiesOpen}
                    style={{
                      ...fontBase,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: C.ink,
                      padding: '0 14px',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    onMouseEnter={() => handleLinkEnter(idx)}
                    onMouseLeave={() => handleLinkLeave(idx)}
                  >
                    {link.text}
                    <ChevronSvg ref={(el) => { chevronRefs.current[idx] = el; }} />
                    <span
                      ref={(el) => { dotRefs.current[idx] = el; }}
                      className={`nav-link-dot${active ? ' active' : ''}`}
                    />
                  </button>
                </div>
              );
            }

            return (
              <button
                key={link.text}
                ref={(el) => { navLinkRefs.current[idx] = el; }}
                onClick={() => { navigate(link.href!); closeAllDropdowns(); }}
                style={{
                  ...fontBase,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: C.ink,
                  padding: '0 14px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={() => handleLinkEnter(idx)}
                onMouseLeave={() => handleLinkLeave(idx)}
              >
                {link.text}
                <span
                  ref={(el) => { dotRefs.current[idx] = el; }}
                  className={`nav-link-dot${active ? ' active' : ''}`}
                />
              </button>
            );
          })}
        </nav>

        {/* ── Contact CTA (desktop) ── */}
        <button
          ref={contactBtnRef}
          className="hidden lg:block"
          onClick={() => { navigate('/Contact-Us'); closeAllDropdowns(); }}
          onMouseEnter={handleContactEnter}
          onMouseLeave={handleContactLeave}
          onMouseDown={handleContactDown}
          onMouseUp={handleContactUp}
          style={{
            ...fontBase,
            background: C.ink,
            color: C.bg,
            borderRadius: 8,
            padding: '10px 22px',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            border: `1.5px solid ${C.ink}`,
            cursor: 'pointer',
          }}
        >
          Contact
        </button>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="lg:hidden flex flex-col gap-[5px]"
          onClick={() => setMobileOpen(true)}
          style={{ padding: 8, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="Open navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* ── Scroll Progress Bar ── */}
        <div ref={progressBarRef} className="nav-progress-bar" style={{ visibility: 'hidden', opacity: 0 }} />
      </header>

      {/* ── Dropdown Backdrop ── */}
      {anyDropdownOpen && (
        <div
          ref={backdropRef}
          className="dropdown-backdrop"
          style={{ top: navHeight, visibility: 'hidden', opacity: 0 }}
          onClick={closeAllDropdowns}
        />
      )}

      {/* ── Services Dropdown Panel ── */}
      {isServicesOpen && (
        <div
          onMouseEnter={() => handleDropdownPanelEnter('services')}
          onMouseLeave={() => handleDropdownPanelLeave('services')}
        >
          <ServicesDropdown
            isOpen={isServicesOpen}
            onClose={() => setServicesOpen(false)}
            navHeight={navHeight}
          />
        </div>
      )}

      {/* ── Technologies Dropdown Panel ── */}
      {isTechnologiesOpen && (
        <div
          onMouseEnter={() => handleDropdownPanelEnter('technologies')}
          onMouseLeave={() => handleDropdownPanelLeave('technologies')}
        >
          <TechnologiesDropdown
            isOpen={isTechnologiesOpen}
            onClose={() => setTechnologiesOpen(false)}
            navHeight={navHeight}
          />
        </div>
      )}

      {/* ── Mobile Nav ── */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
