// Skills Import
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import next from "../assets/projects/nextjs (1).svg";
import figma from "../assets/figma.svg";
import node from "../assets/nodejs.svg";
import material from "../assets/projects/material-ui-1.svg";
import tailwind from "../assets/projects/tailwindcss.svg";
import redux from "../assets/redux.svg";
import firebase from "../assets/projects/firebase-1.svg";
import git from "../assets/projects/git-icon.svg";
import mongo from "../assets/projects/mongodb-icon-1.svg";
import postman from "../assets/projects/postman.svg";
import contentful from '../assets/projects/contentful.svg'

// Certificate Imports
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
import advanceReact from "/src/assets/certificates/AdvanceReact.png";

// Project Imports

import reactdashboard from "../assets/projects/react-dashboard.png";
import authentication from "../assets/projects/react-authentication.png";
import reduxCart from "../assets/projects/redux-cart.png";
import simpleBookStore from "../assets/projects/simple-book-store.png";
// import reactselfie from "../assets/projects/react-selfie-crop-full.png";
// import exchangerate from "../assets/projects/exchange-rate-api.png";
// import movieticketdemo from "../assets/projects/movie-ticket.png";
// import theme from "../assets/projects/theme-full.png";
// import domarray from "../assets/projects/dom-array-method-full.png";

import { StaticImageData } from "next/image";
import react from "../assets/projects/react-2.svg";
import framer from "../assets/projects/framer-motion.svg";
import materialui from "../assets/projects/material-ui-1.svg";
import github from "../assets/githubLogo.svg";


// Skills
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
  { Image: contentful, alt: "contentful" },
];

// PROJECTS
type icons = string[];
export const projects: Array<{
  name: string;
  url?: StaticImageData;
  classname?: string;
  description: string;
  repo: string;
  stack: icons;
  live: string;
}> = [
  {
    name: "SIMPLE BOOK STORE",
    url: simpleBookStore,
    description:
      "A Postman Simple Book Store API Project where user can explore books,authenticate using Bearer token,place ,update & delete orders, developed with latest Nextjs-13.3.0,redux-toolkit & more.",
    repo: "https://github.com/BilalSsiddique/wmd-next-books",
    stack: [next, redux, tailwind, typescript, git, postman],
    live: "https://simple-book-store-bilal-siddique.vercel.app/",
  },

  {
    name: "DASHBOARD",
    url: reactdashboard,
    description:
      "An Admin Dashboard developed with react and Industry recommended packages.",
    repo: "https://github.com/BilalSsiddique/react-admin-dashboard",
    stack: [react, framer, materialui, github, git],
    live: "https://react-admin-learn.vercel.app",
  },
  {
    name: "REDUX CART",
    url: reduxCart,
    description:
      "A Shopping Cart Project where user can add,update,& delete the products, developed with latest Nextjs-13.3.0,redux-toolkit,fake Store API & Tailwind CSS.",
    repo: "https://github.com/BilalSsiddique/redux-cart",
    stack: [next, redux, typescript, tailwind, github, git],
    live: "https://redux-cart-rho.vercel.app/",
  },
  {
    name: "NEXTJS BLOG WEBSITE",
    description:
      "Developed a Blog Website using Contenful CMS(content Managament System), Nexjs along with Nextjs Server functions for SSG(Static Site Generation).",
    repo: "https://github.com/BilalSsiddique/wmd-next-contentful-blogs",
    stack: [next, react,contentful,tailwind, github, git],
    live: "https://random-blogs-by-bilalsiddique.vercel.app/",
  },
  {
    name: "AUTHENTICATION USING FIREBASE",
    url: authentication,
    description:
      "A simple Authentication project where user can signup,login & reset password , developed with react, firebase & toastify.",
    repo: "https://github.com/BilalSsiddique/test-login",
    stack: [react, firebase, github, git],
    live: "https://authentication-inky.vercel.app",
  },
  {
    name: "CURRENCY EXCHANGE RATES CALCULATOR",
    description:
      "Developed an Exchange Rate Calculator using Exchange API. Exchange APIs include Standard Conversion and Pair Conversion.",
    repo: "https://github.com/BilalSsiddique/Axiom-all-Projects/tree/main/project4",
    stack: [javascript, github, git],
    live: "https://exchange-rates-calculator.vercel.app/",
  },
];

// MORE PROJECTS

export const moreProjects: Array<{
  year: number;
  title: string;
  builtWith: icons;
  repo: string;
  live: string;
}> = [
  {
    year: 2023,
    title: "React Capture & Crop Image",
    repo: "https://github.com/BilalSsiddique/react-selfie-image-crop",
    builtWith: [react, github, git],
    live: "https://react-camera-selfie-and-card-capturing.vercel.app/",
  },
  {
    year: 2023,
    title: "Simple Todo App using Nextjs",
    repo: "https://github.com/BilalSsiddique/WMD-Nextjs-todos",
    builtWith: [next, github, git],
    live: "https://bilalsiddique-todoapp-nextjs.vercel.app/",
  },
  {
    year: 2022,
    title: "Movie Ticket Demo",
    repo: "https://github.com/BilalSsiddique/Axiom-all-Projects/tree/main/project2",
    builtWith: [javascript, github, git],
    live: "https://movie-ticket-demo-project.vercel.app/",
  },
  {
    year: 2022,
    title: "DOM Array Methods",
    repo: "https://github.com/BilalSsiddique/Axiom-all-Projects/blob/main/project5/index.html",
    builtWith: [javascript, github, git],
    live: "https://bilal-siddiqueprojects.netlify.app/project5/index.html",
  },
];

// Certificates

export const slides: Array<{ url: StaticImageData; classname?: string }> = [
  { url: advanceReact, classname: "design-react" },
  { url: javascriptc },
  { url: ITF },
  { url: reactbasics, classname: "design-javascript" },
  { url: pandas },
  { url: python },
  { url: interpython },
  { url: statis },
  { url: kagglepython },
  { url: web },
  { url: datascience },
  { url: version, classname: "design-version" },
  { url: manipluation },
  { url: kagglepandas },
];

// Experience
type experience = {
  name: string;
  title: string;
  from: string;
  to: string;
  year: string;
  workDone: string[];
};
export const experience: Array<experience> = [
  {
    name: "Radical X",
    title: "Product Development Intern",
    from: "Sep",
    to: "November",
    year: "2022",
    workDone: [
      "Collaborated in an interdisciplinary and agile team consisting of frontend and backend developers, designers and product managers.",
      "Contributed towards creating user stories, further dividing them into engineering tickets and setting them up on ClickUp board.",
      "Worked in an agile environment to develop the front-end of an Apprenticeship Project where a company is able to login to their dashboard and set up (create, read, update, delete) an apprenticeship program and successfully hire a team on contractual basis.",
      "Followed best development practices & patterns, completed assigned task & also provide suggestions.",
    ],
  },
  {
    name: "ZHAB Developers",
    title: "Front-end Engineer",
    from: "Jan",
    to: "August",
    year: "2022",
    workDone: [
      "Developed using CSS, HTML, and JavaScript to enhance functionality and user experience on web pages.",
      "Edited existing code to improve browser compatibility and mobile responsiveness.",
    ],
  },
];
