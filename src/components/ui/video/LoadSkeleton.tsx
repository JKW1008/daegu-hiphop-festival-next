interface LoadSkeletonProps {
  isLoading: boolean;
}

export default function LoadSkeleton({isLoading}: LoadSkeletonProps) {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="w-20 h-20 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
