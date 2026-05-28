const domainRows = [
  { name: 'Administration', pct: 82, level: 'lvl-jagriti' },
  { name: 'Curriculum', pct: 71, level: '' },
  { name: 'Assessment', pct: 68, level: '' },
  { name: 'Infrastructure', pct: 54, level: 'lvl-abhilasha' },
  { name: 'Inclusiveness', pct: 79, level: 'lvl-jagriti' },
];

export default function Dashboard() {
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="container">
        <div className="dash-layout">
          <div className="dash-text">
            <div className="section-eyebrow"><span className="num">06</span> The Outcome Dashboard</div>
            <h2>Every score becomes a <em>decision.</em></h2>
            <p>The moment your school submits the assessment, SQAAF auto-generates a domain-wise performance dashboard, identifies your overall band, and recommends a sub-domain-level action plan.</p>
            <div className="dash-features">
              {[
                { n: '01', title: 'Domain-wise Radar', desc: "See your school's shape of strength across all five quality dimensions." },
                { n: '02', title: 'Band Determination', desc: 'Auto-calculated Abhilasha / Pragati / Jagriti rating with percentile context.' },
                { n: '03', title: 'Sub-domain Action Plan', desc: 'Lowest-scoring indicators auto-surface with framework-aligned next steps.' },
                { n: '04', title: 'Year-on-Year Tracking', desc: 'Compare cycles to evidence continuous improvement to authorities & community.' },
              ].map((f) => (
                <div key={f.n} className="dash-feature">
                  <div className="num">{f.n}</div>
                  <div className="ft"><strong>{f.title}</strong><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-visual">
            <div className="dash-visual-head">
              <div className="title">School Quality Report · Cycle 2025–26</div>
              <div className="ts">Issued · 14 Mar 2026</div>
            </div>
            <div className="dash-grade">
              <div className="pct-big">73<sup>%</sup></div>
              <div>
                <div className="grade-name">Pragati</div>
                <div className="grade-desc">Performing Satisfactorily</div>
                <div className="grade-score">Score · <strong>764 / 1,047</strong> · ↑ 7% vs last cycle</div>
              </div>
            </div>
            <div className="dash-domain-list">
              {domainRows.map((row) => (
                <div key={row.name} className={`dash-domain-row ${row.level}`}>
                  <div className="dn">{row.name}</div>
                  <div className="bar"><div className="fill" style={{ width: `${row.pct}%` }} /></div>
                  <div className="val">{row.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
