import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import par2Img from '../assets/images/Par2.jpg';
import brochurePdf from '../assets/pdf/Artlysoft_Full_Stack_Training_Program_Brochure_2026.pdf';
import assessmentIcon from '../assets/gifs/assessment.svg';
import codeIcon from '../assets/gifs/code.svg';
import consultingIcon from '../assets/gifs/consulting.svg';
import activitiesIcon from '../assets/gifs/activities.svg';
import ecosystemIcon from '../assets/gifs/ecosystem.svg';
import strategyIcon from '../assets/gifs/it_strategy.svg';
import processIcon from '../assets/gifs/process_optimization.svg';
import webMobileIcon from '../assets/gifs/web_mobile_apps.svg';
import qualityIcon from '../assets/gifs/quality_documentation.svg';
import aimlIcon from '../assets/gifs/aiml.svg';
import databaseIcon from '../assets/gifs/database.svg';
import automationIcon from '../assets/gifs/automation.svg';
import userCentricIcon from '../assets/gifs/user_centric_design.svg';
import callIcon from '../assets/gifs/call_icon.svg';
import '../assets/style/Training.css';
import heroVideo from '../assets/videos/Hero Pages/coding.mp4';

// Section 1: Hero Stats
const heroStats = [
  { value: '100%', label: 'Online Live Classes' },
  { value: '6 Months', label: 'Program Duration' },
  { value: '350+ Hrs', label: 'Instructional Content' },
  { value: '100%', label: 'Placement Support' }
];

// Section 2: Training Philosophy Pillars
const philosophyPillars = [
  {
    number: '1',
    title: 'Industry Relevance',
    icon: strategyIcon,
    description: 'Curriculum aligned with current market demands and evolving industry standards.',
    accent: 'accent-gold'
  },
  {
    number: '2',
    title: 'Practical Application',
    icon: codeIcon,
    description: 'Real-world projects, live coding exercises, and hands-on case studies.',
    accent: 'accent-slate'
  },
  {
    number: '3',
    title: 'Career Support',
    icon: consultingIcon,
    description: 'Comprehensive placement assistance, profile optimization, and expert mentorship.',
    accent: 'accent-teal'
  }
];

// Section 3: Program Overview Cards
const overviewCards = [
  {
    title: 'Program Format',
    value: '100% Online',
    detail: 'Live Instructor-Led Sessions',
    icon: webMobileIcon,
    accent: 'accent-blue'
  },
  {
    title: 'Program Duration',
    value: '6 Months',
    detail: 'Flexible scheduling available',
    icon: processIcon,
    accent: 'accent-gold'
  },
  {
    title: 'Learning Hours',
    value: '350+ Hours',
    detail: 'Instructional content & hands-on labs',
    icon: qualityIcon,
    accent: 'accent-slate'
  },
  {
    title: 'Batch Size',
    value: 'Small Cohorts',
    detail: '15-20 students for personalized attention',
    icon: userCentricIcon,
    accent: 'accent-teal'
  }
];

// Section 4: Key Highlights (10 Features)
const keyHighlights = [
  { id: '1', title: 'Industry-Oriented Curriculum', desc: 'Designed with input from senior developers and tech leads.' },
  { id: '2', title: 'Live Interactive Online Classes', desc: 'Real-time doubt clarification and hands-on guidance.' },
  { id: '3', title: 'Hands-on Coding & Projects', desc: 'Build 5+ complete projects during the course.' },
  { id: '4', title: 'Case Studies & Capstone', desc: 'Work on enterprise-level application development.' },
  { id: '5', title: 'Resume & Interview Support', desc: 'Professional resume building and mock interviews.' },
  { id: '6', title: '100% Placement Assistance', desc: 'Job referrals through our partner network.' },
  { id: '7', title: 'Lifetime Learning Access', desc: 'Recorded sessions and resources available forever.' },
  { id: '8', title: 'Expert Mentorship', desc: 'Learn from developers with 5+ years experience.'},
  { id: '9', title: 'Suitable for All Levels', desc: 'Beginners, career switchers, and professionals welcome.' },
  { id: '10', title: 'Certificate of Completion', desc: 'Recognized credential for job applications.' }
];

