import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import {
  SiAmazonaws,
  SiDocker,
  SiGrafana,
  SiNestjs,
  SiNextdotjs,
  SiTerraform,
} from "react-icons/si";
import {
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineCloud,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineServer,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const servicesData = [
  {
    title: "DevOps & Cloud Infrastructure",
    eyebrow: "Production infrastructure",
    shortDesc: "AWS systems that are automated, observable, and cost-aware.",
    description:
      "For startups and product teams that need reliable AWS infrastructure without manual release work. I design the path from code push to deployed service, with Terraform, Docker, GitHub Actions, and clear operating visibility.",
    outcomes: [
      "Infrastructure as Code with Terraform",
      "ECS or EC2 deployment strategy",
      "Docker image and runtime optimization",
      "CloudWatch, networking, IAM, ALB, ACM, and ECR setup",
    ],
    tech: ["AWS", "Terraform", "Docker", "GitHub Actions", "ECS", "EC2"],
    proof: "Reduced Docker image size from 930 MB to 220 MB and cut manual release effort by 80%.",
    icon: HiOutlineCloud,
    accentIcon: SiAmazonaws,
  },
  {
    title: "Observability Stack",
    eyebrow: "Metrics, logs, traces",
    shortDesc: "Find production issues faster with connected telemetry.",
    description:
      "I set up practical observability for microservices: metrics in Prometheus, dashboards in Grafana, logs in Loki, traces in Tempo, and OpenTelemetry instrumentation that links the story together.",
    outcomes: [
      "Prometheus, Grafana, Loki, and Tempo deployment",
      "OpenTelemetry and OTLP instrumentation",
      "Log-to-trace correlation for faster debugging",
      "Dashboards for service health and operational visibility",
    ],
    tech: ["Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry", "OTLP"],
    proof: "Built log-to-trace workflows that help engineers jump from an error log to the exact distributed trace.",
    icon: HiOutlineChartBar,
    accentIcon: SiGrafana,
  },
  {
    title: "Internal Admin Dashboards",
    eyebrow: "Ops and SaaS control panels",
    shortDesc: "Dashboards that make infrastructure and business operations visible.",
    description:
      "I build focused admin tools for teams that need real-time control: AWS resource monitoring, user management, cost analytics, Cloudflare controls, log viewers, staff tools, and reporting workflows.",
    outcomes: [
      "Next.js admin panels with clean UX",
      "AWS SDK integrations for CloudWatch and Cost Explorer",
      "User, employee, restaurant, reservation, or applicant management",
      "Bulk email workflows with segmented audiences",
    ],
    tech: ["Next.js", "NestJS", "AWS SDK", "CloudWatch", "Resend", "Cloudflare"],
    proof: "Built ECS Monitor Pro for cluster health, cost visibility, ECS logs, geo-blocking, and user operations.",
    icon: HiOutlineLightningBolt,
    accentIcon: SiNextdotjs,
  },
  {
    title: "Backend API Development",
    eyebrow: "APIs and service layers",
    shortDesc: "Secure APIs and backend services for product features.",
    description:
      "I develop backend services with clean REST APIs, authentication flows, database modeling, queue/cache integration, and deployment-ready structure for modern web and SaaS products.",
    outcomes: [
      "REST API design and implementation",
      "PostgreSQL, MongoDB, Redis, and RabbitMQ integration",
      "Authentication, media, and business logic workflows",
      "Deployment-ready Node.js, Express, or NestJS services",
    ],
    tech: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
    proof: "Built a production-grade YouTube clone backend with uploads, subscriptions, likes, comments, JWT, and Cloudinary.",
    icon: HiOutlineServer,
    accentIcon: SiNestjs,
  },
  {
    title: "Full-Stack Product Builds",
    eyebrow: "Frontend plus backend",
    shortDesc: "Modern web apps, SaaS panels, and workflows from idea to launch.",
    description:
      "When the work needs both product UI and backend logic, I can own the delivery end to end: React/Next.js interfaces, API integration, state management, responsive layouts, and deployment.",
    outcomes: [
      "Responsive Next.js and React applications",
      "TypeScript, Tailwind CSS, shadcn/ui, and TanStack Query",
      "Backend integration and deployment support",
      "Conversion-minded UI for key workflows",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
    proof: "Built multi-tenant restaurant SaaS admin tools for users, restaurants, reservations, and staff assignments.",
    icon: HiOutlineCode,
    accentIcon: SiDocker,
  },
];

const processSteps = [
  {
    title: "Audit",
    text: "Map the current system, risk areas, deployment path, and highest-value fixes.",
  },
  {
    title: "Plan",
    text: "Define the implementation path, milestones, handoff expectations, and success metrics.",
  },
  {
    title: "Build",
    text: "Ship the infrastructure, dashboard, API, or app work with clean checkpoints.",
  },
  {
    title: "Handoff",
    text: "Document the workflows and leave the system easier to operate after delivery.",
  },
];

const Services = () => {
  const dispatch = useAppDispatch();
  const [activeService, setActiveService] = useState(0);
  const currentService = servicesData[activeService];
  const ActiveIcon = currentService.icon;
  const ActiveAccentIcon = currentService.accentIcon;

  const contactHref = "/#contact";

  return (
    <>
      <Head>
        <title>Services | Bilal Siddique</title>
        <meta
          name="description"
          content="DevOps, cloud infrastructure, observability, backend API, admin dashboard, and full-stack product development services by Bilal Siddique."
        />
      </Head>

      <main className="relative overflow-hidden bg-deep-blue">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(44,188,233,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(44,188,233,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue/10 blur-[130px]" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-red/10 blur-[150px]" />
        </div>

        <div className="relative z-10 ss:w-5/6 mx-5 ss:mx-auto pt-32 pb-24">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-outfit text-xs uppercase tracking-[0.18em] text-blue backdrop-blur-sm">
                <HiOutlineShieldCheck className="text-base" />
                Cloud, DevOps, and product engineering
              </div>

              <h1 className="mt-6 font-playfair text-4xl md:text-6xl leading-tight text-white">
                Build, deploy, and operate with fewer moving parts.
              </h1>

              <p className="mt-6 max-w-2xl font-outfit text-base md:text-lg leading-relaxed text-white/60">
                I help teams ship reliable cloud infrastructure, CI/CD pipelines,
                observability stacks, admin dashboards, and backend systems that
                are easier to run after launch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={contactHref}
                  onClick={() => dispatch(setSelectedPage("contact"))}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-6 py-3 font-outfit font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_30px_rgba(36,203,255,0.35)]"
                >
                  Start a project
                  <HiOutlineArrowRight className="text-lg" />
                </Link>
                <Link
                  href="/Bilal-Siddique-DevOps-Engineer.pdf"
                  target="_blank"
                  className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-outfit font-semibold text-white transition duration-300 hover:border-blue/50 hover:bg-white/10"
                >
                  View resume
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["80%", "less manual release effort"],
                ["930 -> 220 MB", "Docker image optimization"],
                ["1+ yr", "cloud and DevOps delivery"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-md"
                >
                  <p className="font-outfit text-lg md:text-2xl font-bold text-yellow">
                    {value}
                  </p>
                  <p className="mt-2 font-outfit text-xs leading-snug text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
            <div className="space-y-3">
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <motion.button
                    key={service.title}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setActiveService(index)}
                    className={`group w-full rounded-xl border p-4 text-left backdrop-blur-md transition duration-300 ${
                      isActive
                        ? "border-blue/50 bg-blue/10"
                        : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition duration-300 ${
                          isActive
                            ? "border-blue/40 bg-blue/15 text-blue"
                            : "border-white/10 bg-deep-blue/70 text-white/60 group-hover:text-blue"
                        }`}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <p className="font-outfit text-[11px] uppercase tracking-[0.16em] text-white/35">
                          {service.eyebrow}
                        </p>
                        <h2 className="mt-1 font-outfit text-base font-semibold text-white">
                          {service.title}
                        </h2>
                        <p className="mt-1 font-outfit text-sm leading-relaxed text-white/50">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.article
              key={currentService.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8 backdrop-blur-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-rainblue" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
                    {currentService.eyebrow}
                  </p>
                  <h2 className="mt-2 font-playfair text-3xl md:text-4xl text-white">
                    {currentService.title}
                  </h2>
                  <p className="mt-4 max-w-3xl font-outfit text-base leading-relaxed text-white/65">
                    {currentService.description}
                  </p>
                </div>

                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-deep-blue/70 text-blue">
                  <ActiveIcon className="text-4xl" />
                  <ActiveAccentIcon className="absolute -right-2 -bottom-2 rounded-lg bg-white p-1 text-3xl text-deep-blue" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-outfit text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                    What you get
                  </h3>
                  <div className="mt-4 space-y-3">
                    {currentService.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-xl text-yellow" />
                        <p className="font-outfit text-sm leading-relaxed text-white/70">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-outfit text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                    Core tools
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentService.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-deep-blue/50 px-3 py-1.5 font-outfit text-xs text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-yellow/20 bg-yellow/10 p-4">
                    <p className="font-outfit text-sm leading-relaxed text-yellow-100">
                      {currentService.proof}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={contactHref}
                  onClick={() => dispatch(setSelectedPage("contact"))}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-5 py-3 font-outfit font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_24px_rgba(36,203,255,0.3)]"
                >
                  Discuss this service
                  <HiOutlineArrowRight className="text-lg" />
                </Link>
                <Link
                  href="/#projects"
                  onClick={() => dispatch(setSelectedPage("projects"))}
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-outfit font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  See related work
                </Link>
              </div>
            </motion.article>
          </section>

          <section className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <p className="font-outfit text-sm text-blue">0{index + 1}</p>
                <h3 className="mt-3 font-outfit text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-white/50">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-8 md:p-10 text-center backdrop-blur-md"
          >
            <div className="absolute -inset-6 bg-gradient-rainbow opacity-10 blur-3xl -z-10" />
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-deep-blue/80 text-blue">
              <SiTerraform className="text-3xl" />
            </div>
            <h2 className="mt-6 font-playfair text-3xl md:text-4xl text-white">
              Need a cleaner path from idea to production?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-outfit text-base leading-relaxed text-white/60">
              Send the current state, the deadline, and what is blocking progress.
              I will help shape the scope into a practical delivery plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={contactHref}
                onClick={() => dispatch(setSelectedPage("contact"))}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-rainblue px-6 py-3 font-outfit font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_30px_rgba(36,203,255,0.35)]"
              >
                Contact me
                <HiOutlineArrowRight className="text-lg" />
              </Link>
              <Link
                href="/#experience"
                onClick={() => dispatch(setSelectedPage("experience"))}
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-outfit font-semibold text-white transition duration-300 hover:border-blue/50 hover:bg-white/10"
              >
                Review experience
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Services;
