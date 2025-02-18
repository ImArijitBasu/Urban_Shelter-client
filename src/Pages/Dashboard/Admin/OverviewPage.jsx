import React from "react";
import Title from "../../../Components/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  FaBed,
  FaBuilding,
  FaUsers,
  FaPercentage,
} from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  ArcElement
);

const Overview = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["overviewStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard/stats");
      return res.data;
    },
  });


  const barChartData = {
    labels: ["Total Rooms", "Total Users" , "Total Members"],
    datasets: [
      {
        label: "Total Stats",
        data: [stats?.totalRooms, stats?.totalUsers , stats?.totalMembers],
        backgroundColor: "#FF5733", 
        borderColor: "#FF5733",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Booked", "Available"],
    datasets: [
      {
        data: [stats?.bookedPercentage, 100 - stats?.bookedPercentage],
        backgroundColor: ["#FF5733", "#4CAF50"], 
      },
    ],
  };

  return (
    <div>
      <Title heading={"Overview"}></Title>
      <div className="my-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1 border border-neutral p-2">
            <h3 className="text-center text-2xl text-accent">Room User Ratio</h3>
            <Bar className="" data={barChartData} options={{ responsive: true }} />
            <div className="stat border-8  bg-neutral border-primary hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center my-2">
            <div className="">
              <div className=" text-accent">Total Rooms</div>
              <div className="text-4xl font-extrabold text-accent-orange">
                {stats?.totalRooms}
              </div>
            </div>
            <div className="text-6xl text-accent">
              <FaBed />
            </div>
          </div>
          <div className="stat border-8  bg-neutral border-primary hover:border-accent transition-all duration-300 ease-in-out flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center">
            <div className="">
              <div className=" text-accent">Total Users</div>
              <div className="text-4xl font-extrabold text-accent-orange">
                {stats?.totalUsers}
              </div>
            </div>
            <div className="text-6xl text-accent">
              <FaUsers />
            </div>
          </div>
          </div>

          <div className="col-span-2 sm:col-span-1 border border-neutral p-2">
            <h3 className="text-center text-2xl text-accent">Room Status</h3>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
