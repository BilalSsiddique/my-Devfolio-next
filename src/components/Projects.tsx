import Link from "next/link";
import { projects } from "@/data/website-data";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import OtherProject from "./OtherProject";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLock,
} from "react-icons/fi";
import {
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineCloud,
  HiOutlineCode,
} from "react-icons/hi";

const FEATURED_COUNT = 6;

const projectStats = [
  { value: "AWS", label: "ECS, EC2, CloudWatch, Cost Explorer" },
  { value: "OTLP", label: "logs, metrics, traces, correlation" },
  { value: "Full-stack", label: "dashboards, APIs, and product UIs" },
];

const caseStudyHighlights = [
  {
    icon: HiOutlineCloud,
    title: "Infrastructure work",
    text: "AWS deployments, Docker runtime decisions, Terraform workflows, and CI/CD automation.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Operational visibility",
    text: "Dashboards for cluster health, logs, costs, active resources, and microservice traces.",
  },
  {
    icon: HiOutlineCode,
    title: "Product delivery",
    text: "Admin panels, backend APIs, ecommerce flows, and responsive interfaces.",
  },
];

const ProjectCover = ({
  name,
  url,
  internal,
}: {
  name: string;
  url?: typeof projects[0]["url"];
  internal?: boolean;
}) => {
  if (url) {
    return (
      <Image
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={url}
        alt={name}
        fill
        sizes="(min-width: 1060px) 50vw, 100vw"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_25%_20%,rgba(44,188,233,0.28),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(220,68,146,0.24),transparent_32%),linear-gradient(135deg,#010026,#0b0a3a)]">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-outfit text-xs uppercase tracking-[0.2em] text-white/45 backdrop-blur-sm">
        {internal ? "Internal system" : "Engineering build"}
      </span>
    </div>
  );
};

const Projects = () => {
  const dispatch = useAppDispatch();
  const [caseStudyProject, setCaseStudyProject] = useState<
    typeof projects[0] | null
  >(null);
  const featuredProjects = projects.slice(0, FEATURED_COUNT);
  const leadProject = featuredProjects[0];
  const supportingProjects = featuredProjects.slice(1);

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-rainbow opacity-[0.06] blur-3xl -z-10" />

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {projectStats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md"
          >
            <p className="font-outfit text-lg font-semibold text-yellow">
              {stat.value}
            </p>
            <p className="mt-1 font-outfit text-sm leading-relaxed text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {caseStudyHighlights.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-deep-blue/70 text-blue">
              <Icon className="text-2xl" />
            </div>
            <h3 className="mt-4 font-outfit text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 font-outfit text-sm leading-relaxed text-white/50">
              {text}
            </p>
          </div>
        ))}
      </div>

      {leadProject && (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="group mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <ProjectCover
                name={leadProject.name}
                url={leadProject.url}
                internal={leadProject.internal}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
              {leadProject.internal && (
                <span className="absolute left-4 top-4 rounded-lg border border-yellow/20 bg-yellow/10 px-3 py-1.5 font-outfit text-xs font-medium text-yellow backdrop-blur-md">
                  Private startup work
                </span>
              )}
            </div>

            <div className="p-6 md:p-8">
              <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
                Featured case study
              </p>
              <h3 className="mt-2 font-playfair text-3xl md:text-4xl text-white">
                {leadProject.name}
              </h3>
              <p className="mt-3 font-outfit text-sm font-semibold text-yellow">
                {leadProject.impact}
              </p>
              <p className="mt-5 font-outfit text-base leading-relaxed text-white/65">
                {leadProject.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Running in staging on EC2",
                  "Built to catch bugs before launch",
                  "Cost-aware setup for startup constraints",
                  "Planned production rollout on ECS",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-lg text-yellow" />
                    <span className="font-outfit text-sm text-white/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {leadProject.stack.map((icon, stackIdx) => (
                  <div
                    key={stackIdx}
                    className="rounded-lg border border-white/10 bg-deep-blue/50 p-2"
                  >
                    <Image
                      width={22}
                      height={22}
                      src={icon}
                      alt="Technology used"
                      className="opacity-80"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ProjectAction project={leadProject} />
                {leadProject.caseStudy?.enabled && (
                  <button
                    onClick={() => setCaseStudyProject(leadProject)}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-5 py-3 font-outfit font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_24px_rgba(36,203,255,0.3)]"
                  >
                    View Case Study
                    <FiArrowUpRight />
                  </button>
                )}
                <Link
                  href="/#contact"
                  onClick={() => dispatch(setSelectedPage("contact"))}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-outfit font-semibold text-white transition duration-300 hover:border-blue/50 hover:bg-white/10"
                >
                  Build something similar
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {supportingProjects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:border-blue/35 hover:bg-white/[0.07]"
          >
            <div className="relative h-52 overflow-hidden">
              <ProjectCover
                name={project.name}
                url={project.url}
                internal={project.internal}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/85 via-deep-blue/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-deep-blue/75 px-3 py-1.5 font-outfit text-xs text-white/65 backdrop-blur-md">
                {project.category || "Project"}
              </span>
            </div>

            <div className="p-5">
              <div className="min-h-[144px]">
                <h3 className="font-playfair text-2xl leading-tight text-white transition-colors duration-300 group-hover:text-yellow">
                  {project.name}
                </h3>
                {project.impact && (
                  <p className="mt-2 font-outfit text-sm font-semibold text-blue">
                    {project.impact}
                  </p>
                )}
                <p className="mt-3 font-outfit text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((icon, stackIdx) => (
                  <div
                    key={stackIdx}
                    className="rounded-lg border border-white/10 bg-deep-blue/50 p-1.5"
                  >
                    <Image
                      width={20}
                      height={20}
                      src={icon}
                      alt="Technology used"
                      className="opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <ProjectAction project={project} compact />
                {project.caseStudy?.enabled && (
                  <button
                    onClick={() => setCaseStudyProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-4 py-2 font-outfit text-sm font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_20px_rgba(36,203,255,0.25)]"
                  >
                    Case Study
                    <FiArrowUpRight />
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-20 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
              Archive
            </p>
            <h2 className="mt-2 font-playfair text-3xl text-white">
              More engineering work
            </h2>
            <p className="mt-2 max-w-2xl font-outfit text-sm leading-relaxed text-white/50">
              Smaller builds, experiments, and earlier product work across
              frontend, backend, data, and ecommerce.
            </p>
          </div>

          <Link
            href="/moreProjects"
            onClick={() => dispatch(setSelectedPage("projects"))}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-outfit font-semibold text-white transition duration-300 hover:border-yellow/50 hover:bg-white/10"
          >
            View full archive
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="mt-8">
          <OtherProject featuredCount={FEATURED_COUNT} limit={3} />
        </div>
      </motion.div>

      {caseStudyProject && (
        <ProjectCaseStudy
          project={caseStudyProject}
          onClose={() => setCaseStudyProject(null)}
        />
      )}
    </div>
  );
};

const ProjectAction = ({
  project,
  compact = false,
}: {
  project: typeof projects[0];
  compact?: boolean;
}) => {
  if (project.internal) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 font-outfit font-semibold text-white/50 ${
          compact ? "px-4 py-2 text-sm" : "px-5 py-3"
        }`}
      >
        <FiLock />
        Internal tool
      </span>
    );
  }

  if (project.live) {
    return (
      <Link
        href={project.live}
        target="_blank"
        className={`inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue font-outfit font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_24px_rgba(36,203,255,0.3)] ${
          compact ? "px-4 py-2 text-sm" : "px-5 py-3"
        }`}
      >
        {project.live.includes("github.com") ? (
          <>
            View repo
            <FiGithub />
          </>
        ) : (
          <>
            Live demo
            <FiExternalLink />
          </>
        )}
      </Link>
    );
  }

  if (project.repo) {
    return (
      <Link
        href={project.repo}
        target="_blank"
        className={`inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 font-outfit font-semibold text-white transition duration-300 hover:border-blue/50 hover:bg-white/10 ${
          compact ? "px-4 py-2 text-sm" : "px-5 py-3"
        }`}
      >
        View code
        <FiGithub />
      </Link>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 font-outfit font-semibold text-white/45 ${
        compact ? "px-4 py-2 text-sm" : "px-5 py-3"
      }`}
    >
      Private repository
    </span>
  );
};

export default Projects;
