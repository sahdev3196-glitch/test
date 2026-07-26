import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Award, Sliders, Sparkles } from 'lucide-react';
import { LuxuryBackgroundMotion } from '../components/ui/LuxuryBackgroundMotion';
import { animate, stagger, createTimeline } from 'animejs';
import { useReveal } from '../hooks/useReveal';

// ─── Data ────────────────────────────────────────────────────────────────────

interface CollectionItem {
  name: string;
  desc: string;
  image: string;
  slug: string;
}

const collections: Record<string, CollectionItem[]> = {
  curtains: [
    { name: 'Sheer Curtains',        desc: 'Soft diffused light for airy interiors.',   image: '/assets/images/hero2.jpg',           slug: 'curtains' },
    { name: 'Blackout Curtains',     desc: 'Total darkness for perfect rest.',            image: '/assets/images/hero3.jpg',           slug: 'curtains' },
    { name: 'Wave Curtains',         desc: 'Flowing ripple effect for modern rooms.',     image: '/assets/images/hero1.jpg',           slug: 'curtains' },
    { name: 'Motorized Curtains',    desc: 'Smart automation at your fingertips.',        image: '/assets/images/hero4.jpg',           slug: 'curtains' },
    { name: 'Eyelet Curtains',       desc: 'Contemporary rings for easy glide.',          image: 'https://images.unsplash.com/photo-1616594265371-23aa5a08efba?auto=format&fit=crop&w=800&q=80', slug: 'curtains' },
    { name: 'Pleated Curtains',      desc: 'Structured folds for a tailored finish.',     image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', slug: 'curtains' },
    { name: 'Roman Curtains',        desc: 'Elegant folded panels for classic charm.',    image: '/assets/images/roman_blinds.jpg',    slug: 'curtains' },
    { name: 'Ripple Fold Curtains',  desc: 'Consistent ripples for a polished look.',    image: '/assets/images/hero2.jpg',           slug: 'curtains' },
    { name: 'Pinch Pleat Curtains',  desc: 'Pinched tops for a luxurious drape.',         image: '/assets/images/hero3.jpg',           slug: 'curtains' },
    { name: 'Double Layer Curtains', desc: 'Privacy and light control combined.',         image: '/assets/images/hero1.jpg',           slug: 'curtains' },
    { name: 'Linen Curtains',        desc: 'Natural texture for calm, organic spaces.',   image: '/assets/images/hero4.jpg',           slug: 'curtains' },
    { name: 'Velvet Curtains',       desc: 'Opulent fabric for dramatic interiors.',      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', slug: 'curtains' },
  ],
  blinds: [
    { name: 'Roller Blinds',     desc: 'Minimal and functional for any window.',   image: '/assets/images/blinds.jpg',       slug: 'blinds' },
    { name: 'Roman Blinds',      desc: 'Soft fabric folds for refined rooms.',     image: '/assets/images/roman_blinds.jpg', slug: 'blinds' },
    { name: 'Venetian Blinds',   desc: 'Adjustable slats for precise light.',      image: '/assets/images/hero3.jpg',        slug: 'blinds' },
    { name: 'Vertical Blinds',   desc: 'Ideal for large windows and sliding doors.', image: '/assets/images/hero4.jpg',      slug: 'blinds' },
    { name: 'Wooden Blinds',     desc: 'Warm natural wood tones for home.',        image: '/assets/images/wooden_flooring.jpg', slug: 'blinds' },
    { name: 'Zebra Blinds',      desc: 'Alternating sheer and solid fabric.',      image: '/assets/images/hero1.jpg',        slug: 'blinds' },
    { name: 'Honeycomb Blinds',  desc: 'Insulating cells for energy efficiency.',  image: '/assets/images/hero2.jpg',        slug: 'blinds' },
    { name: 'Panel Blinds',      desc: 'Wide panels for a dramatic statement.',    image: '/assets/images/blinds.jpg',       slug: 'blinds' },
    { name: 'Bamboo Blinds',     desc: 'Eco-friendly natural light filtering.',    image: '/assets/images/wooden_flooring.jpg', slug: 'blinds' },
    { name: 'Motorized Blinds',  desc: 'Smart home compatible automation.',        image: '/assets/images/hero3.jpg',        slug: 'blinds' },
  ],
  wallpapers: [
    { name: 'Floral Wallpapers',          desc: 'Blooms and botanicals for lively spaces.', image: '/assets/images/wallpaper.jpg', slug: 'wallpaper' },
    { name: 'Textured Wallpapers',        desc: 'Tactile surfaces for depth and character.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80', slug: 'wallpaper' },
    { name: 'Luxury Metallic Wallpapers', desc: 'Gold and silver for opulent finishes.',    image: 'https://images.unsplash.com/photo-1616594265371-23aa5a08efba?auto=format&fit=crop&w=800&q=80', slug: 'wallpaper' },
    { name: 'Kids Wallpapers',            desc: 'Fun and imaginative for little rooms.',    image: '/assets/images/hero2.jpg',     slug: 'wallpaper' },
    { name: 'Geometric Wallpapers',       desc: 'Bold patterns for modern interiors.',      image: '/assets/images/hero4.jpg',     slug: 'wallpaper' },
    { name: 'Marble Wallpapers',          desc: 'Stone-look elegance without the cost.',    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80', slug: 'wallpaper' },
    { name: 'Brick Wallpapers',           desc: 'Industrial texture for loft aesthetics.',  image: '/assets/images/hero3.jpg',     slug: 'wallpaper' },
    { name: 'Wood Finish Wallpapers',     desc: 'Natural grain for warm interiors.',        image: '/assets/images/wooden_flooring.jpg', slug: 'wallpaper' },
    { name: '3D Wallpapers',              desc: 'Sculptural depth for statement walls.',    image: '/assets/images/wallpaper.jpg', slug: 'wallpaper' },
    { name: 'Minimal Wallpapers',         desc: 'Clean and quiet for serene spaces.',       image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', slug: 'wallpaper' },
    { name: 'Fabric Wallpapers',          desc: 'Soft, luxurious textile wallcoverings.',   image: '/assets/images/showroom.jpg',  slug: 'wallpaper' },
    { name: 'Custom Printed Wallpapers',  desc: 'Your vision, printed to perfection.',      image: '/assets/images/hero1.jpg',     slug: 'wallpaper' },
  ],
  rugs: [
    { name: 'Hand Tufted Rugs',  desc: 'Artisan crafted for premium feel.',        image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Hand Knotted Rugs', desc: 'Traditional knots for heirloom quality.',  image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Persian Rugs',      desc: 'Timeless patterns from ancient tradition.', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Modern Rugs',       desc: 'Contemporary designs for fresh interiors.', image: 'https://images.unsplash.com/photo-1616594265371-23aa5a08efba?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Shaggy Rugs',       desc: 'Deep pile for ultimate underfoot comfort.', image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Wool Rugs',         desc: 'Natural warmth and lasting durability.',   image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Cotton Rugs',       desc: 'Lightweight and easy-care flat weaves.',   image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Jute Rugs',         desc: 'Eco-friendly texture for natural spaces.', image: 'https://images.unsplash.com/photo-1616594265371-23aa5a08efba?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Outdoor Rugs',      desc: 'Weather-resistant rugs for any season.',   image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Luxury Area Rugs',  desc: 'Statement pieces for signature rooms.',    image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Runner Rugs',       desc: 'Elegant strips for hallways and kitchens.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
    { name: 'Round Rugs',        desc: 'Circular forms for conversation areas.',   image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', slug: 'rugs' },
  ],
  fabrics: [
    { name: 'Linen Fabric',      desc: 'Breathable and beautifully textured.',     image: '/assets/images/showroom.jpg',    slug: 'upholstery-fabrics' },
    { name: 'Velvet Fabric',     desc: 'Plush and luxurious for statement pieces.', image: '/assets/images/hero2.jpg',      slug: 'upholstery-fabrics' },
    { name: 'Cotton Fabric',     desc: 'Soft, versatile and everyday elegant.',    image: '/assets/images/hero3.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Silk Fabric',       desc: 'Lustrous sheen for premium interiors.',    image: '/assets/images/hero1.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Chenille Fabric',   desc: 'Soft pile for comfort-forward furniture.', image: '/assets/images/hero4.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Jacquard Fabric',   desc: 'Woven patterns for decorative depth.',     image: '/assets/images/showroom.jpg',    slug: 'upholstery-fabrics' },
    { name: 'Suede Fabric',      desc: 'Matte luxury for modern upholstery.',      image: '/assets/images/hero2.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Leatherette Fabric', desc: 'Durable faux leather for any setting.',   image: '/assets/images/hero3.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Blackout Fabric',   desc: 'Light-blocking performance fabric.',       image: '/assets/images/hero1.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Printed Fabric',    desc: 'Custom designs for individual character.', image: '/assets/images/hero4.jpg',       slug: 'upholstery-fabrics' },
    { name: 'Sheer Fabric',      desc: 'Translucent layers for delicate beauty.',  image: '/assets/images/showroom.jpg',    slug: 'upholstery-fabrics' },
    { name: 'Outdoor Fabric',    desc: 'UV and weather-resistant performance.',    image: '/assets/images/hero2.jpg',       slug: 'upholstery-fabrics' },
  ],
  flooring: [
    { name: 'Wooden Flooring',       desc: 'Solid wood planks for timeless warmth.',   image: '/assets/images/wooden_flooring.jpg', slug: 'wooden-flooring' },
    { name: 'Engineered Wood',       desc: 'Layered stability for any climate.',        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', slug: 'wooden-flooring' },
    { name: 'Laminate Flooring',     desc: 'Wood-look surface with resilience.',        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80', slug: 'wooden-flooring' },
    { name: 'PVC Flooring',          desc: '100% waterproof vinyl planks.',             image: '/assets/images/wooden_flooring.jpg', slug: 'pvc-flooring' },
    { name: 'SPC Flooring',          desc: 'Stone composite core for ultimate strength.', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80', slug: 'pvc-flooring' },
    { name: 'Vinyl Flooring',        desc: 'Flexible and budget-friendly style.',       image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80', slug: 'pvc-flooring' },
    { name: 'Herringbone Flooring',  desc: 'Classic chevron pattern for elegance.',     image: '/assets/images/wooden_flooring.jpg', slug: 'wooden-flooring' },
    { name: 'Deck Flooring',         desc: 'Outdoor composite for terraces and balconies.', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', slug: 'wooden-flooring' },
    { name: 'Artificial Grass',      desc: 'Year-round lush green for outdoor spaces.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', slug: 'wooden-flooring' },
    { name: 'Outdoor Deck Tiles',    desc: 'Quick-install tiles for any exterior.',     image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', slug: 'wooden-flooring' },
  ],
  mattresses: [
    { name: 'Memory Foam Mattress',   desc: 'Pressure-relief contouring for deep sleep.', image: '/assets/images/mattresses.jpg', slug: 'mattresses' },
    { name: 'Pocket Spring Mattress', desc: 'Individual springs for motion isolation.',    image: '/assets/images/hero3.jpg',       slug: 'mattresses' },
    { name: 'Orthopedic Mattress',    desc: 'Therapeutic support for back health.',        image: '/assets/images/mattresses.jpg',  slug: 'mattresses' },
    { name: 'Latex Mattress',         desc: 'Natural latex for cool, responsive sleep.',   image: '/assets/images/hero1.jpg',       slug: 'mattresses' },
    { name: 'Hybrid Mattress',        desc: 'Springs and foam for balanced comfort.',      image: '/assets/images/mattresses.jpg',  slug: 'mattresses' },
    { name: 'Luxury Hotel Mattress',  desc: '5-star sleep experience at home.',            image: '/assets/images/hero4.jpg',       slug: 'mattresses' },
    { name: 'Kids Mattress',          desc: 'Safe, supportive sleep for growing children.', image: '/assets/images/hero2.jpg',      slug: 'mattresses' },
    { name: 'Foldable Mattress',      desc: 'Portable comfort for flexible living.',       image: '/assets/images/mattresses.jpg',  slug: 'mattresses' },
    { name: 'Queen Size Mattress',    desc: 'Perfect proportions for couples.',            image: '/assets/images/hero3.jpg',       slug: 'mattresses' },
    { name: 'King Size Mattress',     desc: 'Maximum space for ultimate comfort.',         image: '/assets/images/mattresses.jpg',  slug: 'mattresses' },
  ],
  softFurnishings: [
    { name: 'Cushions',             desc: 'Comfort and colour for every corner.',      image: '/assets/images/soft_furnishings.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Throw Pillows',        desc: 'Decorative accents for sofas and beds.',    image: '/assets/images/sofa_boucle_white.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Bed Runners',          desc: 'Elegant finishing touch for your bed.',     image: '/assets/images/soft_furnishings.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Bed Covers',           desc: 'Luxurious layers for complete bedroom.',    image: '/assets/images/sofa_curved_cream.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Throws & Blankets',    desc: 'Cosy textures for relaxed living.',         image: '/assets/images/soft_furnishings.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Table Runners',        desc: 'Refined accents for dining in style.',      image: '/assets/images/sofa_grey_l.jpg',      slug: 'customized-soft-furnishings' },
    { name: 'Chair Covers',         desc: 'Protect and transform your seating.',       image: '/assets/images/sofa_offwhite_l.jpg',  slug: 'customized-soft-furnishings' },
    { name: 'Poufs & Ottomans',     desc: 'Versatile seating and storage combined.',   image: '/assets/images/soft_furnishings.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Decorative Cushions',  desc: 'Artful cushions as conversation pieces.',   image: '/assets/images/sofa_boucle_white.jpg', slug: 'customized-soft-furnishings' },
    { name: 'Custom Upholstery',    desc: 'Your furniture, reimagined entirely.',      image: '/assets/images/sofa_curved_cream.jpg', slug: 'customized-soft-furnishings' },
  ],
};

const categories = [
  { key: 'all',             label: 'All',              desc: 'Everything in our collection' },
  { key: 'curtains',        label: 'Curtains',         desc: 'Custom drapes for every window' },
  { key: 'blinds',          label: 'Blinds',           desc: 'Precision light control solutions' },
  { key: 'wallpapers',      label: 'Wallpapers',       desc: 'Walls that tell your story' },
  { key: 'rugs',            label: 'Rugs',             desc: 'Foundation for beautiful rooms' },
  { key: 'fabrics',         label: 'Fabrics',          desc: 'Premium textiles for every application' },
  { key: 'flooring',        label: 'Flooring',         desc: 'Surfaces built to last a lifetime' },
  { key: 'mattresses',      label: 'Mattresses',       desc: 'Sleep in luxury every night' },
  { key: 'softFurnishings', label: 'Soft Furnishings', desc: 'Finishing touches that complete the look' },
];

// Flatten all items for the "All" view
const allItems: CollectionItem[] = Object.values(collections).flat();

// ─── Component ───────────────────────────────────────────────────────────────

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedItems, setDisplayedItems] = useState<CollectionItem[]>(allItems);
  const [searchQuery, setSearchQuery]       = useState('');
  const [isAnimating, setIsAnimating]       = useState(false);

  const headerReveal   = useRef<HTMLDivElement | null>(null);
  const gridRef        = useRef<HTMLDivElement | null>(null);
  const gridSectionRef = useRef<HTMLElement | null>(null);
  const valuePropsReveal = useReveal(800);

  // ── SEO + header entrance animation ──────────────────────────────────────
  useEffect(() => {
    document.title = 'Explore Our Collections | Urban Frill';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content',
        "Browse Urban Frill's premium collections of Curtains, Blinds, Wallpapers, Rugs, Fabrics, Flooring, Mattresses, and Soft Furnishings."
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    if (headerReveal.current) {
      animate(headerReveal.current, {
        opacity: [0, 1], translateY: [20, 0], duration: 800, easing: 'easeOutExpo'
      });
    }
  }, []);

  // ── Initial card reveal (on mount) ───────────────────────────────────────
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.product-card');
    if (!cards || cards.length === 0) return;
    animate(Array.from(cards), {
      opacity: [0, 1], translateY: [24, 0],
      delay: stagger(60), duration: 450, easing: 'easeOutExpo'
    });
  }, []);

  // ── Compute items for current category + search ───────────────────────────
  const getItems = useCallback((cat: string, query: string): CollectionItem[] => {
    const base = cat === 'all' ? allItems : collections[cat] ?? [];
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
  }, []);

  // ── Animated category switch ──────────────────────────────────────────────
  const switchCategory = useCallback((catKey: string, query: string = searchQuery) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.product-card') ?? [];

    const tl = createTimeline({ defaults: { easing: 'easeOutExpo' } });

    // 1) Fade out existing cards
    if (cards.length > 0) {
      tl.add(Array.from(cards), {
        opacity: [1, 0], translateY: [0, 20], duration: 300,
        delay: stagger(40, { from: 'first' })
      });
    }

    // 2) Swap data and scroll
    tl.add({}, {
      duration: 50,
      onComplete: () => {
        setActiveCategory(catKey);
        setDisplayedItems(getItems(catKey, query));

        // Smooth scroll to grid
        gridSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 3) Fade in new cards (after React re-render)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const newCards = gridRef.current?.querySelectorAll<HTMLElement>('.product-card') ?? [];
            if (newCards.length > 0) {
              animate(Array.from(newCards), {
                opacity: [0, 1], translateY: [24, 0],
                delay: stagger(60), duration: 450, easing: 'easeOutExpo',
                onComplete: () => setIsAnimating(false)
              });
            } else {
              setIsAnimating(false);
            }
          });
        });
      }
    });
  }, [isAnimating, searchQuery, getItems]);

  // ── Live search ───────────────────────────────────────────────────────────
  const handleSearch = (q: string) => {
    setSearchQuery(q);
    const filtered = getItems(activeCategory, q);
    setDisplayedItems(filtered);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const cards = gridRef.current?.querySelectorAll<HTMLElement>('.product-card') ?? [];
        if (cards.length > 0) {
          animate(Array.from(cards), {
            opacity: [0, 1], translateY: [16, 0],
            delay: stagger(40), duration: 350, easing: 'easeOutExpo'
          });
        }
      });
    });
  };

  // ── Active category meta ──────────────────────────────────────────────────
  const activeMeta = categories.find(c => c.key === activeCategory)!;
  const totalItems = displayedItems.length;

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: 'var(--cls-warm-white)', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <LuxuryBackgroundMotion />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section ref={headerReveal as any} style={{ opacity: 0, textAlign: 'center', marginBottom: '3rem' }} className="container">
        <span className="section-tagline" style={{ display: 'block', marginBottom: '0.75rem' }}>
          OUR COLLECTIONS
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: 300, fontFamily: 'var(--font-display)', color: 'var(--cls-charcoal)', marginBottom: '1.25rem', margin: '0 auto 1.25rem' }}>
          Explore Our Premium Collections
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--cls-text-muted)', maxWidth: '560px', margin: '0 auto', fontWeight: 300 }}>
          Discover luxury furnishing solutions curated for every space and lifestyle.
        </p>
      </section>

      {/* ── Search Bar ───────────────────────────────────────────────────── */}
      <div className="container" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          position: 'relative', width: '100%', maxWidth: '480px',
          display: 'flex', alignItems: 'center'
        }}>
          <Search size={16} style={{
            position: 'absolute', left: '1rem',
            color: 'var(--cls-text-muted)', pointerEvents: 'none'
          }} />
          <input
            type="text"
            placeholder="Search collections…"
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            style={{
              width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
              borderRadius: '30px', border: '1px solid var(--cls-border-lux)',
              backgroundColor: 'var(--cls-pure-white)', fontSize: '0.9rem',
              color: 'var(--cls-charcoal)', outline: 'none',
              boxShadow: 'var(--shadow-soft)', transition: 'border-color 0.3s, box-shadow 0.3s',
              fontFamily: 'var(--font-body)'
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = 'var(--cls-gold)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(199,162,106,0.15)';
            }}
            onBlur={e => {
              e.currentTarget.style.borderColor = 'var(--cls-border-lux)';
              e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
            }}
          />
        </div>
      </div>

      {/* ── Category Nav Pills ────────────────────────────────────────────── */}
      <div className="container" style={{
        display: 'flex', justifyContent: 'center', gap: '0.5rem',
        flexWrap: 'wrap', marginBottom: '3.5rem'
      }}>
        {categories.map(cat => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => switchCategory(cat.key)}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '30px',
                border: '1px solid',
                borderColor: isActive ? 'transparent' : 'var(--cls-border-lux)',
                backgroundColor: isActive ? '#C7A26A' : 'var(--cls-pure-white)',
                color: isActive ? '#FFFFFF' : 'var(--cls-charcoal)',
                fontSize: '0.83rem', fontWeight: 500, cursor: 'pointer',
                letterSpacing: '0.03em',
                boxShadow: isActive ? '0 4px 14px rgba(199,162,106,0.35)' : 'none',
                transition: 'all 0.28s ease',
                fontFamily: 'var(--font-body)'
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#C7A26A';
                  e.currentTarget.style.color = '#C7A26A';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--cls-border-lux)';
                  e.currentTarget.style.color = 'var(--cls-charcoal)';
                }
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── Grid Section ─────────────────────────────────────────────────── */}
      <section ref={gridSectionRef as any} className="container" style={{ marginBottom: '5rem', scrollMarginTop: '7rem' }}>

        {/* Category subtitle + count */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 300, color: 'var(--cls-charcoal)', fontFamily: 'var(--font-display)', margin: 0, lineHeight: 1.3 }}>
              {activeMeta.label}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--cls-text-muted)', margin: '0.3rem 0 0', fontWeight: 300 }}>
              {activeMeta.desc}
            </p>
          </div>
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.06em',
            color: 'var(--cls-pure-white)', backgroundColor: '#C7A26A',
            padding: '0.25rem 0.8rem', borderRadius: '20px'
          }}>
            {totalItems} {totalItems === 1 ? 'collection' : 'collections'}
          </span>
        </div>

        {/* The grid */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }}
        className="products-grid"
        >
          {displayedItems.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem 0', color: 'var(--cls-text-muted)' }}>
              <p style={{ fontSize: '1rem' }}>No collections match your search.</p>
            </div>
          ) : displayedItems.map((item, idx) => (
            <Link
              key={`${activeCategory}-${idx}`}
              to={`/products/${item.slug}`}
              className="product-card"
              style={{
                opacity: 0,
                display: 'flex', flexDirection: 'column',
                backgroundColor: 'var(--cls-pure-white)',
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid var(--cls-border-lux)',
                boxShadow: '0 2px 12px rgba(31,31,31,0.06)',
                textDecoration: 'none', color: 'inherit',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(31,31,31,0.13)';
                const img = e.currentTarget.querySelector<HTMLImageElement>('.card-img');
                if (img) img.style.transform = 'scale(1.05)';
                const arrow = e.currentTarget.querySelector<HTMLDivElement>('.card-arrow');
                if (arrow) arrow.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(31,31,31,0.06)';
                const img = e.currentTarget.querySelector<HTMLImageElement>('.card-img');
                if (img) img.style.transform = 'scale(1)';
                const arrow = e.currentTarget.querySelector<HTMLDivElement>('.card-arrow');
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              {/* Image 16:10 */}
              <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', backgroundColor: 'var(--cls-soft-beige)' }}>
                <img
                  className="card-img"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease' }}
                />
              </div>
              {/* Details */}
              <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--cls-charcoal)', margin: '0 0 0.3rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--cls-text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: '#C7A26A', fontWeight: 500, letterSpacing: '0.04em', marginTop: '0.6rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Explore Collection <span className="card-arrow" style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>→</span>
                  </span>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '50%',
                  border: '1px solid var(--cls-border-lux)', color: '#C7A26A',
                  flexShrink: 0, marginLeft: '1rem'
                }}>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Value Props Bar ───────────────────────────────────────────────── */}
      <section
        ref={valuePropsReveal as any}
        style={{
          backgroundColor: 'var(--cls-soft-beige)',
          borderTop: '1px solid var(--cls-border-lux)',
          borderBottom: '1px solid var(--cls-border-lux)',
          padding: '3rem 0', opacity: 0
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
            {[
              { icon: <Sparkles size={20} />,    label: 'Premium Materials' },
              { icon: <Award size={20} />,        label: 'Expert Craftsmanship' },
              { icon: <Sliders size={20} />,      label: 'Custom Solutions' },
              { icon: <ShieldCheck size={20} />,  label: 'Professional Installation' },
            ].map((v, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ color: 'var(--cls-gold)' }}>{v.icon}</div>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cls-charcoal)', textAlign: 'left' }}>
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
