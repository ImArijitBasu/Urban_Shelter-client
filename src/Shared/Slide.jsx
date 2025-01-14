import React from 'react';

const Slide = ({heading , subheading , image}) => {
    return (
        <div className='flex justify-evenly items-center space-x-10 bg-gradient-to-b from-accent to-accent via-primary-light'>
            <div className="w-3/5 py-20">
                <img src={image} className='w-full rounded-e-3xl object-cover h-[600px]' alt="" />
            </div>
            <div className="w-2/5">
                <div className="">
                    <p className='text-3xl text-neutral-white uppercase font-extrabold border-b-8 border-primary mb-3 pb-2'>{heading}</p>
                    <p className='text-lg capitalize text-neutral'>{subheading}</p>
                </div>
            </div>
        </div>
    );
};

export default Slide;