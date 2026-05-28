export default function PerfLevels() {
  return (
    <section className="perf-levels">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow"><span className="num">03</span> Levels of Performance</div>
          <h2>Three tiers. One <em>upward trajectory.</em></h2>
          <p>Every sub-domain question is rated against three benchmarks — drawn from the Sanskrit lexicon of educational growth — that capture not just where a school stands, but where it is headed.</p>
        </div>

        <div className="perf-grid">
          <div className="perf-card lvl-1">
            <span className="badge">LEVEL 01</span>
            <div className="name"><em>Abhilasha</em></div>
            <div className="translit">अभिलाषा · &ldquo;Aspiration&rdquo;</div>
            <div className="range">&lt;60<sup>%</sup></div>
            <ul>
              <li>Minimal or inconsistent implementation of quality practices</li>
              <li>Limited adherence to national and regional educational standards</li>
              <li>Lack of structured systems for planning, monitoring, and feedback</li>
              <li>Inadequate resources or infrastructure to meet benchmarks</li>
            </ul>
          </div>

          <div className="perf-card lvl-2">
            <span className="badge">LEVEL 02</span>
            <div className="name"><em>Pragati</em></div>
            <div className="translit">प्रगति · &ldquo;Progress&rdquo;</div>
            <div className="range">60-75<sup>%</sup></div>
            <ul>
              <li>Partial alignment with SQAAF standards</li>
              <li>Moderate engagement of stakeholders</li>
              <li>Practices are functional but lack consistency or scalability</li>
              <li>Identifiable room for improvement in monitoring systems</li>
            </ul>
          </div>

          <div className="perf-card lvl-3">
            <span className="badge">LEVEL 03</span>
            <div className="name"><em>Jagriti</em></div>
            <div className="translit">जागृति · &ldquo;Awakening&rdquo;</div>
            <div className="range">&gt;75<sup>%</sup></div>
            <ul>
              <li>Complete alignment with national and SQAAF benchmarks</li>
              <li>Implementation of innovative, learner-centred practices</li>
              <li>Strong systems for monitoring, feedback, and improvement</li>
              <li>Focus on inclusiveness, sustainability, and holistic development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
