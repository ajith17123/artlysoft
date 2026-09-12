import './App.css';
import { Routes, Route, HashRouter, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import TalentOS from './product_page/TalentOS';
import Services from './components/Services';
import Training from './components/Training';
import Preloader from './components/Preloader';
import FloatingNav from './components/FloatingNav';
import Particles from './components/Particles';

// Automatically reset scroll position to top and refresh AOS animations on every page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Refresh AOS positions on page navigation
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App () {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 60,
    });
  }, []);

  return(
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <HashRouter>
        <Particles />
        <ScrollToTop />
        <FloatingNav />
        <Routes>
          {/* Main Website Layout (Global Navbar & Footer) */}
          <Route element={<MainLayout />}>
            <Route path='/' element={< Home />} />
            <Route path='/about' element={< About />} />
            <Route path='/joinus/career' element={< Career />} />
            <Route path='/careers' element={< Career />} />
            <Route path='/contact' element={< Contact />} />
            <Route path='/services' element={< Services />} />
            <Route path='/joinus/training' element={< Training />} />
            <Route path='/training' element={< Training />} />
            <Route path='/courses' element={< Training />} />
          </Route>

          {/* Dedicated TalentOS Product Page (Standalone Navbar & Footer) */}
          <Route path='/products/talent-os' element={<TalentOS />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
