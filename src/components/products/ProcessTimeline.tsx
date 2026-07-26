import React, { useState } from 'react';
import { PhoneCall, Compass, Scissors, Wrench } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const ProcessTimeline: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useReveal(800);

  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'On-site precision laser evaluation, fabric catalog pairing, and spacing consultation.',
      icon: PhoneCall,
    },
    {
      num: '02',
      title: 'Design & Selection',
      desc: 'Architectural textile selections, pleated styles matching, and custom specifications approval.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Customization',
      desc: 'Millimeter-precise sewing, automated smart tracks calibration, and quality control tests.',
      icon: Scissors,
    },
    {
      num: '04',
      title: 'Installation',
      desc: 'Dedicated technical setup, seamless fitting alignment, and final smart home integration.',
      icon: Wrench,
    },
  ];

  return (
    <section 
      ref={sectionRef as any}
      className="process-timeline-section section-padding" 
      style={{ backgroundColor: 'var(--cls-pure-white)', opacity: 0 }}
    >
      <div className="container text-center" style={{ maxWidth: '1000px' }}>
        <span className="editorial-small-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
          Elegance in Execution
        </span>
        <h2 className="editorial-section-heading" style={{ marginBottom: '1.5rem' }}>
          Our Design Process
        </h2>
        <p className="editorial-body" style={{ maxWidth: '580px', margin: '0 auto 5rem' }}>
          A seamless journey from initial laser measurements and tactile consultations to custom studio fabrication and technical site installation.
        </p>

        {/* Timeline Horizontal Steps Flow */}
        <div 
          className="timeline-dotted-line-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            position: 'relative'
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredIdx === idx;
            
            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  position: 'relative',
                  zIndex: 1,
                  cursor: 'pointer'
                }}
              >
                {/* Golden Circle with Icon */}
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isHovered ? 'var(--cls-gold)' : 'var(--cls-soft-beige)',
                    color: isHovered ? 'var(--cls-pure-white)' : 'var(--cls-gold)',
                    border: '1px solid var(--cls-border-lux)',
                    boxShadow: isHovered ? '0 10px 20px rgba(197, 160, 106, 0.25)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                    marginBottom: '1.5rem',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                  }}
                >
                  <Icon size={22} style={{ transition: 'color 0.4s' }} />
                </div>

                {/* Step Num & Title */}
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--cls-gold)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  STEP {step.num}
                </span>
                <h3 className="editorial-card-title" style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>
                <p 
                  className="editorial-body" 
                  style={{ 
                    fontSize: '0.9rem', 
                    lineHeight: '1.6', 
                    maxWidth: '220px', 
                    margin: 0,
                    opacity: isHovered ? 1 : 0.8,
                    transition: 'opacity 0.3s'
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
