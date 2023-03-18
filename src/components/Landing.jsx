import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from '../components/SocialMediaIcons'
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import dev from '../assets/dev.png'

const Landing = ({ setSelectedPage }) => {
  const isAboveLargeScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className=" flex md:justify-start items-center   py-10 ">
      {/* IMAGE SECTION  */}
      {/* <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLargeScreen ? (
          <div className="relative z-0 ml-20 before:z-[-1]">
            <div className="b-gradient-rainbow-bg-right"></div>
            <Image
              alt="profile"
              className="hidden lg:block max-w-md max-h-md hover:filter hover:saturate-200 transition duration-500 z-10 w-full  "
              src={dev}
              width={0}
              height={0}
            />
          </div>
        ) : (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#010026"
              d="M57.6,-8.7C57.6,10.5,28.8,21.1,9.5,21.1C-9.8,21.1,-19.6,10.5,-19.6,-8.7C-19.6,-27.9,-9.8,-55.8,9.5,-55.8C28.8,-55.8,57.6,-27.9,57.6,-8.7Z"
              transform="translate(100 100)"
            />
          </svg>
        )}
      </div> */}

      {/* MAIN TEXT */}
      <div className="z-30   flex flex-col   mt-52 md:mt-52">
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
                className="xs:text-deep-blue xs:font-semibold z-20 before:content-brush
              before:absolute before:-left-[25px] before:-top-[90px] before:z-[-5] "
              >
                Siddique
              </span>
            </span>
          </p>

          <p className="max-[420px]:px-4 max-[420px]:text-[13px] mt-11 mb-2 text-sm text-center w-full ss:w-3/5 ss:text-start">
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
          <AnchorLink
            className="text-sm xs:text-lg bg-gradient-rainblue text-deep-blue rounded-sm  xs:max-w-[160px] py-3 px-5 xs:px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 xs:max-w-[160px]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="text-sm xs:text-lg bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-7 xs:px-10 font-playfair">
              Let&#39;s talk.
            </div>
          </AnchorLink>
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
