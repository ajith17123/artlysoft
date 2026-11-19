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

  const handleGifLoaded = () => {
    if (completedRef.current || timerRef.current) return;

    // Start fade-out at 650ms so the preloader completely disappears right as cycle 1 completes,
    // before any second cycle can ever start.
    timerRef.current = setTimeout(() => {
      finish();
    }, 650);
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
      handleGifLoaded();
    }

    // Safety fallback timer in case network fails
    const safetyTimer = setTimeout(() => {
      finish();
    }, 3000);

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
          onLoad={handleGifLoaded}
          onError={finish}
        />
      </div>
    </div>
  );
}
