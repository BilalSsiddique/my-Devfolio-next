import React, { Fragment, useState } from "react";
import { experience } from "@/data/website-data";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const currentIndex = experience[index];
  return (
    <section className=" font-outfit font-extralight rounded-md glass-navbar py-6 px-4 xs:p-8 md:p-16 h-full flex sm:flex-row flex-col">
      <div className="text-sm  xs:text-base sm:text-xl w-fit sm:w-[70%]  md:w-[40%] lg:w-[35%] text-left flex-row mb-8 sm:mb-0 flex sm:flex-col menu ">
        {experience.map((exp, index) => (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`max-[768px]:border-b-2 sm:border-l-2 border-deep-blue  pl-2 md:pl-5 sm:pt-4   text-left ${
              currentIndex.name === exp.name &&
              "border-yellow text-yellow font-semibold"
            }
          `}
          >
            {exp.name}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex gap-1  xs:gap-4 font-semibold text-[13px] xs:text-[17px] sm:text-[18px]">
          <p className="w-fit">{currentIndex.title}</p>
          <p className="text-yellow w-fit text-[11px] xs:text-lg leading-tight xs:leading-6">
            <span className="text-sm sm:text-lg">@</span> {currentIndex.name}
          </p>
        </div>
        <div className="flex gap-2 font-semibold text-[11px] xs:text-[14px] sm:text-[15px]">
          <p>{currentIndex.from}</p>

          <p>-</p>
          <p> {currentIndex.to}</p>
          <p className="text-yellow">{currentIndex.year}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 justify-center text-[13px] xs:text-[14px]  sm:text-[16px]">
          {currentIndex.workDone.map((item, idx) => (
            <Fragment key={idx}>
              <p className="list-item list-inside  "> {item}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
