import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Title from "../Components/Title";
import { Link } from "react-router-dom";

const AvailableApartments = () => {
  const axiosPublic = useAxiosPublic();

  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      const availableApartments = res.data.filter(
        (apartment) => !apartment.booked
      );
      return availableApartments.slice(0,6);
    },
  });

  console.log(apartments);

  return (
    <div>
      <Title heading={"Available apartments"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {apartments.map((apartment) => (
          <div
            key={apartment._id}
            className="card rounded-none glass bg-neutral-white w-full shadow-xl"
          >
            <figure>
              <img
                src={apartment.image}
                alt="apartment"
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center absolute top-0 w-full bg-neutral border-t-4 border-accent left-0 pl-2">
                <div className="w-1/2 font-bold text-accent uppercase">
                  <p>Apartment No:</p>
                </div>
                <div className="w-1/2 font-semibold text-primary-light text-center">
                  <p>{apartment.apartmentNo}</p>
                </div>
              </div>
              <div className="card-actions justify-end items-center">
                <p>
                  <span className="text-accent-orange text-2xl">
                    ${apartment.rent}
                  </span>{" "}
                  /month
                </p>
                <Link
                  to={"/apartments"}
                  disabled={apartment.booked}
                  className="btn text-xl bg-accent hover:bg-primary-light border-none text-neutral-white"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableApartments;
