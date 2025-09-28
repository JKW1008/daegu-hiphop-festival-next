'use client';

import {useState, useEffect} from 'react';
import SkipButton from '../ui/SkipButton';
import AppearLogo from '../ui/AppearLogo';
import ScrollAnimation from '../ui/ScrollAniamtion';

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
      {!isMobile && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/header_background_video.webm" type="video/webm" />
        </video>
      )}
      <AppearLogo show={videoEnded} />
      <SkipButton
        show={!videoEnded && !isMobile}
        onSkip={() => setVideoEnded(true)}
      />
      <ScrollAnimation show={videoEnded} />
    </div>
  );
}
