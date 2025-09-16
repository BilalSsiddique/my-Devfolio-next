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

const About = () => {
  const dispatch = useAppDispatch();

  // Split the about content into two distinct sections
  const professionalInfo = [
    {
      title: "Technical Expertise",
      items: [
        "DevOps & Cloud Infrastructure (AWS, Terraform, Docker)",
        "Full-Stack Development (Next.js, Node.js, Nest.js, TypeScript)",
        "Modern Web Applications & Custom Dashboards",
        "Secure CI/CD Pipelines & Containerized Solutions",
      ],
    },
    {
      title: "Professional Experience",
      items: [
        "Software Engineer at Code Reroute",
        "Full-Stack Engineer (Freelance)",
        "Assistant Python Lecturer at UIT University",
        "Software Engineering Intern at Radical X",
      ],
    },
  ];

  const personalInfo = [
    {
      title: "Education",
      items: ["Bachelor's in Software Engineering from NED University"],
    },
    {
      title: "Approach",
      items: [
        "Creating scalable, secure, and high-performance solutions",
        "Commitment to best practices in full-stack development",
        "Focus on technically excellent and user-focused solutions",
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
                  <p className="text-lg text-white/80 font-outfit">
                    Versatile{" "}
                    <HighlightedText>Software Engineer</HighlightedText> with
                    expertise in both
                    <HighlightedText>
                      {" "}
                      DevOps/Cloud infrastructure
                    </HighlightedText>{" "}
                    and
                    <HighlightedText> Full-Stack development</HighlightedText>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://contra.com/s/eRsWFmON-frontend-development/checkout"
                      onClick={() => dispatch(setSelectedPage("contact"))}
                      className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-flex items-center"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        Hire Me
                      </span>
                      <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/services"
                      onClick={() => dispatch(setSelectedPage("services"))}
                      className="relative group overflow-hidden px-6 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-flex items-center"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        My Services
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
