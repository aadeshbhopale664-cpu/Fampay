import { useEffect, useRef, useState } from 'react';
import './QRScannerModal.css';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const themes = [
  { id: 1, name: 'default', color: '#10b981', icon: 'qr' },
  { id: 2, name: 'cricket', color: '#ef4444', icon: 'shield', locked: true },
  { id: 3, name: 'bird', color: '#3b82f6', icon: 'circle' },
  { id: 4, name: 'nature', color: '#eab308', icon: 'leaf' }
];

export default function QRScannerModal({ isOpen, onClose }: QRScannerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState(0);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isOpen]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      setStream(mediaStream);
      setError('');
    } catch (err) {
      setError('Camera access denied. Please allow camera permissions.');
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  if (!isOpen) return null;

  const currentTheme = themes[selectedTheme];
  const getThemeBackground = () => {
    switch(currentTheme.name) {
      case 'cricket':
        return 'linear-gradient(to bottom, #87ceeb 0%, #87ceeb 60%, #1a1a1a 60%, #1a1a1a 100%)';
      case 'bird':
        return 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
      case 'nature':
        return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
      default:
        return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    }
  };

  return (
    <div className="qr-scanner-modal-overlay" style={{ background: getThemeBackground() }}>
      <button className="close-btn-top" onClick={onClose}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      {currentTheme.name === 'cricket' && (
        <>
          <div className="theme-decoration cricket-player">
            <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
              <ellipse cx="100" cy="280" rx="80" ry="20" fill="rgba(0,0,0,0.2)"/>
              <rect x="70" y="150" width="60" height="130" rx="5" fill="#1e3a8a"/>
              <circle cx="100" cy="120" r="25" fill="#8b5a3c"/>
              <path d="M 60 180 L 40 220 L 50 220 L 70 185 Z" fill="#8b5a3c"/>
              <path d="M 140 180 L 160 220 L 150 220 L 130 185 Z" fill="#8b5a3c"/>
              <rect x="35" y="190" width="8" height="60" rx="4" fill="#cd7f32"/>
              <rect x="38" y="185" width="50" height="15" rx="7" fill="#dc2626"/>
            </svg>
            <div className="sparkles">
              <div className="sparkle" style={{ top: '20%', right: '15%' }}>✦</div>
              <div className="sparkle" style={{ top: '35%', right: '25%' }}>✦</div>
              <div className="sparkle" style={{ bottom: '45%', right: '20%' }}>✦</div>
            </div>
          </div>
          <div className="stadium-lights">
            <div className="light-beam"></div>
            <div className="light-beam" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </>
      )}

      <div className="camera-container-fullscreen">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="camera-video-fullscreen"
            />
            <div className="scan-frame-large">
              <div className="scan-corner corner-tl"></div>
              <div className="scan-corner corner-tr"></div>
              <div className="scan-corner corner-bl"></div>
              <div className="scan-corner corner-br"></div>
            </div>
          </>
        )}
      </div>

      {currentTheme.name === 'cricket' && (
        <div className="unlock-banner">
          <button className="unlock-btn">
            Unlock for ₹79 ₹9
          </button>
        </div>
      )}

      <div className="theme-selector">
        <p>Try new themes by scrolling</p>
        <div className="theme-icons">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              className={`theme-icon ${selectedTheme === index ? 'active' : ''} ${theme.locked ? 'locked' : ''}`}
              onClick={() => setSelectedTheme(index)}
            >
              {theme.icon === 'qr' && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
              {theme.icon === 'shield' && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {theme.icon === 'circle' && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
              {theme.icon === 'leaf' && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
              {theme.locked && (
                <div className="lock-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="11" width="14" height="10" rx="2"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#000" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
