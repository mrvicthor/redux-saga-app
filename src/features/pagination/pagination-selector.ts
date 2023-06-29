import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const paginationSelector = createSelector(
  (state: RootState) => state.pagination,
  (pagination) => pagination
);
export const totalResultsSelector = createSelector(
  (state: RootState) => state.pagination.totalPages,
  (totalResults) => totalResults
);
export const totalPagesSelector = createSelector(
  (state: RootState) => state.pagination.totalPages,
  (totalPages) => totalPages
);
export const currentPageSelector = createSelector(
  (state: RootState) => state.pagination.currentPage,
  (currentPage) => currentPage
);
