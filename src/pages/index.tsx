import Head from "next/head";
import DotGroup from "../components/DotGroup";
import Landing from "../components/Landing";
import LineGradient from "../components/LineGradient";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import useMediaQuery from "../hooks/useMediaQuery";
import CustomToggleIcon from "@/components/CustomToggleIcon";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { useState } from "react";
import About from "@/components/About";
import Whatsapp from "@/components/whatsapp/button";

export default function Home() {
  const [gridSwitch, setGridSwitch] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
      <Head>
        <title>Bilal Siddique</title>
        <meta
          name="description"
          content="Bilal Siddique Frontend Developer,custom Shopify Developer using Nextjs,Shopify Developer,Full-Stack Engineer & Aspiring Cloud Engineer. My TechStack is React, Next, Custom Shopify Stores using Nextjs, Remix Hydrogen, Python, Django  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`app bg-black overflow-hidden`}>
        <div className="xs:w-5/6 xs:mx-auto md:h-full ">
          {/* SIDE DOTS BAR */}
          {isAboveMediumScreens && <DotGroup />}

          {/* INTRO SECTION */}
          <Landing />
        </div>
        {/* ABOUT SECTION */}
        <LineGradient ID="about" section="About Me" />
        <div className=" ss:w-5/6 pb-20 mx-5 ss:mx-auto h-full mt-44 xs:mt-52">
          <About />
        </div>
        {/* Linear Gradient Skills/Techstack Section (by Default skills) w-full */}
        <LineGradient />
        <div className=" ss:w-5/6 pb-20  mx-5 ss:mx-auto h-full mt-44 xs:mt-52">
          <div className="hidden sm:block b-gradient-rainbow-bg"></div>

          <Skills />
        </div>

        {/* EXPERIENCE SECTION  */}
        <LineGradient ID="experience" section="Experience" />
        <div className=" ss:w-5/6 pb-20 mx-5 ss:mx-auto h-full mt-44 xs:mt-52">
          <Experience />
        </div>

        {/* PROJECT SECTION */}
        <LineGradient ID="projects" section="Projects" />
        <div className=" ss:w-5/6 pb-20 mx-5 ss:mx-auto h-full mt-44 xs:mt-52">
          <div className="b-gradient-rainbow-bg"></div>
          <Projects />
        </div>

        {/* Linear Gradient Certifications Section w-full */}
        <LineGradient ID="certifications" section="Certifications" />
        <div className="ss:w-5/6 pb-20 mx-5 ss:mx-auto h-full mt-32 xs:mt-36 ">
          {/* GRID VIEW SWITCH */}
          <div className=" flex items-center gap-3 justify-center xs:justify-start w-full mb-20">
            <p className="text-[22px] font-outfit">Grid View</p>
            <CustomToggleIcon
              gridSwitch={gridSwitch}
              setGridSwitch={setGridSwitch}
            />
          </div>

          {/* CERTIFICATION SECTION CONTINUE WITH IMAGE SLIDER */}
          <div
            className={`md:w-full xs:w-full  glass  ${
              isAboveMediumScreens && gridSwitch === false && "h-[600px]"
            }  mx-auto`}
          >
            <Certification gridSwitch={gridSwitch} />
          </div>
        </div>
        {/* CONTACT SECTION */}
        <LineGradient ID="contact" section="Contact" />
        <div className=" ss:w-5/6 pb-20 mx-5 ss:mx-auto h-full mt-44 xs:mt-52">
          <Contact />
        </div>
        <Whatsapp />
      </main>
    </>
  );
}
