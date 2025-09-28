'use client';

import {useState, useEffect} from 'react';
import SkipButton from '../ui/SkipButton';
import AppearLogo from '../ui/AppearLogo';
import ScrollAnimation from '../ui/ScrollAniamtion';
import ResponsiveVideo from '../ui/ResponsiveVideo';

export default function MainVideoSection() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVideoEnded(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ResponsiveVideo onVideoEnd={handleVideoEnd} isMobile={isMobile} />
      <AppearLogo show={videoEnded} />
      <SkipButton
        show={!videoEnded && !isMobile}
        onSkip={() => setVideoEnded(true)}
      />
      <ScrollAnimation show={videoEnded} />
    </div>
  );
}
