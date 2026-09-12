import { useEffect, useRef } from 'react';
import modernizationIcon from '../assets/gifs/modernization.svg';
import assessmentIcon from '../assets/gifs/assessment.svg';
import activitiesIcon from '../assets/gifs/activities.svg';
import ecosystemIcon from '../assets/gifs/ecosystem.svg';
import consultingIcon from '../assets/gifs/consulting.svg';
import strategyIcon from '../assets/gifs/it_strategy.svg';
import architectureIcon from '../assets/gifs/architecture_review.svg';
import processIcon from '../assets/gifs/process_optimization.svg';
import customDevIcon from '../assets/gifs/custom_development.svg';
import webMobileIcon from '../assets/gifs/web_mobile_apps.svg';
import userCentricIcon from '../assets/gifs/user_centric_design.svg';
import qualityIcon from '../assets/gifs/quality_documentation.svg';
import codeIcon from '../assets/gifs/code.svg';
import aimlIcon from '../assets/gifs/aiml.svg';
import databaseIcon from '../assets/gifs/database.svg';
import automationIcon from '../assets/gifs/automation.svg';
import cloudIcon from '../assets/gifs/cloud.svg';
import '../assets/style/Services.css';
import heroVideo from '../assets/videos/Hero Pages/dna.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import par4Img from '../assets/images/Par4.jpg';

// 1. Software Modernization
const modernizationSubCards = [
  {
    id: 'legacy-assessment',
    title: 'LEGACY SYSTEM ASSESSMENT',
    iconImg: assessmentIcon,
    accentClass: 'accent-gold',
    description: 'Comprehensive evaluation of your existing software landscape to identify modernization opportunities.'
  },
  {
    id: 'modernization-activities',
    title: 'MODERNIZATION ACTIVITIES',
    iconImg: activitiesIcon,
    accentClass: 'accent-slate',
    description: 'Refactoring, re-platforming, and re-architecting to align with current business needs and technology standards.'
  },
  {
    id: 'ecosystem-coverage',
    title: 'ECOSYSTEM COVERAGE',
    iconImg: ecosystemIcon,
    accentClass: 'accent-teal',
    description: 'Covers applications, databases, infrastructure, and integrations for a holistic IT transformation.'
  }
];

const modernizationTechTools = [
  '.NET', 'Java', 'Node.js', 'Cloud', 'Microservices', 'APIs'
];

// 2. Software Consulting
const consultingSubCards = [
  {
    id: 'it-strategy',
    title: 'IT STRATEGY & ROADMAPPING',
    iconImg: strategyIcon,
    accentClass: 'accent-gold',
    description: 'Align technology investments with business goals for maximum ROI.'
  },
  {
    id: 'architecture-review',
    title: 'ARCHITECTURE REVIEW',
    iconImg: architectureIcon,
    accentClass: 'accent-slate',
    description: 'In-depth analysis and recommendations to improve scalability, security, and performance.'
  },
  {
    id: 'process-optimization',
    title: 'PROCESS OPTIMIZATION',
    iconImg: processIcon,
    accentClass: 'accent-teal',
    description: 'Streamline development and delivery workflows for faster time-to-market.'
  }
];

const consultingTechTools = [
  'Cloud', 'DevOps', 'Security', 'APIs', 'Architecture'
];

// 3. Custom Software Development
const customDevSubCards = [
  {
    id: 'web-mobile-apps',
    title: 'WEB & MOBILE APPS',
    iconImg: webMobileIcon,
    accentClass: 'accent-gold',
    description: 'Full-stack development for web and mobile platforms, tailored to your business needs.'
  },
  {
    id: 'user-centric-design',
    title: 'USER-CENTRIC DESIGN',
    iconImg: userCentricIcon,
    accentClass: 'accent-slate',
    description: 'Intuitive interfaces and seamless user experiences that drive adoption.'
  },
  {
    id: 'quality-documentation',
    title: 'QUALITY & DOCUMENTATION',
    iconImg: qualityIcon,
    accentClass: 'accent-teal',
    description: 'Robust testing and clear documentation for long-term maintainability.'
  }
];