// Section 5: Why Choose Artlysoft
const whyChooseReasons = [
  {
    title: 'Real Industry Exposure',
    icon: strategyIcon,
    accent: 'accent-gold',
    desc: 'Our curriculum is constantly updated based on market trends and feedback from industry partners. You will learn technologies that companies are actively hiring for right now.'
  },
  {
    title: 'Project-Based Learning',
    icon: codeIcon,
    accent: 'accent-slate',
    desc: "Instead of just theory, you'll build real applications from day one. Our project-based approach ensures you have a portfolio ready by the time you finish the course."
  },
  {
    title: 'Mentorship from Experienced Professionals',
    icon: consultingIcon,
    accent: 'accent-teal',
    desc: 'Learn directly from developers and architects working in top companies. Get insights into industry practices, best coding standards, and career growth strategies.'
  },
  {
    title: 'Career-Focused Support',
    icon: processIcon,
    accent: 'accent-gold',
    desc: 'From resume building to interview preparation, we support every step of your job search journey with dedicated placement referrals.'
  },
  {
    title: '100% Online Flexibility',
    icon: webMobileIcon,
    accent: 'accent-slate',
    desc: 'Study from anywhere, at any time. Balance your learning with work, college, or other personal commitments.'
  }
];

// Section 6: Learning Path Stages
const learningStages = [
  {
    stage: 'STAGE 1',
    title: 'CONCEPTUAL FOUNDATION',
    icon: assessmentIcon,
    desc: 'Build strong fundamentals in programming concepts, data structures, and object-oriented programming.'
  },
  {
    stage: 'STAGE 2',
    title: 'HANDS-ON CODING SESSIONS',
    icon: codeIcon,
    desc: 'Engage in live coding sessions where instructors demonstrate real-world problem-solving techniques.'
  },
  {
    stage: 'STAGE 3',
    title: 'ASSIGNMENTS & ASSESSMENTS',
    icon: qualityIcon,
    desc: 'Complete regular assignments to reinforce learning, test comprehension, and track your progress.'
  },
  {
    stage: 'STAGE 4',
    title: 'REAL-TIME PROJECT DEVELOPMENT',
    icon: ecosystemIcon,
    desc: 'Work on mini-projects that mirror industry applications, API integrations, and software best practices.'
  },
  {
    stage: 'STAGE 5',
    title: 'CAPSTONE PROJECT',
    icon: automationIcon,
    desc: 'Develop a complete, production-ready full-stack application from requirements gathering to deployment.'
  },
  {
    stage: 'STAGE 6',
    title: 'INTERVIEW PREPARATION & SOFT SKILLS',
    icon: userCentricIcon,
    desc: 'Learn technical interview techniques, communication skills, resume building, and professional development essentials.'
  },
  {
    stage: 'STAGE 7',
    title: 'PLACEMENT ASSISTANCE',
    icon: consultingIcon,
    desc: 'Receive direct job referrals, profile optimization, recruiter connections, and ongoing career guidance.'
  }
];

// Section 7: Tech Stack Covered
const techStackCategories = [
  {
    number: '01',
    category: 'Frontend',
    icon: webMobileIcon,
    items: [
      { name: 'HTML5 & CSS3', detail: 'Semantic markup, Flexbox, Grid' },
      { name: 'JavaScript', detail: 'ES6+, DOM, Async/Await, Promises' },
      { name: 'React.js', detail: 'Hooks, Redux, Context API, Router' },
      { name: 'Bootstrap / CSS Modules', detail: 'Responsive UI Design' }
    ]
  },
  {
    number: '02',
    category: 'Backend',
    icon: codeIcon,
    items: [
      { name: 'Java', detail: 'Core & Advanced Java, OOPs concepts' },
      { name: 'Spring Boot', detail: 'REST APIs, Microservices, Spring Security' },
      { name: 'Python', detail: 'Django / Flask fundamentals' },
      { name: 'System Design', detail: 'Scalable architecture & patterns' }
    ]
  },
  {
    number: '03',
    category: 'Database & DevOps',
    icon: databaseIcon,
    items: [
      { name: 'SQL', detail: 'MySQL / PostgreSQL, Complex Queries' },
      { name: 'NoSQL', detail: 'MongoDB basics & document stores' },
      { name: 'DevOps', detail: 'Docker, CI/CD Pipelines, Cloud deployment' },
      { name: 'Tools', detail: 'Git, GitHub, Jira, Postman' }
    ]
  }
];

