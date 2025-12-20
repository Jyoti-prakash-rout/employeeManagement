import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Employee from "./components/Employee";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
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
