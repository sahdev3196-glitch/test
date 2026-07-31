import React, { useEffect, useRef } from 'react';
import { useStagger } from '../hooks/useStagger';
import { ShieldCheck, Palette, Sliders, Handshake, Briefcase, Award, Sparkles, Heart } from 'lucide-react';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { TiltCard3D } from '../components/ui/TiltCard3D';
import { animate } from 'animejs';

export const About: React.FC = () => {
  const introRef = useRef<HTMLDivElement | null>(null);

  // Update document title for SEO on mount
  useEffect(() => {
    document.title = "About Us | Luxury Furnishing Studio | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Learn about Urban Frill, a premium furnishing studio specializing in custom curtains, wallpapers, flooring, and soft furnishings."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate Intro immediately on mount
    if (introRef.current) {
      animate(introRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  // Set up reveal hooks
  const statsRef = useStagger('.about-stat-item', 15, 800);
  const valuesRef = useStagger('.value-card-item', 20, 800);

  const values = [
    {
      title: 'Quality',
      desc: 'We use the finest materials tested for ultimate durability and aesthetics.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Design',
      desc: 'Thoughtful designs tailored for you, harmonizing colors, textures, and scales.',
      icon: <Palette size={24} />
    },
    {
      title: 'Customization',
      desc: 'Tailored solutions just for you down to the exact millimeter specifications.',
      icon: <Sliders size={24} />
    },
    {
      title: 'Trust',
      desc: 'Transparent, reliable service with expert in-house installation and warranty support.',
      icon: <Handshake size={24} />
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '6rem' }}>
      <LuxuryBackgroundMotion />

      {/* Main Intro Section with background image */}
      <section 
        ref={introRef as any}
        style={{ 
          position: 'relative',
          padding: '8rem 0 6rem',
          backgroundImage: 'linear-gradient(rgba(18, 19, 22, 0.75), rgba(18, 19, 22, 0.8)), url(/assets/images/about_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#FFFFFF',
          opacity: 0
        }}
      >
        <div className="container">
          <div 
            className="glass-dark"
            style={{ 
              maxWidth: '850px', 
              margin: '0 auto', 
              textAlign: 'center',
              padding: '3.5rem 2.5rem',
              background: 'rgba(20, 22, 26, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px'
            }}
          >
            <span className="section-tagline" style={{ color: 'var(--cls-gold)', display: 'block', marginBottom: '1.25rem', letterSpacing: '0.15em' }}>
              ABOUT US
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 300, lineHeight: 1.2, fontFamily: 'var(--font-display)', color: '#FFFFFF', marginBottom: '2rem' }}>
              Designing Spaces. Creating Experiences.
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#EAE4DA', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
              Urban Frill is a premium furnishing studio specializing in custom curtains, wallpapers, flooring, and soft furnishings. We blend aesthetics with functionality to craft beautiful spaces.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#D1C7BD', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              Located in the heart of Pune, we consult directly with architects, interior developers, and homeowners to engineer complete soft-furnishing transformations. Our materials are globally sourced, and our dedicated technical teams guarantee clean, exact execution on every site.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              padding: '2.25rem 2.5rem'
            }}
          >
            {/* Stat 1 */}
            <div className="about-stat-item" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.15)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                <Award size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>10+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Years Experience</span>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="about-stat-item" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.15)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                <Heart size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>25K+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Happy Clients</span>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="about-stat-item" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.15)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                <Briefcase size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>250+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Projects Completed</span>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="about-stat-item" style={{ display: 'flex', gap: '15px', alignItems: 'center', opacity: 0 }}>
              <div style={{ backgroundColor: 'rgba(197, 160, 106, 0.15)', color: 'var(--cls-gold)', padding: '12px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                <Sparkles size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--cls-charcoal)', margin: 0 }}>50+</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--cls-text-muted)', display: 'block' }}>Premium Brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (Light Pastel Glass Section) */}
      <section 
        ref={valuesRef as any}
        className="section-padding"
        style={{ backgroundColor: '#F5F0E6', color: '#1F1D1A', position: 'relative', overflow: 'hidden' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="glass-pill" style={{ color: 'var(--cls-gold)', display: 'inline-block', marginBottom: '0.75rem', border: '1px solid rgba(184, 145, 80, 0.35)', background: 'rgba(255, 255, 255, 0.8)' }}>
              OUR VALUES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1F1D1A', fontFamily: 'var(--font-display)', margin: 0 }}>
              What Defines Us
            </h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {values.map((val, idx) => (
              <div key={idx} className="value-card-item" style={{ opacity: 0 }}>
                <TiltCard3D style={{ height: '100%' }}>
                  <div 
                    className="glass-card"
                    style={{ 
                      borderRadius: '20px',
                      padding: '2.5rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                      textAlign: 'left',
                      height: '100%',
                      border: '1px solid rgba(184, 145, 80, 0.25)',
                      background: 'rgba(255, 255, 255, 0.75)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12)'
                    }}
                  >
                    <div style={{ color: 'var(--cls-gold)', display: 'inline-flex', transform: 'translateZ(25px)' }}>
                      {val.icon}
                    </div>
                    <h3 style={{ color: '#1F1D1A', fontSize: '1.3rem', fontWeight: 500, margin: 0, fontFamily: 'var(--font-display)', transform: 'translateZ(20px)' }}>
                      {val.title}
                    </h3>
                    <p style={{ color: 'var(--cls-text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, transform: 'translateZ(15px)' }}>
                      {val.desc}
                    </p>
                  </div>
                </TiltCard3D>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