// Section 8: Who Can Apply
const applicantGroups = [
  {
    title: 'STUDENTS & FRESH GRADUATES',
    accent: 'accent-gold',
    points: [
      'Looking to start a rewarding career in software development',
      'Want practical hands-on experience before entering the job market'
    ]
  },
  {
    title: 'CAREER SWITCHERS',
    accent: 'accent-slate',
    points: [
      'Professionals from non-IT backgrounds interested in software engineering',
      'Existing IT professionals looking to upskill in full stack development'
    ]
  },
  {
    title: 'WORKING IT PROFESSIONALS',
    accent: 'accent-teal',
    points: [
      'Wanting to expand their skillset to modern tech stacks',
      'Aiming for career growth, promotion, and better compensation'
    ]
  },
  {
    title: 'NON-IT BACKGROUND CANDIDATES',
    accent: 'accent-blue',
    points: [
      'Passionate about coding, problem-solving, and technology',
      'Willing to invest time in dedicated structured learning and practice'
    ]
  }
];

// Section 9: Career Opportunities
const careerRoles = [
  { title: 'FULL STACK DEVELOPER', desc: 'Design and develop complete web applications', icon: codeIcon },
  { title: 'JAVA DEVELOPER', desc: 'Develop enterprise-level applications & APIs', icon: webMobileIcon },
  { title: 'SOFTWARE ENGINEER', desc: 'Work on complex software systems & algorithms', icon: qualityIcon },
  { title: 'PYTHON DEVELOPER', desc: 'Build backend services, scripts & automation tools', icon: aimlIcon },
  { title: 'BACKEND DEVELOPER', desc: 'Focus on server-side logic, databases & microservices', icon: databaseIcon }
];

// Section 10: Enrollment Steps
const enrollmentSteps = [
  { step: '01', title: 'Register', desc: 'Fill out the enquiry form on our website' },
  { step: '02', title: 'Attend Free Demo', desc: 'Join a live demo session to understand the teaching style' },
  { step: '03', title: 'Confirm Enrollment', desc: 'Complete registration after counseling and confirmation' },
  { step: '04', title: 'Get Started', desc: 'Receive access to course materials and attend your first class' }
];

