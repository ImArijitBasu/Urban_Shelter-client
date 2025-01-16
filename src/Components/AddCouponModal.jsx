import React from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";

Modal.setAppElement("#root");

const AddCouponModal = ({ isOpen, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosSecure.post("/coupons", {...data , isAvailable: true});
      if (res.status === 200) {
        refetch();
        Swal.fire("Coupon added successfully");
        reset();
        onClose();
      }
    } catch (error) {
      Swal.fire("Error adding coupon");
    }
  };

  return (
    <div className="bg-primary-light">
      <Modal
        className="bg-accent text-white text-center"
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <h2 className="text-3xl uppercase py-2 font-bold font-josefin">
          Add Coupon
        </h2>
        <form
          className="bg-primary-light p-4 text-white text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <label className=" uppercase text-sm">Coupon Code:</label>
            <input
              {...register("couponCode", {
                required: "Coupon Code is required",
              })}
              type="text"
              className="text-primary px-2 border-4 border-accent"
              placeholder=""
            />
            {errors.couponCode && (
              <p className="text-xs text-warning pl-3 pb-2">
                {errors.couponCode.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className=" uppercase text-sm">Discount Percentage:</label>
            <input
              {...register("discount", {
                required: "Discount Percentage is required",
              })}
              className="text-primary px-2 border-4 border-accent"
              type="number"
            />
            {errors.discount && (
              <p className="text-xs text-warning pl-3 pb-2">
                {errors.discount.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className=" uppercase text-sm">Description:</label>
            <textarea
              className="text-primary px-2 border-4 border-accent max-h-32 min-h-20"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="text-xs text-warning pl-3 pb-2">
                {errors.description.message}
              </p>
            )}
          </div>
          <button
            className="btn bg-accent text-neutral-white border-none btn-sm m-2 hover:bg-accent-orange"
            type="submit"
          >
            Submit
          </button>
          <button
            className="btn bg-warning text-accent border-none btn-sm m-2 hover:bg-error hover:text-neutral-white"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCouponModal;
