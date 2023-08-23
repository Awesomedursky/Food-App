// import {
//   createSlice,
//   createAsyncThunk,
// } from '@reduxjs/toolkit';

// export const getFoods = createAsyncThunk('foods/getFoods', async () => {
//   const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`);
//   return response.json();
// });

// const initialState = {
//   loading: false,
//   error: null,
//   data: {},
// };

// const foodSlice = createSlice({
//   name: 'food',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getFoods.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getFoods.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getFoods.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default foodSlice.reducer;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `https://api.spoonacular.com/recipes`;

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRandom: builder.query({
      query: (count) => `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${count}`,
    }),
  }),
});

export const { useGetRandomQuery } = foodApi;
