import './SecurityBanner.css';

export default function SecurityBanner() {
  return (
    <div className="security-banner">
      <div className="security-content">
        <h3 className="security-title">Unlock higher security</h3>
        <p className="security-subtitle">by completing RBI preferred</p>
        <p className="security-subtitle">video KYC</p>
        <button className="verify-btn">
          Verify now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="security-icon">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" fill="#0a8a6a"/>
          <path d="M50 20 L65 30 L65 50 C65 60 60 70 50 75 C40 70 35 60 35 50 L35 30 Z" fill="#0fad87"/>
          <path d="M50 40 L55 30 L60 35 L50 50 L40 45 Z" fill="#ff8c00"/>
          <rect x="45" y="55" width="10" height="12" rx="2" fill="#ff8c00"/>
        </svg>
      </div>
    </div>
  );
}
