import React from "react";
import Title from "../Components/Title";

const WhoAreWe = () => {
  return (
    <section className="py-16 bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Title heading={"who are we ?"}></Title>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Urban Shelter is a trusted platform connecting renters with their ideal apartments. 
          Our mission is to simplify the renting process by offering verified listings, secure transactions, 
          and a seamless experience for both tenants and landlords.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-neutral-white dark:bg-neutral rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-accent">Our Vision</h3>
            <p className="mt-3 text-sm dark:text-primary">
              To revolutionize the rental market with transparency and efficiency, making apartment hunting stress-free.
            </p>
          </div>
          <div className="p-6 bg-neutral-white dark:bg-neutral rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-accent">Our Mission</h3>
            <p className="mt-3 text-sm dark:text-primary">
              Helping people find homes that match their needs while ensuring a secure and smooth rental process.
            </p>
          </div>
          <div className="p-6 bg-neutral-white dark:bg-neutral rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-accent">Our Values</h3>
            <p className="mt-3 text-sm dark:text-primary">
              Trust, transparency, and convenience drive our commitment to providing the best rental solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
