"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-ink" : ""
      }`}
    >
      <div
        className="absolute left-0 top-0 h-[2px] bg-accent origin-left transition-transform duration-200"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
      />

      <nav className="page-rail grid grid-cols-12 gap-4 py-4 items-center">
        <a href="#top" className="col-span-6 md:col-span-2 xl:col-span-3 flex min-w-0 items-center gap-3 group">
          <span className="shrink-0 font-display text-2xl text-ink leading-none">
            M<span className="serif-italic font-light">A</span>
            <span className="text-accent">.</span>
          </span>
          <span className="hidden xl:block max-w-[12rem] truncate text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
            {PERSONAL.name.first} {PERSONAL.name.last}
          </span>
        </a>

        <ul className="hidden md:flex col-span-8 xl:col-span-7 items-center justify-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="ink-link text-xs font-mono uppercase tracking-[0.18em] text-ink-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex col-span-2 justify-end">
          <a
            href="/cv.pdf"
            download="Abubakr_Resume.pdf"
            className="font-mono text-xs uppercase tracking-[0.18em] text-ink bg-paper border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
          >
            Resume ↓
          </a>
        </div>

        <button
          className="md:hidden col-span-6 justify-self-end text-ink"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-ink">
          <ul className="page-rail flex flex-col py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-ink font-mono text-sm uppercase tracking-[0.18em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
