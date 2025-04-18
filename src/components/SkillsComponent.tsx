import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillsComponent = ({ skill }: { skill: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group w-full mt-14"
    >
      <div className="sm:hover:scale-105 transform-gpu sm:transition-all duration-300 ease-out relative flex flex-col glass-card backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden h-32 w-full">
        <div className="w-full h-full pb-6 px-4">
          {/* Skill Name */}
          <div className="flex w-full h-full mt-3 flex-col items-center justify-end"> 
          <h3 className="text-xl font-outfit font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
            {skill.alt}
          </h3>
          </div>
          
          {/* Icon Container */}
          <motion.div 
            className="absolute top-1 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image
                className="transition-all duration-300 group-hover:scale-110 object-contain"
                src={skill.Image}
                alt={`${skill.alt}-icon`}
                fill
                sizes="40px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Rainbow Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-1 w-full bg-gradient-rainbow opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-rainbow opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10 rounded-xl" />
    </motion.div>
  );
};

export default SkillsComponent;