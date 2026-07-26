import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="footer-section" 
      style={{ 
        backgroundColor: '#111111', 
        color: '#FFFFFF',
        padding: '4.5rem 0 3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        
        {/* Brand Logo & Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.8rem', 
              fontWeight: 600, 
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF'
            }}
          >
            Urban <span style={{ color: '#C7A26A' }}>Frill</span>
          </span>
          <span 
            style={{ 
              fontSize: '0.8rem', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              color: '#888888',
              fontWeight: 400
            }}
          >
            Furnishing Studio
          </span>
        </div>

        {/* Divider */}
        <hr 
          style={{ 
            width: '100%', 
            maxWidth: '1200px',
            border: 'none', 
            borderTop: '1px solid rgba(255, 255, 255, 0.07)', 
            marginTop: '2.5rem',
            marginBottom: '1.5rem'
          }} 
        />

        {/* Copyright */}
        <div style={{ color: '#666666', fontSize: '0.85rem', fontWeight: 300 }}>
          &copy; 2026 Urban Frill. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
