import React from "react";
import Title from "../../../Components/Title";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { format, toDate } from 'date-fns';


const MakeAnnouncements = () => {
  const axiosSecure = useAxiosSecure();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: announcements = [] ,refetch } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/announcements");
        return res.data;
      } catch (error) {
        console.log(error.response.statusText);
        return [];
      }
    },
  });

  const onSubmit = async (data) => {
    // console.log("Form Submitted:", data);
    try {
      const res = await axiosSecure.post("/announcements", {...data , date: formattedDate});
      if (res.status === 200) {
          refetch()
        Swal.fire("Announcement published successfully");
        reset();
      }
    } catch (error) {
      Swal.fire("error sending data");
    }
  };
  return (
    <div className="-ml-6 sm:ml-0 ">
      <Title heading={"announcements"}></Title>
      <div className="">
        {/* //!form  */}
        <div className="bg-neutral-white my-10 py-5 pr-2 flex flex-col sm:flex-row justify-around items-center">
          <p className="text-xl text-center py-2 sm:border-b-4 sm:border-neutral capitalize text-accent font-bold sm:w-2/5">
            make a new announcement
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 bg-gray-100 rounded-md sm:w-3/5"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",
                })}
                type="text"
                className="mt-1 block w-full p-2 border rounded-md"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                className="mt-1 block w-full p-2 border rounded-md min-h-24 max-h-52"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        {/* //! data */}
        <div className="">
          <p className="uppercase text-center underline text-accent font-bold text-2xl my-4">
            all published announcements
          </p>
        </div>
        <div className="">
          {/* cards */}
          {announcements.length > 0 ? (
            <>
              {announcements.map((announcement) => {
                const formattedDate = format(toDate(new Date(announcement.date)), 'PPPpp');
                return (
                    <div
                  key={announcement._id}
                  className="bg-accent-orange/20 p-2 rounded-lg my-2 max-w-full"
                >
                  <div className="flex items-center justify-between">
                  <p className="text-lg capitalize font-bold text-primary underline underline-offset-4">
                    {announcement.title}
                  </p>
                  <p className="text-sm text-primary-light">{formattedDate}</p>
                  </div>
                  <p className="text-sm text-primary-light">
                    {announcement.description}
                  </p>
                </div>
                )
              })}
            </>
          ) : (
            <>
              {" "}
              <p>NO Announcement available</p>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncements;
