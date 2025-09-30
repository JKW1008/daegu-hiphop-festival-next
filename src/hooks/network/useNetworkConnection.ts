import {useEffect, useState} from 'react';

interface NavigatorConnection {
  effectiveType: 'slow-2g' | '2g' | '3g' | 'slow-4g' | '4g';
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NavigatorConnection;
}

export default function useNetworkConnection() {
  const [networkInfo, setNetworkInfo] = useState<{
    effectiveType?: 'slow-2g' | '2g' | '3g' | 'slow-4g' | '4g';
    saveData?: boolean;
    isSlowConnection: boolean;
    isDataSaving: boolean;
    connection?: NavigatorConnection;
  }>({
    effectiveType: undefined,
    saveData: undefined,
    isSlowConnection: false,
    isDataSaving: false,
    connection: undefined,
  });
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as NavigatorWithConnection).connection;
      const effectiveType = connection?.effectiveType;
      const saveData = connection?.saveData;
      const isSlowConnection =
        effectiveType === 'slow-2g' ||
        effectiveType === '2g' ||
        effectiveType === '3g' ||
        effectiveType === 'slow-4g';
      const isDataSaving = saveData === true;

      setNetworkInfo({
        effectiveType,
        saveData,
        isSlowConnection,
        isDataSaving,
        connection,
      });
    }
  }, []);
  return networkInfo;
}
