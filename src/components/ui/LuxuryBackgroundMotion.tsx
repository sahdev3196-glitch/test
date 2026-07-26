import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export const LuxuryBackgroundMotion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const elements = container.querySelectorAll('.floating-element');
    elements.forEach((el, index) => {
      animate(el, {
        translateY: [-8, 8],
        direction: 'alternate',
        loop: true,
        duration: 8000 + (index * 600), // Staggered infinite cycle speeds
        easing: 'easeInOutQuad'
      });
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Blur Shape 1 (Beige) */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: 'var(--cls-gold)',
          opacity: 0.03,
          filter: 'blur(24px)',
        }}
      />

      {/* Blur Shape 2 (Taupe) */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '55%',
          right: '6%',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          backgroundColor: 'var(--cls-taupe)',
          opacity: 0.04,
          filter: 'blur(30px)',
        }}
      />

      {/* Elegant Thin Line 1 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '35%',
          left: '4%',
          width: '140px',
          height: '1px',
          backgroundColor: 'var(--cls-gold)',
          opacity: 0.05,
          transform: 'rotate(-12deg)',
        }}
      />

      {/* Elegant Thin Line 2 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '80%',
          left: '18%',
          width: '180px',
          height: '1px',
          backgroundColor: 'var(--cls-taupe)',
          opacity: 0.05,
          transform: 'rotate(18deg)',
        }}
      />

      {/* Soft Radial Gradient */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(250, 249, 246, 0) 70%)',
          opacity: 0.06,
          filter: 'blur(35px)',
        }}
      />
    </div>
  );
};

export default LuxuryBackgroundMotion;
