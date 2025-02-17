import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
    const location = useLocation()
    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('signup') ;
  return (
    <div className="flex flex-col">
        {
            !noHeadFoot &&    <div className=" mb-20">
            <Navbar></Navbar>
          </div>
        }
      <div className="flex-1 min-h-[900px] bg-neutral dark:bg-primary transition-colors duration-500 ease-in-out">
        <Outlet></Outlet>
      </div>
      {
        !noHeadFoot && <div className="">
        <Footer></Footer>
      </div>
      }
    </div>
  );
};

export default Main;
