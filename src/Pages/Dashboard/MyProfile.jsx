import React from "react";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { format } from "date-fns";
import LazyImage from "../../Components/LazyImage";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: agreement = {} } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreement/${user.email}`);
      return res.data;
    },
  });

  const isChecked = agreement.status === "checked";

  return (
    <div>
      <Title heading={"My profile"}></Title>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/30 py-5 rounded-lg">
        <div className="my-3">
          <p className="capitalize text-accent bg-neutral p-2 rounded-t-lg mb-1">
            <span className="font-bold capitalize text-primary ">name:</span> {user.displayName}
          </p>
          <p className="text-accent bg-neutral p-2 rounded-b-lg border-b-accent border-b-2">
            <span className="font-bold capitalize text-primary ">Email:</span> {user.email}
          </p>
        </div>
        <div>
          <LazyImage
            src={user.photoURL}
            className={`w-40 rounded-xl object-cover border-4 ${isChecked ? "border-success" : "border-warning"}`}
            alt="Profile"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/50 p-5 rounded-3xl">
        <div className="w-full h-full bg-neutral rounded-lg p-2">
          {isChecked ? (
            <div className="bg-neutral-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Floor No:</span> {agreement.floorNo || "N/A"}
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Block No:</span> {agreement.blockName || "N/A"}
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Apartment No:</span> {agreement.apartmentNo || "N/A"}
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Rent:</span> {agreement.rent || "N/A"}
              </p>
              <p className="text-sm text-accent-orange border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Agreement Accept Date:</span> {agreement.acceptDate ? format(new Date(agreement.acceptDate), "dd MMM yyyy, HH:mm:ss a") : "N/A"}
              </p>
            </div>
          ) : (
            <div className="bg-neutral-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Floor No:</span> N/A
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Block No:</span> N/A
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Apartment No:</span> N/A
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Rent:</span> N/A
              </p>
              <p className="text-sm text-primary  border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Agreement Accept Date:</span> N/A
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
