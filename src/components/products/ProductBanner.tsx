import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface ProductBannerProps {
  headline: string;
  tagline: string;
  description: string;
  image: string;
}

export const ProductBanner: React.FC<ProductBannerProps> = ({ headline, tagline, description, image }) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      if (textRef.current) {
        animate(Array.from(textRef.current.children), { opacity: 1, translateY: 0, duration: 0 });
      }
      if (imgRef.current) {
        animate(imgRef.current, { scale: 1, opacity: 1, duration: 0 });
      }
      return;
    }

    // Text elements stagger reveal
    if (textRef.current) {
      const textChildren = Array.from(textRef.current.children);
      animate(textChildren, { opacity: 0, duration: 0 });
      animate(textChildren, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: (_el: any, i: number) => i * 100,
        easing: 'easeOutQuart'
      });
    }

    // Banner image scale down & settle
    if (imgRef.current) {
      animate(imgRef.current, { scale: 1.05, opacity: 0, duration: 0 });
      animate(imgRef.current, {
        opacity: [0, 1],
        scale: [1.05, 1],
        duration: 1000,
        easing: 'easeOutQuart'
      });
    }
  }, [headline]);

  return (
    <div style={{ backgroundColor: 'var(--cls-warm-white)', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        {/* Banner Headers */}
        <div ref={textRef} style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
          <span className="section-tagline" style={{ letterSpacing: '0.15em', color: 'var(--cls-gold)', display: 'block' }}>
            {tagline}
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--cls-charcoal)', lineHeight: '1.1', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            {headline}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: '1.7' }}>
            {description}
          </p>
        </div>

        {/* Large Premium Banner Image */}
        <div 
          style={{
            width: '100%',
            height: '480px',
            borderRadius: 'var(--border-radius-lux)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-medium)'
          }}
        >
          <img 
            ref={imgRef}
            src={image} 
            alt={`${headline} showroom banner`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
