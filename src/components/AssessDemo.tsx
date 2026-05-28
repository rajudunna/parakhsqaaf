'use client';
import { useState } from 'react';

const navItems = [
  { label: 'Administration', count: '8 / 8', done: true },
  { label: 'Curriculum', count: '6 / 17', active: true },
  { label: 'Assessment', count: '0 / 11' },
  { label: 'Infrastructure', count: '0 / 9' },
  { label: 'Inclusiveness', count: '0 / 8' },
];

const options = [
  { name: 'Abhilasha', score: '+2 pts', desc: 'Skill-based modules are absent or treated as optional extras with no curricular linkage.' },
  { name: 'Pragati', score: '+4 pts', desc: 'Skill modules exist for select grades but vocational framework alignment is partial.', defaultSelected: true },
  { name: 'Jagriti', score: '+6 pts', desc: 'Full integration across grades, mapped to NSQF levels, with certified vocational educators.' },
];

export default function AssessDemo() {
  const [selected, setSelected] = useState(1);
  const [activeNav, setActiveNav] = useState(1);

  return (
    <section className="assess-demo" id="assess">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">04</span> The Self-Assessment Portal</div>
          <h2>From <em>250+ indicator questions</em> to a clear, actionable report — in one workflow.</h2>
          <p>A live preview of the school-facing self-assessment interface. Save progress, upload supporting evidence, and submit for review — all in a single, structured experience.</p>
        </div>

        <div className="demo-layout">
          <aside className="demo-sidebar">
            <div className="sb-head">
              <div className="sch">Rajkiya Pratibha Vikas Vidyalaya</div>
              <div className="udise">UDISE+ 0901100201 · Cycle 2026</div>
            </div>
            <div className="sb-progress">
              <div className="lbl">Overall Progress</div>
              <div className="progress-bar" />
              <div className="progress-pct">38<span>% complete</span></div>
            </div>
            <ul className="sb-nav">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className={item.done ? 'done' : activeNav === i ? 'active' : ''}
                  onClick={() => setActiveNav(i)}
                >
                  {item.label} <span className="ck">{item.count}{item.done ? ' ✓' : ''}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="demo-main">
            <div className="demo-breadcrumb">Domain 2 — Curriculum / Sub-domain 5 · <span>Skill-based Education</span></div>
            <h3 className="demo-q-title">How effectively does the school integrate skill-based education aligned with national vocational frameworks?</h3>
            <div className="demo-q-meta">
              <span className="qcode">Q-CUR-5.2</span>
              <span>Indicator weightage: 6 points</span>
              <span>Required evidence: 2 documents</span>
            </div>

            <div className="demo-options">
              {options.map((opt, i) => (
                <div
                  key={i}
                  className={`demo-opt${selected === i ? ' selected' : ''}`}
                  onClick={() => setSelected(i)}
                >
                  <div className="radio" />
                  <div className="opt-head">
                    <div className="opt-name"><em>{opt.name}</em></div>
                    <div className="opt-score">{opt.score}</div>
                  </div>
                  <div className="opt-desc">{opt.desc}</div>
                </div>
              ))}
            </div>

            <div className="demo-evidence">
              <div className="ev-text">
                <strong>Supporting Evidence</strong>
                <p>Upload curriculum maps, NSQF certificates, or workshop reports (PDF · DOCX · JPG · max 10 MB)</p>
              </div>
              <a href="#" className="btn btn-ghost">+ Add Evidence</a>
            </div>

            <div className="demo-footer">
              <div className="save-note"><span className="dot" />Auto-saved at 14:32 IST</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="#" className="btn btn-ghost">← Previous</a>
                <a href="#" className="btn btn-primary">Save &amp; Continue →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
