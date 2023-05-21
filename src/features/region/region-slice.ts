import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRegionState {
  showRegion: boolean;
  selected: string | null;
}
const initialState: IRegionState = {
  showRegion: false,
  selected: null,
};

const regionSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    setShowRegion: (state) => {
      state.showRegion = !state.showRegion;
    },
    setSelectedRegion: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setShowRegion, setSelectedRegion } = regionSlice.actions;

export default regionSlice.reducer;
