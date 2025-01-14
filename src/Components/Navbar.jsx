import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from 'sweetalert2'
const Navbar = () => {
  const { user ,logout} = useAuth();

    const handleLogOut = () =>{
        logout()
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Logged Out",
                showConfirmButton: false,
                timer: 1500
              });              
        })
    }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/apartments"}>Apartments</NavLink>
      </li>
    </>
  );
  const userLinks = (
    <>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="rounded-3xl m-1">
            <div className="h-12 w-12 border-2 border-accent rounded-full flex justify-center items-center">
              <img src={user.photoURL} className="w-12 rounded-full" alt="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-primary-light rounded-box z-[1] w-52 p-2 shadow"
          >
            <p className="text-xl text-center border-b-2 uppercase mb-2 font-bold">
              {user.displayName}
            </p>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to={"login"}
          className="btn text-lg font-bold bg-primary-light text-neutral-white border-accent hover:bg-accent hover:border-accent"
        >
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="w-full bg-primary text-neutral-white fixed top-0 z-10">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-y-1 menu-sm dropdown-content bg-primary-light rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-bold text-xl flex items-center justify-center">
            <img
              src="/logos.png"
              className="w-16 rounded-3xl mr-2"
              alt="logo"
            />
            <p className="uppercase text-2xl">Urban shelter</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">{userLinks}</div>
      </div>
    </div>
  );
};

export default Navbar;
