import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';  // Import pagination styles
import 'swiper/css/navigation';  // Import navigation styles

import useAxiosPublic from "../Hooks/useAxiosPublic";
import Title from "../Components/Title";
import LazyImage from "../Components/LazyImage";

const ApartmentSlider = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axiosPublic.get("/apartments");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div><span className="loading loading-dots loading-xs"></span></div>;
  }

  return (
    <div className="">
        <div className="my-10">
        <Title heading={"gallery"}></Title>
        </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <LazyImage
              src={room?.image}
              alt={`Room ${index + 1}`}
              className="w-full h-80 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApartmentSlider;
