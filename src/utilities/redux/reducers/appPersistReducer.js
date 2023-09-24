import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false,
};

export const appPersistSlice = createSlice({
  name: "appPersistReducer",
  initialState,
  reducers: {
    openCollapse: (state) => {
      state.collapsed = false;
    },
    closeCollapse: (state) => {
      state.collapsed = true;
    },
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { openCollapse, closeCollapse, toggleCollapse } =
  appPersistSlice.actions;

export default appPersistSlice.reducer;
