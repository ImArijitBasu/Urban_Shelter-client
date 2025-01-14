import React from "react";
import Title from "../Components/Title";

const AboutBuilding = () => {
  return (
    <div>
      <Title heading={"about the building"}></Title>
      <div className=" mt-10 p-2 bg-neutral-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* card */}
          <div className="flex flex-col  text-center bg-neutral py-2">
            <h1 className="text-primary uppercase font-semibold border-b-4 border-accent text-2xl">
              Why choose us ?
            </h1>

            <p className="text-primary-light text-left px-2 mt-4 ">
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🌿 Eco-Friendly Design
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🏢 Modern Architecture
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🔒 24/7 Security
              </p>
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col  text-center bg-neutral py-2">
            <h1 className="text-primary uppercase font-semibold border-b-4 border-accent text-2xl">
              Top-Notch Amenities
            </h1>

            <p className="text-primary-light text-left px-2 mt-4">
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🏊 Swimming Pool
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🏋️ Fitness Center
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🚗 Parking
              </p>
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col  text-center bg-neutral py-2 md:col-span-2">
            <h1 className="text-primary uppercase font-semibold border-b-4 border-accent text-2xl">
              Our Vibrant Location
            </h1>

            <p className="text-primary-light text-left px-2 mt-4">
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🛍️ Located near City Mall
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🎓 Close to the best school of the city
              </p>
              <p className="badge bg-accent-orange text-neutral-white font-semibold p-4">
                🚇 5 minutes away from the nearest metro station
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;