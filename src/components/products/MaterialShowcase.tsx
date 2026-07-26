import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { animate } from 'animejs';
import { useReveal } from '../../hooks/useReveal';
import { staggerElements } from '../../animations/stagger';

interface SwatchItem {
  name: string;
  image: string;
}

export const MaterialShowcase: React.FC = () => {
  const sectionRef = useReveal(800);
  const swatchesRef = useReveal(800);
  const swatchesGridRef = useRef<HTMLDivElement | null>(null);

  const swatches: SwatchItem[] = [
    {
      name: 'Linen',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Velvet',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Cotton',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Silk',
      image: 'https://images.unsplash.com/photo-1582298538104-fc2c0a5a8f7c?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Chenille',
      image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      name: 'Jacquard',
      image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ];

  // Stagger swatches when visible
  useEffect(() => {
    if (swatchesGridRef.current) {
      const items = swatchesGridRef.current.querySelectorAll('.swatch-card');
      if (items.length > 0) {
        staggerElements(items, 20, 600);
      }
    }
  }, []);

  const handleSwatchMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;
    animate(e.currentTarget, {
      scale: 1.04,
      borderColor: 'var(--cls-gold)',
      boxShadow: '0 12px 24px rgba(197, 162, 106, 0.1)',
      duration: 250,
      easing: 'easeOutQuart'
    });
  };

  const handleSwatchMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;
    animate(e.currentTarget, {
      scale: 1,
      borderColor: 'var(--cls-border-lux)',
      boxShadow: 'none',
      duration: 250,
      easing: 'easeOutQuart'
    });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact-section');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--cls-warm-white)' }}>
      {/* 6. Premium Materials Split section */}
      <section 
        ref={sectionRef as any}
        className="section-padding" 
        style={{ borderTop: '1px solid var(--cls-border-lux)', opacity: 0 }}
      >
        <div className="container grid grid-cols-12 gap-12 items-center">
          {/* LEFT DETAILS COLUMN */}
          <div className="col-span-12 lg:col-span-5">
            <span className="editorial-small-label" style={{ marginBottom: '1rem', display: 'block' }}>
              TACTILE EXCELLENCE
            </span>
            <h2 className="editorial-section-heading" style={{ marginBottom: '1.5rem', textTransform: 'none' }}>
              Premium Fabrics. Impeccable Finish.
            </h2>
            <p className="editorial-body" style={{ marginBottom: '2.5rem' }}>
              Our design studio sources the finest drapery, linen, velvet, and upholstery materials from premium international mills. We stitch every edge with precision to ensure a luxurious drape and longevity.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 162, 106, 0.08)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  flexShrink: 0
                }}>
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                  Imported Fabrics (Belgium, Italy, Turkey)
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 162, 106, 0.08)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  flexShrink: 0
                }}>
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                  Premium Textures & Light-Refractive Finishes
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 162, 106, 0.08)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  flexShrink: 0
                }}>
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                  Custom Stitching with Double-Hem Detailings
                </span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 162, 106, 0.08)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  flexShrink: 0
                }}>
                  <Check size={14} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                  Luxury Martindale Abrasion-Certified Standards
                </span>
              </li>
            </ul>

            <a 
              href="#contact-section" 
              onClick={handleScrollToContact} 
              className="btn btn-primary"
              style={{ textTransform: 'none', fontWeight: 500 }}
            >
              Explore Materials
            </a>
          </div>

          {/* RIGHT TEXTURE IMAGE COLUMN */}
          <div className="col-span-12 lg:col-span-7">
            <div 
              style={{
                width: '100%',
                height: '460px',
                borderRadius: 'var(--border-radius-lux)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1582298538104-fc2c0a5a8f7c?auto=format&fit=crop&w=900&q=80" 
                alt="Close-up of premium silk draping fabrics by Urban Frill" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Fabric Swatches Grid */}
      <section 
        ref={swatchesRef as any}
        className="section-padding" 
        style={{ borderTop: '1px solid var(--cls-border-lux)', opacity: 0 }}
      >
        <div className="container">
          <div className="section-center-header" style={{ marginBottom: '4.5rem' }}>
            <span className="editorial-small-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              TACTILE SWATCHES
            </span>
            <h2 className="editorial-section-heading">Curated Material Library</h2>
          </div>

          {/* Swatches List */}
          <div 
            ref={swatchesGridRef}
            className="grid grid-cols-12 gap-6"
          >
            {swatches.map((swatch, idx) => (
              <div 
                key={idx}
                className="swatch-card col-span-6 sm:col-span-4 lg:col-span-2"
                onMouseEnter={handleSwatchMouseEnter}
                onMouseLeave={handleSwatchMouseLeave}
                style={{
                  backgroundColor: 'var(--cls-pure-white)',
                  border: '1.5px solid var(--cls-border-lux)',
                  borderRadius: 'var(--border-radius-lux)',
                  overflow: 'hidden',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'none'
                }}
              >
                {/* Circle Texture Frame */}
                <div 
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid rgba(28, 28, 28, 0.05)',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)'
                  }}
                >
                  <img 
                    src={swatch.image} 
                    alt={`${swatch.name} fabric swatch preview`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                {/* Swatch Name */}
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialShowcase;
