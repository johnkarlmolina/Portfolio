import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'slide-in' | 'slide-out' | 'push-in' | 'push-out';

export function useScrollAnimation(animationType: AnimationType = 'slide-in', delay: number = 0) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slide-in':
          return `${baseClasses} opacity-0 translate-x-[-50px]`;
        case 'slide-out':
          return `${baseClasses} opacity-0 translate-x-[50px]`;
        case 'push-in':
          return `${baseClasses} opacity-0 translate-y-[50px]`;
        case 'push-out':
          return `${baseClasses} opacity-0 translate-y-[-50px]`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
  };

  return { ref, animationClass: getAnimationClass() };
}
