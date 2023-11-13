import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, A11y, Pagination } from "swiper/modules";
import { tectStackIcons } from "@/data/website-data";
import SkillsComponent from "./SkillsComponent";
import { Fragment } from "react";
import GridSkills from "./GridSkills";

const Skills = () => {
  return (
    <>
      <div className="flex w-full h-full relative items-center justify-center ">
        <div className="w-full h-full md:hidden">
          <Swiper
            className="skills-slider "
            spaceBetween={20}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            autoplay
            modules={[Pagination, A11y, Autoplay]}
          >
            {tectStackIcons.map((iconImage, index) => (
              <SwiperSlide key={index} >
                <SkillsComponent skill={iconImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="hidden h-full md:grid md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] place-items-center gap-4 gap-y-8" >
        {tectStackIcons.map((iconImage, index) => (
          <SkillsComponent skill={iconImage} key={index} />
        ))}
      </div>
    </>
  );
};

export default Skills;
