import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICountry } from "../../model";

export const countrySelector = createSelector(
  (state: RootState) => state.country.apiResponse,
  (countryData) => countryData
);

export const searchSelector = createSelector(
  (state: RootState) => state.country.search,
  (searchData) => searchData
);
export const totalCountriesSelector = createSelector(
  (state: RootState) =>
    (state.country.apiResponse as unknown as ICountry[]).length,
  (totalResults) => totalResults
);
