import React from "react";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock } from "react-icons/fi";
import { moreProjects, projects } from "@/data/website-data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const archiveProjects = [
  ...projects.map((project) => ({
    year: project.internal ? "Internal" : "Project",
    title: project.name,
    category: project.category || "Project",
    description: project.description,
    builtWith: project.stack,
    repo: project.repo,
    live: project.live,
    internal: project.internal,
  })),
  ...moreProjects.map((project) => ({
    year: project.year,
    title: project.title,
    category: "Archive",
    description: "",
    builtWith: project.builtWith,
    repo: project.repo,
    live: project.live,
    internal: false,
  })),
];

const MoreProjects = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-outfit ss:w-5/6 pb-24 mx-5 ss:mx-auto min-h-screen mt-32"
    >
      <div className="flex flex-col gap-8">
        <Link
          href="/#projects"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70 transition duration-300 hover:border-blue/40 hover:text-white"
        >
          <FiArrowLeft />
          Back to projects
        </Link>

        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="font-playfair text-5xl sm:text-7xl text-white">
              Project Archive
            </h1>
            <p className="mt-3 max-w-2xl text-white/55">
              A full list of internal tools, cloud systems, product builds,
              backend APIs, and earlier experiments.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-3xl font-bold text-yellow">
              {archiveProjects.length}
            </p>
            <p className="text-sm text-white/45">total projects</p>
          </div>
        </motion.header>

        <div className="hidden overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md lg:block">
          <table className="w-full min-w-[900px] border-separate border-spacing-0">
            <thead>
              <tr className="text-left">
                <th className="pb-5 px-4 text-sm font-medium text-yellow">Year</th>
                <th className="pb-5 px-4 text-sm font-medium text-yellow">Project</th>
                <th className="pb-5 px-4 text-sm font-medium text-yellow">Category</th>
                <th className="pb-5 px-4 text-sm font-medium text-yellow">Stack</th>
                <th className="pb-5 px-4 text-sm font-medium text-yellow">Links</th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((project, idx) => (
                <motion.tr
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.5) }}
                  key={`${project.title}-${idx}`}
                  className="group transition-colors duration-300 hover:bg-white/5"
                >
                  <td className="border-t border-white/5 px-4 py-4 text-sm text-white/40">
                    {project.year}
                  </td>
                  <td className="border-t border-white/5 px-4 py-4">
                    <p className="font-semibold text-white transition-colors duration-300 group-hover:text-yellow">
                      {project.title}
                    </p>
                    {project.description && (
                      <p className="mt-1 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/45">
                        {project.description}
                      </p>
                    )}
                  </td>
                  <td className="border-t border-white/5 px-4 py-4 text-sm text-blue">
                    {project.category}
                  </td>
                  <td className="border-t border-white/5 px-4 py-4">
                    <TechStack icons={project.builtWith} />
                  </td>
                  <td className="border-t border-white/5 px-4 py-4">
                    <ProjectLinks
                      repo={project.repo}
                      live={project.live}
                      internal={project.internal}
                    />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {archiveProjects.map((project, idx) => (
            <motion.article
              key={`${project.title}-card-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.5) }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/40">{project.year}</p>
                </div>
                <ProjectLinks
                  repo={project.repo}
                  live={project.live}
                  internal={project.internal}
                />
              </div>
              {project.description && (
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {project.description}
                </p>
              )}
              <div className="mt-4">
                <TechStack icons={project.builtWith} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

const TechStack = ({ icons }: { icons: any[] }) => (
  <div className="flex flex-wrap items-center gap-2">
    {icons.slice(0, 8).map((icon, idx) => (
      <div
        key={idx}
        className="rounded-md border border-white/10 bg-white/5 p-1.5"
      >
        <Image
          width={16}
          height={16}
          src={icon}
          alt="tech stack"
          className="opacity-75"
        />
      </div>
    ))}
  </div>
);

const ProjectLinks = ({
  repo,
  live,
  internal,
}: {
  repo?: string;
  live?: string;
  internal?: boolean;
}) => {
  if (!repo && !live) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/45">
        <FiLock />
        {internal ? "Internal" : "Private"}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {live && (
        <Link
          target="_blank"
          href={live}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition duration-300 hover:border-yellow/40 hover:text-yellow"
        >
          <FiExternalLink size={18} />
        </Link>
      )}
      {repo && (
        <Link
          target="_blank"
          href={repo}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition duration-300 hover:border-yellow/40 hover:text-yellow"
        >
          <FiGithub size={18} />
        </Link>
      )}
    </div>
  );
};

export default MoreProjects;
