import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICreateFilmRequest } from "./api/types";

interface MainState {
  alt: string;
  totalMovies: number;
  watchedMovies: number;
  averageRating: number;
}

const initialState: MainState = {
  alt: "изображение логотипа в виде киноленты",
  totalMovies: ICreateFilmRequest,
  watchedMovies: 0,
  averageRating: 0,
};


export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTotalMovies,
  },
});