import {useEffect, useRef, useState} from 'react';

interface UseScrollIndicatorOptions {
  scrollThreshold?: number;
  hideThreshold?: number;
  animationDelay?: number;
}

export default function useScrollIndicator(
  options?: UseScrollIndicatorOptions,
) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const lastScrollYRef = useRef(0);
  const {
    scrollThreshold = window.innerHeight * 0.05,
    hideThreshold = window.innerHeight * 0.01,
    animationDelay = 300,
  } = options || {};
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (scrollY > lastScrollYRef.current && scrollY > scrollThreshold) {
        setIsScrolling(true);
        timeoutRef.current = setTimeout(
          () => setShouldHide(true),
          animationDelay,
        );
      } else if (scrollY < lastScrollYRef.current && scrollY <= hideThreshold) {
        setIsScrolling(false);
        timeoutRef.current = setTimeout(
          () => setShouldHide(false),
          animationDelay,
        );
      }
      lastScrollYRef.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scrollThreshold, hideThreshold, animationDelay]);

  return {isScrolling, shouldHide};
}
