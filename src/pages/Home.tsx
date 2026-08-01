import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStagger } from '../hooks/useStagger';
import { Briefcase, Award, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { animate } from 'animejs';

// Import UI components
import { ConsultationBanner } from '../components/products/ConsultationBanner';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { RecentProjects } from '../components/products/RecentProjects';
import { TiltCard3D } from '../components/ui/TiltCard3D';

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
        "Urban Frill is Pune's premier architectural furnishing studio. Custom curtains, motorized tracks, roller blinds, textured wallpapers, and luxury flooring systems."
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
      title: 'Upholstery Fabrics',
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
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '8.5rem',
          paddingBottom: '4.5rem',
          position: 'relative'
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
              <span className="glass-pill" style={{ marginBottom: '1.25rem', color: 'var(--cls-gold)', border: '1px solid rgba(184, 145, 80, 0.35)', background: 'rgba(255, 255, 255, 0.7)' }}>
                ✨ CRAFTED FOR TIMELESS INTERIORS
              </span>
              <h1 style={{ 
                fontSize: '3.4rem', 
                fontWeight: 300, 
                lineHeight: 1.12, 
                marginBottom: '1.5rem', 
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #1F1D1A 30%, #9E7736 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Luxury Architectural Furnishings
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--cls-text-muted)', lineHeight: 1.65, marginBottom: '2.5rem', fontWeight: 300 }}>
                Bespoke materials. Automated motorized tracks. Tailored drapes & luxury flooring engineered for Pune's finest residences.
              </p>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <Link 
                  to="/products" 
                  className="glass-btn-primary"
                  style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.04em', background: 'linear-gradient(135deg, #B89150 0%, #8A6D3B 100%)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 10px 30px rgba(184, 145, 80, 0.3)', color: '#FFFFFF' }}
                >
                  Explore Collections <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </Link>
                <Link 
                  to="/contact" 
                  className="glass-btn-secondary"
                  style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.04em', color: '#1F1D1A', border: '1px solid rgba(184, 145, 80, 0.3)' }}
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Right Column (7 Cols) with 3D Tilt Stage */}
            <div 
              ref={heroImgRef as any}
              className="lg:col-span-7 flex justify-center"
              style={{ position: 'relative', opacity: 0 }}
            >
              <TiltCard3D style={{ width: '100%' }}>
                <div 
                  className="glass-card"
                  style={{
                    width: '100%',
                    height: '520px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '10px',
                    border: '1px solid rgba(184, 145, 80, 0.3)',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 60px rgba(160, 140, 115, 0.18)'
                  }}
                >
                  <img 
                    src="/assets/images/hero2.jpg" 
                    alt="Luxury living room curtains and furnishing layout" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '18px'
                    }}
                  />
                  {/* Floating 3D Gold Crest Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(184, 145, 80, 0.4)',
                      borderRadius: '14px',
                      padding: '12px 20px',
                      color: '#1F1D1A',
                      transform: 'translateZ(35px)',
                      boxShadow: '0 15px 35px rgba(160, 140, 115, 0.2)'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'var(--cls-gold)', letterSpacing: '0.12em', fontWeight: 600, display: 'block' }}>PUNE STUDIO</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1F1D1A' }}>Bespoke Drapery & Motorized Systems</span>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Stats Section */}
      <section 
        ref={statsRef as any}
        style={{ 
          padding: '2.5rem 0',
          position: 'relative',
          zIndex: 5
        }}
      >
        <div className="container">
          <div 
            className="glass-panel"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '2rem',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(184, 145, 80, 0.25)',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(160, 140, 115, 0.12)'
            }}
          >
            {/* Stat 1 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(184, 145, 80, 0.15)', color: 'var(--cls-gold)', padding: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(184, 145, 80, 0.3)' }}>
                <Briefcase size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 600, color: '#1F1D1A', margin: 0, fontFamily: 'var(--font-display)' }}>250+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Projects Completed</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(184, 145, 80, 0.15)', color: 'var(--cls-gold)', padding: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(184, 145, 80, 0.3)' }}>
                <Award size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 600, color: '#1F1D1A', margin: 0, fontFamily: 'var(--font-display)' }}>10+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Years of Excellence</span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(184, 145, 80, 0.15)', color: 'var(--cls-gold)', padding: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(184, 145, 80, 0.3)' }}>
                <Sparkles size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 600, color: '#1F1D1A', margin: 0, fontFamily: 'var(--font-display)' }}>50+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Premium Brands</span>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="stat-item-container" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(184, 145, 80, 0.15)', color: 'var(--cls-gold)', padding: '14px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(184, 145, 80, 0.3)' }}>
                <Heart size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 600, color: '#1F1D1A', margin: 0, fontFamily: 'var(--font-display)' }}>25K+</h3>
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
