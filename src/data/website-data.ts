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
import meshGradient from "../assets/projects/mesh-gradient.png";
import mappetizerAdminPanel from "@/assets/projects/mappetizer-admin-panel.webp";
import ecsMonitorPro from "@/assets/projects/ecs-pro/ECS-monitor-pro.webp";
import costExplorer from "@/assets/projects/ecs-pro/cost-explorer.png";
import ec2ContainersMetrics from "@/assets/projects/ecs-pro/ec2-containers-metrics.png";
import devcurate from "@/assets/projects/Devcurate.jpeg";
import taskerly from "@/assets/projects/Taskerly.png";

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

export const techStackGroups = [
  {
    title: "Cloud & Infra",
    summary: "AWS production infrastructure, networking, container runtime, and cost-aware hosting.",
    skills: [
      "AWS ECS",
      "EC2",
      "VPC",
      "ALB",
      "IAM",
      "ACM",
      "ECR",
      "CloudWatch",
      "Cost Explorer",
      "Cloudflare",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Terraform",
    ],
  },
  {
    title: "CI/CD",
    summary: "Automated ECS and EC2 deployments with repeatable release paths.",
    skills: [
      "GitHub Actions",
      "ECR pipelines",
      "Zero-downtime deployments",
      "ECS deployments",
      "EC2 deployments",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Observability",
    summary: "Metrics, logs, traces, and log-to-trace workflows for microservices.",
    skills: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "OpenTelemetry",
      "OTLP",
      "Distributed tracing",
      "Log-trace correlation",
    ],
  },
  {
    title: "Backend",
    summary: "API services, queues, caches, and data layers for product systems.",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    title: "Frontend",
    summary: "Dashboards, admin panels, and SaaS interfaces with modern React tooling.",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Redux Toolkit",
    ],
  },
  {
    title: "Dev Practices",
    summary: "Practical engineering habits for delivery, operations, and collaboration.",
    skills: [
      "Git",
      "Linux/Unix",
      "Shell scripting",
      "Microservices",
      "Agile/Scrum",
      "Security-aware deployments",
    ],
  },
];

