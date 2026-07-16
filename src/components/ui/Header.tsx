import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    closeMenu();
    
    if (location.pathname === '/') {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to homepage first
      navigate('/');
      // Once homepage mounts, scroll to the section
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0 });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    }
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link 
          to="/" 
          className="logo-brand" 
          aria-label="Urban Frill Home" 
          onClick={(e) => handleNavClick('home', e)}
        >
          Urban <span>Frill</span>
        </Link>
        
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: '#1C1C1C' }} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span className="hamburger-bar" style={{ transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
              <span className="hamburger-bar" style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
              <span className="hamburger-bar" style={{ transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
            </div>
          )}
        </button>

        <nav id="primary-nav" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={(e) => handleNavClick('home', e)}>Home</Link></li>
            <li><Link to="/" onClick={(e) => handleNavClick('about', e)}>About</Link></li>
            <li><Link to="/" onClick={(e) => handleNavClick('products', e)}>Products</Link></li>
            <li><Link to="/" onClick={(e) => handleNavClick('faq', e)}>FAQ</Link></li>
            <li><Link to="/" onClick={(e) => handleNavClick('contact', e)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
