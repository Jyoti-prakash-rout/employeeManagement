import React from "react";
import Layout from "../layout/layout";

import { Edit, Trash, Heart } from "lucide-react";

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
        <button className="btn btn-square btn-ghost">
          <Edit />
        </button>
        <button className="btn btn-square btn-ghost">
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
