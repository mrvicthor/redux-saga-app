import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPaginationState {
  currentPage: number;
  countriesPerPage: number;
  totalPages: number;
  totalResults: number;
  indexOfFirstCountry: number | null;
  indexOfLastCountry: number | null;
}

const initialState: IPaginationState = {
  currentPage: 1,
  countriesPerPage: 12,
  totalPages: 0,
  totalResults: 0,
  indexOfFirstCountry: null,
  indexOfLastCountry: null,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload ?? 0;
    },
    setTotalPages: (state) => {
      state.totalPages = state.totalResults / state.countriesPerPage;
    },
    setIndexOfFirstCountry: (state) => {
      if (state.indexOfLastCountry) {
        state.indexOfFirstCountry =
          state.indexOfLastCountry - state.countriesPerPage;
      }
    },
    setIndexOfLastCountry: (state) => {
      state.indexOfLastCountry = state.currentPage * state.countriesPerPage;
    },
    setNextPage: (state) => {
      if (state.currentPage === state.totalPages) {
        state.currentPage = 1;
      }
      state.countriesPerPage = state.currentPage + 1;
    },
    setPreviousPage: (state) => {
      if (state.currentPage === 1) {
        state.currentPage = state.totalPages;
      }
      state.currentPage = state.currentPage - 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setTotalResults,
  setTotalPages,
  setNextPage,
  setPreviousPage,
  setIndexOfFirstCountry,
  setIndexOfLastCountry,
  setCurrentPage,
} = paginationSlice.actions;
export default paginationSlice.reducer;
