import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TAPIStatus = "fetching" | "posting" | "success" | "error";

export interface ApiState {
  apiStatus: TAPIStatus | null;
  apiMeta: Record<string, string> | object | null;
}

const initialState = {
  apiStatus: null,
} as unknown as ApiState;

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetching: (state: ApiState) => {
      state.apiStatus = "fetching";
    },
    posting: (state: ApiState) => {
      state.apiStatus = "posting";
    },
    success: (state: ApiState) => {
      state.apiStatus = "success";
    },
    error: (state: ApiState, action: PayloadAction<object>) => {
      state.apiStatus = "error";
      state.apiMeta = action.payload;
    },
  },
});

export const { fetching, posting, success, error } = apiSlice.actions;
export default apiSlice.reducer;
