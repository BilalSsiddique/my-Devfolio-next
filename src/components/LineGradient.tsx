import React from 'react'

const LineGradient = ({ID='skills', width="w-full",section='My Tech Stack'}) => {
  return (
    <div id={ID} className={`h-0.5 ${width} relative bg-gradient-rainblue `}>
      <div className="absolute top-0.5 z-10 w-0.5 h-8 glass left-[50%]  ">
        <div className=" absolute top-8 right-[-49px] w-[100px] h-[40px] ">
          <div className="absolute z-25 font-extrabold top-[1%]  flex items-center justify-center left-[-34px] md:left-[-45px] md:right-0  rounded-full font-outfit text-[18px] md:text-2xl glass    text-white p-5 h-[40px] w-[170px] md:h-[40px] md:w-[200px]  transition duration-500">
            <p>{section}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineGradient