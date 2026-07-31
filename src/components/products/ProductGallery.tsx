import React from 'react';
import { useStagger } from '../../hooks/useStagger';
import { revealImage } from '../../animations/imageReveal';

interface ProductGalleryProps {
  gallery: string[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ gallery, title }) => {
  // Call hooks unconditionally at top level
  const containerRef = useStagger('.gallery-image-item', 20, 700);

  if (!gallery || gallery.length === 0) return null;

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    revealImage(e.currentTarget);
  };

  return (
    <section 
      ref={containerRef as any}
      className="product-gallery-section section-padding" 
      style={{ backgroundColor: 'var(--cls-warm-white)', borderTop: '1px solid rgba(28, 28, 28, 0.05)', opacity: 0 }}
    >
      <div className="container">
        <div className="section-center-header" style={{ marginBottom: '3.5rem' }}>
          <p className="section-tagline" style={{ letterSpacing: '0.15em' }}>VISUAL INSPIRATION</p>
          <h2>Design Gallery</h2>
        </div>

        {/* Dynamic Premium Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {gallery.map((imgUrl, index) => {
            let gridSpanStyle = {};
            if (gallery.length >= 3 && index === 0) {
              gridSpanStyle = { gridColumn: 'span 2', gridRow: 'span 2' };
            }
            
            return (
              <div 
                key={index}
                className="gallery-image-item gallery-image-wrapper"
                style={{
                  borderRadius: 'var(--border-radius-lux)',
                  overflow: 'hidden',
                  aspectRatio: gallery.length >= 3 && index === 0 ? '16/10' : '4/3',
                  boxShadow: 'var(--shadow-soft)',
                  backgroundColor: 'var(--cls-soft-beige)',
                  opacity: 0,
                  ...gridSpanStyle
                }}
              >
                <img 
                  src={imgUrl} 
                  alt={`${title} interior installation details ${index + 1}`}
                  onLoad={handleImageLoad}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: 0, 
                    filter: 'blur(8px)', 
                    transform: 'scale(1.03)' 
                  }}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
