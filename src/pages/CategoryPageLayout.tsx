import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/products/Breadcrumb';
import { ProductBanner } from '../components/products/ProductBanner';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductFeatures } from '../components/products/ProductFeatures';
import { CTASection } from '../components/products/CTASection';
import { useReveal } from '../hooks/useReveal';
import type { CategoryData } from '../data/productsData';

interface CategoryPageLayoutProps {
  data: CategoryData;
}

export const CategoryPageLayout: React.FC<CategoryPageLayoutProps> = ({ data }) => {
  const descRef = useReveal(800);

  useEffect(() => {
    document.title = data.metaTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.metaDesc);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [data]);

  return (
    <article className="category-detail-page" style={{ minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '4.5rem' }}>
      {/* 1. Breadcrumb path */}
      <Breadcrumb categoryTitle={data.title} />

      {/* 2. Category Banner */}
      <ProductBanner 
        headline={data.headline}
        tagline={data.tagline}
        description={data.description}
        image={data.image}
      />

      {/* 3. Product Gallery */}
      <ProductGallery 
        gallery={data.gallery}
        title={data.title}
      />

      {/* 4. Description Section */}
      <section 
        ref={descRef as any}
        className="detailed-desc-section section-padding" 
        style={{ backgroundColor: 'var(--cls-pure-white)', borderTop: '1px solid var(--cls-border-lux)', opacity: 0 }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="editorial-section-heading font-serif" style={{ fontSize: '2.25rem', marginBottom: '1.5rem', marginTop: 0 }}>
            {data.detailedDescriptionTitle}
          </h2>
          <div style={{ borderBottom: '2px solid var(--cls-gold)', width: '60px', marginBottom: '2rem' }} />
          <p className="editorial-body" style={{ fontSize: '1.1rem', margin: 0 }}>
            {data.detailedDescription}
          </p>
        </div>
      </section>

      {/* 5. Features Grid */}
      <ProductFeatures 
        features={data.features}
        title={data.title}
      />

      {/* 6. CTA Section */}
      <CTASection 
        title={`Want Custom ${data.title}?`}
        description={`Book a free consultation and let our design experts help you select the perfect ${data.title.toLowerCase()} solution.`}
      />
    </article>
  );
};

export default CategoryPageLayout;
