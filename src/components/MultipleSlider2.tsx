import React from "react";
import { slides } from "@/data/website-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, A11y, Pagination, Navigation } from "swiper/modules";

const MultipleSlider2 = () => {
  //   const goToPrevious = () => {
  //     const isFirstSlide = currentIndex === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   };
  //   const goToNext = () => {
  //     const isLastSlide = currentIndex === slides.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   };
  //   const goToSlide = (slideIndex: number) => {
  //     setCurrentIndex(slideIndex);
  //   };

  return (
    <>
      <div className="md:h-full    md:w-[80%] mx-auto ">
        <div className={`w-full h-full flex relative  bg-cover bg-center `}>
          <Swiper
            className=" w-full  certification-slider"
            spaceBetween={20}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            autoplay
            modules={[Pagination, A11y, Autoplay, Navigation]}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index} className="certification-slide">
                <motion.div
                  className="w-full h-full  bg-cover bg-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -350 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Image
                    className="w-full  border-deep-blue"
                    src={item.url}
                    fill
                    style={{
                      objectFit: "cover",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt="certificates images"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MultipleSlider2;
