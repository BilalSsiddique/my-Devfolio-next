import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { moreProjects } from "@/data/website-data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MoreProjects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-outfit ss:w-5/6 pb-24 mx-5 ss:mx-auto h-full mt-32"
    >
      <div className="flex flex-col justify-start w-full">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-5xl sm:text-7xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Archive
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-yellow-400 mt-2 text-lg"
        >
          A big list of things I&apos;ve worked on
        </motion.p>

        <div className="mt-20 overflow-x-auto glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
          <table className="w-full min-w-[600px] border-separate border-spacing-0">
            <thead>
              <tr className="text-left">
                <th className="pb-6 text-yellow-400 font-medium px-4">Year</th>
                <th className="pb-6 text-yellow-400 font-medium px-4">Title</th>
                <th className="pb-6 text-yellow-400 font-medium px-4 sm:table-cell hidden">Stack</th>
                <th className="pb-6 text-yellow-400 font-medium px-4">Links</th>
              </tr>
            </thead>
            <tbody>
              {moreProjects.map((project, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  key={idx}
                  className="group hover:bg-white/5 transition-colors duration-300"
                >
                  <td className="py-4 px-4 text-gray-400 text-sm sm:text-base border-t border-white/5">
                    {project.year}
                  </td>
                  <td className="py-4 px-4 font-medium text-white group-hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base border-t border-white/5">
                    {project.title}
                  </td>
                  <td className="py-4 px-4 sm:table-cell hidden border-t border-white/5">
                    <div className="flex items-center gap-3">
                      {project.builtWith.map((icon, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -2 }}
                          className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                        >
                          <Image 
                            width={16} 
                            height={16} 
                            src={icon} 
                            alt="tech stack"
                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Link 
                          target="_blank" 
                          href={project.live}
                          className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                          <FiExternalLink className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" size={18} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Link 
                          target="_blank" 
                          href={project.repo}
                          className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                          <FiGithub className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" size={18} />
                        </Link>
                      </motion.div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default MoreProjects;
