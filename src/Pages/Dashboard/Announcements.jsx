import React from "react";
import Title from "../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { format, toDate } from "date-fns";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();

  const { data: announcements = [], refetch } = useQuery({
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
  return (
    <div>
      <Title heading={"announcements"}></Title>
      <div className="">
        {/* //! data */}

        <div className="">
          {/* cards */}
          {announcements.length > 0 ? (
            <>
              {announcements.map((announcement) => {
                const formattedDate = format(
                  toDate(new Date(announcement.date)),
                  "PPPpp"
                );
                return (
                  <div
                    key={announcement._id}
                    className="bg-neutral-white px-2 py-4 rounded-lg my-2"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg capitalize font-bold text-primary dark:text-neutral-white underline underline-offset-4">
                        {announcement.title}
                      </p>
                      <p className="text-sm text-primary dark:text-neutral-white-light">
                        {formattedDate}
                      </p>
                    </div>
                    <p className=" text-primary dark:text-neutral-white-light">
                      {announcement.description}
                    </p>
                  </div>
                );
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

export default Announcements;
