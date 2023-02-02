import { useState, useEffect } from 'react';

// Define general type for useWindowSize hook, which includes width and height
interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): ISize => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = (): void => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
