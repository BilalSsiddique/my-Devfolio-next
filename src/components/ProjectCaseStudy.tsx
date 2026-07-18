import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGitBranch,
  FiLayers,
  FiX,
} from "react-icons/fi";
import { projects } from "@/data/website-data";

type Project = (typeof projects)[0];

type ProjectCaseStudyProps = {
  project: Project;
  onClose: () => void;
};

const ProjectCaseStudy = ({ project, onClose }: ProjectCaseStudyProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!caseStudy) return null;

  const slides = [
    {
      id: "problem",
      label: "Problem",
      content: <TextSlide title="The Problem" body={caseStudy.problem} />,
    },
    {
      id: "constraints",
      label: "Constraints",
      content: (
        <ListSlide title="Real Constraints" items={caseStudy.constraints} />
      ),
    },
    {
      id: "solution",
      label: "Solution",
      content: <TextSlide title="The Solution" body={caseStudy.solution} />,
    },
    {
      id: "screenshots",
      label: "Screenshots",
      content: <ScreenshotSlide project={project} />,
    },
    {
      id: "architecture",
      label: "Architecture",
      content: <ArchitectureSlide items={caseStudy.architecture} />,
    },
    {
      id: "stack",
      label: "Stack",
      content: <StackSlide items={caseStudy.techStack} />,
    },
    {
      id: "outcome",
      label: "Outcome",
      content: (
        <OutcomeSlide
          outcomes={caseStudy.outcomes}
          nextStep={caseStudy.nextStep}
        />
      ),
    },
  ];

  const goPrevious = () => swiper?.slidePrev();
  const goNext = () => swiper?.slideNext();
  const goToSlide = (index: number) => swiper?.slideTo(index);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] bg-deep-blue/85 px-3 py-4 backdrop-blur-xl sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          aria-label="Close case study"
          className="absolute inset-0 cursor-default"
          onClick={onClose}
        />

        <motion.article
          className="relative mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#05042f] shadow-2xl shadow-black/40"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.25 }}
        >
          <header className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="font-outfit text-xs uppercase tracking-[0.18em] text-blue">
                Case study magazine
              </p>
              <h2 className="mt-1 truncate font-playfair text-2xl text-white sm:text-3xl">
                {project.name}
              </h2>
            </div>

            <div className="flex items-center justify-between gap-3 lg:justify-end">
              <p className="font-outfit text-sm text-white/45">
                {activeSlide + 1} / {slides.length}
              </p>
              <button
                aria-label="Close case study"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition duration-300 hover:border-red/40 hover:text-white"
              >
                <FiX size={22} />
              </button>
            </div>
          </header>

          <div className="border-b border-white/10 px-4 py-3 sm:px-6">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 font-outfit text-xs font-semibold transition duration-300 ${
                    activeSlide === index
                      ? "border-blue/50 bg-blue/15 text-blue"
                      : "border-white/10 bg-white/5 text-white/45 hover:text-white"
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            <Swiper
              modules={[A11y, Keyboard]}
              className="h-full"
              slidesPerView={1}
              speed={360}
              grabCursor
              keyboard={{ enabled: true }}
              onSwiper={setSwiper}
              onSlideChange={(instance) => setActiveSlide(instance.activeIndex)}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="h-full overflow-y-auto">
                  <div className="grid min-h-full grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                    <SlideIntro
                      project={project}
                      label={slide.label}
                      headline={caseStudy.headline}
                      role={caseStudy.role}
                    />

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                      {slide.content}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <footer className="flex items-center justify-between border-t border-white/10 px-4 py-4 sm:px-6">
            <button
              onClick={goPrevious}
              disabled={activeSlide === 0}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-outfit text-sm font-semibold text-white transition duration-300 hover:border-white/25 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <FiArrowLeft />
              Previous
            </button>

            <div className="hidden items-center gap-2 sm:flex">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  aria-label={`Go to ${slide.label}`}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-8 bg-gradient-rainblue"
                      : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={activeSlide === slides.length - 1}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-rainblue px-4 py-2 font-outfit text-sm font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_24px_rgba(36,203,255,0.3)] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <FiArrowRight />
            </button>
          </footer>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
};

