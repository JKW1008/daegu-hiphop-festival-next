import DesktopScrollIndicator from './DesktopScrollIndicator';
import MobileScrollIndicator from './MobileScrollIndicator';
import clsx from 'clsx';
import useScrollIndicator from '@/hooks/useScrollIndicator';

interface ScrollAnimationProps {
  show: boolean;
  className?: string;
}

export default function ScrollAnimation({
  show,
  className,
}: ScrollAnimationProps) {
  const {isScrolling, shouldHide} = useScrollIndicator();
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
