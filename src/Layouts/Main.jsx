import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="flex-1 min-h-[900px] mt-20 bg-neutral">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
