'use client';

export default function GovStrip() {
  const handleAccess = (i: number) => {
    const root = document.documentElement;
    const cur = parseFloat(getComputedStyle(root).fontSize) || 16;
    let next = cur;
    if (i === 0) next = Math.max(14, cur - 1);
    else if (i === 1) next = 16;
    else next = Math.min(19, cur + 1);
    document.body.style.fontSize = next + 'px';
  };

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
          <a href="#">NCERT</a>
          <span className="sep">·</span>
          <a href="#">हिन्दी</a>
          <span className="sep">·</span>
          <span className="access">
            <span title="Smaller" onClick={() => handleAccess(0)} style={{ cursor: 'pointer' }}>A−</span>
            <span title="Default" onClick={() => handleAccess(1)} style={{ cursor: 'pointer' }}>A</span>
            <span title="Larger" onClick={() => handleAccess(2)} style={{ cursor: 'pointer' }}>A+</span>
          </span>
        </div>
      </div>
    </div>
  );
}
