/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cerulean: {
          default: "#3187ff",
          50: "#eef7ff",
          100: "#d9ebff",
          200: "#bcddff",
          300: "#8dc9ff",
          400: "#58aaff",
          500: "#3187ff",
          600: "#1a67f6",
          700: "#124dd9",
          800: "#1642b7",
          900: "#183b90",
          950: "#142557",
        },
      },
    },
  },
  plugins: [],
};
