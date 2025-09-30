import {useState} from 'react';

export default function useVideoController() {
  const [videoEnded, setVideoEnded] = useState(false);
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };
  return {videoEnded, handleVideoEnd};
}
