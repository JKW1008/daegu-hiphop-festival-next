import {useEffect, useState} from 'react';

export default function useViewportSize() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setVideoEnded(mobile);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
  return {videoEnded, isMobile, handleVideoEnd};
}
