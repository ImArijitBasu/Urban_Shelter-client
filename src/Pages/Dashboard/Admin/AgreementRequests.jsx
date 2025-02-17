import React from "react";
import Title from "../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AgreementRequests = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res.data;
    },
  });

  const handleAccept = async (agreementId) => {
    const res = await axiosPublic.patch("/agreements/update", {
      id: agreementId,
      acceptDate: new Date(),
      action: "accept",
    });
    if (res.data) {
      refetch();
      Swal.fire("agreement accepted");
    }
  };
  const handleReject = async (agreementId) => {
    const res = await axiosPublic.patch("/agreements/update", {
      id: agreementId,
      action: "reject",
    });
    if (res.data) {
      refetch();
      Swal.fire("agreement rejected");
    }
  };
  return (
    <div className="">
      <Title heading={"Agreement Requests"}></Title>
      <div className="mt-4 w-52 sm:w-[450px] md:w-[500px] lg:w-full overflow-x-auto">
        <div className=" max-w-full">
          <table className="table table-xs w-full overflow-x-auto">
            <thead className="underline border-b-4 border-accent dark:text-white">
              <tr>
                <th>Room No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Floor No</th>
                <th>Block Name</th>
                <th>Rent</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            {agreements.length > 0 ? (
              <>
                {agreements.map((agreement) => (
                  <tbody>
                    <tr className="text-left">
                      <th>{agreement.apartmentNo}</th>
                      <td>{agreement.name}</td>
                      <td>{agreement.email}</td>
                      <td>{agreement.floorNo}</td>
                      <td>{agreement.blockName}</td>
                      <td>{agreement.rent}</td>
                      <td>
                        {agreement.date
                          ? new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }).format(new Date(agreement.date))
                          : "Invalid Date"}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleAccept(agreement._id);
                          }}
                          className="btn btn-xs bg-success"
                        >
                          Accpet
                        </button>
                        <button
                          onClick={() => {
                            handleReject(agreement._id);
                          }}
                          className="btn btn-xs bg-warning"
                        >
                          reject
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </>
            ) : (
              <>
                <tbody>
                  <tr>
                    <td
                      colSpan="8"
                      className=" text-center text-error capitalize text-xl"
                    >
                      No Agreements available
                    </td>
                  </tr>
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgreementRequests;
