import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import UI components
import { Header } from './components/ui/Header';
import { ProductCard } from './components/ui/ProductCard';
import { FAQ } from './components/ui/FAQ';
import { Contact } from './components/ui/Contact';
import { Footer } from './components/ui/Footer';
import { HeroCarousel } from './components/ui/HeroCarousel';

// Import pages dynamically (Code Splitting)
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  // GSAP Scroll Animation hook
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isReducedMotion) {
      // 1. Fade-in animations for section taglines & headers
      gsap.utils.toArray('.section-tagline, .section-center-header').forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // 2. About section animation
      gsap.fromTo('.about-text-content',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.about-visual-box',
        { opacity: 0, x: 40, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%',
          }
        }
      );

      // 3. Product card staggered entry
      gsap.fromTo('.product-card-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.products-section',
            start: 'top 70%',
          }
        }
      );

      // 4. FAQ item reveal stagger
      gsap.fromTo('.faq-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 80%',
          }
        }
      );

      // 5. Contact section split fade
      gsap.fromTo('.contact-info-block',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.contact-map-block',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 75%',
          }
        }
      );
    }

    // Dynamic SEO update for the main page
    document.title = "Curtains, Blinds & Wallpaper Pune | Urban Frill";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Urban Frill is Pune's premium furnishing studio for bespoke curtains, blinds, wallpaper & sofa upholstery. Call or WhatsApp for a free consultation.");
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <HeroCarousel />
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-padding">
        <div className="container grid-two-columns">
          <div className="about-text-content">
            <p className="section-tagline">The Studio</p>
            <h2>Bespoke Interfusion of Craftsmanship and Luxury</h2>
            <p>
              Located in the heart of Pune's design hub, <strong>Urban Frill</strong> is an elite architectural furnishing studio. We engineer complete soft-furnishing transformations for premium residences, commercial landscapes, corporate builders, and luxury hotel projects across Maharashtra.
            </p>
            <p>
              In close alignment with prominent architects and interior designers, we curate custom window treatments, wall-coverings, and high-performance textiles. Our core philosophy bridges aesthetic sophistication with durable structural layout engineering.
            </p>
            
            <ul className="value-propositions-list">
              <li><strong>Uncompromising Quality:</strong> Globally sourced textiles and components tested for ultimate longevity.</li>
              <li><strong>Tailored Customization:</strong> Tailoring products down to exact millimeter specifications for flawless integration.</li>
              <li><strong>Professional Consultation:</strong> Structured spatial site evaluation, texture pairing, and functional advice.</li>
              <li><strong>Premium Global Brands:</strong> Direct gallery access to world-class elite catalogs and international textile labels.</li>
              <li><strong>Expert Precision Installation:</strong> Dedicated in-house tech teams guaranteeing clean execution.</li>
            </ul>
          </div>
          
          <div className="about-visual-box">
            <img 
              src="/assets/images/showroom.jpg" 
              alt="Urban Frill premium interior furnishing showroom in Pune showcasing custom curtain catalogs and fabrics" 
              width="800" 
              height="900" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section section-padding">
        <div className="container">
          <div className="section-center-header">
            <p className="section-tagline">Our Curated Portfolio</p>
            <h2>Architectural Furnishing Collections</h2>
          </div>
          
          <div className="product-gallery-grid">
            <ProductCard 
              title="Curtains"
              description="Bespoke custom draperies, sheer curtains, noise-canceling blockouts, and premium manual drapery tracks."
              image="/assets/images/hero2.jpg"
              slug="curtains"
            />
            <ProductCard 
              title="Motorized Curtains"
              description="Smart home automated curtains with silent motors, Alexa/Google compatibility, and click-lock tracks."
              image="/assets/images/hero1.jpg"
              slug="motorized-curtains"
            />
            <ProductCard 
              title="Blinds"
              description="Precision-engineered roller blinds, Roman shades, wooden Venetians, and waterproof balcony monsoon blinds."
              image="/assets/images/blinds.jpg"
              slug="blinds"
            />
            <ProductCard 
              title="Wallpapers"
              description="Imported textured wall coverings, gold-foil geometry grids, and custom scenic digital wall murals."
              image="/assets/images/wallpaper.jpg"
              slug="wallpaper"
            />
            <ProductCard 
              title="Upholstery Fabrics"
              description="High-rub Martindale certified sofa upholstery fabrics, stain-resistant loop bouclés, and complete reupholstery."
              image="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&h=450&q=80"
              slug="upholstery-fabrics"
            />
            <ProductCard 
              title="Rugs"
              description="Hand-knotted New Zealand wool rugs, organic jute flatweaves, and custom sizes dyed to match your fabrics."
              image="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=600&h=450&q=80"
              slug="rugs"
            />
            <ProductCard 
              title="Wooden Flooring"
              description="Engineered hardwood flooring and AC4/AC5 wear-resistant scratch-guard click-lock laminate planks."
              image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&h=450&q=80"
              slug="wooden-flooring"
            />
            <ProductCard 
              title="PVC Flooring"
              description="100% waterproof Stone Plastic Composite (SPC) vinyl flooring planks suited to kitchens and office floors."
              image="/assets/images/pvc_flooring.jpg"
              slug="pvc-flooring"
            />
            <ProductCard 
              title="Mattresses"
              description="Orthopedic spinal support mattresses, chemical-free natural organic latex, and pocketed spring coils."
              image="/assets/images/mattresses.jpg"
              slug="mattresses"
            />
            <ProductCard 
              title="Customized Soft Furnishings"
              description="Bespoke lumbar cushions, flanged/piped throw pillows, bed runners, and bolster inserts coordinates."
              image="/assets/images/soft_furnishings.jpg"
              slug="customized-soft-furnishings"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section section-padding">
        <div className="container">
          <div className="section-center-header">
            <p className="section-tagline">Common Questions</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={
          <Suspense fallback={<div className="section-padding text-center container">Loading offering details...</div>}>
            <ProductDetailPage />
          </Suspense>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
