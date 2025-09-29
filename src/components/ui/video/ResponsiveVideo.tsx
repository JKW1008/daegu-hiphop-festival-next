import LoadSkeleton from './LoadSkeleton';
import useNetworkOptimization from '@/hooks/useNetworkOptimization';
import useVideoLoading from '@/hooks/useVideoLoading';

interface ResponsiveVideoProps {
  onVideoEnd: () => void;
  isMobile: boolean;
}

export default function ResponsiveVideo({
  isMobile,
  onVideoEnd,
}: ResponsiveVideoProps) {
  const shouldSkipVideo = useNetworkOptimization(onVideoEnd);
  const {isLoading, handleLoadStart, handleCanPlay, handleError} =
    useVideoLoading({onVideoEnd});
  if (isMobile || shouldSkipVideo) return null;

  return (
    <>
      <LoadSkeleton isLoading={isLoading} />
      <video
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src="/video/header_background_video.webm" type="video/webm" />
      </video>
    </>
  );
}
