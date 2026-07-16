import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  totalMovies: null;
  watchedMovies: null;
  averageRating: null;
}

const initialState: MainState = {
  totalMovies: null,
  watchedMovies: null,
  averageRating: null,
};


export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTotalMovies: (state, action: PayloadAction<number>) => {
      state.totalMovies = action.payload;
    },
    setWatchedMovies: (state, action: PayloadAction<number>) => {
      state.watchedMovies = action.payload;
    },
    setAverageRating: (state, action: PayloadAction<number>) => {
      state.averageRating = action.payload;
    },
  },
});

export const { setTotalMovies, setWatchedMovies, setAverageRating } = headerSlice.actions

export default headerSlice.reducer