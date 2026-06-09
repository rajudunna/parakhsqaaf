'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">07</span><span className="rule"></span>Get Started
          </div>
          <h2>Request a Demo for Your State</h2>
          <p>Schedule a live walkthrough of SQAAF with your team. We&apos;ll show you how the system maps to your State, SSSA and schools&apos; specific needs.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <h3>Let&apos;s Bring SQAAF Compliance to Your State</h3>
            <div className="quote-card">
              <div className="qm">&ldquo;</div>
              <p>The School Quality Assessment and Assurance Framework is a comprehensive resource designed to address the pressing need for standardised and equitable quality practices across schools in India. Through five domains and a strong emphasis on fairness, inclusivity and continuous improvement, it equips educators, administrators and policymakers to transform schools and pave the way for a future-ready education system aligned with NEP 2020.</p>
            </div>
            <div className="endorse">
              <div className="nm">Professor Indrani Bhaduri</div>
              <div className="role">CEO, PARAKH &amp; Head, Educational Survey Division<br />NCERT, Ministry of Education, Govt. of India</div>
            </div>
            <div className="ci-list">
              <div className="ci-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </div>
                <div><div className="lbl">Address</div><div className="val">Sri Aurobindo Marg, New Delhi–110016, India</div></div>
              </div>
              <div className="ci-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </div>
                <div><div className="lbl">Email</div><div className="val">parakhschoolboards@gmail.com</div></div>
              </div>
              <div className="ci-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </div>
                <div><div className="lbl">Phone</div><div className="val">+91–86839 32278</div></div>
              </div>
              <div className="ci-row">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.2 2H21l-6.6 7.5L22 22h-6.2l-4.8-6.3L5.4 22H2.6l7-8L2 2h6.3l4.4 5.8L18.2 2Zm-1 18h1.6L7.3 3.7H5.6L17.2 20Z" />
                  </svg>
                </div>
                <div><div className="lbl">X (Twitter)</div><div className="val">@parakh_ncert</div></div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--display)', color: 'var(--maroon-ink)', marginBottom: 12 }}>Request received — thank you</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 15 }}>The PARAKH SQAAF team will reach out within 2 working days.</p>
              </div>
            ) : (
              <>
                <div className="field-row">
                  <div className="field"><label>Full Name <span className="req">*</span></label><input type="text" placeholder="Your name" /></div>
                  <div className="field"><label>Designation <span className="req">*</span></label><input type="text" placeholder="e.g. Secretary, Director" /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label>State / SSSA / Organisation <span className="req">*</span></label><input type="text" placeholder="e.g. SCERT / State Education Dept" /></div>
                  <div className="field">
                    <label>State / UT <span className="req">*</span></label>
                    <select defaultValue="">
                      <option value="">Select State / UT</option>
                      {['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Delhi (NCT)','Gujarat','Haryana','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','West Bengal','Other State / UT'].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field"><label>Email <span className="req">*</span></label><input type="email" placeholder="you@dept.gov.in" /></div>
                  <div className="field"><label>Phone</label><input type="tel" placeholder="+91–XXXXX XXXXX" /></div>
                </div>
                <div className="field"><label>Message</label><textarea placeholder="Tell us about your schools — number of schools, languages, timeline, etc."></textarea></div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 15 }}
                  onClick={() => setSubmitted(true)}
                >
                  Submit Demo Request
                </button>
                <p className="form-note">This is a framework showcase. Submissions here are illustrative only.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
