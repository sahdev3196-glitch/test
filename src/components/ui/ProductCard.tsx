import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import playCardHover from '../../animations/hoverAnimations';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, slug }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      playCardHover(cardRef.current, imgRef.current, true);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      playCardHover(cardRef.current, imgRef.current, false);
    }
  };

  return (
    <div className="product-card-container" style={{ perspective: 1000 }}>
      <Link 
        to={`/products/${slug}`} 
        style={{ display: 'block', height: '100%', color: 'inherit', textDecoration: 'none' }}
        title={`Explore premium ${title} collections in Pune`}
      >
        <div
          ref={cardRef}
          className="product-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            background: 'var(--cls-pure-white)',
            borderRadius: 'var(--border-radius-lux)',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 30px rgba(28, 28, 28, 0.04)',
            transform: 'translateY(0px)'
          }}
        >
          {/* Product Image Wrapper */}
          <div className="product-img-wrapper" style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
            <img 
              ref={imgRef}
              src={image} 
              alt={`Premium ${title} catalog showcase by Urban Frill Pune`} 
              width="600" 
              height="450" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)' }}
              loading="lazy" 
            />
          </div>

          {/* Card Body */}
          <div className="product-card-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <span className="section-tagline" style={{ fontSize: '0.75rem', color: 'var(--cls-gold)', marginBottom: '0.5rem', display: 'block', fontWeight: 600 }}>
              LUXURY COLLECTION
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--cls-charcoal)', marginBottom: '0.75rem' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
              {description}
            </p>
            <span className="btn-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--cls-gold)', fontSize: '0.85rem', fontWeight: 500 }}>
              Explore Collection <span style={{ transition: 'transform 0.3s' }}>→</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
