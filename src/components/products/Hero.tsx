import React, { useEffect, useRef } from 'react';
import { Sparkles, Compass, Sliders, ShieldCheck } from 'lucide-react';
import { animateHero } from '../../animations/hero';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Run Anime.js v4 entry animation when hero mounts
    animateHero('.editorial-hero-text', '.editorial-hero-img', '.editorial-hero-glass-card');
  }, []);

  const handleScrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('collections-grid-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="hero-section" 
      style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '6rem', 
        paddingBottom: '4rem',
        position: 'relative',
        backgroundColor: 'var(--cls-warm-white)'
      }}
    >
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2.5rem', 
            gridTemplateColumns: 'repeat(12, 1fr)',
            alignItems: 'stretch'
          }}
          className="lg:grid lg:gap-12"
        >
          {/* LEFT COLUMN (40% equivalent grid) */}
          <div className="lg:col-span-5 flex flex-col justify-center" style={{ zIndex: 2 }}>
            <div className="editorial-hero-text" style={{ opacity: 0 }}>
              <span className="editorial-small-label" style={{ marginBottom: '1.25rem', display: 'block' }}>
                Studio Showcase
              </span>
              <h1 className="editorial-hero-title" style={{ marginBottom: '1.5rem', textTransform: 'none' }}>
                Luxury Furnishing Solutions
              </h1>
              <p className="editorial-body" style={{ marginBottom: '2.5rem', maxWidth: '440px' }}>
                Crafted for timeless interiors with bespoke materials and exceptional craftsmanship. We engineer custom drapery, automated blinds, and tailored fabrics for Pune's most refined residential and corporate spaces.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="#collections-grid-section" 
                  onClick={handleScrollToCollections} 
                  className="btn btn-primary"
                  style={{ textTransform: 'none', fontWeight: 500 }}
                >
                  Browse Collections
                </a>
                <a 
                  href="#contact-section" 
                  onClick={handleScrollToContact} 
                  className="btn btn-secondary"
                  style={{ textTransform: 'none', fontWeight: 500 }}
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (60% equivalent grid) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Main Lifestyle Image */}
            <div 
              style={{
                width: '100%',
                height: '520px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                position: 'relative'
              }}
            >
              <img 
                src="/assets/images/hero2.jpg" 
                alt="Luxury living room showcasing custom double-pleat curtains by Urban Frill studio" 
                className="editorial-hero-img"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  opacity: 0,
                  transform: 'scale(1.05)',
                  transformOrigin: 'center'
                }}
              />
            </div>

            {/* Overlapping Floating Glass Card */}
            <div 
              className="editorial-hero-glass-card glass-floating-card absolute"
              style={{
                bottom: '-25px',
                left: '5%',
                right: '5%',
                padding: '1.75rem 2rem',
                zIndex: 3,
                opacity: 0,
                transform: 'translateY(40px)'
              }}
            >
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                  gap: '1.5rem' 
                }}
              >
                {/* Point 1 */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Sparkles size={16} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                    Premium Materials
                  </span>
                </div>
                {/* Point 2 */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Compass size={16} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                    Expert Craftsmanship
                  </span>
                </div>
                {/* Point 3 */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Sliders size={16} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                    Custom Solutions
                  </span>
                </div>
                {/* Point 4 */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                    Professional Install
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
