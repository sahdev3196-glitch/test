import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fadePageOut, fadePageIn } from '../../animations/pageTransition';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [renderedChildren, setRenderedChildren] = useState<React.ReactNode>(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      if (pageRef.current && overlayRef.current) {
        setIsTransitioning(true);
        // Step 1: Fade out old page, fade in overlay
        fadePageOut(pageRef.current, overlayRef.current, () => {
          // Step 2: Switch page content
          setDisplayLocation(location);
          setRenderedChildren(children);
        });
      } else {
        setDisplayLocation(location);
        setRenderedChildren(children);
      }
    } else {
      setRenderedChildren(children);
    }
  }, [location, children, displayLocation.pathname]);

  useEffect(() => {
    // Step 3: Fade out overlay and reveal new page once it's rendered
    if (isTransitioning && location.pathname === displayLocation.pathname) {
      if (pageRef.current && overlayRef.current) {
        fadePageIn(pageRef.current, overlayRef.current);
        setIsTransitioning(false);
      }
    }
  }, [displayLocation, isTransitioning, location]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Subtle White Loading Overlay */}
      <div 
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#FAF9F6', // Matches Urban Frill background
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0,
        }}
      />
      
      {/* Page Container */}
      <div ref={pageRef}>
        {renderedChildren}
      </div>
    </div>
  );
};

export default PageTransitionWrapper;
