import clsx from 'clsx';

export default function DesktopScrollIndicator() {
  return (
    <div className="hidden lg:block">
      <div
        className={clsx(
          `flex h-10 w-6 justify-center border-2`,
          `rounded-full border-white md:cursor-pointer`,
          `md:hover:scale-110 md:hover:border-yellow-500`,
          `group transition-all duration-300`,
          `active:scale-95 active:border-yellow-500`,
          `touch-manipulation select-none`,
        )}
      >
        <div
          className={clsx(
            `mt-2 h-3 w-1 animate-bounce`,
            `rounded-full bg-white`,
            `transition-colors duration-300`,
            `group-hover:bg-yellow-500`,
          )}
        ></div>
      </div>
    </div>
  );
}
