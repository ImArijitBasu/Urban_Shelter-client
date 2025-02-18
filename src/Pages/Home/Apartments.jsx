import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Title from "../../Components/Title";
import Pagination from "../../Shared/Pagination";

const Apartments = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      return res.data;
    },
  });

  const [searchRentRange, setSearchRentRange] = useState({ min: "", max: "" });
  const [sortOrder, setSortOrder] = useState("asc"); // Default ascending

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchRentRange((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredApartments = apartments
    .filter((apartment) => {
      const minRent = parseFloat(searchRentRange.min) || 2000;
      const maxRent = parseFloat(searchRentRange.max) || Infinity;
      return apartment.rent >= minRent && apartment.rent <= maxRent;
    })
    .sort((a, b) => (sortOrder === "asc" ? a.rent - b.rent : b.rent - a.rent));

  //! Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = filteredApartments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApartments = filteredApartments.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAgreement = async (apartment) => {
    if (user) {
      const agreementData = {
        name: user.displayName,
        email: user.email,
        floorNo: apartment.floorNo,
        blockName: apartment.blockName,
        apartmentNo: apartment.apartmentNo,
        rent: apartment.rent,
        date: new Date(),
        status: "pending",
      };
      try {
        const res = await axiosPublic.post("/agreements", agreementData);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Apartment booked successfully",
            icon: "success",
            draggable: true,
          });
        }
      } catch (error) {
        if (error.response.status === 400) {
          Swal.fire({
            title: "You have already booked one apartment",
            icon: "warning",
            draggable: true,
          });
        }
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto p-2">
      <Title heading="Apartments" />

      {/* Search & Sort */}
      <form onSubmit={handleSearchSubmit} className="my-4 flex flex-wrap items-center gap-4">
        {/* Rent Filter */}
        <div className="flex-1">
          <label htmlFor="minRent" className="block text-sm font-medium text-gray-700 dark:text-neutral-white">Min Rent:</label>
          <input
            type="number"
            id="minRent"
            name="min"
            placeholder="Min $2000"
            value={searchRentRange.min}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="maxRent" className="block text-sm font-medium text-gray-700 dark:text-neutral-white">Max Rent:</label>
          <input
            type="number"
            id="maxRent"
            name="max"
            placeholder="Max $4000"
            value={searchRentRange.max}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-neutral-white">Sort by Rent:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </form>

      {/* Apartments Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {currentApartments.map((apartment) => (
          <div key={apartment._id} className="card rounded-none glass bg-neutral-white w-full shadow-xl">
            <figure>
              <img src={apartment.image} alt="apartment" className="w-full h-60 object-cover" />
            </figure>
            <div className="card-body">
              <div className="flex items-center">
                <div className="w-1/2 font-bold text-accent uppercase">
                  <p>Floor No:</p>
                  <p>Block Name:</p>
                  <p>Apartment No:</p>
                </div>
                <div className="w-1/2 font-semibold text-primary-light text-center">
                  <p>{apartment.floorNo}</p>
                  <p>{apartment.blockName}</p>
                  <p>{apartment.apartmentNo}</p>
                </div>
              </div>
              <div className="card-actions justify-end items-center">
                <p>
                  <span className="text-accent-orange text-2xl">${apartment.rent}</span> /month
                </p>
                <button
                  onClick={() => handleAgreement(apartment)}
                  disabled={apartment.booked}
                  className="btn text-xl bg-accent hover:bg-primary-light border-none text-neutral-white"
                >
                  {apartment.booked ? "Booked" : "Agreement"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Apartments;
