'use client';
import { useState, useEffect, useRef } from 'react';

type TabKey = 'assess' | 'dash' | 'evidence' | 'plan';

const QUESTIONS = [
  {
    code: 'Q-CUR-1', domain: 'Curriculum', sub: 'Curriculum Review and Implementation', indicator: '1 of 118',
    q: 'How often is the curriculum reviewed to ensure continued alignment with national policies?',
    a: 'Curriculum reviews are rare, and updates are seldom made.',
    p: 'Curriculum is reviewed periodically but not consistently.',
    j: 'The curriculum is reviewed regularly, with updates to ensure it remains aligned with future-ready skills and competencies.',
  },
  {
    code: 'Q-CUR-2', domain: 'Curriculum', sub: 'Digital Literacy & AI', indicator: '2 of 118',
    q: 'To what extent does the school integrate digital literacy and AI education into the curriculum?',
    a: 'Digital tools are rarely used and AI education is absent from the curriculum.',
    p: 'Some digital literacy content is included but AI education is limited to ad hoc sessions.',
    j: 'A structured digital literacy and AI curriculum is fully integrated across all grade levels.',
  },
];

function drawRadar(canvas: SVGSVGElement, scores: number[]) {
  while (canvas.firstChild) canvas.removeChild(canvas.firstChild);
  const labels = ['Admin', 'Curriculum', 'Assessment', 'Infrastructure', 'Inclusive'];
  const n = 5;
  const cx = 0, cy = 0, R = 90;
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
  const ns = (el: string, attrs: Record<string, string>, text?: string) => {
    const e = document.createElementNS('http://www.w3.org/2000/svg', el);
    Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    if (text) e.textContent = text;
    return e;
  };
  rings.forEach(r => {
    const pts = Array.from({ length: n }, (_, i) => {
      const a = (i * 2 * Math.PI / n) - Math.PI / 2;
      return `${cx + R * r * Math.cos(a)},${cy + R * r * Math.sin(a)}`;
    }).join(' ');
    canvas.appendChild(ns('polygon', { points: pts, class: 'radar-grid' }));
  });
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI / n) - Math.PI / 2;
    canvas.appendChild(ns('line', { x1: String(cx), y1: String(cy), x2: String(cx + R * Math.cos(a)), y2: String(cy + R * Math.sin(a)), class: 'radar-axis' }));
  }
  const poly = scores.map((s, i) => {
    const a = (i * 2 * Math.PI / n) - Math.PI / 2;
    return `${cx + R * (s / 100) * Math.cos(a)},${cy + R * (s / 100) * Math.sin(a)}`;
  }).join(' ');
  canvas.appendChild(ns('polygon', { points: poly, class: 'radar-poly' }));
  scores.forEach((s, i) => {
    const a = (i * 2 * Math.PI / n) - Math.PI / 2;
    const x = cx + R * (s / 100) * Math.cos(a);
    const y = cy + R * (s / 100) * Math.sin(a);
    canvas.appendChild(ns('circle', { cx: String(x), cy: String(y), r: '4', class: 'radar-dot' }));
    const lx = cx + (R + 18) * Math.cos(a);
    const ly = cy + (R + 18) * Math.sin(a);
    const lbl = ns('text', { x: String(lx), y: String(ly), class: 'radar-lbl', 'text-anchor': 'middle', 'dominant-baseline': 'middle' }, labels[i]);
    canvas.appendChild(lbl);
  });
}

