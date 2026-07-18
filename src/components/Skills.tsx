import { motion } from "framer-motion";
import {
  SiAmazonaws,
  SiGithubactions,
  SiGrafana,
  SiNestjs,
  SiNextdotjs,
} from "react-icons/si";
import { HiOutlineChip, HiOutlineTerminal } from "react-icons/hi";
import { techStackGroups } from "@/data/website-data";

const groupIcons = [
  SiAmazonaws,
  SiGithubactions,
  SiGrafana,
  SiNestjs,
  SiNextdotjs,
  HiOutlineTerminal,
];

const Skills = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-rainbow opacity-[0.06] blur-3xl -z-10" />

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          ["Primary role", "Full-Stack Engineering"],
          ["Delivery model", "IaC + CI/CD + Observability"],
          ["Cloud focus", "AWS + DevOps ownership"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md"
          >
            <p className="font-outfit text-xs uppercase tracking-[0.18em] text-white/40">
              {label}
            </p>
            <p className="font-outfit mt-1 text-lg font-semibold text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {techStackGroups.map((group, index) => {
          const Icon = groupIcons[index] || HiOutlineChip;

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:border-blue/40 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-rainblue opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-deep-blue/80 text-blue shadow-lg">
                  <Icon className="text-2xl" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    {group.title}
                  </h3>
                  <p className="font-outfit mt-2 text-sm leading-relaxed text-white/55">
                    {group.summary}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-deep-blue/50 px-3 py-1.5 font-outfit text-xs text-white/75 transition-colors duration-300 group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
