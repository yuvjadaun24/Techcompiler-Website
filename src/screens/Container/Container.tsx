import React from "react";
import { FooterByAnima } from "./sections/FooterByAnima";
import { MainByAnima } from "./sections/MainByAnima";

export const Container = (): JSX.Element => {
  // Navigation links data for easy mapping
  const navLinks = [
    { text: "Home", active: false },
    { text: "About", active: false },
    { text: "Work (6)", active: false },
    { text: "Contact", active: true },
  ];

  return (
    <div className="flex flex-col w-full" data-model-id="79:4">
      {/* Navigation Header */}
      <header className="w-full py-3 border-b">
        <nav className="container flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              className="w-[104px] h-[26px]"
              alt="Logo"
              src="/67d166ef8bbb68582c3026ae-group-201000004919-svg.svg"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <a
                  href="#"
                  className={`text-black text-base leading-4 font-normal p-1 block ${
                    link.active ? "font-medium" : ""
                  }`}
                >
                  {link.text}
                </a>
                {link.active && (
                  <div className="w-full h-px absolute bottom-0 left-0 bg-black" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full">
        <MainByAnima />
      </main>

      {/* Footer */}
      <footer className="w-full">
        <FooterByAnima />
      </footer>
    </div>
  );
};
