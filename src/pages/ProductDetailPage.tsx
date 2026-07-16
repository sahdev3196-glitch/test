import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Shield, CheckCircle, Clock } from 'lucide-react';

interface ProductData {
  slug: string;
  title: string;
  metaDesc: string;
  headline: string;
  tagline: string;
  image: string;
  description: string;
  keywords: string[];
  features: string[];
  specs: { label: string; value: string }[];
  detailsCopy: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
}

const PRODUCT_DATABASE: Record<string, ProductData> = {
  'curtains': {
    slug: 'curtains',
    title: 'Premium Curtains in Pune | Custom Window Drapery | Urban Frill',
    metaDesc: 'Looking for premium curtains in Pune? Urban Frill offers custom drapery, sheer curtains, and noise-cancelling blackout curtains. Call or WhatsApp for a free site consult.',
    headline: 'Bespoke Curtains & Drapery Systems in Pune',
    tagline: 'Tailored Luxury Window Styling',
    image: '/assets/images/hero2.jpg',
    description: 'Elevate your interior aesthetics with our premium curtain designs in Pune. Our studio tailors window treatments down to the millimeter, combining high-quality global fabrics with precision drapery systems.',
    keywords: ['premium curtains pune', 'custom drapery pune', 'sheer curtains pune', 'blackout curtains pune', 'luxury window treatments pune', 'curtain stitching shop in pune'],
    features: [
      'Custom sizing matching double-height and floor-to-ceiling windows.',
      'Premium fabric collections: Linen, Silk, Bouclé Velvet, and Cotton blends.',
      'Stitching styles including Ripple Fold, Pinch Pleat, and Eyelets.',
      'Thermal insulating and sound dampening linings.'
    ],
    specs: [
      { label: 'Fabric Sourcing', value: 'Belgium, Italy, Turkey & India' },
      { label: 'Pleat Styles', value: 'Ripple Fold, Pinch Pleat, Eyelet, Wave' },
      { label: 'Lining Options', value: 'Sheer, Dimout, 100% Blackout, Thermal' },
      { label: 'Stitching', value: 'Millimeter-precise double-needle hem' }
    ],
    detailsCopy: [
      {
        title: 'Why Choose Custom Curtains in Pune?',
        content: 'Standard off-the-shelf curtains rarely fit the unique dimensions of premium residential architecture. At Urban Frill Pune, we consult directly with interior decorators and homeowners to craft bespoke window treatments. From choosing light-filtering sheers for your living area to selecting heavy insulating blackout drapery for your master bedroom, we manage the entire lifecycle from measurement to final installation.'
      },
      {
        title: 'Premium Linen, Silk & Velvet Textures',
        content: 'Our Pune design gallery features textile catalogs sourced globally. Linen offers an organic, matte texture that permits natural ambient light. Silk provides an elegant, high-specular finish suited for traditional luxury drawing rooms. Heavy velvets add visual depth and offer thermal insulation against Pune\'s warm summer months, enhancing both comfort and energy efficiency.'
      }
    ],
    faqs: [
      { q: 'Do you provide measurements at my house in Pune?', a: 'Yes. Our design consultants visit your site in Pune for precise measurements, mapping track limits, and presenting fabric catalog hangers directly in your room lighting.' },
      { q: 'How long does the custom curtain fabrication take?', a: 'Typically, customized curtains are stitched, detailed, and installed within 7 to 10 working days from catalog approval.' }
    ]
  },
  'motorized-curtains': {
    slug: 'motorized-curtains',
    title: 'Motorized Curtains Pune | Automatic Smart Curtain Tracks | Urban Frill',
    metaDesc: 'Explore automated smart motorized curtains in Pune. Urban Frill integrates silent curtain tracks, remote controls, Somfy motors, and Alexa compatibility. Get a free quote today.',
    headline: 'Smart Motorized Curtains & Automation in Pune',
    tagline: 'Effortless Automated Control',
    image: '/assets/images/hero1.jpg',
    description: 'Transform your space with silent, motorized smart curtains in Pune. Control your window treatments via remote, smartphone apps, or voice commands with Alexa and Google Assistant integration.',
    keywords: ['motorized curtains pune', 'automatic curtain tracks pune', 'somfy motors pune', 'smart curtains pune', 'curtain automation system', 'alexa controlled curtains'],
    features: [
      'Super-silent brushless DC curtain motors (<30dB).',
      'Integration with Apple HomeKit, Alexa, Google Home, and home automation systems.',
      'Manual-override pull trigger: slight pull initiates automated open/close.',
      'Obstacle detection safety shut-off.'
    ],
    specs: [
      { label: 'Motor Brands', value: 'Somfy, Tuya, Lutron, Forest' },
      { label: 'Integration', value: 'Wi-Fi, Zigbee, RS485 dry contacts' },
      { label: 'Load Capacity', value: 'Up to 60kg drape weight per track' },
      { label: 'Power Supply', value: 'AC 220V or Rechargeable Lithium Battery' }
    ],
    detailsCopy: [
      {
        title: 'Architectural Smart Curtain Tracks',
        content: 'Smart motorized curtains are no longer a luxury—they are a core element of energy-efficient, automated modern homes. In large double-height windows or hard-to-reach sky vents, motorized tracks are essential. Our team integrates smart motors that adjust curtain panels automatically based on solar intensity or time schedules.'
      },
      {
        title: 'Seamless Home Automation (Domotics)',
        content: 'We coordinate directly with your electrical contractors and home automation consultants in Pune to run proper wire drops or program wireless receivers. Our smart curtains can be grouped to open together with a "Good Morning" scene, or lower blackouts dynamically when you activate your media room.'
      }
    ],
    faqs: [
      { q: 'Can motorized tracks be retrofitted in existing homes?', a: 'Yes. We offer battery-powered motorized tracks that require no wiring, keeping your walls and ceilings untouched.' },
      { q: 'Is there a warranty on automatic curtain motors?', a: 'Yes. We provide up to a 5-year replacement warranty on Somfy and other leading smart motors.' }
    ]
  },
  'blinds': {
    slug: 'blinds',
    title: 'Window Blinds Pune | Roller, Roman & Wooden Venetian Blinds | Urban Frill',
    metaDesc: 'Premium window blinds in Pune. Urban Frill offers roller blinds, designer Roman blinds, wooden Venetian blinds, and office blinds. Contact us for custom sizing.',
    headline: 'Bespoke Window Blinds & Shading Systems',
    tagline: 'Minimalist Shading Systems',
    image: '/assets/images/blinds.jpg',
    description: 'Browse premium roller blinds, wooden Venetians, Roman shades, and vertical panels in Pune. Engineered for office workspaces and minimalist residential layouts.',
    keywords: ['window blinds pune', 'roller blinds pune', 'wooden blinds pune', 'roman blinds pune', 'office blinds pune', 'balcony vertical blinds'],
    features: [
      'Wide material options: Basswood, Bamboo, vinyl, solar fabric, and polyester.',
      'Blackout roller fabrics block 100% of UV rays and solar heat.',
      'Zebra dual-shading blinds for precise day/night lighting adjustment.',
      'Child-safe cordless and motorized operating systems.'
    ],
    specs: [
      { label: 'Types Available', value: 'Roller, Roman, Venetian, Vertical, Zebra' },
      { label: 'Materials', value: 'FSC-Certified Basswood, Polymer, UV Fabrics' },
      { label: 'Operation', value: 'Manual Bead Chain, Spring Tension, Motorized' },
      { label: 'Balcony Protection', value: 'Waterproof exterior monsoon PVC blinds' }
    ],
    detailsCopy: [
      {
        title: 'Modern Shading Solutions for Offices and Living Rooms',
        content: 'Unlike traditional curtains, window blinds offer a clean, space-saving aesthetic. Roller blinds are ideal for corporate boardrooms and studies, filtering monitor glare. Wooden Venetian blinds use sustainable natural basswood to introduce warm organic textures, allowing you to angle the horizontal slats to adjust light levels.'
      },
      {
        title: 'Monsoon Balcony Blinds in Pune',
        content: 'Protect your outdoor decks and balconies from Pune\'s heavy rain with our heavy-duty exterior PVC monsoon blinds. Made of transparent reinforced vinyl, they keep rain out while preserving your views.'
      }
    ],
    faqs: [
      { q: 'Are wooden blinds resistant to moisture?', a: 'For bathrooms and high-humidity kitchens, we recommend our faux-wood PVC blinds, which offer the texture of wood but are 100% waterproof.' },
      { q: 'Can you motorize zebra and roller blinds?', a: 'Yes. Compact battery-powered tube motors are installed inside the top roller tube for automatic control.' }
    ]
  },
  'wallpaper': {
    slug: 'wallpaper',
    title: 'Designer Wallpaper Pune | Premium Wall Coverings & Murals | Urban Frill',
    metaDesc: 'Shop designer wallpapers in Pune. Urban Frill installs imported Italian vinyl wallpaper, multi-textured fabric weaves, and custom HD scenic murals.',
    headline: 'Premium Designer Wallpaper & Wallcoverings in Pune',
    tagline: 'Artisanal Vertical Canvas',
    image: '/assets/images/wallpaper.jpg',
    description: 'Transform plain walls into focal art statements. Discover imported textured wallpapers, custom murals, and gold-foiled geometric grids in Pune.',
    keywords: ['designer wallpaper pune', 'wall coverings pune', 'imported wallpaper pune', 'custom wall murals pune', '3d wallpaper pune', 'vinyl wallpapers'],
    features: [
      'High-definition customizable digital prints scaled to wall dimensions.',
      'Heavy-duty non-woven vinyl backing that handles minor dampness.',
      'Imported collections from Italian, German, and Belgian designer houses.',
      'Textured finishes including silk weave, metallic foil, and stucco.'
    ],
    specs: [
      { label: 'Origin Countries', value: 'Italy, Germany, Belgium, UK' },
      { label: 'Material Composition', value: 'Vinyl-coated paper, Non-woven backing' },
      { label: 'Maintenance', value: 'Scrubbable, washable with mild soap' },
      { label: 'Lifespan', value: 'Up to 10+ years with proper installation' }
    ],
    detailsCopy: [
      {
        title: 'Feature Accent Walls with Imported Textures',
        content: 'Wallpaper provides a degree of texture, shadow, and visual warmth that traditional emulsion paint cannot match. Whether you seek subtle linen-textured neutrals for a bedroom or high-contrast tropical patterns for a powder room, Urban Frill offers professional curation. Our installation teams guarantee bubble-free, aligned seam joins.'
      }
    ],
    faqs: [
      { q: 'Can wallpaper be applied on damp walls?', a: 'We recommend treating any internal structural leakage before wallpaper application, as moisture will degrade the adhesive over time.' },
      { q: 'Are your wallpapers peelable if I rent my space?', a: 'Yes. Our premium non-woven wallpapers can be peeled off dry without tearing the plaster surface underneath.' }
    ]
  },
  'upholstery-fabrics': {
    slug: 'upholstery-fabrics',
    title: 'Sofa Upholstery Fabric Pune | Reupholstery Services | Urban Frill',
    metaDesc: 'Premium sofa upholstery fabrics in Pune. Urban Frill offers Martindale-abrasion certified velvet, bouclé, and leatherette. Expert sofa repair and reupholstery.',
    headline: 'Bespoke Sofa Upholstery & Restoration in Pune',
    tagline: 'High-Performance Luxury Fabrics',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&h=600&q=80',
    description: 'Restore your furniture to showroom standards. Choose high-abrasion upholstery textiles for custom sofas, lounge beds, and headboards in Pune.',
    keywords: ['sofa upholstery fabric pune', 'furniture reupholstery pune', 'velvet upholstery fabric', 'boucle sofa fabric pune', 'custom sofa stitching', 'leatherette upholstery'],
    features: [
      'High Martindale abrasion ratings (>40,000 rubs) for heavy family use.',
      'Stain-resistant treatments (Easy-Clean, Teflon coating) for pet owners.',
      'Complete furniture restoration: re-padding foam, checking frames.',
      'Sourcing of premium leatherette, natural cotton-linen, and rich velvet.'
    ],
    specs: [
      { label: 'Certified Rub Count', value: '25,000 to 100,000+ Martindale cycles' },
      { label: 'Textile Types', value: 'Jacquard, Bouclé, Chenille, Matte Velvet, Suede' },
      { label: 'Frame Refurbishment', value: 'Teak wood structural reinforcing' },
      { label: 'Foam Density', value: '32 to 40 Density high-resilience PU Foam' }
    ],
    detailsCopy: [
      {
        title: 'Bespoke Upholstery vs Replacing Furniture',
        content: 'Luxury teakwood sofa frames are built to last decades, but their fabric and foam cushions degrade over time. Reupholstering allows you to customize the seating density and colors at a fraction of the cost of buying a new sofa. We evaluate frame integrity and upgrade spring webbing and foams for ergonomic comfort.'
      }
    ],
    faqs: [
      { q: 'Do you collect the sofa from my site?', a: 'Yes. We offer complete pickup, refurbishment at our workshop, and delivery back to your home, or can run clean site-work for fixed wall panels.' },
      { q: 'What is Martindale rating?', a: 'It measures fabric durability against friction. A rating over 30,000 is ideal for high-traffic living room seating.' }
    ]
  },
  'rugs': {
    slug: 'rugs',
    title: 'Designer Rugs Pune | Hand-Knotted Wool Carpets | Urban Frill',
    metaDesc: 'Bespoke area rugs in Pune. Urban Frill supplies high-density hand-knotted wool rugs, heritage carpets, and flatweaves sized to fit your living room layout.',
    headline: 'Bespoke Rugs & Custom Area Carpets',
    tagline: 'Textiles for the Floor',
    image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&w=1200&h=600&q=80',
    description: 'Frame your living room layouts with artisanal wool, viscose, and jute carpets. Custom sized and colored to harmonize with your curtains and drapes.',
    keywords: ['designer rugs pune', 'hand knotted wool rugs pune', 'living room carpet pune', 'custom size rugs', 'area carpets pune', 'bedroom rugs'],
    features: [
      'Hand-tufted, hand-knotted, and flatwoven configurations.',
      'Premium fibers: New Zealand Wool, bamboo silk, organic jute, and cotton.',
      'Made-to-order sizing to perfectly frame your sofa layout.',
      'Shed-resistant, color-fast, and easy to maintain.'
    ],
    specs: [
      { label: 'Fibers Sourced', value: 'New Zealand Wool, Bamboo Silk, Cotton' },
      { label: 'Knot Densities', value: 'High-density counts for plush underfoot feel' },
      { label: 'Customization', value: 'Custom shapes, circular rugs, and custom sizes' },
      { label: 'Anti-Slip', value: 'Dedicated rug pad liners provided' }
    ],
    detailsCopy: [
      {
        title: 'Framing Your Seating Layouts',
        content: 'A rug binds a room design together, anchoring the sofa, chairs, and tables. Off-the-shelf rugs are often too small, making spaces feel cramped. Urban Frill works with weavers to craft custom rugs that scale perfectly to your architectural layouts, keeping furniture legs nested on the pile.'
      }
    ],
    faqs: [
      { q: 'How do I clean a bamboo silk rug?', a: 'Regular vacuuming without a rotating beater bar is ideal. Clean spills quickly with a dry white cloth and schedule professional carbon-cleaning annually.' },
      { q: 'Can you customize rug colors?', a: 'Yes. We match your rug wool dye batches to your curtain or upholstery color samples.' }
    ]
  },
  'wooden-flooring': {
    slug: 'wooden-flooring',
    title: 'Wooden Flooring Pune | Engineered Wood & Laminate Planks | Urban Frill',
    metaDesc: 'Engineered hardwood and laminate wooden flooring in Pune. Urban Frill installs wear-resistant wood planks with click-lock joints. Get a free site evaluation.',
    headline: 'Premium Engineered Wood & Laminate Flooring in Pune',
    tagline: 'Warm Organic Footing',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&h=600&q=80',
    description: 'Introduce natural wood warmth. Explore click-lock engineered hardwood flooring and scratch-resistant laminate wood planks installed by expert teams in Pune.',
    keywords: ['wooden flooring pune', 'engineered hardwood flooring pune', 'laminate wood flooring pune', 'click lock wood planks', 'bedroom wooden flooring'],
    features: [
      'FSC-Certified hardwood species: White Oak, Teak, Walnut, and Maple.',
      'Engineered multi-layer base structures that resist warping in Pune\'s humidity.',
      'Scratch-resistant AC4/AC5 rated protective overlays for laminate lines.',
      'Click-lock joints for quick, adhesive-free floating installations.'
    ],
    specs: [
      { label: 'Plank Formats', value: 'Single plank, Herringbone, Chevron' },
      { label: 'Thickness Range', value: '8mm, 10mm (Laminate) | 12mm to 15mm (Engineered)' },
      { label: 'Finish Coats', value: 'UV lacquer, Matte oil scratch-guard' },
      { label: 'Underlayment', value: '2mm IXPE sound-dampening foam sheet' }
    ],
    detailsCopy: [
      {
        title: 'Why Engineered Wood Floors?',
        content: 'While solid wood flooring is prone to expanding and contracting during seasonal weather changes, engineered wood floors are structurally cross-laminated. This makes them extremely stable, preserving tight plank joints. They feature a top wear layer of real oak or walnut that can be sanded and refinished multiple times.'
      }
    ],
    faqs: [
      { q: 'How long does a wooden flooring installation take?', a: 'A standard master bedroom can be completed in a single day, including skirting trims.' },
      { q: 'Is it safe to clean with water?', a: 'Damp mopping is safe, but standing water must be avoided on wood joints.' }
    ]
  },
  'pvc-flooring': {
    slug: 'pvc-flooring',
    title: 'PVC Vinyl Flooring Pune | SPC Waterproof Flooring Planks | Urban Frill',
    metaDesc: 'Get SPC PVC vinyl flooring in Pune. Waterproof, click-lock planks ideal for high-traffic office floors, kitchens, and retail zones. Request a quote.',
    headline: 'SPC PVC Vinyl Waterproof Flooring Planks in Pune',
    tagline: 'High-Performance Utility Floors',
    image: '/assets/images/pvc_flooring.jpg',
    description: 'Discover durable, waterproof PVC and Stone Plastic Composite (SPC) vinyl flooring in Pune. Engineered to withstand high commercial traffic and moisture.',
    keywords: ['pvc flooring pune', 'spc flooring pune', 'vinyl flooring planks pune', 'waterproof flooring pune', 'commercial office flooring'],
    features: [
      '100% waterproof: suitable for kitchens, dining halls, and commercial zones.',
      'Stone Plastic Composite core prevents indentation from heavy furniture.',
      'Anti-microbial and anti-scratch wear protective surface coating.',
      'Built-in IXPE foam underlayment for sound mitigation.'
    ],
    specs: [
      { label: 'Core Board', value: 'Stone Plastic Composite (SPC) / Premium PVC' },
      { label: 'Wear Layer', value: '0.3mm to 0.55mm heavy commercial grade' },
      { label: 'Installation', value: 'Glue-Down tiles or Click-Lock floating planks' },
      { label: 'Eco-Rating', value: 'Formaldehyde-free, E0 emission level' }
    ],
    detailsCopy: [
      {
        title: 'Waterproof Utility of SPC Flooring',
        content: 'SPC flooring represents the next generation of vinyl tiles. With a core composed of natural limestone powder and PVC stabilizers, it is completely waterproof and fire-retardant. It provides the visual aesthetic of real oak planks but requires none of the maintenance, resisting stains, pet claws, and moisture.'
      }
    ],
    faqs: [
      { q: 'Is SPC flooring cold underfoot?', a: 'No, it retains ambient temperature, making it warmer and more comfortable than ceramic tile flooring.' },
      { q: 'Can this be installed over existing tiles?', a: 'Yes, provided the tile subfloor is level and grout lines are filled.' }
    ]
  },
  'mattresses': {
    slug: 'mattresses',
    title: 'Orthopedic Mattress Pune | Organic Latex & Memory Foam | Urban Frill',
    metaDesc: 'Luxury mattresses in Pune. Urban Frill designs custom orthopedic foam mattresses, organic latex, and pocket springs built to premium hotel standards.',
    headline: 'Orthopedic & Luxury Custom Mattresses in Pune',
    tagline: 'Ergonomic Sleep Support',
    image: '/assets/images/mattresses.jpg',
    description: 'Upgrade your sleep health with our custom comfort mattresses. Orthopedic layers, natural latex, and pocketed coil support tailored to your bed frame size in Pune.',
    keywords: ['orthopedic mattress pune', 'latex mattress pune', 'memory foam mattress pune', 'custom size mattress', 'pocket spring mattress'],
    features: [
      'Zoned orthopedic support channels align the spine correctly.',
      'Natural organic latex layers prevent body heat trapping.',
      'Individually wrapped pocket springs limit motion transfer.',
      'Hypoallergenic bamboo-fabric ticking covers.'
    ],
    specs: [
      { label: 'Support Core', value: 'Pocket Spring Coils, High-Resilience Foam' },
      { label: 'Comfort Layers', value: 'Cooling gel memory foam, Organic natural latex' },
      { label: 'Sizes Available', value: 'King, Queen, Custom single/double layouts' },
      { label: 'Warranty Period', value: '7 to 10 Years limited manufacturer warranty' }
    ],
    detailsCopy: [
      {
        title: 'Custom Mattress Curation',
        content: 'One mattress design does not suit every body type or sleep posture. At Urban Frill, we customize mattress densities (Soft, Medium-Firm, Hard Orthopedic) to address your back health requirements. If your bed frame has custom non-standard dimensions, we fabricate mattresses to match your layout perfectly.'
      }
    ],
    faqs: [
      { q: 'What mattress is best for chronic back pain?', a: 'We recommend our zoned orthopedic mattress, which pairs a high-density rebonded foam base with a natural organic latex layer for pressure relief and support.' },
      { q: 'Do you deliver mattresses in Pune?', a: 'Yes. We deliver mattresses wrapped in protective heavy packaging straight to your home.' }
    ]
  },
  'customized-soft-furnishings': {
    slug: 'customized-soft-furnishings',
    title: 'Custom Soft Furnishings Pune | Decorative Cushions & Throws | Urban Frill',
    metaDesc: 'Custom soft furnishings in Pune. Bespoke lumbar pillows, bed runners, bolsters, and throw cushions designed to match your curtains and upholstery.',
    headline: 'Customized Soft Furnishings & Accessories in Pune',
    tagline: 'Coordinated Visual Highlights',
    image: '/assets/images/soft_furnishings.jpg',
    description: 'Perfect your interiors with customized soft furnishings in Pune. Tailored throw pillows, bed runners, bolster inserts, and lumbar rolls designed in matching textile palettes.',
    keywords: ['custom soft furnishings pune', 'decorative cushions pune', 'custom throw pillows', 'bed runners pune', 'bolster cushions'],
    features: [
      'Throws and cushions stitched using left-over fabric coordinate loops.',
      'Premium filling options: micro-fiber, organic cotton, or duck feather inserts.',
      'Detail treatments including gold piping, tassels, and concealed zippers.',
      'Coordinated bedroom runner blankets.'
    ],
    specs: [
      { label: 'Stitching Styles', value: 'Flanged, Piped, Knife-edge, Tufted' },
      { label: 'Fillings', value: 'Hypoallergenic micro-fiber, Natural down' },
      { label: 'Zippers', value: 'Concealed YKK zippers standard' },
      { label: 'Curation', value: 'Bespoke palette coordination by design consultants' }
    ],
    detailsCopy: [
      {
        title: 'The Finishing Touch of Coordinating Accents',
        content: 'Interior design is in the details. Coordinating throw cushions and custom bolsters using accents from your curtains and sofa fabrics ties a room layout together. We design and stitch accessories in-house to match the scale of your lounge suites, ensuring clean stitching and durable zipper channels.'
      }
    ],
    faqs: [
      { q: 'Can you use my fabrics to stitch cushions?', a: 'Yes, we can stitch custom cushions using fabrics you supply, or pair them with our studio gallery catalogs.' },
      { q: 'Are cushion covers washable?', a: 'Most custom covers are zippered for dry-cleaning convenience, depending on whether they contain silk, velvet, or linen.' }
    ]
  }
};

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? PRODUCT_DATABASE[slug] : null;

  // Dynamically update document title and description tag for top SEO rank
  useEffect(() => {
    if (product) {
      document.title = product.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.metaDesc);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = product.metaDesc;
        document.head.appendChild(meta);
      }

      // Add dynamic keywords meta tag
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', product.keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = product.keywords.join(', ');
        document.head.appendChild(meta);
      }

      // Add a canonical URL dynamic link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://urbanfrill.in/products/${product.slug}`);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = `https://urbanfrill.in/products/${product.slug}`;
        document.head.appendChild(link);
      }

      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="section-padding text-center container">
        <h2>Offering Not Found</h2>
        <p>The premium furnishing collection you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary mt-4">Back to Showroom</Link>
      </div>
    );
  }

  const handleWhatsAppEnquiry = () => {
    const message = `Hi Urban Frill, I am visiting your website and want to initiate a design consultation for your premium: ${product.headline}. Please coordinate a site evaluation.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917821085631?text=${encoded}`, '_blank');
  };

  return (
    <article className="offering-detail-page section-padding">
      <div className="container">
        
        {/* Back Link */}
        <Link to="/" className="btn-back-link" aria-label="Return to Urban Frill Home Page">
          <ArrowLeft size={16} /> Back to collections
        </Link>

        {/* Header Block */}
        <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
          <span className="section-tagline">{product.tagline}</span>
          <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>{product.headline}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--cls-text-dark)', maxWidth: '800px', fontWeight: 300 }}>
            {product.description}
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="offering-hero-grid">
          <div className="offering-hero-img-box">
            <img 
              src={product.image} 
              alt={`${product.headline} premium showroom design, Urban Frill Pune`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          {/* Quick specs card */}
          <div className="offering-specs-card">
            <h3>Architectural Specifications</h3>
            <div style={{ borderBottom: '1px solid rgba(28, 28, 28, 0.08)', margin: '1rem 0' }} />
            <table className="offering-specs-table">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i}>
                    <td><strong>{spec.label}</strong></td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={handleWhatsAppEnquiry} className="btn btn-primary btn-block text-center" style={{ justifyContent: 'center' }}>
                <MessageSquare size={16} style={{ marginRight: '8px' }} /> Enquire on WhatsApp
              </button>
              <a href="tel:+917821085631" className="btn btn-secondary btn-block text-center" style={{ justifyContent: 'center' }}>
                <Phone size={16} style={{ marginRight: '8px' }} /> Call Studio Consultant
              </a>
            </div>
          </div>
        </div>

        {/* Copy block sections and features list */}
        <div className="offering-body-grid">
          
          {/* Detailed Editorial copy */}
          <div className="offering-editorial-copy">
            {product.detailsCopy.map((section, idx) => (
              <section key={idx} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 400 }}>{section.title}</h2>
                <p style={{ lineHeight: '1.7', color: 'var(--cls-text-muted)', fontWeight: 300 }}>{section.content}</p>
              </section>
            ))}

          </div>

          {/* Value highlights checklist */}
          <div className="offering-highlights-col">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 500, marginBottom: '1.5rem' }}>Studio Curation Highlights</h3>
            
            <ul className="highlights-check-list">
              {product.features.map((feature, i) => (
                <li key={i}>
                  <CheckCircle size={16} style={{ color: 'var(--cls-gold)', flexShrink: 0 }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="offering-trust-card">
              <div className="trust-item">
                <Shield size={20} style={{ color: 'var(--cls-gold)' }} />
                <div>
                  <strong>Warranty Backed</strong>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Up to 5 years guarantee on premium systems and tracks.</p>
                </div>
              </div>
              <div className="trust-item" style={{ marginTop: '1.5rem' }}>
                <Clock size={20} style={{ color: 'var(--cls-gold)' }} />
                <div>
                  <strong>Fast Fabrication</strong>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Prompt installation within 7-10 working days from approval.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related faqs specific to category */}
        <section className="offering-faq-block" style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: 400, textAlign: 'center' }}>Bespoke Consultation FAQ</h2>
          <div className="offering-faq-grid">
            {product.faqs.map((faq, i) => (
              <div key={i} className="offering-faq-card">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--cls-charcoal)' }}>Q: {faq.q}</h4>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--cls-text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
