import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const apiSelector = createSelector(
  (state: RootState) => state,
  (state) => {
    return {
      status: state.api.apiStatus ?? null,
    };
  }
);

export default apiSelector;
