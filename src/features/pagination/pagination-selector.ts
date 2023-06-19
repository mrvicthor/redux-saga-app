import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const paginationSelector = createSelector(
  (state: RootState) => state.pagination,
  (pagination) => pagination
);

export const firstIndexSelector = createSelector(
  (state: RootState) => state.pagination.indexOfFirstCountry,
  (firstIndex) => firstIndex
);

export const lastIndexSelector = createSelector(
  (state: RootState) => state.pagination.indexOfLastCountry,
  (lastIndex) => lastIndex
);

export const totalPagesSelector = createSelector(
  (state: RootState) => state.pagination.totalPages,
  (totalPages) => totalPages
);

export const totalResultsSelector = createSelector(
  (state: RootState) => state.pagination.totalResults,
  (totalResults) => totalResults
);
