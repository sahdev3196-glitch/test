import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { animate } from 'animejs';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ title, description, image, slug }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseEnter = () => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;
    
    if (cardRef.current) {
      animate(cardRef.current, {
        translateY: -6,
        boxShadow: '0 25px 50px rgba(28, 28, 28, 0.08)',
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
    if (imgRef.current) {
      animate(imgRef.current, {
        scale: 1.05,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
    if (arrowRef.current) {
      animate(arrowRef.current, {
        translateX: 6,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
  };

  const handleMouseLeave = () => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    if (cardRef.current) {
      animate(cardRef.current, {
        translateY: 0,
        boxShadow: '0 10px 30px rgba(28, 28, 28, 0.04)',
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
    if (imgRef.current) {
      animate(imgRef.current, {
        scale: 1,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
    if (arrowRef.current) {
      animate(arrowRef.current, {
        translateX: 0,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
  };

  return (
    <Link 
      to={`/products/${slug}`} 
      style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}
      title={`View ${title} collection details`}
    >
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: 'var(--cls-pure-white)',
          borderRadius: 'var(--border-radius-lux)',
          border: '1px solid var(--cls-border-lux)',
          boxShadow: '0 10px 30px rgba(28, 28, 28, 0.04)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transform: 'translateY(0px)',
          transition: 'none'
        }}
      >
        {/* Cover Image */}
        <div style={{ overflow: 'hidden', aspectRatio: '4/3', backgroundColor: 'var(--cls-soft-beige)' }}>
          <img 
            ref={imgRef}
            src={image} 
            alt={`Premium ${title} details styled by Urban Frill studio`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', transformOrigin: 'center' }}
            loading="lazy"
          />
        </div>

        {/* Details Card */}
        <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <span className="editorial-small-label" style={{ marginBottom: '0.5rem', display: 'block', color: 'var(--cls-gold)' }}>
            LUXURY INTERIOR
          </span>
          <h3 className="editorial-card-title" style={{ fontWeight: 400, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            {title}
          </h3>
          <p className="editorial-body" style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1, margin: 0 }}>
            {description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cls-gold)', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>
            <span>Explore Collection</span>
            <span ref={arrowRef} style={{ display: 'inline-flex', transform: 'translateX(0px)' }}>
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
