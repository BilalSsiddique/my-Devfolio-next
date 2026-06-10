import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  headerExtra?: React.ReactNode;
  className?: string;
  glow?: "left" | "right" | "none";
};

const Section = ({
  id,
  number,
  title,
  subtitle,
  children,
  headerExtra,
  className = "",
  glow = "none",
}: SectionProps) => {
  return (
    <section id={id} className={`relative scroll-mt-28 py-20 md:py-28 ${className}`}>
      {glow === "left" && (
        <div className="pointer-events-none absolute -left-20 top-1/4 hidden sm:block b-gradient-rainbow-bg" />
      )}
      {glow === "right" && (
        <div className="pointer-events-none absolute right-0 top-0 b-gradient-rainbow-bg-right" />
      )}

      <div className="relative z-10 ss:w-5/6 mx-5 ss:mx-auto">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-start gap-5">
              <span className="font-outfit text-sm font-medium text-blue tabular-nums pt-1">
                {number}
              </span>
              <div>
                <h2 className="font-playfair text-3xl md:text-[2.75rem] leading-tight text-white">
                  {title}
                </h2>
                {subtitle && (
                  <p className="font-outfit mt-2 text-sm md:text-base text-white/50 max-w-xl">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="hidden md:flex flex-1 items-center gap-4 max-w-md ml-8 mb-2">
              <div className="h-px flex-1 bg-gradient-rainblue opacity-60" />
              <div className="h-1.5 w-1.5 rounded-full bg-yellow shrink-0" />
            </div>
          </div>

          {headerExtra && <div className="mt-8">{headerExtra}</div>}
        </motion.header>

        {children}
      </div>
    </section>
  );
};

export default Section;
