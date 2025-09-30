import {useState} from 'react';

interface UseVideoLoadingProps {
  onVideoEnd: () => void;
}

export default function useVideoLoading({onVideoEnd}: UseVideoLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadStart = () => setIsLoading(true);
  const handleCanPlay = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    onVideoEnd();
  };
  return {isLoading, handleLoadStart, handleCanPlay, handleError};
}