const SlideIntro = ({
  project,
  label,
  headline,
  role,
}: {
  project: Project;
  label: string;
  headline: string;
  role: string;
}) => (
  <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
    <div>
      <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
        {label}
      </p>
      <h3 className="mt-3 font-playfair text-3xl leading-tight text-white sm:text-4xl">
        {headline}
      </h3>
      <p className="mt-5 font-outfit text-sm leading-relaxed text-white/55">
        {role}
      </p>
    </div>

    <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/10 bg-deep-blue/60">
      {project.url && (
        <Image
          src={project.url}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-deep-blue/80 px-3 py-1.5 font-outfit text-xs text-white/65 backdrop-blur-md">
        {project.category}
      </span>
    </div>
  </div>
);

const TextSlide = ({ title, body }: { title: string; body: string }) => (
  <div className="flex h-full flex-col justify-center">
    <p className="font-outfit text-sm uppercase tracking-[0.18em] text-yellow">
      Story
    </p>
    <h3 className="mt-3 font-playfair text-3xl text-white">{title}</h3>
    <p className="mt-5 font-outfit text-base leading-8 text-white/65">{body}</p>
  </div>
);

const ListSlide = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="font-playfair text-3xl text-white">{title}</h3>
    <div className="mt-6 grid grid-cols-1 gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-white/10 bg-deep-blue/45 p-4"
        >
          <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-yellow" />
          <p className="font-outfit text-sm leading-relaxed text-white/65">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ScreenshotSlide = ({ project }: { project: Project }) => {
  const screenshots = project.caseStudy?.screenshots || [];
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const currentScreenshot = screenshots[activeScreenshot];

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-playfair text-3xl text-white">Screenshots</h3>
          <p className="mt-3 font-outfit text-sm text-white/50">
            Private internal system screenshots can be curated here without
            exposing sensitive production data.
          </p>
        </div>
        {screenshots.length > 1 && (
          <p className="font-outfit text-sm text-white/40">
            {activeScreenshot + 1} / {screenshots.length}
          </p>
        )}
      </div>

      <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-deep-blue/50">
        {currentScreenshot && (
          <Image
            src={currentScreenshot}
            alt={`${project.name} screenshot ${activeScreenshot + 1}`}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveScreenshot(index)}
              className={`relative h-20 overflow-hidden rounded-lg border transition duration-300 ${
                activeScreenshot === index
                  ? "border-blue/60"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image
                src={screenshot}
                alt={`${project.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-deep-blue/20" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ArchitectureSlide = ({ items }: { items: string[] }) => (
  <div>
    <h3 className="font-playfair text-3xl text-white">Architecture</h3>
    <div className="mt-6 grid grid-cols-1 gap-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-deep-blue/45 p-4"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue/15 text-blue">
            {index + 1}
          </div>
          <p className="font-outfit text-sm leading-relaxed text-white/65">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const StackSlide = ({ items }: { items: string[] }) => (
  <div>
    <h3 className="font-playfair text-3xl text-white">Tech Stack</h3>
    <div className="mt-6 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-deep-blue/55 px-4 py-2 font-outfit text-sm text-white/70"
        >
          <FiLayers className="text-blue" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

const OutcomeSlide = ({
  outcomes,
  nextStep,
}: {
  outcomes: string[];
  nextStep: string;
}) => (
  <div>
    <h3 className="font-playfair text-3xl text-white">Outcome</h3>
    <div className="mt-6 grid grid-cols-1 gap-3">
      {outcomes.map((outcome) => (
        <div
          key={outcome}
          className="flex items-start gap-3 rounded-xl border border-yellow/15 bg-yellow/10 p-4"
        >
          <FiGitBranch className="mt-0.5 shrink-0 text-xl text-yellow" />
          <p className="font-outfit text-sm leading-relaxed text-yellow-100">
            {outcome}
          </p>
        </div>
      ))}
    </div>
    <div className="mt-6 rounded-xl border border-blue/20 bg-blue/10 p-4">
      <p className="font-outfit text-xs uppercase tracking-[0.16em] text-blue">
        Next step
      </p>
      <p className="mt-2 font-outfit text-sm leading-relaxed text-white/70">
        {nextStep}
      </p>
    </div>
  </div>
);

export default ProjectCaseStudy;
