import React from "react";
import { service } from "@/data/website-data";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";

const Services = () => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="w-5/6 mx-auto mt-44 mb-20 xs:mt-52">
      {/* Services Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center font-outfit mb-16">
        Services
      </h1>
      
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Web Development */}
        <div className="glass relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,204,73,0.4)] hover:translate-y-[-8px]">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-blue-400 to-deep-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="flex p-6 md:p-8 items-center space-x-5">
            <div className="rounded-full p-4 bg-white-5 text-white-70 group-hover:text-yellow group-hover:bg-white-10 transition-all duration-300 transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-xl text-yellow mb-3">Full-Stack Web Development</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React.js", "TypeScript", "TailwindCSS"].map((tech, index) => (
                  <span key={index} className="glass-navbar text-xs px-2 py-1 shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-80 text-sm mb-2">Building modern web applications, custom dashboards, and responsive layouts.</p>
            </div>
            <div className="ml-auto self-center">
              <div className="rounded-full p-2 bg-white-5 group-hover:bg-yellow-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white-80 group-hover:text-deep-blue transition-colors duration-300">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* E-commerce Development */}
        <div className="glass relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,204,73,0.4)] hover:translate-y-[-8px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="flex p-6 md:p-8 items-center space-x-5">
            <div className="rounded-full p-4 bg-white-5 text-white-70 group-hover:text-yellow group-hover:bg-white-10 transition-all duration-300 transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-xl text-yellow mb-3">E-commerce Development</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Stripe", "Clerk", "Sanity CMS"].map((tech, index) => (
                  <span key={index} className="glass-navbar text-xs px-2 py-1 shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-80 text-sm mb-2">Built lightning-fast E-commerce store with authentication and content management.</p>
            </div>
            <div className="ml-auto self-center">
              <div className="rounded-full p-2 bg-white-5 group-hover:bg-yellow-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white-80 group-hover:text-deep-blue transition-colors duration-300">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="glass relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,204,73,0.4)] hover:translate-y-[-8px]">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="flex p-6 md:p-8 items-center space-x-5">
            <div className="rounded-full p-4 bg-white-5 text-white-70 group-hover:text-yellow group-hover:bg-white-10 transition-all duration-300 transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-xl text-yellow mb-3">DevOps & Cloud Infrastructure</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS", "Docker", "Terraform", "CI/CD"].map((tech, index) => (
                  <span key={index} className="glass-navbar text-xs px-2 py-1 shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-80 text-sm mb-2">Architected AWS cloud environments, secured CI/CD pipelines, and optimized Docker.</p>
            </div>
            <div className="ml-auto self-center">
              <div className="rounded-full p-2 bg-white-5 group-hover:bg-yellow-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white-80 group-hover:text-deep-blue transition-colors duration-300">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Development */}
        <div className="glass relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,204,73,0.4)] hover:translate-y-[-8px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="flex p-6 md:p-8 items-center space-x-5">
            <div className="rounded-full p-4 bg-white-5 text-white-70 group-hover:text-yellow group-hover:bg-white-10 transition-all duration-300 transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                <path d="M5 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm7-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-xl text-yellow mb-3">Admin Dashboard Development</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "AWS SDK", "CloudWatch", "Redux"].map((tech, index) => (
                  <span key={index} className="glass-navbar text-xs px-2 py-1 shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-80 text-sm mb-2">Built internal dashboards to monitor AWS ECS metrics and resource usage.</p>
            </div>
            <div className="ml-auto self-center">
              <div className="rounded-full p-2 bg-white-5 group-hover:bg-yellow-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white-80 group-hover:text-deep-blue transition-colors duration-300">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="glass relative group overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,204,73,0.4)] hover:translate-y-[-8px]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <div className="flex p-6 md:p-8 items-center space-x-5">
            <div className="rounded-full p-4 bg-white-5 text-white-70 group-hover:text-yellow group-hover:bg-white-10 transition-all duration-300 transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-xl text-yellow mb-3">Backend API Development</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express.js","Nest.js", "Python", "Django"].map((tech, index) => (
                  <span key={index} className="glass-navbar text-xs px-2 py-1 shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white-80 text-sm mb-2">Created secure APIs and media storage solutions using RESTful architecture.</p>
            </div>
            <div className="ml-auto self-center">
              <div className="rounded-full p-2 bg-white-5 group-hover:bg-yellow-500 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white-80 group-hover:text-deep-blue transition-colors duration-300">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hire Me Section */}
      <div className="mt-16 glass p-8 rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your ideas into reality?</h2>
        <p className="text-white-80 mb-6">With expertise across the entire tech stack, I can help bring your vision to life.</p>
        <Link
          className="inline-block text-white bg-gradient-rainblue py-2 px-6 rounded-full font-semibold tracking-wide hover:opacity-90 transition duration-300"
          href="#contact"
          onClick={() => dispatch(setSelectedPage("contact"))}
        >
          Let&apos;s Collaborate
        </Link>
      </div>
    </div>
  );
};

export default Services;
