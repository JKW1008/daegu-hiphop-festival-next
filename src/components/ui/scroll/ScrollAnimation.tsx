import {useEffect, useRef, useState} from 'react';
import DesktopScrollIndicator from './DesktopScrollIndicator';
import MobileScrollIndicator from './MobileScrollIndicator';
import clsx from 'clsx';

interface ScrollAnimationProps {
  show: boolean;
  className?: string;
}

export default function ScrollAnimation({
  show,
  className,
}: ScrollAnimationProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > lastScrollYRef.current && scrollY > 50) {
        setIsScrolling(true);
        setTimeout(() => setShouldHide(true), 300);
      } else if (scrollY < lastScrollYRef.current && scrollY <= 10) {
        setIsScrolling(false);
        setTimeout(() => setShouldHide(false), 300);
      }
      lastScrollYRef.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className={clsx(
        `absolute bottom-8 left-1/2`,
        `z-10 -translate-x-1/2 transform`,
        `animate-[slideUpBounce_1s_ease-out_0.5s_forwards]`,
        `opacity-0 ${className || ''}`,
      )}
    >
      <DesktopScrollIndicator />
      <MobileScrollIndicator
        isScrolling={isScrolling}
        shouldHide={shouldHide}
      />
    </div>
  );
}
