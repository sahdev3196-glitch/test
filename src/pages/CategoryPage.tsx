import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Breadcrumb } from '../components/products/Breadcrumb';
import { ProductBanner } from '../components/products/ProductBanner';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductFeatures } from '../components/products/ProductFeatures';
import { CTASection } from '../components/products/CTASection';
import { useReveal } from '../hooks/useReveal';
import { PRODUCTS_DATABASE } from '../data/productsData';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const descRef = useReveal(800);

  // Normalize slug mapping
  const normalizedSlug = slug ? slug.toLowerCase() : '';
  const data = PRODUCTS_DATABASE[normalizedSlug];

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', data.metaDesc);
      }
    }
    // Scroll cleanly to top on category change
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [data]);

  // Handle route fallback
  if (!data) {
    return <Navigate to="/products" replace />;
  }

  return (
    <article className="category-detail-page" style={{ minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '4.5rem' }}>
      {/* 1. Breadcrumbs path */}
      <Breadcrumb categoryTitle={data.title} />

      {/* 2. Banner Header and Cover Image */}
      <ProductBanner 
        headline={data.headline}
        tagline={data.tagline}
        description={data.description}
        image={data.image}
      />

      {/* 3. Image Gallery Showcase */}
      <ProductGallery 
        gallery={data.gallery}
        title={data.title}
      />

      {/* 4. Editorial Detailed Text Description */}
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

      {/* 5. Custom Features grid */}
      <ProductFeatures 
        features={data.features}
        title={data.title}
      />

      {/* 6. Call to Action consultation box */}
      <CTASection 
        title={`Want Custom ${data.title}?`}
        description={`Book a free consultation and let our design experts help you select the perfect ${data.title.toLowerCase()} solution.`}
      />
    </article>
  );
};

export default CategoryPage;
