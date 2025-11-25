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

        'primary-green': '#00E676',
        'secondary-green': '#2ECC71',
        'teritary-green': '#13ec80',

        'primary-yello': '#F59E0B',
        'secondary-yello': '#FFA500',

        'primary-white': '#F0F0F0',
        'secondary-white': '#FFFFFF',
        'tertiary-white': '#E4E4E7',
        'quaternary-white': '#A0A1AC',

        'primary-blue': '#1B2A38',
        'secondary-blue': '#2C3E50',

        'primary-dark': '#1E251E',
        'secondary-dark': '#2D322D',
        'tertiary-dark': '#1C1D22',

        'primary-gray': '#888888',
        'secondary-gray': '#5A5B64',
        'tertiary-gray': '#666666',
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
