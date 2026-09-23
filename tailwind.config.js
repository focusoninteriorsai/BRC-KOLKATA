/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090f',
          900: '#0b0f18',
          850: '#10151f',
          800: '#161c28',
          700: '#1e2636',
        },
        gold: {
          50: '#fbf6e6',
          100: '#f3e6c1',
          200: '#e8d08a',
          300: '#ddb85a',
          400: '#d4a84a',
          500: '#c9a227',
          600: '#a6851c',
          700: '#7d6416',
        },
        cream: {
          50: '#f7f3ea',
          100: '#ebe4d4',
          200: '#d8cfb8',
        },
      },
      fontFamily: {
        display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        glass: '0 8px 40px rgba(0,0,0,0.35)',
        lift: '0 18px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,162,39,0.18)',
        gold: '0 0 40px rgba(201,162,39,0.18)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #c9a227, transparent)',
      },
      animation: {
        'ken-burns': 'ken 22s ease-in-out infinite alternate',
        float: 'float 8s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3.2s ease-in-out infinite',
        'scroll-hint': 'scrollHint 1.8s ease-in-out infinite',
      },
      keyframes: {
        ken: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.85 },
        },
        scrollHint: {
          '0%': { transform: 'translateY(0)', opacity: 0.2 },
          '50%': { transform: 'translateY(10px)', opacity: 1 },
          '100%': { transform: 'translateY(18px)', opacity: 0.15 },
        },
      },
    },
  },
  plugins: [],
}
