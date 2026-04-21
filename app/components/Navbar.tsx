"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { schoolConfig } from "../config/school";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar-sticky">
      {/* Top bar */}
      <div className="bg-primary text-white text-xs px-6 py-1.5 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span>📞 {schoolConfig.contact.phone}</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">✉️ {schoolConfig.contact.email}</span>
        </div>
        <div className="flex gap-3 text-xs">
          <a href={schoolConfig.social.facebook} target="_blank" rel="noreferrer"
            className="hover:text-secondary transition-colors">Facebook</a>
          <a href={schoolConfig.social.instagram} target="_blank" rel="noreferrer"
            className="hover:text-secondary transition-colors">Instagram</a>
          <a href={schoolConfig.social.youtube} target="_blank" rel="noreferrer"
            className="hover:text-secondary transition-colors">YouTube</a>
        </div>
      </div>

      {/* Logo bar */}
      <div className={`bg-white px-6 py-3 flex items-center justify-between transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-white border-2 border-secondary">
            S
          </div>
          <div>
            <div className="text-xl font-bold text-primary leading-tight">{schoolConfig.name}</div>
            <div className="text-xs text-muted">{schoolConfig.tagline}</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admissions#enquiry"
            className="hidden md:block bg-secondary text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            Admission Enquiry
          </Link>
          <button className="md:hidden text-primary text-2xl p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="bg-primary text-white hidden md:block">
        <ul className="flex max-w-7xl mx-auto">
          {schoolConfig.nav.map((item) => (
            <li key={item.label} className="relative group"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}>
              <Link href={item.href}
                className="flex items-center gap-1 px-4 py-3.5 text-sm font-medium hover:bg-secondary transition-colors">
                {item.label}
                {item.children && <span className="text-xs opacity-70">▾</span>}
              </Link>
              {item.children && openDropdown === item.label && (
                <ul className="absolute top-full left-0 bg-white text-primary shadow-xl z-50 min-w-52 rounded-b-lg overflow-hidden">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-accent hover:text-primary border-b border-border transition-colors">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-border shadow-lg">
          {schoolConfig.nav.map((item) => (
            <div key={item.label}>
              <Link href={item.href}
                className="block px-6 py-3 text-sm font-medium text-primary border-b border-border hover:bg-accent"
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.label} href={child.href}
                  className="block px-10 py-2.5 text-xs text-muted border-b border-border bg-gray-50 hover:bg-accent"
                  onClick={() => setMenuOpen(false)}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-4">
            <Link href="/admissions#enquiry"
              className="block bg-secondary text-white text-center py-3 rounded-full font-semibold text-sm"
              onClick={() => setMenuOpen(false)}>
              Admission Enquiry
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
