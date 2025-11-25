'use client';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React, { useMemo } from 'react';

import { muiCreateTheme } from './MuiTheme';

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMemo(() => muiCreateTheme(), []);

  return (
    <div suppressHydrationWarning>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </div>
  );
};

export default MuiThemeProvider;
