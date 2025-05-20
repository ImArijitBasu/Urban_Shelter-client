import React from 'react';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import Title from '../Components/Title';
import LazyImage from '../Components/LazyImage';

const Testimonials = () => {
  const testimonials = [
    {
      name: "MD Sakib Ali",
      role: "Software Engineer",
      text: "This building is exceptional! The facilities are top-notch, and the location is perfect. The staff is always attentive and helpful.",
      image: "https://i.ibb.co.com/DRxJgvy/OIP-3.jpg"
    },
    {
      name: "Stiven Hulking",
      role: "Web developer",
      text: "I feel safe and secure living here. The building management team does an excellent job maintaining the property, and the neighbors are friendly.",
      image: "https://i.ibb.co.com/VS9RgLK/download.jpg"
    },
    {
      name: "Kala Afgan",
      role: "Hiring Manager",
      text: "An amazing place to live! Everything from the amenities to the service is beyond expectations. Highly recommended for anyone looking for a new home.",
      image: "https://i.ibb.co.com/MfpXj7h/OIP-1.jpg"
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <Title heading={"What Our Residents Say"}></Title>
      
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm bg-neutral p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <FaQuoteLeft className="text-4xl text-primary mb-4 mx-auto" />
            <p className="text-primary-light italic mb-4">"{testimonial.text}"</p>
            
            <div className="flex justify-center items-center">
              <LazyImage
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 object-cover border-primary-light mr-3"
              />
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-primary">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
