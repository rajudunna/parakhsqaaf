const domains = [
  { color: 'adm', icon: 'अ', title: 'Administration', meta: 'Domain 1 · Governance & Leadership', desc: 'Leadership, vision, financial stewardship, staff development, stakeholder engagement, and school safety.', points: 168, subs: 8 },
  { color: 'cur', icon: 'क', title: 'Curriculum', meta: 'Domain 2 · Learning Design', desc: 'Curriculum alignment, learner-centred pedagogy, 21st-century skills, digital literacy, arts, and multilingual education.', points: 354, subs: 17 },
  { color: 'ass', icon: 'मू', title: 'Assessment', meta: 'Domain 3 · Evaluation Practice', desc: 'Competency-based assessment, Holistic Progress Cards, formative & summative methods, integrity, and credit systems.', points: 180, subs: 11 },
  { color: 'inf', icon: 'सं', title: 'Infrastructure', meta: 'Domain 4 · Physical & Digital', desc: 'Basic amenities, smart classrooms, labs, library, playgrounds, green buildings, and sustainable practices.', points: 153, subs: 9 },
  { color: 'inc', icon: 'स', title: 'Inclusiveness', meta: 'Domain 5 · Equity & Belonging', desc: 'Special needs support, gender sensitivity, tribal engagement, socio-economic inclusivity, and talent nurturance.', points: 192, subs: 8 },
];

export default function Domains() {
  return (
    <section className="domains" id="domains">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">02</span> The Five Domains</div>
          <h2>One school. Five dimensions. <em>Equal weight, holistic view.</em></h2>
          <p>Each domain is broken down into sub-domains and granular indicators, each rated against three performance levels with evidence-supported scoring.</p>
        </div>

        <div className="domains-grid">
          {domains.map((d) => (
            <div key={d.color} className="domain-card" data-color={d.color}>
              <div className="ic">{d.icon}</div>
              <h3>{d.title}</h3>
              <div className="meta">{d.meta}</div>
              <p className="desc">{d.desc}</p>
              <div className="footer">
                <div>
                  <div className="points">{d.points}</div>
                  <div className="points-lbl">Max Points</div>
                </div>
                <div className="subs"><strong>{d.subs}</strong>Sub-Domains</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
