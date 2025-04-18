// About
import programmer from "@/assets/programmer.gif";

// Skills Import
import javascript from "@/assets/javascript.svg";
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
import contentful from "../assets/projects/contentful.svg";
import Sanity from "../assets/sanity.svg";
import pythonskill from "@/assets/python-5.svg";
import django from "@/assets/Django.svg";
import Flask from "@/assets/flask.svg";
import Bootstrap from "@/assets/Bootstrap5.svg";
import postgreSQL from "@/assets/postgresql.svg";
import airflow from "@/assets/airflow.svg";
import mysql from "@/assets/mysql-6.svg";
import streamlit from "@/assets/streamlit.svg";
import clerk from "@/assets/clerk.png";
import shopify from "@/assets/shopify.svg";

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
import sql from "@/assets/certificates/sql.svg";
import reactNative from "@/assets/react-native.svg";

// Project Imports

import reactdashboard from "../assets/projects/react-dashboard.png";
import authentication from "../assets/projects/react-authentication.png";
import reduxCart from "../assets/projects/redux-cart.png";
import simpleBookStore from "../assets/projects/simple-book-store.png";
import studentProject from "@/assets/projects/Student-Project-Management.png";
import dineMarketEcommerce from "@/assets/projects/dine-market-ecommerce.png";
import todoist from "@/assets/projects/todoist.png";
import companyPortfolio from "@/assets/projects/company-portfolio.png";
import neobank from "@/assets/projects/Neo-bank.png";
import contactList from "@/assets/projects/Contact-List-app.png";

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

// SERVICES
import service1 from "@/assets/services/MODERN FULL-STACK DEVELOPMENT.gif";
import service2 from "@/assets/services/Next.js with Shopify.png";
import Swiper from "swiper";

// About

export const about = [
  {
    Image: programmer,
    alt: "programmer Image",
    about: "",
  },
];

