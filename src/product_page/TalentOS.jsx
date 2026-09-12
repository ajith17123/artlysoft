import "../product_page/TalentOS.css";
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chart from 'chart.js/auto';
import { 
  BsMortarboardFill, 
  BsMoon, 
  BsSun, 
  BsChevronDown, 
  BsChevronLeft,
  BsChevronRight,
  BsArrowRight,
  BsList,
  BsX,
  BsGrid1X2,
  BsMortarboard,
  BsBriefcase,
  BsFileEarmarkText,
  BsStars,
  BsPlayCircleFill,
  BsSearch,
  BsBell,
  BsGear,
  BsGraphUpArrow,
  BsGraphUp,
  BsAwardFill,
  BsPeople,
  BsStar,
  BsStarFill,
  BsCurrencyDollar,
  BsClipboardCheck,
  BsRobot,
  BsChatLeftText,
  BsFileEarmarkCheck,
  BsChatLeftQuote,
  BsShieldCheck,
  BsBuilding,
  BsPersonBadge,
  BsPersonWorkspace,
  BsPersonCheck,
  BsCheck2,
  BsLock,
  BsEye,
  BsDatabase,
  BsCodeSlash,
  BsTwitterX,
  BsLinkedin,
  BsYoutube,
  BsGithub
} from 'react-icons/bs';
import {
  LuSparkles
} from 'react-icons/lu';

// GIF imports
import gifBrain from '../product_page/gifs talentos/icons8-brain.gif';
import gifBriefcase from '../product_page/gifs talentos/icons8-briefcase.gif';
import gifCertificate from '../product_page/gifs talentos/icons8-certificate.gif';
import gifCertification from '../product_page/gifs talentos/icons8-certification.gif';
import gifChatbot from '../product_page/gifs talentos/icons8-chatbot.gif';
import gifUser from '../product_page/gifs talentos/icons8-circled-male-user-skin-type-3.gif';
import gifClipboard from '../product_page/gifs talentos/icons8-clipboard.gif';
import gifDollar from '../product_page/gifs talentos/icons8-dollar.gif';
import gifFile from '../product_page/gifs talentos/icons8-file.gif';
import gifMindMap from '../product_page/gifs talentos/icons8-mind-map.gif';
import gifQuestion from '../product_page/gifs talentos/icons8-question-mark.gif';
import gifStar from '../product_page/gifs talentos/icons8-star-filled.gif';
import gifUsers from '../product_page/gifs talentos/icons8-users.gif';
import gifWeb from '../product_page/gifs talentos/icons8-web.gif';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "“TalentOS reduced our fee collection follow-ups by 70%. The automated reminders and online gateway have been transformative for our 8,000–student campus.”",
    authorName: "Dr. Sunita Rao",
    authorRole: "",
    initials: "SR",
    color: "#5c5cfc"
  },
  {
    id: 2,
    rating: 5,
    text: "“The AI question paper generator saves our faculty 3+ hours per exam cycle. Papers are now perfectly mapped to the syllabus and Bloom's taxonomy — something we struggled with for years.”",
    authorName: "Prof. Arjun Mehta",
    authorRole: "",
    initials: "AM",
    color: "#10b981"
  },
  {
    id: 3,
    rating: 5,
    text: "“Our placement rate jumped from 62% to 87% after implementing TalentOS. The AI resume builder and job portal gave students a serious competitive edge.”",
    authorName: "Ms. Kavitha Nair",
    authorRole: "",
    initials: "KN",
    color: "#3b82f6"
  },
  {
    id: 4,
    rating: 5,
    text: "“Managing 14 branch campuses from a single dashboard seemed impossible. TalentOS made it routine. The multi-institution governance is genuinely best-in-class.”",
    authorName: "Mr. Rajesh Gupta",
    authorRole: "",
    initials: "RG",
    color: "#f59e0b"
  }
];

const faqData = [
  {
    question: "How long does TalentOS implementation take?",
    answer: "Most institutions are fully live within 4–6 weeks. Our onboarding team handles data migration, configuration, and staff training. We offer a dedicated implementation manager for Growth and Enterprise plans."
  },
  {
    question: "Can TalentOS integrate with our existing biometric/RFID systems?",
    answer: "Yes. TalentOS supports integration with all major biometric vendors including ZKTeco, Realand, and Suprema. We also provide a REST API for custom integrations."
  },
  {
    question: "Is student data stored on Indian servers?",
    answer: "Absolutely. We operate data centres in Mumbai and Hyderabad, ensuring all student data remains within Indian borders and complies with the DPDP Act 2023."
  },
  {
    question: "Does TalentOS support multiple campuses under one account?",
    answer: "Yes. The Super Admin module is built specifically for multi-campus groups. You get consolidated reporting, centralized user management, and individual campus autonomy."
  },
  {
    question: "What happens to our data if we cancel?",
    answer: "You retain full ownership of your data. On cancellation, we provide a complete data export in standard formats (CSV, JSON) within 30 days. Data is securely deleted from our servers per our retention policy."
  },
  {
    question: "Is there a mobile app for students and parents?",
    answer: "Yes — TalentOS includes iOS and Android apps for students and a parent companion app with attendance alerts, fee reminders, exam results, and messaging."
  }
];

// ── Scroll-triggered count-up hook ──────────────────────────────────────
function useCountUp({ end, duration = 1800, decimals = 0, suffix = '', trigger }) {
  const [display, setDisplay] = useState(decimals > 0 ? (0).toFixed(decimals) + suffix : '0' + suffix);
  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic — fast start, smooth landing
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (end * eased).toFixed(decimals);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration, decimals, suffix]);
  return display;
}

// KPI animated counter cell
function KpiCounter({ end, decimals = 0, suffix = '', duration = 1800, trigger }) {
  const display = useCountUp({ end, duration, decimals, suffix, trigger });
  return <span className="kpi-item-value">{display}</span>;
}

// Trusted stats card animated counter
function StatCardCounter({ end, decimals = 0, suffix = '', duration = 1800, trigger }) {
  const display = useCountUp({ end, duration, decimals, suffix, trigger });
  return <div className="stat-card-value">{display}</div>;
}
// ────────────────────────────────────────────────────────────────────────

