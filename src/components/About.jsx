import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaRocket, FaBuilding, FaGlobeAmericas, FaAward, FaCheckCircle } from 'react-icons/fa';
import '../assets/style/About.css';
import heroVideo from '../assets/videos/Hero Pages/Logo.mp4';
import missionTargetSvg from '../assets/gifs/mission_target.svg?raw';
import visionEyeSvg from '../assets/gifs/vision_eye.svg?raw';
import valueBulbSvg from '../assets/gifs/value_bulb.svg?raw';
import valueShieldSvg from '../assets/gifs/value_shield.svg?raw';
import valueHandshakeSvg from '../assets/gifs/value_handshake.svg?raw';
import teamCollabSvg from '../assets/gifs/team_collab.svg?raw';

import imgAnand from '../assets/images/Team/Anand.jpg';
import imgArun from '../assets/images/Team/Arun.jpg';
import imgBharani from '../assets/images/Team/Bharani.jpg';
import imgAbisheik from '../assets/images/Team/Abisheik.jpg';
import imgAjith from '../assets/images/Team/Ajith.png';
import imgPreethi from '../assets/images/Team/Preethi.png';
import imgTamil from '../assets/images/Team/Tamil.jpg';
import imgHemaMalini from '../assets/images/Team/HemaMalini Sakthivel.jpg';
import imgKamali from '../assets/images/Team/Kamali D S.jpeg';
import imgDineshkumar from '../assets/images/Team/Dineshkumar Baskaran.jpeg';
import imgMohanapriya from '../assets/images/Team/Mohanapriya R.jpg';
import imgShobha from '../assets/images/Team/Shobha S.jpeg';

// Candidate Images
import candAravind from '../assets/images/Candidates/Aravind Kumar R.jpg';
import candCharan from '../assets/images/Candidates/Charan Balaji.jpeg';
import candGopika from '../assets/images/Candidates/Gopika V.jpeg';
import candJeyapriya from '../assets/images/Candidates/Jeyapriya R.jpg';
import candJothibrintha from '../assets/images/Candidates/Jothibrintha Manjunathan.jpeg';
import candKarthi from '../assets/images/Candidates/Karthi V.jpg';
import candPoornima from '../assets/images/Candidates/Poornima S.png';
import candPrasanna from '../assets/images/Candidates/Prasanna Kumar J.jpeg';
import candPrem from '../assets/images/Candidates/Prem Kumar S.jpeg';
import candSindhuja from '../assets/images/Candidates/Sindhuja Murugesan.jpg';
import candUdhayakumar from '../assets/images/Candidates/Udhayakumar S.jpeg';
import candVignesh from '../assets/images/Candidates/vignesh c.jpeg';

gsap.registerPlugin(ScrollTrigger);

const CANDIDATES = [
  { id: 1, name: "Aravind Kumar R", img: candAravind },
  { id: 2, name: "Charan Balaji", img: candCharan },
  { id: 3, name: "Gopika V", img: candGopika },
  { id: 4, name: "Jeyapriya R", img: candJeyapriya },
  { id: 5, name: "Jothibrintha Manjunathan", img: candJothibrintha },
  { id: 6, name: "Karthi V", img: candKarthi },
  { id: 7, name: "Poornima S", img: candPoornima },
  { id: 8, name: "Prasanna Kumar J", img: candPrasanna },
  { id: 9, name: "Prem Kumar S", img: candPrem },
  { id: 10, name: "Sindhuja Murugesan", img: candSindhuja },
  { id: 11, name: "Udhayakumar S", img: candUdhayakumar },
  { id: 12, name: "Vignesh C", img: candVignesh },
];

