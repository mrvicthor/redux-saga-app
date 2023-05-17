import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryResponse } from "../../model";

export interface ICountryState {
  apiResponse: ICountryResponse | null;
}

const initialState: ICountryState = {
  apiResponse: null,
} as ICountryState;

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryData: (state, action: PayloadAction<ICountryResponse>) => {
      state.apiResponse = action.payload;
    },
  },
});

export const { setCountryData } = countrySlice.actions;

export default countrySlice.reducer;
