import { useState, useEffect } from 'react';

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');

  useEffect(() => {
    const checkDeviceType = () => {
      if (window.innerWidth < 768) {
        setDeviceType('mobile');
      } else if (window.innerWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return deviceType;
}