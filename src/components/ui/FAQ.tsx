import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { animate } from 'animejs';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!contentRef.current || !iconRef.current) return;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Prevent animation on initial render when element is closed
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (!isOpen) {
        animate(contentRef.current, { height: '0px', opacity: 0, duration: 0 });
        animate(iconRef.current, { rotate: 0, duration: 0 });
        return;
      }
    }

    if (isOpen) {
      const height = contentRef.current.scrollHeight;
      
      if (isReduced) {
        contentRef.current.style.height = `${height}px`;
        contentRef.current.style.opacity = '1';
        iconRef.current.style.transform = 'rotate(180deg)';
        return;
      }

      animate(contentRef.current, {
        height: [0, height],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutQuart'
      });
      animate(iconRef.current, {
        rotate: 180,
        duration: 300,
        easing: 'easeOutQuart'
      });
    } else {
      if (isReduced) {
        contentRef.current.style.height = '0px';
        contentRef.current.style.opacity = '0';
        iconRef.current.style.transform = 'rotate(0deg)';
        return;
      }

      animate(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 350,
        easing: 'easeOutQuart'
      });
      animate(iconRef.current, {
        rotate: 0,
        duration: 300,
        easing: 'easeOutQuart'
      });
    }
  }, [isOpen]);

  return (
    <div 
      className="faq-item" 
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer', overflow: 'hidden' }}
    >
      <div className="faq-item-title-row">
        <h3 style={{ userSelect: 'none' }}>{question}</h3>
        <div 
          ref={iconRef} 
          className="faq-icon-wrapper" 
          style={{ 
            display: 'inline-flex', 
            transformOrigin: 'center', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <ChevronDown size={18} style={{ color: isOpen ? 'var(--cls-gold)' : 'var(--cls-taupe)' }} />
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ height: 0, opacity: 0, overflow: 'hidden' }}
      >
        <p className="faq-answer">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do you offer custom curtains and blinds?",
      answer: "Yes. Urban Frill designs, stitches, and installs custom window draperies, sheer curtains, motorized tracks, roller blinds, Roman shades, and exterior balcony weather blinds."
    },
    {
      question: "Do you provide on-site measurement and consultation?",
      answer: "Yes. Our design consultants visit your Pune residence or project site with catalog fabrics, hardware options, and lasers for precision layout measurements."
    },
    {
      question: "What areas do you serve?",
      answer: "We support luxury residential and commercial fit-outs across Pune and PCMC. Remote consultations can be arranged upon request."
    },
    {
      question: "Can you reupholster my existing furniture?",
      answer: "Yes. We reupholster luxury sofas, beds, headboards, and accent chairs using high-rub Martindale certified stain-resistant bouclé, velvet, and leatherette collections."
    },
    {
      question: "Do you supply flooring and wallpapers?",
      answer: "Yes. We source and install premium click-lock engineered wood flooring, waterproof commercial SPC vinyl flooring planks, and imported designer textures/scenic wall murals."
    }
  ];

  return (
    <div className="faq-grid-container">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