export default function AssessDemo() {
  const [tab, setTab] = useState<TabKey>('assess');
  const [qIdx, setQIdx] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [count, setCount] = useState(132);
  const radarRef = useRef<SVGSVGElement>(null);
  const scores = [82, 71, 68, 54, 79];

  useEffect(() => {
    if (tab === 'dash' && radarRef.current) {
      drawRadar(radarRef.current, scores);
      setTimeout(() => {
        document.querySelectorAll('.dbar .fill').forEach(el => {
          const w = (el as HTMLElement).dataset.w;
          if (w) (el as HTMLElement).style.width = w + '%';
        });
      }, 100);
    }
  }, [tab]);

  const q = QUESTIONS[qIdx % QUESTIONS.length];

  const handleSaveNext = () => {
    if (sel !== null) {
      setCount(c => Math.min(349, c + 1));
      setSel(null);
      setQIdx(i => i + 1);
    }
  };

  return (
    <section className="showcase" id="showcaseSec">
      <div className="container">
        <div className="sc-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="num">★</span><span className="rule"></span>Inside the Platform</div>
          <h2 className="disp">See SQAAF <em>in action</em></h2>
          <p>A working preview of the school-facing platform — built on the real framework. Click through the tabs and try the controls: rate an indicator, watch the score move, attach evidence, and see the improvement plan write itself.</p>
        </div>

        <div className="device">
          <div className="device-bar">
            <div className="dots"><i></i><i></i><i></i></div>
            <div className="url"><span className="lock">🔒</span><b>portal.sqaaf.parakh.gov.in</b>/cycle-2026</div>
            <div className="live"><span className="d"></span>Interactive Demo</div>
          </div>

          <div className="sc-tabs">
            {([['assess','📝','Self-Assessment'],['dash','📊','Dashboard'],['evidence','📎','Evidence Locker'],['plan','🗺️','Improvement Plan']] as [TabKey,string,string][]).map(([k,ic,lbl]) => (
              <div key={k} className={`sc-tab${tab === k ? ' on' : ''}`} onClick={() => setTab(k)}>
                <span className="ti">{ic}</span>{lbl}
              </div>
            ))}
          </div>

          {/* SCREEN 1: SELF-ASSESSMENT */}
          <div className={`sc-screen${tab === 'assess' ? ' on' : ''}`}>
            <div className="as-layout">
              <aside className="as-side">
                <div className="ring-box">
                  <div className="as-ring">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="6" />
                      <circle cx="30" cy="30" r="25" fill="none" stroke="var(--gold)" strokeWidth="6"
                        strokeLinecap="round" strokeDasharray="157"
                        strokeDashoffset={String(157 - 157 * (count / 349))}
                        style={{ transition: 'stroke-dashoffset .6s' }} />
                    </svg>
                    <div className="pc">{Math.round(count / 349 * 100)}%</div>
                  </div>
                  <div className="ri">
                    <div className="l">Progress</div>
                    <div className="v"><b>{count}</b> / 349 rated</div>
                  </div>
                </div>
                <div className="nt">Domains</div>
                <ul className="as-dom">
                  <li className="done"><span className="nm"><span className="sw" style={{ background: 'var(--d-adm)' }}></span>Administration</span><span className="ck">56/56 ✓</span></li>
                  <li className="on"><span className="nm"><span className="sw" style={{ background: 'var(--d-cur)' }}></span>Curriculum</span><span className="ck">{count - 56}/118</span></li>
                  <li><span className="nm"><span className="sw" style={{ background: 'var(--d-ass)' }}></span>Assessment</span><span className="ck">0/60</span></li>
                  <li><span className="nm"><span className="sw" style={{ background: 'var(--d-inf)' }}></span>Infrastructure</span><span className="ck">0/51</span></li>
                  <li><span className="nm"><span className="sw" style={{ background: 'var(--d-inc)' }}></span>Inclusiveness</span><span className="ck">0/64</span></li>
                </ul>
              </aside>

              <div className="as-main">
                <div className="as-bc">Domain 2 · Curriculum / <b>{q.sub}</b></div>
                <h3 className="as-q">{q.q}</h3>
                <div className="as-meta">
                  <span className="code">{q.code}</span>
                  <span>Max 3 pts</span>
                  <span>Indicator {q.indicator}</span>
                  <span>Evidence: optional</span>
                </div>
                <div className="as-opts">
                  {[{lv:1,nm:'Abhilasha',desc:q.a},{lv:2,nm:'Pragati',desc:q.p,s:'s2'},{lv:3,nm:'Jagriti',desc:q.j}].map(opt => (
                    <div key={opt.lv} className={`as-opt${opt.s ? ' '+opt.s : ''}${sel === opt.lv ? ' sel' : ''}`} onClick={() => setSel(opt.lv)}>
                      <div className="radio"></div>
                      <div className="on-name">{opt.nm}</div>
                      <div className="on-pts">+{opt.lv}</div>
                      <div className="on-desc">{opt.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="as-foot">
                  <div className="save"><span className="d"></span>Auto-saved · indicator scores <b>{sel ? `+${sel} / 3` : '— / 3'}</b></div>
                  <div className="as-nav">
                    <button className="as-btn ghost" onClick={() => { setSel(null); setQIdx(i => Math.max(0, i - 1)); }}>← Previous</button>
                    <button className="as-btn prim" onClick={handleSaveNext}>Save &amp; Next →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 2: DASHBOARD */}
          <div className={`sc-screen${tab === 'dash' ? ' on' : ''}`}>
            <div className="db-wrap">
              <div className="db-top">
                <div className="ttl">School Quality Report · Rajkiya Pratibha Vikas Vidyalaya</div>
                <div className="ts">Cycle 2025–26 · Issued 14 Mar 2026</div>
              </div>
              <div className="db-grid">
                <div className="db-card">
                  <div className="ch">Overall Result <span className="pill">AUTO-CALCULATED</span></div>
                  <div className="db-band">
                    <div className="big">73<sup>%</sup></div>
                    <div>
                      <div className="gname">Pragati</div>
                      <div className="gdesc">Performing Satisfactorily</div>
                      <div className="gscore">Score · <b>764 / 1,047</b> · <span className="up">↑ 7% vs last cycle</span></div>
                    </div>
                  </div>
                  <div className="ch" style={{ borderTop: '1px solid var(--line-soft)' }}>Domain Radar <span className="pill">5 DOMAINS</span></div>
                  <div className="radar-box">
                    <svg ref={radarRef} viewBox="-130 -120 260 240"></svg>
                  </div>
                </div>
                <div className="db-card">
                  <div className="ch">Domain Performance <span className="pill">% OF MAX</span></div>
                  <div className="db-bars">
                    {[['j','Administration',82],['p','Curriculum',71],['p','Assessment',68],['a','Infrastructure',54],['j','Inclusiveness',79]].map(([cls,name,val]) => (
                      <div key={String(name)} className={`dbar ${cls}`}>
                        <div className="dn">{name}</div>
                        <div className="track"><div className="fill" data-w={val} style={{ width: tab === 'dash' ? val + '%' : '0%' }}></div></div>
                        <div className="v">{val}%</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '0 22px 20px' }}>
                    <div className="ch" style={{ border: 'none', padding: '6px 0 12px' }}>Tier Spread Across All Indicators</div>
                    <div style={{ display: 'flex', height: 30, borderRadius: 7, overflow: 'hidden', border: '1px solid var(--line)' }}>
                      <div style={{ width: '31%', background: 'var(--red)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>31%</div>
                      <div style={{ width: '43%', background: 'var(--gold-deep)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>43%</div>
                      <div style={{ width: '26%', background: 'var(--green)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11, fontWeight: 600 }}>26%</div>
                    </div>
                    <div style={{ display: 'flex', gap: 16, marginTop: 10, fontSize: 11, color: 'var(--ink-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: 2, background: 'var(--red)', display: 'inline-block' }}></span>Abhilasha</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: 2, background: 'var(--gold-deep)', display: 'inline-block' }}></span>Pragati</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 9, height: 9, borderRadius: 2, background: 'var(--green)', display: 'inline-block' }}></span>Jagriti</span>
                    </div>
                  </div>
                </div>
                <div className="db-foot">
                  <div className="l">Priority focus: <b>Infrastructure</b> — 3 sub-domains rated Abhilasha. The system has drafted 7 actions.</div>
                  <a onClick={() => setTab('plan')} style={{ cursor: 'pointer' }}>View Improvement Plan →</a>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 3: EVIDENCE LOCKER */}
          <div className={`sc-screen${tab === 'evidence' ? ' on' : ''}`}>
            <div className="ev-wrap">
              <div className="ev-main">
                <h3>Evidence Locker</h3>
                <div className="sub">218 files linked · 21 evidence types · DigiLocker integrated</div>
                <div className="ev-drop">
                  <div className="ic">📂</div>
                  <div className="t">Drop files here or click to upload</div>
                  <div className="h">PDF, DOC, XLS, JPG, PNG — max 25 MB per file</div>
                  <span className="pick">Choose Files</span>
                </div>
                <div className="ev-list">
                  {[
                    { type: 'pdf', name: 'School_Safety_Audit_2025.pdf', meta: 'Domain 1 · Safety & Security · 2.4 MB' },
                    { type: 'doc', name: 'Annual_Budget_Report_FY2526.docx', meta: 'Domain 1 · Financial Management · 890 KB' },
                    { type: 'img', name: 'SmartClassroom_Lab3_Photo.jpg', meta: 'Domain 4 · Smart Classrooms · 1.1 MB' },
                    { type: 'xls', name: 'CWSN_Enrollment_Data_2025.xlsx', meta: 'Domain 5 · Special Needs · 340 KB' },
                  ].map(f => (
                    <div key={f.name} className="ev-file">
                      <div className={`fic ${f.type}`}>{f.type === 'pdf' ? '📄' : f.type === 'doc' ? '📝' : f.type === 'img' ? '🖼️' : '📊'}</div>
                      <div className="fi">
                        <div className="fn">{f.name}</div>
                        <div className="fm">{f.meta}</div>
                      </div>
                      <div className="fst">✓ Linked</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ev-side">
                <div className="lbl">Evidence Types</div>
                <ul className="ev-type">
                  {[['📄','Policy Documents','32'],['📊','Financial Records','18'],['🖼️','Photo Evidence','47'],['📝','Meeting Minutes','24'],['🎓','Training Records','19']].map(([ic,nm,cnt]) => (
                    <li key={String(nm)} className={nm === 'Photo Evidence' ? 'on' : ''}>
                      <span className="dot" style={{ background: 'var(--crimson)' }}></span>{ic} {nm}<span className="cnt">{cnt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SCREEN 4: IMPROVEMENT PLAN */}
          <div className={`sc-screen${tab === 'plan' ? ' on' : ''}`}>
            <div className="ip-wrap">
              <div className="ip-head">
                <h3>School Quality Improvement Plan (SQIP)</h3>
                <div className="pills">
                  <span className="pa">3 Abhilasha</span>
                  <span className="pp">5 Pragati</span>
                  <span className="pj">2 Jagriti</span>
                </div>
              </div>
              <div className="ip-list">
                {[
                  { tier: 'a', dom: 'Infrastructure', domColor: 'var(--d-inf)', title: 'Install functional toilets with running water in all blocks', desc: 'Ensure CWSN-accessible toilets are available separately for boys, girls, and staff with regular maintenance schedule.', owner: 'School Principal', due: 'Q2 2026', prio: 'high' },
                  { tier: 'a', dom: 'Infrastructure', domColor: 'var(--d-inf)', title: 'Establish a functional computer lab with internet access', desc: 'Minimum 1 computer per 20 students with 10 Mbps broadband. Register for PM e-VIDYA portal access.', owner: 'IT Coordinator', due: 'Q3 2026', prio: 'high' },
                  { tier: 'p', dom: 'Curriculum', domColor: 'var(--d-cur)', title: 'Integrate AI literacy modules into Grades 6–10', desc: 'Adopt NCERT AI curriculum framework. Train 3 teachers on AI pedagogy in Term 1.', owner: 'Academic Head', due: 'Term 2 2026', prio: 'med' },
                ].map((item, i) => (
                  <div key={i} className="ip-card">
                    <div>
                      <div className="ic-tag">
                        <span className={`tier ${item.tier}`}>{item.tier === 'a' ? 'Abhilasha' : 'Pragati'}</span>
                        <span className="dom" style={{ background: item.domColor }}>{item.dom}</span>
                      </div>
                      <div className="ic-title">{item.title}</div>
                      <div className="ic-desc">{item.desc}</div>
                      <div className="ic-meta"><span>Owner: <b>{item.owner}</b></span><span>Due: <b>{item.due}</b></span></div>
                    </div>
                    <div className="ic-right">
                      <span className={`prio ${item.prio}`}>{item.prio === 'high' ? 'High' : 'Medium'}</span>
                      <div className="owner"><b>{item.owner}</b>Assigned</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
