import { useEffect, useRef } from 'react';
import '../assets/style/Particles.css';

const PARTICLE_COLOR = { r: 30, g: 88, b: 210 }; // Deep royal blue #1E58D2

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let particles = [];

    const calculateCount = (w, h) => {
      const area = w * h;
      return Math.min(55, Math.max(32, Math.floor(area / 20000)));
    };

    const initParticles = () => {
      const count = calculateCount(width, height);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2.2 + 2.0,
          vx: (Math.random() - 0.5) * 0.45,
          vy: - (Math.random() * 0.4 + 0.2), // Gentle upward floating
          alpha: Math.random() * 0.2 + 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.008
        });
      }
    };

    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const count = particles.length;

      // Draw & Update Particles
      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Update pulse phase
        p.pulse += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.08;
        const clampedAlpha = Math.max(0.1, Math.min(0.4, currentAlpha));

        // Draw particle dot with subtle ambient glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, ${clampedAlpha})`;
        ctx.shadowColor = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, 0.25)`;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Reset shadow for performance
        ctx.shadowBlur = 0;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Screen wrap logic for continuous flow
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="particles-canvas-container" aria-hidden="true">
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  );
};

export default Particles;
