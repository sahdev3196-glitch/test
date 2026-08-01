import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load pages for optimized loading performance
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const Curtains = lazy(() => import('../pages/Curtains'));
const Blinds = lazy(() => import('../pages/Blinds'));
const Wallpapers = lazy(() => import('../pages/Wallpapers'));
const Rugs = lazy(() => import('../pages/Rugs'));
const Flooring = lazy(() => import('../pages/Flooring'));
const Upholstery = lazy(() => import('../pages/Upholstery'));
const Mattresses = lazy(() => import('../pages/Mattresses'));
const SoftFurnishings = lazy(() => import('../pages/SoftFurnishings'));

// New separate pages
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="section-padding text-center container" style={{ color: 'var(--cls-text-muted)', fontWeight: 300 }}>Loading Studio collections...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/curtains" element={<Curtains />} />
        <Route path="/products/motorized-curtains" element={<Curtains />} />
        <Route path="/products/blinds" element={<Blinds />} />
        <Route path="/products/wallpaper" element={<Wallpapers />} />
        <Route path="/products/wallpapers" element={<Wallpapers />} />
        <Route path="/products/rugs" element={<Rugs />} />
        <Route path="/products/wooden-flooring" element={<Flooring />} />
        <Route path="/products/pvc-flooring" element={<Flooring />} />
        <Route path="/products/flooring" element={<Flooring />} />
        <Route path="/products/upholstery-fabrics" element={<Upholstery />} />
        <Route path="/products/upholstery" element={<Upholstery />} />
        <Route path="/products/fabrics" element={<Upholstery />} />
        <Route path="/products/mattresses" element={<Mattresses />} />
        <Route path="/products/customized-soft-furnishings" element={<SoftFurnishings />} />
        <Route path="/products/soft-furnishings" element={<SoftFurnishings />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
