import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const getFoods = createAsyncThunk(
  'foods/getFoods',
  async (api_key) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=1`
    );
    return response.json();
  }
);

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getFoods.fulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        getFoods.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default foodSlice.reducer;
