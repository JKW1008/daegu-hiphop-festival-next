'use client';

import SkipButton from '../ui/buttons/SkipButton';
import AppearLogo from '../ui/logo/AppearLogo';
import ScrollAnimation from '../ui/scroll/ScrollAnimation';
import ResponsiveVideo from '../ui/video/ResponsiveVideo';
import useViewportSize from '@/hooks/useViewportSize';

export default function MainVideoSection() {
  const {videoEnded, isMobile, handleVideoEnd} = useViewportSize();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ResponsiveVideo onVideoEnd={handleVideoEnd} isMobile={isMobile} />
      <AppearLogo show={videoEnded} />
      <SkipButton show={!videoEnded && !isMobile} onSkip={handleVideoEnd} />
      <ScrollAnimation show={videoEnded} />
    </div>
  );
}
