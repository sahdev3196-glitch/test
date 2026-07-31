import React, { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  ChevronDown, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Sliders, 
  ShieldCheck 
} from 'lucide-react';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { animate } from 'animejs';
import { useReveal } from '../hooks/useReveal';

// FAQ Accordion Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <div style={{ borderBottom: '1px solid #E8DED3', padding: '1.75rem 0' }}>
      <button 
        onClick={onClick}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'none', 
          border: 'none', 
          outline: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.15rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}>
          {question}
        </span>
        <span style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          color: 'var(--cls-gold)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <ChevronDown size={20} />
        </span>
      </button>
      <div 
        ref={contentRef}
        style={{ 
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px', 
          overflow: 'hidden', 
          transition: 'max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
          opacity: isOpen ? 1 : 0
        }}
      >
        <p style={{ fontSize: '0.95rem', color: '#6B6B6B', lineHeight: '1.65', marginTop: '1rem', marginBottom: 0, fontWeight: 300 }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);
  
  // Reveal animation refs
  const contactDetailsRef = useReveal(800);
  const showroomRef = useReveal(800);
  const mapRef = useReveal(800);
  const chooseRef = useReveal(800);
  const faqRef = useReveal(800);

  // Accordion active state
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting]   = useState(false);

  useEffect(() => {
    // Set SEO Meta
    document.title = "Contact Us | Premium Interior Furnishing Studio | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Get in touch with Urban Frill. Book a free space design consultation, call us, or visit our luxury showroom experience center in Pune."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    // Animate Hero split elements on mount
    if (heroTextRef.current) {
      animate(heroTextRef.current, {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 900,
        easing: 'easeOutExpo'
      });
    }
    if (heroImgRef.current) {
      animate(heroImgRef.current, {
        opacity: [0, 1],
        scale: [1.05, 1],
        duration: 1100,
        easing: 'easeOutExpo',
        delay: 50
      });
    }
  }, []);

  const handleFAQClick = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "368b838c-5da8-4762-846f-3761f5fcf244");
      formData.append("subject", "New Studio Lead - Urban Frill Website");
      formData.append("from_name", "Urban Frill Lead Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        alert(result.message || "Form submission failed. Please call us directly.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Submission error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#F7F3EE', paddingBottom: '6rem' }}>
      
      {/* Component Specific Style Overrides (Focus, Hover, Zoom, etc.) */}
      {/* Component Specific Style Overrides (Focus, Hover, Zoom, etc.) */}
      <style>{`
        .premium-input {
          width: 100%;
          padding: 1.1rem 1.4rem;
          border-radius: 12px;
          border: 1px solid rgba(220, 210, 198, 0.4);
          background-color: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          outline: none;
          font-size: 0.95rem;
          color: #1F1F1F;
          font-family: var(--font-primary);
          font-weight: 300;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }
        .premium-input:focus {
          background-color: rgba(255, 255, 255, 0.95);
          border-color: #C7A26A !important;
          box-shadow: 0 0 0 4px rgba(197, 160, 106, 0.18) !important;
        }
        
        .choose-card {
          background-color: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 16px;
          padding: 2.75rem 2rem;
          text-align: left;
          box-shadow: 0 10px 35px 0 rgba(31, 38, 135, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
          cursor: pointer;
        }
        .choose-card:hover {
          transform: translateY(-6px);
          background-color: rgba(255, 255, 255, 0.85);
          border-color: #C7A26A;
          box-shadow: 0 20px 50px 0 rgba(28, 28, 28, 0.1);
        }

        .showroom-img-frame {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-medium);
          height: 480px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.7);
        }
        .showroom-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .showroom-img-frame:hover img {
          transform: scale(1.05);
        }

        .btn-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(31, 31, 31, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1.1rem 2.2rem;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          gap: 10px;
        }
        .btn-book:hover {
          background-color: #C7A26A;
        }
        .btn-book .arrow-icon {
          transition: transform 0.3s ease;
        }
        .btn-book:hover .arrow-icon {
          transform: translateX(5px);
        }
      `}</style>

      <LuxuryBackgroundMotion />

      {/* 1. Hero Banner */}
      <section 
        className="hero-section"
        style={{ 
          paddingTop: '8.5rem', 
          paddingBottom: '5rem',
          backgroundColor: '#F7F3EE'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '4rem', 
              alignItems: 'center' 
            }}
            className="lg:grid-cols-12"
          >
            {/* Left side text details */}
            <div 
              ref={heroTextRef}
              className="lg:col-span-5 text-left"
              style={{ opacity: 0 }}
            >
              <span className="section-tagline" style={{ display: 'block', marginBottom: '1.25rem', color: '#C7A26A', letterSpacing: '0.15em' }}>
                CONTACT US
              </span>
              <h1 style={{ fontSize: '3.25rem', fontWeight: 300, lineHeight: 1.15, fontFamily: 'var(--font-display)', color: '#1F1F1F', marginBottom: '1.75rem' }}>
                Let's Create Beautiful Spaces Together
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#6B6B6B', lineHeight: 1.7, fontWeight: 300, marginBottom: '2.5rem' }}>
                Whether you're designing a new home, renovating a room, or looking for premium furnishing solutions, our design consultants are here to help.
              </p>
              <button 
                onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-book"
              >
                Book Consultation <ArrowRight size={16} className="arrow-icon" />
              </button>
            </div>

            {/* Right side lifestyle image */}
            <div 
              ref={heroImgRef}
              className="lg:col-span-7 flex justify-center"
              style={{ opacity: 0 }}
            >
              <div 
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-medium)',
                  height: '500px',
                  width: '100%'
                }}
              >
                <img 
                  src="/assets/images/hero2.jpg" 
                  alt="Premium architectural curtains and furniture layout styling" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Section */}
      <section 
        id="contact-form-section"
        ref={contactDetailsRef as any}
        className="section-padding"
        style={{ opacity: 0, paddingBottom: '7rem', paddingTop: '2rem' }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '3rem', 
              alignItems: 'stretch' 
            }}
            className="lg:grid-cols-12"
          >
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-5" style={{ display: 'flex' }}>
              <div 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E8DED3', 
                  padding: '3rem 2.5rem', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--shadow-soft)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '2rem', marginTop: 0 }}>
                    Direct Support
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Studio Address */}
                    <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                      <div style={{ color: '#C7A26A', marginTop: '3px' }}>
                        <MapPin size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B6B6B', display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Visit Our Studio</span>
                        <address style={{ fontStyle: 'normal', fontSize: '1.05rem', color: '#1F1F1F', lineHeight: '1.6', fontWeight: 300 }}>
                          <strong>Urban Frill</strong><br />
                          Shop No. 33, Business Plaza,<br />
                          Timber Market Rd, Ganj Peth,<br />
                          Pune, Maharashtra 411002
                        </address>
                      </div>
                    </div>

                    {/* Individual Contacts with Gold Left Borders */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid #E8DED3', paddingTop: '1.5rem' }}>
                      {/* Contact 1 */}
                      <div style={{ borderLeft: '3px solid #C7A26A', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 400, fontFamily: 'var(--font-display)', color: '#1F1F1F' }}>
                          Shri Ram Jangid
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                          <a 
                            href="tel:07821085631" 
                            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', color: '#1F1F1F', textDecoration: 'none', fontWeight: 300 }}
                          >
                            <Phone size={14} style={{ color: '#C7A26A' }} /> 07821085631
                          </a>
                          <a 
                            href="https://wa.me/917821085631" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ fontSize: '0.95rem', color: '#25D366', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            WhatsApp ↗
                          </a>
                        </div>
                      </div>

                      {/* Contact 2 */}
                      <div style={{ borderLeft: '3px solid #C7A26A', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 400, fontFamily: 'var(--font-display)', color: '#1F1F1F' }}>
                          Chiranjiv Jangid
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                          <a 
                            href="tel:8005827701" 
                            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', color: '#1F1F1F', textDecoration: 'none', fontWeight: 300 }}
                          >
                            <Phone size={14} style={{ color: '#C7A26A' }} /> 8005827701
                          </a>
                          <a 
                            href="https://wa.me/918005827701" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ fontSize: '0.95rem', color: '#25D366', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            WhatsApp ↗
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email & Hours */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid #E8DED3', paddingTop: '1.5rem', fontSize: '0.95rem', color: '#6B6B6B' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Mail size={16} style={{ color: '#C7A26A' }} />
                        <a href="mailto:urbanfrill1508@gmail.com" style={{ color: '#1F1F1F', textDecoration: 'none' }}>urbanfrill1508@gmail.com</a>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Clock size={16} style={{ color: '#C7A26A' }} />
                        <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-7">
              <div 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E8DED3', 
                  padding: '3.5rem 3rem', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'left'
                }}
              >
                <h3 style={{ fontSize: '1.6rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '2.5rem', marginTop: 0 }}>
                  Send A Message
                </h3>

                {formSubmitted ? (
                  <div style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: '#FAF9F6', borderRadius: '12px', border: '1px solid #E8DED3' }}>
                    <div style={{ color: '#C7A26A', marginBottom: '1rem' }}>
                      <Check size={48} style={{ margin: '0 auto' }} />
                    </div>
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 400, fontFamily: 'var(--font-display)', color: '#1F1F1F', marginBottom: '0.5rem' }}>
                      Thank You!
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#6B6B6B', fontWeight: 300, margin: 0 }}>
                      Your consultation request has been received. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }} onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="md:grid-cols-2">
                      {/* Name */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="fullName" style={{ fontSize: '13px', fontWeight: 600, color: '#1F1F1F', letterSpacing: '0.05em' }}>FULL NAME</label>
                        <input 
                          type="text" 
                          id="fullName" 
                          name="name"
                          required
                          placeholder="Your full name" 
                          className="premium-input"
                        />
                      </div>
                      {/* Email */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="emailAddress" style={{ fontSize: '13px', fontWeight: 600, color: '#1F1F1F', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          id="emailAddress" 
                          name="email"
                          required
                          placeholder="Your email address" 
                          className="premium-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="md:grid-cols-2">
                      {/* Phone */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="phoneNumber" style={{ fontSize: '13px', fontWeight: 600, color: '#1F1F1F', letterSpacing: '0.05em' }}>PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          id="phoneNumber" 
                          name="phone"
                          required
                          placeholder="Your phone number" 
                          className="premium-input"
                        />
                      </div>
                      {/* Service Dropdown */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="interest" style={{ fontSize: '13px', fontWeight: 600, color: '#1F1F1F', letterSpacing: '0.05em' }}>SERVICE INTERESTED IN</label>
                        <select 
                          id="interest" 
                          name="service"
                          defaultValue="curtains"
                          className="premium-input"
                          style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B6B6B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '16px' }}
                        >
                          <option value="Curtains & Drapery">Curtains & Drapery</option>
                          <option value="Modern Window Blinds">Modern Window Blinds</option>
                          <option value="Premium Wallpapers">Premium Wallpapers</option>
                          <option value="Flooring Systems">Flooring Systems</option>
                          <option value="Luxury Rugs">Luxury Rugs</option>
                          <option value="Sofa & Fabrics Upholstery">Sofa & Fabrics Upholstery</option>
                          <option value="Other Solutions">Other Solutions</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="messageText" style={{ fontSize: '13px', fontWeight: 600, color: '#1F1F1F', letterSpacing: '0.05em' }}>YOUR MESSAGE</label>
                      <textarea 
                        id="messageText" 
                        name="message"
                        rows={4}
                        placeholder="Describe your space or project requirements..." 
                        className="premium-input"
                        style={{ resize: 'none' }}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-book"
                      style={{ alignSelf: 'flex-start', minWidth: '240px', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Book Consultation'} <ArrowRight size={16} className="arrow-icon" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Showroom Section */}
      <section 
        ref={showroomRef as any}
        className="section-padding"
        style={{ opacity: 0, paddingBottom: '7rem', backgroundColor: '#FAF9F6', borderTop: '1px solid #E8DED3', borderBottom: '1px solid #E8DED3' }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '4rem', 
              alignItems: 'center' 
            }}
            className="lg:grid-cols-12"
          >
            {/* Left Column: Image */}
            <div className="lg:col-span-6">
              <div className="showroom-img-frame">
                <img 
                  src="/assets/images/hero2.jpg" 
                  alt="Urban Frill Premium Curtains and Draperies Experience" 
                />
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-6 text-left">
              <span className="section-tagline" style={{ display: 'block', marginBottom: '1rem', color: '#C7A26A', letterSpacing: '0.15em' }}>
                EXPERIENCE CENTER
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: '#1F1F1F', marginBottom: '1.75rem', marginTop: 0 }}>
                Visit Our Experience Center
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#6B6B6B', lineHeight: 1.7, fontWeight: 300, marginBottom: '2.5rem' }}>
                Experience our premium fabrics, curtains, wallpapers, flooring, and furnishings in person. Our consultants will guide you through materials, textures, and customization options.
              </p>

              {/* Checklist Grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '1.5rem', 
                  padding: 0,
                  margin: 0
                }}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: '#C7A26A', display: 'flex', alignItems: 'center' }}>
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#1F1F1F' }}>Premium Fabric Library</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: '#C7A26A', display: 'flex', alignItems: 'center' }}>
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#1F1F1F' }}>Wallpaper Samples</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: '#C7A26A', display: 'flex', alignItems: 'center' }}>
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#1F1F1F' }}>Flooring Display</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: '#C7A26A', display: 'flex', alignItems: 'center' }}>
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#1F1F1F' }}>Design Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Map Section */}
      <section 
        ref={mapRef as any}
        className="section-padding"
        style={{ opacity: 0, paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div 
            style={{ 
              backgroundColor: '#FFFFFF', 
              border: '1px solid #E8DED3', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-medium)',
              padding: '2.5rem'
            }}
          >
            {/* Header info */}
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C7A26A', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Find Us</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: '#1F1F1F', margin: 0 }}>
                Our Showroom Location
              </h3>
            </div>

            {/* Map frame */}
            <div 
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                height: '420px', 
                border: '1px solid #E8DED3' 
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2494498877145!2d73.8698188!3d18.5176192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040d6cfa929%3A0xe9f75ecf238b97d8!2sTimber%20Market%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                style={{ border: 0, width: '100%', height: '100%' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Urban Frill Showroom Coordinates Map"
              >
              </iframe>
            </div>

            {/* CTA details */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', gap: '1.5rem', textAlign: 'left' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: '#1F1F1F', margin: '0 0 0.25rem 0' }}>Pune Experience Center</h4>
                <p style={{ fontSize: '0.9rem', color: '#6B6B6B', margin: 0, fontWeight: 300 }}>Shop No. 33, Business Plaza, Timber Market Rd, Ganj Peth, Pune, Maharashtra 411002</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Shop+33+Business+Plaza+Timber+Market+Rd+Ganj+Peth+Pune" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-book"
                style={{ textDecoration: 'none' }}
              >
                Get Directions <ArrowRight size={16} className="arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Urban Frill */}
      <section 
        ref={chooseRef as any}
        className="section-padding"
        style={{ opacity: 0, paddingBottom: '7rem', paddingTop: '2rem' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tagline" style={{ display: 'block', marginBottom: '0.5rem', color: '#C7A26A', letterSpacing: '0.15em' }}>
              WHY CHOOSE US
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: '#1F1F1F', margin: 0 }}>
              Crafting Perfection
            </h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {/* Card 1 */}
            <div className="choose-card">
              <div style={{ color: '#C7A26A', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Sparkles size={32} strokeWidth={1.25} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', marginTop: 0 }}>
                Premium Materials
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                Globally sourced, durable fabrics and structural components curated for demanding aesthetics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="choose-card">
              <div style={{ color: '#C7A26A', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Award size={32} strokeWidth={1.25} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', marginTop: 0 }}>
                Expert Craftsmanship
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                Clean, precise stitching and configuration managed by our dedicated in-house tailors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="choose-card">
              <div style={{ color: '#C7A26A', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <Sliders size={32} strokeWidth={1.25} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', marginTop: 0 }}>
                Customized Solutions
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                Tailored layout engineering to match your unique spaces down to the exact millimeter.
              </p>
            </div>

            {/* Card 4 */}
            <div className="choose-card">
              <div style={{ color: '#C7A26A', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <ShieldCheck size={32} strokeWidth={1.25} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#1F1F1F', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', marginTop: 0 }}>
                Professional Installation
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                Seamless execution and calibration on-site, backed by comprehensive service warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section 
        ref={faqRef as any}
        className="section-padding"
        style={{ opacity: 0, paddingBottom: '8rem', paddingTop: '2rem' }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tagline" style={{ display: 'block', marginBottom: '0.5rem', color: '#C7A26A', letterSpacing: '0.15em' }}>
              FAQ
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: '#1F1F1F', margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <FAQItem 
              question="Do you provide home visits?"
              answer="Yes, we offer on-site consultation and measurement services across Pune and PCMC. Our expert consultants will bring material libraries, fabrics, and swatches directly to your space for accurate matching."
              isOpen={openFAQIndex === 0}
              onClick={() => handleFAQClick(0)}
            />
            <FAQItem 
              question="Can I customize curtain fabrics?"
              answer="Absolutely. We customize fabrics, headers (sheers, blackouts, ripples, pleats), motorized tracks, linings, and specific lengths to match your exact window proportions."
              isOpen={openFAQIndex === 1}
              onClick={() => handleFAQClick(1)}
            />
            <FAQItem 
              question="Do you work on commercial projects?"
              answer="Yes. We partner directly with architects, builders, and interior designers on commercial projects, retail centers, hotels, and luxury developer showroom installations."
              isOpen={openFAQIndex === 2}
              onClick={() => handleFAQClick(2)}
            />
            <FAQItem 
              question="How long does installation take?"
              answer="Typically, custom drapery, blinds, and wallpapers require 10 to 14 business days from precise dimensions approval to complete fitting. Our professional installers handle execution with absolute cleanliness."
              isOpen={openFAQIndex === 3}
              onClick={() => handleFAQClick(3)}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

