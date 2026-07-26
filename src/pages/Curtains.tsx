import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStagger } from '../hooks/useStagger';
import { Check, Sun, Moon, Waves, Cpu, AlignJustify, Layers, Phone, MessageSquare } from 'lucide-react';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { animate } from 'animejs';

export const Curtains: React.FC = () => {
  const breadcrumbReveal = useRef<HTMLDivElement | null>(null);
  const heroReveal = useRef<HTMLDivElement | null>(null);

  // Update document title for SEO on mount
  useEffect(() => {
    document.title = "Luxury Curtains | Bespoke Window Coverings | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore premium luxury curtains by Urban Frill. Custom sheer curtains, blockout shades, wave drapes, and smart motorized track integrations."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate breadcrumbs and hero immediately on mount
    if (breadcrumbReveal.current) {
      animate(breadcrumbReveal.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 600,
        easing: 'easeOutExpo'
      });
    }
    if (heroReveal.current) {
      animate(heroReveal.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 100
      });
    }
  }, []);

  const typesReveal = useStagger('.curtain-type-card', 15, 800);
  const showcaseReveal = useStagger('.curtain-showcase-card', 20, 800);

  const curtainTypes = [
    { name: 'Sheer Curtains', icon: <Sun size={24} /> },
    { name: 'Blackout Curtains', icon: <Moon size={24} /> },
    { name: 'Wave Curtains', icon: <Waves size={24} /> },
    { name: 'Motorized Curtains', icon: <Cpu size={24} /> },
    { name: 'Pleated Curtains', icon: <AlignJustify size={24} /> },
    { name: 'Roman Curtains', icon: <Layers size={24} /> }
  ];

  const curtainCollections = [
    {
      title: 'Sheer Curtains',
      desc: 'Light, airy and elegant.',
      image: '/assets/images/hero3.jpg'
    },
    {
      title: 'Blackout Curtains',
      desc: 'Complete privacy and comfort.',
      image: '/assets/images/hero1.jpg'
    },
    {
      title: 'Wave Curtains',
      desc: 'Soft waves for a luxurious look.',
      image: '/assets/images/hero4.jpg'
    },
    {
      title: 'Motorized Curtains',
      desc: 'Smart living with effortless control.',
      image: '/assets/images/blinds.jpg'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = `Hi Urban Frill, I am interested in custom curtains and would like to discuss my requirements or book a free consult.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '7.5rem', paddingBottom: '4rem' }}>
      <LuxuryBackgroundMotion />

      {/* Breadcrumb Path */}
      <nav 
        ref={breadcrumbReveal as any}
        className="container" 
        aria-label="Breadcrumb"
        style={{ 
          opacity: 0, 
          display: 'flex', 
          gap: '8px', 
          fontSize: '0.8rem', 
          letterSpacing: '0.05em', 
          color: 'var(--cls-text-muted)',
          marginBottom: '2rem',
          textAlign: 'left'
        }}
      >
        <Link to="/" style={{ color: 'var(--cls-text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cls-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cls-text-muted)'}>Home</Link>
        <span>/</span>
        <Link to="/products" style={{ color: 'var(--cls-text-muted)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cls-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cls-text-muted)'}>Products</Link>
        <span>/</span>
        <span style={{ color: 'var(--cls-charcoal)', fontWeight: 500 }}>Curtains</span>
      </nav>

      {/* Category Hero Block */}
      <section 
        ref={heroReveal as any} 
        style={{ opacity: 0, marginBottom: '5rem' }}
        className="container"
      >
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}
          className="lg:grid-cols-12"
        >
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 text-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: 'var(--cls-charcoal)', margin: 0 }}>
              Luxury Curtains
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--cls-text-muted)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              A perfect blend of style, privacy and functionality crafted in premium fabrics.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0 1rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem', color: 'var(--cls-text-dark)' }}>
                <Check size={16} style={{ color: 'var(--cls-gold)' }} />
                <span>Premium quality fabrics</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem', color: 'var(--cls-text-dark)' }}>
                <Check size={16} style={{ color: 'var(--cls-gold)' }} />
                <span>Multiple patterns & textures</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem', color: 'var(--cls-text-dark)' }}>
                <Check size={16} style={{ color: 'var(--cls-gold)' }} />
                <span>Motorized & manual options</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.95rem', color: 'var(--cls-text-dark)' }}>
                <Check size={16} style={{ color: 'var(--cls-gold)' }} />
                <span>Perfect for living & bedrooms</span>
              </li>
            </ul>

            <Link 
              to="/contact" 
              className="btn btn-primary"
              style={{ textTransform: 'none', fontWeight: 500, alignSelf: 'flex-start' }}
            >
              Book Consultation
            </Link>
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-medium)',
                height: '460px',
                width: '100%'
              }}
            >
              <img 
                src="/assets/images/hero2.jpg" 
                alt="Luxury Curtains showroom layout" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curtain Types blocks */}
      <section 
        ref={typesReveal as any}
        className="container"
        style={{ marginBottom: '6rem' }}
      >
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {curtainTypes.map((type, idx) => (
            <div 
              key={idx}
              className="curtain-type-card"
              style={{ 
                opacity: 0,
                backgroundColor: 'var(--cls-pure-white)',
                border: '1px solid var(--cls-border-lux)',
                borderRadius: '12px',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cls-gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--cls-border-lux)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <div style={{ color: 'var(--cls-gold)' }}>
                {type.icon}
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--cls-charcoal)', letterSpacing: '0.02em', textAlign: 'center' }}>
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Curtain Collections grid */}
      <section 
        ref={showcaseReveal as any}
        className="container"
        style={{ marginBottom: '6rem' }}
      >
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <span className="section-tagline" style={{ display: 'block', marginBottom: '0.5rem' }}>
            EXPLORE OUR CURTAIN COLLECTIONS
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 300, color: 'var(--cls-charcoal)', fontFamily: 'var(--font-display)', margin: 0 }}>
            Curtain Showcase
          </h2>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {curtainCollections.map((col, idx) => (
            <div 
              key={idx}
              className="curtain-showcase-card"
              style={{
                opacity: 0,
                backgroundColor: 'var(--cls-pure-white)',
                border: '1px solid var(--cls-border-lux)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                textAlign: 'left'
              }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', backgroundColor: 'var(--cls-soft-beige)' }}>
                <img 
                  src={col.image} 
                  alt={col.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--cls-charcoal)', marginBottom: '0.25rem', margin: 0 }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', margin: 0 }}>
                  {col.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Banner for Curtains */}
      <section className="container">
        <div 
          style={{
            backgroundColor: 'var(--cls-soft-beige)',
            borderRadius: '16px',
            border: '1px solid var(--cls-border-lux)',
            padding: '3.5rem 4rem',
            boxShadow: 'var(--shadow-medium)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            textAlign: 'left'
          }}
          className="md:grid-cols-12"
        >
          {/* LEFT DETAILS COLUMN */}
          <div className="md:col-span-8">
            <span className="editorial-small-label" style={{ color: 'var(--cls-gold)', marginBottom: '0.75rem', display: 'block' }}>
              WANT CUSTOM CURTAINS?
            </span>
            <h2 className="editorial-section-heading font-serif" style={{ fontSize: '2.4rem', textTransform: 'none', marginBottom: '1rem', marginTop: 0 }}>
              Book a consultation with our experts
            </h2>
            <p className="editorial-body" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
              Coordinate with our experienced designers to measure your spaces, choose matching colors, and create custom drapes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="tel:+919876543210" 
                className="btn btn-primary"
                style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500 }}
              >
                <Phone size={15} style={{ marginRight: '8px' }} />
                Call Now
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="btn btn-secondary"
                style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500 }}
              >
                <MessageSquare size={15} style={{ marginRight: '8px' }} />
                WhatsApp
              </button>
            </div>
          </div>

          {/* RIGHT CERAMIC VASE ILLUSTRATION */}
          <div className="md:col-span-4 flex justify-center md:justify-end" style={{ pointerEvents: 'none' }}>
            <svg viewBox="0 0 200 300" width="160" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Minimalist vase body */}
              <path d="M85 180 C85 150, 115 150, 115 180 C115 210, 135 220, 135 250 C135 280, 65 280, 65 250 C65 220, 85 210, 85 180 Z" fill="#EAE4DA" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinejoin="round" />
              {/* Gold accent line */}
              <path d="M80 230 C90 232, 110 232, 120 230" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Botanical stems */}
              <path d="M100 180 C80 140, 70 80, 50 60" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 110 C50 100, 45 90, 40 85" stroke="var(--cls-taupe)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M100 180 C110 130, 120 70, 150 40" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M125 100 C135 90, 140 85, 145 80" stroke="var(--cls-taupe)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M100 180 C100 120, 105 80, 110 50" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curtains;
