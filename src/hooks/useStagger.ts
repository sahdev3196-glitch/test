import { useEffect, useRef } from 'react';
import { staggerElements } from '../animations/staggerCards';

export const useStagger = (childSelector: string, translateYAmount: number = 30, duration: number = 700) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll(childSelector);
          if (children.length > 0) {
            // Pre-set opacity to 0 to prevent visual flashes
            children.forEach((c: any) => {
              (c as HTMLElement).style.opacity = '0';
            });
            staggerElements(Array.from(children), translateYAmount, duration);
            observer.unobserve(container);
          }
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(container);
    return () => {
      if (container) observer.unobserve(container);
    };
  }, [childSelector, translateYAmount, duration]);

  return containerRef;
};

export default useStagger;
