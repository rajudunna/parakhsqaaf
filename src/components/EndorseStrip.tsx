export default function EndorseStrip() {
  return (
    <div className="trustbar">
      <div className="trustbar-inner">
        <span className="chip">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          SQAAF Framework Compliant
        </span>
        <span className="vsep"></span>
        <span className="chip">NEP 2020 Aligned</span>
        <span className="vsep"></span>
        <span className="chip">NCF · SSSA Ready</span>
        <span className="vsep"></span>
        <span className="chip">21 Evidence Types</span>
        <span className="vsep"></span>
        <span className="deploy">
          <span className="live"></span>
          Reference: <b>SQAAF · NCERT · ISBN 978-93-5729-704-2</b>
        </span>
      </div>
    </div>
  );
}
