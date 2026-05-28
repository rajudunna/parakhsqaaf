'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#framework', label: 'Framework' },
  { href: '#domains', label: '5 Domains' },
  { href: '#assess', label: 'Self-Assessment' },
  { href: '#dashboard', label: 'Reports' },
  { href: '/SQAAF.pdf', label: 'Equivalence of Boards ↓', download: true },
];

export default function Header() {
  const [active, setActive] = useState('#framework');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main">
      <div className="header-inner">
        {/* Logos */}
        <div className="brand">
          <Image
            src="/parakh-logo.jpeg"
            alt="PARAKH"
            width={80}
            height={48}
            className="brand-logo brand-logo-parakh"
            style={{ height: 48, width: 'auto' }}
          />
          <div className="brand-sep" />
          <Image
            src="/adobe-ministry-of-education-collab-removebg-preview.png"
            alt="Ministry of Education, Government of India"
            width={120}
            height={54}
            className="brand-logo brand-logo-moe"
            style={{ height: 54, width: 'auto' }}
          />
        </div>

        {/* Desktop nav */}
        <nav className="primary">
          {navLinks.map(({ href, label, download }) =>
            download ? (
              <a key={href} href={href} download="Equivalence-of-Boards.pdf">{label}</a>
            ) : (
              <a
                key={href}
                href={href}
                className={active === href ? 'active' : ''}
                onClick={() => setActive(href)}
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA + NCERT */}
        <div className="header-cta">
          <Link href="#" className="btn btn-ghost desktop-only">School Login</Link>
          <Link href="#cta" className="btn btn-secondary desktop-only">
            Register School <span className="btn-arrow">→</span>
          </Link>
          <div className="brand-sep desktop-only" />
          <Image
            src="/NCERT.jpeg"
            alt="NCERT"
            width={60}
            height={44}
            className="brand-logo brand-logo-ncert desktop-only"
            style={{ height: 44, width: 'auto' }}
          />
          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            data-open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map(({ href, label, download }) =>
            download ? (
              <a key={href} href={href} download="Equivalence-of-Boards.pdf" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ) : (
              <a
                key={href}
                href={href}
                className={active === href ? 'active' : ''}
                onClick={() => { setActive(href); setMenuOpen(false); }}
              >
                {label}
              </a>
            )
          )}
          <div className="mobile-nav-cta">
            <Link href="#" className="btn btn-ghost" onClick={() => setMenuOpen(false)}>School Login</Link>
            <Link href="#cta" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
              Register School →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
