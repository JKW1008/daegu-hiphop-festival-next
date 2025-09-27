interface SkipButtonProps {
  onSkip: () => void;
  show: boolean;
  className?: string;
}

export default function SkipButton({
  onSkip,
  show,
  className,
}: SkipButtonProps) {
  if (!show) return null;

  return (
    <div className={`absolute bottom-8 right-8 z-10 ${className || ""}`}>
      <button
        onClick={onSkip}
        className="w-16 h-16 rounded-full border-2 border-black/80
             hover:border-yellow-500 hover:scale-110
             transition-all duration-300 relative bg-black/50
             animate-[fadeInBounce_0.8s_ease-out_forwards]
             before:absolute before:inset-0 before:rounded-full
             before:border-2 before:border-black/50 before:animate-ping"
      >
        <span className="text-white text-2xl animate-pulse">→</span>
      </button>
    </div>
  );
}
