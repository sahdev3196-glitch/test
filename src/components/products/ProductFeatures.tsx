import React from 'react';
import { Sparkles } from 'lucide-react';
import type { ProductFeature } from '../../data/productsData';
import { useStagger } from '../../hooks/useStagger';
import playCardHover from '../../animations/hoverAnimations';

interface ProductFeaturesProps {
  features: ProductFeature[];
  title: string;
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features, title }) => {
  if (!features || features.length === 0) return null;

  // Stagger reveal feature cards when they enter the viewport
  const containerRef = useStagger('.feature-card-item', 20, 700);

  return (
    <section 
      ref={containerRef as any}
      className="product-features-section section-padding" 
      style={{ backgroundColor: 'var(--cls-soft-beige)', borderTop: '1px solid rgba(28, 28, 28, 0.05)', opacity: 0 }}
    >
      <div className="container">
        <div className="section-center-header" style={{ marginBottom: '4.5rem' }}>
          <p className="section-tagline" style={{ letterSpacing: '0.15em' }}>CRAFTED INTEGRATION</p>
          <h2>{title} Options & Stylings</h2>
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
            <div 
              key={idx}
              className="feature-card-item"
              onMouseEnter={(e) => playCardHover(e.currentTarget, null, true)}
              onMouseLeave={(e) => playCardHover(e.currentTarget, null, false)}
              style={{
                backgroundColor: 'var(--cls-pure-white)',
                borderRadius: 'var(--border-radius-lux)',
                padding: '2.5rem',
                border: '1px solid rgba(197, 160, 89, 0.15)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                opacity: 0,
                transform: 'translateY(0px)'
              }}
            >
              {/* Feature Icon Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 160, 89, 0.08)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  flexShrink: 0
                }}
              >
                <Sparkles size={18} />
              </div>

              {/* Title & Desc */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--cls-charcoal)', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: '1.6', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
