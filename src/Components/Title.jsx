import React from "react";

const Title = ({heading , subheading}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center text-primary py-3 text-3xl font-bold border-b-4 border-dashed border-accent uppercase">
          {heading}
        </h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default Title;
