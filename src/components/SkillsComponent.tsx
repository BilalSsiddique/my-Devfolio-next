import React from "react";
import Image from "next/image";

const SkillsComponent = ({ skill }: { skill: any }) => {
  return (
    <div className="sm:hover:scale-x-110 sm:transition sm:z-40   relative flex mt-20 flex-col glass flex-wrap text-center gap-3 items-center h-[130px]  w-[230px]  justify-center  p-5">
      <p className="text-[20px] font-outfit font-bold mb-1">{skill.alt}</p>
      <div className=" flex justify-center  items-center absolute mx-auto h-[75px] w-[75px] shadow shadow-dark-grey   top-[-50px] rounded-full">
        <Image
          className="bg-cover "
          src={skill.Image}
          alt={`${skill.alt}-icon`}
          width={50}
          priority
        />
      </div>
      <div className=" h-0.5  w-full bg-gradient-rainbow rounded-full "></div>
    </div>
  );
};

export default SkillsComponent;
