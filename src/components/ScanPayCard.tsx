import './ScanPayCard.css';

export default function ScanPayCard() {
  return (
    <div className="scan-pay-card">
      <div className="scan-pay-visual">
        <div className="scan-lines">
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
          <div className="scan-line"></div>
        </div>
        <div className="scan-badge">
          <span>Scan & Pay</span>
        </div>
        <div className="scan-corners">
          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>
        </div>
      </div>
    </div>
  );
}
