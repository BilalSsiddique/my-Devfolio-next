import React, { Fragment, useState } from "react";
import { experience } from "@/data/website-data";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const currentIndex = experience[index];

  return (
    <section className="font-outfit rounded-xl overflow-hidden glass-card backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12">
      <div className="flex sm:flex-row flex-col gap-8 md:gap-12">
        {/* Company Navigation */}
        <div className="relative flex sm:flex-col flex-row overflow-x-auto sm:overflow-visible sm:w-[250px] hide-scrollbar">
          {experience.map((exp, idx) => (
            <motion.button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`relative group px-4 py-3 text-left min-w-fit sm:w-full transition-all duration-300
                ${currentIndex.name === exp.name 
                  ? "text-yellow-400 font-medium border-yellow-400" 
                  : "text-gray-400 hover:text-white border-deep-blue"
                } max-[768px]:border-b-2 sm:border-l-2`}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Company Name */}
              <span className="text-base sm:text-lg relative">
                {exp.name}
              </span>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Title and Company */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {currentIndex.title}
                  </h3>
                  <span className="text-yellow-400 text-lg md:text-xl">
                    @ {currentIndex.name}
                  </span>
                </div>
                
                {/* Duration */}
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span>{currentIndex.from}</span>
                  <span>—</span>
                  <span>{currentIndex.to}</span>
                  <span className="text-yellow-400 ml-1">
                    {currentIndex.year}
                  </span>
                </p>
              </div>

              {/* Work Description */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentIndex.workDone.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-lg leading-none mt-[5px]">
                      ▹
                    </span>
                    <p className="text-gray-300 text-[15px] leading-relaxed flex-1">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
