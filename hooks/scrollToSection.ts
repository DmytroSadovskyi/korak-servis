import { useCallback } from 'react';

export const useScrollToSection = () => {
  return useCallback((id: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const element = document.getElementById(id);
    const header = document.querySelector('.header') as HTMLElement | null;

    if (!element) return;

    const headerOffset = header?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);
};
