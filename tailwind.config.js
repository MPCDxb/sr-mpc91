const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", ,
    "./pages/**/*.{jsx,js,ts,tsx}",
    "./components/**/*.{jsx,js,ts,tsx}",
    "./layouts/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "10%, 90% ": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        //shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        //shake: 'shake 0.82s ease-in-out 1s 2'
        shake: "shake  ease-in-out  0.5s ",
        spin: "spin 1s linear infinite "
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#108fd4',
        'secondary': '#004393',
        'danger': '#f6828c',
        'success': '#0dab76',
        'violet': {
          500: '#8b5cf6'
        }
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.flip-horizontal': {
          '--transform-scale-x': '-1',
        },
        '.flip-vertical': {
          '--transform-scale-y': '-1',
        },
      }
      addUtilities(newUtilities, variants('flip'))
    },
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
}