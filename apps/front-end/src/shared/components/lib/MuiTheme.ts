import { createTheme, type Theme } from '@mui/material/styles';

export const muiCreateTheme = (): Theme => {
  return createTheme({
    typography: {
      fontFamily: 'var(--font-lexend), sans-serif',
    },
    palette: {
      primary: {
        light: '#13ec80', // pink-2
        main: '#20C997', // pink-1
        dark: '#13ec80', // pink-3
      },
      background: {
        default: '#131419', // black-1
        paper: '#1C1D22', // pink-3
      },
      text: {
        primary: '#F7F8FC', // white-1
        secondary: '#FFFFFF', // white-2
      },
    },
  });
};
