import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeePopup: false,
  deletePopup: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.employeePopup = action.payload ?? true;
    },
    closedEmployeePopup: (state, action) => {
      state.employeePopup = false;
    },
  },
});

export const { openEmployeePopup, closedEmployeePopup } = popupSlice.actions;
export default popupSlice.reducer;
