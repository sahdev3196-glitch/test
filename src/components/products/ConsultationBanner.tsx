import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { TiltCard3D } from '../ui/TiltCard3D';

export const ConsultationBanner: React.FC = () => {
  const sectionRef = useReveal(800);

  const handleWhatsAppClick = () => {
    const message = `Hi Urban Frill, I would like to schedule a free spatial design consultation and review material catalogs. Please coordinate a slot.`;
    window.open(`https://wa.me/917821085631?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section 
      ref={sectionRef as any}
      className="section-padding" 
      style={{ opacity: 0 }}
    >
      <div className="container">
        <TiltCard3D>
          <div 
            className="glass-panel md:grid-cols-12"
            style={{
              borderRadius: '24px',
              padding: '3.5rem 4rem',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
              border: '1px solid rgba(184, 145, 80, 0.25)',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(160, 140, 115, 0.14)'
            }}
          >
            {/* LEFT DETAILS COLUMN */}
            <div className="md:col-span-8 text-left" style={{ transform: 'translateZ(25px)' }}>
              <span className="glass-pill" style={{ color: 'var(--cls-gold)', marginBottom: '1rem', border: '1px solid rgba(184, 145, 80, 0.35)', background: 'rgba(255, 255, 255, 0.8)' }}>
                NEED HELP CHOOSING?
              </span>
              <h2 className="editorial-section-heading font-serif" style={{ fontSize: '2.5rem', textTransform: 'none', marginBottom: '1rem', marginTop: 0, color: '#1F1D1A' }}>
                Book a Free Spatial Consultation
              </h2>
              <p className="editorial-body" style={{ maxWidth: '560px', marginBottom: '2.5rem', color: 'var(--cls-text-muted)' }}>
                Coordinate with our experienced interior decorators to evaluate your Pune site dimensions, review material catalogs in your home lighting, and plan exact drapery allocations.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="tel:+917821085631" 
                  className="glass-btn-primary"
                  style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500, background: 'linear-gradient(135deg, #B89150 0%, #8A6D3B 100%)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 10px 30px rgba(184, 145, 80, 0.3)', color: '#FFFFFF' }}
                >
                  <Phone size={16} style={{ marginRight: '8px' }} />
                  Call Now
                </a>
                <button 
                  onClick={handleWhatsAppClick}
                  className="glass-btn-secondary"
                  style={{ minWidth: '180px', textTransform: 'none', fontWeight: 500, color: '#1F1D1A', border: '1px solid rgba(184, 145, 80, 0.3)' }}
                >
                  <MessageSquare size={16} style={{ marginRight: '8px' }} />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* RIGHT CERAMIC VASE ILLUSTRATION */}
            <div className="md:col-span-4 flex justify-center md:justify-end" style={{ pointerEvents: 'none', transform: 'translateZ(30px)' }}>
              <svg viewBox="0 0 200 300" width="160" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Minimalist vase body */}
                <path d="M85 180 C85 150, 115 150, 115 180 C115 210, 135 220, 135 250 C135 280, 65 280, 65 250 C65 220, 85 210, 85 180 Z" fill="#1C1E26" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinejoin="round" />
                {/* Gold accent line */}
                <path d="M80 230 C90 232, 110 232, 120 230" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />

                {/* Botanical stems */}
                <path d="M100 180 C80 140, 70 80, 50 60" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M60 110 C50 100, 45 90, 40 85" stroke="var(--cls-gold)" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M100 180 C110 130, 120 70, 150 40" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M125 100 C135 90, 140 85, 145 80" stroke="var(--cls-gold)" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M100 180 C100 120, 105 80, 110 50" stroke="var(--cls-gold)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </TiltCard3D>
      </div>
    </section>
  );
};

export default ConsultationBanner;
