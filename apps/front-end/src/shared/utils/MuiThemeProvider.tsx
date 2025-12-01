'use client';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { muiCreateTheme } from '@shared/utils/MuiTheme';
import React, { useMemo } from 'react';

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
