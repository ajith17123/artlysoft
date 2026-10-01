import { useState, useEffect } from 'react';
import '../assets/style/Preloader.css';
import preloaderVideo from '../assets/videos/Preloader1.mp4';

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scrolling on document and body while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, []);

  const handleVideoEnded = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div 
      className={`preloader-container ${isFading ? 'fade-out' : ''}`}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div className="preloader-video-wrapper">
        <video
          src={preloaderVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="preloader-video center-video"
        />
      </div>
    </div>
  );
}


