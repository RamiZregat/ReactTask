import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePagePath:
    window.location.pathname === "/" ? "/dashboard" : window.location.pathname,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setActivePagePath: (state, action) => {
      state.activePagePath = action.payload;
    },
  },
});

export const { setActivePagePath } = appSlice.actions;

export default appSlice.reducer;
