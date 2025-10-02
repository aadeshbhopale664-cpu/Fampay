import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="search-icon">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <input
        type="text"
        placeholder="Pay UPI ID or number"
        className="search-input"
      />
    </div>
  );
}
