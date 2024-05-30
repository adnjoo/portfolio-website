'use client';

import { useState, useEffect } from 'react';

const useScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollTopMax = scrollHeight - clientHeight;
      const scrolled = (scrollTop / scrollTopMax) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPercentage;
};

const ScrollIndicator = () => {
  const scrollPercentage = useScrollIndicator();

  return (
    <div className='fixed left-0 top-0 z-50 h-[2.5px] w-full bg-transparent'>
      <div
        className='h-full w-0 bg-sky-600'
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
