/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 8px 22px rgba(79,70,229,0.30)" },
          "50%":      { boxShadow: "0 12px 34px rgba(79,70,229,0.55)" },
        },
        "glow-strong": {
          "0%, 100%": { boxShadow: "0 10px 28px rgba(79,70,229,0.40)" },
          "50%":      { boxShadow: "0 18px 42px rgba(79,70,229,0.75)" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        "glow-strong": "glow-strong 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
