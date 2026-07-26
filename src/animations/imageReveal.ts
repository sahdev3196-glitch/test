import { animate } from 'animejs';

export const revealImage = (imgEl: HTMLImageElement, duration: number = 800) => {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    imgEl.style.opacity = '1';
    imgEl.style.filter = 'blur(0px)';
    imgEl.style.transform = 'scale(1)';
    return;
  }

  // Set initial state
  imgEl.style.opacity = '0';
  imgEl.style.filter = 'blur(8px)';
  imgEl.style.transform = 'scale(1.03)';

  const filterObj = { blur: 8 };

  animate(filterObj, {
    blur: 0,
    duration: duration,
    easing: 'easeOutQuart',
    update: () => {
      imgEl.style.filter = `blur(${filterObj.blur}px)`;
    }
  });

  animate(imgEl, {
    opacity: [0, 1],
    scale: [1.03, 1],
    duration: duration,
    easing: 'easeOutQuart'
  });
};

export default revealImage;
