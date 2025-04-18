import React from "react";
import { slides } from "@/data/website-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay, A11y, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

const MultipleSlider2 = () => {
  return (
    <div className="h-full w-full md:w-[90%] mx-auto">
      <Swiper
        className="certification-slider h-full"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, A11y, Autoplay, Navigation]}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="certification-slide w-[85%] sm:w-[75%] md:w-[65%] h-full">
            <motion.div
              className="relative h-full group rounded-xl overflow-hidden glass-card backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Certificate Image Container */}
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  src={item.url}
                  alt="Certificate"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 75vw, 65vw"
                  priority
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Rainbow Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-gradient-rainblue opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-rainbow opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultipleSlider2;
