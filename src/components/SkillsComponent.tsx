import React from "react";
import Image from "next/image";

const SkillsComponent = ({ skill }: { skill: any }) => {
  return (
    <div className="sm:hover:scale-x-110  sm:transition sm:z-40   relative flex mt-16 md:mt-8 flex-col glass flex-wrap text-center gap-3 items-center h-[130px] w-[230px] md:w-full  justify-center ">
      <div className="w-full flex place-items-center bg-inherit flex-col">
        <p className="text-[20px] font-outfit font-bold mb-1">{skill.alt}</p>
        <div className="bg-inherit flex justify-center  items-center absolute mx-auto h-[70px] w-[70px] shadow shadow-dark-grey   top-[-50px] rounded-full">
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
    </div>
  );
};

export default SkillsComponent;
