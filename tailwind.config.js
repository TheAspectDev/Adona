/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
      screens: {
        'md': { 'max': '650px' },
        'csize': { 'max': '850px' },
        'czsize': { 'max': '400px' },
        'bsize': { 'max': '1470px' },
        'bzsize': { 'max': '1750px' },
        'smd': { 'min': '500px' },
        'nav-1': { 'max': '450px' },
        'nav-2': { 'max': '400px' },
        'nav-3': { 'max': '350px' },
        'nav-4': { 'max': '300px' },

      },
    colors: {
      'background': {
        dark: '#1F2229',
        DEFAULT: '#1F2229',
        light: '#ffffff',
      },
      'primary': '#ef4444',
      'white': "#fff",
      'gray': "#c9c9c9",
      'black': '#000',
    }
  },
  plugins: [],
}
