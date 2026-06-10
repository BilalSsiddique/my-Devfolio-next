import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
import profile from "../assets/profile-2.svg";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import {
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";
import { HiOutlineTerminal, HiOutlineCloud } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

const terminalLines = [
  { prefix: "$", text: "git push origin main", delay: 0 },
  {
    prefix: "→",
    text: "triggered: deploy-ecs.yml · run #312 · a3f8c2e",
    delay: 0.4,
    accent: true,
  },
  { prefix: "◆", text: "[1/4] ci — lint · unit tests · security scan", delay: 0.85, step: true },
  { prefix: "→", text: "all checks passed · 34s", delay: 1.2, accent: true },
  { prefix: "◆", text: "[2/4] build — docker buildx · multi-arch", delay: 1.55, step: true },
  {
    prefix: "→",
    text: "ecr push app:a3f8c2e · sha256:8f3a… · 220 MB",
    delay: 1.9,
    accent: true,
  },
  { prefix: "◆", text: "[3/4] infra — terraform apply (drift check)", delay: 2.25, step: true },
  { prefix: "→", text: "ecs task def :47 registered · no drift", delay: 2.6, accent: true },
  {
    prefix: "✓",
    text: "[4/4] deploy — 3/3 tasks healthy · otlp traces OK",
    delay: 3.0,
    success: true,
  },
];

const devOpsStack = [
  { name: "AWS", icon: SiAmazonaws, color: "text-orange-400" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-white" },
  { name: "Prometheus", icon: SiPrometheus, color: "text-red-400" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-300" },
];

const metrics = [
  { label: "Experience", value: "1+ Yr Cloud/DevOps" },
  { label: "CI/CD Impact", value: "80% Less Manual Work" },
  { label: "Docker Opt.", value: "930 MB → 220 MB" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
  const dispatch = useAppDispatch();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, index) =>
      setTimeout(() => setVisibleLines(index + 1), line.delay * 1000 + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden py-16 md:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,188,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,188,233,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue/10 blur-[100px]" />
        <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-red/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-yellow/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
        {/* Left — Copy & CTAs */}
        <div className="w-full lg:w-[52%] mt-24 md:mt-28 lg:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={fadeUp}
            className="flex flex-col items-center ss:items-start"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-outfit text-xs sm:text-sm text-white/70 tracking-wide">
                Open to DevOps & Cloud roles
              </span>
            </div>

            {/* Role label */}
            <div className="flex flex-wrap items-center justify-center ss:justify-start gap-x-4 gap-y-2 mb-4">
              <div className="flex items-center gap-2">
                <HiOutlineCloud className="text-blue text-lg" />
                <p className="font-outfit text-sm sm:text-base uppercase tracking-[0.2em] text-blue font-medium">
                  Junior DevOps / Cloud Engineer
                </p>
              </div>
              <div className="flex items-center gap-1 text-white/40">
                <MdOutlineLocationOn className="text-sm" />
                <span className="font-outfit text-xs sm:text-sm">Karachi, PK</span>
              </div>
            </div>

            {/* Name */}
            <h1 className="font-playfair text-[2.75rem] sm:text-6xl lg:text-[4.25rem] leading-[1.05] text-center ss:text-left">
              Bilal{" "}
              <span className="bg-gradient-rainblue bg-clip-text text-transparent">
                Siddique
              </span>
            </h1>

            {/* Tagline — from resume summary */}
            <p className="font-outfit mt-6 mb-8 text-sm sm:text-base text-white/60 text-center ss:text-left max-w-lg leading-relaxed">
              Architecting AWS infrastructure with Terraform, automating CI/CD via
              GitHub Actions, and building observability platforms with Prometheus,
              Grafana, Loki, Tempo, and OpenTelemetry across microservices.
            </p>

            {/* DevOps stack pills */}
            <div className="flex flex-wrap justify-center ss:justify-start gap-2.5 mb-8">
              {devOpsStack.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-outfit text-white/80 backdrop-blur-sm"
                >
                  <Icon className={`${color} text-base`} />
                  {name}
                </span>
              ))}
            </div>

            {/* Resume-backed metrics */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-8">
              {metrics.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center ss:text-left backdrop-blur-sm"
                >
                  <p className="font-outfit text-[10px] sm:text-xs uppercase tracking-wider text-white/40 mb-1">
                    {label}
                  </p>
                  <p className="font-outfit text-xs sm:text-sm font-medium text-yellow leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center ss:justify-start gap-3">
              <Link
                className="group font-outfit text-sm sm:text-base inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-6 py-3 font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_30px_rgba(36,203,255,0.35)]"
                href="/Bilal-Siddique-DevOps-Engineer.pdf"
                locale={false}
                target="_blank"
              >
                View Resume
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                className="font-outfit text-sm sm:text-base rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-blue/50 hover:bg-white/10"
                onClick={() => dispatch(setSelectedPage("contact"))}
                href="#contact"
              >
                Let&apos;s talk
              </Link>
            </div>

            <div className="mt-6">
              <SocialMediaIcons size={28} />
            </div>
          </motion.div>
        </div>

        {/* Right — Terminal + Profile */}
        <motion.div
          className="w-full lg:w-[48%] flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Terminal window */}
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a1f]/80 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-white/40">
                <HiOutlineTerminal className="text-sm" />
                <span className="font-outfit text-xs">~/infra · prod</span>
              </div>
              <div className="w-16" />
            </div>

            <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-xs min-h-[310px]">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  animate={
                    visibleLines > index
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -8 }
                  }
                  transition={{ duration: 0.3 }}
                  className="flex gap-3 mb-2.5 leading-relaxed"
                >
                  <span
                    className={`shrink-0 select-none ${
                      line.success
                        ? "text-emerald-400"
                        : line.step
                          ? "text-purple-400"
                          : line.accent
                            ? "text-blue"
                            : "text-yellow/80"
                    }`}
                  >
                    {line.prefix}
                  </span>
                  <span
                    className={
                      line.success
                        ? "text-emerald-400/90"
                        : line.step
                          ? "text-white/90 font-medium"
                          : line.accent
                            ? "text-white/70"
                            : "text-white/50"
                    }
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}
              {visibleLines >= terminalLines.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blue ml-1 align-middle"
                />
              )}
            </div>
          </div>

          {/* Profile card — resume role */}
          <div className="relative flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm w-full max-w-lg">
            <div className="relative shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-rainblue opacity-60 blur-sm" />
              <div className="relative rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 border-2 border-deep-blue bg-deep-blue">
                <Image
                  alt="Bilal Siddique"
                  src={profile}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="font-outfit min-w-0">
              <p className="text-sm sm:text-base font-semibold text-white truncate">
                Bilal Siddique
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                Code Reroute · Remote · Canada
              </p>
              <p className="text-[11px] sm:text-xs text-blue/80 mt-1">
                Junior DevOps / Cloud & Full-Stack Engineer
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["ECS", "EC2", "Loki", "Tempo", "OTLP"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2 py-0.5 rounded-md bg-blue/10 text-blue border border-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-outfit text-[10px] uppercase tracking-[0.25em] text-white/30">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 bg-blue rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
