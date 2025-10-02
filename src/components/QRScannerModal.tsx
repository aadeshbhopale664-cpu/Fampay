import { useEffect, useRef, useState } from 'react';
import './QRScannerModal.css';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRScannerModal({ isOpen, onClose }: QRScannerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string>('');

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

  return (
    <div className="qr-scanner-modal-overlay">
      <button className="close-btn-top" onClick={onClose}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

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

      <div className="bottom-controls">
        <button className="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <button className="control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="control-btn">
          <span style={{ fontSize: '16px', fontWeight: '600' }}>1×</span>
        </button>
      </div>

      <div className="bottom-banner">
        <div className="banner-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="banner-text">
          <p>Your phone number will be visible to the receiver. Hide phone number from your UPI ID now!</p>
        </div>
        <div className="banner-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="powered-by">
        <span>Powered by</span>
        <span className="bank-logo">YES BANK</span>
        <span className="upi-logo">UPI</span>
      </div>

      <div className="theme-selector">
        <p>Try new themes by scrolling</p>
        <div className="theme-icons">
          <div className="theme-icon active">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="theme-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="theme-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
