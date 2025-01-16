import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageMembers = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try{
        const res = await axiosSecure.get("/users/members");
      return res.data;
      }
      catch(error) {
        // console.log(error.response.status);
        return [];
      }
    },
  });

  const handleRemoveMember = async (user) => {
    try {
      const res = await axiosPublic.patch("/users/remove", { user: user });
      console.log(res.data);
      if (res.data.modifiedCount === 1) {
        await refetch();
        Swal.fire("Member removed successfully");
      }
    } catch (error) {
      console.error("Error removing member:", error);
      Swal.fire("Failed to remove member");
    }
  };
  return (
    <div>
      <Title heading={"manage members"}></Title>
      <div className="overflow-x-auto w-52 sm:w-full">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className=" border-b-4 border-accent">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Remove </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                <>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => handleRemoveMember(user)}
                          className="btn bg-error text-white btn-xs hover:bg-warning"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center text-error text-xl capitalize"
                    >
                      No members available
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMembers;
