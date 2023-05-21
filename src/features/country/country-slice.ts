import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountryResponse } from "../../model";

export interface ICountryState {
  apiResponse: ICountryResponse | null;
  search: string | null;
}

const initialState: ICountryState = {
  apiResponse: null,
  search: null,
} as unknown as ICountryState;

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryData: (state, action: PayloadAction<ICountryResponse>) => {
      state.apiResponse = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCountryData, setSearch } = countrySlice.actions;

export default countrySlice.reducer;
