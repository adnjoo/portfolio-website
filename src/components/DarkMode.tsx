'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem('theme');
    if (!checkLocalStorage) {
      const checkDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(checkDarkTheme ? 'dark' : 'light');
    }
  }, []);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'light' ? (
        <button
          className='hover:animate-pulse'
          onClick={() => setTheme('dark')}
        >
          🌚
        </button>
      ) : (
        <button
          className='hover:animate-pulse'
          onClick={() => setTheme('light')}
        >
          🌝
        </button>
      )}
    </>
  );
};
