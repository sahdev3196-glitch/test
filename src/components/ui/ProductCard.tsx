import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, slug }) => {
  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Translate mouse coordinate relative to card center to rotation degrees
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  // Lighting sheen gradient translation
  const sheenX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Normalize coordinates between -0.5 and 0.5
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="product-card-container" style={{ perspective: 1000 }}>
      <Link 
        to={`/products/${slug}`} 
        style={{ display: 'block', height: '100%', color: 'inherit', textDecoration: 'none' }}
        title={`Explore premium ${title} collections in Pune`}
      >
        <motion.article
          className="product-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
            boxShadow: '0 30px 80px rgba(28, 28, 28, 0.15)',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        >
          {/* Card Sheen Lighting Layer */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 70%)`,
              zIndex: 3,
              pointerEvents: 'none',
              mixBlendMode: 'overlay',
            }}
          />

          {/* Product Image Wrapper */}
          <div className="product-img-wrapper" style={{ transform: 'translateZ(30px)' }}>
            <img 
              src={image} 
              alt={`Premium ${title} catalog showcase by Urban Frill Pune`} 
              width="600" 
              height="450" 
              loading="lazy" 
            />
          </div>

          {/* Card Body */}
          <div className="product-card-body" style={{ transform: 'translateZ(20px)' }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="btn-card-link">
              Explore Collection
            </span>
          </div>
        </motion.article>
      </Link>
    </div>
  );
};
