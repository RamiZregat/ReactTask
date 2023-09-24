import { createSlice } from "@reduxjs/toolkit";
import { mockTableData } from "../../../components/pages/Projects/Table/mockTableData";

const initialState = {
  projects: mockTableData,
};

export const projectsSlice = createSlice({
  name: "projectsReducer",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project, index) => !action.payload.includes(index),
      );
    },
  },
});

export const { addProject, deleteProject } = projectsSlice.actions;

export default projectsSlice.reducer;
