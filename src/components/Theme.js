import { useEffect, useMemo, useState } from 'react';

const THEME_KEY = 'theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // also set Tailwind-compatible dark class (we will use dark: classes)
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = useMemo(
    () => () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  return { theme, toggleTheme };
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="fixed right-4 top-4 z-[9999] rounded-full border border-theme bg-[var(--surface)]/80 px-4 py-2 text-sm font-semibold backdrop-blur shadow-sm hover:bg-[var(--surface)] transition"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}


