import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

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
    <div className="max-w-screen-xl mx-auto flex">
      <div className="max-w-40 lg:w-64 min-h-screen bg-accent-orange">
        <ul className="menu gap-2 p-4">
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMembers">Manage Members</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAnnouncements">Make Announcements</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/agreementRequests">Agreement Requests</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageCoupons">Manage Coupons</NavLink>
              </li>
            </>
          )}
          {role === "member" && (
            <>
              <li>
                <NavLink to="/dashboard/memberProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makePayment">Make Payment</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">Announcements</NavLink>
              </li>
            </>
          )}
          {role === "user" && (
            <>
              <li>
                <NavLink to="/dashboard/userProfile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements">Announcements</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="bg-neutral flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
