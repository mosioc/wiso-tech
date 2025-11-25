import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'background-color': '#102219',
        'secondary-background-color': '#141d1a',
        'input-color': '#27272a',
        'button-green-color': '#13ec80',
        'text-green-color': '#12c66d',
        'text-gray-color': '#85858c',
        'text-white-color': '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-lexend)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
    },
  },
} satisfies Config;

export default config;
