import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Employee from "./components/Employee";
import EmployeePopup from "./components/EmployeePopup";
import DeletePopup from "./components/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/features/employee/employeeThunk";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <EmployeePopup />
        <DeletePopup />
        <Navbar />
        <div className="flex-1 py-10">
          <Employee />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
