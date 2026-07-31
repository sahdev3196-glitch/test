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
      {/* 3D Soft Champagne Light Orb 1 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225, 205, 175, 0.35) 0%, rgba(225, 205, 175, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* 3D Pastel Rose Light Orb 2 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '45%',
          right: '5%',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 185, 150, 0.3) 0%, rgba(212, 185, 150, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 3D Glass Pearl Sphere 1 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '25%',
          left: '5%',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.55)',
          border: '1px solid rgba(184, 145, 80, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 20px 40px rgba(160, 140, 115, 0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
        }}
      />

      {/* 3D Glass Pearl Sphere 2 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '75%',
          right: '12%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.45)',
          border: '1px solid rgba(184, 145, 80, 0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 20px 40px rgba(160, 140, 115, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)'
        }}
      />

      {/* Elegant Champagne Light Ray 1 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '400px',
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, rgba(184, 145, 80, 0.4), transparent)',
          transform: 'rotate(-25deg)',
        }}
      />

      {/* Elegant Champagne Light Ray 2 */}
      <div 
        className="floating-element" 
        style={{
          position: 'absolute',
          top: '70%',
          right: '-5%',
          width: '500px',
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, rgba(184, 145, 80, 0.35), transparent)',
          transform: 'rotate(15deg)',
        }}
      />
    </div>
  );
};

export default LuxuryBackgroundMotion;
