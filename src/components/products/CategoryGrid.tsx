import React from 'react';
import CategoryCard from './CategoryCard';
import { PRODUCTS_DATABASE } from '../../data/productsData';
import { useStagger } from '../../hooks/useStagger';

export const CategoryGrid: React.FC = () => {
  const categories = Object.values(PRODUCTS_DATABASE);
  
  // Stagger animate child elements with class .category-card-item when container enters viewport
  const containerRef = useStagger('.category-card-item', 30, 700);

  return (
    <section 
      id="category-grid-section" 
      ref={containerRef as any}
      className="section-padding" 
      style={{ backgroundColor: 'var(--cls-warm-white)' }}
    >
      <div className="container">
        <div className="section-center-header" style={{ marginBottom: '4rem' }}>
          <p className="section-tagline" style={{ letterSpacing: '0.15em' }}>OUR PORTFOLIO</p>
          <h2>Explore By Category</h2>
        </div>

        <div 
          style={{
            display: 'grid',
            gap: '2.5rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
          }}
        >
          {categories.map((category) => (
            <div key={category.slug} className="category-card-item" style={{ opacity: 0 }}>
              <CategoryCard 
                title={category.title}
                description={category.description}
                image={category.image}
                slug={category.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
