/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F7F7',
        'card': '#FFFFFF',
        'primary': '#0086c5',
        'text': '#222222',
        'text-secondary': '#666666',
      },
    },
  },
  plugins: [],
}
