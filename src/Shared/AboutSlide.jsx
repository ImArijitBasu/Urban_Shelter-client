import React from "react";
import { Link } from "react-router-dom";

const AboutSlide = ({ image }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-primary via-accent/50 to-transparent">
      <div className="relative w-full">
        <img
          src={image}
          className="h-[400px] w-full object-cover rounded-b-xl filter blur-sm brightness-90 dark:brightness-75 contrast-100 saturate-150 transition-all duration-500"
          alt="About Urban Shelter"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent-orange/15 text-white rounded-b-xl px-6">
          <p className="text-neutral uppercase font-bold text-5xl bg-gradient-to-r from-primary/0 via-accent/50 to-primary/0 p-4 md:px-8 lg:px-12 font-dancing">
            About Urban Shelter
          </p>
          <p className="font-medium text-center max-w-2xl text-lg">
            We help people find the perfect rental apartments with ease and trust. 
            Our platform connects renters with verified listings, ensuring a seamless renting experience.
          </p>
          <Link to={"/apartments"} className="mt-4 bg-accent text-white px-6 py-2 rounded-full uppercase text-sm font-semibold hover:bg-accent/80 transition-all">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