const customDevTechTools = [
  'React', 'Node.js', 'Python', 'Flutter', 'SQL', 'NoSQL'
];

// 4. Product Engineering
const productEngineeringSubCards = [
  {
    id: 'web-app-dev',
    title: 'WEB APP DEVELOPMENT',
    iconImg: codeIcon,
    accentClass: 'accent-gold',
    description: 'We craft secure, scalable, and high-performing web applications using modern technologies such as React, Angular, Java, and Python. From MVPs to complex enterprise solutions, our products deliver measurable business value.'
  },
  {
    id: 'mobile-app-dev',
    title: 'MOBILE APP DEVELOPMENT',
    iconImg: webMobileIcon,
    accentClass: 'accent-slate',
    description: 'We build cross-platform and native mobile apps that ensure seamless performance and intuitive user experiences. Our apps feature robust backend integration and are powered by React Native, Flutter, Swift, and Kotlin.'
  },
  {
    id: 'platform-dev',
    title: 'PLATFORM DEVELOPMENT',
    iconImg: ecosystemIcon,
    accentClass: 'accent-teal',
    description: 'We develop extensible digital platforms and ecosystems that support multi-tenancy, user management, real-time data, and cloud-native operations. Ideal for SaaS, marketplaces, and B2B applications.'
  }
];

const productEngineeringTechTools = [
  'React', 'Angular', 'Java', 'Python', 'React Native', 'Flutter', 'Swift', 'Kotlin'
];

// 5. Data & AI
const dataAiSubCards = [
  {
    id: 'data-engineering',
    title: 'DATA ENGINEERING',
    iconImg: databaseIcon,
    accentClass: 'accent-gold',
    description: 'Design and build modern data pipelines and lakehouse architectures. ETL/ELT, real-time streaming, and data warehouse development on Snowflake, BigQuery, or Redshift.'
  },
  {
    id: 'data-analytics',
    title: 'DATA ANALYTICS',
    iconImg: activitiesIcon,
    accentClass: 'accent-slate',
    description: 'Transform raw data into actionable insights using dashboards, BI reports, and visualization tools like Power BI, Tableau, and Looker.'
  },
  {
    id: 'data-science-ml',
    title: 'DATA SCIENCE & ML',
    iconImg: aimlIcon,
    accentClass: 'accent-teal',
    description: 'Solve business problems with predictive analytics, machine learning, and NLP. From churn prediction to customer segmentation, we build models that matter.'
  }
];

const dataAiTechTools = [
  'Snowflake', 'BigQuery', 'Redshift', 'Power BI', 'Tableau', 'Looker', 'Python', 'TensorFlow', 'PyTorch'
];

// 6. Intelligent Automation
const intelligentAutomationSubCards = [
  {
    id: 'rpa',
    title: 'ROBOTIC PROCESS AUTOMATION (RPA)',
    iconImg: automationIcon,
    accentClass: 'accent-gold',
    description: 'Automate repetitive tasks using UiPath, Automation Anywhere, and Microsoft Power Automate. Improve accuracy, reduce costs, and free up human resources.'
  },
  {
    id: 'generative-ai',
    title: 'GENERATIVE AI (CHATBOTS & AGENTS)',
    iconImg: aimlIcon,
    accentClass: 'accent-slate',
    description: 'Build smart, conversational AI experiences using OpenAI, Vertex AI, or custom LLMs. Automate customer support, employee self-service, and knowledge delivery.'
  },
  {
    id: 'process-mining',
    title: 'PROCESS MINING',
    iconImg: assessmentIcon,
    accentClass: 'accent-teal',
    description: 'Discover, analyze, and optimize business workflows using tools like Celonis. Identify bottlenecks and drive process excellence with real-time insights.'
  },
  {
    id: 'process-automation',
    title: 'PROCESS AUTOMATION',
    iconImg: processIcon,
    accentClass: 'accent-gold',
    description: 'Digitize and automate end-to-end business operations across HR, finance, and IT using BPM and orchestration tools.'
  },
  {
    id: 'low-code-app-dev',
    title: 'LOW-CODE APPLICATION DEVELOPMENT',
    iconImg: codeIcon,
    accentClass: 'accent-slate',
    description: 'Rapidly build applications using platforms like OutSystems, Mendix, or Microsoft Power Apps. Faster delivery, lower costs, better agility.'
  }
];

