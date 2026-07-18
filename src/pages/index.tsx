import Head from "next/head";
import DotGroup from "../components/DotGroup";
import Landing from "../components/Landing";
import Section from "../components/Section";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import useMediaQuery from "../hooks/useMediaQuery";
import CustomToggleIcon from "@/components/CustomToggleIcon";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import { useState } from "react";
import About from "@/components/About";
import Whatsapp from "@/components/whatsapp/WhatsAppButton";

export default function Home() {
  const [gridSwitch, setGridSwitch] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <>
      <Head>
        <title>Bilal Siddique | Full-Stack & Cloud/DevOps Engineer</title>
        <meta
          name="description"
          content="Full-Stack Engineer with 2+ years of product delivery and 1+ year of Cloud/DevOps experience across AWS, Terraform, Docker, GitHub Actions, and observability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Bilal Siddique | Full-Stack & Cloud/DevOps Engineer"
        />
        <meta
          property="og:description"
          content="Building full-stack products, AWS infrastructure, CI/CD pipelines, and observability platforms for startup systems."
        />
      </Head>

      <main className="app relative min-h-screen bg-deep-blue overflow-x-hidden">
        {/* Page-wide ambient background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(44,188,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(44,188,233,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
          <div className="absolute top-[20%] -left-32 h-96 w-96 rounded-full bg-blue/5 blur-[120px]" />
          <div className="absolute top-[55%] -right-32 h-96 w-96 rounded-full bg-red/5 blur-[140px]" />
        </div>

        {isAboveMediumScreens && <DotGroup />}

        <div className="relative z-10">
          {/* Hero */}
          <div className="xs:w-5/6 xs:mx-auto">
            <Landing />
          </div>

          {/* About */}
          <Section
            id="about"
            number="01"
            title="About Me"
            subtitle="Full-stack product delivery with cloud and DevOps ownership."
          >
            <About />
          </Section>

          {/* Skills */}
          <Section
            id="skills"
            number="02"
            title="Tech Stack"
            subtitle="Cloud & infra, CI/CD, observability, backend, and frontend."
            glow="left"
          >
            <Skills />
          </Section>

          {/* Experience */}
          <Section
            id="experience"
            number="03"
            title="Experience"
            subtitle="Full-stack delivery, startup DevOps adoption, and AWS deployments."
          >
            <Experience />
          </Section>

          {/* Projects */}
          <Section
            id="projects"
            number="04"
            title="Projects"
            subtitle="Infrastructure dashboards, observability stacks, and production backends."
            glow="right"
          >
            <Projects />
          </Section>

          {/* Certifications */}
          <Section
            id="certifications"
            number="05"
            title="Certifications"
            subtitle="Continuous learning across cloud, development, and data."
            headerExtra={
              <div className="flex items-center gap-3 justify-center xs:justify-start">
                <p className="font-outfit text-base text-white/70">Grid view</p>
                <CustomToggleIcon
                  gridSwitch={gridSwitch}
                  setGridSwitch={setGridSwitch}
                />
              </div>
            }
          >
            <div className="md:w-full xs:w-full mx-auto">
              <Certification gridSwitch={gridSwitch} />
            </div>
          </Section>

          {/* Contact */}
          <Section
            id="contact"
            number="06"
            title="Contact"
            subtitle="Let's talk about cloud infrastructure, CI/CD, or your next project."
            className="pb-24"
          >
            <Contact />
          </Section>
        </div>

        <Whatsapp />
      </main>
    </>
  );
}
