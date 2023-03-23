import javascript from '../assets/javascript.svg'
import typescript from "../assets/typescript.svg";
import next from "../assets/projects/next-js.svg";
import figma from "../assets/figma.svg"
import node from "../assets/nodejs.svg"
import material from "../assets/projects/material-ui-1.svg";
import tailwind from "../assets/projects/tailwindcss.svg";
import redux from "../assets/redux.svg" 
import firebase from "../assets/projects/firebase-1.svg";
import git from "../assets/projects/git-icon.svg"
import mongo from  "../assets/projects/mongodb-icon-1.svg"

// certificate imports
import reactbasics from "/src/assets/certificates/react-basics.png";
import version from "/src/assets/certificates/version.png";
import ITF from "/src/assets/certificates/ITF.png";
import web from "/src/assets/certificates/webscraping.png";
import statis from "/src/assets/certificates/statistics.png";
import pandas from "/src/assets/certificates/pandas.png";
import python from "/src/assets/certificates/introduction-to-python.png";
import interpython from "/src/assets/certificates/intermediate-python.png";
import kagglepython from "/src/assets/certificates/kaggle-python.png";
import kagglepandas from "/src/assets/certificates/kaggle-pandas.png";
import datascience from "/src/assets/certificates/Introduction-to-data-science.png";
import javascriptc from "/src/assets/certificates/programming-with-js.png";
import manipluation from "/src/assets/certificates/data-manipulation.png";



// SSSS

import reactdashboard from "../assets/projects/react-dashboard.png";
import reactdashboard2 from "../assets/projects/react-dashboard-2.png";
import authentication from "../assets/projects/react-authentication.png";
import reactselfie from "../assets/projects/react-selfie-crop-full.png";
// import exchangerate from "../assets/projects/exchange-rate-api.png";
// import movieticketdemo from "../assets/projects/movie-ticket.png";
// import theme from "../assets/projects/theme-full.png";
// import domarray from "../assets/projects/dom-array-method-full.png";
import { StaticImageData } from "next/image";
import react from "../assets/projects/react-2.svg";
import framer from "../assets/projects/framer-motion.svg";
import materialui from "../assets/projects/material-ui-1.svg";
import github from "../assets/githubLogo.svg";







  export const tectStackIcons = [
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


// PROJECTS

type icons = [string, string, string, string, string?];
export const projects: Array<{
  name: string;
  url: StaticImageData;
  classname?: string;
  description: string;
  repo: string;
  stack: icons;
  live: string;
}> = [
  {
    name: "DASHBOARD",
    url: reactdashboard,
    description:
      "An Admin Dashboard developed with react and Industry recommended packages.",
    repo: 'https://github.com/BilalSsiddique/react-admin-dashboard',
    stack: [react, framer, materialui, github, git],
    live: "https://react-admin-learn.vercel.app",
  },
  {
    name: "AUTHENTICATION",
    url: authentication,
    description:
      "A Product-Development Internship Project offered at Radical-X, developed with react, firebase & toastify.",
    repo: "https://github.com/BilalSsiddique/test-login",
    stack: [react, firebase, github, git],
    live:"https://authentication-inky.vercel.app",
  },
];


// Certificates

export const slides: Array<{ url: StaticImageData; classname?: string }> = [
  { url: ITF },
  { url: reactbasics, classname: "design-react" },
  { url: web },
  { url: kagglepandas },
  { url: javascriptc, classname: "design-javascript" },
  { url: pandas },
  { url: python },
  { url: interpython },
  { url: statis },
  { url: kagglepython },
  { url: datascience },
  { url: version, classname: "design-version" },
  { url: manipluation },
];