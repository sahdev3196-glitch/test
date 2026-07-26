import React from 'react';
import { Star } from 'lucide-react';
import { useStagger } from '../../hooks/useStagger';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      quote: "Excellent craftsmanship. The double pinch-pleat sheer curtains filter daylight beautifully in our living room. Their tech team finished mounting the motorized tracks within hours, leaving the site clean and precise.",
      client: "Anjali Deshmukh",
      location: "Koregaon Park, Pune"
    },
    {
      stars: 5,
      quote: "Highly recommended for luxury residential drapery. Urban Frill provided precise on-site consultation, helped us map colors, and fitted bespoke Roman shades in our bedrooms. The quality of fabrics is outstanding.",
      client: "Rahul Mehta",
      location: "Aundh, Pune"
    }
  ];

  // Stagger testimonial cards when visible
  const containerRef = useStagger('.testimonial-card-item', 20, 800);

  return (
    <section 
      ref={containerRef as any}
      className="section-padding" 
      style={{ backgroundColor: 'var(--cls-soft-beige)', opacity: 0 }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-center-header" style={{ marginBottom: '4rem' }}>
          <span className="editorial-small-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
            CLIENT STORIES
          </span>
          <h2 className="editorial-section-heading">Trusted by Discerning Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ alignItems: 'stretch' }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="testimonial-card-item"
              style={{
                backgroundColor: 'var(--cls-pure-white)',
                borderRadius: 'var(--border-radius-lux)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-soft)',
                border: '1px solid var(--cls-border-lux)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {/* Star rating */}
              <div style={{ display: 'flex', gap: '4px', color: 'var(--cls-gold)' }}>
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--cls-gold)" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{ fontSize: '0.95rem', color: 'var(--cls-text-muted)', lineHeight: '1.65', fontStyle: 'italic', flex: 1, margin: 0 }}>
                "{rev.quote}"
              </blockquote>

              {/* Client Info */}
              <div style={{ borderTop: '1px solid rgba(28, 28, 28, 0.05)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <cite style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--cls-charcoal)', fontStyle: 'normal' }}>
                  {rev.client}
                </cite>
                <span style={{ fontSize: '0.8rem', color: 'var(--cls-text-muted)' }}>
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
