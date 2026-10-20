/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: ['btn-primary', 'btn-cream', 'btn-ghost', 'btn-ghost-dark'],
  theme: {
    extend: {
      colors: {
        nova: { DEFAULT: '#123498', 600: '#1B42B8', 700: '#0A1F66', 900: '#061340' },
        cream: { DEFAULT: '#FEFAEF', 200: '#F4EEDB' },
        ink: { DEFAULT: '#0B1A4D', soft: '#3D4A78' },
        sky: { nova: '#8FA7F2' },
        mist: '#C5D2FA'
      },
      fontFamily: {
        display: ['Unbounded', 'Arial Black', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      maxWidth: { wrap: '1240px' },
      borderRadius: { '4xl': '2rem' },
      transitionTimingFunction: { out: 'cubic-bezier(.16,1,.3,1)', io: 'cubic-bezier(.76,0,.24,1)' }
    }
  },
  plugins: []
};
