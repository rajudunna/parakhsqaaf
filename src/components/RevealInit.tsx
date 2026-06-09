'use client';
import { useEffect } from 'react';

export default function RevealInit() {
  useEffect(() => {
    const sel = '.section-head,.gap-card,.fw-row,.tier-card,.feat,.wf-step,.why-solution,.stat,.faq-item,.contact-form,.contact-left';
    const els = document.querySelectorAll<HTMLElement>(sel);
    els.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transitionDelay = (Math.min(i, 4) * 55) + 'ms';
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
