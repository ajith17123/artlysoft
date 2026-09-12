import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaExternalLinkAlt, FaPaperPlane, FaHeadset, FaCloud, FaArrowRight, FaRocket } from 'react-icons/fa';
import '../assets/style/Contact.css';
import heroVideo from '../assets/videos/Hero Pages/contact.mp4';

import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';
import c8 from '../assets/images/c8.jpg';
import c9 from '../assets/images/c9.jpg';
import c10 from '../assets/images/c10.jpg';

const showcaseItems = [
  { img: c1, title: 'Work Booths' },
  { img: c2, title: 'Open Desks' },
  { img: c3, title: 'Shared Workspace' },
  { img: c4, title: 'Conference Room' },
  { img: c5, title: 'Café & Dining' },
  { img: c6, title: 'Pantry' },
  { img: c7, title: 'Play Den' },
  { img: c8, title: 'Meeting Pod' },
  { img: c9, title: 'Phone Booth' },
  { img: c10, title: 'Lounge Area' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    description: ''
  });

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactCards = [
    {
      id: 'email',
      title: 'Email Us',
      detail: 'admin@artlysoft.com',
      subtext: 'Send us an email anytime for inquiries or support.',
      icon: <FaEnvelope className="contact-card-icon" />,
      actionType: 'link',
      href: 'mailto:admin@artlysoft.com',
      badge: 'Mail',
      accentColor: 'accent-blue'
    },
    {
      id: 'call',
      title: 'Call Us',
      detail: '+91 9901718700',
      subtext: 'Available Mon–Fri from 9:00 AM to 6:00 PM.',
      icon: <FaPhoneAlt className="contact-card-icon" />,
      actionType: 'link',
      href: 'tel:+919901718700',
      badge: 'Direct Call',
      accentColor: 'accent-indigo'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      detail: '+91 9901718700',
      subtext: 'Connect instantly with our support team on WhatsApp.',
      icon: <FaWhatsapp className="contact-card-icon" />,
      actionType: 'external',
      href: 'https://wa.me/919901718700',
      badge: 'Instant Chat',
      accentColor: 'accent-green'
    },
    {
      id: 'address',
      title: 'Visit Us',
      detail: 'Bengaluru, Karnataka',
      subtext: 'Bengaluru, Karnataka, India',
      icon: <FaMapMarkerAlt className="contact-card-icon" />,
      actionType: 'address',
      href: 'https://www.google.com/maps/place/Artlysoft+Private+Limited/@12.9159453,77.6320468,17z/data=!3m1!4b1!4m6!3m5!1s0x3bac470931839411:0xd5ca641a983f56bc!8m2!3d12.9159453!4d77.6320468!16s%2Fg%2F11x2x7f6yt?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',
      badge: 'Location',
      accentColor: 'accent-bronze'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, countryCode, phone, description } = formData;
    
    // Construct WhatsApp message formatted as requested
    let messageText = `Hello, I'm ${name}. Here are my details: 📌 Email: ${email} 📌 Phone: ${countryCode}${phone}`;
    if (description && description.trim() !== '') {
      messageText += ` 📌 Description: ${description}`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=919901718700&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero-section">
        <div className="contact-hero-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="contact-hero-content">
            <div className="contact-hero-badge">
              <span className="contact-hero-badge-dot"></span>
              Contact Us
            </div>
            <h1 className="contact-hero-title">
              We'd Love to Hear From You!
            </h1>
            <p className="contact-hero-desc">
              Have questions about our training programs, IT services, or career guidance? We welcome students, professionals, organizations, and businesses to connect with our team.
            </p>
          </div>
          <div className="contact-hero-video-wrapper">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="contact-hero-video"
            />
          </div>
        </div>
      </section>

      <div className="contact-bg-glow contact-bg-glow-1" />
      <div className="contact-bg-glow contact-bg-glow-2" />

      <section className="contact-container" data-aos="fade-up" data-aos-duration="1000">
        
        {/* Section Header */}
        <header className="contact-header">
          <span className="contact-badge" data-aos="fade-down" data-aos-delay="100">
            Get In Touch
          </span>
          <h1 className="contact-heading" data-aos="fade-up" data-aos-delay="200">
            How Can We Help You?
          </h1>
          <p className="contact-subheading" data-aos="fade-up" data-aos-delay="300">
            Choose the best way to reach us and we'll get back to you promptly
          </p>
        </header>

        {/* 4 Glassmorphism 3D Cards Grid */}
        <div className="contact-grid">
          {contactCards.map((card, index) => {
            const isExternal = card.actionType === 'external' || card.actionType === 'address';

            return (
              <div 
                key={card.id} 
                className="card-3d-parent"
                data-aos="fade-up"
                data-aos-delay={150 * (index + 1)}
                data-aos-duration="900"
              >
                <a
                  href={card.href}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`contact-card glass-card ${card.accentColor} ${card.id === 'address' ? 'address-card' : ''}`}
                >
                  {/* Glowing border accent */}
                  <div className="glass-card-glow" />

                  <div className="card-top-bar">
                    <div className="card-icon-wrapper">
                      {card.icon}
                    </div>
                    <span className="card-badge">{card.badge}</span>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{card.title}</h3>
                    <div className="card-detail-wrap">
                      <span className="card-detail">{card.detail}</span>
                    </div>
                    <p className="card-subtext">{card.subtext}</p>
                  </div>

                  <div className="card-footer-action">
                    <span className="action-text">
                      {card.id === 'email' && 'Send Mail'}
                      {card.id === 'call' && 'Make Call'}
                      {card.id === 'whatsapp' && 'Open Chat'}
                      {card.id === 'address' && 'View Map'}
                    </span>
                    <FaExternalLinkAlt className="action-icon" />
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Showcase Marquee Section */}
        <div className="contact-marquee-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="contact-marquee-track">
            {[...showcaseItems, ...showcaseItems].map((item, idx) => (
              <div key={idx} className="marquee-image-card">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="marquee-img" 
                  loading="lazy"
                />
                <div className="marquee-card-overlay">
                  <span className="marquee-card-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Section: Interactive Contact Us Form Card */}
        <div id="contact-form-section" className="contact-form-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="contact-form-card">
            <div className="form-card-glow" />
            
            <header className="form-card-header">
              <h2 className="form-card-heading">Contact Us</h2>
              <p className="form-card-subheading">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </header>

            <form onSubmit={handleSubmit} className="contact-form-grid">
              
              {/* Name Input (Required) */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="contact-name">
                  Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              {/* Email Address Input (Required) */}
              <div className="form-group half-width">
                <label className="form-label" htmlFor="contact-email">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your Mail-Id"
                  className="form-input"
                  required
                />
              </div>

              {/* Phone Number Input (Required) */}
              <div className="form-group half-width">
                <label className="form-label" htmlFor="contact-phone">
                  Phone Number <span className="required-star">*</span>
                </label>
                <div className="input-with-code">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="country-code-select"
                    aria-label="Country Code"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+65">+65 (SG)</option>
                  </select>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className="form-input phone-input"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    required
                  />
                </div>
              </div>

              {/* Description Input (Optional) */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="contact-description">
                  Description
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="How Can We Help You?"
                  className="form-textarea"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="form-group full-width btn-group">
                <button type="submit" className="send-message-btn">
                  <span>Send Message</span>
                  <FaPaperPlane className="send-btn-icon" />
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Map Section: Visit Our Headquarters */}
        <div className="contact-map-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <header className="map-section-header">
            <h2 className="map-section-heading">VISIT OUR HEADQUARTERS</h2>
            <p className="map-section-subheading">
              We'd love to meet you in person! Visit us at our office to discuss how we can help your business thrive.
            </p>
          </header>

          <div className="map-card-wrapper">
            <div className="map-card-glow" />
            <iframe
              title="Artlysoft Private Limited Location Map"
              src="https://maps.google.com/maps?q=Artlysoft%20Private%20Limited%2C%20L-176%2C%205th%20Main%20Rd%2C%20Sector%206%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="map-iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Modern CTA Banner Section (Above Footer) */}
        <div className="contact-cta-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="contact-cta-card">
            <div className="cta-card-glow" />
            
            {/* Eyebrow Badge */}
            <div className="cta-eyebrow-badge">
              <FaRocket className="badge-icon" />
              <span>Let's Build Together</span>
            </div>

            {/* Main Heading (H2) */}
            <h2 className="cta-heading">
              Ready to Accelerate Your Digital Transformation?
            </h2>

            {/* Subtitle */}
            <p className="cta-subtitle">
              Partner with Artlysoft to engineer scalable cloud infrastructure, intelligent AI workflows, and custom enterprise software.
            </p>

            {/* Action Buttons */}
            <div className="cta-btn-group">
              <button type="button" onClick={scrollToForm} className="cta-primary-btn">
                <span>Start Your Project</span>
                <FaArrowRight className="cta-btn-arrow" />
              </button>
              <a href="tel:+919901718700" className="cta-secondary-btn">
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Micro-proof / Badges */}
            <div className="cta-micro-proof">
              <div className="micro-proof-item">
                <FaHeadset className="proof-icon" />
                <span>24/7 Dedicated Support</span>
              </div>
              <div className="proof-divider">•</div>
              <div className="micro-proof-item">
                <FaCloud className="proof-icon" />
                <span>Multi-Cloud Certified</span>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;