// PROJECTS
type icons = string[];
export const projects: Array<{
  name: string;
  url?: StaticImageData;
  classname?: string;
  category?: string;
  impact?: string;
  description: string;
  repo: string;
  stack: icons;
  live?: string;
  internal?: boolean;
  caseStudy?: {
    enabled: boolean;
    headline: string;
    role: string;
    problem: string;
    constraints: string[];
    solution: string;
    outcomes: string[];
    screenshots: StaticImageData[];
    architecture: string[];
    techStack: string[];
    nextStep: string;
  };
}> = [
  {
    name: "Observability Stack",
    url: meshGradient,
    category: "Staging Observability",
    impact: "Cost-aware bug detection before launch",
    description:
      "Designed and deployed a staging observability stack on EC2 for a startup team using Prometheus, Grafana, Loki, Tempo, and OpenTelemetry. The setup helps catch bugs earlier, control pre-launch infrastructure cost, and prepares the path for production ECS observability after launch.",
    repo: "",
    stack: [node, postgreSQL, git, github],
    internal: true,
  },
  {
    name: "ECS Monitor Pro",
    url: ecsMonitorPro,
    category: "Cloud Dashboard",
    impact: "Centralized AWS operations and business workflows",
    description:
      "Built ECS MonitorPro as an internal cloud management platform for a startup, independently designing and developing real-time ECS cluster visibility, container health, task status, CloudWatch logs, AWS Cost Explorer metrics, Cloudflare geo-blocking, employee and applicant management, resume viewing, and Resend-powered bulk email campaigns.",
    repo: "",
    stack: [next, node, typescript, tailwind, git],
    internal: true,
    caseStudy: {
      enabled: true,
      headline: "Centralized cloud operations for a startup engineering team",
      role: "Sole engineer - product, frontend, backend, AWS integrations, deployment architecture, and Terraform infrastructure.",
      problem:
        "The team needed one place to understand ECS health, task status, CloudWatch logs, AWS spend, user operations, applicant workflows, geo-blocking, and email campaigns. Without a central platform, engineering and operations work was spread across AWS consoles, Cloudflare, resumes, spreadsheets, and manual checks.",
      constraints: [
        "Startup cost sensitivity before launch",
        "Private internal system with sensitive applicant and infrastructure data",
        "Needed real-time operational visibility without adding heavy platform overhead",
        "Frontend had to be secure, fast, and cheap to host",
      ],
      solution:
        "I designed and built ECS MonitorPro as an internal cloud management platform with a static Next.js frontend, NestJS backend, AWS SDK integrations, CloudWatch and Cost Explorer views, Cloudflare geo-blocking controls, employee and applicant workflows, resume viewing, and Resend-powered bulk emails.",
      outcomes: [
        "Centralized ECS cluster visibility, container health, task status, logs, and cost analytics",
        "Reduced day-to-day DevOps operational overhead for engineering workflows",
        "Combined infrastructure and business operations into one internal dashboard",
        "Secured static frontend delivery through private S3, CloudFront, and Origin Access Control",
      ],
      screenshots: [ecsMonitorPro, costExplorer, ec2ContainersMetrics],
      architecture: [
        "Static Next.js frontend built and uploaded to a private S3 bucket",
        "CloudFront CDN in front of S3 with Origin Access Control",
        "NestJS backend deployed separately on AWS",
        "AWS SDK integrations for ECS, CloudWatch Logs, and Cost Explorer",
        "Cloudflare API and Resend integrations for operations workflows",
        "Terraform-provisioned infrastructure",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "AWS SDK",
        "ECS",
        "CloudWatch",
        "Cost Explorer",
        "S3",
        "CloudFront",
        "OAC",
        "Cloudflare API",
        "Resend",
        "Terraform",
      ],
      nextStep:
        "Continue expanding cloud operations workflows as the product moves from pre-launch operations into broader production usage.",
    },
  },
  {
    name: "Startup Admin Platform",
    url: mappetizerAdminPanel,
    category: "SaaS Admin Platform",
    impact: "Central operational hub for a multi-tenant restaurant SaaS",
    description:
      "Designed and developed a comprehensive internal administration platform for a startup's multi-tenant restaurant SaaS application. Built as the sole engineer with Next.js, TypeScript, NestJS, TanStack Query, and shadcn/ui, covering restaurant verification, ownership claim approvals, reservations, user moderation, blocked users, staff role assignment, advanced search and filtering, and detailed restaurant operational profiles.",
    repo: "",
    stack: [next, node, typescript, tailwind, git],
    internal: true,
  },
  {
    name: "S3 CloudFront Frontend Delivery",
    url: meshGradient,
    category: "Cloud Delivery",
    impact: "Secure static hosting for internal startup platforms",
    description:
      "Designed the frontend delivery architecture for ECS MonitorPro and the Startup Admin Platform by building static Next.js applications, hosting them in private Amazon S3 buckets, serving them through Amazon CloudFront as the CDN, and securing origin access with Origin Access Control. The infrastructure was provisioned with Terraform while NestJS backends were deployed separately on AWS.",
    repo: "",
    stack: [next, typescript, git, github],
    internal: true,
  },
  {
    name: "DevCurate",
    url: devcurate,
    category: "AI Knowledge Base",
    impact: "Centralized developer learning resources with AI organization",
    description:
      "Built an AI-powered knowledge base for developers who save learning resources across LinkedIn, Notion, GitHub, bookmarks, files, and notes. DevCurate ingests URLs, manual notes, PDFs, images, and documents, then uses AI for summarization, categorization, tag extraction, duplicate detection, semantic search, related content, learning paths, progress analytics, and freshness signals. The backend uses NestJS, TypeScript, PostgreSQL, Prisma, OpenAI, JWT auth, AWS S3, Redis, and background job processing.",
    repo: "",
    stack: [node, postgreSQL, typescript, git, github],
  },
  {
    name: "Taskerly",
    url: taskerly,
    category: "Engineering Productivity",
    impact: "Cross-repo task, plan, docs, and context tracker",
    description:
      "Developed a standalone task and plan tracker for personal engineering work across multiple repositories. Taskerly keeps repo tasks, durable implementation plans, append-only plan history, technical docs, doc versions, plan-to-doc links, external references, and last-context breadcrumbs together so work can resume quickly after context switches. The backend is built with NestJS, Prisma, and PostgreSQL, with a planned Next.js frontend.",
    repo: "https://github.com/BilalSsiddique/taskerly",
    stack: [node, postgreSQL, typescript, next, git],
  },
  {
    name: "Play - YouTube Clone Backend",
    url: meshGradient,
    category: "Backend API",
    impact: "Production-style video platform API",
    description:
      "Production-grade YouTube clone backend built with Node.js, Express, and MongoDB. Supports video uploads, subscriptions, likes, comments, JWT authentication, and Cloudinary media storage.",
    repo: "https://github.com/BilalSsiddique/play-youtube-clone-nodejs-backend",
    stack: [node, mongo, javascript, git, github],
    live: "https://github.com/BilalSsiddique/play-youtube-clone-nodejs-backend",
  },
  {
    name: "EcomPulse - NextVista Bazaar",
    url: dineMarketEcommerce,
    category: "Ecommerce",
    impact: "Sanity CMS, Stripe, and Clerk storefront",
    description:
      "Engineered a Next.js ecommerce storefront with Clerk authentication, Stripe payments, and Sanity CMS for product management, using static generation patterns for fast browsing.",
    repo: "https://github.com/BilalSsiddique/wmd-next-ecommerce-sanity",
    stack: [next, postgreSQL, tailwind, git, typescript, Sanity, clerk],
    live: "https://wmd-next-ecommerce-sanity.vercel.app/",
  },
  {
    name: "React Insights Dashboard",
    url: reactdashboard,
    category: "Admin Dashboard",
    impact: "Interactive analytics UI with charts",
    description:
      "Built a data-focused React admin dashboard with charting, Material UI, and Framer Motion to present analytics in a responsive operational interface.",
    repo: "https://github.com/BilalSsiddique/react-admin-dashboard",
    stack: [react, framer, materialui, github, git],
    live: "https://react-admin-learn.vercel.app",
  },
  {
    name: "Tech Company Portfolio",
    url: companyPortfolio,
    category: "Frontend",
    impact: "Figma-to-Next.js responsive build",
    description:
      "Transformed a Figma design into a responsive company portfolio with Next.js, Swiper interactions, and structured grid-based content.",
    repo: "",
    stack: [next, react, typescript, tailwind, github, git],
    live: "https://company-portfolio-pi.vercel.app/",
  },
  {
    name: "Bookworm Haven",
    url: simpleBookStore,
    category: "Web App",
    impact: "Authenticated book exploration workflow",
    description:
      "Built a Next.js book store with bearer-token authentication and an API-driven book browsing experience.",
    repo: "https://github.com/BilalSsiddique/wmd-next-books",
    stack: [next, redux, tailwind, typescript, git, postman],
    live: "https://simple-book-store-bilal-siddique.vercel.app/",
  },
  {
    name: "NeoBank - Crypto",
    url: neobank,
    category: "Frontend",
    impact: "Responsive fintech login experience",
    description:
      "Created a responsive crypto fintech login experience with Next.js, React, TypeScript, and Tailwind CSS.",
    repo: "",
    stack: [next, react, typescript, tailwind, github, git],
    live: "https://neobank-seven.vercel.app/",
  },
  {
    name: "Dynamic Contact List App",
    url: contactList,
    category: "Web App",
    impact: "CRUD contact management",
    description:
      "Developed a Remix contact management app with dynamic routes and full create, read, update, and delete workflows.",
    repo: "https://github.com/BilalSsiddique/remix-contacs",
    stack: [react, typescript, tailwind, github, git],
    live: "https://remix-contacs.vercel.app/contacts/giovanni-benussi",
  },

  {
    name: "NextCart Redux",
    url: reduxCart,
    category: "Ecommerce UI",
    impact: "Redux Toolkit shopping cart flow",
    description:
      "Built a shopping cart with Next.js, Redux Toolkit, Tailwind CSS, and Fake Store API data for realistic add, update, and remove product flows.",
    repo: "https://github.com/BilalSsiddique/redux-cart",
    stack: [next, redux, typescript, tailwind, github, git],
    live: "https://redux-cart-rho.vercel.app/",
  },
  {
    name: "Todoist",
    url: todoist,
    category: "Full-Stack App",
    impact: "Django REST Framework plus React",
    description:
      "Built a task management application using Django REST Framework and React.js.",
    repo: "https://github.com/BilalSsiddique/todoist-django-react-frontend",
    stack: [react, django, redux, tailwind, github, git],
    live: "https://todoist-django-react-frontend.vercel.app",
  },

  {
    name: "Project Nexus - Student Project Allocation",
    url: studentProject,
    category: "University System",
    impact: "Student project assignment workflow",
    description:
      "Created a Django project management module for adding, editing, and assigning projects to students with a clear management overview.",
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
    title: "Full-Stack Engineer · Cloud/DevOps Focus",
    from: "Apr",
    to: "Present",
    year: "2024 - Present",
    workDone: [
      "Pioneered DevOps culture in a startup by adopting Infrastructure as Code with Terraform and automating end-to-end CI/CD pipelines via GitHub Actions, cutting manual release effort by 80%.",
      "Architected production-grade AWS ECS infrastructure with Terraform, provisioning VPC, ALB, IAM roles and policies, OIDC providers, ACM certificates, and ECR repositories.",
      "Optimized Docker images from 930 MB to 220 MB, improving build times and reducing ECR storage costs.",
      "Migrated deployment strategy from ECS to EC2 with Docker Compose for pre-launch cost optimization, including Nginx and SSL certificate auto-renewal.",
      "Implemented a staging observability platform on EC2 with Prometheus, Grafana, Loki, Tempo, and OpenTelemetry for metrics, logs, traces, and log-to-trace correlation before production launch.",
      "Developed an internal admin dashboard with Next.js and NestJS, integrating AWS SDK, CloudWatch Logs, Cost Explorer, Cloudflare geo-blocking controls, and Resend.",
      "Built an Admin Panel for a multi-tenant restaurant SaaS application using Next.js, shadcn/ui, and TanStack Query.",
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
    name: "RadicalX",
    title: "Software Engineer Intern",
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
