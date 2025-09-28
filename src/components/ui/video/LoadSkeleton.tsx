import clsx from 'clsx';

interface LoadSkeletonProps {
  isLoading: boolean;
}

export default function LoadSkeleton({isLoading}: LoadSkeletonProps) {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div
        className={clsx(
          `h-20 w-20 animate-spin rounded-full`,
          `border-2 border-white border-t-transparent`,
        )}
      ></div>
    </div>
  );
}
