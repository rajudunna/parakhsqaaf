'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('nav.primary a')];
    const spy = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = (e.target as HTMLElement).id;
          navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        }
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(a => {
      const href = a.getAttribute('href') ?? '';
      if (href.startsWith('#')) {
        const el = document.getElementById(href.slice(1));
        if (el) spy.observe(el);
      }
    });
    return () => spy.disconnect();
  }, []);

  return (
    <header className={`main${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="header-inner">
        <div className="logo-lockup">
          <div className="ministry">
            <a href="#top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/adobe-ministry-of-education-collab-removebg-preview.png" alt="Ministry of Education" width="110" />
            </a>
          </div>
          <div className="logo-ncert">
            &nbsp;
            <a href="#top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/NCERT.jpeg" alt="NCERT" width="70" />
            </a>
          </div>
          <div className="parakh">
            <a href="#top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/parakh-logo.jpeg" alt="PARAKH" width="55" />
            </a>
          </div>
        </div>

        <nav className={`primary${menuOpen ? ' open' : ''}`} id="primaryNav">
          <a href="#why" onClick={() => setMenuOpen(false)}>Why SQAAF</a>
          <a href="#framework" onClick={() => setMenuOpen(false)}>5-Domain Framework</a>
          <a href="#levels" onClick={() => setMenuOpen(false)}>3-Tier Rating</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#showcaseSec" onClick={() => setMenuOpen(false)}>Platform Demo</a>
          <a href="#engineSec" onClick={() => setMenuOpen(false)}>Action Engine</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="http://139.59.7.35/sqaaf-website/SQAAFpdf.pdf" target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>Equivalence of Boards</a>
          <a href="https://demo.parakhsqaaf.com/#/register" target="_blank" rel="noopener" className="nav-register-mobile" onClick={() => setMenuOpen(false)}>Register Your School</a>
        </nav>

        <div className="header-right">
          <a href="https://demo.parakhsqaaf.com/#/register" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Register Your School</a>
        </div>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
