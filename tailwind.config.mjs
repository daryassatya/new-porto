/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A241E', // Warm Dark Espresso Earth
        secondary: '#FAF7F2', // Pure Soft Savana Cream
        accent: '#C48B4C', // Warm Savana Golden Sand
        savana: {
          cream: '#F4EFE6',
          light: '#FCFAF6',
          white: '#FFFFFF',
        },
        neutral: {
          50: '#FCFAF6',
          100: '#F5F0E6',
          200: '#E9DFCE',
          300: '#D9CCB4',
          400: '#B8A588',
          500: '#968366',
          600: '#73624A',
          700: '#544735',
          800: '#3B3124',
          900: '#261F17',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
