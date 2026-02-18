import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint = 800): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = (): void => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < breakpoint);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
};
