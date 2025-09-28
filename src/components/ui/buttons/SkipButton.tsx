import clsx from 'clsx';

interface SkipButtonProps {
  onSkip: () => void;
  show: boolean;
  className?: string;
}

export default function SkipButton({onSkip, show, className}: SkipButtonProps) {
  if (!show) return null;

  return (
    <div className={`absolute right-8 bottom-8 z-10 ${className || ''}`}>
      <button
        onClick={onSkip}
        className={clsx(
          `h-16 w-16 rounded-full border-2 border-black/80`,
          `relative bg-black/50 transition-all duration-300`,
          `touch-manipulation select-none`,
          `md:hover:scale-110 md:hover:border-yellow-500`,
          `active:scale-95 active:border-yellow-500`,
          `animate-[fadeInBounce_0.8s_ease-out_forwards]`,
          `before:absolute before:inset-0 before:rounded-full`,
          `before:animate-ping before:border-2 before:border-black/50`,
        )}
      >
        <span className="animate-pulse text-2xl text-white">→</span>
      </button>
    </div>
  );
}
