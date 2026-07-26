import React, { useRef } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import playButtonHover from '../../animations/buttonAnimations';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Need Help Choosing?", 
  description = "Book a free consultation and let our design experts help you select the perfect furnishing solution." 
}) => {
  const sectionRef = useReveal(800);
  
  const callBtnRef = useRef<HTMLAnchorElement | null>(null);
  const callIconRef = useRef<HTMLSpanElement | null>(null);
  
  const waBtnRef = useRef<HTMLButtonElement | null>(null);
  const waIconRef = useRef<HTMLSpanElement | null>(null);

  const handleWhatsAppClick = () => {
    const message = `Hi Urban Frill, I'm viewing your product catalog and would like to book a free consultation with your design experts. Please coordinate a schedule.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917821085631?text=${encoded}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef as any}
      className="cta-section section-padding" 
      style={{ backgroundColor: 'var(--cls-soft-beige)', textAlign: 'center', opacity: 0 }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <p className="section-tagline" style={{ letterSpacing: '0.15em', color: 'var(--cls-gold)' }}>GET IN TOUCH</p>
        <h2 style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--cls-charcoal)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
          {title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '640px', marginInline: 'auto' }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            ref={callBtnRef}
            href="tel:+917821085631" 
            className="btn btn-primary" 
            style={{ minWidth: '180px', transform: 'scale(1)' }}
            onMouseEnter={() => callBtnRef.current && playButtonHover(callBtnRef.current, callIconRef.current, true)}
            onMouseLeave={() => callBtnRef.current && playButtonHover(callBtnRef.current, callIconRef.current, false)}
          >
            <span ref={callIconRef} style={{ display: 'inline-flex', alignItems: 'center', transform: 'translateX(0px)' }}>
              <Phone size={16} style={{ marginRight: '8px' }} />
            </span>
            Call Now
          </a>
          
          <button 
            ref={waBtnRef}
            onClick={handleWhatsAppClick} 
            className="btn btn-secondary" 
            style={{ minWidth: '180px', transform: 'scale(1)' }}
            onMouseEnter={() => waBtnRef.current && playButtonHover(waBtnRef.current, waIconRef.current, true)}
            onMouseLeave={() => waBtnRef.current && playButtonHover(waBtnRef.current, waIconRef.current, false)}
          >
            <span ref={waIconRef} style={{ display: 'inline-flex', alignItems: 'center', transform: 'translateX(0px)' }}>
              <MessageSquare size={16} style={{ marginRight: '8px' }} />
            </span>
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
