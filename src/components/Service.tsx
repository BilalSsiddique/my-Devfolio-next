import React from "react";
import Image from "next/image";
import type { services } from "@/data/website-data";
import { useState } from "react";
import Link from "next/link";

const Service = ({ item }: { item: services }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentTech = item.techStack[selectedIndex];

  return (
    <div className="flex flex-col  sm:flex-row  w-full ">
      <Image
        src={item.image}
        alt="gig-image "
        className="object-cover  sm:rounded-l-xl w-full sm:w-1/2 "
      />

      <div className="glass-navbar  rounded-b-xl sm:rounded-b-none sm:rounded-br-xl  sm:rounded-r-xl p-5 overflow-hidden w-full sm:w-1/2   flex items-start space-y-5 flex-col">
        <h1 className="font-extrabold text-xl text-yellow">{item.name}</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-x-2 sm:gap-x-4">
            {item.tech?.map((techName, id) => (
              <h3
                key={id}
                onClick={() => setSelectedIndex(id)}
                className={`glass-navbar p-1 sm:p-1.5  cursor-pointer  shadow-inner font-extrabold text-[12px] sm:text-sm md:text-lg self-start ${
                  selectedIndex === id && "text-yellow bg-none shadow-3xl"
                }  `}
              >
                {techName}
              </h3>
            ))}
          </div>
          <div className=" flex  gap-2 flex-wrap items-center">
            {currentTech.map((tech, index) => (
              <p
                className="glass-navbar text-[12px] sm:text-sm  shadow-inner  p-1  "
                key={index}
              >
                {tech}
              </p>
            ))}
          </div>
          <Link
            className="text-white w-fit rounded-r-sm bg-gradient-rainblue  py-0.5 px-0.5 text-center  flex items-center justify-center   border-1   border-deep-blue "
            href="/#contact"
          >
            <div className="font-semibold  tracking-widest text-[13px] sm:justify-end  sm:text-[15px] bg-deep-blue hover:text-red transition duration-500  sm:h-[25px] h-full flex items-center justify-center  xs:px-1 font-outfit">
              Hire Me
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
