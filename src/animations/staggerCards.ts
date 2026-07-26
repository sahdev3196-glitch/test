import { animate } from 'animejs';

export const staggerElements = (targets: any, translateYAmount: number = 30, duration: number = 700) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    animate(targets, { opacity: 1, translateY: 0, duration: 0 });
    return;
  }

  animate(targets, {
    opacity: [0, 1],
    translateY: [translateYAmount, 0],
    duration: duration,
    delay: (_el: any, i: number) => i * 90,
    easing: 'easeOutQuart'
  });
};

export default staggerElements;
