export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        hic: {
          blue: '#0ea5e9',
          cyan: '#22d3ee',
          ink: '#0b1119',
        },
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,.22), 0 0 80px rgba(14,165,233,.18)',
      },
    },
  },
  plugins: [],
}
