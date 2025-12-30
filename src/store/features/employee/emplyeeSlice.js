import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, postEmployees } from "./employeeThunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get employee
    builder.addCase(getEmployees.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Post employee
    builder.addCase(postEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postEmployees.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
