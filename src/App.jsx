import { useEffect, useMemo, useState } from 'react';
import './index.css';

import Hero from './components/Hero.jsx';
import WhyChooseUs from './components/WhyChooseUS.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Testimonials from './components/Testimonial.jsx';
import ContactFooter from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useMemo(
    () => () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
      setTheme(stored);
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initial = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initial);
    setTheme(initial);
  }, []);


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      {/* Theme toggle (top-right) */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
        className="fixed right-4 top-4 z-[9999] rounded-full border border-theme bg-[var(--surface)]/80 px-4 py-2 text-sm font-semibold backdrop-blur shadow-sm hover:bg-[var(--surface)] transition"
      >
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>

      <Hero />
      <WhyChooseUs />
      <About />
      <Journey />
      <Testimonials />
      <ContactFooter />
    </>
  );
}

export default App;

