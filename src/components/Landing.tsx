import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";
import Image from "next/image";
import profile from "../assets/profile-2.svg";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";

const Landing = () => {
  const dispatch = useAppDispatch();
  
  const technologies = [
    { name: "React.js", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "AWS", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
  ];
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center w-full overflow-hidden py-10"
    >  
      <div className="w-full mx-auto z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* MAIN TEXT */}
        <div className="z-30 h-full w-full md:basis-1/2 mt-32 md:mt-32 ">
          {/* HEADINGS */}
          <motion.div
            className="motion relative "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className=" max-[420px]:m-2 max-[420px]:text-[40px]   text-6xl  font-playfair z-10 text-center ss:text-start">
              Bilal {""}
              <span className="relative">
                <span
                  className="  xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                before:absolute before:-left-[25px] before:-top-[90px] before:z-[-5] "
                >
                  Siddique
                </span>
              </span>
            </p>

            <p className="font-outfit max-[420px]:px-4 max-[420px]:text-[13px] mt-11 mb-2 text-sm text-center w-full ss:w-3/5 ss:text-start">
            A versatile Software Engineer with expertise in DevOps/Cloud infrastructure and Full-Stack development. 
            Specializing in Next.js, Node.js, and TypeScript with a passion for building modern web applications..
            </p>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className=" flex mt-5 justify-center ss:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              className="font-outfit text-sm xs:text-lg bg-gradient-rainblue text-deep-blue rounded-sm  xs:max-w-[160px] py-3 px-5 xs:px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500"
              href="/Software-Engineer.pdf"
              locale={false}
            >
              Resume &nbsp;&nbsp;&nbsp;&nbsp;
            </Link>

            <Link
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 xs:max-w-[160px]"
              onClick={() => dispatch(setSelectedPage("contact"))}
              href="#contact"
            >
              <div className="text-sm xs:text-lg bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-7 xs:px-10 font-outfit">
                Let&#39;s talk.
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="ss:justify-start flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
        
        {/* IMAGE SECTION */}
        <motion.div 
          className="lg:w-1/2 z-20 flex justify-center items-center mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-rainblue rounded-full opacity-75 blur-sm"></div>
            <div className="relative bg-deep-blue rounded-full p-2">
              <div className="relative rounded-full overflow-hidden w-72 h-72 sm:w-80 sm:h-80">
                <Image
                  alt="profile"
                  src={profile}
                  layout="fill"
                  objectFit="cover"
                  className="hover:filter hover:saturate-150 transition duration-500"
                />
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              className="absolute -right-5 top-10 glass-navbar px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <span className="text-yellow">Full-Stack</span>
            </motion.div>
            
            <motion.div
              className="absolute -left-5 top-1/2 glass-navbar px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <span className="text-yellow">DevOps</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 -right-4 glass-navbar px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <span className="text-yellow">Cloud</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white-30 flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-yellow rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
