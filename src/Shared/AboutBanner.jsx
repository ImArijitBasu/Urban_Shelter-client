import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Slide from "./Slide";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import AboutSlide from "./AboutSlide";

const AboutBanner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: apartments = [] } = useQuery({
    queryKey: ["banner apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bannerApartments");
      return res.data;
    },
  });
  console.log(apartments);
  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {apartments.map((apartment) => (
          <SwiperSlide>
            <AboutSlide image={apartment.image} rent={apartment.rent} apartment={apartment.apartmentNo}></AboutSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutBanner;