function Home() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(prev => prev === index ? null : index);
  };

  // Testimonials slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Pricing toggle state (Annual vs Monthly)
  const [isAnnual, setIsAnnual] = useState(true);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Theme state initialization
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  // Mobile menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  // Scroll state for adding border on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Active navigation link state
  const [activeLink, setActiveLink] = useState('Features');

  // Active tab state for the AI features section
  const [activeTab, setActiveTab] = useState('tutor');

  // Active role tab state for the Role-Based Experience section
  const [activeRole, setActiveRole] = useState('superadmin');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  // Mark body so global typography rules can exclude this page via
  // body:not([data-page="talentos"]) — no TalentOS styles are affected.
  useEffect(() => {
    document.body.dataset.page = 'talentos';
    return () => {
      delete document.body.dataset.page;
    };
  }, []);

  useEffect(() => {
    // Sync theme with HTML attribute and localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [theme]);

  // Scroll listener for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    const sectionIds = {
      'Home': 'talent-top',
      'Features': 'ai-features',
      'Solutions': 'analytics',
      'Pricing': 'pricing',
      'Resources': 'testimonials',
      'Login': 'pricing'
    };

    const targetId = sectionIds[linkName];
    if (targetId) {
      scrollToSection(targetId);
    }
  };

  const toggleMobileSubmenu = (menuName) => {
    setActiveMobileSubmenu(prev => prev === menuName ? null : menuName);
  };

  // --- Hero Section Logic ---
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const statsRef = useRef(null);
  const trustedStatsRef = useRef(null);

  // --- Analytics Section Charts ---
  const enrollmentChartRef = useRef(null);
  const enrollmentChartInstance = useRef(null);
  const deptChartRef = useRef(null);
  const deptChartInstance = useRef(null);
  const feeChartRef = useRef(null);
  const feeChartInstance = useRef(null);

  // --- KPI Section animated counters ---
  const kpiSectionRef = useRef(null);
  const [kpiVisible, setKpiVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKpiVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold: 0.3 }
    );
    if (kpiSectionRef.current) observer.observe(kpiSectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Trusted Stats Section animated counters ---
  const [trustedVisible, setTrustedVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrustedVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold: 0.3 }
    );
    if (trustedStatsRef.current) observer.observe(trustedStatsRef.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        // Destroy existing chart if it exists to avoid memory leaks
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        let gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.25)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Enrollment',
                    data: [12000, 12200, 12500, 12300, 13000, 13800, 14200, 15000, 16000, 17500, 18000, 18500],
                    borderColor: '#4f46e5',
                    backgroundColor: gradient,
                    borderWidth: 2.5,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#4f46e5',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        intersect: false,
                        mode: 'index',
                        backgroundColor: 'rgba(17, 24, 39, 0.9)',
                        titleFont: { family: 'Inter', size: 13 },
                        bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false,
                    }
                },
                scales: {
                    x: { display: false },
                    y: { display: false, min: 11000 }
                },
                interaction: { mode: 'nearest', axis: 'x', intersect: false }
            }
        });
    }
    
    return () => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElements = entry.target.querySelectorAll('.stat-value');
                statElements.forEach(stat => {
                    if (stat.dataset.animated) return;
                    stat.dataset.animated = "true";

                    const target = parseFloat(stat.getAttribute('data-target'));
                    const suffix = stat.getAttribute('data-suffix') || '';
                    const prefix = stat.getAttribute('data-prefix') || '';
                    const isDecimal = target % 1 !== 0;
                    const duration = 2000;
                    const frameRate = 1000 / 60;
                    const totalFrames = Math.round(duration / frameRate);
                    let frame = 0;
                    
                    stat.innerText = `${prefix}0${suffix}`;
                    
                    const counter = setInterval(() => {
                        frame++;
                        const progress = frame / totalFrames;
                        const easeProgress = progress * (2 - progress);
                        const current = (easeProgress * target).toFixed(isDecimal ? 1 : 0);
                        stat.innerText = `${prefix}${current}${suffix}`;
                        
                        if (frame === totalFrames) {
                            clearInterval(counter);
                            stat.innerText = `${prefix}${target}${suffix}`;
                        }
                    }, frameRate);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsRef.current) observer.observe(statsRef.current);
    if (trustedStatsRef.current) observer.observe(trustedStatsRef.current);
    
    return () => {
        if (statsRef.current) observer.unobserve(statsRef.current);
        if (trustedStatsRef.current) observer.unobserve(trustedStatsRef.current);
    };
  }, []);

  // Analytics Section — Enrollment & Revenue Trend Chart
  useEffect(() => {
    if (enrollmentChartRef.current) {
      const ctx = enrollmentChartRef.current.getContext('2d');
      if (enrollmentChartInstance.current) enrollmentChartInstance.current.destroy();

      const grad = ctx.createLinearGradient(0, 0, 0, 280);
      grad.addColorStop(0, 'rgba(99, 102, 241, 0.18)');
      grad.addColorStop(1, 'rgba(99, 102, 241, 0)');

      enrollmentChartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          datasets: [
            {
              label: 'Students',
              data: [4200, 4100, 4300, 4500, 5200, 5800, 6100, 6800],
              borderColor: '#6366f1',
              backgroundColor: grad,
              borderWidth: 2.5,
              tension: 0.45,
              fill: true,
              pointRadius: 0,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#6366f1',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              yAxisID: 'y',
            },
            {
              label: 'Revenue (₹L)',
              data: [28, 30, 32, 35, 38, 40, 42, 46],
              borderColor: '#10b981',
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.45,
              fill: false,
              pointRadius: 0,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#10b981',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              yAxisID: 'y',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#111827',
              bodyColor: '#6366f1',
              borderColor: '#e5e7eb',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 10,
              displayColors: false,
              callbacks: {
                title: (items) => items[0].label,
                label: (item) => {
                  if (item.datasetIndex === 0) return `Students : ${item.raw.toLocaleString()}`;
                  return `Revenue (₹L) : ${item.raw}`;
                },
                labelTextColor: (item) => item.datasetIndex === 0 ? '#6366f1' : '#10b981',
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              border: { display: false },
              ticks: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: '#9ca3af' },
            },
            y: {
              position: 'left',
              grid: { color: 'rgba(0,0,0,0.05)' },
              border: { display: false, dash: [4, 4] },
              ticks: {
                font: { family: 'Plus Jakarta Sans', size: 11 },
                color: '#9ca3af',
                stepSize: 2000,
              },
              min: 0,
              max: 8000,
            },
          },
        },
      });
    }
    return () => { if (enrollmentChartInstance.current) enrollmentChartInstance.current.destroy(); };
  }, []);

  // Analytics Section — Students by Department Bar Chart
  useEffect(() => {
    if (deptChartRef.current) {
      const ctx = deptChartRef.current.getContext('2d');
      if (deptChartInstance.current) deptChartInstance.current.destroy();

      deptChartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['CSE', 'MBA', 'ECE', 'Civil', 'Mech'],
          datasets: [{
            data: [920, 680, 520, 340, 360],
            backgroundColor: '#6366f1',
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 28,
          }],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#111827',
              bodyColor: '#6366f1',
              borderColor: '#e5e7eb',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 10,
              displayColors: false,
            },
          },
          scales: {
            x: {
              grid: { color: 'rgba(0,0,0,0.05)' },
              border: { display: false },
              ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#9ca3af', stepSize: 250 },
              min: 0,
              max: 1000,
            },
            y: {
              grid: { display: false },
              border: { display: false },
              ticks: { font: { family: 'Plus Jakarta Sans', size: 13, weight: '600' }, color: '#374151' },
            },
          },
        },
      });
    }
    return () => { if (deptChartInstance.current) deptChartInstance.current.destroy(); };
  }, []);

  // Analytics — Fee Collection Mode Donut Chart
  useEffect(() => {
    if (feeChartRef.current) {
      const ctx = feeChartRef.current.getContext('2d');
      if (feeChartInstance.current) feeChartInstance.current.destroy();
      feeChartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Online', 'Cash', 'UPI', 'Cheque'],
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b'],
            borderWidth: 0,
            hoverOffset: 8,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '72%',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fff',
              titleColor: '#111827',
              bodyColor: '#6b7280',
              borderColor: '#e5e7eb',
              borderWidth: 1,
              padding: 12,
              cornerRadius: 10,
              callbacks: {
                label: (item) => ` ${item.label}: ${item.raw}%`,
              },
            },
          },
        },
      });
    }
    return () => { if (feeChartInstance.current) feeChartInstance.current.destroy(); };
  }, []);

  return (

    <>

      {/*Nav-Section */}

      <section className={`nav-sec${isScrolled ? ' nav-scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo Brand */}
          <a 
            href="#talent-top" 
            className="nav-logo-wrapper" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('Home'); }}
          >
            <div className="nav-logo-icon-container">
              <BsMortarboardFill />
            </div>
            <div className="nav-logo-text">
              Artlysoft <span>TalentOS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li className="nav-item has-dropdown">
              <a 
                href="#ai-features"
                className={`nav-link${activeLink === 'Features' ? ' active-link' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}
              >
                Features <BsChevronDown className="nav-arrow-icon" />
              </a>
              
              {/* Mega Dropdown for Features */}
              <div className="mega-dropdown">
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box purple">
                    <img src={gifBrain} alt="AI Tutor" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    AI Tutor &<br />Chat
                  </div>
                </a>
                
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box blue">
                    <img src={gifQuestion} alt="Question Generator" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    Question<br />Generator
                  </div>
                </a>
                
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box cyan">
                    <img src={gifMindMap} alt="Analytics Dashboard" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    Analytics<br/>Dashboard
                  </div>
                </a>
                
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box green">
                    <img src={gifCertification} alt="LMS & Courses" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    LMS &<br />Courses
                  </div>
                </a>
                
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box orange">
                    <img src={gifBriefcase} alt="Placement Portal" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    Placement<br />Portal
                  </div>
                </a>
                
                <a href="#ai-features" className="dropdown-item-card" onClick={(e) => { e.preventDefault(); handleLinkClick('Features'); }}>
                  <div className="dropdown-icon-box pink">
                    <img src={gifFile} alt="Resume Builder" className="gif-icon gif-icon-sm" />
                  </div>
                  <div className="dropdown-item-title">
                    Resume<br />Builder
                  </div>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a 
                href="#analytics"
                className={`nav-link${activeLink === 'Solutions' ? ' active-link' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('Solutions'); }}
              >
                Solutions
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                href="#pricing"
                className={`nav-link${activeLink === 'Pricing' ? ' active-link' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('Pricing'); }}
              >
                Pricing
              </a>
            </li>
            
            <li className="nav-item">
              <a 
                href="#testimonials"
                className={`nav-link${activeLink === 'Resources' ? ' active-link' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick('Resources'); }}
              >
                Resources
              </a>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme} 
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <BsMoon /> : <BsSun />}
            </button>
            
            <a href="#pricing" className="login-link" onClick={(e) => { e.preventDefault(); handleLinkClick('Login'); }}>Login</a>
            
            <button className="nav-btn btn-book-demo" onClick={() => scrollToSection('pricing')}>
              Book Demo
            </button>
            
            <button className="nav-btn btn-free-trial" onClick={() => scrollToSection('pricing')}>
              Start Free Trial <BsArrowRight className="btn-free-trial-arrow" />
            </button>
          </div>

          {/* Mobile Controls: Theme Toggle + Hamburger */}
          <div className="mobile-controls">
            <button 
              className="theme-toggle-btn mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <BsMoon /> : <BsSun />}
            </button>
            <button 
              className="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <BsX /> : <BsList />}
            </button>
          </div>

        </div>
      </section>

      {/* Backdrop for Mobile Drawer */}
      <div 
        className={`drawer-backdrop${isMobileMenuOpen ? ' show' : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer${isMobileMenuOpen ? ' open' : ''}`}>
        
        {/* Drawer Header Row: Logo + Theme Toggle + Close */}
        <div className="mobile-drawer-header">
          <a href="#talent-top" className="nav-logo-wrapper" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>
            <div className="nav-logo-icon-container">
              <BsMortarboardFill />
            </div>
            <div className="nav-logo-text">
              Artlysoft <span>TalentOS</span>
            </div>
          </a>
          <div className="mobile-drawer-header-right">
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <BsX />
            </button>
          </div>
        </div>

        {/* Drawer Nav Links */}
        <ul className="mobile-drawer-links">
          <li className="mobile-drawer-link-item">
            <span 
              className={`mobile-drawer-link${activeMobileSubmenu === 'features' ? ' submenu-open' : ''}`}
              onClick={() => toggleMobileSubmenu('features')}
            >
              Features 
              <BsChevronDown className={`mobile-chevron${activeMobileSubmenu === 'features' ? ' rotated' : ''}`} />
            </span>
            <div className={`mobile-submenu${activeMobileSubmenu === 'features' ? ' open' : ''}`}>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon purple"><img src={gifBrain} alt="AI Tutor" className="gif-icon gif-icon-xs" /></div>
                AI Tutor & Chat
              </a>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon blue"><img src={gifQuestion} alt="Question Generator" className="gif-icon gif-icon-xs" /></div>
                Question Generator
              </a>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon cyan"><img src={gifMindMap} alt="Analytics Dashboard" className="gif-icon gif-icon-xs" /></div>
                Analytics Dashboard
              </a>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon green"><img src={gifCertification} alt="LMS & Courses" className="gif-icon gif-icon-xs" /></div>
                LMS & Courses
              </a>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon orange"><img src={gifBriefcase} alt="Placement Portal" className="gif-icon gif-icon-xs" /></div>
                Placement Portal
              </a>
              <a href="#ai-features" className="mobile-submenu-item" onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Features');
              }}>
                <div className="mobile-submenu-icon pink"><img src={gifFile} alt="Resume Builder" className="gif-icon gif-icon-xs" /></div>
                Resume Builder
              </a>
            </div>
          </li>

          <li className="mobile-drawer-link-item">
            <a 
              href="#analytics" 
              className={`mobile-drawer-link${activeLink === 'Solutions' ? ' active-item' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Solutions');
              }}
            >
              Solutions
            </a>
          </li>

          <li className="mobile-drawer-link-item">
            <a 
              href="#pricing" 
              className={`mobile-drawer-link${activeLink === 'Pricing' ? ' active-item' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Pricing');
              }}
            >
              Pricing
            </a>
          </li>

          <li className="mobile-drawer-link-item">
            <a 
              href="#testimonials" 
              className={`mobile-drawer-link${activeLink === 'Resources' ? ' active-item' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('Resources');
              }}
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Mobile Action Buttons */}
        <div className="mobile-drawer-actions">
          <a 
            href="#pricing" 
            className="mobile-action-login" 
            onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
          >
            Login
          </a>
          
          <button 
            className="nav-btn btn-book-demo mobile-drawer-btn" 
            onClick={() => scrollToSection('pricing')}
          >
            Book Demo
          </button>
          
          <button 
            className="nav-btn btn-free-trial mobile-drawer-btn" 
            onClick={() => scrollToSection('pricing')}
          >
            Start Free Trial <BsArrowRight className="btn-free-trial-arrow" />
          </button>
        </div>
      </div>

{/* Hero section */}
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
            <div className="badge">
                <BsStars className="text-purple" /> Now with GPT-4o Powered AI Tutor <span className="badge-new">NEW</span>
            </div>
            
            <h1 className="hero-title">
                The Future of<br/>
                <span className="text-gradient">Education</span><br/>
                Management
            </h1>
            
            <p className="hero-description">
                TalentOS unifies your entire institution — from admissions to alumni — with AI-powered tools that save 40% admin time, boost student outcomes, and scale with you from 100 to 100,000 students.
            </p>
            
            <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>Start Free Trial <BsArrowRight /></button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('ai-features')}><BsPlayCircleFill style={{ fontSize: '20px' }} /> Watch 2-min Demo</button>
            </div>
            
            <div className="hero-stats" ref={statsRef}>
                <div className="stat-item">
                    <span className="stat-value" data-target="2.4" data-suffix="M+">2.4M+</span>
                    <span className="stat-label">Active Students</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value" data-target="12" data-suffix="K+">12K+</span>
                    <span className="stat-label">Institutions</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value" data-target="99.9" data-suffix="%">99.9%</span>
                    <span className="stat-label">Uptime SLA</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value" data-target="40" data-suffix="%">40%</span>
                    <span className="stat-label">Admin Time Saved</span>
                </div>
            </div>
        </div>
        
        {/* Right Side: Dashboard Mockup */}
        <div className="hero-visual">
            <div className="dashboard-card">
                {/* Top Nav */}
                <div className="dash-nav">
                    <div className="dash-dot-group">
                        <span className="dash-dot bg-red"></span>
                        <span className="dash-dot bg-yellow"></span>
                        <span className="dash-dot bg-green"></span>
                    </div>
                    <div className="search-bar">
                        <BsSearch /> app.talentos.io/dashboard
                    </div>
                    <div className="dash-icons">
                        <BsBell />
                        <BsGear />
                    </div>
                </div>
                
                {/* Stat Cards Row */}
                <div className="dash-stats">
                    <div className="d-stat">
                        <span className="ds-label">Students</span>
                        <span className="ds-value">24,312</span>
                        <span className="ds-trend"><BsGraphUpArrow /> +4.2%</span>
                    </div>
                    <div className="d-stat">
                        <span className="ds-label">Attendance</span>
                        <span className="ds-value">96.8%</span>
                        <span className="ds-trend"><BsGraphUpArrow /> +1.1%</span>
                    </div>
                    <div className="d-stat">
                        <span className="ds-label">Fee Collected</span>
                        <span className="ds-value">₹8.4Cr</span>
                        <span className="ds-trend"><BsGraphUpArrow /> +12%</span>
                    </div>
                    <div className="d-stat">
                        <span className="ds-label">Placements</span>
                        <span className="ds-value">1,842</span>
                        <span className="ds-trend"><BsGraphUpArrow /> +28%</span>
                    </div>
                </div>
                
                {/* Chart Area */}
                <div className="dash-chart">
                    <h3>Enrollment Trend — 2026</h3>
                    <div className="chart-container">
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
                
                {/* Activity Feed */}
                <div className="dash-activity">
                    <div className="activity-item">
                        <div className="avatar bg-blue-avatar">SK</div>
                        <div className="activity-content">
                            <strong>Siddharth K.</strong> submitted assignment
                        </div>
                        <div className="activity-time">2m ago</div>
                    </div>
                    <div className="activity-item">
                        <div className="avatar bg-green-avatar">PR</div>
                        <div className="activity-content">
                            <strong>Priya R.</strong> AI tutor session started
                        </div>
                        <div className="activity-time">5m ago</div>
                    </div>
                    <div className="activity-item">
                        <div className="avatar bg-yellow-avatar">AM</div>
                        <div className="activity-content">
                            <strong>Arjun M.</strong> fee payment received
                        </div>
                        <div className="activity-time">8m ago</div>
                    </div>
                </div>
            </div>
            
            {/* Floating Elements */}
            <div className="float-badge float-top-left">
                <div className="fb-icon bg-light-purple"><img src={gifBrain} alt="AI Tutor" className="gif-icon gif-icon-sm" /></div>
                <div className="fb-text">
                    <span className="fbt-title">AI Tutor Active</span>
                    <span className="fbt-value">3,241 sessions</span>
                </div>
            </div>
            
            <div className="float-badge float-mid-right">
                <div className="fb-icon bg-light-green"><img src={gifMindMap} alt="Attendance Rate" className="gif-icon gif-icon-sm" /></div>
                <div className="fb-text">
                    <span className="fbt-title">Attendance Rate</span>
                    <span className="fbt-value">96.8%</span>
                </div>
            </div>
            
            <div className="float-badge float-btm-right">
                <div className="fb-icon bg-light-pink"><img src={gifQuestion} alt="AI Paper" className="gif-icon gif-icon-sm" /></div>
                <div className="fb-text">
                    <span className="fbt-title">AI Paper Generated</span>
                    <span className="fbt-value">Just now</span>
                </div>
            </div>
            
            <div className="float-badge float-btm-left">
                <div className="fb-icon bg-light-yellow"><img src={gifCertificate} alt="Certificates" className="gif-icon gif-icon-sm" /></div>
                <div className="fb-text">
                    <span className="fbt-title">Certificates Issued</span>
                    <span className="fbt-value">18,420 today</span>
                </div>
            </div>
        </div>
      </div>

      {/* Trusted Stats Section */}
      <section className="trusted-stats-section">
          <div className="trusted-container">
              <h3 className="trusted-heading">TRUSTED BY 12,000+ INSTITUTIONS ACROSS INDIA & SOUTHEAST ASIA</h3>
              <div className="trusted-logos">
                <div className="trusted-logos-track">
                  <span>IIT Bombay</span>
                  <span>Delhi University</span>
                  <span>Manipal Academy</span>
                  <span>VIT University</span>
                  <span>Amity University</span>
                  <span>Symbiosis</span>
                  <span>BITS Pilani</span>
                  <span>Christ University</span>
                  <span>Anna University</span>
                  <span>Jadavpur University</span>
                  <span>SRM Institute</span>
                  <span>Lovely Professional University</span>
                  {/* Duplicate for seamless loop */}
                  <span>IIT Bombay</span>
                  <span>Delhi University</span>
                  <span>Manipal Academy</span>
                  <span>VIT University</span>
                  <span>Amity University</span>
                  <span>Symbiosis</span>
                  <span>BITS Pilani</span>
                  <span>Christ University</span>
                  <span>Anna University</span>
                  <span>Jadavpur University</span>
                  <span>SRM Institute</span>
                  <span>Lovely Professional University</span>
                </div>
              </div>
              
              <div className="stats-cards-container" ref={trustedStatsRef}>
                  <div className="stat-card">
                      <div className="stat-card-icon icon-purple">
                          <img src={gifCertificate} alt="School Enquiry" className="gif-icon gif-icon-md" />
                      </div>
                      <StatCardCounter end={50} decimals={0} suffix="+" trigger={trustedVisible} />
                      <div className="stat-card-label">School Enquiry</div>
                  </div>
                  
                  <div className="stat-card">
                      <div className="stat-card-icon icon-blue">
                          <img src={gifBriefcase} alt="Institute Enquiry" className="gif-icon gif-icon-md" />
                      </div>
                      <StatCardCounter end={70} decimals={0} suffix="+" trigger={trustedVisible} />
                      <div className="stat-card-label">Institute Enquiry</div>
                  </div>
                  
                  <div className="stat-card">
                      <div className="stat-card-icon icon-green">
                          <img src={gifCertification} alt="College Enquiry" className="gif-icon gif-icon-md" />
                      </div>
                      <StatCardCounter end={45} decimals={0} suffix="+" trigger={trustedVisible} />
                      <div className="stat-card-label">College Enquiry</div>
                  </div>
                  
                  <div className="stat-card">
                      <div className="stat-card-icon icon-orange">
                          <img src={gifStar} alt="Customer Satisfaction" className="gif-icon gif-icon-md" />
                      </div>
                      <StatCardCounter end={98.7} decimals={1} suffix="%" trigger={trustedVisible} />
                      <div className="stat-card-label">Customer Satisfaction</div>
                  </div>
              </div>
          </div>
      </section>


      {/* Platform Overview Section */}
      <section className="platform-overview-section" id="platform-overview">
        <div className="platform-overview-container" data-aos="fade-up">
          
          <div className="platform-overview-header">
            <span className="platform-overview-badge">Platform Overview</span>
            <h2 className="platform-overview-title">
              Everything your institution needs <br /> — unified
            </h2>
            <p className="platform-overview-subtitle">
              TalentOS replaces 12+ standalone tools with a single, beautifully integrated platform that grows with your institution.
            </p>
          </div>

          <div className="platform-overview-grid">
            
            {/* Card 1: AI-Powered Learning */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="100">
              <div className="platform-card-icon icon-purple">
                <img src={gifBrain} alt="AI-Powered Learning" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">AI-Powered Learning</h3>
              <p className="platform-card-desc">
                Personalized AI tutor adapts to each student's learning pace and style, delivering Socratic dialogue and instant feedback.
              </p>
            </div>

            {/* Card 2: Unified Dashboard */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="150">
              <div className="platform-card-icon icon-blue">
                <img src={gifMindMap} alt="Unified Dashboard" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Unified Dashboard</h3>
              <p className="platform-card-desc">
                Single pane of glass for admins, faculty, and students — all KPIs, alerts, and quick actions in one place.
              </p>
            </div>

            {/* Card 3: Complete LMS */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="200">
              <div className="platform-card-icon icon-green">
                <img src={gifCertification} alt="Complete LMS" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Complete LMS</h3>
              <p className="platform-card-desc">
                Rich course builder with video, quizzes, live classes, assignments, and progress tracking built for modern educators.
              </p>
            </div>

            {/* Card 4: Smart Fee Management */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="250">
              <div className="platform-card-icon icon-orange">
                <img src={gifDollar} alt="Smart Fee Management" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Smart Fee Management</h3>
              <p className="platform-card-desc">
                Automated fee collection, receipts, reminders, payment gateways, scholarships, and comprehensive ledger reports.
              </p>
            </div>

            {/* Card 5: Attendance & Timetable */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="300">
              <div className="platform-card-icon icon-royalblue">
                <img src={gifClipboard} alt="Attendance & Timetable" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Attendance &amp; Timetable</h3>
              <p className="platform-card-desc">
                RFID/biometric integration, geo-fenced mobile attendance, auto-generated timetables with conflict resolution.
              </p>
            </div>

            {/* Card 6: Exam & Certification */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="350">
              <div className="platform-card-icon icon-pink">
                <img src={gifCertificate} alt="Exam & Certification" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Exam &amp; Certification</h3>
              <p className="platform-card-desc">
                Full exam lifecycle — scheduling, seating, paper generation, OMR scanning, results, and verified digital certificates.
              </p>
            </div>

            {/* Card 7: Placement Engine */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="400">
              <div className="platform-card-icon icon-indigo">
                <img src={gifBriefcase} alt="Placement Engine" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">Placement Engine</h3>
              <p className="platform-card-desc">
                End-to-end placement management with company onboarding, drive scheduling, offer tracking, and placement analytics.
              </p>
            </div>

            {/* Card 8: AI Resume Builder */}
            <div className="platform-card" data-aos="fade-up" data-aos-delay="450">
              <div className="platform-card-icon icon-cyan">
                <img src={gifFile} alt="AI Resume Builder" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="platform-card-title">AI Resume Builder</h3>
              <p className="platform-card-desc">
                AI-crafted resumes tailored per job description with keyword optimization, ATS scoring, and one-click export.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* AI-Powered Features Section */}
      <section className="ai-features-section" id="ai-features">
        <div className="ai-features-container">
          <div className="ai-features-header" data-aos="fade-up">
            <span className="ai-features-badge">AI-Powered Features</span>
            <h2 className="ai-features-title">Intelligence built into every workflow</h2>
            <p className="ai-features-subtitle">
              Our AI suite doesn't just automate tasks — it augments educators and empowers students with context-aware assistance.
            </p>
          </div>

          {/* Tab Switchers */}
          <div className="ai-tabs-switcher" data-aos="fade-up" data-aos-delay="100">
            <button 
              className={`ai-tab-btn tab-tutor ${activeTab === 'tutor' ? 'active' : ''}`}
              onClick={() => setActiveTab('tutor')}
            >
              <img src={gifBrain} alt="AI Tutor" className="ai-tab-icon gif-icon gif-icon-sm" />
              <span>AI Tutor</span>
            </button>
            <button 
              className={`ai-tab-btn tab-paper ${activeTab === 'paper' ? 'active' : ''}`}
              onClick={() => setActiveTab('paper')}
            >
              <img src={gifQuestion} alt="Question Paper AI" className="ai-tab-icon gif-icon gif-icon-sm" />
              <span>Question Paper AI</span>
            </button>
            <button 
              className={`ai-tab-btn tab-resume ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              <img src={gifFile} alt="AI Resume Builder" className="ai-tab-icon gif-icon gif-icon-sm" />
              <span>AI Resume Builder</span>
            </button>
            <button 
              className={`ai-tab-btn tab-chat ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              <img src={gifChatbot} alt="AI Campus Chat" className="ai-tab-icon gif-icon gif-icon-sm" />
              <span>AI Campus Chat</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="ai-tab-content" data-aos="fade-up" data-aos-delay="200">
            
            {/* AI Tutor Panel */}
            {activeTab === 'tutor' && (
              <div className="ai-panel tutor-panel">
                <div className="ai-panel-info">
                  <div className="ai-panel-icon-box bg-light-purple">
                    <img src={gifBrain} alt="AI Tutor" className="gif-icon gif-icon-lg" />
                  </div>
                  <h3 className="ai-panel-title">AI Tutor</h3>
                  <p className="ai-panel-desc">
                    Socratic AI that understands misconceptions and guides students with targeted questions — not just answers.
                  </p>
                  <button className="btn-explore explore-tutor" onClick={() => scrollToSection('ai-features')}>
                    Explore AI Tutor &rarr;
                  </button>
                </div>
                
                <div className="ai-panel-mockup">
                  <div className="mock-chat-container">
                    <div className="mock-chat-header">
                      <div className="dash-dot-group">
                        <span className="dash-dot bg-red"></span>
                        <span className="dash-dot bg-yellow"></span>
                        <span className="dash-dot bg-green"></span>
                      </div>
                      <div className="chat-header-title">AI Tutor Session</div>
                    </div>
                    <div className="mock-chat-body">
                      {/* Message 1 from AI Tutor */}
                      <div className="chat-msg msg-left">
                        <div className="chat-avatar avatar-ai bg-light-purple">
                          <BsRobot className="text-purple" />
                        </div>
                        <div className="chat-bubble bubble-light">
                          Can you explain Newton's Second Law with a real-world example?
                        </div>
                      </div>
                      
                      {/* Message 2 from Student */}
                      <div className="chat-msg msg-right">
                        <div className="chat-bubble bubble-purple">
                          Think about pushing a shopping cart. What happens when you push harder?
                        </div>
                        <div className="chat-avatar avatar-user">
                          <BsPeople />
                        </div>
                      </div>
                      
                      {/* Message 3 from AI Tutor */}
                      <div className="chat-msg msg-left">
                        <div className="chat-avatar avatar-ai bg-light-purple">
                          <BsRobot className="text-purple" />
                        </div>
                        <div className="chat-bubble bubble-light">
                          Exactly! F = ma. Greater force &rarr; greater acceleration for the same mass. Now, what if the cart is heavier? 🛒
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Question Paper AI Panel */}
            {activeTab === 'paper' && (
              <div className="ai-panel paper-panel">
                <div className="ai-panel-info">
                  <div className="ai-panel-icon-box bg-light-blue">
                    <img src={gifQuestion} alt="Question Paper AI" className="gif-icon gif-icon-lg" />
                  </div>
                  <h3 className="ai-panel-title">Question Paper AI</h3>
                  <p className="ai-panel-desc">
                    Generate Bloom's Taxonomy-mapped question papers in seconds. Supports MCQ, descriptive, case-study, and more.
                  </p>
                  <button className="btn-explore explore-paper" onClick={() => scrollToSection('ai-features')}>
                    Explore Question Paper AI &rarr;
                  </button>
                </div>
                
                <div className="ai-panel-mockup">
                  <div className="mock-paper-container">
                    <div className="mock-paper-header">
                      <div className="paper-header-left">
                        <span className="paper-title-label">Generating:</span>
                        <span className="paper-title">Physics Mid-Term</span>
                      </div>
                      <div className="paper-generating-badge">
                        <span className="pulse-dot"></span>
                        AI Generating...
                      </div>
                    </div>
                    
                    <div className="mock-paper-list">
                      <div className="paper-item">
                        <div className="paper-item-left">
                          <div className="paper-item-q">
                            <span className="q-num">Q1</span>
                            <span className="q-text">Define electric potential difference.</span>
                          </div>
                          <div className="paper-item-tags">
                            <span className="tag-pill tag-blue">Remember</span>
                            <span className="tag-pill tag-grey">Short</span>
                          </div>
                        </div>
                        <div className="paper-item-marks">2M</div>
                      </div>

                      <div className="paper-item">
                        <div className="paper-item-left">
                          <div className="paper-item-q">
                            <span className="q-num">Q2</span>
                            <span className="q-text">Calculate resistance in a circuit with V=12V, I=3A.</span>
                          </div>
                          <div className="paper-item-tags">
                            <span className="tag-pill tag-purple">Apply</span>
                            <span className="tag-pill tag-grey">Numerical</span>
                          </div>
                        </div>
                        <div className="paper-item-marks">5M</div>
                      </div>

                      <div className="paper-item">
                        <div className="paper-item-left">
                          <div className="paper-item-q">
                            <span className="q-num">Q3</span>
                            <span className="q-text">Compare series and parallel circuits in real-world applications.</span>
                          </div>
                          <div className="paper-item-tags">
                            <span className="tag-pill tag-cyan">Analyze</span>
                            <span className="tag-pill tag-grey">Long</span>
                          </div>
                        </div>
                        <div className="paper-item-marks">8M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Resume Builder Panel */}
            {activeTab === 'resume' && (
              <div className="ai-panel resume-panel">
                <div className="ai-panel-info">
                  <div className="ai-panel-icon-box bg-light-green">
                    <img src={gifFile} alt="AI Resume Builder" className="gif-icon gif-icon-lg" />
                  </div>
                  <h3 className="ai-panel-title">AI Resume Builder</h3>
                  <p className="ai-panel-desc">
                    Students input skills & experience; AI produces ATS-optimized resumes tailored to specific job descriptions.
                  </p>
                  <button className="btn-explore explore-resume" onClick={() => scrollToSection('ai-features')}>
                    Explore AI Resume Builder &rarr;
                  </button>
                </div>
                
                <div className="ai-panel-mockup">
                  <div className="mock-resume-container">
                    <div className="mock-resume-header">
                      <div className="resume-user-info">
                        <h4 className="resume-user-name">Rohit Sharma</h4>
                        <p className="resume-user-details">B.Tech CSE, 2026 | CGPA: 8.7</p>
                      </div>
                      <div className="resume-score-box">
                        <div className="ats-score-row">
                          <span className="ats-score-label">ATS Score:</span>
                          <span className="ats-score-val">94%</span>
                        </div>
                        <div className="ats-score-status text-green">Excellent match</div>
                      </div>
                    </div>
                    
                    <div className="mock-resume-bullets">
                      <div className="resume-bullet">
                        <span className="bullet-icon bg-light-green"><BsFileEarmarkCheck className="text-green" /></span>
                        <span className="bullet-text">Python, React, Node.js</span>
                      </div>
                      <div className="resume-bullet">
                        <span className="bullet-icon bg-light-green"><BsFileEarmarkCheck className="text-green" /></span>
                        <span className="bullet-text">ML Engineer Intern @ TCS</span>
                      </div>
                      <div className="resume-bullet">
                        <span className="bullet-icon bg-light-green"><BsFileEarmarkCheck className="text-green" /></span>
                        <span className="bullet-text">Winner &mdash; Smart India Hackathon 2023</span>
                      </div>
                    </div>
                    
                    <div className="mock-resume-actions">
                      <button className="btn-resume-pdf">Export PDF</button>
                      <button className="btn-resume-share">Share Link</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Campus Chat Panel */}
            {activeTab === 'chat' && (
              <div className="ai-panel chat-panel">
                <div className="ai-panel-info">
                  <div className="ai-panel-icon-box bg-light-yellow">
                    <img src={gifChatbot} alt="AI Campus Chat" className="gif-icon gif-icon-lg" />
                  </div>
                  <h3 className="ai-panel-title">AI Campus Chat</h3>
                  <p className="ai-panel-desc">
                    Instant answers to campus queries &mdash; fee deadlines, exam schedules, hostel rules &mdash; available 24/7 in 12 languages.
                  </p>
                  <button className="btn-explore explore-chat" onClick={() => scrollToSection('ai-features')}>
                    Explore AI Campus Chat &rarr;
                  </button>
                </div>
                
                <div className="ai-panel-mockup">
                  <div className="mock-campus-container">
                    <div className="mock-campus-header">
                      <div className="dash-dot-group">
                        <span className="dash-dot bg-red"></span>
                        <span className="dash-dot bg-yellow"></span>
                        <span className="dash-dot bg-green"></span>
                      </div>
                      <div className="campus-header-title">Virtual Assistant</div>
                    </div>
                    <div className="mock-campus-body">
                      {/* Msg 1 from Student */}
                      <div className="campus-msg msg-right">
                        <div className="campus-bubble bubble-purple">
                          When is the last date to pay semester fees?
                        </div>
                        <div className="campus-avatar avatar-user">
                          <BsPeople />
                        </div>
                      </div>
                      
                      {/* Msg 2 from AI */}
                      <div className="campus-msg msg-left">
                        <div className="campus-avatar avatar-ai bg-light-yellow">
                          <BsChatLeftText className="text-yellow" />
                        </div>
                        <div className="campus-bubble bubble-light">
                          The last date for Semester 3 fee payment is <strong>November 30, 2026</strong>. Late fee of ₹500/day applies after that. Want me to send you a payment link? 💳
                        </div>
                      </div>
                      
                      {/* Msg 3 from Student */}
                      <div className="campus-msg msg-right">
                        <div className="campus-bubble bubble-purple">
                          Yes please!
                        </div>
                        <div className="campus-avatar avatar-user">
                          <BsPeople />
                        </div>
                      </div>

                      {/* Msg 4 from AI */}
                      <div className="campus-msg msg-left">
                        <div className="campus-avatar avatar-ai bg-light-yellow">
                          <BsChatLeftText className="text-yellow" />
                        </div>
                        <div className="campus-bubble bubble-light">
                          Here&rsquo;s your personalized fee portal link. I&rsquo;ve also set a reminder 3 days before the deadline. 🔔
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 20+ Modules Section */}
      <section className="modules-section" id="modules">
        <div className="modules-container">
          <div className="modules-header" data-aos="fade-up">
            <span className="modules-badge">20+ Modules</span>
            <h2 className="modules-title">One platform. Every institutional function.</h2>
            <p className="modules-subtitle">
              From first enquiry to final placement &mdash; TalentOS covers the complete student lifecycle.
            </p>
          </div>

          <div className="modules-grid">
            {/* 1. Admissions */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="50">
              <div className="module-icon-wrapper icon-box-purple">
                <img src={gifUser} alt="Admissions" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Admissions</h3>
              <p className="module-desc">Online applications, merit lists, document verification</p>
            </div>

            {/* 2. LMS */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="100">
              <div className="module-icon-wrapper icon-box-blue">
                <img src={gifCertification} alt="LMS" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">LMS</h3>
              <p className="module-desc">Courses, video lectures, quizzes, live classes</p>
            </div>

            {/* 3. Fee Management */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="150">
              <div className="module-icon-wrapper icon-box-green">
                <img src={gifDollar} alt="Fee Management" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Fee Management</h3>
              <p className="module-desc">Collection, receipts, reminders, reports</p>
            </div>

            {/* 4. Attendance */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="200">
              <div className="module-icon-wrapper icon-box-cyan">
                <img src={gifClipboard} alt="Attendance" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Attendance</h3>
              <p className="module-desc">Biometric, RFID, mobile geo-fencing</p>
            </div>

            {/* 5. Examinations */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="50">
              <div className="module-icon-wrapper icon-box-orange">
                <img src={gifQuestion} alt="Examinations" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Examinations</h3>
              <p className="module-desc">Scheduling, seating, OMR, results, grades</p>
            </div>

            {/* 6. Timetable */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="100">
              <div className="module-icon-wrapper icon-box-pink">
                <img src={gifClipboard} alt="Timetable" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Timetable</h3>
              <p className="module-desc">Auto-generation, faculty allocation, conflict resolution</p>
            </div>

            {/* 7. Placements */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="150">
              <div className="module-icon-wrapper icon-box-violet">
                <img src={gifBriefcase} alt="Placements" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Placements</h3>
              <p className="module-desc">Company drives, offers, placement analytics</p>
            </div>

            {/* 8. Internship Portal */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="200">
              <div className="module-icon-wrapper icon-box-sky">
                <img src={gifWeb} alt="Internship Portal" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Internship Portal</h3>
              <p className="module-desc">Industry connections, applications, mentorship</p>
            </div>

            {/* 9. Job Portal */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="50">
              <div className="module-icon-wrapper icon-box-green">
                <img src={gifBriefcase} alt="Job Portal" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Job Portal</h3>
              <p className="module-desc">Job listings, applications, interview tracking</p>
            </div>

            {/* 10. Certificates */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="100">
              <div className="module-icon-wrapper icon-box-cyan">
                <img src={gifCertificate} alt="Certificates" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Certificates</h3>
              <p className="module-desc">Digital issuance, blockchain verification</p>
            </div>

            {/* 11. Analytics */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="150">
              <div className="module-icon-wrapper icon-box-orange">
                <img src={gifMindMap} alt="Analytics" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Analytics</h3>
              <p className="module-desc">Institution-wide insights and custom reports</p>
            </div>

            {/* 12. Resume Builder */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="200">
              <div className="module-icon-wrapper icon-box-pink">
                <img src={gifFile} alt="Resume Builder" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Resume Builder</h3>
              <p className="module-desc">AI-crafted, ATS-optimized resumes</p>
            </div>

            {/* 13. AI Tutor */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="50">
              <div className="module-icon-wrapper icon-box-purple">
                <img src={gifBrain} alt="AI Tutor" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">AI Tutor</h3>
              <p className="module-desc">Personalized learning assistant, 24/7</p>
            </div>

            {/* 14. AI Chat */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="100">
              <div className="module-icon-wrapper icon-box-blue">
                <img src={gifChatbot} alt="AI Chat" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">AI Chat</h3>
              <p className="module-desc">Campus bot answering queries in 12 languages</p>
            </div>

            {/* 15. Hostel Mgmt */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="150">
              <div className="module-icon-wrapper icon-box-green">
                <img src={gifUsers} alt="Hostel Management" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Hostel Mgmt</h3>
              <p className="module-desc">Room allotment, attendance, mess, complaints</p>
            </div>

            {/* 16. Super Admin */}
            <div className="module-card" data-aos="fade-up" data-aos-delay="200">
              <div className="module-icon-wrapper icon-box-cyan">
                <img src={gifMindMap} alt="Super Admin" className="gif-icon gif-icon-md" />
              </div>
              <h3 className="module-title">Super Admin</h3>
              <p className="module-desc">Multi-institution governance and controls</p>
            </div>
          </div>
        </div>
      </section>
      {/* Role-Based Experience Section */}
      <section className="roles-section" id="roles">
        <div className="roles-container">
          <div className="roles-header" data-aos="fade-up">
            <span className="roles-badge">Role-Based Experience</span>
            <h2 className="roles-title">Tailored for every stakeholder</h2>
            <p className="roles-subtitle">
              TalentOS presents the right information and tools to each user — no clutter, no confusion.
            </p>
          </div>

          {/* Role Tab Pills */}
          <div className="roles-tabs" data-aos="fade-up" data-aos-delay="100">
            {[
              { key: 'superadmin',     label: 'Super Admin',     icon: <BsShieldCheck /> },
              { key: 'instituteadmin', label: 'Institute Admin', icon: <BsBuilding /> },
              { key: 'principal',      label: 'Principal',       icon: <BsPersonBadge /> },
              { key: 'faculty',        label: 'Faculty',         icon: <BsPersonWorkspace /> },
              { key: 'student',        label: 'Student',         icon: <BsPersonCheck /> },
            ].map(role => (
              <button
                key={role.key}
                className={`role-tab-btn role-tab-${role.key} ${activeRole === role.key ? 'active' : ''}`}
                onClick={() => setActiveRole(role.key)}
              >
                <span className="role-tab-icon">{role.icon}</span>
                <span>{role.label}</span>
              </button>
            ))}
          </div>

          {/* Panel Content */}
          <div className="roles-panel-wrapper" data-aos="fade-up" data-aos-delay="200">

            {/* ── Super Admin ── */}
            {activeRole === 'superadmin' && (
              <div className="roles-panel rp-superadmin">
                <div className="rp-left">
                  <div className="rp-icon-box rp-icon-superadmin">
                    <BsShieldCheck />
                  </div>
                  <h3 className="rp-title">Built for the Super Admin</h3>
                  <p className="rp-desc">
                    Govern multiple institutions from a single command center. Real-time visibility across all campuses, financial consolidation, and centralized policy enforcement.
                  </p>
                  <ul className="rp-bullets rp-bullets-superadmin">
                    <li><BsClipboardCheck className="rp-bullet-icon" />Multi-institution dashboard</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Cross-campus analytics</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />User &amp; role management</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Audit logs &amp; compliance</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Financial consolidation</li>
                  </ul>
                  <button className="rp-cta-btn rp-cta-superadmin">See Super Admin Demo <BsArrowRight /></button>
                </div>
                <div className="rp-right">
                  <div className="rp-card">
                    <div className="rp-card-header rp-card-header-superadmin">
                      <span className="rp-card-icon rp-card-icon-superadmin"><BsShieldCheck /></span>
                      <span className="rp-card-title">Super Admin Portal</span>
                      <span className="rp-card-badge rp-badge-superadmin">Super Admin</span>
                    </div>
                    <ul className="rp-feature-list">
                      {['Multi-institution dashboard','Cross-campus analytics','User & role management','Audit logs & compliance','Financial consolidation'].map((item, i) => (
                        <li key={i} className="rp-feature-item rp-feature-item-superadmin">
                          <span className="rp-feature-num">0{i+1}</span>
                          <span className="rp-feature-name">{item}</span>
                          <BsChevronDown className="rp-feature-chevron" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ── Institute Admin ── */}
            {activeRole === 'instituteadmin' && (
              <div className="roles-panel rp-instituteadmin">
                <div className="rp-left">
                  <div className="rp-icon-box rp-icon-instituteadmin">
                    <BsBuilding />
                  </div>
                  <h3 className="rp-title">Built for the Institute Admin</h3>
                  <p className="rp-desc">
                    Run day-to-day operations effortlessly — from managing staff and timetables to approving fee waivers and generating board reports.
                  </p>
                  <ul className="rp-bullets rp-bullets-instituteadmin">
                    <li><BsClipboardCheck className="rp-bullet-icon" />Staff &amp; faculty onboarding</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Fee &amp; collection oversight</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Timetable management</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Report generation</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Parent communication</li>
                  </ul>
                  <button className="rp-cta-btn rp-cta-instituteadmin">See Institute Admin Demo <BsArrowRight /></button>
                </div>
                <div className="rp-right">
                  <div className="rp-card">
                    <div className="rp-card-header rp-card-header-instituteadmin">
                      <span className="rp-card-icon rp-card-icon-instituteadmin"><BsBuilding /></span>
                      <span className="rp-card-title">Institute Admin Portal</span>
                      <span className="rp-card-badge rp-badge-instituteadmin">Institute Admin</span>
                    </div>
                    <ul className="rp-feature-list">
                      {['Staff & faculty onboarding','Fee & collection oversight','Timetable management','Report generation','Parent communication'].map((item, i) => (
                        <li key={i} className="rp-feature-item rp-feature-item-instituteadmin">
                          <span className="rp-feature-num">0{i+1}</span>
                          <span className="rp-feature-name">{item}</span>
                          <BsChevronDown className="rp-feature-chevron" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ── Principal ── */}
            {activeRole === 'principal' && (
              <div className="roles-panel rp-principal">
                <div className="rp-left">
                  <div className="rp-icon-box rp-icon-principal">
                    <BsMortarboard />
                  </div>
                  <h3 className="rp-title">Built for the Principal</h3>
                  <p className="rp-desc">
                    Stay on top of academic performance, attendance trends, and student welfare with actionable dashboards and alerts.
                  </p>
                  <ul className="rp-bullets rp-bullets-principal">
                    <li><BsClipboardCheck className="rp-bullet-icon" />Academic performance view</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Defaulter alerts</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Faculty evaluation</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Department-wise analytics</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Meeting scheduler</li>
                  </ul>
                  <button className="rp-cta-btn rp-cta-principal">See Principal Demo <BsArrowRight /></button>
                </div>
                <div className="rp-right">
                  <div className="rp-card">
                    <div className="rp-card-header rp-card-header-principal">
                      <span className="rp-card-icon rp-card-icon-principal"><BsMortarboard /></span>
                      <span className="rp-card-title">Principal Portal</span>
                      <span className="rp-card-badge rp-badge-principal">Principal</span>
                    </div>
                    <ul className="rp-feature-list">
                      {['Academic performance view','Defaulter alerts','Faculty evaluation','Department-wise analytics','Meeting scheduler'].map((item, i) => (
                        <li key={i} className="rp-feature-item rp-feature-item-principal">
                          <span className="rp-feature-num">0{i+1}</span>
                          <span className="rp-feature-name">{item}</span>
                          <BsChevronDown className="rp-feature-chevron" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ── Faculty ── */}
            {activeRole === 'faculty' && (
              <div className="roles-panel rp-faculty">
                <div className="rp-left">
                  <div className="rp-icon-box rp-icon-faculty">
                    <BsPersonWorkspace />
                  </div>
                  <h3 className="rp-title">Built for the Faculty</h3>
                  <p className="rp-desc">
                    Teach, assess, and track students with an intuitive toolkit — upload content, mark attendance, set exams, and provide AI-assisted feedback.
                  </p>
                  <ul className="rp-bullets rp-bullets-faculty">
                    <li><BsClipboardCheck className="rp-bullet-icon" />Course content builder</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />One-click attendance</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Assignment grading</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />AI question generator</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Student progress tracking</li>
                  </ul>
                  <button className="rp-cta-btn rp-cta-faculty">See Faculty Demo <BsArrowRight /></button>
                </div>
                <div className="rp-right">
                  <div className="rp-card">
                    <div className="rp-card-header rp-card-header-faculty">
                      <span className="rp-card-icon rp-card-icon-faculty"><BsPersonWorkspace /></span>
                      <span className="rp-card-title">Faculty Portal</span>
                      <span className="rp-card-badge rp-badge-faculty">Faculty</span>
                    </div>
                    <ul className="rp-feature-list">
                      {['Course content builder','One-click attendance','Assignment grading','AI question generator','Student progress tracking'].map((item, i) => (
                        <li key={i} className="rp-feature-item rp-feature-item-faculty">
                          <span className="rp-feature-num">0{i+1}</span>
                          <span className="rp-feature-name">{item}</span>
                          <BsChevronDown className="rp-feature-chevron" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ── Student ── */}
            {activeRole === 'student' && (
              <div className="roles-panel rp-student">
                <div className="rp-left">
                  <div className="rp-icon-box rp-icon-student">
                    <BsPeople />
                  </div>
                  <h3 className="rp-title">Built for the Student</h3>
                  <p className="rp-desc">
                    Everything a student needs — lectures, assignments, fees, grades, placement prep, and an AI tutor — all in one beautiful app.
                  </p>
                  <ul className="rp-bullets rp-bullets-student">
                    <li><BsClipboardCheck className="rp-bullet-icon" />Personalized AI tutor</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Live &amp; recorded classes</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Fee payment portal</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />Placement portal access</li>
                    <li><BsClipboardCheck className="rp-bullet-icon" />AI resume builder</li>
                  </ul>
                  <button className="rp-cta-btn rp-cta-student">See Student Demo <BsArrowRight /></button>
                </div>
                <div className="rp-right">
                  <div className="rp-card">
                    <div className="rp-card-header rp-card-header-student">
                      <span className="rp-card-icon rp-card-icon-student"><BsPeople /></span>
                      <span className="rp-card-title">Student Portal</span>
                      <span className="rp-card-badge rp-badge-student">Student</span>
                    </div>
                    <ul className="rp-feature-list">
                      {['Personalized AI tutor','Live & recorded classes','Fee payment portal','Placement portal access','AI resume builder'].map((item, i) => (
                        <li key={i} className="rp-feature-item rp-feature-item-student">
                          <span className="rp-feature-num">0{i+1}</span>
                          <span className="rp-feature-name">{item}</span>
                          <BsChevronDown className="rp-feature-chevron" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Analytics & Insights Section */}
      <section className="analytics-section" id="analytics">
        <div className="analytics-container">

          {/* Header */}
          <div className="analytics-header" data-aos="fade-up">
            <span className="analytics-badge">Analytics &amp; Insights</span>
            <h2 className="analytics-title">Data-driven decisions,<br />institution-wide</h2>
            <p className="analytics-subtitle">
              Real-time dashboards surface the metrics that matter — enrollment, revenue, attendance,
              placements — so leadership acts on facts, not feelings.
            </p>
          </div>

          {/* Charts Row */}
          <div className="analytics-charts-row" data-aos="fade-up" data-aos-delay="100">

            {/* Chart 1 — Enrollment & Revenue Trend */}
            <div className="analytics-chart-card analytics-chart-card--wide">
              <div className="accard-header">
                <div className="accard-title-group">
                  <h3 className="accard-title">Enrollment &amp; Revenue Trend</h3>
                  <p className="accard-subtitle">Jan – Aug 2026</p>
                </div>
                <span className="accard-live-badge">
                  <span className="live-dot"></span>
                  Live
                </span>
              </div>
              <div className="accard-legend">
                <span className="accard-legend-item">
                  <span className="legend-dot legend-dot--indigo"></span>Students
                </span>
                <span className="accard-legend-item">
                  <span className="legend-dot legend-dot--green"></span>Revenue (₹L)
                </span>
              </div>
              <div className="accard-chart-wrap">
                <canvas ref={enrollmentChartRef}></canvas>
              </div>
            </div>

            {/* Chart 2 — Students by Department */}
            <div className="analytics-chart-card">
              <div className="accard-header">
                <div className="accard-title-group">
                  <h3 className="accard-title">Students by Department</h3>
                  <p className="accard-subtitle">Current semester</p>
                </div>
              </div>
              <div className="accard-chart-wrap accard-chart-wrap--bar">
                <canvas ref={deptChartRef}></canvas>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Fee Collection + KPI Section */}
      <section className="fee-kpi-section" id="fee-kpi">
        <div className="fee-kpi-container">

          {/* Left — Fee Collection Donut */}
          <div className="fee-card">
            <div className="fee-card-header">
              <h3 className="fee-card-title">Fee Collection Mode</h3>
              <p className="fee-card-subtitle">Current month breakdown</p>
            </div>
            <div className="fee-card-body">
              <div className="fee-donut-wrap">
                <canvas ref={feeChartRef}></canvas>
              </div>
              <div className="fee-legend">
                <div className="fee-legend-item">
                  <span className="fee-legend-dot" style={{ background: '#6366f1' }}></span>
                  <span className="fee-legend-label">Online</span>
                  <span className="fee-legend-pct">45%</span>
                </div>
                <div className="fee-legend-item">
                  <span className="fee-legend-dot" style={{ background: '#06b6d4' }}></span>
                  <span className="fee-legend-label">Cash</span>
                  <span className="fee-legend-pct">25%</span>
                </div>
                <div className="fee-legend-item">
                  <span className="fee-legend-dot" style={{ background: '#10b981' }}></span>
                  <span className="fee-legend-label">UPI</span>
                  <span className="fee-legend-pct">20%</span>
                </div>
                <div className="fee-legend-item">
                  <span className="fee-legend-dot" style={{ background: '#f59e0b' }}></span>
                  <span className="fee-legend-label">Cheque</span>
                  <span className="fee-legend-pct">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — KPI Grid */}
          <div className="kpi-card">
            <h3 className="kpi-card-title">Key Performance Indicators</h3>
            <div className="kpi-grid" ref={kpiSectionRef}>

              <div className="kpi-item">
                <span className="kpi-item-label">Avg Attendance</span>
                <KpiCounter end={96.8} decimals={1} suffix="%" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--up">+1.2% vs last month</span>
              </div>

              <div className="kpi-item">
                <span className="kpi-item-label">Pass Rate</span>
                <KpiCounter end={91.4} decimals={1} suffix="%" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--up">+3.1% vs last month</span>
              </div>

              <div className="kpi-item">
                <span className="kpi-item-label">Placement Rate</span>
                <KpiCounter end={87.2} decimals={1} suffix="%" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--up">+14% vs last month</span>
              </div>

              <div className="kpi-item">
                <span className="kpi-item-label">Fee Default Rate</span>
                <KpiCounter end={2.3} decimals={1} suffix="%" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--down">-0.8% vs last month</span>
              </div>

              <div className="kpi-item">
                <span className="kpi-item-label">Avg CGPA</span>
                <KpiCounter end={7.84} decimals={2} suffix="" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--up">+0.12 vs last month</span>
              </div>

              <div className="kpi-item">
                <span className="kpi-item-label">Support Tickets</span>
                <KpiCounter end={18} decimals={0} suffix="" trigger={kpiVisible} />
                <span className="kpi-item-trend kpi-trend--down">-42% vs last month</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-container">
          
          {/* Header */}
          <div className="testimonials-header" data-aos="fade-up">
            <span className="testimonials-badge">Testimonials</span>
            <h2 className="testimonials-title">Trusted by educators who<br />demand excellence</h2>
            <p className="testimonials-subtitle">
              Hear from the administrators, principals, and faculty who run their institutions on TalentOS.
            </p>
          </div>

          {/* Testimonial Card Slider */}
          <div className="testimonial-slider-wrapper" data-aos="fade-up" data-aos-delay="100">
            {testimonials.map((testimonial, index) => {
              if (index !== currentTestimonial) return null;
              return (
                <div key={testimonial.id} className="testimonial-card">
                  {/* Subtle decorative glow */}
                  <div 
                    className="testimonial-card-glow" 
                    style={{ 
                      background: `radial-gradient(circle at 80% 20%, ${testimonial.color}15 0%, transparent 60%)`
                    }}
                  ></div>
                  
                  {/* Star rating */}
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <BsStarFill key={i} className="star-icon" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="testimonial-text">
                    {testimonial.text}
                  </blockquote>

                  {/* Author profile */}
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{ backgroundColor: testimonial.color }}>
                      {testimonial.initials}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.authorName}</h4>
                      <p className="author-role">{testimonial.authorRole}</p>
                    </div>
                  </div>

                  {/* Pagination Dots at the bottom of the card */}
                  <div className="testimonial-dots">
                    {testimonials.map((t, idx) => (
                      <button
                        key={t.id}
                        className={`testimonial-dot ${idx === currentTestimonial ? 'active' : ''}`}
                        style={{
                          backgroundColor: idx === currentTestimonial ? t.color : undefined
                        }}
                        onClick={() => setCurrentTestimonial(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Slider Navigation Controls (Below the card) */}
            <div className="testimonial-controls">
              <button 
                className="control-btn prev-btn" 
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
              >
                <BsChevronLeft />
              </button>
              <button 
                className="control-btn next-btn" 
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          
          {/* Header */}
          <div className="pricing-header" data-aos="fade-up">
            <span className="pricing-badge">Transparent Pricing</span>
            <h2 className="pricing-title">Invest in your institution's future</h2>
            <p className="pricing-subtitle">
              No hidden fees, no per-module pricing. Get everything you need in one plan.
            </p>
            
            {/* Toggle Switch */}
            <div className="pricing-toggle-container">
              <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
              <button 
                className="pricing-toggle-switch" 
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label="Toggle billing cycle"
              >
                <span className={`toggle-knob ${isAnnual ? 'annual' : 'monthly'}`} />
              </button>
              <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
                Annual <span className="toggle-discount">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid">
            
            {/* Starter Plan */}
            <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-card-header">
                <h3 className="plan-name">Starter</h3>
                <p className="plan-desc">Perfect for small schools and coaching institutes up to 500 students.</p>
              </div>
              <div className="pricing-card-price">
                <div className="price-amount-wrapper">
                  <span className="price-currency">₹</span>
                  <span className="price-val">{isAnnual ? '4,999' : '5,999'}</span>
                  <span className="price-period">/month</span>
                </div>
                <p className={`price-billed-info ${isAnnual ? 'visible' : ''}`}>
                  {isAnnual ? 'Billed annually · Save 20%' : 'Billed monthly'}
                </p>
              </div>
              <div className="pricing-card-action">
                <button className="pricing-btn pricing-btn-outline" onClick={() => scrollToSection('pricing')}>
                  Start Free Trial
                </button>
              </div>
              <ul className="plan-features">
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> Up to 500 students</li>
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> Admissions &amp; Attendance</li>
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> Fee Management</li>
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> Basic LMS</li>
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> Email &amp; Chat Support</li>
                <li><span className="feat-icon icon-teal"><BsCheck2 /></span> 2 Admin users</li>
              </ul>
            </div>

            {/* Growth Plan (Most Popular) */}
            <div className="pricing-card pricing-card-featured" data-aos="fade-up" data-aos-delay="200">
              <span className="popular-badge">Most Popular</span>
              <div className="pricing-card-header">
                <h3 className="plan-name">Growth</h3>
                <p className="plan-desc">For mid-size colleges seeking full ERP with AI capabilities.</p>
              </div>
              <div className="pricing-card-price">
                <div className="price-amount-wrapper">
                  <span className="price-currency">₹</span>
                  <span className="price-val">{isAnnual ? '12,999' : '15,999'}</span>
                  <span className="price-period">/month</span>
                </div>
                <p className={`price-billed-info ${isAnnual ? 'visible' : ''}`}>
                  {isAnnual ? 'Billed annually · Save 20%' : 'Billed monthly'}
                </p>
              </div>
              <div className="pricing-card-action">
                <button className="pricing-btn pricing-btn-primary" onClick={() => scrollToSection('pricing')}>
                  Start Free Trial
                </button>
              </div>
              <ul className="plan-features">
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> Up to 5,000 students</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> All Starter features</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> Full LMS + Live Classes</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> AI Tutor &amp; Question Generator</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> Exam &amp; Timetable Management</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> Placement Portal</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> Priority Support</li>
                <li><span className="feat-icon icon-indigo"><BsCheck2 /></span> 10 Admin users</li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pricing-card-header">
                <h3 className="plan-name">Enterprise</h3>
                <p className="plan-desc">Multi-campus institutions with custom requirements and SLA guarantees.</p>
              </div>
              <div className="pricing-card-price">
                <div className="price-amount-wrapper">
                  <span className="price-val price-val-custom">Custom</span>
                </div>
                <p className="price-billed-info visible" style={{ visibility: 'hidden' }}>Spacer</p>
              </div>
              <div className="pricing-card-action">
                <button className="pricing-btn pricing-btn-outline" onClick={() => scrollToSection('pricing')}>
                  Contact Sales
                </button>
              </div>
              <ul className="plan-features">
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> Unlimited students</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> All Growth features</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> Multi-institution governance</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> Custom integrations &amp; APIs</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> Dedicated success manager</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> 99.99% uptime SLA</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> On-premise / private cloud</li>
                <li><span className="feat-icon icon-slate"><BsCheck2 /></span> Custom branding</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="security-section" id="security">
        <div className="security-container">
          
          {/* Header */}
          <div className="security-header" data-aos="fade-up">
            <span className="security-badge">Security &amp; Compliance</span>
            <h2 className="security-title">Enterprise-grade security you<br />can trust</h2>
            <p className="security-subtitle">
              Student data is sacrosanct. TalentOS is built from the ground up with privacy, compliance, and resilience as first-class concerns.
            </p>
          </div>

          {/* Security Cards Grid */}
          <div className="security-grid" data-aos="fade-up" data-aos-delay="100">
            
            {/* Card 1: AES-256 Encryption */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-purple">
                <BsLock />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">AES-256 Encryption</h3>
                <p className="sec-card-desc">
                  All data encrypted at rest and in transit using bank-grade AES-256 encryption.
                </p>
              </div>
            </div>

            {/* Card 2: SOC 2 Type II */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-green">
                <BsShieldCheck />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">SOC 2 Type II</h3>
                <p className="sec-card-desc">
                  Independently audited security controls meeting the highest enterprise standards.
                </p>
              </div>
            </div>

            {/* Card 3: GDPR & DPDP Compliant */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-blue">
                <BsEye />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">GDPR &amp; DPDP Compliant</h3>
                <p className="sec-card-desc">
                  Full compliance with India's DPDP Act 2023 and EU GDPR for student data protection.
                </p>
              </div>
            </div>

            {/* Card 4: 99.99% Uptime SLA */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-teal">
                <BsDatabase />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">99.99% Uptime SLA</h3>
                <p className="sec-card-desc">
                  Geo-redundant infrastructure on AWS with automatic failover and zero-downtime deploys.
                </p>
              </div>
            </div>

            {/* Card 5: Open API & Webhooks */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-orange">
                <BsCodeSlash />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">Open API &amp; Webhooks</h3>
                <p className="sec-card-desc">
                  Integrate with your existing HRMS, library, and biometric systems via documented REST APIs.
                </p>
              </div>
            </div>

            {/* Card 6: NAAC/NIRF Ready Reports */}
            <div className="security-card">
              <div className="sec-icon-box sec-icon-pink">
                <BsFileEarmarkCheck />
              </div>
              <div className="sec-card-content">
                <h3 className="sec-card-title">NAAC/NIRF Ready Reports</h3>
                <p className="sec-card-desc">
                  Auto-generate NAAC, NIRF, and AISHE compliance reports with a single click.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="faq-container" data-aos="fade-up">
          
          <div className="faq-header">
            <span className="faq-badge">Frequently Asked Questions</span>
            <h2 className="faq-title">Everything you need to know</h2>
            <p className="faq-subtitle">
              Can't find your answer? Our team is happy to help.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="faq-question">{item.question}</span>
                  <div className="faq-icon-wrapper">
                    <BsChevronDown />
                  </div>
                </button>
                <div 
                  className="faq-answer-wrapper"
                  style={{ maxHeight: activeFaq === index ? '200px' : '0px' }}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta">
        <div className="cta-container" data-aos="fade-up">
          <div className="cta-card">
            <div className="cta-badge">
              <LuSparkles className="cta-badge-icon" />
              <span>Start in under 10 minutes</span>
            </div>
            <h2 className="cta-title">Ready to transform your institution?</h2>
            <p className="cta-description">
              Join 12,000+ institutions already running on TalentOS. Free 30-day trial, no credit card required.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary" onClick={() => scrollToSection('pricing')}>
                Start Free Trial — No CC Required
              </button>
              <button className="cta-btn cta-btn-secondary" onClick={() => scrollToSection('pricing')}>
                Book a 30-min Demo
              </button>
            </div>
            <div className="cta-checklist">
              <span className="cta-check-item">✓ 30-day free trial</span>
              <span className="cta-bullet">•</span>
              <span className="cta-check-item">✓ No credit card</span>
              <span className="cta-bullet">•</span>
              <span className="cta-check-item">✓ 24/7 onboarding support</span>
              <span className="cta-bullet">•</span>
              <span className="cta-check-item">✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Column 1: Brand Info */}
            <div className="footer-col brand-col">
              <a href="#talent-top" className="nav-logo-wrapper footer-logo" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>
                <div className="nav-logo-icon-container">
                  <BsMortarboardFill />
                </div>
                <div className="nav-logo-text">
                  Artlysoft <span>TalentOS</span>
                </div>
              </a>
              <p className="footer-tagline">
                The AI-powered Education Management Platform for forward-thinking institutions.
              </p>
              <div className="footer-socials">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter X">
                  <BsTwitterX />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <BsLinkedin />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <BsYoutube />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <BsGithub />
                </a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="#ai-features" onClick={(e) => { e.preventDefault(); scrollToSection('ai-features'); }}>Features</a></li>
                <li><a href="#ai-features" onClick={(e) => { e.preventDefault(); scrollToSection('ai-features'); }}>AI Suite</a></li>
                <li><a href="#modules" onClick={(e) => { e.preventDefault(); scrollToSection('modules'); }}>Modules</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Changelog</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Roadmap</a></li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Solutions</h4>
              <ul className="footer-links">
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>School ERP</a></li>
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>College ERP</a></li>
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>University ERP</a></li>
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>Institute Management</a></li>
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>Coaching Centers</a></li>
                <li><a href="#analytics" onClick={(e) => { e.preventDefault(); scrollToSection('analytics'); }}>K-12</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Documentation</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>API Reference</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Blog</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Case Studies</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Webinars</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Community</a></li>
              </ul>
            </div>

            {/* Column 5: Company */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>About Artlysoft</a></li>
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>Careers</a></li>
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>Press Kit</a></li>
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>Partners</a></li>
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>Contact Us</a></li>
                <li><a href="#talent-top" onClick={(e) => { e.preventDefault(); scrollToSection('talent-top'); }}>Legal</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Artlysoft Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#security" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>Privacy Policy</a>
              <a href="#security" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>Terms of Service</a>
              <a href="#security" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>Cookie Policy</a>
              <a href="#security" onClick={(e) => { e.preventDefault(); scrollToSection('security'); }}>Security</a>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Fixed Floating "Back to Artlysoft" Button removed - replaced by global FloatingNav */}
    </>
  );
}

export default Home;
