import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import logo from "@/assets/TC-Logo-Main.png";
import './Navbar.css';
import ServicesDropdown from './ServicesDropdown';
import { useNavigate } from 'react-router-dom';
// import TechnologiesDropdown from './TechnologiesDropdown';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [technologiesDropdownOpen, setTechnologiesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`py-6 px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img className='navbar-logo' src={logo} alt="Techcom Logo" onClick={() => navigate("/")} />
        <div className="hidden md:flex space-x-10">
          <a href="/" className="hover:opacity-70 transition-opacity">Home</a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="/about" className="hover:opacity-70 transition-opacity">
              Services <i className="fa-solid fa-caret-down text-sm ml-1"></i>
            </a>
            {dropdownOpen && (
              <div className="absolute top-full left-[130%] transform -translate-x-1/2 z-50">
                <div className="w-[1100px] max-w-[90vw]">
                  <ServicesDropdown />
                </div>
              </div>
            )}
          </div>

          {/* Technologies Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setTechnologiesDropdownOpen(true)}
            onMouseLeave={() => setTechnologiesDropdownOpen(false)}
          >
            <a href="/technologies" className="hover:opacity-70 transition-opacity">
              Technologies <i className="fa-solid fa-caret-down text-sm ml-1"></i>
            </a>
            {technologiesDropdownOpen && (
              <div className="absolute top-full left-[130%] transform -translate-x-1/2 z-50">
              <div className="w-[1100px] max-w-[90vw]">
                <TechnologiesDropdown />
              </div>
            </div>
            )}
          </div> */}

          <a href="/about" className="hover:opacity-70 transition-opacity">Clients</a>
          <a href="/about" className="hover:opacity-70 transition-opacity">Careers</a>
          {/* <a href="/work" className="hover:opacity-70 transition-opacity">Work (6)</a> */}
        </div>

        <a className="border-b-2 border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer " onClick={() => navigate("/Contact-Us")}>Contact</a>

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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white p-6 shadow-md z-50">
          <div className="flex flex-col space-y-6">
            <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
            <a href="/about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="/work" className="hover:opacity-70 transition-opacity">Work (6)</a>
            <a href="/contact" className="border-b-2 border-black inline-block pb-1 hover:opacity-70 transition-opacity">Contact </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
