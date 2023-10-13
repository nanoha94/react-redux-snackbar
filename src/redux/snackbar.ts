import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { SnackbarType } from '../types/Snackbar';

type SnackbarStateType = {
  isOpen: boolean;
  alertType: SnackbarType;
  message?: string;
};

const initialState: SnackbarStateType = {
  isOpen: false,
  alertType: 'success',
};

export const openSnackbar = (alertType: SnackbarType, message: string) => {
  return (dispatch: Dispatch) => {
    dispatch(snackbarSlice.actions.open({ alertType, message }));
    setTimeout(() => {
      dispatch(snackbarSlice.actions.close());
    }, 2000);
  };
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    open(
      state,
      action: PayloadAction<{ alertType: SnackbarType; message?: string }>,
    ) {
      state.isOpen = true;
      state.alertType = action.payload.alertType;
      state.message = action.payload.message;
    },
    close(state) {
      state.isOpen = false;
      state.message = undefined;
    },
  },
});

export default snackbarSlice.reducer;
