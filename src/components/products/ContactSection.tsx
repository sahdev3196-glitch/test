import React, { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { playButtonHover } from '../../animations/hoverEffects';

export const ContactSection: React.FC = () => {
  const sectionRef = useReveal(800);
  const consultBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleWhatsAppConsultation = () => {
    const msg = `Hi Urban Frill, I would like to schedule a free spatial design consultation and review material catalogs. Please coordinate a slot.`;
    window.open(`https://wa.me/917821085631?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section 
      id="contact-section" 
      ref={sectionRef as any}
      className="contact-section section-padding" 
      style={{ backgroundColor: 'var(--cls-pure-white)', opacity: 0 }}
    >
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '4.5rem', 
            alignItems: 'center' 
          }}
          className="md:grid-cols-12"
        >
          {/* LEFT: TEXT & INFO DETAILS */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div>
              <span className="editorial-small-label" style={{ color: 'var(--cls-gold)', marginBottom: '0.75rem', display: 'block' }}>
                STUDIO CONTACT
              </span>
              <h2 className="editorial-section-heading font-serif" style={{ textTransform: 'none', marginTop: 0, marginBottom: '1rem' }}>
                Let's Create Something Beautiful
              </h2>
              <p className="editorial-body" style={{ margin: 0 }}>
                Reach out to schedule on-site laser measurements, coordinate custom fabric choices, or consult on drapery automation projects.
              </p>
            </div>

            {/* Info Lists */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1rem 0' }}>
              {/* Phone */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--cls-gold)', marginTop: '4px' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cls-charcoal)', marginBottom: '0.25rem' }}>
                    Phone Directory
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--cls-text-muted)' }}>
                    <a href="tel:+917821085631" className="hover:text-amber-600">Shri Ram: +91 78210 85631</a>
                    <br />
                    <a href="tel:+918005827701" className="hover:text-amber-600">Chiranjiv: +91 80058 27701</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--cls-gold)', marginTop: '4px' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cls-charcoal)', marginBottom: '0.25rem' }}>
                    Email Studio
                  </h4>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--cls-text-muted)' }}>
                    <a href="mailto:hello@urbanfrill.com" className="hover:text-amber-600">hello@urbanfrill.com</a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--cls-gold)', marginTop: '4px' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cls-charcoal)', marginBottom: '0.25rem' }}>
                    Pune Showroom
                  </h4>
                  <address style={{ fontSize: '0.9rem', margin: 0, color: 'var(--cls-text-muted)', fontStyle: 'normal', lineHeight: '1.5' }}>
                    Shop No. 33, Business Plaza,<br />
                    Timber Market Rd, Ganj Peth,<br />
                    Pune, Maharashtra 411002
                  </address>
                </div>
              </div>
            </div>

            {/* Action Consult Button */}
            <div>
              <button 
                ref={consultBtnRef}
                onClick={handleWhatsAppConsultation}
                className="btn btn-primary"
                style={{ textTransform: 'none', fontWeight: 500 }}
                onMouseEnter={() => consultBtnRef.current && playButtonHover(consultBtnRef.current, null, true)}
                onMouseLeave={() => consultBtnRef.current && playButtonHover(consultBtnRef.current, null, false)}
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* RIGHT: ROUNDED GOOGLE MAP */}
          <div className="md:col-span-6">
            <div 
              style={{
                width: '100%',
                height: '420px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
                border: '1px solid var(--cls-border-lux)'
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.381395377519!2d73.8686236!3d18.5116345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c045bdf446e5%3A0x633d266aa6b1395d!2sTimber%20Market%20Rd%2C%20Ganj%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                style={{ border: 0, width: '100%', height: '100%' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Urban Frill Showroom - Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
