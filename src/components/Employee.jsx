import React from "react";
import Layout from "../layout/layout";

import { Edit, Trash, Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../store/features/popup/popupSlice";

const Employee = () => {
  return (
    <>
      <Layout>
        <div>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </ul>
        </div>
      </Layout>
    </>
  );
};

const EmployeeCard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
          />
        </div>
        <div>
          <div>Sabrino Gardener</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            Cappuccino
          </div>
        </div>
        <p className="list-col-wrap text-xs">
          "Cappuccino" quickly gained attention for its smooth melody and
          relatable themes. The song’s success propelled Sabrino into the
          spotlight, solidifying their status as a rising star.
        </p>
        <button
          onClick={() => dispatch(openEmployeePopup())}
          className="btn btn-square btn-ghost">
          <Edit />
        </button>
        <button
          onClick={() => dispatch(openDeletePopup())}
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
