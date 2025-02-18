import React from "react";
import Title from "../Components/Title";

const MissionVision = () => {
  return (
    <section className="pb-10 dark:bg-neutral-dark text-neutral-dark dark:text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-3">
        <Title heading={"mission & vision"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission  */}
          <div className="p-8 bg-white dark:bg-neutral rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed hover:dark:bg-primary hover:text-primary text-primary-light hover:dark:text-neutral-white transition-all duration-150 ease-linear p-2 rounded-lg">
              At Urban Shelter, our mission is to simplify the renting experience 
              by providing verified apartment listings, secure transactions, and 
              a user-friendly platform for both tenants and landlords. We strive 
              to make house hunting effortless and stress-free.
            </p>
          </div>

          {/* Vision  */}
          <div className="p-8 bg-white dark:bg-neutral rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed hover:dark:bg-primary hover:text-primary text-primary-light hover:dark:text-neutral-white transition-all duration-150 ease-linear p-2 rounded-lg">
              Our vision is to revolutionize the rental market with transparency, 
              efficiency, and innovation. We aim to become the most trusted rental 
              platform by ensuring a seamless experience for renters and property 
              owners alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
