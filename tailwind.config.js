/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111f",
        serum: "#f8fbff",
        bloom: "#ff009c",
        pulse: "#11d9ff",
        mint: "#20e3b2",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 24px 70px rgba(17, 217, 255, 0.22)",
        bloom: "0 24px 70px rgba(255, 0, 156, 0.22)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(17,217,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,156,.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
