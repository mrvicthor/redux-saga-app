import { createSlice } from "@reduxjs/toolkit";

export interface IThemeState {
  dark: boolean;
}
const initialState: IThemeState = {
  dark: false,
};
const themeSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
