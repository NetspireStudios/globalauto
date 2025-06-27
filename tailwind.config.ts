import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Light shade - for backgrounds and subtle elements
          50: '#eff2ff',
          100: '#e2e7ff',
          200: '#cbd4ff',
          300: '#a8b5ff',
          400: '#8590ff',
          // Medium shade - main brand color
          500: '#536DE2', // Main brand color
          600: '#4c63d1',
          // Dark shade - for text and emphasis
          700: '#3d4fb8',
          800: '#32408f',
          900: '#2b3572',
        },
        navy: {
          50: '#f0f1f3',
          100: '#dfe1e6',
          200: '#c4c8d1',
          300: '#9ea4b3',
          400: '#72798d',
          500: '#545b73',
          600: '#434960',
          700: '#373c50',
          800: '#313544',
          900: '#2c303c',
        },
        // Theme color variations - 3 different shades
        theme: {
          // Light theme shade
          light: {
            50: '#f0f4ff',
            100: '#e0e8ff',
            200: '#c7d4ff',
            300: '#9eb1ff',
            400: '#7289ff',
            500: '#536DE2',
            600: '#4c63d1',
            700: '#3d4fb8',
            800: '#32408f',
            900: '#2b3572',
          },
          // Medium theme shade
          medium: {
            50: '#edf2ff',
            100: '#dde6ff',
            200: '#c2d0ff',
            300: '#9caeff',
            400: '#7583ff',
            500: '#4c5ed9', // Slightly darker than primary
            600: '#4354c7',
            700: '#3a47b3',
            800: '#2f3c95',
            900: '#293477',
          },
          // Dark theme shade
          dark: {
            50: '#e8ecff',
            100: '#d4daff',
            200: '#adb8ff',
            300: '#8794ff',
            400: '#6370ff',
            500: '#3b4ec2', // Much darker than primary
            600: '#3544b0',
            700: '#2d3a9b',
            800: '#253081',
            900: '#1f2969',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e5e7eb'%3e%3cpath d='m0 .5h32m-32 32v-32m32 0v32'/%3e%3c/svg%3e')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config 