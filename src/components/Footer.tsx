export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>SQAAF</h3>
            <p>The School Quality Assessment and Assurance Framework — a national initiative of PARAKH, NCERT, under the Ministry of Education, Government of India.</p>
          </div>
          <div className="footer-col">
            <h4>Framework</h4>
            <ul>
              <li><a href="#">5 Domains</a></li>
              <li><a href="#">Performance Levels</a></li>
              <li><a href="#">Scoring System</a></li>
              <li><a href="#">Evidence Checklist</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For Schools</h4>
            <ul>
              <li><a href="#">Self-Assessment Portal</a></li>
              <li><a href="#">School Login</a></li>
              <li><a href="#">Help &amp; Training</a></li>
              <li><a href="/SQAAF.pdf" download="Equivalence-of-Boards.pdf">Download PDF</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connected</h4>
            <ul>
              <li><a href="#">PARAKH Official</a></li>
              <li><a href="#">NCERT</a></li>
              <li><a href="#">UDISE+</a></li>
              <li><a href="#">DigiLocker · MeriPehchaan</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 PARAKH · NCERT · Ministry of Education, Government of India</div>
          <div className="endorse">
            <span>NEP 2020 Aligned</span>
            <span>NCF Compliant</span>
            <span>WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
