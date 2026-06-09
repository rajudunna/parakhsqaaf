'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { end: 5, label: 'Quality Domains' },
  { end: 53, label: 'Sub-Domains' },
  { end: 349, label: 'Indicator Questions' },
  { end: 1047, label: 'Quality Points' },
];

function useCountUp(end: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1300;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const n = Math.round(end * eased);
      setVal(n);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end]);
  return val;
}

function Stat({ end, label, active }: { end: number; label: string; active: boolean }) {
  const val = useCountUp(end, active);
  const fmt = (n: number) => n >= 1000 ? n.toLocaleString('en-IN') : String(n);
  return (
    <div className="stat">
      <div className="num">{fmt(val)}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="stats" ref={ref}>
      <div className="stats-grid">
        {STATS.map(s => <Stat key={s.label} {...s} active={active} />)}
      </div>
    </section>
  );
}
