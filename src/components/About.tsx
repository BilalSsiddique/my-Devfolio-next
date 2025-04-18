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

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div className="absolute -inset-4 bg-gradient-rainbow opacity-10 blur-3xl -z-10" />

      <motion.div 
        className="rounded-xl overflow-hidden glass-card backdrop-blur-md bg-white/5 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {about.map((obj, idx) => (
          <Fragment key={idx}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Text Content */}
              <motion.div 
                className="p-8 lg:p-12 space-y-6 font-outfit"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="prose prose-invert">
                  <p className="text-base sm:text-lg leading-relaxed text-white/80">
                    Hello! I&apos;m <HighlightedText>Bilal Siddique</HighlightedText>, 
                    a versatile <HighlightedText>Software Engineer</HighlightedText> with expertise in both
                    <HighlightedText> DevOps/Cloud infrastructure</HighlightedText> and
                    <HighlightedText> Full-Stack development</HighlightedText>.
                  </p>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-white/80 mt-4">
                    I&apos;m skilled in architecting <HighlightedText>AWS cloud environments</HighlightedText> using Terraform, implementing containerized solutions with Docker, and establishing secure CI/CD pipelines. My specialty lies in <HighlightedText>Next.js</HighlightedText>, <HighlightedText>Node.js</HighlightedText>, <HighlightedText>Nest.js</HighlightedText> and <HighlightedText>TypeScript</HighlightedText>, where I excel at building modern web applications, custom dashboards, and cloud integrations.
                  </p>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-white/80 mt-4">
                    With a <HighlightedText>Bachelor&apos;s in Software Engineering</HighlightedText> from NED University and professional experience at companies like <HighlightedText>Code Reroute</HighlightedText>, I&apos;ve developed strong interpersonal skills complemented by a passion for emerging technologies. I specialize in creating <HighlightedText>scalable, secure, and high-performance solutions</HighlightedText> across the entire development lifecycle.
                  </p>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-white/80 mt-4">
                    My project portfolio includes <HighlightedText>E-commerce platforms</HighlightedText> with Stripe and authentication systems, <HighlightedText>custom dashboards</HighlightedText> for AWS resource monitoring, and full-stack applications with robust backend APIs. I&apos;m committed to best practices in full-stack development, delivering solutions that are both technically excellent and user-focused.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="https://contra.com/s/eRsWFmON-frontend-development/checkout"
                      onClick={() => dispatch(setSelectedPage("contact"))}
                      className="relative group overflow-hidden px-8 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-block"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        Hire Me
                      </span>
                      <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/services"
                      onClick={() => dispatch(setSelectedPage("services"))}
                      className="relative group overflow-hidden px-8 py-3 rounded-lg font-semibold 
                        glass-card backdrop-blur-md bg-white/5 border border-white/10 
                        transition-all duration-300 hover:border-white/20 inline-block"
                    >
                      <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                        My Services
                      </span>
                      <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative h-[400px] lg:h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src={obj.Image}
                  alt={obj.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rainbow Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rainblue opacity-75" />
              </motion.div>
            </div>
          </Fragment>
        ))}

        {/* Rainbow Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rainblue opacity-75" />
      </motion.div>
    </div>
  );
};

export default About;
