import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper'
import movieService from "../../services/Movie";

const initialState = {
  data:[],
  loading: false,
};

export const getMovie = createAsyncThunk(
  "GET_LIST_MOVIE",
  // async({page, keyword}) => {
    async(body) => {
      try {
      // const response = await movieService.getMovie({page, keyword});
      const response = await movieService.getMovie(body);
      return response.data;
    } catch (error) {
      return error;
    }
  });
  
export const getDetailMovie = createAsyncThunk(
  "GET_DETAIL_MOVIE",
  async(id) => {
    console.log("🚀 ~ file: index.tsx:24 ~ async ~ id", id)
    try {
      const response = await movieService.getDetailMovie(id);
      return response.data;
    } catch (error) {
      return error;
    }
  });
  
const movieSlice = createSlice({
  name: "Movie",
  initialState,
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getMovie.rejected]: (state, action) => {
      state.data = false;
      state.loading = true;
    },

    [getDetailMovie.pending]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
    [getDetailMovie.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getDetailMovie.rejected]: (state, action) => {
      state.data = false;
      state.loading = true;
    },
  },
});

const { reducer } = movieSlice;
export default reducer;
