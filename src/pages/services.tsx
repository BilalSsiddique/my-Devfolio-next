import React, { useState } from "react";
import { service } from "@/data/website-data";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import { motion } from "framer-motion";

const Services = () => {
  const dispatch = useAppDispatch();
  const [activeService, setActiveService] = useState(0);

  // Service data with detailed information
  const servicesData = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      shortDesc:
        "Building modern web applications with cutting-edge technologies",
      description:
        "I specialize in creating responsive, high-performance web applications using modern frameworks like Next.js and React. From intuitive user interfaces to robust backend systems, I deliver complete solutions that meet your business needs.",
      detailedDesc:
        "My full-stack development services include frontend development with React/Next.js, state management with Redux, responsive design with Tailwind CSS, backend API development with Node.js/Express, database integration with MongoDB/PostgreSQL, and deployment solutions.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "E-commerce Development",
      shortDesc:
        "Building lightning-fast e-commerce solutions with modern tools",
      description:
        "I create high-converting e-commerce platforms that drive sales and provide exceptional user experiences. From product catalogs to secure payment processing, I build stores that customers love and businesses trust.",
      detailedDesc:
        "My e-commerce development services include custom storefronts with Next.js, product management systems, secure payment integration with Stripe, user authentication with Clerk, content management with Sanity CMS, inventory tracking, and analytics implementation.",
      technologies: [
        "Next.js",
        "Stripe",
        "Clerk",
        "Sanity CMS",
        "Shopify",
        "Contentful",
        "Firebase",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
      ),
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "DevOps & Cloud Infrastructure",
      shortDesc:
        "Architecting scalable cloud solutions with automated pipelines",
      description:
        "I design and implement robust cloud infrastructures that scale with your business. From containerization to CI/CD pipelines, I ensure your applications are deployed efficiently and securely.",
      detailedDesc:
        "My DevOps services include AWS infrastructure provisioning with Terraform, Docker containerization, Kubernetes orchestration, CI/CD pipeline setup with GitHub Actions, monitoring and logging solutions, security hardening, and cost optimization strategies.",
      technologies: [
        "AWS",
        "Docker",
        "Terraform",
        "Kubernetes",
        "GitHub Actions",
        "CloudWatch",
        "Prometheus",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Admin Dashboard Development",
      shortDesc:
        "Creating powerful dashboards for data visualization and control",
      description:
        "I build intuitive admin dashboards that transform complex data into actionable insights. With real-time monitoring and customizable reports, you'll have complete visibility into your systems.",
      detailedDesc:
        "My dashboard development services include real-time data visualization with charting libraries, AWS resource monitoring, user and employee management systems, log viewers, analytics dashboards, and custom reporting tools.",
      technologies: [
        "Next.js",
        "AWS SDK",
        "CloudWatch",
        "Chart.js",
        "Redux",
        "Material UI",
        "Tailwind CSS",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
          <path d="M5 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm7-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: 5,
      title: "Backend API Development",
      shortDesc: "Creating secure and scalable backend solutions",
      description:
        "I develop robust backend systems that power your applications with reliable APIs, efficient data processing, and secure authentication. Built for performance and scalability from the ground up.",
      detailedDesc:
        "My backend development services include RESTful API design, GraphQL implementation, database architecture with PostgreSQL/MongoDB, authentication systems, media storage solutions, microservices architecture, and serverless functions.",
      technologies: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
        </svg>
      ),
      gradient: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="w-5/6 mx-auto mt-20 mb-20">
      {/* Services Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4">
          My <span className="text-yellow-200">Services</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-rainblue mx-auto rounded-full"></div>
        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
          Comprehensive solutions tailored to transform your ideas into powerful
          digital experiences
        </p>
      </motion.div>

      {/* Modern Services Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Service Navigation */}
        <div className="lg:w-1/3">
          <div className="space-y-4">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "border-yellow-200/50 bg-gradient-to-r from-yellow-200/10 to-transparent"
                    : "hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} text-white p-2 flex-shrink-0`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Detail */}
        <div className="lg:w-2/3">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${servicesData[activeService].gradient} text-white p-3`}
              >
                {servicesData[activeService].icon}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {servicesData[activeService].title}
              </h2>
            </div>

            <p className="text-white/80 mb-6 text-lg">
              {servicesData[activeService].description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                What I Offer
              </h3>
              <p className="text-white/80 mb-6">
                {servicesData[activeService].detailedDesc}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologies I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {servicesData[activeService].technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-white/90 text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                className="inline-flex items-center gap-2 text-white bg-gradient-rainblue py-3 px-6 rounded-lg font-semibold tracking-wide hover:opacity-90 transition duration-300 shadow-lg"
                href="#contact"
                onClick={() => dispatch(setSelectedPage("contact"))}
              >
                Get Started with {servicesData[activeService].title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { value: "50+", label: "Projects Completed" },
          { value: "30+", label: "Happy Clients" },
          { value: "5+", label: "Years Experience" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div
            key={index}
            className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-yellow-200 mb-2">
              {stat.value}
            </div>
            <div className="text-white/80">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 glass-card backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden"
      >
        <div className="absolute -inset-4 bg-gradient-rainbow opacity-10 blur-3xl -z-10"></div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to transform your <span className="text-yellow-200">ideas</span>{" "}
          into reality?
        </h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          With expertise across the entire tech stack, I can help bring your
          vision to life with modern solutions and best practices.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            className="inline-block text-white bg-gradient-rainblue py-3 px-8 rounded-full font-semibold tracking-wide hover:opacity-90 transition duration-300 shadow-lg"
            href="#contact"
            onClick={() => dispatch(setSelectedPage("contact"))}
          >
            Let&apos;s Collaborate
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
