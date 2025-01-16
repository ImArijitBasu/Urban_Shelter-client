import React from "react";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { format } from "date-fns";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: agreement = [] } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreement/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <Title heading={"My profile"}></Title>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/30 py-5 rounded-lg">
        <div className="my-3">
          <p className="capitalize text-accent bg-neutral p-2 rounded-t-lg mb-1">
            <span className="font-bold capitalize text-primary">name:</span>{" "}
            {user.displayName}
          </p>
          <p className=" text-accent bg-neutral p-2 rounded-b-lg border-b-accent border-b-2">
            <span className="font-bold capitalize text-primary">Email:</span>{" "}
            {user.email}
          </p>
        </div>
        <div className="">
          <img
            src={user.photoURL}
            className={`w-40 rounded-xl object-cover border-4 ${agreement[0]?.status === "checked"? "border-success" : "border-warning"}`}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/50 p-5 rounded-3xl">
        <div className="w-full h-full bg-neutral rounded-lg p-2">
          {agreement.length > 0 ? (
            agreement.map((room, index) => (
              <div
                key={index}
                className="bg-neutral-white p-4 rounded-lg shadow-md mb-4"
              >
                <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                  <span className="text-primary font-bold">Floor No:</span>{" "}
                  {room.floorNo || "N/A"}
                </p>
                <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                  <span className="text-primary font-bold">Block No:</span>{" "}
                  {room.blockName || "N/A"}
                </p>
                <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                  <span className="text-primary font-bold">Apartment No:</span>{" "}
                  {room.apartmentNo || "N/A"}
                </p>
                <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                  <span className="text-primary font-bold">Rent:</span>{" "}
                  {room.rent || "N/A"}
                </p>
                <p className="text-sm text-accent-orange border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                  <span className="text-primary font-bold">
                    Agreement Accept Date:
                  </span>{" "}
                  {room.acceptDate
                    ? format(
                        new Date(room.acceptDate),
                        "dd MMM yyyy, HH:mm:ss a"
                      )
                    : "N/A"}
                </p>
              </div>
            ))
          ) : (
            <div className="bg-neutral-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Floor No:</span> N/A
              </p>
              <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Block No:</span> N/A
              </p>
              <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Apartment No:</span>{" "}
                N/A
              </p>
              <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">Rent:</span> N/A
              </p>
              <p className="text-sm text-primary-light border-2 py-3 px-2 border-l-accent border-r-accent-orange font-semibold">
                <span className="text-primary font-bold">
                  Agreement Accept Date:
                </span>{" "}
                N/A
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
