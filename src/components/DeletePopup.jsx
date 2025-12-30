import React from "react";

import { closedDeletePopup } from "../store/features/popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployees } from "../store/features/employee/employeeThunk";

const DeletePopup = () => {
  const dispatch = useDispatch();
  const { deletePopup, selectedEmployeeId } = useSelector(
    (state) => state.popup
  );

  const handleDelete = async () => {
    await dispatch(deleteEmployees(selectedEmployeeId));
    dispatch(closedDeletePopup());
  };

  if (!deletePopup) return null;
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80"
      onClick={() => dispatch(closedDeletePopup())}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="card bg-base-200 text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Delete</h2>
          <p>Are you sure you want to delete this?</p>
          <div className="card-actions justify-end">
            <button onClick={handleDelete} className="btn btn-error">
              Yes
            </button>
            <button
              onClick={() => dispatch(closedDeletePopup())}
              className="btn btn-primary">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
