import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './snackbar';

export const store = configureStore({
  reducer: { snackbar: snackbarReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export const snackbarData = (state: RootState) => state.snackbar;
