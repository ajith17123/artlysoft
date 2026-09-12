import { useEffect, useRef, useState } from 'react';
import '../assets/style/Preloader.css';

export default function Preloader({ onComplete }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [textFormed, setTextFormed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 100 };

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();

    // Particle Class with faster spring physics for rapid convergence
    class Particle {
      constructor(x, y) {
        this.targetX = x;
        this.targetY = y;
        // Start from random positions surrounding canvas center
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 250 + 100;
        this.x = canvas.width / 2 + Math.cos(angle) * dist;
        this.y = canvas.height / 2 + Math.sin(angle) * dist;
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        this.size = Math.random() * 1.6 + 1.2;
        // Higher ease for fast ~0.6s convergence
        this.ease = Math.random() * 0.15 + 0.1;
        this.friction = 0.82;

        const colors = ['#0066cc', '#0099ff', '#00d2ff', '#38bdf8', '#60a5fa', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.4;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        // Fast spring physics towards target text position
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        this.vx += dx * this.ease * 0.4;
        this.vy += dy * this.ease * 0.4;

        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        // Interactive mouse repelling
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - this.x;
          const mdy = mouse.y - this.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(mdy, mdx);
            this.vx -= Math.cos(angle) * force * 5;
            this.vy -= Math.sin(angle) * force * 5;
          }
        }
      }
    }

    const createParticleText = () => {
      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      offCanvas.width = canvas.width;
      offCanvas.height = canvas.height;

      const text = 'Artlysoft';
      const fontSize = Math.min(canvas.width / 6.5, 110);
      offCtx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      offCtx.fillStyle = '#ffffff';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      offCtx.fillText(text, offCanvas.width / 2, offCanvas.height / 2);

      const imageData = offCtx.getImageData(0, 0, offCanvas.width, offCanvas.height);
      const data = imageData.data;

      const step = canvas.width < 600 ? 4 : 3;
      particles = [];

      for (let y = 0; y < offCanvas.height; y += step) {
        for (let x = 0; x < offCanvas.width; x += step) {
          const index = (y * offCanvas.width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    };

    createParticleText();

    // Set textFormed state after 0.8s
    const textTimer = setTimeout(() => {
      setTextFormed(true);
    }, 800);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render glowing crisp text once particles assemble
      const fontSize = Math.min(canvas.width / 6.5, 110);
      ctx.save();
      ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Subtle gradient fill for ultra-crisp text legibility
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, '#e0f2fe');
      gradient.addColorStop(1, '#ffffff');

      ctx.fillStyle = gradient;
      ctx.shadowColor = '#0088ff';
      ctx.shadowBlur = 18;
      ctx.globalAlpha = textFormed ? 0.85 : 0;
      ctx.fillText('Artlysoft', canvas.width / 2, canvas.height / 2);
      ctx.restore();

      // Render glowing particles on top
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      updateCanvasSize();
      createParticleText();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(textTimer);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [textFormed]);

  // Extended Display Hold Management for Artlysoft Text
  useEffect(() => {
    // Extended text display hold (~7.0 seconds of displayed hold, total 7.8s)
    const fadeStartTime = 7000;
    const totalDuration = 7800;
    const intervalTime = 40;
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Trigger smooth fade-out at 7.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, fadeStartTime);

    // Unmount and open homepage after 7.8 seconds
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader-container ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-glow-top" />
      <div className="preloader-glow-bottom" />

      <div className="preloader-canvas-wrapper">
        <canvas ref={canvasRef} className="preloader-canvas" />
      </div>

      <div className="preloader-footer">
        <div className="preloader-tagline">Softly Shaping Software Solutions</div>
        <div className="preloader-progress-track">
          <div className="preloader-progress-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
      </div>
    </div>
  );
}
