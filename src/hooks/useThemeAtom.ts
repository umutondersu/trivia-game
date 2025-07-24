import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { themeAtom } from '../lib/atoms/App';
import type { theme } from '../lib/definitions';

export default function useThemeAtom(): [theme, () => void] {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (localStorage.getItem('THEME')) {
      return;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
}
