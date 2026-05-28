const steps = [
  { num: '01', title: 'Self-Reflect', desc: 'Systematically assess current practices across the 5 domains using data, evidence, and stakeholder feedback.' },
  { num: '02', title: 'Analyse Gaps', desc: 'Critically review strengths and improvement areas through the auto-generated domain-wise gap report.' },
  { num: '03', title: 'Plan Action', desc: 'Formulate and implement targeted interventions tied to specific sub-domain weaknesses with a roadmap.' },
  { num: '04', title: 'Measure Impact', desc: 'Reassess outcomes in the next cycle to guide continuous, evidence-based institutional planning.' },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">05</span> The 3-Step SQAAF Journey</div>
          <h2>Not just rating — <em>a deliberate path to improvement.</em></h2>
          <p>SQAAF is designed to move schools beyond self-rating into reflection, planning, and demonstrable change. The process is the product.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
