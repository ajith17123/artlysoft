import { useState, useEffect, useRef } from 'react';
import codeIcon from '../assets/gifs/code.svg';
import aimlIcon from '../assets/gifs/aiml.svg';
import automationIcon from '../assets/gifs/automation.svg';
import cloudIcon from '../assets/gifs/cloud.svg';
import securityIcon from '../assets/gifs/security.svg';
import transformIcon from '../assets/gifs/transform.svg';
import handshakeIcon from '../assets/gifs/value_handshake.svg';
import teamIcon from '../assets/gifs/team_collab.svg';
import aboutArrowTlSvg from '../assets/gifs/about_arrow_tl.svg?raw';
import aboutArrowTrSvg from '../assets/gifs/about_arrow_tr.svg?raw';
import aboutArrowBlSvg from '../assets/gifs/about_arrow_bl.svg?raw';
import aboutArrowBrSvg from '../assets/gifs/about_arrow_br.svg?raw';
import { FiCheckCircle, FiPlay, FiPause, FiArrowUpRight, FiMaximize2, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import snakeGameVideo from '../assets/videos/Designs/Snake_Game.mp4';
import peacockVideo from '../assets/videos/Designs/preethi peacock.mp4';
import countdownVideo from '../assets/videos/Designs/countdown.mp4';
import fizzVideo from '../assets/videos/Designs/Fizz.mp4';
import videoAbout from '../assets/videos/Hero/About.mp4';
import videoServices from '../assets/videos/Hero/Services.mp4';
import videoTalentOS from '../assets/videos/Hero/Artlysoft talent OS.mp4';
import videoCareer from '../assets/videos/Hero/Career.mp4';
import '../assets/style/Home.css';
import par1Img from '../assets/images/Par1.jpg';

gsap.registerPlugin(ScrollTrigger);

const CREATIVE_LAB_CARDS = [
  { id: 1, video: snakeGameVideo },
  { id: 2, video: peacockVideo },
  { id: 3, video: countdownVideo },
  { id: 4, video: fizzVideo }
];

function CreativeLabVideoModal({ card, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="creative-lab-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="creative-lab-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="creative-lab-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <FiX size={22} />
        </button>
        <video
          src={card.video}
          autoPlay
          controls
          playsInline
          className="creative-lab-modal-video"
        />
      </div>
    </div>
  );
}

function CreativeLabCard({ card, idx, onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="creative-lab-card"
      data-aos="fade-up"
      data-aos-delay={idx * 120}
      data-aos-duration="1000"
      onClick={() => onOpenModal(card)}
      title="Click to pop out video"
    >
      <div className="creative-lab-video-wrapper">
        <video
          ref={videoRef}
          src={card.video}
          autoPlay
          loop
          muted
          playsInline
          className="creative-lab-video"
        />
        <div className="creative-lab-video-overlay" />

        {/* Hover Pop Out Hint */}
        <div className="creative-lab-expand-hint">
          <FiMaximize2 size={16} />
          <span>Pop out video</span>
        </div>

        {/* Floating Controls */}
        <div className="creative-lab-controls">
          <button
            type="button"
            className="creative-lab-control-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} style={{ marginLeft: "2px" }} />}
          </button>
        </div>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    id: 1,
    name: "Kamesh Kumar",
    fullName: "Kamesh Kumar",
    rating: 5,
    text: "Innovative, agile, and driven by purpose this startup is redefining industry standards with fresh thinking. A promising team with a clear vision and relentless execution."

  },
  {
    id: 2,
    name: "Isak Mohammed",
    fullName: "Isak Mohammed",
    rating: 5,
    text: "Professional service, innovative solutions, and excellent technical support. They understand client requirements well and consistently exceed expectations",
  },
  {
    id: 3,
    name: "Dheena Saravanan",
    fullName: "Dheena Saravanan",

    rating: 5,
    text: "Great experience with Artlysoft Private Limited. The team is knowledgeable, friendly, and always ready to help. They understand client requirements well and deliver solutions with professionalism and quality. Wishing the team continued success and growth.",
  },
  {
    id: 4,
    name: "Harish kumar",
    fullName: "Harish kumar",

    rating: 5,
    text: "Thank you to the entire team for an amazing Full Stack Development learning experience. I'm grateful for the knowledge, guidance, and encouragement I received throughout the course. Wishing the institution continued success in helping many more students achieve their goals!",
  },
  {
    id: 5,
    name: "Ajith",
    fullName: "Ajith",

    rating: 5,
    text: "Good place to work!I highly recommend this company. The workspace has a very good ambience and a welcoming environment. The Director is a wonderful person who is genuinely supportive of everyone's professional growth and career development. It's a fantastic place to build a career",
  },
  {
    id: 6,
    name: "Bharani Shankar",
    fullName: "Bharani Shankar",

    rating: 5,
    text: "I had a great experience working at Artlysoft private limited company. The work environment was professional and supportive, and I had many opportunities to learn and grow. I am grateful for the experience and would recommend this company to others looking for a good workplace.",
  },
];

const TOTAL = TESTIMONIALS.length;

function mod(n, m) {
  return ((n % m) + m) % m;
}

const SLOTS = {
  "top-left": { translateX: -415, translateY: -92, scale: 1, zIndex: 4, opacity: 0.95 },
  "bottom-left": { translateX: -415, translateY: 92, scale: 1, zIndex: 4, opacity: 0.95 },
  "center": { translateX: 0, translateY: 0, scale: 1, zIndex: 10, opacity: 1 },
  "top-right": { translateX: 415, translateY: -92, scale: 1, zIndex: 4, opacity: 0.95 },
  "bottom-right": { translateX: 415, translateY: 92, scale: 1, zIndex: 4, opacity: 0.95 },
  "hidden": { translateX: 0, translateY: 0, scale: 0.5, zIndex: 0, opacity: 0 },
};

// Fixed position side cards featured around the main center box
const SIDE_CARDS = [
  { slotName: "top-left", index: 0 },     // Emily
  { slotName: "bottom-left", index: 1 },  // Sarah
  { slotName: "top-right", index: 3 },    // Lauren
  { slotName: "bottom-right", index: 2 }, // James
];

function Stars({ count = 5 }) {
  return (
    <div className="tm-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="tm-star">&#9733;</span>
      ))}
    </div>
  );
}

