"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#ai-detection", label: "AI Detection" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f2548]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Top strip */}
      <div className="bg-[#f97316] py-1 px-4 text-center text-xs text-white font-medium">
        🇮🇳 &nbsp; Government of India — Smart Municipal Services Portal &nbsp; | &nbsp; Toll-Free: 1800-XXX-XXXX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-xl">🏛️</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">MunicipalAI</p>
              <p className="text-blue-200 text-xs leading-none">Smart City Portal</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-officer-login"
              className="text-white border border-white/30 hover:border-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
            >
              Officer Login
            </button>
            <a
              href="#ai-detection"
              className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg"
            >
              File Complaint
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f2548]/98 backdrop-blur-md px-4 pb-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-blue-100 hover:text-white py-2 text-sm font-medium border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-3">
            <button className="flex-1 text-white border border-white/30 py-2 rounded-lg text-sm font-medium">
              Officer Login
            </button>
            <a href="#ai-detection" onClick={() => setMobileOpen(false)} className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold text-center">
              File Complaint
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