const intelligentAutomationTechTools = [
  'UiPath', 'Automation Anywhere', 'Power Automate', 'OpenAI', 'Vertex AI', 'Celonis', 'OutSystems', 'Mendix', 'Power Apps'
];

// 7. Cloud Services
const cloudServicesSubCards = [
  {
    id: 'gcp',
    title: 'GOOGLE CLOUD PLATFORM (GCP)',
    iconImg: cloudIcon,
    accentClass: 'accent-gold',
    description: "Leverage GCP's AI, analytics, and compute power for next-gen cloud applications. We offer GCP-native architecture, migration, and ML services."
  },
  {
    id: 'azure',
    title: 'MICROSOFT AZURE',
    iconImg: cloudIcon,
    accentClass: 'accent-slate',
    description: 'Comprehensive Azure services from App Services to Azure ML, Azure DevOps, and Azure Kubernetes Service (AKS). Cloud modernization at scale.'
  },
  {
    id: 'aws',
    title: 'AMAZON WEB SERVICES (AWS)',
    iconImg: cloudIcon,
    accentClass: 'accent-teal',
    description: 'AWS consulting, migration, serverless architecture, and infrastructure automation using CloudFormation and Terraform. Optimize performance, cost, and security.'
  }
];

const cloudServicesTechTools = [
  'Google Cloud Platform', 'Microsoft Azure', 'Amazon Web Services', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation'
];

