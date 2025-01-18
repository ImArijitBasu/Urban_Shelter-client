import React from "react";

const Slide = ({ rent, apartment, image }) => {
  return (
    <div className="flex justify-evenly items-center space-x-10 bg-gradient-to-b from-primary  via-accent/50 to-transparent">
      <div className="relative container">
        <img
          src={image}
          className="h-[600px] container object-cover rounded-b-xl filter blur-sm backdrop-brightness-100 brightness-100 contrast-100 saturate-200"
          alt=""
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center bg-accent-orange/15 text-white rounded-b-xl">
          <p className="text-neutral uppercase font-bold text-5xl bg-gradient-to-r from-primary/0 via-accent/50 to-primary/0 p-4 md:px-8 lg:px-12 font-dancing">urban shelter</p>
          <p className="font-bold uppercase py-2 text-center">where dreams comes true with <br /> <span className="text-accent bg-neutral-white px-3 mx-1 text-bold text-xl badge">${rent}</span>/month</p>
          <p className="absolute bottom-0 left-0 bg-primary-light px-4 uppercase text-xs py-2 rounded-bl-xl">apartment: {apartment}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;

/**
 *  <div className="w-3/5 py-20">
                <img src={image} className='w-full rounded-e-3xl object-cover h-[600px]' alt="" />
            </div>
            <div className="w-2/5">
                <div className="">
                    <p className='text-3xl text-neutral-white uppercase font-extrabold border-b-8 border-primary mb-3 pb-2'>{heading}</p>
                    <p className='text-lg capitalize text-neutral'>{subheading}</p>
                </div>
            </div>
 */
