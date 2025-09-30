'use client';

import SkipButton from '../ui/buttons/SkipButton';
import AppearLogo from '../ui/logo/AppearLogo';
import ScrollAnimation from '../ui/scroll/ScrollAnimation';
import ResponsiveVideo from '../ui/video/ResponsiveVideo';
import {useViewportSize, useVideoController} from '@/hooks';

export default function MainVideoSection() {
  const {isMobile} = useViewportSize();
  const {videoEnded, handleVideoEnd} = useVideoController();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ResponsiveVideo onVideoEnd={handleVideoEnd} isMobile={isMobile} />
      <AppearLogo show={videoEnded} />
      <SkipButton show={!videoEnded && !isMobile} onSkip={handleVideoEnd} />
      <ScrollAnimation show={videoEnded} />
    </div>
  );
}
