'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Projects"];

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-md border-b border-black/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group ">
            <Image
              src="/logo/logo.png"
              alt="PR Constructions Logo"
              width={150}
              height={120}
              className="w-36 md:w-40 h-auto object-contain transition-transform duration-300 group-hover:scale-105 mr-0 lg:mr-32"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-[#0F172A] hover:bg-black/5'
                    : 'text-[#4a3f35] hover:bg-black/5'
                }`}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className={`ml-4 px-6 py-2.5 font-semibold rounded-xl shadow-md transition-all duration-200 ${
                isScrolled
                  ? 'bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white'
                  : 'bg-[#4a3f35] text-white hover:bg-black'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-500 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="pt-28 flex flex-col items-center gap-8 text-lg font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-[var(--primary)] transition"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-6 py-3 bg-[var(--primary)] text-white rounded-xl shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
