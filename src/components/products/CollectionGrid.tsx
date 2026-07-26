import React, { useState, useEffect, useRef } from 'react';
import CategoryFilters from './CategoryFilters';
import CollectionCard from './CollectionCard';
import { PRODUCTS_DATABASE } from '../../data/productsData';
import { staggerElements } from '../../animations/stagger';
import { useReveal } from '../../hooks/useReveal';

export const CollectionGrid: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useReveal(800);

  const allItems = Object.values(PRODUCTS_DATABASE);

  // Group dynamic category database matching collections grid filtering keys
  const filteredItems = allItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'curtains') return item.slug === 'curtains' || item.slug === 'motorized-curtains';
    if (filter === 'blinds') return item.slug === 'blinds';
    if (filter === 'wallpaper') return item.slug === 'wallpaper';
    if (filter === 'rugs') return item.slug === 'rugs';
    if (filter === 'flooring') return item.slug === 'wooden-flooring' || item.slug === 'pvc-flooring';
    if (filter === 'mattresses') return item.slug === 'mattresses';
    if (filter === 'soft-furnishings') return item.slug === 'customized-soft-furnishings' || item.slug === 'upholstery-fabrics';
    return false;
  });

  // Re-run stagger reveal whenever the filtered list shifts
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.collection-grid-card');
      if (cards.length > 0) {
        staggerElements(cards, 30, 700);
      }
    }
  }, [filter]);

  return (
    <section 
      id="collections-grid-section" 
      ref={sectionRef as any}
      className="section-padding" 
      style={{ backgroundColor: 'var(--cls-warm-white)', opacity: 0 }}
    >
      <div className="container">
        <div className="section-center-header" style={{ marginBottom: '3rem' }}>
          <span className="editorial-small-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            Curated Showcase
          </span>
          <h2 className="editorial-section-heading">Our Collections</h2>
        </div>

        {/* Dynamic Category Selector Pills */}
        <CategoryFilters selected={filter} onChange={setFilter} />

        {/* Responsive Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-12 gap-8"
          style={{ alignItems: 'stretch' }}
        >
          {filteredItems.map((item) => (
            <div 
              key={item.slug} 
              className="collection-grid-card col-span-12 sm:col-span-6 lg:col-span-3"
              style={{ opacity: 0 }}
            >
              <CollectionCard 
                title={item.title}
                description={item.description}
                image={item.image}
                slug={item.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
