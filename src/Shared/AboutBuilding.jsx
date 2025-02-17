import React from "react";
import Title from "../Components/Title";

const AboutBuilding = () => {
  return (
    <div>
      <Title heading={"about the building"}></Title>
      <div className=" mt-10 p-2 flex flex-col md:flex-row bg-neutral-white">
        <div className="md:w-3/5">
          <img src="/bannerImg.jpeg" className="h-52 mb-10 md:mb-0 md:h-full w-full object-cover pr-2" alt="" />
        </div>
        <div className="space-y-10 md:w-2/5">
          {/* card */}
          <div className="flex flex-col text-center bg-neutral py-2">
            <h1 className="text-primary dark:text-neutral-white uppercase font-semibold border-b-4 border-accent text-2xl">
              Why choose us ?
            </h1>

            <p className="text-primary dark:text-neutral-white-light text-left px-2 mt-4 ">
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🌿 Eco-Friendly Design
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🏢 Modern Architecture
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🔒 24/7 Security
              </p>
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col  text-center bg-neutral py-2">
            <h1 className="text-primary dark:text-neutral-white uppercase font-semibold border-b-4 border-accent text-2xl">
              Top-Notch Amenities
            </h1>

            <p className="text-primary dark:text-neutral-white-light text-left px-2 mt-4">
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🏊 Swimming Pool
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🏋️ Fitness Center
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🚗 Parking
              </p>
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col  text-center bg-neutral py-2">
            <h1 className="text-primary dark:text-neutral-white uppercase font-semibold border-b-4 border-accent text-2xl">
              Our Vibrant Location
            </h1>

            <p className="text-primary dark:text-neutral-white-light text-left px-2 mt-4">
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🛍️ Located near City Mall
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
                🎓 Close to the best school of the city
              </p>
              <p className="my-1 text-lg uppercase rounded-sm border-4 border-accent hover:border-accent-orange hover:bg-accent transition-all duration-300 ease-in-out bg-accent-orange text-neutral-white font-semibold p-4">
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
