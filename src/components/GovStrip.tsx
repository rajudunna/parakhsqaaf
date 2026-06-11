export default function GovStrip() {
  return (
    <div className="gov-strip">
      <div className="gov-strip-inner">
        <div className="left">
          <span className="flag"></span>
          <span>भारत सरकार · Government of India</span>
        </div>
        <div className="right">
          <a href="https://parakh.ncert.gov.in/" target="_blank" rel="noopener">PARAKH</a>
          <span className="sep">·</span>
          <a href="https://ncert.nic.in/" target="_blank" rel="noopener">NCERT</a>
        </div>
      </div>
    </div>
  );
}

