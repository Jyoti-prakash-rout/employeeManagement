import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closedEmployeePopup } from "../store/features/popup/popupSlice";
import { postEmployees } from "../store/features/employee/employeeThunk";

const EmployeePopup = () => {
  const popup = useSelector((state) => state.popup.employeePopup);

  const dispatch = useDispatch();

  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highLight: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await dispatch(postEmployees(formDetails));
    dispatch(closedEmployeePopup());
  };

  if (!popup) return null;
  return (
    <div
      onClick={() => dispatch(closedEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80">
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile URL</label>
        <input
          type="text"
          name="profileUrl"
          value={formDetails.profileUrl}
          onChange={handleInputChange}
          className="input"
          placeholder="Profile URL"
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formDetails.name}
          onChange={handleInputChange}
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formDetails.email}
          onChange={handleInputChange}
          className="input"
          placeholder="Email"
        />

        <label className="label">Bio</label>
        <textarea
          name="bio"
          value={formDetails.bio}
          onChange={handleInputChange}
          className="textarea"
          placeholder="Bio"></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Add
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
