import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { moreProjects } from "@/data/website-data";
import Image from "next/image";
import Link from "next/link";

const MoreProjects = () => {
  return (
    <div className="font-outfit ss:w-5/6 pb-24 mx-5 ss:mx-auto h-full mt-44 xs:mt-52 ">
      <div className="flex flex-col justify-start w-full ">
        <h2 className="font-bold text-5xl sm:text-7xl">Archive</h2>
        <p className="text-yellow">
          A big list of things I &apos; hve worked on
        </p>
        <table className="mt-20 table-auto border-separate border-spacing-4 sm:border-spacing-6">
          <thead>
            <tr className="text-left text-yellow ">
              <th>Year</th>
              <th>Title</th>
              <th className="max-[535px]:hidden">Stack</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {moreProjects.map((project, idx) => (
              <tr key={idx}>
                <td className="font-thin max-[352px]:text-[13px] text-sm sm:text-[16px]">
                  {project.year}
                </td>
                <td className="font-semibold sm:font-bold max-[352px]:text-[13px]  text-sm sm:text-[16px]">
                  {project.title}
                </td>
                <td key={idx} className="flex gap-2 max-[535px]:hidden">
                  {project.builtWith.map((icon, idx) => (
                    <Image key={idx} width={20} src={icon} alt="icons" />
                  ))}
                </td>
                <td>
                  <div className="flex gap-3">
                    <Link target="_blank" href={project.live}>
                      <FiExternalLink className="hover:text-yellow" size={20} />
                    </Link>
                    <Link target="_blank" href={project.repo}>
                      <FiGithub className="hover:text-yellow" size={20} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoreProjects;
