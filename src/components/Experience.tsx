import React, { Fragment, useState } from "react";
import { experience } from "@/data/website-data";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const currentIndex = experience[index];
  return (
    <section className="font-outfit font-extralight rounded-md glass-navbar py-6 px-4 xs:p-8 md:p-16 h-full flex sm:flex-row flex-col">
      {/* Experience */}
      <div className="  xs:text-xl w-full xs:w-[70%]  md:w-[40%] lg:w-[35%] text-left flex-row mb-14 sm:mb-0 flex sm:flex-col menu ">
        <button
          onClick={() => setIndex(0)}
          className={` max-[768px]:border-b-2  pl-2 md:pl-5 text-left border-b-1 sm:border-l-2 border-deep-blue  ${
            currentIndex.name === "Radical X" && "border-yellow"
          }
          ${currentIndex.name === "Radical X" && "text-yellow"}
          ${currentIndex.name === "Radical X" && "font-semibold"}
          
          `}
        >
          Radical X &nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button
          onClick={() => setIndex(1)}
          className={`max-[768px]:border-b-2 sm:border-l-2 border-deep-blue  pl-2 md:pl-5 sm:pt-4   text-left ${
            currentIndex.name === "ZHAB Developers" && "border-yellow"
          }
          ${currentIndex.name === "ZHAB Developers" && "text-yellow"}
          ${currentIndex.name === "ZHAB Developers" && "font-semibold"}
          `}
        >
          ZHAB Developers
        </button>
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex gap-2 xs:gap-4 font-semibold text-[14px] xs:text-[17px] sm:text-[18px]">
          <p>{currentIndex.title}</p>
          <p className="text-yellow leading-tight xs:leading-6">
            <span className="text-[18px] ">@</span> {currentIndex.name}
          </p>
        </div>
        <div className="flex gap-2 font-semibold text-[14px] xs:text-[14px] sm:text-[15px]">
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
