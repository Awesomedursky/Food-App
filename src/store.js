import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './features/theme/themeSlice';
import foodReducer from './features/food/foodSlice'

export const store = configureStore({
  reducer: {
    darkTheme: themeReducer,
    foods: foodReducer,
  },
});