const TEAM = [
  {
    name: "Anand T",
    role: "Director",
    img: imgAnand,
    insta: "https://www.instagram.com/artly_soft?stkn=ODhtdDk2cWtmbndn",
    whatsapp: "https://wa.me/message/J6EL6M6BJSWIF1",
  },
  {
    name: "Arun T",
    role: "Director",
    img: imgArun,
  },
  {
    name: "Bharani B",
    role: "Business Analyst",
    img: imgBharani,
    linkedin: "https://www.linkedin.com/in/bharani-shankar-b-8101b3228?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Abisheik V",
    role: "Front End Developer",
    img: imgAbisheik,
    linkedin: "https://www.linkedin.com/in/abisheik-kumar-v-8a4202257/",
    github: "https://github.com/Abisheik-V",
  },
  {
    name: "Ajith M",
    role: "Web Developer",
    img: imgAjith,
    linkedin: "https://www.linkedin.com/in/ajith-m-044823418/",
    github: "https://github.com/ajith17123",
  },
  {
    name: "Preethika C",
    role: "Web Developer",
    img: imgPreethi,
    linkedin: "https://www.linkedin.com/in/preethikachackravarthy",
    github: "https://github.com/sudhapreethika76-eng",
  },
  {
    name: "TamilMozhi S",
    role: "Web Developer",
    img: imgTamil,
    linkedin: "https://www.linkedin.com/in/tamilmozhi-s",
    github: "https://github.com/Tamilmozhi2003",
  },
  {
    name: "HemaMalini Sakthivel",
    role: "Web Developer",
    img: imgHemaMalini,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Kamali D S",
    role: "Web Developer",
    img: imgKamali,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Dineshkumar Baskaran",
    role: "Web Developer",
    img: imgDineshkumar,
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  {
    name: "Mohanapriya R",
    role: "Web Developer",
    img: imgMohanapriya,
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shobha S",
    role: "Web Developer",
    img: imgShobha,
    linkedin: "https://www.linkedin.com/",
  },
];

const PAD = (n) => String(n + 1).padStart(2, "0");
const WHEEL_COOLDOWN = 550;
const DRAG_THRESHOLD = 70;

const About = () => {
  const valuesSectionRef = useRef(null);
  const valueCardsRef = useRef([]);

  // Carousel state
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedSocialIndex, setSelectedSocialIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 640);

  // Candidate Showcase Carousel State
  const [candIndex, setCandIndex] = useState(0);
  const [isCandHovered, setIsCandHovered] = useState(false);

  const candCount = CANDIDATES.length;

  const nextCandidate = useCallback(() => {
    setCandIndex((prev) => (prev + 1) % candCount);
  }, [candCount]);

  const prevCandidate = useCallback(() => {
    setCandIndex((prev) => (prev - 1 + candCount) % candCount);
  }, [candCount]);

  useEffect(() => {
    if (isCandHovered) return;
    const timer = setInterval(() => {
      nextCandidate();
    }, 2000);
    return () => clearInterval(timer);
  }, [nextCandidate, isCandHovered]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stageRef = useRef(null);
  const wheelLock = useRef(false);
  const pointerStart = useRef(null);
  const lastDragX = useRef(0);

  const count = TEAM.length;

  const goTo = useCallback(
    (i) => {
      const nextIdx = ((i % count) + count) % count;
      setIndex(nextIdx);
      setSelectedSocialIndex(null);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const activePersonIndex =
    hoveredIndex !== null
      ? hoveredIndex
      : selectedSocialIndex !== null
      ? selectedSocialIndex
      : index;

  const showSocialBar =
    isHovered || hoveredIndex !== null || selectedSocialIndex !== null;

  // Auto-scroll navigation with pause on hover/drag/social active
  useEffect(() => {
    if (isHovered || isDragging || hoveredIndex !== null || selectedSocialIndex !== null) return;
    const interval = setInterval(() => {
      next();
    }, 1800);
    return () => clearInterval(interval);
  }, [next, isHovered, isDragging, hoveredIndex, selectedSocialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Pointer / drag / swipe support
  const onPointerDown = (e) => {
    pointerStart.current = e.clientX;
    lastDragX.current = 0;
  };

  const onPointerMove = (e) => {
    if (pointerStart.current === null) return;
    const delta = e.clientX - pointerStart.current;
    lastDragX.current = delta;
    if (Math.abs(delta) > 6) {
      if (!isDragging) setIsDragging(true);
      setDragX(delta);
    }
  };

  const endDrag = () => {
    if (pointerStart.current === null) return;
    const delta = lastDragX.current;
    if (delta <= -DRAG_THRESHOLD) next();
    else if (delta >= DRAG_THRESHOLD) prev();
    pointerStart.current = null;
    lastDragX.current = 0;
    setDragX(0);
    setIsDragging(false);
  };

  const dragNudge = isDragging ? dragX * 0.28 : 0;

  // Scroll handling: reset top or scroll to #our-team if hash present
  useEffect(() => {
    const handleScrollTarget = () => {
      if (window.location.hash.includes('our-team')) {
        setTimeout(() => {
          const teamEl = document.getElementById('our-team');
          if (teamEl) {
            teamEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    handleScrollTarget();
    window.addEventListener('hashchange', handleScrollTarget);
    return () => window.removeEventListener('hashchange', handleScrollTarget);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      if (valuesSectionRef.current) {
        const speeds = [-30, -60, -40, -50];
        valueCardsRef.current.forEach((card, idx) => {
          if (!card) return;
          gsap.fromTo(card,
            { y: 0 },
            {
              y: speeds[idx % speeds.length],
              ease: 'none',
              scrollTrigger: {
                trigger: valuesSectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
    <section className="about-hero-section">
      <div className="about-hero-card" data-aos="fade-up" data-aos-duration="1000">
        <div className="about-hero-content">
          <div className="about-hero-badge">
            <span className="about-hero-badge-dot"></span>
            About Artlysoft
          </div>
          <h1 className="about-hero-title">
            Driving Innovation &amp; Digital Growth
          </h1>
          <p className="about-hero-desc">
            Artlysoft is an IT services company providing innovative, customized digital solutions. We focus on simple, reliable technology solutions, quality engineering, and building long-term client relationships.
          </p>
        </div>
        <div className="about-hero-video-wrapper">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="about-hero-video"
          />
        </div>
      </div>
    </section>

    <section className="about-vision-mission-section">
      <div className="about-section-container">
        {/* Section Header */}
        <header className="about-section-header">
          <div className="about-eyebrow-pill">
            <span className="eyebrow-glow-dot"></span>
            Purpose & Direction
          </div>
          <h2 className="about-main-headline">
            Driven by Purpose, Powered by Innovation
          </h2>
          <p className="about-section-subtitle">
            Guiding organizations toward sustainable digital excellence through intelligent technology and modern engineering.
          </p>
        </header>

        {/* Two-Column Grid */}
        <div className="about-mission-vision-grid">
          {/* Card 1: Our Mission */}
          <article className="mv-card mission-card">
            <div className="card-top-glow" />
            
            <header className="mv-card-header">
              <div 
                className="mv-icon-container mission-icon-container"
                dangerouslySetInnerHTML={{ __html: missionTargetSvg }}
              />
              <div className="mv-card-titles">
                <h3 className="mv-card-title">Our Mission</h3>
                <p className="mv-card-tagline">Engineering Impact Through Intelligent Tech</p>
              </div>
            </header>

            <div className="mv-card-body">
              <p className="mv-card-desc">
                Deliver end-to-end digital solutions—from cloud systems to AI automation—that drive measurable ROI, enhance operational efficiency, and accelerate time-to-market.
              </p>
              
              <ul className="mv-focus-list">
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Agile Engineering:</strong> High-performance, scalable full-stack web and platform development.
                  </div>
                </li>
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Applied AI:</strong> Practical automation and data-driven intelligence for real business workflows.
                  </div>
                </li>
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Cloud Resilience:</strong> Secure, cost-optimized multi-cloud architecture across AWS, Azure, and GCP.
                  </div>
                </li>
              </ul>
            </div>
          </article>

          {/* Card 2: Our Vision */}
          <article className="mv-card vision-card">
            <div className="card-top-glow" />

            <header className="mv-card-header">
              <div 
                className="mv-icon-container vision-icon-container"
                dangerouslySetInnerHTML={{ __html: visionEyeSvg }}
              />
              <div className="mv-card-titles">
                <h3 className="mv-card-title">Our Vision</h3>
                <p className="mv-card-tagline">Shaping the Next Era of Digital Innovation</p>
              </div>
            </header>

            <div className="mv-card-body">
              <p className="mv-card-desc">
                Establish a global benchmark for modern software development where businesses of every scale leverage intelligent platforms and scalable architectures effortlessly.
              </p>
              
              <ul className="mv-focus-list">
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Global Standards:</strong> Client-first delivery adhering to high enterprise quality benchmarks.
                  </div>
                </li>
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Continuous Innovation:</strong> Pioneering breakthroughs in generative AI, microservices, and automation.
                  </div>
                </li>
                <li className="mv-focus-item">
                  <span className="mv-bullet-marker"></span>
                  <div>
                    <strong>Sustainable Growth:</strong> Future-proof digital foundations designed to scale seamlessly over time.
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* Our Core Values Section */}
    <section className="about-values-section parallax-section" ref={valuesSectionRef}>
      <div className="about-values-container">
        {/* Section Header */}
        <header className="about-values-header">
          <h2 className="about-values-title" data-aos="fade-up" data-aos-duration="1000">
            OUR CORE VALUES
          </h2>
          <p className="about-values-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            These fundamental principles guide everything we do and shape our company culture
          </p>
        </header>

        {/* Grid Layout */}
        <div className="about-values-grid">
          {/* Card 1: Innovation & Integrity */}
          <div 
            className="about-value-card accent-gold parallax-layer"
            ref={el => valueCardsRef.current[0] = el}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div 
              className="value-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: valueBulbSvg }}
            />
            <h3 className="value-title">INNOVATION & INTEGRITY</h3>
            <p className="value-description">
              We embrace cutting-edge technologies and creative solutions while maintaining transparency, honesty, and ethical practices in all our business dealings.
            </p>
          </div>

          {/* Card 2: Commitment to Quality */}
          <div 
            className="about-value-card accent-slate parallax-layer"
            ref={el => valueCardsRef.current[1] = el}
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <div 
              className="value-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: valueShieldSvg }}
            />
            <h3 className="value-title">COMMITMENT TO QUALITY</h3>
            <p className="value-description">
              We maintain the highest standards in everything we do, from code quality to client service.
            </p>
          </div>

          {/* Card 3: Customer-Centric Approach */}
          <div 
            className="about-value-card accent-bronze parallax-layer"
            ref={el => valueCardsRef.current[2] = el}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div 
              className="value-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: valueHandshakeSvg }}
            />
            <h3 className="value-title">CUSTOMER-CENTRIC APPROACH</h3>
            <p className="value-description">
              We build long-term relationships with our clients, acting as trusted technology partners focused on their success.
            </p>
          </div>

          {/* Card 4: Team Collaboration */}
          <div 
            className="about-value-card accent-gold parallax-layer"
            ref={el => valueCardsRef.current[3] = el}
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
          >
            <div 
              className="value-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: teamCollabSvg }}
            />
            <h3 className="value-title">TEAM COLLABORATION</h3>
            <p className="value-description">
              We faster a collaborative environment where teamwork and shared knowledge drive exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Team Section */}
    <section className="about-team-section" id="our-team">
      <div className="about-team-container">
        <header className="about-team-header">
          <h2 className="about-team-title" data-aos="fade-up">Our Team</h2>
          <p className="about-team-subtitle" data-aos="fade-up" data-aos-delay="100">
            Meet the people behind our success
          </p>
          <p className="about-team-sub2" data-aos="fade-up" data-aos-delay="200">
            A passionate team of builders, thinkers, and innovators.
          </p>
        </header>

        <div
          className={`team-carousel-stage${isDragging ? " is-dragging" : ""}`}
          ref={stageRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={() => {
            endDrag();
            setIsHovered(false);
            setHoveredIndex(null);
          }}
          onPointerCancel={endDrag}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredIndex(null);
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Team members"
          tabIndex={0}
        >
          <div className="team-carousel-track">
            {TEAM.map((person, i) => {
              let offset = i - index;
              if (offset > count / 2) offset -= count;
              if (offset < -count / 2) offset += count;

              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const hidden = absOffset > 3;

              const cardSpacing = isMobile ? 120 : 232;
              const translateX = offset * cardSpacing + dragNudge;
              const rotateY = Math.max(-26, Math.min(26, offset * -22));
              const translateZ = -absOffset * 120;
              const scale = isActive ? 1.05 : 0.82;
              const opacity = isActive
                ? 1
                : Math.max(0.45, 0.92 - absOffset * 0.15);

              const style = {
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: isActive ? 10 : 5 - absOffset,
                opacity: hidden ? 0 : opacity,
                pointerEvents: hidden ? "none" : "auto",
              };

              return (
                <button
                  type="button"
                  key={person.name}
                  className={`team-card${isActive ? " is-active" : ""}`}
                  style={style}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (Math.abs(lastDragX.current) > 10) return;
                    if (!isActive) {
                      goTo(i);
                    }
                    setSelectedSocialIndex((prev) => (prev === i ? null : i));
                  }}
                  aria-current={isActive}
                  aria-label={`${person.name}, ${person.role}`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className="team-card__frame">
                    <img
                      className="team-card__img"
                      src={person.img}
                      alt={person.name}
                      draggable={false}
                    />
                    <span className="team-card__shade" />

                    <span className="team-card__info">
                      <span className="team-card__name">{person.name}</span>
                      <span className="team-card__role">{person.role}</span>
                    </span>
                  </span>

                  {/* Social Icons attached to Card Bottom (Yellow Box Area) */}
                  {(person.linkedin || person.github || person.insta || person.whatsapp) &&
                    (hoveredIndex === i || (isActive && (isHovered || selectedSocialIndex === i))) && (
                      <span className="team-card-socials-bar">
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-ext-icon-btn"
                            aria-label={`${person.name}'s LinkedIn`}
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            <FaLinkedinIn size={16} />
                          </a>
                        )}
                        {person.github && (
                          <a
                            href={person.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-ext-icon-btn"
                            aria-label={`${person.name}'s GitHub`}
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                        {person.insta && (
                          <a
                            href={person.insta}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-ext-icon-btn"
                            aria-label={`${person.name}'s Instagram`}
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            <FaInstagram size={16} />
                          </a>
                        )}
                        {person.whatsapp && (
                          <a
                            href={person.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-ext-icon-btn"
                            aria-label={`${person.name}'s WhatsApp`}
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                          >
                            <FaWhatsapp size={16} />
                          </a>
                        )}
                      </span>
                    )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Meet Our Candidates Section */}
    <section className="about-candidates-section" id="our-candidates">
      <div className="about-candidates-container">
        {/* Section Header */}
        <header className="about-candidates-header">
          <div className="candidates-eyebrow-pill" data-aos="fade-up">
            <span className="candidates-glow-dot"></span>
            Talent Showcase
          </div>
          <h2 className="candidates-main-title" data-aos="fade-up" data-aos-delay="100">
            MEET OUR CANDIDATES
          </h2>
          <p className="candidates-section-subtitle" data-aos="fade-up" data-aos-delay="150">
            Promising tech professionals trained and empowered to drive enterprise digital transformation.
          </p>
        </header>

        {/* Candidate 3x3 Grid Showcase (9 Cards, Row 2 Col 2 Center Active) */}
        <div 
          className="candidates-grid-stage"
          onMouseEnter={() => setIsCandHovered(true)}
          onMouseLeave={() => setIsCandHovered(false)}
        >
          <div className="candidates-grid-container">
            {Array.from({ length: 9 }).map((_, slotIdx) => {
              const candIndexForSlot = (candIndex + slotIdx) % candCount;
              const cand = CANDIDATES[candIndexForSlot];
              const isCenter = slotIdx === 4; // Row 2, Col 2 (Middle slot)

              return (
                <div
                  key={`slot-${slotIdx}-${cand.id}`}
                  className={`candidate-grid-card ${isCenter ? 'is-center active' : ''}`}
                >
                  <div className="candidate-card-inner">
                    <div className="candidate-img-wrapper">
                      <img src={cand.img} alt={cand.name} loading="lazy" />
                      <div className="candidate-img-overlay" />
                    </div>
                    <div className="candidate-info-box">
                      <h3 className="candidate-name">{cand.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="about-story-section" id="our-story">
      <div className="about-story-container">
        {/* Section Header */}
        <header className="about-story-header">
          <div className="story-eyebrow-pill" data-aos="fade-up">
            <span className="story-glow-dot"></span>
            Our Evolution & Journey
          </div>
          <h2 className="story-main-title" data-aos="fade-up" data-aos-delay="100">
            OUR STORY
          </h2>
          
        </header>

        {/* Story Timeline / Milestones Grid */}
        <div className="story-timeline-grid">
          {/* Card 1: 2025 - Company Founded */}
          <article className="story-card story-card-featured" data-aos="fade-up" data-aos-delay="100">
            <div className="story-card-top-bar" />
            <div className="story-card-header">
              <span className="story-badge badge-primary">2025</span>
              <div className="story-icon-wrapper">
                <FaBuilding className="story-icon" />
              </div>
            </div>
            <div className="story-card-body">
              <h3 className="story-card-title">COMPANY FOUNDED IN 2025</h3>
              <p className="story-card-desc">
                Founded in 2025 in Krishnagiri, Tamil Nadu, Artlysoft has rapidly evolved from a visionary tech startup into a trusted name in IT consulting and software outsourcing. We work closely with clients to turn technology into a sustainable competitive advantage.
              </p>
              <ul className="story-highlights-list">
                <li><FaCheckCircle className="check-icon" /> Established core software engineering hub in Krishnagiri, Tamil Nadu</li>
                <li><FaCheckCircle className="check-icon" /> Launched tailored IT consulting and custom web solution delivery</li>
                <li><FaCheckCircle className="check-icon" /> Built client-first strategy focused on turning tech into competitive advantage</li>
              </ul>
            </div>
          </article>

          {/* Card 2: Expansion & Tech Capabilities */}
          <article className="story-card" data-aos="fade-up" data-aos-delay="200">
            <div className="story-card-top-bar" />
            <div className="story-card-header">
              <span className="story-badge badge-accent">2025 - Q3</span>
              <div className="story-icon-wrapper">
                <FaRocket className="story-icon" />
              </div>
            </div>
            <div className="story-card-body">
              <h3 className="story-card-title">EXPANSION & TECH CAPABILITIES</h3>
              <p className="story-card-desc">
                Rapidly scaled our core engineering capabilities across modern full-stack web development, cloud integrations, and UI/UX design. Assembled a talented team of passionate tech professionals.
              </p>
              <ul className="story-highlights-list">
                <li><FaCheckCircle className="check-icon" /> Expanded full-stack web and mobile development services</li>
                <li><FaCheckCircle className="check-icon" /> Formed dedicated engineering, UI/UX, and business strategy teams</li>
                <li><FaCheckCircle className="check-icon" /> Onboarded diverse business clients across multiple domain sectors</li>
              </ul>
            </div>
          </article>

          {/* Card 3: Applied AI & Outsourcing Hub */}
          <article className="story-card" data-aos="fade-up" data-aos-delay="300">
            <div className="story-card-top-bar" />
            <div className="story-card-header">
              <span className="story-badge badge-neutral">2026</span>
              <div className="story-icon-wrapper">
                <FaAward className="story-icon" />
              </div>
            </div>
            <div className="story-card-body">
              <h3 className="story-card-title">APPLIED AI & OUTSOURCING HUB</h3>
              <p className="story-card-desc">
                Incorporated applied AI automation, cloud-native infrastructure, and strategic IT outsourcing models to empower clients with scalable modern digital advantages.
              </p>
              <ul className="story-highlights-list">
                <li><FaCheckCircle className="check-icon" /> Integrated applied AI, automation, and modern cloud architecture</li>
                <li><FaCheckCircle className="check-icon" /> Established long-term IT outsourcing and consulting partnerships</li>
                <li><FaCheckCircle className="check-icon" /> Maintained top-tier delivery standards and high client retention</li>
              </ul>
            </div>
          </article>

          {/* Card 4: Global Horizon */}
          <article className="story-card" data-aos="fade-up" data-aos-delay="400">
            <div className="story-card-top-bar" />
            <div className="story-card-header">
              <span className="story-badge badge-horizon">2027 & BEYOND</span>
              <div className="story-icon-wrapper">
                <FaGlobeAmericas className="story-icon" />
              </div>
            </div>
            <div className="story-card-body">
              <h3 className="story-card-title">GLOBAL HORIZON</h3>
              <p className="story-card-desc">
                Continuing our mission to pioneer digital excellence, scaling enterprise software solutions globally while maintaining our commitment to innovation, quality, and strong client relationships.
              </p>
              <ul className="story-highlights-list">
                <li><FaCheckCircle className="check-icon" /> Expanding global client footprint and strategic technology alliances</li>
                <li><FaCheckCircle className="check-icon" /> Building next-generation scalable platforms & cloud ecosystems</li>
                <li><FaCheckCircle className="check-icon" /> Nurturing local tech talent while delivering global impact</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </>
);
};

export default About;

