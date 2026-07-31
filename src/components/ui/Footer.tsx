import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const mapUrl = "https://maps.google.com/?q=Urban+Frill+Shop+33+Business+Plaza+Timber+Market+Rd+Ganj+Peth+Pune+411002";

  return (
    <footer 
      className="footer-section" 
      style={{ 
        backgroundColor: '#F5F0E6', 
        color: '#1F1D1A',
        padding: '5rem 0 3rem',
        borderTop: '1px solid rgba(184, 145, 80, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Soft ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(225, 205, 175, 0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Glass Card Wrapper */}
        <div 
          className="glass-panel" 
          style={{ 
            padding: '3.5rem 3rem', 
            marginBottom: '3rem',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(184, 145, 80, 0.25)',
            boxShadow: '0 20px 60px rgba(160, 140, 115, 0.12)'
          }}
        >
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '2.5rem',
              textAlign: 'left'
            }}
          >
            {/* Column 1: Studio Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <span 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.8rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1F1D1A'
                }}
              >
                Urban <span style={{ color: '#B89150' }}>Frill</span>
              </span>
              <p style={{ color: 'var(--cls-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Pune's premier luxury furnishing studio specializing in bespoke curtains, automated motorized blinds, designer wallpapers, sofa upholstery & engineered wooden flooring.
              </p>
              <div style={{ color: 'var(--cls-text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#B89150' }} /> Mon - Sat: 10:00 AM - 8:30 PM
              </div>
            </div>

            {/* Column 2: Studio Collections */}
            <div>
              <h4 style={{ color: '#B89150', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Studio Collections
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#4A433D' }}>
                <li><Link to="/products/curtains" style={{ color: 'inherit' }}>Bespoke Curtains & Drapery</Link></li>
                <li><Link to="/products/motorized-curtains" style={{ color: 'inherit' }}>Smart Motorized Curtains</Link></li>
                <li><Link to="/products/blinds" style={{ color: 'inherit' }}>Roller & Venetian Blinds</Link></li>
                <li><Link to="/products/wallpaper" style={{ color: 'inherit' }}>Designer Wallpapers</Link></li>
                <li><Link to="/products/upholstery-fabrics" style={{ color: 'inherit' }}>Sofa Upholstery & Cushioning</Link></li>
                <li><Link to="/products/wooden-flooring" style={{ color: 'inherit' }}>Wooden & PVC Flooring</Link></li>
                <li><Link to="/products/rugs" style={{ color: 'inherit' }}>Luxury Custom Rugs</Link></li>
              </ul>
            </div>

            {/* Column 3: Pune Localities Served */}
            <div>
              <h4 style={{ color: '#B89150', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Areas Served in Pune
              </h4>
              <p style={{ color: 'var(--cls-text-muted)', fontSize: '0.85rem', lineHeight: 1.8, margin: 0 }}>
                Koregaon Park &bull; Kalyani Nagar &bull; Baner &bull; Kothrud &bull; Viman Nagar &bull; Wakad &bull; Hadapsar &bull; Model Colony &bull; Boat Club Road &bull; Prabhat Road &bull; Hinjewadi &bull; Pune Cantonment
              </p>
            </div>

            {/* Column 4: Contact & Studio Location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ color: '#B89150', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Visit Our Pune Studio
              </h4>
              
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#4A433D', fontSize: '0.9rem', lineHeight: 1.5, display: 'flex', gap: '10px', textDecoration: 'none' }}
                title="Get Google Maps Directions to Urban Frill Studio Pune"
              >
                <MapPin size={20} style={{ color: '#B89150', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Shop No. 33, Business Plaza, Timber Market Rd, Ganj Peth, Pune, MH 411002 
                  <ExternalLink size={12} style={{ display: 'inline', marginLeft: '6px', color: '#B89150' }} />
                </span>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <a href="tel:+917821085631" style={{ color: '#4A433D', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} style={{ color: '#B89150' }} /> +91 78210 85631
                </a>
                <a href="tel:+918005827701" style={{ color: '#4A433D', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} style={{ color: '#B89150' }} /> +91 80058 27701
                </a>
                <a href="mailto:urbanfrill1508@gmail.com" style={{ color: '#4A433D', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} style={{ color: '#B89150' }} /> urbanfrill1508@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'var(--cls-text-muted)', fontSize: '0.85rem', fontWeight: 400 }}>
          <div>
            &copy; 2026 Urban Frill Studio Pune. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about" style={{ color: 'inherit' }}>About</Link>
            <Link to="/faq" style={{ color: 'inherit' }}>FAQ</Link>
            <Link to="/contact" style={{ color: 'inherit' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

