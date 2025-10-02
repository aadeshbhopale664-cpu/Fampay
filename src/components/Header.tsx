import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="profile-pic">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" alt="Profile" />
        </div>
      </div>

      <div className="header-center">
        <button className="icon-btn add-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="emoji-group">
          <span className="emoji">🤑</span>
          <span className="emoji">🤑</span>
          <span className="emoji">🤑</span>
        </div>

        <button className="icon-btn eye-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="header-right">
        <button className="icon-btn sparkle-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
            <circle cx="20" cy="6" r="2" fill="currentColor"/>
          </svg>
        </button>

        <button className="icon-btn notification-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
