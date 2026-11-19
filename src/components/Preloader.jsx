import { useState, useEffect, useRef } from 'react';
import '../assets/style/Preloader.css';
import preloaderGif from '../assets/videos/Preloader1.gif';

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const completedRef = useRef(false);
  const timerRef = useRef(null);
  const imgRef = useRef(null);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsFading(true);

    // 350ms smooth fade-out matching CSS transition
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 350);
  };

  const startAnimationCycle = () => {
    if (completedRef.current || timerRef.current) return;

    // Preloader1.gif duration is 3230ms (97 frames at 100fps delay).
    // Start 350ms fade at 2880ms so the fade-out completes seamlessly right as cycle 1 completes.
    timerRef.current = setTimeout(() => {
      finish();
    }, 2880);
  };

  useEffect(() => {
    // Lock scrolling while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // If image is already cached in memory
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      startAnimationCycle();
    }

    // Generous fallback timer (10s) only in case network completely hangs
    const safetyTimer = setTimeout(() => {
      finish();
    }, 10000);

    return () => {
      clearTimeout(safetyTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, []);

  return (
    <div className={`preloader-container ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-video-wrapper">
        <img
          ref={imgRef}
          src={preloaderGif}
          alt="Artlysoft Preloader"
          className="preloader-gif center-video"
          onLoad={startAnimationCycle}
          onError={finish}
        />
      </div>
    </div>
  );
}
