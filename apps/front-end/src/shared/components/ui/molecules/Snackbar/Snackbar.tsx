import { Snackbar as MuiSnackbar, Alert } from '@mui/material';
import React from 'react';

interface SnackbarProps {
  open: boolean;
  time?: number;
  message: string;
  severity: 'success' | 'error';
  handleCloseSnackbar: () => void;
}

const Snackbar = ({
  open,
  time = 4000,
  message,
  severity,
  handleCloseSnackbar,
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={time} // Closes automatically after 4 seconds
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Position of the toast
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={severity} // 'success' or 'error' dynamically
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
