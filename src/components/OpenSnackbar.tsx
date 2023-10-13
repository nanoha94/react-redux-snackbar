import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarType } from '../types/Snackbar';

interface Props {
  open: boolean;
  alertType: SnackbarType;
  message?: string;
}

const OpenSnackbar: React.FC<Props> = ({ open, alertType, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      key={alertType}
    >
      <Alert severity={alertType}>{message ?? (open ? alertType : '')}</Alert>
    </Snackbar>
  );
};

export default OpenSnackbar;
