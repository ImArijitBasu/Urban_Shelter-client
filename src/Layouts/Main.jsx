import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  const location = useLocation();
  const noHeadFoot =
    location.pathname.includes("login") || location.pathname.includes("signup");
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="flex flex-col">
      {!noHeadFoot && (
        <div className=" mb-20">
          <Navbar></Navbar>
        </div>
      )}
      <div className="flex-1 min-h-[900px] bg-neutral dark:bg-primary transition-colors duration-500 ease-in-out">
        <Outlet></Outlet>
      </div>
      {!noHeadFoot && (
        <div className="">
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
