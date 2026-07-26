import React, { useEffect, useRef } from 'react';
import animateHero from '../../animations/heroAnimation';

export const ProductsHero: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (textRef.current && imgRef.current) {
      // Direct classes inside this component
      animateHero('.products-hero-text', '.products-hero-img');
    }
  }, []);

  const handleScrollToCategories = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('category-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-split-container" style={{ minHeight: '80vh' }}>
      {/* Left Column: Premium Text */}
      <div className="hero-left-col">
        <div ref={textRef} className="hero-text-content-wrapper products-hero-text" style={{ paddingBottom: '2rem' }}>
          <p className="section-tagline" style={{ color: 'var(--cls-gold)', fontWeight: 600, letterSpacing: '0.15em' }}>
            OUR COLLECTIONS
          </p>
          <h1 style={{ color: 'var(--cls-charcoal)', fontWeight: 300, lineHeight: 1.2, fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Architectural Furnishing Collections
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cls-text-muted)', maxWidth: '480px', lineHeight: '1.7', fontWeight: 300, marginBottom: '2.5rem' }}>
            Explore premium furnishing solutions crafted for luxury interiors. Elevate your spaces with custom drapery, automated blinds, bespoke upholstery, and premium floorings.
          </p>
          
          <div className="hero-action-buttons" style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="#category-grid-section" 
              onClick={handleScrollToCategories} 
              className="btn btn-primary"
            >
              Browse Collections
            </a>
            <a 
              href="https://wa.me/917821085631?text=Hi%20Urban%20Frill%2C%20I%20am%20interested%20in%20a%20design%20consultation%20for%20your%20furnishing%20collections." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Showroom Image */}
      <div className="hero-right-col">
        <div className="hero-image-frame-outer" style={{ height: '550px' }}>
          <div className="hero-image-frame-inner">
            <img 
              ref={imgRef}
              src="/assets/images/showroom.jpg" 
              alt="Urban Frill premium architectural showroom demonstrating luxury curtains and wallpapers" 
              className="hero-carousel-img products-hero-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
