import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
    openDeletePopup: (state, action) => {
      console.log(action.payload)
      state.deletePopup = action.payload ?? true;
    },
    closedDeletePopup: (state, action) => {
      state.deletePopup = false;
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
