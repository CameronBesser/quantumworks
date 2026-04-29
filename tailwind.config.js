/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: "#0a0a1a", 100: "#111128", 200: "#1a1a3e", 300: "#242454" },
        accent: { blue: "#00d4ff", purple: "#8b5cf6", cyan: "#06b6d4", pink: "#ec4899" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
