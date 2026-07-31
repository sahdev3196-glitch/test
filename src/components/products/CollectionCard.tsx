import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TiltCard3D } from '../ui/TiltCard3D';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ title, description, image, slug }) => {
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  return (
    <TiltCard3D style={{ height: '100%' }}>
      <Link 
        to={`/products/${slug}`} 
        style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}
        title={`View ${title} collection details`}
      >
        <div
          className="glass-card"
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            border: '1px solid rgba(184, 145, 80, 0.25)',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 15px 45px rgba(160, 140, 115, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
          }}
        >
          {/* Cover Image */}
          <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img 
              src={image} 
              alt={`Premium ${title} details styled by Urban Frill studio`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              loading="lazy"
            />
          </div>

          {/* Details Card */}
          <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(25px)' }}>
            <span className="editorial-small-label" style={{ marginBottom: '0.5rem', display: 'block', color: 'var(--cls-gold)', letterSpacing: '0.12em' }}>
              LUXURY INTERIOR
            </span>
            <h3 className="editorial-card-title" style={{ fontWeight: 500, fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--cls-charcoal)', fontFamily: 'var(--font-display)' }}>
              {title}
            </h3>
            <p className="editorial-body" style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1, margin: 0, color: 'var(--cls-text-muted)' }}>
              {description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cls-gold)', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>
              <span>Explore Collection</span>
              <span ref={arrowRef} style={{ display: 'inline-flex' }}>
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </TiltCard3D>
  );
};

export default CollectionCard;
