import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { animate, createTimeline } from 'animejs';

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
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  // Slide transition animation using Anime.js
  useEffect(() => {
    if (!textRef.current || !imgRef.current) return;
    
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const textElements = Array.from(textRef.current.children);

    if (isReduced) {
      animate(textElements, { opacity: 1, translateY: 0, duration: 0 });
      animate(imgRef.current, { opacity: 1, scale: 1.06, duration: 0 });
      return;
    }

    const tl = createTimeline({
      easing: 'easeOutExpo'
    });

    // Animate details (tagline, title, description, buttons)
    tl.add(textElements, {
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 800,
      delay: (_el: any, i: number) => i * 80
    });

    // Settle image (opacity and scale drift)
    tl.add(imgRef.current, {
      opacity: [0.3, 1],
      scale: [1.03, 1.06],
      duration: 1200
    }, '-=600');
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="hero-split-container">
      {/* 1. Left Side: Text Details */}
      <div className="hero-left-col">
        <div ref={textRef} className="hero-text-content-wrapper">
          <p className="section-tagline" style={{ color: 'var(--cls-gold)', fontWeight: 600 }}>
            {SLIDES[currentIndex].tagline}
          </p>
          <h1 style={{ color: 'var(--cls-charcoal)', fontWeight: 300, lineHeight: 1.2 }}>
            {SLIDES[currentIndex].title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--cls-text-muted)', maxWidth: '460px', lineHeight: '1.65', fontWeight: 300, marginBottom: '2rem' }}>
            {SLIDES[currentIndex].description}
          </p>

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
          <div className="hero-image-frame-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img 
              ref={imgRef}
              src={SLIDES[currentIndex].image} 
              alt={SLIDES[currentIndex].title}
              className="hero-carousel-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
