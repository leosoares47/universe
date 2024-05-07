/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/background.png')",
        universe: "url('/src/assets/background-2.png')",
        exploration: "url('/src/assets/background-3.png')",
      },
    },
  },
  plugins: [],
}
