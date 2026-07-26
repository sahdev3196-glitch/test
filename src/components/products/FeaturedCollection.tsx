import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { animate } from 'animejs';
import { useReveal } from '../../hooks/useReveal';
import { staggerElements } from '../../animations/stagger';

interface SubCategory {
  key: string;
  label: string;
  title: string;
  desc: string;
  image: string;
  features: string[];
}

export const FeaturedCollection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sheer');
  const sectionRef = useReveal(800);
  const showcaseRef = useReveal(800);
  
  const rightImgRef = useRef<HTMLImageElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const showcaseGridRef = useRef<HTMLDivElement | null>(null);

  const subCategories: SubCategory[] = [
    {
      key: 'sheer',
      label: 'Sheer',
      title: 'Sheer Curtains',
      desc: 'Create soft, dreamy interiors with light-filtering sheer fabrics. Designed to diffuse harsh afternoon glare into a warm, gentle glow while maintaining privacy.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      features: ['Linen and voile textures', 'Gentle natural light filtration', 'Daytime privacy protection', 'Double-fullness soft flows']
    },
    {
      key: 'blackout',
      label: 'Blackout',
      title: 'Acoustic Blackout Curtains',
      desc: 'Complete light blockage and thermal insulation for modern bedrooms and media rooms. Engineered with premium dense linings that restrict sunlight and dampen noise.',
      image: '/assets/images/hero2.jpg',
      features: ['100% complete blackout linings', 'Thermal heat protection layers', 'Acoustic noise reduction', 'Luxurious thick drape profiles']
    },
    {
      key: 'wave',
      label: 'Wave',
      title: 'Ripple-Fold Wave Curtains',
      desc: 'Symmetrical wave folds that drape effortlessly along slim tracks. An excellent architectural curtain styling that feels clean, structural, and modern.',
      image: '/assets/images/hero3.jpg',
      features: ['Symmetrical wave fold layouts', 'Slim space-saving tracks', 'Ideal for tall double-height rooms', 'Effortless sliding glide cords']
    },
    {
      key: 'motorized',
      label: 'Motorized',
      title: 'Smart Motorized Curtains',
      desc: 'Automated curtain tracks with quiet brushless motors. Synchronize your custom curtains with Alexa, mobile layouts, or timers for effortless control.',
      image: '/assets/images/hero1.jpg',
      features: ['Quiet DC brushless motors', 'Smartphone app and voice link', 'Manual-pull override trigger', 'Somfy & Tuya smart integration']
    },
    {
      key: 'pleated',
      label: 'Pleated',
      title: 'Classic Pleated Curtains',
      desc: 'Tailored double and triple pinch-pleat systems that provide formal structure. Suitable for premium master bedroom drapery and luxury drawing salons.',
      image: 'https://images.unsplash.com/photo-1541249008-0113c4c9e8a0?auto=format&fit=crop&w=800&q=80',
      features: ['Double or pinch-pleat headers', 'Structured tailor-stitched folds', 'Works with decorative metal rods', 'Traditional premium luxury look']
    },
    {
      key: 'roman',
      label: 'Roman',
      title: 'Tailored Roman Curtains',
      desc: 'Flat fabric panels that gather up in clean horizontal folds when raised. A space-conscious window treatment suitable for kitchens, studies, and narrow sky windows.',
      image: '/assets/images/blinds.jpg',
      features: ['Compact flat panels', 'Elegant horizontal fold stacks', 'Ideal for compact windows', 'Hand-stitched rod pockets']
    }
  ];

  const currentData = subCategories.find(s => s.key === activeTab) || subCategories[0];

  // Stagger reveal showcase list when entering view
  useEffect(() => {
    if (showcaseGridRef.current) {
      const items = showcaseGridRef.current.querySelectorAll('.showcase-card');
      if (items.length > 0) {
        staggerElements(items, 20, 600);
      }
    }
  }, []);

  // Animates featured category change transition
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (rightImgRef.current) {
      animate(rightImgRef.current, {
        opacity: [0.4, 1],
        scale: [1.02, 1],
        duration: 500,
        easing: 'easeOutQuart'
      });
    }

    if (leftTextRef.current) {
      animate(leftTextRef.current.children, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 500,
        delay: (_el: any, i: number) => i * 60,
        easing: 'easeOutQuart'
      });
    }
  }, [activeTab]);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact-section');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowcaseMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector('.showcase-img');
    const overlay = card.querySelector('.showcase-overlay');
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (img) animate(img, { scale: 1.05, duration: 250, easing: 'easeOutQuart' });
    if (overlay) animate(overlay, { opacity: 0.15, duration: 250, easing: 'easeOutQuart' });
  };

  const handleShowcaseMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector('.showcase-img');
    const overlay = card.querySelector('.showcase-overlay');
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (img) animate(img, { scale: 1, duration: 250, easing: 'easeOutQuart' });
    if (overlay) animate(overlay, { opacity: 0, duration: 250, easing: 'easeOutQuart' });
  };

  return (
    <div style={{ backgroundColor: 'var(--cls-pure-white)' }}>
      {/* 4. Featured Category Section */}
      <section 
        ref={sectionRef as any}
        className="section-padding" 
        style={{ borderTop: '1px solid var(--cls-border-lux)', opacity: 0 }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* LEFT DETAILS COLUMN */}
            <div className="col-span-12 lg:col-span-5">
              <div ref={leftTextRef}>
                <span className="editorial-small-label" style={{ marginBottom: '1rem', display: 'block' }}>
                  FEATURED CATEGORY
                </span>
                <h2 className="editorial-section-heading" style={{ marginBottom: '1.5rem' }}>
                  {currentData.title}
                </h2>
                <p className="editorial-body" style={{ marginBottom: '2rem' }}>
                  {currentData.desc}
                </p>

                {/* Feature checklist */}
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
                  {currentData.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--cls-text-dark)' }}>
                      <Sparkles size={14} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact-section" 
                  onClick={handleScrollToContact} 
                  className="btn btn-primary"
                  style={{ textTransform: 'none', fontWeight: 500 }}
                >
                  Book Consultation
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE & SELECTOR COLUMN */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
              {/* Active Subcategory Image */}
              <div 
                style={{
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--border-radius-lux)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <img 
                  ref={rightImgRef}
                  src={currentData.image} 
                  alt={currentData.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)' }}
                />
              </div>

              {/* Horizontal Outlined Square Selectors */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '0.75rem',
                  marginTop: '0.5rem'
                }}
                className="md:grid-cols-6"
              >
                {subCategories.map((sub) => {
                  const isActive = sub.key === activeTab;
                  return (
                    <button
                      key={sub.key}
                      onClick={() => setActiveTab(sub.key)}
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: isActive ? 600 : 400,
                        backgroundColor: isActive ? 'rgba(197, 162, 106, 0.05)' : 'transparent',
                        color: isActive ? 'var(--cls-gold)' : 'var(--cls-text-muted)',
                        border: isActive ? '1.5px solid var(--cls-gold)' : '1.5px solid var(--cls-border-lux)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
                      }}
                      className="hover:border-amber-600 focus:outline-none"
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Collection Showcase (Horizontal Gallery) */}
      <section 
        ref={showcaseRef as any}
        className="section-padding" 
        style={{ 
          backgroundColor: 'var(--cls-soft-beige)', 
          borderTop: '1px solid var(--cls-border-lux)', 
          opacity: 0 
        }}
      >
        <div className="container">
          <div className="section-center-header" style={{ marginBottom: '4rem' }}>
            <span className="editorial-small-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              Collection Showcase
            </span>
            <h2 className="editorial-section-heading">Curated Drapery Styles</h2>
          </div>

          <div 
            ref={showcaseGridRef}
            className="grid grid-cols-12 gap-8"
            style={{ alignItems: 'stretch' }}
          >
            {subCategories.slice(0, 4).map((sub) => (
              <div 
                key={sub.key}
                className="showcase-card col-span-12 sm:col-span-6 lg:col-span-3"
                onMouseEnter={handleShowcaseMouseEnter}
                onMouseLeave={handleShowcaseMouseLeave}
                style={{
                  backgroundColor: 'var(--cls-pure-white)',
                  borderRadius: 'var(--border-radius-lux)',
                  border: '1px solid var(--cls-border-lux)',
                  boxShadow: 'var(--shadow-soft)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                {/* Image Showcase Frame */}
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5' }}>
                  <img 
                    src={sub.image} 
                    alt={sub.title} 
                    className="showcase-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', transformOrigin: 'center' }}
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div 
                    className="showcase-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'var(--cls-charcoal)',
                      opacity: 0,
                      transition: 'none'
                    }}
                  />
                </div>

                {/* Details Footer */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--cls-charcoal)' }}>
                    {sub.title}
                  </h4>
                  <p className="editorial-body" style={{ fontSize: '0.85rem', lineHeight: '1.45', margin: 0 }}>
                    {sub.desc.split('.')[0]}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCollection;
