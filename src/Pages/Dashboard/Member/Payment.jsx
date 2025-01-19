import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../../../Components/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import { format } from "date-fns";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { state } = useLocation();
  const axiosSecure = useAxiosSecure();
  const [message, setMessage] = useState("");
  const { agreement, month } = state;
  const [discountPrice, setDiscountPrice] = useState(agreement.rent);
  const [applied , setApplied] = useState('')


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setApplied('')
    const coupon = e.target.coupon.value;

    try {
      const res = await axiosSecure.post("/coupons/apply", { code: coupon });
      console.log(res.data);
      if (res.data.statusCode === 200) {
        //TODO: DO payment -> use the coupon if the coupon is valid
        //TODO -:> calculate the rent based on coupon
        const discountPercentage = parseInt(res?.data?.coupon?.discount);
        const rent = agreement?.rent;
        console.log(discountPercentage, rent);
        // multiply the original price by discount percentage and divide the result by 100 . subtract the amount by original value;

        const discountPrice = rent - (rent * discountPercentage) / 100;
        setDiscountPrice(discountPrice);
        setApplied(res.data.message);
        // console.log(discountPrice);
      } else {
        setMessage(res.data.message);
        //TODO : DO payment -> don't use the coupon if it is not valid
      }
    } catch (err) {
      console.error("Error applying coupon:", err);
    }
  };
  const paymentData = {
    agreement ,
    month,
    discountPrice
  }
  return (
    <div>
      <Title heading={"payment"}></Title>
      <div className="bg-neutral-white p-2 my-10 flex flex-col sm:flex-row justify-between">
        <div className="">
          <form className="form-control space-y-2" action="" onSubmit={handleFormSubmit}>
            <label htmlFor="" className="font-bold uppercase">Apply Coupon</label>
            <input className="w-52 border-2 border-accent bg-neutral text-accent" type="text" name="coupon" />
            <button type="submit" className="btn btn-sm w-20 bg-accent text-neutral-white uppercase">
              check
            </button>
            <p className="text-thin text-xs text-success">{applied && "coupon applied"}</p>
          </form>
          <p className="text-xs text-error mb-4">{message}</p>
        </div>
        <div className="pr-5 font-semibold uppercase">
          <p>Rent: ${discountPrice ? discountPrice : agreement.rent}</p>
          <p>Rent Month: {month && format(month , "MMMM/yy")}</p>
        </div>
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
            <CheckoutForm paymentData={paymentData}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
