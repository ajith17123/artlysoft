import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import par3Img from '../assets/images/Par3.jpg';
import codeIcon from '../assets/gifs/code.svg';
import cloudIcon from '../assets/gifs/cloud.svg';
import aimlIcon from '../assets/gifs/aiml.svg';
import consultantIcon from '../assets/gifs/consultant.svg';
import bpoIcon from '../assets/gifs/bpo.svg';
import { FiCheckCircle, FiMail, FiArrowRight } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import '../assets/style/Career.css';
import heroVideo from '../assets/videos/Hero Pages/career.mp4';

const statsData = [
  { target: 1, suffix: '+', label: 'Years of Excellence' },
  { target: 50, suffix: '+', label: 'Satisfied Clients' },
  { target: 200, suffix: '+', label: 'Projects Completed' },
  { target: 50, suffix: '+', label: 'Expert Team Members' }
];

const AnimatedStatItem = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTime = null;
          const duration = 2000;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeOutQuad * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={itemRef} className="career-stat-item">
      <div className="career-stat-number">{count}{suffix}</div>
      <div className="career-stat-label">{label}</div>
    </div>
  );
};

const openPositions = [
  {
    id: 'web-developer',
    title: 'Software Developer (Web / Full Stack)',
    iconImg: codeIcon,
    accentClass: 'accent-gold',
    description: 'Join our development team to build scalable web applications using modern technologies.',
    requirements: [
      'Experience with React, Node.js, or similar frameworks',
      'Strong problem-solving skills',
      'Passion for clean code and best practices'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    iconImg: cloudIcon,
    accentClass: 'accent-blue',
    description: 'Help us automate and optimize our infrastructure and deployment processes.',
    requirements: [
      'Experience with AWS, Azure, or GCP',
      'Knowledge of CI/CD pipelines',
      'Container orchestration expertise'
    ]
  },
  {
    id: 'aiml-intern',
    title: 'AI/ML Intern',
    iconImg: aimlIcon,
    accentClass: 'accent-slate',
    description: 'Work on cutting-edge AI projects and learn from experienced data scientists.',
    requirements: [
      'Basic knowledge of Python and machine learning',
      'Eagerness to learn',
      'Strong analytical thinking'
    ]
  },
  {
    id: 'it-consultant',
    title: 'IT Consultant',
    iconImg: consultantIcon,
    accentClass: 'accent-bronze',
    description: 'Provide strategic IT consulting to help clients transform their businesses.',
    requirements: [
      'Strong technical background',
      'Excellent communication skills',
      'Client-facing experience preferred'
    ]
  },
  {
    id: 'bpo-executive',
    title: 'BPO Non-Voice Executive',
    iconImg: bpoIcon,
    accentClass: 'accent-teal',
    description: 'Support our business operations through efficient non-voice processes.',
    requirements: [
      'Attention to detail',
      'Good organizational skills',
      'Proficiency in office software'
    ]
  }
];

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  // ── Parallax: Envelope / How to Apply section ──
  const par3BgRef = useRef(null);
  const envelopeSectionRef = useRef(null);

  // Ensure the page scrolls to the top when navigated to
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !par3BgRef.current || !envelopeSectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(par3BgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: envelopeSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="careers-page">
      <div className="career-hero-section">
        <div className="career-hero-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="career-hero-content">
            <div className="career-hero-badge">
              <span className="career-hero-badge-dot"></span>
              Career Section
            </div>
            <h1 className="career-hero-title">
              Build Your Future With Us
            </h1>
            <p className="career-hero-desc">
              Join a positive workplace where people learn, grow, and collaborate. We offer opportunities for both experienced professionals and freshers to solve problems and create meaningful digital solutions.
            </p>
          </div>
          <div className="career-hero-video-wrapper">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="career-hero-video"
            />
          </div>
        </div>
      </div>

      {/* Careers Section Header */}
      <header className="careers-header" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="careers-title">Why Join Artlysoft?</h2>
        <p className="careers-subtitle">
          We're building a culture where innovation thrives and every team member can make an impact.
        </p>
      </header>

      {/* Careers Bento Grid */}
      <div className="careers-bento-grid">
        
        {/* Card 1: Creative Environment */}
        <div 
          className="careers-bento-card accent-gold"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="careers-icon-box">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="careers-icon-svg heart-svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="careers-card-content">
            <h3 className="careers-card-title">Creative Environment</h3>
            <p className="careers-card-desc">
              Work in an environment that encourages innovation and creative problem-solving.
            </p>
            <div className="careers-features-container">
              <span className="careers-feature-tag">Innovation First</span>
              <span className="careers-feature-tag">Flexible Hours</span>
              <span className="careers-feature-tag">Modern Workspace</span>
            </div>
          </div>
        </div>

        {/* Card 2: Continuous Learning */}
        <div 
          className="careers-bento-card accent-slate"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="careers-icon-box">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="careers-icon-svg cap-svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Mortarboard Cap Top */}
              <path d="M2 10L12 5l10 5-10 5z" />
              {/* Mortarboard Cap Base */}
              <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5" />
              {/* Mortarboard Cap Tassel */}
              <path className="cap-tassel" d="M18 12.5V19c0 .5.5 1 1 1s1-.5 1-1v-6.5" />
            </svg>
          </div>
          <div className="careers-card-content">
            <h3 className="careers-card-title">Continuous Learning</h3>
            <p className="careers-card-desc">
              Access to training, workshops, and opportunities to work with cutting-edge technologies.
            </p>
            <div className="careers-features-container">
              <span className="careers-feature-tag">Tech Workshops</span>
              <span className="careers-feature-tag">Certifications</span>
              <span className="careers-feature-tag">Mentorship</span>
            </div>
          </div>
        </div>

        {/* Card 3: Team Collaboration */}
        <div 
          className="careers-bento-card accent-bronze"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="careers-icon-box">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="careers-icon-svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.25" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* First Figure */}
              <path className="collab-user-1" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle className="collab-user-1" cx="9" cy="7" r="4" />
              {/* Second Figure (Slightly Offset/Behind) */}
              <path className="collab-user-2" d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path className="collab-user-2" d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="careers-card-content">
            <h3 className="careers-card-title">Team Collaboration</h3>
            <p className="careers-card-desc">
              Work alongside talented professionals in a collaborative and supportive team environment.
            </p>
            <div className="careers-features-container">
              <span className="careers-feature-tag">Diverse Teams</span>
              <span className="careers-feature-tag">Supportive Culture</span>
              <span className="careers-feature-tag">Cross-functional</span>
            </div>
          </div>
        </div>

      </div>

      {/* Open Positions Section */}
      <section className="open-positions-section">
        <header className="open-positions-header" data-aos="fade-up" data-aos-duration="1000">
          <div className="open-positions-eyebrow">
            <span className="eyebrow-glow-dot"></span>
            Careers at Artlysoft
          </div>
          <h2 className="open-positions-title">OPEN POSITIONS</h2>
          <p className="open-positions-subtitle">
            Explore current opportunities to join our growing team
          </p>
        </header>

        <div className="positions-grid">
          {openPositions.map((pos, idx) => (
            <div 
              key={pos.id}
              className={`position-card ${pos.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="position-card-top">
                <div className="position-icon-box">
                  <img src={pos.iconImg} alt={pos.title} className="position-icon-image" />
                </div>
                <div className="position-header-text">
                  <h3 className="position-card-title">{pos.title}</h3>
                </div>
              </div>

              <p className="position-card-desc">{pos.description}</p>

              <div className="position-hover-content">
                <div className="position-requirements-block">
                  <h4 className="requirements-heading">Requirements:</h4>
                  <ul className="requirements-list">
                    {pos.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="requirement-item">
                        <FiCheckCircle className="requirement-check-icon" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="position-card-footer">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=hr@artlysoft.com&su=Application for ${encodeURIComponent(pos.title)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="position-apply-btn"
                  >
                    Apply Now <GoArrowUpRight className="apply-btn-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-to-apply-section" data-aos="fade-up" data-aos-duration="1000" ref={envelopeSectionRef}>
        {/* Par3 photo background */}
        <div
          className="par-bg career-par-bg"
          ref={par3BgRef}
          style={{ backgroundImage: `url(${par3Img})` }}
        />
        <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
          
          {/* ENVELOPE BACK FLAP */}
          <div className="envelope-back"></div>

          {/* THE INVITATION CARD (SLIDES OUT) */}
          <div className="invitation-card how-to-apply-card accent-blue">
            {/* Glowing Border Corners */}
            <span className="apply-corner apply-corner--tl" />
            <span className="apply-corner apply-corner--tr" />
            <span className="apply-corner apply-corner--bl" />
            <span className="apply-corner apply-corner--br" />

            <div className="how-to-apply-icon-badge">
              <FiMail />
            </div>
            <h2 className="how-to-apply-title">HOW TO APPLY</h2>
            <p className="how-to-apply-text">
              Send your resume to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@artlysoft.com&su=Job Application - Artlysoft" target="_blank" rel="noopener noreferrer" className="how-to-apply-email">hr@artlysoft.com</a>
            </p>
            <p className="how-to-apply-tagline">
              Let's build your future, together.
            </p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@artlysoft.com&su=Job Application - Artlysoft" 
              target="_blank"
              rel="noopener noreferrer"
              className="how-to-apply-cta-btn"
            >
              Apply Now <FiArrowRight className="cta-btn-arrow" />
            </a>
          </div>

          {/* ENVELOPE FRONT POCKET */}
          <div className="envelope-front"></div>

          {/* ENVELOPE TOP FLAP */}
          <div className="envelope-top"></div>

          {/* INTERACTION TRIGGER BUTTON */}
          <button 
            className={`btn-action ${isOpen ? 'btn-opened' : ''}`} 
            onClick={toggleEnvelope}
          >
            {isOpen ? 'Close' : 'Send Resume'}
          </button>
        </div>
      </section>

      
    </section>
  );
};

export default Career;