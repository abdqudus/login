/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { manrope: ["Manrope", "sans-serif"] },
      flexBasis: { "1/3": "calc(33-3% - 8px)" },
      width: { "1/3": "calc(33-3% - 8px)" },
      gridTemplateColumns: { "1/4": "1fr 4fr" },
    },
  },
  plugins: [],
};
