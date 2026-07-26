import React from 'react';
import { Check } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const WhyChoose: React.FC = () => {
  const points = [
    { title: 'Premium materials', desc: 'Sourced globally from elite textile mills across Italy, Germany, and Belgium.' },
    { title: 'Expert craftsmanship', desc: 'Precision-tailored styling engineered down to the exact millimeter by veteran makers.' },
    { title: 'Customized solutions', desc: 'Bespoke window treatments, sizes, densities, and coordinates tailored to your designs.' },
    { title: 'Professional installation', desc: 'Executed clean and bubble-free by our dedicated in-house technical deployment teams.' },
    { title: 'Luxury finishes', desc: 'High Martindale abrasion fabrics, silent motor tracks, and elegant gold-foil textures.' },
    { title: 'Trusted brands', desc: 'Direct partnerships with global market leaders like Somfy, Lutron, and premium textile houses.' }
  ];

  // Reveal the section when entering the viewport
  const sectionRef = useReveal(800);

  return (
    <section 
      ref={sectionRef as any}
      className="why-choose-section section-padding" 
      style={{ backgroundColor: 'var(--cls-soft-beige)', opacity: 0 }}
    >
      <div className="container grid-two-columns" style={{ gap: '6rem' }}>
        {/* Left Side: Large Luxury Heading */}
        <div>
          <p className="section-tagline" style={{ letterSpacing: '0.15em', color: 'var(--cls-gold)' }}>
            THE URBAN FRILL PROMISE
          </p>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 300, lineHeight: 1.2, color: 'var(--cls-charcoal)', marginTop: '0.5rem' }}>
            Why Discerning Architects & Designers Select Us
          </h2>
          <p style={{ marginTop: '1.5rem', color: 'var(--cls-text-muted)', fontWeight: 300, fontSize: '1.05rem', lineHeight: '1.7' }}>
            At Urban Frill, we don't just sell draperies and flooring. We engineer soft-furnishing spatial transformations. Our process pairs rigorous material testing with clean technical execution.
          </p>
        </div>

        {/* Right Side: Elegant Bullet Points */}
        <div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {points.map((point, index) => (
              <li key={index} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  color: 'var(--cls-gold)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  flexShrink: 0,
                  marginTop: '4px'
                }}>
                  <Check size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--cls-charcoal)', marginBottom: '0.25rem' }}>
                    {point.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--cls-text-muted)', fontWeight: 300, lineHeight: '1.5' }}>
                    {point.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
