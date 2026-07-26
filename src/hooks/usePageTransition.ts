import { useNavigate } from 'react-router-dom';
import { fadePageOut } from '../animations/pageTransition';

export const usePageTransition = () => {
  const navigate = useNavigate();

  const transitionTo = (to: string) => {
    const pageContainer = document.querySelector('.products-catalog-page, .category-detail-page, .about-section, .faq-section') as HTMLElement;
    const overlay = document.querySelector('.page-transition-overlay') as HTMLElement;

    if (pageContainer && overlay) {
      fadePageOut(pageContainer, overlay, () => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

  return transitionTo;
};

export default usePageTransition;
