import './BankLinkBanner.css';

export default function BankLinkBanner() {
  return (
    <div className="bank-link-banner">
      <div className="bank-link-content">
        <h3 className="bank-link-title">Link & pay using</h3>
        <h3 className="bank-link-title">your bank account</h3>
        <button className="link-btn">
          Link now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="upi-logo">
        <div className="upi-text">UPI</div>
        <div className="upi-version">2.0</div>
      </div>
    </div>
  );
}
