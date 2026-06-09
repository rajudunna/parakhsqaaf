const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Domains() {
  return (
    <section className="framework" id="framework">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="num">02</span><span className="rule"></span>The SQAAF Framework, Digitised</div>
          <h2 className="disp">Every domain of the framework — <em>mapped to a working module</em></h2>
          <p>SQAAF implements each of the five quality domains from NCERT&apos;s official framework, turning the printed
            checklist into a guided, evidence-backed, automatically-scored digital workflow.</p>
        </div>

        <div className="fw-list">
          <div className="fw-row">
            <div className="fw-num"><div className="n">01</div><div className="ref">SQAAF Domain 1</div></div>
            <div className="fw-content">
              <div className="fw-left">
                <h3>Administration <span className="badge" style={{ background: 'var(--d-adm)' }}>20%</span></h3>
                <p className="official">The framework evaluates governance, leadership, financial stewardship, staffing,
                  safety and stakeholder engagement — <b>8 sub-domains, 56 indicators</b>.</p>
                <div className="fw-subs"><span>Leadership &amp; Governance</span><span>Financial Management</span><span>Staff Recruitment</span><span>Safety &amp; Security</span><span>+4 more</span></div>
                <div className="fw-pts"><span className="p">168</span><span className="pl">max points</span></div>
              </div>
              <div className="fw-right">
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Guided indicator rating</b>Each governance indicator presented with three benchmark descriptors; the school ticks one, the system scores it 1–3.</div></div>
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Policy &amp; finance evidence locker</b>Attach budgets, audit reports and policies directly against each indicator to substantiate the rating.</div></div>
              </div>
            </div>
          </div>

          <div className="fw-row">
            <div className="fw-num"><div className="n">02</div><div className="ref">SQAAF Domain 2</div></div>
            <div className="fw-content">
              <div className="fw-left">
                <h3>Curriculum <span className="badge" style={{ background: 'var(--d-cur)' }}>20%</span></h3>
                <p className="official">The largest domain — how effectively learning is designed: NEP-aligned, skill-based,
                  multilingual, future-ready — <b>17 sub-domains, 118 indicators</b>.</p>
                <div className="fw-subs"><span>Skill-based Education</span><span>Digital Literacy &amp; AI</span><span>Multilingual</span><span>Arts &amp; Sports</span><span>+13 more</span></div>
                <div className="fw-pts"><span className="p">354</span><span className="pl">max points</span></div>
              </div>
              <div className="fw-right">
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>NEP &amp; NCF alignment check</b>Indicators map directly to NEP 2020 priorities — competency focus, multilingualism, 21st-century skills.</div></div>
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Sub-domain heat-map</b>Instantly see which of the 17 curriculum areas are strong and which need the most attention.</div></div>
              </div>
            </div>
          </div>

          <div className="fw-row">
            <div className="fw-num"><div className="n">03</div><div className="ref">SQAAF Domain 3</div></div>
            <div className="fw-content">
              <div className="fw-left">
                <h3>Assessment <span className="badge" style={{ background: 'var(--d-ass)' }}>20%</span></h3>
                <p className="official">Competency-based, continuous evaluation — Holistic Progress Cards, exam integrity, and
                  PARAKH equivalence — <b>11 sub-domains, 60 indicators</b>.</p>
                <div className="fw-subs"><span>Competency-Based</span><span>Holistic Progress Cards</span><span>Exam Integrity</span><span>PARAKH Equivalence</span><span>+7 more</span></div>
                <div className="fw-pts"><span className="p">180</span><span className="pl">max points</span></div>
              </div>
              <div className="fw-right">
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Direct ITMS / PARAKH link</b>Assessment-integrity indicators connect naturally to PARAKH question-paper standards already in use.</div></div>
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>HPC readiness tracking</b>Track adoption of Holistic Progress Cards and reflective, competency-based assessment over cycles.</div></div>
              </div>
            </div>
          </div>

          <div className="fw-row">
            <div className="fw-num"><div className="n">04</div><div className="ref">SQAAF Domain 4</div></div>
            <div className="fw-content">
              <div className="fw-left">
                <h3>Infrastructure <span className="badge" style={{ background: 'var(--d-inf)' }}>20%</span></h3>
                <p className="official">Quality, accessibility and sustainability of physical and digital resources — <b>9 sub-domains, 51 indicators</b>.</p>
                <div className="fw-subs"><span>Basic Infrastructure</span><span>Smart Classrooms</span><span>Labs &amp; Library</span><span>Green Buildings</span><span>+5 more</span></div>
                <div className="fw-pts"><span className="p">153</span><span className="pl">max points</span></div>
              </div>
              <div className="fw-right">
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Photo &amp; audit evidence</b>Upload facility photos, safety audits and lab inventories against infrastructure indicators.</div></div>
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Gap-to-action list</b>Low-scoring facilities auto-surface as prioritised line items in the improvement plan.</div></div>
              </div>
            </div>
          </div>

          <div className="fw-row">
            <div className="fw-num"><div className="n">05</div><div className="ref">SQAAF Domain 5</div></div>
            <div className="fw-content">
              <div className="fw-left">
                <h3>Inclusiveness <span className="badge" style={{ background: 'var(--d-inc)' }}>20%</span></h3>
                <p className="official">The cornerstone — equity, diversity and socio-economic support so every learner belongs — <b>8 sub-domains, 64 indicators</b>.</p>
                <div className="fw-subs"><span>Special Needs (CWSN)</span><span>Gender Sensitivity</span><span>Tribal Engagement</span><span>Dropout Prevention</span><span>+4 more</span></div>
                <div className="fw-pts"><span className="p">192</span><span className="pl">max points</span></div>
              </div>
              <div className="fw-right">
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Equity &amp; CWSN tracking</b>Captures provisions for children with special needs, ISL support, gender and tribal inclusion.</div></div>
                <div className="fw-feat"><div className="tick"><CheckIcon /></div><div className="ft"><b>Public disclosure ready</b>Inclusion outcomes can be published to the State VSK portal for transparency and accountability.</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
