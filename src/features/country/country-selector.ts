import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const countrySelector = createSelector(
  (state: RootState) => state.country.apiResponse,
  (countryData) => countryData
);
