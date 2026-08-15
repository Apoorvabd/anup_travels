/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F2",
        cream: "#F3EDE1",
        charcoal: "#1C1A17",
        earth: "#6B5B4C",
        saffron: "#B9793E",
        gold: "#A8874F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "var(--font-devanagari-serif)", "serif"],
        sans: ["var(--font-sans)", "var(--font-devanagari)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "sans-serif"],
        "devanagari-serif": ["var(--font-devanagari-serif)", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
