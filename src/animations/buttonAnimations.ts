import { animate } from 'animejs';

export const playButtonHover = (btnEl: HTMLElement, arrowEl: HTMLElement | null, hover: boolean) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return;

  if (hover) {
    animate(btnEl, {
      scale: 1.02,
      boxShadow: '0 8px 20px rgba(28, 28, 28, 0.08)',
      duration: 250,
      easing: 'easeOutQuart'
    });
    if (arrowEl) {
      animate(arrowEl, {
        translateX: 6,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
  } else {
    animate(btnEl, {
      scale: 1,
      boxShadow: '0 2px 6px rgba(28, 28, 28, 0.02)',
      duration: 250,
      easing: 'easeOutQuart'
    });
    if (arrowEl) {
      animate(arrowEl, {
        translateX: 0,
        duration: 250,
        easing: 'easeOutQuart'
      });
    }
  }
};

export default playButtonHover;
