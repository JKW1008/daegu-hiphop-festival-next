interface ScrollAnimationProps {
  show: boolean;
  className?: string;
}

export default function ScrollAnimation({
  show,
  className,
}: ScrollAnimationProps) {
  if (!show) return null;
  return (
    <div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10
                 animate-[slideUpBounce_1s_ease-out_0.5s_forwards] opacity-0 ${
                   className || ""
                 }`}
    >
      <div
        className="w-6 h-10 border-2 border-white rounded-full flex justify-center
                    hover:border-yellow-500 hover:scale-110
                    transition-all duration-300 cursor-pointer group"
      >
        <div
          className="w-1 h-3 bg-white rounded-full animate-bounce mt-2
                      group-hover:bg-yellow-500 transition-colors duration-300"
        ></div>
      </div>
    </div>
  );
}
