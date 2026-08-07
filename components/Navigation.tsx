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
    <nav className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg shadow-black/[0.03]' : 'glass'
        }`}
      >
        <div className="flex items-center justify-between h-14 px-3 sm:px-4">
          <a href="#home" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink shrink-0">
            <span className="w-8 h-8 rounded-xl gradient-brand flex items-center justify-center text-accent-ink text-sm glow-shadow">
              RM
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-soft'
                      : 'text-ink-soft hover:text-ink hover:bg-bg-soft'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex px-4 py-2 rounded-full border border-line text-ink text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex px-4 py-2 rounded-full gradient-brand text-accent-ink text-sm font-semibold glow-shadow hover:opacity-90 transition-opacity"
            >
              Hire me
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-ink"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-line">
            <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg text-ink-soft hover:bg-bg-soft hover:text-accent font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-ink-soft hover:bg-bg-soft hover:text-accent font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
