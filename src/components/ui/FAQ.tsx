import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="faq-item" 
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
    >
      <div className="faq-item-title-row">
        <h3>{question}</h3>
        <div className="faq-icon-wrapper">
          {isOpen ? (
            <Minus size={18} style={{ color: 'var(--cls-gold)' }} />
          ) : (
            <Plus size={18} style={{ color: 'var(--cls-taupe)' }} />
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="faq-answer">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
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
      answer: "We support luxury residential and commercial fit-outs across Pune, Mumbai, and greater Maharashtra. Shipping and remote consultations can be arranged nationwide."
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
