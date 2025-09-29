import {useEffect, useState} from 'react';

interface NavigatorConnection {
  effectiveType: 'slow-2g' | '2g' | '3g' | 'slow-4g' | '4g';
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NavigatorConnection;
}

export default function useNetworkOptimization(onVideoEnd: () => void) {
  const [shouldSkipVideo, setShouldSkipVideo] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as NavigatorWithConnection).connection;
      console.log(connection);
      const effectiveType = connection?.effectiveType;
      const saveData = connection?.saveData;

      const isSlowConnection =
        effectiveType === 'slow-2g' ||
        effectiveType === '2g' ||
        effectiveType === '3g' ||
        effectiveType === 'slow-4g';

      const isDataSaving = saveData === true;
      if (isSlowConnection || isDataSaving) {
        setShouldSkipVideo(true);
        onVideoEnd();
      }
    }
  }, [onVideoEnd]);
  return shouldSkipVideo;
}
