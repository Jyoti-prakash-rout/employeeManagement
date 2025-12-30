import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeePopup: false,
  deletePopup: false,
  selectedEmployeeId: null,
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
    openDeletePopup: (state, action) => {
      state.deletePopup = true;
      state.selectedEmployeeId = action.payload;
    },
    closedDeletePopup: (state, action) => {
      state.deletePopup = false;
      state.selectedEmployeeId = null;
    },
  },
});

export const {
  openEmployeePopup,
  closedEmployeePopup,
  openDeletePopup,
  closedDeletePopup,
} = popupSlice.actions;
export default popupSlice.reducer;
