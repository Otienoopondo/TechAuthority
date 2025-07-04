'use client';
import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 z-50 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 rounded"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      {children}
    </>
  );
}
