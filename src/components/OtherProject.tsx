import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/data/website-data";
import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OtherProject = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-8 pt-6 w-full">
      {projects.map(
        (project, idx) =>
          idx >= 7 && (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group relative"
            >
              <div className="p-8 flex flex-col h-full w-full gap-6 glass-card backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 sm:hover:scale-105 transform-gpu">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiFolder size={35} className="text-yellow-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                      <Link target="_blank" href={project.repo}>
                        <FaGithub size={22} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                      <Link target="_blank" href={project.live ? project.live : "#"}>
                        <FiExternalLink size={22} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300" />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.stack.map((icon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 border border-white/10"
                    >
                      <Image 
                        width={22} 
                        height={22} 
                        src={icon!} 
                        alt="tech stack" 
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="h-1 w-full bg-gradient-rainbow opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-rainbow opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10 rounded-xl" />
            </motion.div>
          )
      )}
    </div>
  );
};

export default OtherProject;
