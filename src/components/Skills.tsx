import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, A11y, Pagination } from "swiper/modules";
import { tectStackIcons } from "@/data/website-data";
import SkillsComponent from "./SkillsComponent";

const Skills = () => {
  return (
    <div className="flex  items-center justify-center ">
      <Swiper
        className="  "
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        autoplay
        modules={[Pagination, A11y, Autoplay]}
      >
        {tectStackIcons.map((iconImage, index) => (
          <SwiperSlide key={index}>
            <SkillsComponent skill={iconImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
