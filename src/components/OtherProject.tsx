import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/data/website-data";
import { Fragment } from "react";
import Image from "next/image";

const OtherProject = () => {
  return (
    <div className="flex flex-wrap justify-center max-[460px]:px-0 px-10 sm:px-0  gap-8 pt-6 w-full">
      {projects.map(
        (project, idx) =>
          idx >= 3 && (
            <div
              key={idx}
              className="p-8 flex glass-navbar    flex-col    sm:max-w-[340px] gap-10"
            >
              <div className="flex justify-between ">
                <FiFolder size={35} className="hover:text-yellow" />
                <div className="flex gap-3">
                  <Link target="_blank" href={project.repo}>
                    <FaGithub size={22} className="hover:text-yellow" />
                  </Link>
                  <Link target="_blank" href={project.live}>
                    <FiExternalLink size={22} className="hover:text-yellow" />
                  </Link>
                </div>
              </div>

              <div>
                <p className=" sm:text-lg text-yellow font-semibold">
                  {project.name}
                </p>
                <p className="mt-2 text-[13px] sm:text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center  gap-2 ">
                {project.stack.map((icon, idx) => (
                  <Fragment key={idx}>
                    <Image width={27} src={icon!} alt="react" />
                  </Fragment>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default OtherProject;
