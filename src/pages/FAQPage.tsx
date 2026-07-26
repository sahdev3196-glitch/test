import React, { useEffect, useRef } from 'react';
import { FAQ } from '../components/ui/FAQ';
import { ConsultationBanner } from '../components/products/ConsultationBanner';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { useReveal } from '../hooks/useReveal';
import { animate } from 'animejs';

export const FAQPage: React.FC = () => {
  const headerReveal = useRef<HTMLDivElement | null>(null);

  // Update document title for SEO on mount
  useEffect(() => {
    document.title = "Frequently Asked Questions | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Find answers to frequently asked questions about Urban Frill's custom curtains, blinds, installations, and warranty services."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate Header immediately on mount
    if (headerReveal.current) {
      animate(headerReveal.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }, []);

  const contentReveal = useReveal(900);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '8rem' }}>
      <LuxuryBackgroundMotion />

      {/* Header section */}
      <section 
        ref={headerReveal as any} 
        style={{ opacity: 0, textAlign: 'center', marginBottom: '4rem' }}
        className="container"
      >
        <span className="section-tagline" style={{ display: 'block', marginBottom: '0.75rem' }}>
          COMMON QUESTIONS
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: 'var(--cls-charcoal)', marginBottom: '1.25rem' }}>
          Frequently Asked Questions
        </h1>
      </section>

      {/* Accordion content */}
      <section 
        ref={contentReveal as any}
        style={{ opacity: 0, marginBottom: '5rem' }}
        className="container"
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FAQ />
        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationBanner />
    </div>
  );
};

export default FAQPage;
