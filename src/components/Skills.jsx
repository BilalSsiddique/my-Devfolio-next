import React from "react";
import javascript from '../assets/javascript.svg'
import typescript from "../assets/typescript.svg";
import react from '../assets/react.png'
import next from "../assets/nextjs.png"
import figma from "../assets/figma.svg"
import node from "../assets/nodejs.svg"
import material from "../assets/material.svg"
import tailwind from "../assets/tailwind.svg";
import redux from "../assets/redux.svg" 
import firebase from "../assets/firebase.svg"
import git from "../assets/git.svg"
import mongo from  "../assets/mongo.svg"
import Image from "next/image";
import {motion} from 'framer-motion'

const Skills = () => {
  const tectStackIcons = [
    { Image: javascript, alt: "Javascript" },
    { Image: typescript, alt: "Typescript" },
    { Image: react, alt: "React.js" },
    { Image: next, alt: "Next.js" },
    { Image: node, alt: "Node.js" },
    { Image: figma, alt: "Figma" },
    { Image: material, alt: "Material-UI" },
    { Image: tailwind, alt: "Tailwind" },
    { Image: redux, alt: "Redux-Toolkit" },
    // { Image: "../assets/context", alt: "Context-API" },
    { Image: firebase, alt: "Firebase" },
    { Image: git, alt: "Git & Github" },
    { Image: mongo, alt: "Mongo-DB" },
  ];

  return (
    <div
      className="  flex   flex-wrap justify-center  xs:justify-between  items-center h-auto gap-x-3 xs:gap-x-4 md:gap-x-8 gap-y-14 w-full"
    >
      {tectStackIcons.map((iconImage, index) => {
        return (
          <div
            className=" relative flex flex-col glass flex-wrap text-center gap-3 items-center h-[130px] w-[170px] max-[535px]:w-[200px] max-[667px]:w-[230px] md:w-[200px]   justify-center  p-5"
            key={index}
          >
            <p className="text-[20px] font-playfair font-bold mb-1">
              {iconImage.alt}
            </p>
            <motion.dev
              className=" flex justify-center  items-center absolute mx-auto h-[80px] w-[80px] shadow shadow-dark-grey   top-[-50px] rounded-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                className="bg-cover "
                src={iconImage.Image}
                alt={`${iconImage.alt}-icon`}
                width={68}
                height={54}
              />
            </motion.dev>
            <div className=" h-0.5  w-full bg-gradient-rainbow rounded-full "></div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
