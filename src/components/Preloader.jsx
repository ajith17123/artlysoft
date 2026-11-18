import { useState, useEffect, useRef } from 'react';
import '../assets/style/Preloader.css';
import preloaderVideo from '../assets/videos/Preloader1.mp4';

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const completedRef = useRef(false);
  const videoRef = useRef(null);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  useEffect(() => {
    // Lock scrolling on document and body while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Ensure video starts playing immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback only if browser strictly blocks autoplay
        finish();
      });
    }

    // Extended fallback timer (10s) only in case video network completely hangs
    const safetyTimer = setTimeout(() => {
      finish();
    }, 10000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, []);

  return (
    <div className={`preloader-container ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-video-wrapper">
        <video
          ref={videoRef}
          src={preloaderVideo}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={finish}
          onError={finish}
          className="preloader-video center-video"
        />
      </div>
    </div>
  );
}
