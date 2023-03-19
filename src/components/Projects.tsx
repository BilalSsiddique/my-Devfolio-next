
// import reactdashboard2 from "../assets/projects/react-dashboard-2.png";
// import exchangerate from "../assets/projects/exchange-rate-api.png";
// import movieticketdemo from "../assets/projects/movie-ticket.png";
// import theme from "../assets/projects/theme-full.png";
// import domarray from "../assets/projects/dom-array-method-full.png";
import linkrepo from "../assets/linkIcon.svg";
import Link from "next/link";
import { Fragment } from "react";
import { projects } from "@/data/website-data";
import Image from "next/image";



const Projects = () => {
  return (
    <div className="flex flex-wrap  gap-y-5   justify-center md:justify-between    h-full w-full">
      {projects.map((project, idx) => (
        <div
          className="flex flex-col sm:flex-row w-[100%]    rounded-lg"
          key={idx}
        >
          <Image
            className=" w-full sm:w-[62%] order-2 border-black border-2  sm:border-2 sm:border-black  sm:rounded-r-lg  h-auto bg-cover bg-center object-cover"
            src={project.url}
            alt="images"
          />
          <div className="  sm:border-b-2 sm:border-t-2 sm:border-r-2 border-b-6    border-black font-playfair h-auto  sm:rounded-l-lg w-full sm:w-[38%]   flex justify-center ">
            <div className="flex flex-col w-full   items-start  ">
              <p className="bg-black font-opensans w-full rounded-tr-lg sm:rounded-tr-none rounded-tl-lg text-center md:text-left  md:pl-10 pt-3 ss:pt-6  text-[18px] sm:text-[20px] md:text-[27px] font-bold ">
                {project.name}
              </p>
              <div className="flex flex-col  rounded-bl-none sm:rounded-bl-lg h-full bg-black w-full md:text-left text-center  justify-between ss:py-2 md:py-5 pl-2 md:pl-10 pb-5 items-center md:items-start ">
                <p className="  font-opensans text max-[850px]:text-[12px] sm:text-[13px] md:text-[15px]">
                  {project.description}
                </p>
                <div className="font-opensans max-[850px]:text-[12px] sm:text-[13px]  md:text-[15px] h-[35%] md:h-[55%] flex items-end">
                  <div className="flex items-center -ml-6 ss:ml-0  gap-1">
                    <Image width={30} src={linkrepo} alt="next" />
                    <Link target="_blank" href={project.repo}>
                      Github Repo
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col  gap-2">
                  {/* <p className="text-xl font-extrabold">Tech Stack </p> */}
                  <div className="flex gap-2">
                    {project.stack.map((icon, idx) => (
                      <Fragment key={idx}>
                        <Image width={30} src={icon!} alt="react" />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
