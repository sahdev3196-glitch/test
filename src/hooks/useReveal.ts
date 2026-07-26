import { useEffect, useRef } from 'react';
import { revealElement } from '../animations/revealOnScroll';

export const useReveal = (duration: number = 800) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealElement(el, duration);
          observer.unobserve(el);
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [duration]);

  return elementRef;
};

export default useReveal;
