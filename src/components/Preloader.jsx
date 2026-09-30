import { useState } from 'react';
import '../assets/style/Preloader.css';
import preloaderVideo from '../assets/videos/Preloader.mp4';

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnded = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  return (
    <div className={`preloader-container ${isFading ? 'fade-out' : ''}`}>
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

      <div className="preloader-footer">
        <div className="preloader-tagline">Welcome To Artlysoft</div>
      </div>
    </div>
  );
}
