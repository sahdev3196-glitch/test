import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { animate } from 'animejs';

interface BreadcrumbProps {
  categoryTitle: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ categoryTitle }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const items = Array.from(containerRef.current.children);

      if (isReduced) {
        animate(items, { opacity: 1, translateX: 0, duration: 0 });
        return;
      }

      // Pre-set child items to 0 opacity instantly
      animate(items, { opacity: 0, duration: 0 });

      // Stagger animate from left to right
      animate(items, {
        opacity: [0, 1],
        translateX: [-8, 0],
        duration: 400,
        delay: (_el: any, i: number) => i * 60,
        easing: 'easeOutQuart'
      });
    }
  }, [categoryTitle]);

  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{ 
        padding: '1.5rem 0',
        borderBottom: '1px solid rgba(28, 28, 28, 0.06)',
        backgroundColor: 'var(--cls-warm-white)'
      }}
    >
      <div 
        ref={containerRef}
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          fontSize: '0.85rem', 
          fontWeight: 300, 
          color: 'var(--cls-text-muted)' 
        }}
      >
        <Link to="/" style={{ color: 'inherit', transition: 'color 0.2s' }} className="hover:text-amber-600">
          Home
        </Link>
        <ChevronRight size={14} style={{ opacity: 0.5 }} />
        <Link to="/products" style={{ color: 'inherit', transition: 'color 0.2s' }} className="hover:text-amber-600">
          Products
        </Link>
        <ChevronRight size={14} style={{ opacity: 0.5 }} />
        <span style={{ color: 'var(--cls-gold)', fontWeight: 500 }}>
          {categoryTitle}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
