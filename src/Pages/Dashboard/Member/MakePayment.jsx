import React from "react";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: agreement = [] } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreement/${user.email}`);
      return res.data;
    },
  });


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const month = e.target.month.value;
    console.log(month);
    navigate('payment' ,{
        state: {
            agreement , 
            month
        }
    })
  };
  return (
    <div>
      <Title heading={"Make payment"}></Title>
      <div className="flex justify-center">
      <form className="form-control w-full" onSubmit={handleFormSubmit}>
        <label className="font-bold py-1 pl-1 text-primary">Email:</label>
        <input className=" px-2 py-1 rounded-full border border-accent " type="text" value={agreement.email || ""} readOnly />

        <label className="font-bold py-1 pl-1 text-primary">Floor:</label>
        <input className="px-2 py-1 rounded-full border border-accent " type="text" value={agreement.floorNo || ""} readOnly />

        <label className="font-bold py-1 pl-1 text-primary">Block Name:</label>
        <input className="px-2 py-1 rounded-full border border-accent " type="text" value={agreement.blockName || ""} readOnly />

        <label className="font-bold py-1 pl-1 text-primary">Apartment/Room No:</label>
        <input className="px-2 py-1 rounded-full border border-accent " type="text" value={agreement.apartmentNo || ""} readOnly />

        <label className="font-bold py-1 pl-1 text-primary">Rent:</label>
        <input className="px-2 py-1 rounded-full border border-accent " type="text" value={agreement.rent || ""} readOnly />

        <label className="font-bold py-1 pl-1 text-primary">Month:</label>
        <input className="px-2 py-1 rounded-full border border-accent " type="month" name="month" required />

        <button className="btn btn-outline my-5 bg-white text-accent uppercase hover:bg-primary hover:text-neutral-white" type="submit">Pay Now</button>
      </form>
      </div>
    </div>
  );
};

export default MakePayment;
