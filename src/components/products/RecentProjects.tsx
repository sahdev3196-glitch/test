import React from 'react';
import { Link } from 'react-router-dom';
import { useStagger } from '../../hooks/useStagger';
import { TiltCard3D } from '../ui/TiltCard3D';

export const RecentProjects: React.FC = () => {
  const projects = [
    {
      title: 'Modern Elegance',
      city: 'Koregaon Park, Pune',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Neutral Harmony',
      city: 'Kalyani Nagar, Pune',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Timeless Comfort',
      city: 'Baner, Pune',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Earthy Retreat',
      city: 'Boat Club Road, Pune',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Stagger reveal project cards when they enter the viewport
  const containerRef = useStagger('.project-item-container', 20, 800);

  return (
    <section 
      ref={containerRef as any}
      className="recent-projects-section section-padding" 
      style={{ backgroundColor: '#F5F0E6', position: 'relative', overflow: 'hidden' }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <span className="glass-pill" style={{ color: 'var(--cls-gold)', border: '1px solid rgba(184, 145, 80, 0.35)', background: 'rgba(255, 255, 255, 0.8)' }}>
              LUXURY INSIGHTS
            </span>
            <h2 className="editorial-section-heading font-serif" style={{ color: '#1F1D1A', marginTop: '0.75rem', marginBottom: 0 }}>
              Recent Projects in Pune
            </h2>
          </div>
          <Link 
            to="/projects"
            style={{ 
              fontSize: '0.85rem', 
              color: 'var(--cls-gold)', 
              fontWeight: 600, 
              letterSpacing: '0.05em',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#1F1D1A'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cls-gold)'}
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="project-item-container col-span-12 sm:col-span-6 lg:col-span-3"
              style={{ opacity: 0 }}
            >
              <TiltCard3D style={{ height: '100%' }}>
                <div 
                  className="glass-card"
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px',
                    border: '1px solid rgba(184, 145, 80, 0.25)',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12)'
                  }}
                >
                  {/* Image Frame */}
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
                      alt={`${project.title} showing styled window treatments in ${project.city}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Text details */}
                  <div style={{ padding: '0.85rem 0.5rem 0.25rem', transform: 'translateZ(20px)' }}>
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
      </div>
    </section>
  );
};

export default RecentProjects;
