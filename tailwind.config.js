/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        foreground: '#111827',
        primary: {
          DEFAULT: '#c45c3e',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#7f1d1d'
        },
        muted: {
          foreground: '#6b7280'
        },
        secondary: '#ebe3d6',
        card: {
          DEFAULT: '#d9cbb6',
          foreground: '#111827'
        },
        brand: {
          cream: '#f2e7d5',
          sand: '#d9cbb6',
          warm: '#f7efe2',
          brown: '#a37850',
          terracotta: '#c45c3e'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
