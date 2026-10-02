/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0A1128',
          800: '#101F42',
          700: '#1A2C5B',
          600: '#253E7E',
        },
        cyber: {
          cyan: '#00F0FF',
          blue: '#0072FF',
          teal: '#00E5FF',
          emerald: '#00FF9D',
          amber: '#FFB800',
          rose: '#FF2E63',
          purple: '#9D4EDD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.3)',
        'glow-emerald': '0 0 15px rgba(0, 255, 157, 0.3)',
        'glow-amber': '0 0 15px rgba(255, 184, 0, 0.3)',
        'glow-rose': '0 0 15px rgba(255, 46, 99, 0.3)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.15) 0%, rgba(10, 17, 40, 0) 70%)',
      }
    },
  },
  plugins: [],
}
