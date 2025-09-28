import clsx from 'clsx';

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
      className={clsx(
        `flex flex-col items-center transition-all`,
        `duration-500 lg:hidden`,
        `${isScrolling ? 'text-yellow-500' : 'text-white'}`,
        `${shouldHide ? 'opacity-0' : 'opacity-100'}`,
        `touch-manipulation select-none active:scale-95`,
      )}
    >
      <div className="h-12 w-0.5 bg-current"></div>
      <div
        className={clsx(
          `-mt-6 h-3 w-3`,
          `animate-[slide-down_2s_ease-in-out_infinite]`,
          `rounded-full bg-current`,
        )}
      ></div>
    </div>
  );
}
