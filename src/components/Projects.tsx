import linkrepo from "../assets/linkIcon.svg";
import Link from "next/link";
import { Fragment } from "react";
import { projects } from "@/data/website-data";
import Image from "next/image";
import { motion } from "framer-motion";
import OtherProject from "./OtherProject";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";

const Projects = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 w-full">
        {projects.map(
          (project, idx) =>
            idx < 7 && (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-xl overflow-hidden glass-card backdrop-blur-md bg-opacity-10 bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.url!}
                    alt={project.name}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex flex-col flex-grow p-6 bg-gradient-to-b from-transparent to-black/20">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                      <Link 
                        target="_blank" 
                        href={project.repo}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                      >
                        <Image width={20} height={20} src={linkrepo} alt="github" className="opacity-70 group-hover:opacity-100" />
                        View Code
                      </Link>
                    </div>
                    <Link
                      href={project.live!}
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white rounded-md hover:from-purple-500/50 hover:to-pink-500/50 backdrop-blur-sm border border-white/10 transition-all duration-300 text-sm font-medium"
                    >
                      {project.live ? "Live Demo" : "Coming Soon"}
                    </Link>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((icon, idx) => (
                      <div
                        key={idx}
                        className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 border border-white/10"
                      >
                        <Image width={20} height={20} src={icon} alt="tech" className="opacity-70 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>

      <motion.div 
        className="flex flex-col justify-center items-center mt-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Other Noteworthy Projects</h2>
        <Link
          href="/moreProjects"
          onClick={() => dispatch(setSelectedPage("projects"))}
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-lg font-medium flex items-center gap-2"
        >
          View the Archive 
          <span className="text-xl">→</span>
        </Link>
        <motion.div
          className="w-full mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <OtherProject />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
