import {useEffect, useState} from 'react';
import {useNetworkConnection} from '@/hooks';

export default function useNetworkOptimization(onVideoEnd: () => void) {
  const [shouldSkipVideo, setShouldSkipVideo] = useState(false);
  const networkInfo = useNetworkConnection();
  useEffect(() => {
    if (networkInfo.isSlowConnection || networkInfo.isDataSaving) {
      setShouldSkipVideo(true);
      onVideoEnd();
    }
  }, [networkInfo.isSlowConnection, networkInfo.isDataSaving, onVideoEnd]);
  return shouldSkipVideo;
}
