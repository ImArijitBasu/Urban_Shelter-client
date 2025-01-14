import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Slide from "./Slide";

const Banner = () => {
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
        <SwiperSlide><Slide image={"https://th.bing.com/th/id/OIP.nmTYSJkPKeD_hFnHgZpdQgHaGZ?rs=1&pid=ImgDetMain"} heading={"Top quality rooms"} subheading={"Do other necessary beautification of this section."}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={"/bannerImg.jpeg"} heading={"Top quality rooms"} subheading={"Do other necessary beautification of this section."}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={"/bannerImg.jpeg"} heading={"Top quality rooms"} subheading={"Do other necessary beautification of this section."}></Slide></SwiperSlide>
        <SwiperSlide><Slide image={"/bannerImg.jpeg"} heading={"Top quality rooms"} subheading={"Do other necessary beautification of this section."}></Slide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
