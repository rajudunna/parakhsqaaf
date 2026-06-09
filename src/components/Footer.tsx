export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="fb-name">SQAAF <span>· PARAKH</span></div>
            <p>The School Quality Assessment &amp; Assurance Framework — a national initiative of PARAKH, NCERT, under the Ministry of Education, Government of India, aligned with NEP 2020 and the NCF. Built by <a href="https://www.schemaxtech.com" target="_blank" rel="noopener">Schemax Expert Techno Craft Pvt. Ltd.</a></p>
          </div>
          <div className="footer-col">
            <h4>Framework</h4>
            <ul>
              <li><a href="#framework">5-Domain Framework</a></li>
              <li><a href="#levels">3-Tier Rating</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#workflow">How It Works</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://parakh.ncert.gov.in/" target="_blank" rel="noopener">PARAKH Official</a></li>
              <li><a href="https://ncert.nic.in/" target="_blank" rel="noopener">NCERT</a></li>
              <li><a href="https://udiseplus.gov.in/" target="_blank" rel="noopener">UDISE+</a></li>
              <li><a href="#">Vidya Samiksha Kendra</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-line">Sri Aurobindo Marg,<br />New Delhi–110016, India<br /><br />parakhschoolboards@gmail.com<br />+91–86839 32278<br />@parakh_ncert</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 SQAAF · PARAKH — A Product by <a href="https://www.schemaxtech.com" style={{ color: 'var(--gold-bright)', textDecoration: 'none' }} target="_blank" rel="noopener">Schemax Expert Techno Craft Pvt. Ltd.</a></div>
          <div className="endorse-logos">
            <span className="el">SQAAF Compliant</span>
            <span className="el">NEP 2020 Ready</span>
            <span className="el">On-Premise Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
