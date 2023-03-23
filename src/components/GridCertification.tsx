
import React from "react";
import Image from "next/image";

const GridCertification = ({ slides }: any) => {
  return (
    <div className="grid gap-2 grid-col-1 xs:grid-cols-2  p-2 ">
      {slides.map((image: any, idx: number) => (
        <div
          className={`flex 
        ${
          image.classname === "design-javascript"
            ? "custom-grid-javascript"
            : ""
        }
         ${image.classname === "design-react" ? "custom-grid" : ""} 
         ${image.classname === "design-version" ? "custom-grid-version" : ""} 
           
           items-center  p-2 glass `}
          key={idx}
        >
          <Image
            className={` ${
              image.classname ? "custom-grid-image" : ""
            } md:w-[700px] md:mx-auto   border-deep-blue `}
            src={image.url}
            width={400}
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            alt="images"
          />
        </div>
      ))}
    </div>
  );
};

export default GridCertification;
