'use client';
import { useRef, useState } from 'react';

const FAQS = [
  {
    q: 'Is the platform fully aligned with the official SQAAF framework?',
    a: <>Yes. Every indicator, sub-domain, performance descriptor and the complete 1,047-point scoring system are taken directly from NCERT &amp; PARAKH&apos;s <b>School Quality Assessment and Assurance Framework</b>. The three-tier rating — Abhilasha, Pragati, Jagriti — and the equal 20% domain weightage are enforced exactly as specified, so a digital rating equals a manual SQAAF assessment.</>,
  },
  {
    q: 'How does the State School Standard Setting Authority (SSSA) fit in?',
    a: <>The platform includes a dedicated <b>SSSA workflow</b> per State/UT — review school submissions, validate uploaded evidence, manage assurance and monitor compliance, with role-based access and full audit trails. Results can be published to the State Vidya Samiksha Kendra portal for transparent public disclosure.</>,
  },
  {
    q: 'What happens after a school completes its self-assessment?',
    a: <>Self-rating is only the diagnostic step. On submission the system auto-generates a domain-wise dashboard, determines the band, and builds a <b>School Quality Improvement Plan</b> — surfacing the lowest-scoring sub-domains with the framework&apos;s tier-specific interventions, timelines and owners. The next cycle measures impact.</>,
  },
  {
    q: 'Can a State deploy this with its own context and languages?',
    a: <>Absolutely. The platform is configurable per State/UT — localise contextual guidance, add regional languages and tailor evidence requirements, while the core framework, scoring and benchmarks stay standardised for <b>equivalence across boards</b>.</>,
  },
  {
    q: 'How is evidence handled, and is it secure?',
    a: <>Each indicator supports document upload to a structured <b>Evidence Locker</b> with versioning and optional DigiLocker integration. Access is role-based at school and SSSA levels, and every action is logged — building a verifiable School Quality Portfolio.</>,
  },
  {
    q: 'Is the system cloud-based or on-premise?',
    a: <>Both options are available — a cloud-hosted national/state deployment or an on-premise installation within a State&apos;s own data centre. We recommend discussing data-residency and security requirements during the demo.</>,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ansRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpen(prev => {
      const next = prev === i ? null : i;
      setTimeout(() => {
        ansRefs.current.forEach((el, idx) => {
          if (!el) return;
          el.style.maxHeight = idx === next ? el.scrollHeight + 'px' : '0px';
        });
      }, 0);
      return next;
    });
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">06</span><span className="rule"></span>Frequently Asked
          </div>
          <h2 className="disp">Common questions from <em>schools &amp; states</em></h2>
        </div>
        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {f.q}<span className="plus"></span>
              </button>
              <div
                className="faq-a"
                ref={el => { ansRefs.current[i] = el; }}
                style={{ maxHeight: open === i ? (ansRefs.current[i]?.scrollHeight ?? 0) + 'px' : '0px' }}
              >
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
