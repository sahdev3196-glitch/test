import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="grid-two-columns" style={{ gap: '4.5rem' }}>
      {/* Contact Info Block */}
      <div className="contact-info-block">
        <p className="section-tagline">Connect With Us</p>
        <h2>Initiate Your Design Consultation</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          Contact our design consultants to coordinate precise micro-measurement site evaluations or set customized material sampling agendas at your site.
        </p>
        
        <div className="studio-address-details">
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 500 }}>Urban Frill</h3>
          <address className="address-paragraph" style={{ fontStyle: 'normal', color: 'var(--cls-text-dark)', lineHeight: '1.6' }}>
            Shop No. 33, Business Plaza,<br />
            Timber Market Rd, Ganj Peth,<br />
            Pune, Maharashtra 411002
          </address>
        </div>

        <div className="contact-directory">
          {/* Person 1 */}
          <div className="directory-person">
            <p className="person-name">Shri Ram Jangid</p>
            <div className="action-row">
              <a href="tel:+917821085631" className="contact-link call-link" aria-label="Call Shri Ram Jangid">
                <Phone size={16} /> 07821085631
              </a>
              <a 
                href="https://wa.me/917821085631?text=Hello%20Shri%20Ram%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link wa-link"
              >
                WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Person 2 */}
          <div className="directory-person">
            <p className="person-name">Chiranjiv Jangid</p>
            <div className="action-row">
              <a href="tel:+918005827701" className="contact-link call-link" aria-label="Call Chiranjiv Jangid">
                <Phone size={16} /> 8005827701
              </a>
              <a 
                href="https://wa.me/918005827701?text=Hello%20Chiranjiv%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link wa-link"
              >
                WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Block */}
      <div className="contact-map-block">
        <div className="map-iframe-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.381395377519!2d73.8686236!3d18.5116345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c045bdf446e5%3A0x633d266aa6b1395d!2sTimber%20Market%20Rd%2C%20Ganj%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Urban Frill Location Map - Pune"
          >
          </iframe>
        </div>
        <a 
          href="https://maps.google.com/?q=Urban+Frill+Shop+No+33+Business+Plaza+Timber+Market+Rd+Ganj+Peth+Pune+Maharashtra+411002" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-block text-center mt-4"
          style={{ justifyContent: 'center' }}
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};
