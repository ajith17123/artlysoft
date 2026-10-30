import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaGithub, FaLinkedinIn, FaFacebookF, FaHeart } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import footerImg from '../assets/images/footer.png';
import '../assets/style/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/about') {
      const teamEl = document.getElementById('our-team');
      if (teamEl) {
        teamEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/about#our-team');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-main-container">
        {/* Left Side: Image Card */}
        <div className="footer-image-card-wrapper" data-aos="fade-right" data-aos-duration="1000">
          <div className="footer-image-card">
            <img src={footerImg} alt="Artlysoft Footer" className="footer-card-img" />
          </div>
        </div>

        {/* Right Side: Action Buttons, Contact Links, and Social Icons */}
        <div className="footer-right-content" data-aos="fade-left" data-aos-duration="1000">
          {/* Top: 3-column x 2-row Navigation Buttons */}
          <div className="footer-buttons-grid">
            <Link to="/about" className="footer-nav-btn">About</Link>
            <Link to="/products/talent-os" className="footer-nav-btn">Talent OS</Link>
            <Link to="/joinus/career" className="footer-nav-btn">Career</Link>
            <Link to="/contact" className="footer-nav-btn">Contact Us</Link>
            <Link to="/services" className="footer-nav-btn">Services</Link>
            <Link to="/joinus/training" className="footer-nav-btn">Training</Link>
          </div>

          {/* Middle: Contact Details Links */}
          <div className="footer-contact-links-row">
            <div className="footer-contact-link-item">
              <FaMapMarkerAlt className="footer-info-icon" aria-hidden="true" />
              <span>Bangalore, Karnataka</span>
            </div>
            <a href="https://wa.me/919901718700" target="_blank" rel="noopener noreferrer" className="footer-contact-link-item interactive">
              <FaPhoneAlt className="footer-info-icon" aria-hidden="true" />
              <span>+91 9901718700</span>
            </a>
            <a href="mailto:admin@artlysoft.com" className="footer-contact-link-item interactive">
              <FaEnvelope className="footer-info-icon" aria-hidden="true" />
              <span>admin@artlysoft.com</span>
            </a>
          </div>

          {/* Bottom Right: Social Media Buttons */}
          <div className="footer-social-row">
            <a href="https://www.instagram.com/artly_soft?igsh=MW5sZGJpaWp3cnBjdg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1Psq5pJ1L2/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@artlysoftprivatelimited?si=jkp8QbDDpDsLTxX8" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/artlysoft-private-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Artlysoft-Pvt-Ltd" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-btn">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div className="footer-divider-line"></div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-copyright-text">
          &copy; {currentYear} Artlysoft. All Rights Reserved
        </p>
        <p className="footer-credits-text">
          Designed with <FaHeart className="footer-heart-icon" aria-hidden="true" /> by{' '}
          <Link to="/about#our-team" className="footer-team-link" onClick={handleTeamClick}>
            Artlysoft Team
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

