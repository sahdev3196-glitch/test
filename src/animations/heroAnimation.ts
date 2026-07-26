import { animate, createTimeline } from 'animejs';

export const animateHero = (leftContainerSelector: string, rightImageSelector: string) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    animate(`${leftContainerSelector} > *`, { opacity: 1, translateY: 0, duration: 0 });
    animate(rightImageSelector, { opacity: 1, scale: 1, duration: 0 });
    return;
  }

  const tl = createTimeline({
    easing: 'easeOutExpo'
  });

  // Left Content: label, title, description, buttons stagger entry
  tl.add(`${leftContainerSelector} > *`, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1200,
    delay: (_el: any, i: number) => i * 100
  });

  // Right Content: image settles down
  tl.add(rightImageSelector, {
    opacity: [0, 1],
    scale: [1.05, 1],
    duration: 1400
  }, '-=1000');
};

export default animateHero;
