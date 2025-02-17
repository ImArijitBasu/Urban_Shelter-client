import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ paymentData }) => {
  const { user } = useAuth();
  console.log(paymentData);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const totalPrice = paymentData.discountPrice;
  console.log(totalPrice);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalPrice,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    //! confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "anonymous",
            email: user.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error:", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction ID:", paymentIntent.id);
        Swal.fire("Transaction Successful");

        //! store payment information in db
        const payment = {
            email: user.email,
            rent: totalPrice,
            transactionId : paymentIntent.id,
            date: new Date(),
            month: paymentData.month
        }
        const res = await axiosSecure.post("/payments" , payment);
        if(res.data?.paymentResult?.insertedId){
            Swal.fire('Transaction Successful')
        }
      }
    }
  };
  return (
    <div className="bg-neutral-white text-primary dark:text-neutral-white p-2">
      <form onSubmit={handleSubmit} className="">
        <CardElement
          className="border-2 border-accent"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm my-4 bg-accent text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <div className="text-warning">{error}</div>
    </div>
  );
};

export default CheckoutForm;
