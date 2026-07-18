import React from "react";
import Image from "next/image";
import { about } from "@/data/website-data";
import { Fragment } from "react";
import Link from "next/link";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import { useAppDispatch } from "@/store/hook";
import { motion } from "framer-motion";

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-200 font-semibold">{children}</span>
);

const impactStats = [
  { value: "2+ yrs", label: "full-stack product delivery" },
  { value: "1+ yr", label: "Cloud / DevOps experience" },
  { value: "80%", label: "less manual release effort" },
];

const About = () => {
  const dispatch = useAppDispatch();

  const professionalInfo = [
    {
      title: "Current Focus",
      items: [
        "Architecting AWS infrastructure with Terraform across ECS, EC2, VPC, ALB, IAM, ACM, and ECR.",
        "Automating CI/CD with GitHub Actions, ECR pipelines, and repeatable deployment workflows.",
        "Building observability with Prometheus, Grafana, Loki, Tempo, and OpenTelemetry.",
        "Delivering internal dashboards with Next.js, NestJS, AWS SDK, Cloudflare, and Resend.",
      ],
    },
    {
      title: "Experience Snapshot",
      items: [
        "Full-Stack Engineer with Cloud/DevOps focus at Code Reroute, Remote - Canada.",
        "Assistant Python Lecturer at Usman Institute of Technology.",
        "Software Engineer Intern at RadicalX, contributing to a CRUD apprenticeship portal.",
      ],
    },
  ];

  const personalInfo = [
    {
      title: "Education",
      items: [
        "B.Sc. Software Engineering from NED University of Engineering & Technology.",
        "Coursework strengths: Cloud Computing, Data Encryption & Security, Data Mining, DSA, and OOP.",
      ],
    },
    {
      title: "Engineering Approach",
      items: [
        "Reduce operational overhead through automation, repeatable infrastructure, and clear deployment paths.",
        "Make production systems observable with metrics, logs, traces, and fast debugging workflows.",
        "Balance infrastructure ownership with full-stack delivery for practical startup environments.",
      ],
    },
  ];

  return (
    <div className="relative py-16">
      {/* Background Gradient */}
      <div className="absolute -inset-4 bg-gradient-rainbow opacity-10 blur-3xl -z-10" />

      <motion.div
        className="rounded-2xl overflow-hidden glass-card backdrop-blur-md bg-white/5 border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {about.map((obj, idx) => (
          <Fragment key={idx}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
              {/* Left Column - Image and Introduction */}
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Profile Image */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-rainblue rounded-full opacity-75 blur-sm"></div>
                  <div className="relative bg-deep-blue rounded-full p-2 w-64 h-64 mx-auto">
                    <div className="relative rounded-full overflow-hidden w-full h-full">
                      <Image
                        src={obj.Image}
                        alt={obj.alt}
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-playfair mb-4">
                    Bilal <span className="text-yellow-200">Siddique</span>
                  </h2>
                  <p className="text-lg text-white/80 font-outfit leading-relaxed">
                    <HighlightedText>Full-Stack Engineer</HighlightedText> with
                    2+ years of product delivery and 1+ year focused on AWS
                    infrastructure, CI/CD automation, containerization, and
                    observability.
                  </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center"
                    >
                      <p className="font-outfit text-lg font-bold text-yellow-200">
                        {stat.value}
                      </p>
                      <p className="font-outfit text-xs text-white/50 leading-snug mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/#contact"
                      onClick={() => dispatch(setSelectedPage("contact"))}
                      className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-flex items-center"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        Contact Me
                      </span>
                      <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/Bilal-Siddique-DevOps-Engineer.pdf"
                      target="_blank"
                      className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-flex items-center"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        View Resume
                      </span>
                      <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Detailed Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Professional Side */}
                <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold font-playfair mb-4 text-yellow-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-rainblue rounded-full"></span>
                    Professional Profile
                  </h3>
                  <div className="space-y-6">
                    {professionalInfo.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-white mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-white/80 text-sm flex items-start"
                            >
                              <span className="text-yellow-200 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Side */}
                <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold font-playfair mb-4 text-yellow-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-rainblue rounded-full"></span>
                    Personal Approach
                  </h3>
                  <div className="space-y-6">
                    {personalInfo.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-white mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-white/80 text-sm flex items-start"
                            >
                              <span className="text-yellow-200 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
