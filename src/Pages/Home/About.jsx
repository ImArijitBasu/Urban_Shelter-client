import React from "react";
import Title from "../../Components/Title";
import Banner from "../../Shared/Banner";
import AboutBanner from "../../Shared/AboutBanner";
import WhoAreWe from "../../Shared/WhoAreWe";

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <div className="">
        <WhoAreWe></WhoAreWe>
      </div>
    </div>
  );
};

export default About;
