import React from 'react';
import { Link } from 'react-router-dom';
import { TiltCard3D } from './TiltCard3D';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, slug }) => {
  return (
    <TiltCard3D style={{ height: '100%' }}>
      <Link 
        to={`/products/${slug}`} 
        style={{ display: 'block', height: '100%', color: 'inherit', textDecoration: 'none' }}
        title={`Explore premium ${title} collections in Pune`}
      >
        <div
          className="product-card glass-card"
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(184, 145, 80, 0.25)',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
          }}
        >
          {/* Product Image Wrapper */}
          <div className="product-img-wrapper" style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img 
              src={image} 
              alt={`Premium ${title} catalog showcase by Urban Frill Pune`} 
              width="600" 
              height="450" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              loading="lazy" 
            />
          </div>

          {/* Card Body with 3D Popout effect */}
          <div className="product-card-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(25px)' }}>
            <span className="section-tagline" style={{ fontSize: '0.75rem', color: 'var(--cls-gold)', marginBottom: '0.5rem', display: 'block', fontWeight: 600, letterSpacing: '0.12em' }}>
              LUXURY COLLECTION
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--cls-charcoal)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
              {description}
            </p>
            <span className="btn-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--cls-gold)', fontSize: '0.85rem', fontWeight: 600 }}>
              Explore Collection <span style={{ transition: 'transform 0.3s' }}>→</span>
            </span>
          </div>
        </div>
      </Link>
    </TiltCard3D>
  );
};

export default ProductCard;
