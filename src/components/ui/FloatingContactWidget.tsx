import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const whatsappUrl = "https://wa.me/917821085631?text=" + encodeURIComponent("Hi Urban Frill, I am looking for luxury interior furnishings in Pune (Curtains / Blinds / Wallpaper / Sofa / Flooring). Please connect with me.");
  const phoneUrl = "tel:+917821085631";

  return (
    <aside aria-label="Quick Contact Actions" className="floating-contact-widget">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-btn-whatsapp"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          background: 'rgba(37, 211, 102, 0.9)'
        }}
        title="Chat on WhatsApp with Urban Frill Pune"
      >
        <MessageSquare size={18} />
        <span>WhatsApp Us</span>
      </a>

      <a 
        href={phoneUrl} 
        className="floating-btn floating-btn-call"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(197, 160, 89, 0.6)',
          background: 'rgba(31, 31, 31, 0.88)'
        }}
        title="Call Urban Frill Pune Studio"
      >
        <Phone size={18} />
        <span>Call Studio</span>
      </a>
    </aside>
  );
};

export default FloatingContactWidget;
