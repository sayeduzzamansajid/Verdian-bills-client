import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { AuthContext } from "../../Context/AuthContext";

const Slider = () => {
  const { loading, bannerData } = useContext(AuthContext);
  const data = Array.isArray(bannerData) ? bannerData : [];

  if (loading) return <p>Loading</p>;

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.imageSrc} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
