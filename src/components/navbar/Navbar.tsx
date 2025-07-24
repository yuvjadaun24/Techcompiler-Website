import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import logo from "@/assets/TC-Logo-Main.png";
import './Navbar.css';
import ServicesDropdown from './ServicesDropdown';
import { useNavigate } from 'react-router-dom';
import TechnologiesDropdown from './TechnologiesDropdown';
import { useDropdown } from '@/context/DropdownContext';
import { MobileServicesDropdown, MobileTechnologiesDropdown } from './MobileDropdowns';

const navLinks = [
  { href: '/', text: 'Home' },
  { text: 'Services', isDropdown: true, mobileComponent: MobileServicesDropdown },
  { text: 'Technologies', isDropdown: true, mobileComponent: MobileTechnologiesDropdown },
  { href: '/Our-Clients', text: 'Clients' },
  { href: '/Careers', text: 'Careers' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const {
    isServicesOpen,
    isTechnologiesOpen,
    setServicesOpen,
    setTechnologiesOpen
  } = useDropdown();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMouseLeave = (setter: (isOpen: boolean) => void) => {
    setTimeout(() => {
      setter(false);
    }, 200);
  };

  const handleMobileDropdown = (dropdown: string) => {
    if (mobileDropdown === dropdown) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(dropdown);
    }
  };

  return (
    <nav className={`py-4 md:py-6 px-4 sm:px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img className='navbar-logo h-8 md:h-8 lg:h-10' src={logo} alt="Techcom Logo" onClick={() => navigate("/")} />
        <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
          <a href="/" className="hover:opacity-70 transition-opacity text-sm lg:text-base">Home</a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => handleMouseLeave(setServicesOpen)}
          >
            <a onClick={() => setServicesOpen(!isServicesOpen)} className="hover:opacity-70 transition-opacity text-sm lg:text-base cursor-pointer">
              Services <i className="fa-solid fa-caret-down text-sm ml-1"></i>
            </a>
            {isServicesOpen && (
              <div className="absolute top-full -left-1/2 transform -translate-x-1/2 z-50">
                <div className="w-[1100px] max-w-[90vw]">
                  <ServicesDropdown />
                </div>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTechnologiesOpen(true)}
            onMouseLeave={() => handleMouseLeave(setTechnologiesOpen)}
          >
            <a onClick={() => setTechnologiesOpen(!isTechnologiesOpen)} className="hover:opacity-70 transition-opacity text-sm lg:text-base cursor-pointer">
              Technologies <i className="fa-solid fa-caret-down text-sm ml-1"></i>
            </a>
            {isTechnologiesOpen && (
              <div className="absolute top-full -left-1/2 transform -translate-x-1/2 z-50">
                <div className="w-[1100px] max-w-[90vw]">
                  <TechnologiesDropdown setTechnologiesDropdownOpen={setTechnologiesOpen} />
                </div>
              </div>
            )}
          </div>

          <a className="hover:opacity-70 transition-opacity text-sm lg:text-base cursor-pointer" onClick={() => navigate("/Our-Clients")}>Clients</a>
          <a className="hover:opacity-70 transition-opacity text-sm lg:text-base cursor-pointer" onClick={() => navigate("/Careers")}>Careers</a>
        </div>

        <a className="hidden md:block border-b-2 border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer text-sm lg:text-base" onClick={() => navigate("/Contact-Us")}>Contact</a>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-6 shadow-md z-50">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => {
              if (link.isDropdown) {
                const DropdownComponent = link.mobileComponent;
                return (
                  <div key={index}>
                    <div
                      className="hover:opacity-70 transition-opacity flex justify-between items-center"
                      onClick={() => handleMobileDropdown(link.text)}
                    >
                      <span>{link.text}</span>
                      <ChevronDown
                        className={`transition-transform duration-300 ${mobileDropdown === link.text ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {mobileDropdown === link.text && <DropdownComponent setIsOpen={setIsOpen} />}
                  </div>
                )
              }
              return (
                <a
                  key={index}
                  href={link.href}
                  className="hover:opacity-70 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href!);
                    setIsOpen(false);
                  }}
                >
                  {link.text}
                </a>
              )
            })}
            <a
              href="/Contact-Us"
              className="border-b-2 border-black inline-block pb-1 hover:opacity-70 transition-opacity pt-4"
              onClick={(e) => {
                e.preventDefault();
                navigate("/Contact-Us");
                setIsOpen(false);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
