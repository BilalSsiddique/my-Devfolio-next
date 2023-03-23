import React from "react";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import Image from "next/image";
import profile from "../assets/profile-2.svg";

const Landing = ({ setSelectedPage }:any) => {
  const isAboveLargeScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="flex w-full justify-start md:justify-between md:h-full md:items-center md:gap-16  py-10 "
    >
      {/* IMAGE SECTION  */}
      <div className=" md:order-2 md:flex md:justify-center md:basis-1/2 z-10 mt-16 md:mt-32">
        <div className="b-gradient-rainbow-bg-right"></div>
        {isAboveLargeScreen ? (
          <div className="relative z-0  ml-20 before:absolute before:top-2 before:-left-1 before:rounded-full before:w-[72%] before:h-[72%] before:border-2  before:border-blue before:max-w-[400px] before:z-[-1]">
            <Image
              alt="profile"
              className=" max-w-[300px] md:max-w-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full  "
              src={profile}
              width={500}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 h-full w-full md:basis-1/2 mt-32 md:mt-32 ">
        {/* HEADINGS */}
        <motion.div
          className="motion relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="max-[420px]:m-2 max-[420px]:text-[40px]   text-6xl  font-playfair z-10 text-center ss:text-start">
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
            An Undergraduate Software Engineer , Certified Meta Front-end
            Engineer & Aspiring Full-Stack & Block Chain Engineer.
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
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </Link>
          <Link
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 xs:max-w-[160px]"
            onClick={() => setSelectedPage("contact")}
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
    </section>
  );
};

export default Landing;
