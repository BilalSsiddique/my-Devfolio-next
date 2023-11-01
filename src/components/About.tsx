import React from "react";
import Image from "next/image";
import { about } from "@/data/website-data";
import { Fragment } from "react";
import Link from "next/link";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import { useAppDispatch } from "@/store/hook";



const About = () => {
  const dispatch  = useAppDispatch()

  
  return (
    <div className="glass    rounded-md font-light text-[12px] xs:text-sm leading-relaxed font-outfit grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:gap-10">
      {about.map((obj, idx) => (
        <Fragment key={idx}>
          <div className="w-full text-justify   self-start  py-14 px-5 md:px-10  ">
            Greetings! I&lsquo;m{" "}
            <span className="text-yellow font-bold">Bilal Siddique</span>, a
            passionate creator who thrives in the digital realm. Crafting{" "}
            <span className="text-yellow font-bold">
              extraordinary online experiences
            </span>{" "}
            is my forte. Armed with a{" "}
            <span className="text-yellow font-bold">
              Bachelor&lsquo;s degree
            </span>{" "}
            in{" "}
            <span className="text-yellow font-bold">Software Engineering</span>{" "}
            from the prestigious{" "}
            <span className="text-yellow font-bold">
              UIT-NED University of Pakistan
            </span>
            , I have honed my skills to perfection. But that&lsquo;s not all – I
            hold the coveted title of a{" "}
            <span className="text-yellow font-bold">
              Certified Meta (Facebook) Front-end Engineer
            </span>
            , a testament to my expertise. What truly sets me apart, however, is
            my journey as a dedicated{" "}
            <span className="text-yellow font-bold">freelancer</span>. My latest
            conquest in the tech world is nothing short of a revolution. I
            specialize in fashioning{" "}
            <span className="text-yellow font-bold">
              lightning-fast Shopify custom eCommerce stores
            </span>{" "}
            that are nothing short of a marvel. How, you ask? By harnessing the
            power of <span className="text-yellow font-bold">Next.js</span>, the
            artistry of{" "}
            <span className="text-yellow font-bold">Tailwind CSS</span>, the
            ingenuity of <span className="text-yellow font-bold">Remix</span>,
            and the reliability of{" "}
            <span className="text-yellow font-bold">Shopify/Hydrogen</span>.
            These tools, in my hands, become instruments of{" "}
            <span className="text-yellow font-bold">digital wizardry</span>,
            creating an online shopping experience that&lsquo;s second to none.
            Let&lsquo;s bring your{" "}
            <span className="text-yellow font-bold">digital dreams</span> to
            life and take your online presence to the{" "}
            <span className="text-yellow font-bold">next level</span>!
            <div className="flex gap-3 flex-wrap w-full">
              <Link
                className="text-white mt-5 w-fit rounded-r-sm bg-gradient-rainblue  py-0.5 px-0.5 text-center  flex items-center justify-center   border-1   border-deep-blue "
                href="/#contact"
                onClick={() => dispatch(setSelectedPage("contact"))}
              >
                <div className="font-semibold  tracking-widest text-[13px] sm:justify-end  sm:text-[15px] bg-deep-blue hover:text-red transition duration-500  sm:h-[25px] h-full flex items-center justify-center  xs:px-1 font-outfit">
                  Hire Me
                </div>
              </Link>
              <Link
                className="text-white mt-5 w-fit rounded-r-sm bg-gradient-rainblue  py-0.5 px-0.5 text-center  flex items-center justify-center   border-1   border-deep-blue "
                href="/services"
                onClick={() => dispatch(setSelectedPage("services"))}
              >
                <div className="font-semibold  tracking-widest text-[13px] sm:justify-end  sm:text-[15px] bg-deep-blue hover:text-red transition duration-500  sm:h-[25px] h-full flex items-center justify-center  xs:px-1 font-outfit">
                  My Services
                </div>
              </Link>
            </div>
          </div>
          <Image
            src={obj.Image}
            alt={obj.alt}
            className="w-full rounded-r-md h-full  self-center object-cover"
          />
        </Fragment>
      ))}
    </div>
  );
};

export default About;
