import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const themeSelector = createSelector(
  (state: RootState) => state.theme.dark,
  (themeData) => themeData
);
