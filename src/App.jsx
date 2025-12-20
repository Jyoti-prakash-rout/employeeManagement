import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex-1"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
