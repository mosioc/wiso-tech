'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React, { useMemo } from 'react';

import { muiCreateTheme } from './MuiTheme';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMemo(() => muiCreateTheme(), []);

  return (
    <div suppressHydrationWarning>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </div>
  );
};

export default MuiThemeProvider;
