import React from "react";
import Title from "../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import {
  FaBed,
  FaBuilding,
  FaHome,
  FaPercentage,
  FaRegSmile,
  FaUsers,
} from "react-icons/fa";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard/stats");
      return res.data;
    },
  });
  return (
    <div>
      <Title heading={"admin profile"}></Title>
      <div className="">
        <div className="">
          <div className="card my-10 card-side flex-col sm:flex-row bg-base-100 shadow-xl">
            <figure className="sm:w-2/5">
              <img
                src={user.photoURL}
                alt="Movie"
                className="sm:h-60 w-full object-cover p-4 sm:p-0 rounded-full sm:rounded-none"
              />
            </figure>
            <div className="card-body w-3/5">
              <h2 className="card-title">{user.displayName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="stat border-8 rounded-lg bg-neutral border-neutral-white hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
              <div className="">
                <div className=" text-accent">Total Rooms</div>
                <div className="text-4xl font-extrabold text-accent-orange">
                  {stats?.totalRooms}
                </div>
              </div>
              <div className="text-6xl text-accent">
                <FaBed />
              </div>
            </div>
            <div className="stat border-8 rounded-lg bg-neutral border-neutral-white hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
              <div className="">
                <div className=" text-accent">Available Room</div>
                <div className="text-4xl font-extrabold text-accent-orange">
                  {stats?.availablePercentage}%
                </div>
              </div>
              <div className="text-6xl text-accent">
                <FaRegSmile />
              </div>
            </div>
            <div className="stat border-8 rounded-lg bg-neutral border-neutral-white hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
              <div className="">
                <div className=" text-accent">Booked Rooms</div>
                <div className="text-4xl font-extrabold text-accent-orange">
                  {stats?.bookedPercentage}%
                </div>
              </div>
              <div className="text-6xl text-accent">
                <FaPercentage />
              </div>
            </div>
            <div className="stat border-8 rounded-lg bg-neutral border-neutral-white hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
              <div className="">
                <div className=" text-accent">Total Members</div>
                <div className="text-4xl font-extrabold text-accent-orange">
                  {stats?.totalMembers}
                </div>
              </div>
              <div className="text-6xl text-accent">
                <FaBuilding />
              </div>
            </div>
            <div className="stat border-8 rounded-lg bg-neutral border-neutral-white hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
              <div className="">
                <div className=" text-accent">Total Users</div>
                <div className="text-4xl font-extrabold text-accent-orange">
                  {stats?.totalUsers}
                </div>
              </div>
              <div className="text-6xl text-accent">
                <FaUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminProfile;
