import { createSlice } from '@reduxjs/toolkit';

const themeFromLocalStorage =
  !!localStorage.getItem('food-theme');

const initialState = themeFromLocalStorage;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme (state) {
      if (state) {
        localStorage.removeItem('food-theme');
      } else {
        localStorage.setItem('food-theme', '_');
      }
      return (state = !state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
