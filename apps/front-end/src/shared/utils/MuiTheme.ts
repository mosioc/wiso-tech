import { createTheme, type Theme } from '@mui/material/styles';

export const muiCreateTheme = (): Theme => {
  return createTheme({
    typography: {
      fontFamily: 'var(--font-lexend), sans-serif',
    },
    palette: {
      primary: {
        light: '#13ec80', // pink-2
        main: '#12c66d', // pink-1
        dark: 'rgba(12, 170, 91, 1)',
      },
      background: {
        default: '#141d1a', // black-1
        paper: '#1C1D22', // pink-3
      },
      text: {
        primary: '#F7F8FC', // white-1
        secondary: '#85858c', // white-2
      },
    },
  });
};
