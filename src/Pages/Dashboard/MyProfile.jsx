import React from "react";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Title heading={"My profile"}></Title>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/50 py-5 rounded-lg">
        <div className="">
          <p className="capitalize text-neutral">
            <span className="font-bold capitalize text-primary">name:</span>{" "}
            {user.displayName}
          </p>
          <p className="text-neutral">
            <span className="font-bold capitalize text-primary">Email:</span>{" "}
            {user.email}
          </p>
        </div>
        <div className="">
          <img
            src={user.photoURL}
            className="w-40 rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-40 my-4 bg-primary-light/50 py-5 rounded-lg">

      </div>
    </div>
  );
};

export default MyProfile;
