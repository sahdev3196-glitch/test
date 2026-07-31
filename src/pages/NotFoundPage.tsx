import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Urban Frill Pune";
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div 
      className="not-found-page section-padding text-center" 
      style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'var(--cls-warm-white)'
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--cls-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
          <Sparkles size={16} /> 404 - Studio Page Not Found
        </div>
        
        <h1 className="font-serif" style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--cls-charcoal)', marginBottom: '1rem' }}>
          Unmapped Interior Design Space
        </h1>
        
        <p style={{ color: 'var(--cls-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 300 }}>
          The page or collection path you requested does not exist or has been moved. Explore our bespoke curtain, blind, and wallpaper collections from our Pune studio.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/products" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Explore Products <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
