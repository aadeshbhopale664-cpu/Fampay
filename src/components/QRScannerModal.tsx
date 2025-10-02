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
    <div className="qr-scanner-modal-overlay" onClick={onClose}>
      <div className="qr-scanner-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qr-scanner-header">
          <h2>Scan QR Code</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="qr-scanner-content">
          {error ? (
            <div className="error-message">
              <p>{error}</p>
            </div>
          ) : (
            <div className="camera-container">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="camera-video"
              />
              <div className="scan-frame">
                <div className="scan-corner corner-tl"></div>
                <div className="scan-corner corner-tr"></div>
                <div className="scan-corner corner-bl"></div>
                <div className="scan-corner corner-br"></div>
              </div>
              <div className="scan-line-animation"></div>
            </div>
          )}
        </div>

        <div className="qr-scanner-footer">
          <p className="instruction-text">Position QR code within the frame</p>
        </div>
      </div>
    </div>
  );
}