const Training = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // ── Parallax: Contact & Enrollment section ──
  const par2BgRef = useRef(null);
  const enrollWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !par2BgRef.current || !enrollWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(par2BgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: enrollWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    qualification: 'Student',
    interestedCourse: 'Full Stack Python & Java',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields (Full Name, Email Address, Phone Number).');
      return;
    }

    // Step 1: Trigger direct brochure download
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.download = 'Artlysoft_training_brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Step 2: Show success alert
    setFormSubmitted(true);

    // Step 3: Construct & send form details to WhatsApp (+91 9901718700)
    let messageText = `Hello Artlysoft Team, I have submitted a training enquiry!\n\n` +
      `📌 Name: ${formData.fullName.trim()}\n` +
      `📌 Phone: ${formData.phone.trim()}\n` +
      `📌 Email: ${formData.email.trim()}\n` +
      `📌 Qualification: ${formData.qualification}\n` +
      `📌 Interested Program: ${formData.interestedCourse}`;

    if (formData.message && formData.message.trim() !== '') {
      messageText += `\n📌 Message/Queries: ${formData.message.trim()}`;
    }

    messageText += `\n\nDownloaded your PDF brochure successfully.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919901718700&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Step 4: Reset form inputs
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      qualification: 'Student',
      interestedCourse: 'Full Stack Python & Java',
      message: ''
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const scrollToEnrollment = () => {
    const section = document.getElementById('enrollment-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="training-page">
      <section className="training-hero-section">
        <div className="training-hero-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="training-hero-content">
            <div className="training-hero-badge">
              <span className="training-hero-badge-dot"></span>
              Training Programs
            </div>
            <h1 className="training-hero-title">
              Bridge Academia &amp; Real-World Tech
            </h1>
            <p className="training-hero-desc">
              Gain practical, job-oriented learning in Software Development, Python, AI-enabled solutions, DevOps, and Enterprise IT. Emphasizing hands-on practice, real-time projects, and problem-solving.
            </p>
          </div>
          <div className="training-hero-video-wrapper">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="training-hero-video"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR TRAINING PHILOSOPHY */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">OUR TRAINING PHILOSOPHY CENTERS ON THREE CORE PILLARS</h2>
          <p className="training-section-subtitle">
            We focus on job readiness through real-world skills, expert mentorship, and industry-oriented practice.
          </p>
        </div>

        <div className="philosophy-grid">
          {philosophyPillars.map((pillar) => (
            <div key={pillar.number} className={`philosophy-card ${pillar.accent}`}>
              <div className="philosophy-pillar-number">{pillar.number}</div>
              <div className="philosophy-icon-box">
                <img src={pillar.icon} alt={pillar.title} className="philosophy-icon" />
              </div>
              <h3 className="philosophy-card-title">{pillar.title}</h3>
              <p className="philosophy-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PROGRAM OVERVIEW */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">PROGRAM OVERVIEW</h2>
          <p className="training-section-subtitle">
            The Full Stack Python & Java Online Training Program is a comprehensive, career-focused program designed for students, fresh graduates, working professionals, and career switchers who aspire to become full stack developers.
          </p>
        </div>

        <div className="overview-summary-box">
          <p className="overview-desc-text">
            This program covers both backend and frontend development, real-time projects, industry best practices, and deployment fundamentals. Learners will build complete, production-ready applications using modern development practices.
          </p>
        </div>

        <div className="overview-cards-grid">
          {overviewCards.map((card, idx) => (
            <div key={idx} className={`overview-card ${card.accent}`}>
              <div className="overview-card-icon-box">
                <img src={card.icon} alt={card.title} className="overview-card-icon" />
              </div>
              <div className="overview-card-content">
                <h3 className="overview-card-title">{card.title}</h3>
                <div className="overview-card-value">{card.value}</div>
                <p className="overview-card-detail">{card.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: KEY HIGHLIGHTS */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">KEY HIGHLIGHTS</h2>
          <p className="training-section-subtitle">
            Discover the 10 core features that make our program the preferred choice for aspiring developers.
          </p>
        </div>

        <div className="highlights-grid">
          {keyHighlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-badge-num">{item.id}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE ARTLYSOFT */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">WHY CHOOSE ARTLYSOFT?</h2>
          <p className="training-section-subtitle">
            We bridge the gap between academic learning and software industry expectations.
          </p>
        </div>

        <div className="why-choose-list">
          {whyChooseReasons.map((reason, idx) => (
            <div key={idx} className={`why-choose-card ${reason.accent}`}>
              <div className="why-choose-icon-box">
                <img src={reason.icon} alt={reason.title} className="why-choose-icon" />
              </div>
              <div className="why-choose-text-block">
                <h3 className="why-choose-card-title">{reason.title}</h3>
                <p className="why-choose-card-desc">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: LEARNING PATH */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">LEARNING PATH</h2>
          <p className="training-section-subtitle">
            Our structured learning approach ensures progressive skill development from fundamentals to job placement:
          </p>
        </div>

        <div className="learning-path-timeline">
          {learningStages.map((stageItem, idx) => (
            <div key={idx} className="timeline-stage-item">
              <div className="timeline-stage-node">
                <span className="node-stage-num">{idx + 1}</span>
              </div>
              <div className="timeline-stage-card">
                <div className="stage-header-row">
                  <span className="stage-badge">{stageItem.stage}</span>
                  <h3 className="stage-title">{stageItem.title}</h3>
                </div>
                <p className="stage-desc">{stageItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TECHNOLOGY STACK COVERED */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">TECHNOLOGY STACK COVERED</h2>
          <p className="training-section-subtitle">
            Master the most in-demand technologies for building scalable full-stack web applications.
          </p>
        </div>

        <div className="tech-stack-grid">
          {techStackCategories.map((techCat) => (
            <div key={techCat.number} className="tech-stack-card">
              <div className="tech-card-header">
                <div className="tech-card-icon-box">
                  <img src={techCat.icon} alt={techCat.category} className="tech-card-icon" />
                </div>
                <div>
                  <span className="tech-card-num">{techCat.number}</span>
                  <h3 className="tech-card-title">{techCat.category}</h3>
                </div>
              </div>
              <ul className="tech-stack-list">
                {techCat.items.map((item, idx) => (
                  <li key={idx} className="tech-stack-item">
                    <span className="tech-item-bullet">&rarr;</span>
                    <div>
                      <strong className="tech-item-name">{item.name}: </strong>
                      <span className="tech-item-detail">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: WHO CAN APPLY */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">WHO CAN APPLY</h2>
          <p className="training-section-subtitle">
            Our program is tailored to help learners from diverse educational and professional backgrounds.
          </p>
        </div>

        <div className="who-can-apply-grid">
          {applicantGroups.map((group, idx) => (
            <div key={idx} className={`apply-card ${group.accent}`}>
              <h3 className="apply-card-title">{group.title}</h3>
              <ul className="apply-points-list">
                {group.points.map((pt, pIdx) => (
                  <li key={pIdx} className="apply-point-item">
                    <span className="point-dot">&bull;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: CAREER OPPORTUNITIES */}
      <section className="training-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">CAREER OPPORTUNITIES</h2>
          <p className="training-section-subtitle">
            Prepare for top software engineering roles across IT consulting, SaaS, product companies, and startups.
          </p>
        </div>

        <div className="career-roles-grid">
          {careerRoles.map((role, idx) => (
            <div key={idx} className="career-role-card">
              <div className="role-icon-box">
                <img src={role.icon} alt={role.title} className="role-icon" />
              </div>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-desc">{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="salary-banner-card">
          <div className="salary-icon-box">
            <img src={activitiesIcon} alt="Salary" className="salary-icon" />
          </div>
          <div className="salary-text-block">
            <h4 className="salary-title">Average Starting Salary Range</h4>
            <p className="salary-value">&#8377;4.5 - 7 LPA <span className="salary-subnote">(subject to experience and performance)</span></p>
          </div>
        </div>

        <div className="job-demand-card">
          <h3 className="job-demand-title">JOB MARKET DEMAND</h3>
          <p className="job-demand-desc">
            Full stack developer roles are among the most in-demand positions in India's IT industry. Companies actively seek graduates with hands-on project experience and modern technology expertise.
          </p>
        </div>
      </section>

      {/* SECTION 10: CONTACT US & ENROLLMENT (ENQUIRY FORM) */}
      <div className="enrollment-par-wrapper parallax-section" ref={enrollWrapperRef}>
        {/* Par2 photo background */}
        <div
          className="par-bg enrollment-par-bg"
          ref={par2BgRef}
          style={{ backgroundImage: `url(${par2Img})` }}
        />
        <section id="enrollment-section" className="training-section enrollment-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="training-section-header">
          <h2 className="training-section-title">CONTACT US & ENROLLMENT</h2>
          <p className="training-section-subtitle">
            Get in touch with our admissions team to kickstart your journey toward becoming a certified full stack developer.
          </p>
        </div>

        <div className="contact-info-cards-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <img src={activitiesIcon} alt="Email" className="contact-info-icon" />
            </div>
            <h3 className="contact-info-label">Email</h3>
            <a href="mailto:hr@artlysoft.com" className="contact-info-value">hr@artlysoft.com</a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <img src={webMobileIcon} alt="Website" className="contact-info-icon" />
            </div>
            <h3 className="contact-info-label">Website</h3>
            <a href="https://www.artlysoft.com" target="_blank" rel="noopener noreferrer" className="contact-info-value">www.artlysoft.com</a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <img src={callIcon} alt="Phone" className="contact-info-icon" />
            </div>
            <h3 className="contact-info-label">Phone</h3>
            <a href="tel:9901718700" className="contact-info-value">9901718700</a>
          </div>
        </div>

        {/* FULL STACK PYTHON & JAVA PROGRAM BANNER & STATS CARDS (MOVED BELOW CONTACT CARDS) */}
        <div className="program-banner-block" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="program-banner-title">
            FULL STACK PYTHON & JAVA ONLINE TRAINING PROGRAM
          </h2>
          <p className="program-banner-subtitle">
            Transform your career with industry-aligned training, live interactive sessions, hands-on capstone projects, and 100% placement support.
          </p>

          <div className="program-banner-actions">
            <button className="training-cta-primary-btn" onClick={scrollToEnrollment}>
              Enroll Now & Download Brochure &rarr;
            </button>
          </div>

          <div className="training-hero-stats-grid">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="enrollment-process-block">
          <h3 className="process-block-title">ENROLLMENT PROCESS</h3>
          <div className="enrollment-steps-grid">
            {enrollmentSteps.map((stepItem) => (
              <div key={stepItem.step} className="enroll-step-card">
                <span className="enroll-step-num">{stepItem.step}</span>
                <h4 className="enroll-step-title">{stepItem.title}</h4>
                <p className="enroll-step-desc">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENQUIRY FORM & BROCHURE CONTAINER */}
        <div className="enquiry-form-container">
          <div className="brochure-preview-side">
            <div className="brochure-icon-box">
              <img src={qualityIcon} alt="Brochure" className="brochure-icon" />
            </div>
            <h3 className="brochure-side-title">COURSE BROCHURE</h3>
            <p className="brochure-side-desc">
              Get detailed curriculum, syllabus, project details, and program highlights in our comprehensive brochure.
            </p>
            <div className="brochure-download-note">
              <span className="lock-icon">&#128274;</span> Submit form to instantly download the PDF brochure.
            </div>
          </div>

          <div className="enquiry-form-side">
            <h3 className="enquiry-form-title">ENQUIRE NOW</h3>
            <p className="enquiry-form-subtitle">Fill out the form below and our counseling team will get back to you shortly.</p>

            {formSubmitted && (
              <div className="form-success-alert">
                &#10004; Thank you! Your enquiry has been submitted successfully. The official course brochure is downloading automatically.
              </div>
            )}

            {errorMessage && (
              <div className="form-error-alert">
                &#9888; {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="training-enquiry-form">
              <div className="form-field-group">
                <label className="form-field-label">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="form-input-field"
                  required
                />
              </div>

              <div className="form-row-two-col">
                <div className="form-field-group">
                  <label className="form-field-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="form-input-field"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="form-input-field"
                    required
                  />
                </div>
              </div>

              <div className="form-row-two-col">
                <div className="form-field-group">
                  <label className="form-field-label">Qualification / Background</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="form-select-field"
                  >
                    <option value="Student">Student (Pursuing Degree)</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="Career Switcher">Career Switcher (Non-IT)</option>
                    <option value="Working Professional">Working IT Professional</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Interested Program</label>
                  <select
                    name="interestedCourse"
                    value={formData.interestedCourse}
                    onChange={handleChange}
                    className="form-select-field"
                  >
                    <option value="Full Stack Python & Java">Full Stack Python & Java</option>
                    <option value="Full Stack Java Development">Full Stack Java Development</option>
                    <option value="Full Stack Python Development">Full Stack Python Development</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Message / Specific Queries</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your career goals or specific questions..."
                  className="form-textarea-field"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Enquiry & Download Brochure &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Training;

