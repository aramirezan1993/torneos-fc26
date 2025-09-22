/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 Necesario para .tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
