'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow ${isScrolled ? 'border-line shadow-sm' : 'border-transparent'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="shrink-0 whitespace-nowrap font-display text-base font-semibold tracking-tight text-ink" aria-label="Rashid Mehmood, home">
            Rashid Mehmood
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent'
                      : 'text-ink-soft hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <a
              href="/resume.pdf"
              download
              className="btn-ghost hidden px-3.5 py-2 text-sm lg:inline-flex"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn-primary inline-flex whitespace-nowrap px-4 py-2 text-sm"
            >
              Hire me
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-line md:hidden">
            <div className="flex flex-col gap-1 px-3 pb-4 pt-2">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-lg px-3.5 py-2.5 font-medium ${
                      isActive ? 'text-accent' : 'text-ink-soft hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3.5 py-2.5 font-medium text-ink-soft hover:bg-bg-soft hover:text-ink"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-1 px-3.5 py-2.5 text-center text-sm"
              >
                Hire me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
