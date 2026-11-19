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

    // 350ms smooth fade-out matching CSS transition
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 350);
  };

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Ensure video is muted and plays immediately (essential for mobile/Safari autoplay policies)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {
        // Fallback only if browser strictly blocks autoplay
        finish();
      });
    }

    // Safety fallback timer (8s) only in case network completely hangs
    const safetyTimer = setTimeout(() => {
      finish();
    }, 8000);

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
