export default function PerfLevels() {
  return (
    <section className="tiers" id="levels">
      <div className="plus-grid" aria-hidden="true"></div>
      <div className="container inner">
        <div className="section-head center" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">03</span><span className="rule"></span>The Three-Tier Rating Model
          </div>
          <h2 className="disp">Three benchmarks. One <em>upward trajectory.</em></h2>
          <p>Every indicator is rated against three growth tiers — drawn from the Sanskrit lexicon of progress — capturing
            not just where a school stands today, but where it is headed next. Each carries 1, 2 or 3 points.</p>
        </div>

        <div className="tier-track">
          <div className="node n1"><span className="dot"></span><span className="cap">Aspiration</span></div>
          <div className="seg"></div>
          <div className="node n2"><span className="dot"></span><span className="cap">Progress</span></div>
          <div className="seg"></div>
          <div className="node n3"><span className="dot"></span><span className="cap">Awakening</span></div>
        </div>

        <div className="tier-grid">
          <div className="tier-card t1">
            <div className="ribbon"></div>
            <div className="lvl">Level 01 · 1 Point · Needs Improvement</div>
            <div className="nm">Abhilasha</div>
            <div className="dev">अभिलाषा · <span className="g">&ldquo;Aspiration&rdquo;</span></div>
            <div className="pct"><sup>&lt;</sup>60<sup>%</sup><span className="of">domain score</span></div>
            <p className="sm">The foundational stage. Schools show limited alignment with benchmarks and significant gaps in
              planning, resources and execution.</p>
            <ul>
              <li>Minimal or inconsistent quality practices</li>
              <li>Limited adherence to national standards</li>
              <li>Lacking structured planning &amp; monitoring</li>
              <li>Inadequate resources for benchmarks</li>
            </ul>
          </div>
          <div className="tier-card t2">
            <div className="ribbon"></div>
            <div className="lvl">Level 02 · 2 Points · Satisfactory</div>
            <div className="nm">Pragati</div>
            <div className="dev">प्रगति · <span className="g">&ldquo;Progress&rdquo;</span></div>
            <div className="pct">60<span style={{ fontSize: 24 }}>–</span>75<sup>%</sup><span className="of">domain score</span></div>
            <p className="sm">Schools meet most standards with clear scope to reach excellence — functional but with room to scale and innovate.</p>
            <ul>
              <li>Partial alignment with SQAAF standards</li>
              <li>Moderate stakeholder engagement</li>
              <li>Functional but inconsistent practices</li>
              <li>Identifiable room in monitoring</li>
            </ul>
          </div>
          <div className="tier-card t3">
            <div className="ribbon"></div>
            <div className="lvl">Level 03 · 3 Points · Exemplary</div>
            <div className="nm">Jagriti</div>
            <div className="dev">जागृति · <span className="g">&ldquo;Awakening&rdquo;</span></div>
            <div className="pct"><sup>&gt;</sup>75<sup>%</sup><span className="of">domain score</span></div>
            <p className="sm">Excellence. Schools consistently meet or exceed benchmarks and are recognised as model institutions for others to follow.</p>
            <ul>
              <li>Full alignment with national benchmarks</li>
              <li>Innovative, learner-centred practices</li>
              <li>Strong monitoring &amp; feedback systems</li>
              <li>Deep focus on inclusion &amp; sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
