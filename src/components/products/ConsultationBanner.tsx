import React, { useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { playButtonHover } from '../../animations/hoverEffects';

export const ConsultationBanner: React.FC = () => {
  const sectionRef = useReveal(800);
  const callBtnRef = useRef<HTMLAnchorElement | null>(null);
  const waBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleWhatsAppClick = () => {
    const message = `Hi Urban Frill, I would like to schedule a free spatial design consultation and review material catalogs. Please coordinate a slot.`;
    window.open(`https://wa.me/917821085631?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef as any}
      className="section-padding" 
      style={{ backgroundColor: 'var(--cls-warm-white)', opacity: 0 }}
    >
      <div className="container">
        {/* Large Rounded Consultation Card */}
        <div 
          style={{
            backgroundColor: 'var(--cls-soft-beige)',
            borderRadius: '16px',
            border: '1px solid var(--cls-border-lux)',
            padding: '3.5rem 4rem',
            boxShadow: 'var(--shadow-medium)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="md:grid-cols-12"
        >
          {/* LEFT DETAILS COLUMN */}
          <div className="md:col-span-8 text-left">
            <span className="editorial-small-label" style={{ color: 'var(--cls-gold)', marginBottom: '0.75rem', display: 'block' }}>
              NEED HELP CHOOSING?
            </span>
            <h2 className="editorial-section-heading font-serif" style={{ fontSize: '2.4rem', textTransform: 'none', marginBottom: '1rem', marginTop: 0 }}>
              Book a Free Consultation
            </h2>
            <p className="editorial-body" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
              Coordinate with our experienced interior decorators to evaluate your Pune or Mumbai site dimensions, review material catalogs in your home lighting, and plan exact drapery allocations.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                ref={callBtnRef}
                href="tel:+917821085631" 
                className="btn btn-primary"
                style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500 }}
                onMouseEnter={() => callBtnRef.current && playButtonHover(callBtnRef.current, null, true)}
                onMouseLeave={() => callBtnRef.current && playButtonHover(callBtnRef.current, null, false)}
              >
                <Phone size={15} style={{ marginRight: '8px' }} />
                Call Now
              </a>
              <button 
                ref={waBtnRef}
                onClick={handleWhatsAppClick}
                className="btn btn-secondary"
                style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500 }}
                onMouseEnter={() => waBtnRef.current && playButtonHover(waBtnRef.current, null, true)}
                onMouseLeave={() => waBtnRef.current && playButtonHover(waBtnRef.current, null, false)}
              >
                <MessageSquare size={15} style={{ marginRight: '8px' }} />
                WhatsApp
              </button>
            </div>
          </div>

          {/* RIGHT CERAMIC VASE ILLUSTRATION */}
          <div className="md:col-span-4 flex justify-center md:justify-end" style={{ pointerEvents: 'none' }}>
            <svg viewBox="0 0 200 300" width="160" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Minimalist vase body */}
              <path d="M85 180 C85 150, 115 150, 115 180 C115 210, 135 220, 135 250 C135 280, 65 280, 65 250 C65 220, 85 210, 85 180 Z" fill="#EAE4DA" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinejoin="round" />
              {/* Gold accent line */}
              <path d="M80 230 C90 232, 110 232, 120 230" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Botanical stems */}
              <path d="M100 180 C80 140, 70 80, 50 60" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M60 110 C50 100, 45 90, 40 85" stroke="var(--cls-taupe)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M100 180 C110 130, 120 70, 150 40" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M125 100 C135 90, 140 85, 145 80" stroke="var(--cls-taupe)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M100 180 C100 120, 105 80, 110 50" stroke="var(--cls-taupe)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
