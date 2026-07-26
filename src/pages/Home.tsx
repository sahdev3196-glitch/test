import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStagger } from '../hooks/useStagger';
import { Briefcase, Award, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { animate } from 'animejs';

// Import UI components
import { ConsultationBanner } from '../components/products/ConsultationBanner';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { RecentProjects } from '../components/products/RecentProjects';

export const Home: React.FC = () => {
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);

  // Update document title for SEO on mount
  useEffect(() => {
    document.title = "Luxury Architectural Furnishing Studio | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Urban Frill is Pune & Jaipur's premium architectural furnishing studio. Custom curtains, motorized tracks, roller blinds, textured wallpapers, and luxury flooring systems."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate Hero elements immediately on mount
    if (heroTextRef.current) {
      animate(heroTextRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
    if (heroImgRef.current) {
      animate(heroImgRef.current, {
        opacity: [0, 1],
        scale: [1.03, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  // Set up animation hooks
  const statsRef = useStagger('.stat-item-container', 15, 800);
  const collectionsRef = useStagger('.collection-card-item', 20, 800);

  const collections = [
    {
      title: 'Curtains',
      desc: 'Elegant, Functional, Timeless.',
      image: '/assets/images/hero2.jpg',
      slug: 'curtains'
    },
    {
      title: 'Blinds',
      desc: 'Light control with modern design.',
      image: '/assets/images/blinds.jpg',
      slug: 'blinds'
    },
    {
      title: 'Wallpapers',
      desc: 'Designs that define your walls.',
      image: '/assets/images/wallpaper.jpg',
      slug: 'wallpaper'
    },
    {
      title: 'Rugs',
      desc: 'Comfort under every step.',
      image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=600&h=450&q=80',
      slug: 'rugs'
    },
    {
      title: 'Fabrica',
      desc: 'Luxury fabrics for every detail.',
      image: '/assets/images/showroom.jpg',
      slug: 'upholstery-fabrics'
    },
    {
      title: 'Flooring',
      desc: 'Beautiful floors. Built to last.',
      image: '/assets/images/wooden_flooring.jpg',
      slug: 'wooden-flooring'
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Floating Decorative Elements */}
      <LuxuryBackgroundMotion />

      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8rem',
          paddingBottom: '4rem',
          backgroundColor: 'var(--cls-warm-white)'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="lg:grid lg:gap-12"
          >
            {/* Left Column (5 Cols) */}
            <div 
              ref={heroTextRef as any}
              className="lg:col-span-5 text-left" 
              style={{ zIndex: 2, opacity: 0 }}
            >
              <span className="section-tagline" style={{ marginBottom: '1rem', display: 'block' }}>
                CRAFTED FOR TIMELESS INTERIORS
              </span>
              <h1 style={{ fontSize: '3rem', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                Luxury Furnishing Solutions
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--cls-text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 300 }}>
                Bespoke materials. Elegant designs. Beautifully crafted for the way you live.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link 
                  to="/products" 
                  className="btn btn-primary"
                  style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em' }}
                >
                  Explore Collections <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>
                <Link 
                  to="/contact" 
                  className="btn btn-secondary"
                  style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.05em' }}
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Right Column (7 Cols) */}
            <div 
              ref={heroImgRef as any}
              className="lg:col-span-7 flex justify-center"
              style={{ position: 'relative', opacity: 0 }}
            >
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
                  alt="Luxury living room curtains and furnishing layout" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef as any}
        style={{ 
          backgroundColor: 'var(--cls-soft-beige)', 
          padding: '3rem 0',
          borderTop: '1px solid var(--cls-border-lux)',
          borderBottom: '1px solid var(--cls-border-lux)'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2.5rem' 
            }}
          >
            {/* Stat 1 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.1)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>250+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Projects Completed</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.1)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>10+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Years of Excellence</span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.1)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>50+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Premium Brands</span>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.1)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>25K+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Collections Grid */}
      <section 
        ref={collectionsRef as any}
        className="section-padding"
        style={{ backgroundColor: 'var(--cls-warm-white)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '3.5rem' }}>
            <span className="section-tagline" style={{ display: 'block', marginBottom: '0.5rem' }}>
              EXPLORE OUR COLLECTIONS
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--cls-charcoal)', fontFamily: 'var(--font-display)', margin: 0 }}>
              Luxury Furnishings
            </h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {collections.map((col, index) => (
              <Link 
                to={`/products/${col.slug}`} 
                key={index}
                className="collection-card-item"
                style={{ 
                  opacity: 0,
                  display: 'flex', 
                  flexDirection: 'column',
                  backgroundColor: 'var(--cls-pure-white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--cls-border-lux)',
                  boxShadow: 'var(--shadow-soft)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.4s var(--transition-smooth), box-shadow 0.4s var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: 'var(--cls-soft-beige)' }}>
                  <img 
                    src={col.image} 
                    alt={col.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--cls-charcoal)', marginBottom: '0.25rem', margin: 0 }}>
                      {col.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', margin: 0 }}>
                      {col.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--cls-border-lux)', color: 'var(--cls-gold)' }}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects (Dark Section) */}
      <RecentProjects />

      {/* Consultation Banner */}
      <ConsultationBanner />
    </div>
  );
};

export default Home;
