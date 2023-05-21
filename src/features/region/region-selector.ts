import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const showRegionSelector = createSelector(
  (state: RootState) => state.region.showRegion,
  (showRegionData) => showRegionData
);

export const regionSelector = createSelector(
  (state: RootState) => state.region.selected,
  (selectedRegion) => selectedRegion
);
