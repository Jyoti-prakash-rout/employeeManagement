import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./features/employee/emplyeeSlice";
import popupSlice from "./features/popup/popupSlice";

export const store = configureStore({
  reducer: {
    popup: popupSlice,
    employee: employeeSlice,
  },
});
