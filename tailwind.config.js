/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#f2e7d5',
          sand: '#d9cbb6',
          warm: '#f7efe2',
          brown: '#a37850'
        }
      }
    }
  },
  plugins: []
}
