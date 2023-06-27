import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion'
import { tectStackIcons } from "@/data/website-data";

const Skills = () => {
  
  return (
    <div
      className="  flex   flex-wrap justify-center  xs:justify-between  items-center h-auto gap-x-3 xs:gap-x-4 md:gap-x-8 gap-y-14 w-full"
    >
      {tectStackIcons.map((iconImage, index) => {
        return (
          <div
            className="sm:hover:scale-x-105 sm:transition sm:z-40   relative flex flex-col glass flex-wrap text-center gap-3 items-center h-[130px] w-[170px] max-[535px]:w-[200px] max-[667px]:w-[230px] md:w-[200px]   justify-center  p-5"
            key={index}
          >
            <p className="text-[20px] font-outfit font-bold mb-1">
              {iconImage.alt}
            </p>
            <motion.div
              style={{ willChange: "opacity, transform" }}
              className=" flex justify-center  items-center absolute mx-auto h-[75px] w-[75px] shadow shadow-dark-grey   top-[-50px] rounded-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="bg-cover "
                src={iconImage.Image}
                alt={`${iconImage.alt}-icon`}
                width={50}
                priority
              />
            </motion.div>
            <div className=" h-0.5  w-full bg-gradient-rainbow rounded-full "></div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
