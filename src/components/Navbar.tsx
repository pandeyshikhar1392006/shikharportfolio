"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        <a
          href="#home"
          className={`flex-shrink-0 font-display font-extrabold tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-transparent"
          }`}
        >
          SP
        </a>

        <div className="hidden md:flex items-center gap-8 ml-auto font-utility text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                scrolled
                  ? "text-ink/70 hover:text-royal"
                  : "text-transparent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
            scrolled ? "border-ink/20 text-ink" : "border-transparent text-transparent"
          }`}
          aria-label="Toggle menu"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && scrolled && (
        <div className="md:hidden bg-cream border-t border-line px-4 sm:px-6 py-4 flex flex-col gap-4 font-utility text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
