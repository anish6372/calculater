import { configureStore } from '@reduxjs/toolkit';
import loanReducer from '../features/loan/loanSlice';

export const store = configureStore({
  reducer: {
    loan: loanReducer,
  },
});

export default store;