import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
