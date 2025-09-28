interface MobileScrollIndicatorProps {
  isScrolling: boolean;
  shouldHide: boolean;
}

export default function MobileScrollIndicator({
  isScrolling,
  shouldHide,
}: MobileScrollIndicatorProps) {
  return (
    <div
      className={`lg:hidden flex flex-col items-center transition-all duration-500 ${isScrolling ? 'text-yellow-500' : 'text-white'} ${shouldHide ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="w-0.5 h-12 bg-current"></div>
      <div className="w-3 h-3 bg-current rounded-full animate-[slide-down_2s_ease-in-out_infinite] -mt-6"></div>
    </div>
  );
}
