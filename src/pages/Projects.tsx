import React, { useState, useEffect, useRef } from 'react';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { TiltCard3D } from '../components/ui/TiltCard3D';
import { animate } from 'animejs';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const headerReveal = useRef<HTMLDivElement | null>(null);

  // Update document title for SEO on mount
  useEffect(() => {
    document.title = "Our Projects | Luxury Furnishing Showcase | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore premium design projects completed by Urban Frill. Customized residential drapery, commercial blinds, and hospitality furnishings."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate Header immediately on mount
    if (headerReveal.current) {
      animate(headerReveal.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  // Trigger stagger fade-in and slide-up animation whenever the category filter or visible cards count changes
  useEffect(() => {
    const cards = document.querySelectorAll('.projects-page-card');
    if (cards.length > 0) {
      animate(Array.from(cards), {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: (_el: any, i: number) => i * 15,
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, [selectedFilter, visibleCount]);

  const projectsData = [
    {
      title: 'Modern Elegance',
      city: 'Koregaon Park, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Neutral Harmony',
      city: 'Kalyani Nagar, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Timeless Comfort',
      city: 'Baner, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Earthy Retreat',
      city: 'Kothrud, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Office',
      city: 'Viman Nagar, Pune',
      category: 'commercial',
      image: '/assets/images/blinds.jpg'
    },
    {
      title: 'Luxe Hotel Suite',
      city: 'Boat Club Road, Pune',
      category: 'hospitality',
      image: '/assets/images/hero3.jpg'
    },
    {
      title: 'Warm Minimalism',
      city: 'Model Colony, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Classic Manor',
      city: 'Prabhat Road, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Art Deco Penthouse',
      city: 'Hinjewadi, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cozy Studio Loft',
      city: 'Wakad, Pune',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Creative Agency Hub',
      city: 'Hadapsar, Pune',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Boutique Resort Lounge',
      city: 'Pimple Saudagar, Pune',
      category: 'hospitality',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filters = [
    { name: 'All', key: 'all' },
    { name: 'Residential', key: 'residential' },
    { name: 'Commercial', key: 'commercial' },
    { name: 'Hospitality', key: 'hospitality' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter;
  });

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '8rem', paddingBottom: '4rem' }}>
      <LuxuryBackgroundMotion />

      {/* Header Info */}
      <section 
        ref={headerReveal as any} 
        style={{ opacity: 0, textAlign: 'center', marginBottom: '3.5rem' }}
        className="container"
      >
        <span className="section-tagline" style={{ display: 'block', marginBottom: '0.75rem' }}>
          OUR PROJECTS
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: 'var(--cls-charcoal)', marginBottom: '1.25rem' }}>
          Spaces We Are Proud Of
        </h1>
      </section>

      {/* Category Selector pills */}
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.75rem', 
          flexWrap: 'wrap', 
          marginBottom: '3.5rem' 
        }}
      >
        {filters.map((f) => {
          const isActive = selectedFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => {
                setSelectedFilter(f.key);
                setVisibleCount(6);
              }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '30px',
                border: '1px solid',
                borderColor: isActive ? 'var(--cls-gold)' : 'rgba(220, 210, 198, 0.4)',
                backgroundColor: isActive ? 'var(--cls-charcoal)' : 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: isActive ? '#FFFFFF' : 'var(--cls-charcoal)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--cls-gold)';
                  e.currentTarget.style.color = 'var(--cls-gold)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(220, 210, 198, 0.4)';
                  e.currentTarget.style.color = 'var(--cls-charcoal)';
                }
              }}
            >
              {f.name}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {filteredProjects.slice(0, visibleCount).map((project, idx) => (
            <div key={idx} className="projects-page-card" style={{ opacity: 0 }}>
              <TiltCard3D style={{ height: '100%' }}>
                <div 
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '18px',
                    padding: '12px',
                    border: '1px solid rgba(184, 145, 80, 0.25)',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12)'
                  }}
                >
                  {/* Image outer frame */}
                  <div 
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      aspectRatio: '3/4',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      loading="lazy"
                    />
                  </div>
                  {/* Details text */}
                  <div style={{ padding: '0.85rem 0.5rem 0.25rem', textAlign: 'left', transform: 'translateZ(20px)' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#1F1D1A', margin: 0, fontFamily: 'var(--font-display)' }}>
                      {project.title}
                    </h4>
                    <span className="editorial-small-label" style={{ fontSize: '0.75rem', color: 'var(--cls-gold)', letterSpacing: '0.1em', marginTop: '0.25rem', display: 'block' }}>
                      {project.city}
                    </span>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          ))}
        </div>
      </section>

      {/* Load More Button */}
      {filteredProjects.length > visibleCount && (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={() => setVisibleCount(prev => prev + 3)}
            className="btn btn-secondary"
            style={{ 
              minWidth: '220px', 
              textTransform: 'none', 
              fontWeight: 500,
              borderColor: 'var(--cls-border-lux)'
            }}
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