// 8. Our Proven Process
const provenProcessSteps = [
  {
    step: '01',
    title: 'DISCOVERY & ANALYSIS',
    accentClass: 'accent-gold',
    description: 'We begin by understanding your business requirements, current challenges, and objectives through comprehensive analysis.'
  },
  {
    step: '02',
    title: 'STRATEGY & PLANNING',
    accentClass: 'accent-slate',
    description: 'Our experts develop a tailored strategy and detailed project plan aligned with your business goals and timeline.'
  },
  {
    step: '03',
    title: 'DESIGN & DEVELOPMENT',
    accentClass: 'accent-teal',
    description: 'We create innovative solutions using cutting-edge technologies and industry best practices.'
  },
  {
    step: '04',
    title: 'TESTING & QUALITY ASSURANCE',
    accentClass: 'accent-gold',
    description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.'
  },
  {
    step: '05',
    title: 'DEPLOYMENT & SUPPORT',
    accentClass: 'accent-slate',
    description: 'We handle seamless deployment and provide ongoing support to ensure optimal performance.'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // ── Parallax: Our Proven Process section ──
  const par4BgRef = useRef(null);
  const provenWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !par4BgRef.current || !provenWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(par4BgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: provenWrapperRef.current,
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
    <div className="services-page">
      <section className="services-hero-section">
        <div className="services-hero-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="services-hero-content">
            <div className="services-hero-badge">
              <span className="services-hero-badge-dot"></span>
              Our Services
            </div>
            <h1 className="services-hero-title">
              Complete Digital Solutions &amp; Engineering
            </h1>
            <p className="services-hero-desc">
              We offer a wide range of IT services from software development to intelligent automation, supporting businesses across their complete digital journey—from planning to ongoing improvement.
            </p>
          </div>
          <div className="services-hero-video-wrapper">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="services-hero-video"
            />
          </div>
        </div>
      </section>

      {/* Topic 1: Software Modernization */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={modernizationIcon} alt="Software Modernization" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">SOFTWARE MODERNIZATION</h2>
              <p className="spotlight-card-desc">
                We will assess your legacy software and offer modernization activities to improve its overall efficiency and reduce maintenance costs.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {modernizationSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {modernizationTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 2: Software Consulting */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={consultingIcon} alt="Software Consulting" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">SOFTWARE CONSULTING</h2>
              <p className="spotlight-card-desc">
                Our experts provide actionable guidance to optimize your IT strategy, architecture, and processes. For example, we recently helped a client reduce cloud costs by 30% through targeted architectural improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {consultingSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {consultingTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 3: Custom Software Development */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={customDevIcon} alt="Custom Software Development" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">CUSTOM SOFTWARE DEVELOPMENT</h2>
              <p className="spotlight-card-desc">
                When building software from scratch, we ensure intuitive workflows, maintainable code, and thorough documentation.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {customDevSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {customDevTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 4: Product Engineering */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={codeIcon} alt="Product Engineering" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">PRODUCT ENGINEERING</h2>
              <p className="spotlight-card-desc">
                We deliver end-to-end product development services. Our solutions power high-performance digital products and platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {productEngineeringSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {productEngineeringTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 5: Data & AI */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={aimlIcon} alt="Data & AI" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">DATA & AI</h2>
              <p className="spotlight-card-desc">
                Unlock your data's true potential with intelligent engineering and advanced analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {dataAiSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {dataAiTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 6: Intelligent Automation */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={automationIcon} alt="Intelligent Automation" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">INTELLIGENT AUTOMATION</h2>
              <p className="spotlight-card-desc">
                Accelerate business transformation with AI-powered automation solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {intelligentAutomationSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {intelligentAutomationTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 7: Cloud Services */}
      <section className="modernization-section">
        <div className="modernization-spotlight-card accent-blue" data-aos="fade-up" data-aos-duration="1000">
          <div className="spotlight-card-content">
            <div className="spotlight-icon-box">
              <img src={cloudIcon} alt="Cloud Services" className="spotlight-icon-image" />
            </div>
            <div className="spotlight-text-block">
              <h2 className="spotlight-card-title">CLOUD SERVICES</h2>
              <p className="spotlight-card-desc">
                Empower digital innovation with scalable cloud infrastructure and DevOps.
              </p>
            </div>
          </div>
        </div>

        <div className="modernization-sub-grid">
          {cloudServicesSubCards.map((card, idx) => (
            <div
              key={card.id}
              className={`modernization-sub-card ${card.accentClass}`}
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 150}
              data-aos-duration="1000"
            >
              <div className="sub-card-icon-box">
                <img src={card.iconImg} alt={card.title} className="sub-card-icon-image" />
              </div>
              <h3 className="sub-card-title">{card.title}</h3>
              <p className="sub-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="tech-tools-block" data-aos="fade-up" data-aos-duration="1000">
          <h4 className="tech-tools-heading">Technologies & Tools</h4>
          <div className="tech-pills-container">
            {cloudServicesTechTools.map((tech, idx) => (
              <span key={idx} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 8: Our Proven Process */}
      <div className="proven-par-wrapper parallax-section" ref={provenWrapperRef}>
        {/* Par4 photo background */}
        <div
          className="par-bg services-par-bg"
          ref={par4BgRef}
          style={{ backgroundImage: `url(${par4Img})` }}
        />
        <div className="proven-par-inner">
          <section className="proven-process-section">
            <header className="proven-process-header" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="proven-process-title">OUR PROVEN PROCESS</h2>
              <p className="proven-process-subtitle">
                We follow a structured approach to ensure successful project delivery and client satisfaction.
              </p>
            </header>

            <div className="modernization-sub-grid">
              {provenProcessSteps.map((card, idx) => (
                <div
                  key={card.step}
                  className={`modernization-sub-card ${card.accentClass}`}
                  data-aos="fade-up"
                  data-aos-delay={(idx + 1) * 150}
                  data-aos-duration="1000"
                >
                  <span className="process-step-number">{card.step}</span>
                  <h3 className="sub-card-title">{card.title}</h3>
                  <p className="sub-card-desc">{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;