import {useState} from 'react';

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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-20 h-20 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
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