function RunningNumber({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  const target = parseInt(value, 10);
  const suffix = value.replace(String(target), '');

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    if (start === end) {
      setTimeout(() => setCount(end), 0);
      return;
    }

    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    // Speed up steps dynamically for larger ranges so it finishes on time
    const stepTime = Math.max(Math.floor(duration / range), 6);

    const timer = setInterval(() => {
      current += increment;
      setCount(current);

      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef}>
      {hasStarted ? `${count}${suffix}` : `0${suffix}`}
    </span>
  );
}

const HERO_SLIDES = [
  {
    id: 1,
    badge: "Next-Gen Digital Solutions",
    headline: "Softly Shaping Software Solutions for the AI Era",
    subheadline: "Empowering forward-thinking businesses through intelligent automation, cloud engineering, and scalable enterprise platforms.",
    ctaText: "Explore Our Vision",
    ctaLink: "#/about",
    themeClass: "hero-theme-brand",
    accentColor: "rgba(0, 198, 255, 1)",
    gradient: "linear-gradient(135deg, rgba(0, 114, 243, 0.15) 0%, rgba(0, 198, 255, 0.15) 100%)",
    video: videoAbout,
    videoPosition: "right",
    highlights: (
      <div className="hero-slide-highlights highlights-brand">
        <div className="highlight-metric-card">
          <span className="metric-val">200+</span>
          <span className="metric-label">Projects Delivered</span>
        </div>
        <div className="highlight-text-card">
          <span className="highlight-icon">⚡</span>
          <span className="highlight-text-desc">Multi-Cloud & AI-Ready Architecture</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    badge: "End-to-End IT Services",
    headline: "Engineering Scalable Systems from Cloud to AI",
    subheadline: "Accelerate your digital roadmap with enterprise-grade Product Engineering, Multi-Cloud integration (AWS, Azure, GCP), Data Analytics, and RPA.",
    ctaText: "View All Services",
    ctaLink: "#/services",
    themeClass: "hero-theme-services",
    accentColor: "rgba(224, 104, 14, 1)",
    gradient: "linear-gradient(135deg, rgba(224, 104, 14, 0.15) 0%, rgba(255, 156, 51, 0.15) 100%)",
    video: videoServices,
    videoPosition: "left",
    highlights: (
      <div className="hero-slide-highlights highlights-services">
        <span className="service-pillar-tag">Product Engineering</span>
        <span className="service-pillar-tag">Data & AI</span>
        <span className="service-pillar-tag">Intelligent Automation</span>
        <span className="service-pillar-tag">Cloud Architecture</span>
      </div>
    )
  },
  {
    id: 3,
    badge: "Featured Product • TalentOS",
    headline: "The AI-Powered Operating System for Smart Hiring",
    subheadline: "Transform recruitment with intelligent candidate matching, automated parsing, and skill intelligence designed to hire top talent faster.",
    ctaText: "Explore TalentOS",
    ctaLink: "#/products/talent-os",
    secondaryCtaText: "Book a Demo →",
    secondaryCtaLink: "#/contact",
    themeClass: "hero-theme-talentos",
    accentColor: "rgba(168, 85, 247, 1)",
    gradient: "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(192, 132, 252, 0.15) 100%)",
    video: videoTalentOS,
    videoPosition: "right",
    highlights: (
      <div className="hero-slide-highlights highlights-talentos">
        <div className="bullet-highlight">
          <span className="bullet-title">AI Semantic Matching:</span>
          <span className="bullet-text">Precision candidate-to-role scoring</span>
        </div>
        <div className="bullet-highlight">
          <span className="bullet-title">Automated ATS Pipeline:</span>
          <span className="bullet-text">Sourcing, vetting, and interview workflows in one place</span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    badge: "We Are Hiring",
    headline: "Build the Future of Intelligent Tech With Us",
    subheadline: "Join a passionate team of developers, cloud architects, and AI pioneers building innovative software for global industries.",
    ctaText: "Explore Open Roles",
    ctaLink: "#/joinus/career",
    themeClass: "hero-theme-careers",
    accentColor: "rgba(16, 185, 129, 1)",
    gradient: "linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(52, 211, 153, 0.15) 100%)",
    video: videoCareer,
    videoPosition: "left",
    highlights: (
      <div className="hero-slide-highlights highlights-careers">
        <div className="career-pill">
          <span className="career-dot"></span>
          Software Development
        </div>
        <div className="career-pill">
          <span className="career-dot"></span>
          DevOps & Cloud
        </div>
        <div className="career-pill">
          <span className="career-dot"></span>
          AI / ML Engineering
        </div>
      </div>
    )
  }
];

const Home = () => {
  const [selectedCreativeVideo, setSelectedCreativeVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [animatingSlot, setAnimatingSlot] = useState(null);
  const [isInitialEntrance, setIsInitialEntrance] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const heroSectionRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);

  const capabilitiesSectionRef = useRef(null);
  const capCardsRef = useRef([]);

  const aboutSectionRef = useRef(null);

  const whySectionRef = useRef(null);
  const whyBgRef = useRef(null);
  const par1BgRef = useRef(null);

  const testimonialsSectionRef = useRef(null);
  const testimonialStageRef = useRef(null);
  const testimonialBgGridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      // 1. Hero Parallax
      if (heroBgRef.current && heroSectionRef.current) {
        gsap.to(heroBgRef.current,
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }
      if (heroContentRef.current && heroSectionRef.current) {
        gsap.to(heroContentRef.current,
          {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // 2. Our Core Capabilities Parallax Card Staggering
      if (capabilitiesSectionRef.current) {
        const speeds = [-30, -60, -40, -50, -30, -70];
        capCardsRef.current.forEach((card, idx) => {
          if (!card) return;
          gsap.fromTo(card,
            { y: 0 },
            {
              y: speeds[idx % speeds.length],
              ease: 'none',
              scrollTrigger: {
                trigger: capabilitiesSectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        });
      }



      // 4. Why Choose Artlysoft Section — photo parallax background
      if (par1BgRef.current && whySectionRef.current) {
        gsap.fromTo(par1BgRef.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // 4b. Why Choose Artlysoft — watermark reverse translation (unchanged)
      if (whyBgRef.current && whySectionRef.current) {
        gsap.fromTo(whyBgRef.current,
          { yPercent: 10 },
          {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // 5. Testimonial Section Floating Cards & Badges over background review grid
      if (testimonialsSectionRef.current) {
        if (testimonialBgGridRef.current) {
          gsap.fromTo(testimonialBgGridRef.current,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: testimonialsSectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        }
        if (testimonialStageRef.current) {
          gsap.fromTo(testimonialStageRef.current,
            { yPercent: 5 },
            {
              yPercent: -5,
              ease: 'none',
              scrollTrigger: {
                trigger: testimonialsSectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        }
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Turn off initial entrance state once sequential load settles
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialEntrance(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const activeTestimonial = selectedIndex !== null ? TESTIMONIALS[selectedIndex] : null;

  const handleSelectCard = (index, slotName) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setAnimatingSlot(null);
    } else {
      setSelectedIndex(index);
      setAnimatingSlot(slotName || getSlotForIndex(index));
    }
  };

  const getSlotForIndex = (index) => {
    const sideMatch = SIDE_CARDS.find((s) => s.index === index);
    return sideMatch ? sideMatch.slotName : "center";
  };

  const handlePrev = () => {
    const newIdx = selectedIndex === null ? 0 : mod(selectedIndex - 1, TOTAL);
    setSelectedIndex(newIdx);
    setAnimatingSlot(getSlotForIndex(newIdx));
  };

  const handleNext = () => {
    const newIdx = selectedIndex === null ? 0 : mod(selectedIndex + 1, TOTAL);
    setSelectedIndex(newIdx);
    setAnimatingSlot(getSlotForIndex(newIdx));
  };

  const centerAnimClass = animatingSlot
    ? `tm-card-center--from-${animatingSlot}`
    : isInitialEntrance
      ? "tm-card-center--from-center"
      : "";

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <div className="hero-section parallax-section" ref={heroSectionRef}>
        <div className="parallax-bg hero-parallax-bg" ref={heroBgRef} />
        <div className="parallax-content" ref={heroContentRef}>
          <div 
            className="hero-carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Side Navigation Arrows (Left & Right) */}
            <button
              className="hero-nav-arrow prev-arrow"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
              }}
              aria-label="Previous slide"
              title="Previous slide"
            >
              &#8249;
            </button>

            <button
              className="hero-nav-arrow next-arrow"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
              }}
              aria-label="Next slide"
              title="Next slide"
            >
              &#8250;
            </button>

            {/* Single Unified Hero Container */}
            <div 
              key={currentSlide} 
              className={`hero-unified-card animate-entrance ${HERO_SLIDES[currentSlide].themeClass}`}
              style={{ '--accent-theme': HERO_SLIDES[currentSlide].accentColor }}
            >
              <div className="card-ambient-glow" style={{ background: HERO_SLIDES[currentSlide].gradient }} />

              <div className={`hero-slide-grid layout-${HERO_SLIDES[currentSlide].videoPosition}`}>
                {/* Column 1 (Left) */}
                <div className="hero-grid-col col-left">
                  {HERO_SLIDES[currentSlide].videoPosition === 'right' ? (
                    <div className="hero-text-pane">
                      <div className="hero-badge">
                        <span className="badge-dot" style={{ backgroundColor: HERO_SLIDES[currentSlide].accentColor }} />
                        {HERO_SLIDES[currentSlide].badge}
                      </div>

                      <h1 className="hero-headline">
                        {HERO_SLIDES[currentSlide].headline}
                      </h1>

                      <p className="hero-subheadline">
                        {HERO_SLIDES[currentSlide].subheadline}
                      </p>

                      <div className="hero-highlights">
                        {HERO_SLIDES[currentSlide].highlights}
                      </div>

                      <div className="hero-actions">
                        <a href={HERO_SLIDES[currentSlide].ctaLink} className="hero-cta-btn primary-btn">
                          {HERO_SLIDES[currentSlide].ctaText}
                        </a>
                        {HERO_SLIDES[currentSlide].secondaryCtaText && (
                          <a href={HERO_SLIDES[currentSlide].secondaryCtaLink} className="hero-cta-btn secondary-btn">
                            {HERO_SLIDES[currentSlide].secondaryCtaText}
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="hero-video-pane">
                      <div className="video-card-inner">
                        <video
                          key={HERO_SLIDES[currentSlide].video}
                          src={HERO_SLIDES[currentSlide].video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="hero-slide-video"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Column 2 (Right) */}
                <div className="hero-grid-col col-right">
                  {HERO_SLIDES[currentSlide].videoPosition === 'right' ? (
                    <div className="hero-video-pane">
                      <div className="video-card-inner">
                        <video
                          key={HERO_SLIDES[currentSlide].video}
                          src={HERO_SLIDES[currentSlide].video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="hero-slide-video"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="hero-text-pane">
                      <div className="hero-badge">
                        <span className="badge-dot" style={{ backgroundColor: HERO_SLIDES[currentSlide].accentColor }} />
                        {HERO_SLIDES[currentSlide].badge}
                      </div>

                      <h1 className="hero-headline">
                        {HERO_SLIDES[currentSlide].headline}
                      </h1>

                      <p className="hero-subheadline">
                        {HERO_SLIDES[currentSlide].subheadline}
                      </p>

                      <div className="hero-highlights">
                        {HERO_SLIDES[currentSlide].highlights}
                      </div>

                      <div className="hero-actions">
                        <a href={HERO_SLIDES[currentSlide].ctaLink} className="hero-cta-btn primary-btn">
                          {HERO_SLIDES[currentSlide].ctaText}
                        </a>
                        {HERO_SLIDES[currentSlide].secondaryCtaText && (
                          <a href={HERO_SLIDES[currentSlide].secondaryCtaLink} className="hero-cta-btn secondary-btn">
                            {HERO_SLIDES[currentSlide].secondaryCtaText}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Capabilities Section */}
      <section className="capabilities-section parallax-section" ref={capabilitiesSectionRef}>
        <div className="cap-header">
          <h2 className="cap-title" data-aos="fade-up" data-aos-duration="1000">Our Core Capabilities</h2>
          <p className="cap-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Product Engineering */}
          <div
            className="bento-card accent-gold parallax-layer"
            ref={el => capCardsRef.current[0] = el}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={codeIcon} alt="Product Engineering" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">PRODUCT ENGINEERING</h3>
              <p className="cap-card-desc">
                Full-stack development with modern frameworks, scalable architectures, and best practices for web and mobile applications.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">Custom Software</span>
                <span className="cap-feature-tag">API Integration</span>
                <span className="cap-feature-tag">Legacy Modernization</span>
              </div>
            </div>
          </div>

          {/* Card 2: Data & AI */}
          <div
            className="bento-card accent-slate parallax-layer"
            ref={el => capCardsRef.current[1] = el}
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={aimlIcon} alt="Data & AI" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">DATA & AI</h3>
              <p className="cap-card-desc">
                Advanced analytics, machine learning, and AI-powered solutions to unlock insights from your data.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">Predictive Analytics</span>
                <span className="cap-feature-tag">NLP & Custom LLMs</span>
                <span className="cap-feature-tag">Data Warehousing</span>
                <span className="cap-feature-tag">BI Dashboards</span>
                <span className="cap-feature-tag">Machine Learning</span>
              </div>
            </div>
          </div>

          {/* Card 3: Intelligent Automation */}
          <div
            className="bento-card accent-bronze parallax-layer"
            ref={el => capCardsRef.current[2] = el}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={automationIcon} alt="Intelligent Automation" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">INTELLIGENT AUTOMATION</h3>
              <p className="cap-card-desc">
                RPA, process mining, and AI-driven automation to streamline operations and boost efficiency.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">Workflow Automation</span>
                <span className="cap-feature-tag">RPA Systems</span>
                <span className="cap-feature-tag">Document AI</span>
              </div>
            </div>
          </div>

          {/* Card 4: Cloud Services */}
          <div
            className="bento-card accent-gold parallax-layer"
            ref={el => capCardsRef.current[3] = el}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={cloudIcon} alt="Cloud Services" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">CLOUD SERVICES</h3>
              <p className="cap-card-desc">
                Multi-cloud expertise across AWS, Azure, and GCP for scalable, secure, and cost-effective solutions.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">Cloud Migration</span>
                <span className="cap-feature-tag">DevOps & CI/CD</span>
                <span className="cap-feature-tag">Serverless Solutions</span>
              </div>
            </div>
          </div>

          {/* Card 5: Cybersecurity */}
          <div
            className="bento-card accent-slate parallax-layer"
            ref={el => capCardsRef.current[4] = el}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={securityIcon} alt="Cybersecurity" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">CYBERSECURITY</h3>
              <p className="cap-card-desc">
                Comprehensive security solutions to protect your digital assets and ensure compliance.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">Threat Monitoring</span>
                <span className="cap-feature-tag">Pen Testing</span>
                <span className="cap-feature-tag">Compliance Audits</span>
              </div>
            </div>
          </div>

          {/* Card 6: Digital Transformation */}
          <div
            className="bento-card accent-bronze parallax-layer"
            ref={el => capCardsRef.current[5] = el}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="cap-icon-box">
              <img src={transformIcon} alt="Digital Transformation" className="cap-icon-image" />
            </div>
            <div className="cap-card-content">
              <h3 className="cap-card-title">DIGITAL TRANSFORMATION</h3>
              <p className="cap-card-desc">
                End-to-end digital transformation strategies to modernize your business processes.
              </p>
              <div className="cap-features-container">
                <span className="cap-feature-tag">CX Strategy</span>
                <span className="cap-feature-tag">Modernization Roadmaps</span>
                <span className="cap-feature-tag">IT Consulting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Artlysoft Section ── */}
      <section className="about-section parallax-section" ref={aboutSectionRef}>
        <div className="about-card-wrapper" data-aos="fade-up" data-aos-duration="1000">
          <div className="about-card">
            <h2 className="about-card-title">About Artlysoft Private Limited</h2>
            <p className="about-card-text">
              Artlysoft Private Limited is a fast-growing IT company based in Karnataka, Tamil Nadu.
              We provide complete technology solutions — from web and cloud development to AI automation
              and IT consulting. Our goal is to help organizations grow through innovative and reliable
              digital transformation.
            </p>

            {/* Animated arrow button — href to be updated */}
            <div className="about-btn-wrapper">
              {/* Top-Left curved arrow (points ↘ toward button) */}
              <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: aboutArrowTlSvg }} />

              {/* Top-Right curved arrow (points ↙ toward button) */}
              <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: aboutArrowTrSvg }} />

              <a href="#/about" className="about-read-btn" id="about-read-more-btn">
                Read more about us
              </a>

              {/* Bottom-Left curved arrow (points ↗ toward button) */}
              <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: aboutArrowBlSvg }} />

              {/* Bottom-Right curved arrow (points ↖ toward button) */}
              <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: aboutArrowBrSvg }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Artlysoft Section ── */}
      <section className="why-section parallax-section" ref={whySectionRef}>
        {/* Photo parallax background */}
        <div
          className="par-bg why-par-bg"
          ref={par1BgRef}
          style={{ backgroundImage: `url(${par1Img})` }}
        />
        {/* Existing watermark parallax layer (unchanged) */}
        <div className="parallax-bg why-parallax-bg" ref={whyBgRef}>
          <div className="why-watermark-text">ARTLYSOFT</div>
        </div>
        <div className="why-header">
          <h2 className="why-title" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE ARTLYSOFT?</h2>
          <p className="why-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            We combine deep technical expertise with industry knowledge to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="why-content-grid">
          {/* Left Column: Key Features List */}
          <div className="why-left-col">
            {[
              "1+ years of industry experience across multiple domains",
              "Agile development methodology with rapid delivery cycles",
              "24/7 support and maintenance for all deployed solutions",
              "Certified experts in leading cloud platforms and technologies",
              "Proven track record with 200+ successful project deliveries",
              "Cost-effective solutions with transparent pricing models"
            ].map((text, idx) => (
              <div
                key={idx}
                className="why-list-card"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                data-aos-duration="1000"
              >
                <FiCheckCircle className="why-list-icon" />
                <span className="why-list-text">{text}</span>
              </div>
            ))}
          </div>

          {/* Right Column: 2x2 Stats Bento Grid */}
          <div className="why-right-col">
            <div className="why-stats-grid">
              {/* Stat 1: Satisfied Clients */}
              <div
                className="why-stat-card accent-gold"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
              >
                <div className="why-stat-icon-box">
                  <img src={handshakeIcon} alt="Satisfied Clients" className="why-stat-icon" />
                </div>
                <div className="why-stat-number">
                  <RunningNumber value="50+" />
                </div>
                <div className="why-stat-label">Satisfied Clients</div>
              </div>

              {/* Stat 2: Projects Completed */}
              <div
                className="why-stat-card accent-slate"
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <div className="why-stat-icon-box">
                  <img src={codeIcon} alt="Projects Completed" className="why-stat-icon" />
                </div>
                <div className="why-stat-number">
                  <RunningNumber value="200+" />
                </div>
                <div className="why-stat-label">Projects Completed</div>
              </div>

              {/* Stat 3: Years of Excellence */}
              <div
                className="why-stat-card accent-bronze"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="why-stat-icon-box">
                  <img src={automationIcon} alt="Years of Excellence" className="why-stat-icon" />
                </div>
                <div className="why-stat-number">
                  <RunningNumber value="1.5+" />
                </div>
                <div className="why-stat-label">Years of Excellence</div>
              </div>

              {/* Stat 4: Expert Team Members */}
              <div
                className="why-stat-card accent-slate"
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-duration="1000"
              >
                <div className="why-stat-icon-box">
                  <img src={teamIcon} alt="Expert Team Members" className="why-stat-icon" />
                </div>
                <div className="why-stat-number">
                  <RunningNumber value="50+" />
                </div>
                <div className="why-stat-label">Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Creative Lab Section ── */}
      <section className="creative-lab-section" aria-label="Creative Lab">
        <div className="creative-lab-container">

          {/* Header */}
          <div className="creative-lab-header" data-aos="fade-up">
            <span className="creative-lab-subheading">Crafted with Intent</span>
            <h2 className="creative-lab-heading">Creative Lab</h2>
            <p className="creative-lab-para">
              A glance into our product design process, brand design sprints, and motion concepts.
            </p>
          </div>

          {/* 4 Video Cards */}
          <div className="creative-lab-grid">
            {CREATIVE_LAB_CARDS.map((card, idx) => (
              <CreativeLabCard
                key={card.id}
                card={card}
                idx={idx}
                onOpenModal={(selectedCard) => setSelectedCreativeVideo(selectedCard)}
              />
            ))}
          </div>

          {/* Pop-Out Video Modal */}
          {selectedCreativeVideo && (
            <CreativeLabVideoModal
              card={selectedCreativeVideo}
              onClose={() => setSelectedCreativeVideo(null)}
            />
          )}

          {/* View More Designs CTA Button */}
          <div className="creative-lab-cta" data-aos="fade-up" data-aos-delay="200">
            <a
              href="https://www.instagram.com/artlysoftstudio?stkn=c3Vpem45dGJkY3Bj"
              target="_blank"
              rel="noopener noreferrer"
              className="creative-lab-btn"
            >
              <span>View more designs</span>
              <FiArrowUpRight className="creative-lab-btn-icon" size={20} />
            </a>
          </div>

        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="tm-section parallax-section" ref={testimonialsSectionRef} aria-label="Customer Testimonials">


        {/* Luxury Ambient Glows */}
        <div className="tm-bg-glow tm-bg-glow--top" aria-hidden="true" />
        <div className="tm-bg-glow tm-bg-glow--center" aria-hidden="true" />
        <div className="tm-noise" aria-hidden="true" />

        {/* Header */}
        <header className={`tm-header ${isInitialEntrance ? "tm-header--entrance" : ""}`}>
          <h2 className="tm-header__title">What our Clients Say</h2>
          <p className="tm-header__subtitle">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </header>

        {/* Main Carousel Arena */}
        <div className="tm-stage" ref={testimonialStageRef} aria-live="polite">
          <div className="tm-stage__inner">

            {/* ─── CENTER LARGE CARD ─── */}
            <div
              className={`tm-slot tm-slot--center ${isInitialEntrance ? "tm-slot--entrance-center" : ""}`}
              style={{
                transform: `translate3d(0px, 0px, 0)`,
                zIndex: 10,
                opacity: 1,
              }}
            >
              <div
                className={`tm-card-center ${centerAnimClass}`}
                key={activeTestimonial ? `center-${activeTestimonial.id}-${animatingSlot || "def"}` : `center-default-${animatingSlot || "def"}`}
              >
                {/* Moving Neon Beam Layers */}
                <div className="tm-border-beam-outer" aria-hidden="true" />
                <div className="tm-border-beam" aria-hidden="true" />

                {/* Corner Brackets */}
                <span className="tm-corner tm-corner--tl" />
                <span className="tm-corner tm-corner--tr" />
                <span className="tm-corner tm-corner--bl" />
                <span className="tm-corner tm-corner--br" />

                {/* Top-Left Quote Icon & Bottom-Right Indicator */}
                <div className="tm-center-quote-icon">&ldquo;&ldquo;</div>
                <div className="tm-center-review-counter">
                  REVIEW {activeTestimonial ? String(activeTestimonial.id).padStart(2, "0") : "01"}
                </div>

                {/* Centered Content */}
                {activeTestimonial ? (
                  <div className="tm-center-body" key={`review-${activeTestimonial.id}`}>
                    <Stars count={activeTestimonial.rating} />
                    <h3 className="tm-center-title">{activeTestimonial.name}&rsquo;s Review</h3>
                    <p className="tm-center-text">&ldquo;{activeTestimonial.text}&rdquo;</p>
                    <div className="tm-center-name">{activeTestimonial.fullName}</div>
                    <div className="tm-center-badge">
                      <span className="tm-badge-check">&#10003;</span>
                      <span>5.0 &nbsp;&bull;&nbsp; Verified customer</span>
                    </div>
                  </div>
                ) : (
                  <div className="tm-center-body" key="default-view">
                    <Stars count={5} />
                    <h3 className="tm-center-title tm-center-title--default">
                      What our <span className="tm-title-italic">customers</span> say
                    </h3>
                    <p className="tm-center-text tm-center-text--sub">
                      Click Emily, Sarah, Lauren or James to discover their experience with us.
                    </p>
                    <div className="tm-center-tagline">1000+ HAPPY CUSTOMERS</div>
                    <div className="tm-center-badge">
                      <span className="tm-badge-check">&#10003;</span>
                      <span>Verified customer experiences</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ─── 4 SIDE VERTICAL NAME CARDS ─── */}
            {SIDE_CARDS.map((side, idx) => {
              const item = TESTIMONIALS[side.index];
              const slotPos = SLOTS[side.slotName];
              const isHovered = hoveredIndex === side.index;
              const isSelected = selectedIndex === side.index;

              const entranceClass = isInitialEntrance ? `tm-slot--entrance-${idx + 1}` : "";

              const wrapperStyle = {
                transform: `translate3d(${slotPos.translateX}px, ${slotPos.translateY}px, 0)`,
                zIndex: isHovered || isSelected ? 8 : slotPos.zIndex,
                opacity: slotPos.opacity,
              };

              return (
                <div
                  key={item.id}
                  className={`tm-slot tm-slot--${side.slotName} ${entranceClass}`}
                  style={wrapperStyle}
                  onMouseEnter={() => setHoveredIndex(side.index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(side.index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                  onClick={() => handleSelectCard(side.index, side.slotName)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectCard(side.index, side.slotName);
                    }
                  }}
                >
                  <div
                    className={`tm-card-side ${isHovered ? "tm-card-side--hovered" : ""} ${isSelected ? "tm-card-side--active" : ""
                      }`}
                  >
                    {/* Continuous Moving Neon Glow Beam for Side Boxes */}
                    <div className="tm-side-beam" aria-hidden="true" />
                    <div className="tm-side-beam-glow" aria-hidden="true" />

                    <div className="tm-side-content">
                      <span className="tm-side-name">{item.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA & Controls */}
        <div className="tm-footer">
          <div className="tm-see-all-btn" aria-label="Customer review navigation">
            <span
              className="tm-see-all-arrow tm-arrow-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              title="Previous review"
              aria-label="Previous review"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePrev();
                }
              }}
            >
              &#8601;
            </span>
            <span
              className="tm-see-all-text"
              onClick={() => {
                if (selectedIndex === null) handleSelectCard(0, "top-left");
                else handleNext();
              }}
              role="button"
              tabIndex={0}
            >
              See all reviews from our customers
            </span>
            <span
              className="tm-see-all-arrow tm-arrow-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              title="Next review"
              aria-label="Next review"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNext();
                }
              }}
            >
              &#8599;
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
