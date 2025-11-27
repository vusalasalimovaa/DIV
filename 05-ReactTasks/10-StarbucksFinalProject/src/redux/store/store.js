import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../slice/menuSlice.js';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
})