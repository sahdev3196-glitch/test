import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/assets/images/hero2.jpg',
    tagline: 'Modern Automation',
    title: 'Smart Motorized Curtains',
    description: 'Precision-engineered automated tracks with silent motors, integrated with Alexa and mobile systems.',
  },
  {
    image: '/assets/images/hero3.jpg',
    tagline: 'Bespoke Curators',
    title: 'Double-Pleat Collections',
    description: 'Double-pleat and ripple-fold systems paired with sheer liners to curate soft, light-filtering ambiances.',
  },
  {
    image: '/assets/images/hero4.jpg',
    tagline: 'Luxurious Details',
    title: 'Complete Furnishing Design',
    description: 'Custom soft furnishings, designer wallpapers, and premium flooring solutions curated in Pune.',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
  };

  const imageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 150, damping: 20 },
        opacity: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir < 0 ? 30 : -30,
      transition: {
        x: { type: 'spring' as const, stiffness: 150, damping: 20 },
        opacity: { duration: 0.6 },
      },
    }),
  };

  return (
    <div className="hero-split-container">
      {/* 1. Left Side: Text Details */}
      <div className="hero-left-col">
        <div className="hero-text-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <p className="section-tagline" style={{ color: 'var(--cls-gold)', fontWeight: 600 }}>
                {SLIDES[currentIndex].tagline}
              </p>
              <h1 style={{ color: 'var(--cls-charcoal)', fontWeight: 300, lineHeight: 1.2 }}>
                {SLIDES[currentIndex].title}
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--cls-text-muted)', maxWidth: '460px', lineHeight: '1.65', fontWeight: 300, marginBottom: '2rem' }}>
                {SLIDES[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="hero-action-buttons">
            <a href="tel:+917821085631" className="btn btn-primary">Call Now</a>
            <a 
              href="https://wa.me/917821085631?text=Hi%20Urban%20Frill%2C%20I%20am%20interested%20in%20your%20premium%20furnishing%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Counter and Arrows under the text on desktop */}
        <div className="hero-controls-bar">
          <div className="hero-slide-counter">
            <span style={{ color: 'var(--cls-gold)', fontWeight: 600 }}>0{currentIndex + 1}</span>
            <span style={{ opacity: 0.3, margin: '0 0.5rem' }}>/</span>
            <span style={{ opacity: 0.5 }}>0{SLIDES.length}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={handlePrev} 
              className="carousel-control-arrow" 
              aria-label="Previous slide"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={handleNext} 
              className="carousel-control-arrow" 
              aria-label="Next slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Right Side: The Fully Contained Image Frame */}
      <div className="hero-right-col">
        <div className="hero-image-frame-outer">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="hero-image-frame-inner"
            >
              {/* Image with subtle hover/drift */}
              <motion.img 
                src={SLIDES[currentIndex].image} 
                alt={SLIDES[currentIndex].title}
                className="hero-carousel-img"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
