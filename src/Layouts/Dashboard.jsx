import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [role, setRole] = useState(null);


  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await axiosPublic.get(`/users/role/${user.email}`);
        setRole(res.data.role); 
      } catch (error) {
        console.error("Error fetching role:", error);
      }
    };
    if (user?.email) {
      fetchRole();
    }
  }, [user, axiosPublic]);

  return (
    <div className=" mx-auto flex">
      <div className="max-w-40 lg:w-64 min-h-screen bg-accent-orange">
        <ul className="menu gap-2 p-4">
          {role === "admin" && (
            <>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/manageMembers">Manage Members</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/makeAnnouncements">Make Announcements</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/agreementRequests">Agreement Requests</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/manageCoupons">Manage Coupons</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/overview">Overview</NavLink>
              </li>
            </>
          )}
          {role === "member" && (
            <>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/userProfile">My Profile</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/makePayment">Make Payment</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/announcements">Announcements</NavLink>
              </li>
            </>
          )}
          {role === "user" && (
            <>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/userProfile">My Profile</NavLink>
              </li>
              <li className="uppercase text-xs font-bold border rounded-lg text-white">
                <NavLink to="/dashboard/announcements">Announcements</NavLink>
              </li>
            </>
          )}
          <li></li>
          <li className="uppercase text-xs font-bold border rounded-lg text-white"><Link to={"/"}><FaHome></FaHome> Home</Link></li>
        </ul>
      </div>
      <div className="bg-neutral dark:bg-primary dark:text-white flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
