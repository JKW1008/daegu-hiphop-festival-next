import {useState} from 'react';
import LoadSkeleton from './LoadSkeleton';

interface ResponsiveVideoProps {
  onVideoEnd: () => void;
  isMobile: boolean;
}

export default function ResponsiveVideo({
  isMobile,
  onVideoEnd,
}: ResponsiveVideoProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => setIsLoading(true);
  const handleCanPlay = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    onVideoEnd();
  };

  if (isMobile) return null;
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
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/header_background_video.webm" type="video/webm" />
      </video>
    </>
  );
}
