import { animate, createTimeline } from 'animejs';

export const animateHero = (textSelector: string, imgSelector: string, glassCardSelector: string) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    animate(textSelector, { opacity: 1, translateY: 0, duration: 0 });
    animate(imgSelector, { opacity: 1, scale: 1, duration: 0 });
    animate(glassCardSelector, { opacity: 1, translateY: 0, duration: 0 });
    return;
  }

  const tl = createTimeline({
    easing: 'easeOutExpo'
  });

  // Text reveals using stagger
  tl.add(textSelector, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    delay: (_el: any, i: number) => i * 100
  });

  // Image scales from 1.05 → 1
  tl.add(imgSelector, {
    opacity: [0, 1],
    scale: [1.05, 1],
    duration: 1200
  }, '-=800');

  // Floating feature card fades upward
  tl.add(glassCardSelector, {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000
  }, '-=800');
};

export default animateHero;
