import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltIntensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  style = {},
  tiltIntensity = 12,
  glowColor = 'rgba(255, 255, 255, 0.45)',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position normalized relative to card center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid 3D tilt movement
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), {
    stiffness: 300,
    damping: 25
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), {
    stiffness: 300,
    damping: 25
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className={`perspective-wrapper ${className}`}
      style={{ perspective: 1200, ...style }}
      onClick={onClick}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
        animate={{
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}

        {/* Specular Spotlight Reflection Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
            opacity: isHovered ? 0.8 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 10
          }}
        />
      </motion.div>
    </div>
  );
};

export default TiltCard3D;
