import React from "react";
import Layout from "../layout/layout";

import { Edit, Trash, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../store/features/popup/popupSlice";

const Employee = () => {
  const employee = useSelector((state) => state.employee.employees);
  return (
    <>
      <Layout>
        <div>
          <ul className="list bg-base-100 rounded-box shadow-md">
            {employee.map((details) => (
              <EmployeeCard key={details.id} details={details} />
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

const EmployeeCard = ({ details }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="list-row">
        <div>
          <img className="size-10 rounded-box" src={details.profilUrl} />
        </div>
        <div>
          <div> {details.name} </div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {details.email}
          </div>
        </div>
        <p className="list-col-wrap text-xs">{details.bio}</p>
        <button
          onClick={() => dispatch(openEmployeePopup())}
          className="btn btn-square btn-ghost">
          <Edit />
        </button>
        <button
          onClick={() => dispatch(openDeletePopup(details.id))}
          className="btn btn-square btn-ghost">
          <Trash />
        </button>
        <button className="btn btn-square btn-ghost">
          <Heart />
        </button>
      </li>
    </>
  );
};

export default Employee;
