'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-hcount]');
    els.forEach(el => {
      const target = +(el.dataset.hcount ?? 0);
      const dur = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN');
        if (p < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 500);
    });
  }, []);

  return (
    <section className="hero">
      <div className="net" aria-hidden="true">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="#f0b53f" strokeWidth="1" opacity=".5">
            <path d="M1180 60 L1320 150 L1280 300 L1400 380 M1320 150 L1180 240 L1280 300 M1180 240 L1100 120 L1180 60 M1100 380 L1280 300 M1100 380 L1180 500 L1340 480 L1400 380" />
            <path d="M980 480 L1100 380 M980 480 L1180 500 M860 600 L980 480 L1020 620" />
          </g>
          <g fill="#f0b53f" opacity=".7">
            <circle cx="1180" cy="60" r="3" /><circle cx="1320" cy="150" r="3" /><circle cx="1280" cy="300" r="3" />
            <circle cx="1400" cy="380" r="3" /><circle cx="1180" cy="240" r="3" /><circle cx="1100" cy="120" r="2.5" />
            <circle cx="1100" cy="380" r="2.5" /><circle cx="980" cy="480" r="2.5" /><circle cx="1180" cy="500" r="3" />
            <circle cx="1340" cy="480" r="2.5" /><circle cx="1020" cy="620" r="2.5" /><circle cx="860" cy="600" r="2.5" />
          </g>
        </svg>
      </div>
      <div className="plus-grid" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Aligned with NEP 2020 &amp; the National Curriculum Framework
          </span>
          <h1>A National Standard to <span className="gold">Assessment &amp; Assurance</span> the Quality of Every School</h1>
          <p className="lede">
            A complete school quality system that digitises the official <strong>SQAAF framework</strong> —
            from guided self-assessment and evidence collection to improvement planning and SSSA accreditation.{' '}
            <strong>5 domains, 53 sub-domains, 1,047 quality points</strong>, scored across three growth tiers.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Us
            </a>
            <a href="#contact" className="btn btn-ghost-light">Request a Demo</a>
          </div>
          <div className="hero-trust">
            <div className="ht"><span className="v">5</span><span className="l">Quality Domains</span></div>
            <div className="div"></div>
            <div className="ht"><span className="v">53</span><span className="l">Sub-Domains</span></div>
            <div className="div"></div>
            <div className="ht"><span className="v">349</span><span className="l">Indicators</span></div>
            <div className="div"></div>
            <div className="ht"><span className="v">1,047</span><span className="l">Quality Points</span></div>
          </div>
        </div>

        <div className="hero-mock">
          <div className="mock-window">
            <div className="mock-bar">
              <div className="dots"><i></i><i></i><i></i></div>
              <span className="ttl">SQAAF — School Quality Dashboard</span>
            </div>
            <div className="mock-body">
              <div className="mock-tabs">
                <span className="on">Overview</span>
                <span>Domains</span>
                <span>Evidence</span>
                <span>Improvement Plan</span>
                <span>Report</span>
              </div>
              <div className="mock-kpis">
                <div className="mkpi c1">
                  <div className="k">Overall Score</div>
                  <div className="vv" data-hcount="764">0</div>
                  <div className="d">↑ of 1,047</div>
                </div>
                <div className="mkpi c2">
                  <div className="k">Band</div>
                  <div className="vv" style={{ fontSize: 13 }}>Pragati</div>
                  <div className="d">73%</div>
                </div>
                <div className="mkpi c3">
                  <div className="k">Indicators</div>
                  <div className="vv" data-hcount="349">0</div>
                  <div className="d">100% rated</div>
                </div>
                <div className="mkpi c4">
                  <div className="k">Evidence</div>
                  <div className="vv" data-hcount="218">0</div>
                  <div className="d">files linked</div>
                </div>
              </div>
              <div className="mock-charts">
                <div className="mchart">
                  <div className="ch-head">Domain Performance <span className="pill">2025–26</span></div>
                  <div className="ch-body">
                    <div className="donut">
                      <svg width="88" height="88" viewBox="0 0 88 88">
                        <circle cx="44" cy="44" r="34" fill="none" stroke="#eee3d3" strokeWidth="12" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--green)" strokeWidth="12" strokeDasharray="158 214" strokeLinecap="round" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--gold)" strokeWidth="12" strokeDasharray="44 214" strokeDashoffset="-158" strokeLinecap="round" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--red)" strokeWidth="12" strokeDasharray="12 214" strokeDashoffset="-202" strokeLinecap="round" />
                      </svg>
                      <div className="ctr"><div className="pc">73%</div><div className="lb">Pragati</div></div>
                    </div>
                  </div>
                </div>
                <div className="mchart">
                  <div className="ch-head">Tier Distribution <span className="pill">All Domains</span></div>
                  <div className="ch-body">
                    <div className="donut">
                      <svg width="88" height="88" viewBox="0 0 88 88">
                        <circle cx="44" cy="44" r="34" fill="none" stroke="#eee3d3" strokeWidth="12" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--crimson)" strokeWidth="12" strokeDasharray="108 214" strokeLinecap="round" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--gold)" strokeWidth="12" strokeDasharray="70 214" strokeDashoffset="-108" strokeLinecap="round" />
                        <circle cx="44" cy="44" r="34" fill="none" stroke="var(--rust)" strokeWidth="12" strokeDasharray="36 214" strokeDashoffset="-178" strokeLinecap="round" />
                      </svg>
                      <div className="ctr"><div className="pc">5</div><div className="lb">Domains</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mock-foot">
                <div className="mfoot f1"><div className="fl">Administration</div><div className="fv">82%</div><div className="fd">Jagriti</div></div>
                <div className="mfoot f2"><div className="fl">Curriculum</div><div className="fv">71%</div><div className="fd">Pragati</div></div>
                <div className="mfoot f3"><div className="fl">Infrastructure</div><div className="fv">54%</div><div className="fd">Abhilasha</div></div>
                <div className="mfoot f4"><div className="fl">Inclusiveness</div><div className="fv">79%</div><div className="fd">Jagriti</div></div>
              </div>
            </div>
          </div>
          <div className="mock-tags">
            <div className="mock-tag mt1"><span className="dt" style={{ background: 'var(--green)' }}></span>SSSA Verified</div>
            <div className="mock-tag mt2"><span className="dt" style={{ background: 'var(--gold)' }}></span>Evidence-Backed</div>
            <div className="mock-tag mt3"><span className="dt" style={{ background: 'var(--crimson)' }}></span>UDISE+ Linked</div>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0 60 L0 30 Q360 0 720 24 T1440 22 L1440 60 Z" fill="var(--ivory)" />
        </svg>
      </div>
    </section>
  );
}
