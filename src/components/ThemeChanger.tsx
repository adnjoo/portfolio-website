'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  const toggleTheme = () => {
    if (theme === 'cupcake') {
      setTheme('dark');
    } else {
      setTheme('cupcake');
    }
  }

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  return (
    <button onClick={toggleTheme} className='p-2'>
        {theme === 'light' ? '🌞' : '🌚'}
    </button>
  );
};
