import React from "react";
import Title from "../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { format } from "date-fns";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment history", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <Title heading={"payment history"}></Title>
      <div className="my-10 flex justify-center">
        <div className="overflow-x-auto w-56 sm:w-fit ">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-y-8 border-accent">
                <th className="border-x-2 border-accent font-extrabold text-primary text-center">Date</th>
                <th className="border-x-2 border-accent font-extrabold text-primary text-center">Month</th>
                <th className="border-x-2 border-accent font-extrabold text-primary text-center">Amount</th>
                <th className="border-x-2 border-accent font-extrabold text-primary text-center">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr className="border-b-4 border-x-2 border-primary-light">
                  <th>{payment.date && format(payment.date ,' dd/MM/yyyy')}</th>
                  <td>{payment.month && format(payment.month , "MMMM-yy")}</td>
                  <td>${payment.rent}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
