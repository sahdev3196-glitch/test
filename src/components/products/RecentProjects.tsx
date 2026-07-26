import React from 'react';
import { Link } from 'react-router-dom';
import { animate } from 'animejs';
import { useStagger } from '../../hooks/useStagger';

export const RecentProjects: React.FC = () => {
  const projects = [
    {
      title: 'Modern Elegance',
      city: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Neutral Harmony',
      city: 'Delhi',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Timeless Comfort',
      city: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Earthy Retreat',
      city: 'Jodhpur',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Stagger reveal project cards when they enter the viewport
  const containerRef = useStagger('.project-item-container', 20, 800);

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;
    animate(e.currentTarget, {
      scale: 1.04,
      duration: 300,
      easing: 'easeOutQuart'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;
    animate(e.currentTarget, {
      scale: 1,
      duration: 300,
      easing: 'easeOutQuart'
    });
  };

  return (
    <section 
      ref={containerRef as any}
      className="recent-projects-section section-padding" 
      style={{ backgroundColor: '#1F1F1F' }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <span className="editorial-small-label" style={{ color: 'var(--cls-gold)', letterSpacing: '0.15em' }}>
              LUXURY INSIGHTS
            </span>
            <h2 className="editorial-section-heading font-serif" style={{ color: 'var(--cls-pure-white)', marginTop: '0.5rem', marginBottom: 0 }}>
              Recent Projects
            </h2>
          </div>
          <Link 
            to="/projects"
            style={{ 
              fontSize: '0.85rem', 
              color: 'var(--cls-gold)', 
              fontWeight: 500, 
              letterSpacing: '0.05em',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cls-gold)'}
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        <div 
          className="grid grid-cols-12 gap-8"
        >
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="project-item-container col-span-12 sm:col-span-6 lg:col-span-3"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                opacity: 0
              }}
            >
              {/* Image Frame with Zoom */}
              <div 
                style={{
                  borderRadius: 'var(--border-radius-lux)',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                }}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} showing styled window treatments in ${project.city}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', transformOrigin: 'center' }}
                  loading="lazy"
                />
              </div>

              {/* Text details */}
              <div style={{ padding: '0.25rem 0' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--cls-pure-white)', margin: 0 }}>
                  {project.title}
                </h4>
                <span className="editorial-small-label" style={{ fontSize: '0.75rem', color: 'var(--cls-gold)', letterSpacing: '0.1em', marginTop: '0.25rem', display: 'block' }}>
                  {project.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
