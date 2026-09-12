import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import artlyLogo from '../assets/images/ARTLY.png';
import ArtlyTitle from './ArtlyTitle';
import '../assets/style/Navbar.css';
import homeGif from "../assets/gifs/home_icon.gif";
import callSvg from "../assets/gifs/call_icon.svg";

const defaultItems = [
  {
    label: "Services",
    bgColor: "var(--card-services-bg)",
    textColor: "var(--card-services-text)",
    links: [
      { label: "About", href: "#/about", ariaLabel: "About Page" },
      { label: "Services", href: "#/services", ariaLabel: "Our Services" }
    ]
  },
  {
    label: "Products",
    bgColor: "var(--card-products-bg)",
    textColor: "var(--card-products-text)",
    links: [
      { label: "TalentOs", href: "#/products/talent-os", ariaLabel: "TalentOs Product" }
    ]
  },
  {
    label: "JoinUs",
    bgColor: "var(--card-joinus-bg)",
    textColor: "var(--card-joinus-text)",
    links: [
      { label: "Career", href: "#/joinus/career", ariaLabel: "Careers" },
      { label: "Training", href: "#/joinus/training", ariaLabel: "Training" }
    ]
  }
];

const Navbar = ({
  items = defaultItems,
  className = '',
  ease = 'power3.out',
  baseColor = 'var(--navbar-bg)',
  menuColor = 'var(--navbar-text)',
  buttonBgColor = 'var(--navbar-btn-bg)',
  buttonTextColor = 'var(--navbar-btn-text)'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  
  const location = useLocation();

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl || !isExpanded) return;
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
    tl.reverse();
  };

  useEffect(() => {
    closeMenu();
  }, [location]);


  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 150;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      // Clear GSAP translateY so measurement is not inflated
      gsap.set(cardsRef.current, { y: 0 });

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      contentEl.offsetHeight; // force reflow

      const topBar = 60;
      const padding = 2;
      const contentHeight = contentEl.offsetHeight || contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 150;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.2,
      ease
    });

    tl.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.15,
      ease,
      stagger: 0.03
    }, '-=0.05');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''}`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <img src={artlyLogo} alt="Artlysoft Logo" className="logo-image" />
            <ArtlyTitle className="logo-text" />
          </div>






          <div className="nav-actions">
            <Link to="/" className="card-nav-cta-button icon-only home-icon-btn" aria-label="Home" onClick={closeMenu}>
              <img src={homeGif} alt="Home" />
            </Link>

            <Link to="/contact" className="card-nav-cta-button icon-only call-icon-btn" aria-label="Contact Us" onClick={closeMenu}>
              <FiPhone className="mobile-phone-icon" />
            </Link>
            
            <Link
              to="/contact"
              className="card-nav-cta-button text-btn"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ 
                backgroundColor: item.bgColor, 
                color: item.textColor
              }}
            >
              <div 
                className="nav-card-label"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.label === "Services") { window.location.hash = "#/services"; closeMenu(); }
                  else if (item.label === "Products") { window.location.hash = "#/products/talent-os"; closeMenu(); }
                  else if (item.label === "JoinUs") { window.location.hash = "#/joinus/career"; closeMenu(); }
                }}
              >
                {item.label}
              </div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={closeMenu}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;