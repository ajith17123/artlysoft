import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import '../assets/style/FloatingNav.css';

const PAGE_ORDER = [
  { name: 'Home', path: '/', match: (p) => p === '/' },
  { name: 'Services', path: '/services', match: (p) => p === '/services' },
  { name: 'Careers', path: '/careers', match: (p) => p === '/careers' || p === '/joinus/career' },
  { name: 'About', path: '/about', match: (p) => p === '/about' },
  { name: 'Training', path: '/training', match: (p) => p === '/training' || p === '/joinus/training' || p === '/courses' },
  { name: 'TalentOS', path: '/products/talent-os', match: (p) => p === '/products/talent-os' },
  { name: 'Contact Us', path: '/contact', match: (p) => p === '/contact' }
];

export default function FloatingNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  let currentIndex = PAGE_ORDER.findIndex((page) => page.match(currentPath));
  if (currentIndex === -1) currentIndex = 0;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < PAGE_ORDER.length - 1;

  const prevPage = hasPrev ? PAGE_ORDER[currentIndex - 1] : null;
  const nextPage = hasNext ? PAGE_ORDER[currentIndex + 1] : null;

  const handlePrev = () => {
    if (prevPage) {
      navigate(prevPage.path);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const handleNext = () => {
    if (nextPage) {
      navigate(nextPage.path);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="floating-nav-container">
      {/* Pink Area: Floating WhatsApp Chat Button */}
      <div className="floating-whatsapp-wrapper">
        <span className="floating-nav-tooltip">Chat on WhatsApp</span>
        <a
          href="https://wa.me/919901718700"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <BsWhatsapp size={26} />
          <span className="floating-whatsapp-dot" />
        </a>
      </div>

      {/* Yellow Area: Pagination Sequential Navigation Arrows */}
      <div className="floating-pagination-box">
        {/* Left Arrow (Prev Page) */}
        {hasPrev && (
          <button
            type="button"
            className="button-3d"
            onClick={handlePrev}
            aria-label={`Go to ${prevPage.name}`}
            title={`Previous: ${prevPage.name}`}
          >
            <div className="button-top">
              <FiChevronLeft size={18} />
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
        )}

        {/* Right Arrow (Next Page) */}
        {hasNext && (
          <button
            type="button"
            className="button-3d"
            onClick={handleNext}
            aria-label={`Go to ${nextPage.name}`}
            title={`Next: ${nextPage.name}`}
          >
            <div className="button-top">
              <FiChevronRight size={18} />
            </div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
          </button>
        )}
      </div>
    </div>
  );
}
