/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#030303',
          dark: '#0a0a0a',
          card: '#121212',
          orange: '#ff5500',
          yellow: '#ffaa00',
          red: '#c81e00',
          glow: '#ff3c00',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'neon-orange': '0 0 15px rgba(255, 85, 0, 0.5), 0 0 30px rgba(255, 85, 0, 0.2)',
        'neon-gold': '0 0 15px rgba(255, 170, 0, 0.5), 0 0 30px rgba(255, 170, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
