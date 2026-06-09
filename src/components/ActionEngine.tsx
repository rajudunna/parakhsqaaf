'use client';
import { useState } from 'react';

type Domain = 'admin' | 'curriculum' | 'assessment' | 'infrastructure' | 'inclusive';

const DOMAINS: { id: Domain; label: string; color: string; count: number }[] = [
  { id: 'admin', label: 'Administration', color: 'var(--d-adm)', count: 56 },
  { id: 'curriculum', label: 'Curriculum', color: 'var(--d-cur)', count: 118 },
  { id: 'assessment', label: 'Assessment', color: 'var(--d-ass)', count: 60 },
  { id: 'infrastructure', label: 'Infrastructure', color: 'var(--d-inf)', count: 51 },
  { id: 'inclusive', label: 'Inclusiveness', color: 'var(--d-inc)', count: 64 },
];

const LIB: Record<Domain, { tier: 'a' | 'p' | 'j'; action: string; when: string; owner: string }[]> = {
  admin: [
    { tier: 'a', action: 'Establish a formal School Management Committee (SMC) with monthly meetings and recorded minutes.', when: 'Term 1', owner: 'Principal' },
    { tier: 'a', action: 'Create and adopt a written Annual School Development Plan (ASDP) for the current academic year.', when: 'Q1', owner: 'Principal + SMC' },
    { tier: 'p', action: 'Launch a staff performance review cycle with professional development goals for every teacher.', when: 'Term 2', owner: 'Academic Head' },
    { tier: 'p', action: 'Implement a grievance redressal mechanism for students, parents and staff with clear response timelines.', when: 'Q2', owner: 'Principal' },
    { tier: 'j', action: 'Publish an annual school quality report and submit it to the State VSK portal for community access.', when: 'Annual', owner: 'Principal' },
  ],
  curriculum: [
    { tier: 'a', action: 'Map all existing lesson plans to NEP 2020 competency outcomes for each grade and subject.', when: 'Term 1', owner: 'Academic Head' },
    { tier: 'a', action: 'Introduce structured AI & digital literacy sessions in Grades 6–10, using NCERT pilot modules.', when: 'Q2', owner: 'IT Coordinator' },
    { tier: 'p', action: 'Integrate project-based learning (PBL) units across at least 3 subjects per grade for the full year.', when: 'Year', owner: 'All Teachers' },
    { tier: 'p', action: 'Develop a multilingual support programme for students whose home language differs from the medium of instruction.', when: 'Q2', owner: 'Language Dept.' },
    { tier: 'j', action: 'Establish a curriculum innovation team that documents and shares best practices across the district cluster.', when: 'Annual', owner: 'Academic Head' },
  ],
  assessment: [
    { tier: 'a', action: 'Replace single-exam grading with Continuous and Comprehensive Evaluation (CCE) across all classes.', when: 'Term 1', owner: 'Academic Head' },
    { tier: 'a', action: 'Train all subject teachers on competency-based assessment design using PARAKH exemplar papers.', when: 'Q1', owner: 'Training Coord.' },
    { tier: 'p', action: 'Pilot Holistic Progress Cards (HPC) for Grades 1–5 and gather teacher feedback for refinement.', when: 'Term 2', owner: 'Primary Lead' },
    { tier: 'p', action: 'Establish a PARAKH-aligned internal moderation process for examination papers before issue.', when: 'Each Exam', owner: 'Exam Coord.' },
    { tier: 'j', action: 'Share exam-integrity practices and HPC templates with cluster schools to raise the district baseline.', when: 'Annual', owner: 'Principal' },
  ],
  infrastructure: [
    { tier: 'a', action: 'Install functional, CWSN-accessible toilets with running water — separate for boys, girls and staff.', when: 'Q2', owner: 'Principal' },
    { tier: 'a', action: 'Set up a computer lab with minimum 1 device per 20 students and 10 Mbps broadband. Register for PM e-VIDYA.', when: 'Q3', owner: 'IT Coordinator' },
    { tier: 'p', action: 'Upgrade science and mathematics labs with NCERT-specified equipment for Grades 9–12.', when: 'Year', owner: 'Lab Incharge' },
    { tier: 'p', action: 'Install solar panels or adopt other green-building measures; achieve BEE-rated energy efficiency.', when: 'Q4', owner: 'Admin Officer' },
    { tier: 'j', action: 'Transform library into a Digital Resource Centre with DIKSHA content, e-books and reading nooks.', when: 'Annual', owner: 'Librarian' },
  ],
  inclusive: [
    { tier: 'a', action: 'Conduct a census of all CWSN students and assign individual learning support plans (ISP) for each.', when: 'Q1', owner: 'Special Educator' },
    { tier: 'a', action: 'Train all teachers on gender-sensitive pedagogy and classroom safety protocols.', when: 'Term 1', owner: 'Training Coord.' },
    { tier: 'p', action: 'Establish a Dropout Prevention Cell that tracks at-risk students weekly with intervention plans.', when: 'Q2', owner: 'Counsellor' },
    { tier: 'p', action: 'Launch tribal-community engagement programme — home visits, parent workshops in local language.', when: 'Term 2', owner: 'Community Coord.' },
    { tier: 'j', action: 'Achieve zero-dropout rate for CWSN students and publish inclusion outcomes on state VSK portal.', when: 'Annual', owner: 'Principal' },
  ],
};

const TIER_LABEL: Record<'a' | 'p' | 'j', string> = { a: 'Abhilasha', p: 'Pragati', j: 'Jagriti' };

export default function ActionEngine() {
  const [active, setActive] = useState<Domain>('infrastructure');
  const dom = DOMAINS.find(d => d.id === active)!;
  const actions = LIB[active];

  return (
    <section className="engine" id="engineSec">
      <div className="container">
        <div className="sc-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="num">06</span><span className="rule"></span>Post-Assessment Interventions</div>
          <h2 className="disp">The SQAAF <em>Action Engine</em></h2>
          <p>Select a domain below — the system surfaces tier-appropriate interventions drawn from the official SQAAF Post-Assessment Intervention Library, each with an owner and a timeline.</p>
        </div>

        <div className="eng-wrap">
          <div className="eng-left">
            <div className="el-label">Select Domain</div>
            {DOMAINS.map(d => (
              <button key={d.id} className={`eng-dom${active === d.id ? ' on' : ''}`} onClick={() => setActive(d.id)}>
                <span className="ed-dot" style={{ background: d.color }}></span>
                <span className="ed-name">{d.label}</span>
                <span className="ed-ct">{d.count}</span>
              </button>
            ))}
          </div>

          <div className="eng-right">
            <div className="er-head">
              <span style={{ background: dom.color }} className="er-dot"></span>
              <span className="er-dom">{dom.label}</span>
              <span className="er-count">{actions.length} actions</span>
            </div>
            <div className="er-list">
              {actions.map((a, i) => (
                <div key={i} className={`er-item ti-${a.tier}`}>
                  <div className="er-tier"><span className={`tier-badge t${a.tier}`}>{TIER_LABEL[a.tier]}</span></div>
                  <div className="er-body">
                    <div className="er-act">{a.action}</div>
                    <div className="er-meta">
                      <span>Owner: <b>{a.owner}</b></span>
                      <span>Timeline: <b>{a.when}</b></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="er-foot">
              <span className="er-note">Actions drawn from the official SQAAF Intervention Library · {active === 'infrastructure' ? 'Priority domain this cycle' : 'Selected domain'}</span>
              <a href="#" className="er-dl">Download full library →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
