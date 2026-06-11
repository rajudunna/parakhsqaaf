export default function Process() {
  const steps = [
    { num: '01', title: 'Self-Assess', desc: 'Rate all 349 indicators across the five domains with evidence and stakeholder input.' },
    { num: '02', title: 'Diagnose', desc: 'Auto-generated dashboard reveals strengths and the lowest-scoring sub-domains.' },
    { num: '03', title: 'Plan', desc: 'Build a School Quality Improvement Plan with framework-aligned actions & owners.' },
    { num: '04', title: 'Accredit', desc: 'SSSA reviews evidence, validates the rating and grants assurance status.' },
    { num: '05', title: 'Re-measure', desc: 'Reassess next cycle, benchmark against peers and evidence continuous growth.' },
  ];
  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <div className="section-head center" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">05</span><span className="rule"></span>How It Works
          </div>
          <h2 className="disp">From self-assessment to <em>assurance</em> in five steps</h2>
          <p>SQAAF is not a one-time audit. It is a continuous improvement cycle — each step feeding the next, each cycle raising the baseline for the one that follows.</p>
        </div>
        <div className="wf-steps">
          {steps.map(s => (
            <div key={s.num} className="wf-step">
              <div className="ball">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
