import { animate } from 'animejs';

export const revealElement = (element: HTMLElement, duration: number = 800) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    animate(element, { opacity: 1, translateY: 0, duration: 0 });
    return;
  }

  animate(element, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: duration,
    easing: 'easeOutQuart'
  });
};

export default revealElement;
