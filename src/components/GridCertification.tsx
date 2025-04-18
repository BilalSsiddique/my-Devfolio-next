import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GridCertification = ({ slides }: any) => {
  return (
    <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 p-4">
      {slides.map((image: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`group relative ${
            image.classname === "design-javascript"
              ? "custom-grid-javascript"
              : image.classname === "design-react"
              ? "custom-grid"
              : image.classname === "design-version"
              ? "custom-grid-version"
              : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-xl glass-card backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
            {/* Certificate Image */}
            <motion.div
              className="relative aspect-[4/3]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="w-full h-full object-cover transition-transform duration-500"
                src={image.url}
                alt="Certificate"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Rainbow Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="h-1 w-full bg-gradient-rainbow opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-rainbow opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10 rounded-xl" />
        </motion.div>
      ))}
    </div>
  );
};

export default GridCertification;
