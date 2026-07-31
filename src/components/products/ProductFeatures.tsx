import React from 'react';
import { Sparkles } from 'lucide-react';
import type { ProductFeature } from '../../data/productsData';
import { useStagger } from '../../hooks/useStagger';
import { TiltCard3D } from '../ui/TiltCard3D';

interface ProductFeaturesProps {
  features: ProductFeature[];
  title: string;
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features, title }) => {
  // Call hooks unconditionally at top level
  const containerRef = useStagger('.feature-card-item', 20, 700);

  if (!features || features.length === 0) return null;

  return (
    <section 
      ref={containerRef as any}
      className="product-features-section section-padding" 
      style={{ opacity: 0 }}
    >
      <div className="container">
        <div className="section-center-header" style={{ marginBottom: '4.5rem' }}>
          <span className="glass-pill" style={{ letterSpacing: '0.15em', color: 'var(--cls-gold)', border: '1px solid rgba(184, 145, 80, 0.35)', background: 'rgba(255, 255, 255, 0.8)' }}>CRAFTED INTEGRATION</span>
          <h2 style={{ color: '#1F1D1A', marginTop: '0.75rem' }}>{title} Options & Stylings</h2>
        </div>

        {/* Elegant Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card-item" style={{ opacity: 0 }}>
              <TiltCard3D style={{ height: '100%' }}>
                <div 
                  className="glass-card"
                  style={{
                    borderRadius: '20px',
                    padding: '2.5rem',
                    border: '1px solid rgba(184, 145, 80, 0.25)',
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%'
                  }}
                >
                  {/* Feature Icon Header */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(184, 145, 80, 0.15)',
                      color: 'var(--cls-gold)',
                      borderRadius: '50%',
                      width: '44px',
                      height: '44px',
                      flexShrink: 0,
                      transform: 'translateZ(25px)',
                      border: '1px solid rgba(184, 145, 80, 0.3)'
                    }}
                  >
                    <Sparkles size={20} />
                  </div>

                  {/* Title & Desc */}
                  <div style={{ transform: 'translateZ(20px)' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 500, color: '#1F1D1A', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: '1.6', margin: 0 }}>
                      {feature.description}
                    </p>
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

export default ProductFeatures;
