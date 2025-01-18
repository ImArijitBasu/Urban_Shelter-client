import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AddCouponModal from "../../../Components/AddCouponModal";
import Title from "../../../Components/Title";
import { FaExchangeAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageCoupons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/coupons");
        return res.data;
      } catch (error) {
        console.log(error.response.statusText);
        return [];
      }
    },
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/coupons/${id}`);
      if (res.status === 200) {
        refetch();
        Swal.fire("coupon deleted successfully");
      }
    } catch (error) {
      Swal.fire("error deleting data");
    }

    console.log(res);
  };
  const handleAvailable = async (id) => {
    try {
      const res = await axiosSecure.patch(`/coupons/${id}`);
      if (res.status === 200) {
        refetch();
        Swal.fire("Availability changed successfully");
      }
    } catch (error) {
      Swal.fire("error deleting data");
    }

    console.log(res);
  };

  console.log(coupons);
  return (
    <div className="">
      <Title heading={"Manage Coupons"} />
      <button
        onClick={openModal}
        className="mt-10 rounded-xl border-2 border-dashed border-accent bg-accent-orange px-6 py-3 font-semibold uppercase text-neutral-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-full"
      >
        Add New Coupon
      </button>
      <AddCouponModal
        isOpen={isModalOpen}
        onClose={closeModal}
        refetch={refetch}
      />
      <div className="">
        <p className="uppercase text-center underline text-accent font-bold text-2xl my-4">
          All Coupons
        </p>
      </div>

      <div className="">
        <div className="overflow-x-auto w-56 sm:w-96 md:w-full">
          <table className="table ">
            <thead>
              <tr className="border-y-8 border-accent border-x-2 text-center text-accent-orange">
                <th>Coupon Code</th>
                <th>Discount Percentage</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {coupons.length > 0 ? (
                <>
                  {coupons.map((coupon) => (
                    <tr className="border-b-2 border-accent border-x-2">
                      <td className="border-r-2 border-accent flex justify-between">
                        <div className="">
                          {coupon.couponCode}{" "}
                          <span
                            className={`badge text-white ${
                              coupon.isAvailable ? "bg-success" : "bg-error"
                            }`}
                          >
                            {coupon.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </div>
                        <span className=" text-primary hover:text-accent rounded-full">
                          <button onClick={() => handleAvailable(coupon._id)}>
                            <FaExchangeAlt />
                          </button>
                        </span>
                      </td>
                      <td className="border-r-2 border-accent">
                        {coupon.discount}%
                      </td>
                      <td className="border-r-2 border-accent flex justify-between items-center">
                        {coupon.description}
                        <span className="space-x-4">
                          <span className=" text-error hover:text-warning rounded-full">
                            <button onClick={() => handleDelete(coupon._id)}>
                              <FaTrash></FaTrash>{" "}
                            </button>
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td
                      colSpan="3"
                      className="text-error text-xs text-center border-2 border-accent bg-warning"
                    >
                      no coupons available
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <p className="flex items-center text-xs">
            * click on the{" "}
            <span className="px-4">
              {" "}
              <FaExchangeAlt />{" "}
            </span>{" "}
            button to change availability{" "}
          </p>
          <p className="flex items-center text-xs">
            * click on the{" "}
            <span className="px-4">
              {" "}
              <FaTrash />{" "}
            </span>{" "}
            button to delete the coupon{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
