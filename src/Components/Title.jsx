import React from "react";

const Title = ({heading , subheading}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 font-josefin">
        <h1 className="text-center text-primary dark:text-neutral-white py-3 text-2xl sm:text-3xl font-bold border-b-4 border-dashed border-accent uppercase">
          {heading}
        </h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default Title;
