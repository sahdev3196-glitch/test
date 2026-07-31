import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { animate } from 'animejs';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  // 1. Entry Animation: Fade in from top
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isReduced && headerRef.current) {
      animate(headerRef.current, { opacity: 0, translateY: -20, duration: 0 });
      animate(headerRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  // 2. Scroll monitoring
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

  // 3. Scroll-responsive glassmorphism styling animations via Anime.js
  useEffect(() => {
    if (!headerRef.current || !containerRef.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (isScrolled) {
      animate(headerRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        boxShadow: '0 10px 35px rgba(160, 140, 115, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
        duration: 300,
        easing: 'easeOutQuad'
      });
      animate(containerRef.current, {
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem',
        duration: 300,
        easing: 'easeOutQuad'
      });
    } else {
      animate(headerRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        boxShadow: '0 10px 30px rgba(160, 140, 115, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        duration: 300,
        easing: 'easeOutQuad'
      });
      animate(containerRef.current, {
        paddingTop: '1.35rem',
        paddingBottom: '1.35rem',
        duration: 300,
        easing: 'easeOutQuad'
      });
    }
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="main-header"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(184, 145, 80, 0.25)',
        transition: 'none'
      }}
    >
      <div ref={containerRef} className="header-container" style={{ transition: 'none' }}>
        <Link
          to="/"
          className="logo-brand"
          aria-label="Urban Frill Home"
          onClick={closeMenu}
          style={{ color: '#1F1D1A' }}
        >
          Urban <span style={{ color: '#B89150' }}>Frill</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          style={{
            padding: '8px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(184, 145, 80, 0.3)'
          }}
        >
          {isMenuOpen ? (
            <X size={24} style={{ color: '#1F1D1A' }} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span className="hamburger-bar" style={{ background: '#1F1D1A' }}></span>
              <span className="hamburger-bar" style={{ background: '#B89150' }}></span>
              <span className="hamburger-bar" style={{ background: '#1F1D1A' }}></span>
            </div>
          )}
        </button>

        <nav
          id="primary-nav"
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          style={isMenuOpen ? {
            background: 'rgba(250, 248, 245, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderLeft: '1px solid rgba(184, 145, 80, 0.3)',
            boxShadow: '-20px 0 60px rgba(160, 140, 115, 0.2)'
          } : undefined}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className={({ isActive }) => isActive || location.pathname.startsWith('/products') ? 'active' : ''}
              >
                Products <span style={{ fontSize: '0.65rem', marginLeft: '2px', display: 'inline-block', transform: 'translateY(-1px)' }}>▼</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

