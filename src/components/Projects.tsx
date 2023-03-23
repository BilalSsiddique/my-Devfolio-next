
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
          className="flex  flex-col hover:relative sm:flex-row w-[100%]    rounded-lg"
          key={idx}
        >
          <Image
            className=" sm:hover:scale-125 sm:hover:z-50  sm:hover:absolute  sm:hover:left-0 sm:hover:right-0   sm:hover:ml-auto sm:hover:mr-auto sm:hover:bg-cover sm:hover:object-cover      w-full sm:w-[62%] xs:order-2 max-[480px]:border-0 border-black border-2  sm:border-2 sm:border-black  max-[480px]:rounded-tl-lg max-[480px]:rounded-tr-lg  sm:rounded-r-lg  h-auto bg-cover bg-center object-fill"
            src={project.url}
            alt="images"
          />
          <div className="  sm:border-b-2 sm:border-t-2 sm:border-r-2 xs:border-b-2    xs:border-black font-playfair h-auto  sm:rounded-l-lg w-full sm:w-[38%]   flex justify-center ">
            <div className="flex flex-col w-full   items-start  ">
              <p className="glass-navbar max-[480px]:font-playfair  xs:bg-black font-opensans w-full xs:rounded-tr-lg sm:rounded-tr-none xs:rounded-tl-lg text-center md:text-left  md:pl-10 max-[480px]:pb-4 pt-3 ss:pt-6  text-[18px] sm:text-[20px] md:text-[27px] font-bold ">
                {project.name}
              </p>
              <div className="flex flex-col max-[480px]:rounded-b-lg rounded-bl-none sm:rounded-bl-lg h-full glass-navbar xs:bg-black w-full md:text-left text-center  justify-between ss:py-2 md:py-5 pl-2 md:pl-10 pb-5 gap-2 xs:gap-2 items-center md:items-start ">
                <p className=" max-[480px]:pb-2 max-[480px]:font-playfair font-opensans text max-[850px]:text-[12px] sm:text-[13px] md:text-[15px]">
                  {project.description}
                </p>
                <div className="max-[480px]:font-playfair font-opensans max-[850px]:text-[12px] sm:text-[13px]  md:text-[15px] /*h-[35%] md:h-[55%]*/  flex items-center gap-4 sm:gap-4 md:gap-4 ">
                  <div className="flex items-center  ss:ml-0  max-[480px]:pb-2 gap-1">
                    <Image width={30} src={linkrepo} alt="next" />
                    <Link target="_blank" href={project.repo}>
                      Github Repo
                    </Link>
                  </div>
                  <Link
                    className="text-white rounded-r-sm bg-gradient-rainblue font-playfair   py-0.5 px-0.5 text-center  flex items-center justify-center   border-1   border-deep-blue w-auto"
                    href={project.live}
                    target="_blank"
                  >
                    <div className="text-[13px] sm:justify-end  sm:text-[15px] bg-deep-blue hover:text-red transition duration-500 w-[60px] sm:w-[60px] sm:h-[25px] h-full flex items-center justify-center  xs:px-2.5 font-playfair">
                      Demo
                    </div>
                  </Link>
                  
                </div>
                <div className="flex items-center  gap-2 ">
                  {/* <p className="text-xl font-extrabold">Tech Stack </p> */}

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
      ))}
    </div>
  );
};

export default Projects;
