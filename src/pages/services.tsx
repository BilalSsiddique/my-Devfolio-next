import React from "react";
import { service } from "@/data/website-data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Service from "@/components/Service";
import { Autoplay, A11y, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <Swiper
      className="   mx-auto overflow-hidden font-outfit mt-44 mb-20 xs:mt-52 w-5/6 rounded-2xl "
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay
      modules={[Pagination, A11y, Autoplay]}
    >
      {service.map((item, ind) => {
        return (
          <SwiperSlide key={item.id}>
            <Service item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Services;
