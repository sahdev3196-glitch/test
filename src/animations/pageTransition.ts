import { createTimeline } from 'animejs';

export const fadePageOut = (pageEl: HTMLElement, overlayEl: HTMLElement, callback: () => void, duration: number = 350) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    callback();
    return;
  }

  const tl = createTimeline({
    easing: 'easeInOutQuad'
  });

  tl.add(pageEl, {
    opacity: [1, 0],
    duration: duration
  });

  tl.add(overlayEl, {
    opacity: [0, 1],
    duration: duration
  }, `-=${duration}`);

  tl.then(() => {
    callback();
  });
};

export const fadePageIn = (pageEl: HTMLElement, overlayEl: HTMLElement, duration: number = 450) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    overlayEl.style.opacity = '0';
    pageEl.style.opacity = '1';
    return;
  }

  const tl = createTimeline({
    easing: 'easeOutExpo'
  });

  tl.add(overlayEl, {
    opacity: [1, 0],
    duration: 300
  });

  tl.add(pageEl, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: duration
  }, '-=200');
};