// Skills
export const tectStackIcons = [
  { Image: javascript, alt: "Javascript" },
  { Image: typescript, alt: "Typescript" },
  { Image: react, alt: "React.js" },
  { Image: reactNative, alt: "React Native" },
  { Image: next, alt: "Next.js" },
  { Image: shopify, alt: "Shopify / Custom-shopify" },
  { Image: pythonskill, alt: "Python" },
  { Image: django, alt: "django" },
  { Image: Flask, alt: "Flask" },
  { Image: postgreSQL, alt: "PostgreSQL" },
  { Image: figma, alt: "Figma" },
  { Image: material, alt: "Material-UI" },
  { Image: tailwind, alt: "Tailwind" },
  { Image: redux, alt: "Redux-Toolkit" },
  { Image: firebase, alt: "Firebase" },
  { Image: git, alt: "Git & Github" },
  { Image: mongo, alt: "Mongo-DB" },
  { Image: contentful, alt: "contentful" },
  { Image: Sanity, alt: "Sanity" },
  { Image: clerk, alt: "clerk" },
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
  live?: string;
}> = [
  {
    name: "🌟EcomPulse 🛒💓: NextVista Bazaar (Sanity CMS,Stripe & Clerk AUTH)",
    url: dineMarketEcommerce,
    description:
      "✨Engineered a lightning-fast Ecommerce Store with Next.js, React.js,Clerk Authentication,Stripe and Sanity CMS for efficient product management, utilizing SSG and ISG for a seamless user experience.",
    repo: "https://github.com/BilalSsiddique/wmd-next-ecommerce-sanity",
    stack: [next, postgreSQL, tailwind, git, typescript, Sanity, clerk],
    live: "https://wmd-next-ecommerce-sanity.vercel.app/",
  },
  {
    name: "📊 React Insights Dashboard",
    url: reactdashboard,
    description:
      "✨ A powerful Admin Dashboard meticulously crafted with React.js and industry-recommended packages including Novo Charts, Material UI, and Framer Motion, presenting data visualization in a dynamic and intuitive interface.",
    repo: "https://github.com/BilalSsiddique/react-admin-dashboard",
    stack: [react, framer, materialui, github, git],
    live: "https://react-admin-learn.vercel.app",
  },
  {
    name: "🛒 Tech Company Portfolio",
    url: companyPortfolio,
    description:
      "✨ Transformed from a Figma design, this company portfolio is now fully functional and responsive, featuring dynamic elements such as Swiper.js for smooth slideshows, Grid layout for structured content presentation, and more, ensuring an engaging user experience.",
    repo: "",
    stack: [next, react, typescript, tailwind, github, git],
    live: "https://company-portfolio-pi.vercel.app/",
  },
  {
    name: "📚 Bookworm Haven",
    url: simpleBookStore,
    description:
      "✨ A sleek Book Store Project built on the robust Next.js v13.3.0, featuring seamless user authentication using Bearer tokens and an engaging exploration of books through the POSTMAN provided API.",
    repo: "https://github.com/BilalSsiddique/wmd-next-books",
    stack: [next, redux, tailwind, typescript, git, postman],
    live: "https://simple-book-store-bilal-siddique.vercel.app/",
  },
  {
    name: "🛒 NeoBank - Crypto",
    url: neobank,
    description:
      "✨Crafted with Next.js, React.js, Tailwind CSS, and TypeScript, this login page is designed for a crypto-based company, offering a seamless and secure authentication experience.",
    repo: "",
    stack: [next, react, typescript, tailwind, github, git],
    live: "https://neobank-seven.vercel.app/",
  },
  {
    name: "🛒 Dynamic Contact List App",
    url: contactList,
    description:
      "✨ Seamlessly developed using the latest Remix Framework, custom CSS, React Router, and Dynamic Routes, this Contact List Web App empowers users with comprehensive contact management functionalities. Effortlessly add, update, and delete contacts, ensuring a seamless and intuitive experience throughout.",
    repo: "https://github.com/BilalSsiddique/remix-contacs",
    stack: [react, typescript, tailwind, github, git],
    live: "https://remix-contacs.vercel.app/contacts/giovanni-benussi",
  },

  {
    name: "🛒 NextCart-Redux",
    url: reduxCart,
    description:
      "✨ A Shopping Cart Project utilizing Next.js v13.3.0, Redux Toolkit, and Tailwind CSS, offering a seamless shopping experience where users can effortlessly add, update, and delete products. Powered by a Fake Store API for realistic product data 🛍️.",
    repo: "https://github.com/BilalSsiddique/redux-cart",
    stack: [next, redux, typescript, tailwind, github, git],
    live: "https://redux-cart-rho.vercel.app/",
  },
  {
    name: "🚀 Todoist",
    url: todoist,
    description:
      "✨ Streamline your tasks with TodoistXpress, a robust Todoist web app crafted using Django Rest Framework and React.js! 📝.",
    repo: "https://github.com/BilalSsiddique/todoist-django-react-frontend",
    stack: [react, django, redux, tailwind, github, git],
    live: "https://todoist-django-react-frontend.vercel.app",
  },

  {
    name: "🎓PROJECT NEXUS : STREAMLINED STUDENT PROJECT ALLOCATION",
    url: studentProject,
    description:
      "✨ Incorporating Python Django, I created a seamless project management module. This project allows effortless project addition, editing, and assignment to students, providing a clear overview of assigned projects for efficient management. 🚀",
    repo: "https://github.com/BilalSsiddique/basic_student_project_allocation_system",
    stack: [pythonskill, django, postgreSQL, Bootstrap, git],
    live: "https://basic-student-project-allocation-system.vercel.app/",
  },
  {
    name: "CONSUMER COMPLAINTS DATA PIPELINE AND VISUALIZATION",
    description:
      "Crafted an end-to-end ETL solution in Airflow for Consumer Financial Protection Bureau complaint data, meeting internal stakeholders' need for up-to-date monitoring.",
    repo: "https://github.com/BilalSsiddique/CFPB-Complaints-ETL-Dashboard",
    stack: [pythonskill, airflow, mysql, streamlit, github, git],
    live: "https://github.com/BilalSsiddique/CFPB-Complaints-ETL-Dashboard",
  },
  {
    name: "NEXTJS BLOG WEBSITE",
    description:
      "Developed a Blog Website using Contenful CMS(content Managament System), Nexjs along with Nextjs Server functions for SSG(Static Site Generation).",
    repo: "https://github.com/BilalSsiddique/wmd-next-contentful-blogs",
    stack: [next, react, contentful, tailwind, github, git],
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
  { url: sql },
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

// SERVICES
export type services = {
  id: number;
  name: string;
  image: StaticImageData;
  tech?: string[];
  techStack: [string[], string[], string[]];
  techIcons?: StaticImageData[];
};

export const service: Array<services> = [
  {
    id: 2,
    name: "MODERN CUSTOM ECOMMERCE",
    image: service2,
    tech: ["FRONT-END", "BACK-END", "DATABASE"],
    techIcons: [shopify, next, react, tailwind],
    techStack: [
      [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Chakra UI",
        "Redux-toolkit",
        "Redux",
        "RTK Query",
        "Figma",
      ],
      ["Next.js", "Shopify", "Sanity", "Contentful", "Express"],
      ["MySQL", "PostgreSQL", "Mongo-DB", "Drizzle-ORM"],
    ],
  },
  {
    id: 1,
    name: "FULL-STACK DEVELOPMENT USING MODERN TECH-STACK",
    image: service1,
    tech: ["FRONT-END", "BACK-END", "DATABASE"],
    techStack: [
      [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Chakra UI",
        "Redux-toolkit",
        "Redux",
        "RTK Query",
        "python/Django",
        "Figma",
      ],
      ["Next.js", "Django-Rest-Framework", "Express", "Flask"],
      ["MySQL", "PostgreSQL", "Mongo-DB", "ORMS"],
    ],
  },
];

// service[0].techStack[1].

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
    name: "Code Reroute",
    title: "Junior Software Engineer",
    from: "April",
    to: "April",
    year: "2024-2025",
    workDone: [
      "Introduced DevOps culture in a startup environment, implementing best practices using Terraform and GitHub Actions.",
      "Optimized Docker images, reducing size from 930 MB to 220 MB for improved deployment efficiency.",
      "Provisioned and deployed scalable AWS ECS infrastructure with VPC, ALB, and secure networking.",
      "Developed an internal admin dashboard to monitor AWS ECS container metrics, task counts, and real-time cluster status.",
      "Integrated AWS cost analytics to visualize spend across all services with daily averages, service-wise breakdowns, and date filters.",
      "Implemented Geo-blocking controls via Cloudflare for region-based traffic restrictions.",
      "Built user and employee management modules to track beta users and manage applicant data with resume viewing and status-based filtering.",
      "Created a log viewer for inspecting logs across all ECS services in the cluster.",
      "Built a Mass Email system targeting beta users and applicants as segmented audiences.",
      "Developed an Active Resources view displaying all live AWS resources for better infrastructure visibility.",
    ],
  },
  {
    name: "Fiverr | Upwork",
    title: "Full-Stack Engineer",
    from: "Jan",
    to: "Present",
    year: "2023",
    workDone: [
      "fortunate to collaborate with clients from around the world, allowing me to showcase my expertise and deliver exceptional results through my services.",
    ],
  },
  {
    name: "UIT University",
    title: "Assistant Python Lecturer",
    from: "Jan",
    to: "July",
    year: "2023",
    workDone: [
      "Assisted lead Python lecturer in preparing and delivering engaging lectures.",
      "Conducted tutorial sessions to provide additional support on Python programming concepts..",
      "Assisted in organizing and coordinating coding competitions or workshops to foster a coding culture among students.",
      "Maintained a positive and inclusive learning environment, encouraging students to explore and excel in Python programming.",
    ],
  },

  {
    name: "Radical X",
    title: "Software Engineer Intern ",
    from: "Sep",
    to: "Nov",
    year: "2022",
    workDone: [
      "Collaborated in an interdisciplinary and agile team consisting of frontend and backend developers, designers and product managers.",
      "Contributed towards creating user stories, further dividing them into engineering tickets and setting them up on ClickUp board.",
      "Worked in an agile environment to develop the front-end of an Apprenticeship Project where a company is able to login to their dashboard and set up (create, read, update, delete) an apprenticeship program and successfully hire a team on contractual basis.",
      "Followed best development practices & patterns, completed assigned task & also provide suggestions.",
    ],
  },
];
