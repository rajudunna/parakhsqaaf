export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow"><span className="num">04</span><span className="rule"></span>Platform Features</div>
          <h2 className="disp">Everything a school &amp; its SSSA need — <em>in one system</em></h2>
          <p>From guided self-assessment to a verifiable evidence locker, an auto-generated improvement plan, and
            transparent public disclosure — each feature maps directly to the SQAAF framework.</p>
        </div>

        <div className="feat-grid">
          <div className="feat">
            <div className="icon">🧭</div>
            <h3>Guided Self-Assessment</h3>
            <p>All 349 indicators across five domains, presented one at a time with the three benchmark descriptors. Live
              scoring, auto-save and per-domain progress tracking.</p>
            <div className="tags"><span>349 Indicators</span><span>3-Tier Rating</span><span>Auto-save</span></div>
          </div>
          <div className="feat">
            <div className="icon">📎</div>
            <h3>Evidence Locker</h3>
            <p>Attach documents against any indicator — improvement plans, audit reports, policies, photos. A structured,
              versioned portfolio that substantiates every rating.</p>
            <div className="tags"><span>21 Evidence Types</span><span>DigiLocker</span><span>Versioned</span></div>
          </div>
          <div className="feat">
            <div className="icon">📊</div>
            <h3>Outcome Dashboard</h3>
            <p>On submission, SQAAF auto-generates a domain-wise breakdown, determines the band, and surfaces the
              lowest-scoring sub-domains for action.</p>
            <div className="tags"><span>Domain Radar</span><span>Band Calc</span><span>Year-on-Year</span></div>
          </div>
          <div className="feat">
            <div className="icon">🗺️</div>
            <h3>Improvement Plan (SQIP)</h3>
            <p>Turns findings into a roadmap. Auto-suggests framework-aligned interventions per tier — Abhilasha, Pragati
              &amp; Jagriti — with timelines and owners.</p>
            <div className="tags"><span>SQIP Builder</span><span>Tier-Specific</span><span>Timelines</span></div>
          </div>
          <div className="feat">
            <div className="icon">🛡️</div>
            <h3>SSSA Review &amp; Assurance</h3>
            <p>State School Standard Setting Authority workflow — review submissions, validate evidence, accredit and
              monitor compliance with full audit trails.</p>
            <div className="tags"><span>Role-Based</span><span>Audit Trail</span><span>Assurance</span></div>
          </div>
          <div className="feat">
            <div className="icon">🌐</div>
            <h3>Public Disclosure</h3>
            <p>Publishes assurance status and quality outcomes to the State Vidya Samiksha Kendra portal — building
              community trust and accountability.</p>
            <div className="tags"><span>VSK Portal</span><span>Public Status</span><span>Equity Data</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
