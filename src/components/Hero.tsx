export default function Hero() {
  return (
    <section className="hero" id="framework" style={{ paddingTop: 80 }}>
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <span className="dot" />
            Aligned with NEP 2020 &amp; National Curriculum Framework
            <span className="line" />
          </div>
          <h1>
            A national framework to <em>assess,</em> assure, and elevate the{' '}
            <span className="underline">quality of every school</span> in India.
          </h1>
          <p className="lede">
            The <strong>School Quality Assessment &amp; Assurance Framework (SQAAF)</strong> gives
            schools a structured, evidence-backed pathway to evaluate themselves across five domains
            — and turn insight into measurable improvement.
          </p>
          <div className="hero-cta">
            <a href="#assess" className="btn btn-primary">Begin Self-Assessment <span className="btn-arrow">→</span></a>
            <a href="#framework" className="btn btn-ghost">Read the Framework</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">5</span>
              <span className="lbl">Core Domains</span>
            </div>
            <div className="hero-stat">
              <span className="num">53</span>
              <span className="lbl">Sub-Domains</span>
            </div>
            <div className="hero-stat">
              <span className="num">1,047</span>
              <span className="lbl">Max Score</span>
            </div>
            <div className="hero-stat">
              <span className="num">20<span className="pct">%</span></span>
              <span className="lbl">Each Weighted</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="wheel">
            <svg viewBox="-110 -110 220 220" aria-hidden="true">
              <g transform="rotate(-90)">
                <path d="M 0 0 L 95 0 A 95 95 0 0 1 29.36 90.34 Z" fill="#1e4d7b" opacity=".88" />
                <path d="M 0 0 L 29.36 90.34 A 95 95 0 0 1 -76.86 55.85 Z" fill="#7b3a1e" opacity=".88" />
                <path d="M 0 0 L -76.86 55.85 A 95 95 0 0 1 -76.86 -55.85 Z" fill="#2c5e3f" opacity=".88" />
                <path d="M 0 0 L -76.86 -55.85 A 95 95 0 0 1 29.36 -90.34 Z" fill="#6b3e7c" opacity=".88" />
                <path d="M 0 0 L 29.36 -90.34 A 95 95 0 0 1 95 0 Z" fill="#a8541a" opacity=".88" />
              </g>
              <circle cx="0" cy="0" r="100" fill="none" stroke="#0a1f3d" strokeWidth=".8" opacity=".25" />
              <circle cx="0" cy="0" r="98" fill="none" stroke="#0a1f3d" strokeWidth=".4" opacity=".4" />
            </svg>
            <div className="wheel-center">
              <div className="cnt-num">SQAAF</div>
              <div className="cnt-divider" />
              <div className="cnt-frame">Five Domains</div>
              <div className="cnt-lbl">Equal Weight</div>
            </div>
          </div>
          <div className="domain-pill dp-1"><span className="swatch" style={{ background: '#1e4d7b' }} />Administration <span className="pct">20%</span></div>
          <div className="domain-pill dp-2"><span className="swatch" style={{ background: '#7b3a1e' }} />Curriculum <span className="pct">20%</span></div>
          <div className="domain-pill dp-3"><span className="swatch" style={{ background: '#2c5e3f' }} />Assessment <span className="pct">20%</span></div>
          <div className="domain-pill dp-4"><span className="swatch" style={{ background: '#6b3e7c' }} />Infrastructure <span className="pct">20%</span></div>
          <div className="domain-pill dp-5"><span className="swatch" style={{ background: '#a8541a' }} />Inclusiveness <span className="pct">20%</span></div>
        </div>
      </div>
    </section>
  );
}
