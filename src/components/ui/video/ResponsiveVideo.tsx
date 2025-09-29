import {useEffect, useState} from 'react';
import LoadSkeleton from './LoadSkeleton';

interface ResponsiveVideoProps {
  onVideoEnd: () => void;
  isMobile: boolean;
}

interface NavigatorConnection {
  effectiveType: 'slow-2g' | '2g' | '3g' | 'slow-4g' | '4g';
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NavigatorConnection;
}

export default function ResponsiveVideo({
  isMobile,
  onVideoEnd,
}: ResponsiveVideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldSkipVideo, setShouldSkipVideo] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as NavigatorWithConnection).connection;
      console.log(connection);
      const effectiveType = connection?.effectiveType;
      const saveData = connection?.saveData;

      const isSlowConnection =
        effectiveType === 'slow-2g' ||
        effectiveType === '2g' ||
        effectiveType === '3g' ||
        effectiveType === 'slow-4g';

      const isDataSaving = saveData === true;
      if (isSlowConnection || isDataSaving) {
        setShouldSkipVideo(true);
        onVideoEnd();
      }
    }
  }, [onVideoEnd]);

  const handleLoadStart = () => setIsLoading(true);
  const handleCanPlay = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    onVideoEnd();
  };

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
