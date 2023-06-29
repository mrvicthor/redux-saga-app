import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPaginationState {
  currentPage: number;
  countriesPerPage: number;
  totalCountries: number;
  totalPages: number;
}

const initialState: IPaginationState = {
  currentPage: 1,
  countriesPerPage: 12,
  totalCountries: 0,
  totalPages: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalCountries = action.payload ?? 0;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state) => {
      state.totalPages = Math.floor(
        state.totalCountries / state.countriesPerPage
      );
    },
  },
});

export const { setCurrentPage, setTotalResults, setTotalPages } =
  paginationSlice.actions;
export default paginationSlice.reducer;
