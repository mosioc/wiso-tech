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
        'primary-purple': '#8B5CF6',
        'secondary-purple': '#7C3AED',

        'primary-green': '#10B981',
        'secondary-green': '#20C997',

        'primary-yello': '#F59E0B',
        'secondary-yello': '#FFA500',

        'primary-white': '#F7F8FC',
        'secondary-white': '#FFFFFF',
        'tertiary-white': '#E4E4E7',
        'quaternary-white': '#A0A1AC',

        'primary-blue': '#1B2A38',
        'secondary-blue': '#2C3E50',

        'primary-dark': '#131419',
        'secondary-dark': '#1C1D22',
        'tertiary-dark': '#1C1D22',
        'quaternary-dark': '#5A5B64',
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
