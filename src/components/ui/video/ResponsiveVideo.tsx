interface ResponsiveVideoProps {
  onVideoEnd: () => void;
  isMobile: boolean;
}

export default function ResponsiveVideo({
  isMobile,
  onVideoEnd,
}: ResponsiveVideoProps) {
  if (isMobile) return null;
  return (
    <video
      autoPlay
      muted
      playsInline
      onEnded={onVideoEnd}
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/header_background_video.webm" type="video/webm" />
    </video>
  );
}
