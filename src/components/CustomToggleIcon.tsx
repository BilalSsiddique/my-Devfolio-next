import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const CustomToggleIcon = ({ gridSwitch, setGridSwitch }: any) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  console.log("switch", gridSwitch);

  const handleGridViewToggle = () => {
    
    setGridSwitch(!gridSwitch)
  };

  return (
    <button

      onClick={handleGridViewToggle}
      type="button"
    >
      <div className="relative w-[50px] bg-white h-[20px] rounded-full ">
        <div
          className={`absolute w-[15px] h-[16px] top-[2px]  ${
            gridSwitch || !isAboveMediumScreens ? "right-[2px] " : "left-[2px]"
          }  rounded-full  bg-gradient-rainbow`}
        ></div>
      </div>
    </button>
  );
};

export default CustomToggleIcon;
