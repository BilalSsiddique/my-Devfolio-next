import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactChannels = [
  {
    label: "Email",
    value: "bilalsiddique1997@gmail.com",
    href: "mailto:bilalsiddique1997@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bilal-siddiquee",
    href: "https://www.linkedin.com/in/bilal-siddiquee/",
    icon: FaLinkedin,
  },
  {
    label: "WhatsApp",
    value: "+92 308 2177221",
    href: "https://api.whatsapp.com/send?phone=923082177221",
    icon: FaWhatsapp,
  },
  {
    label: "GitHub",
    value: "github.com/BilalSsiddique",
    href: "https://github.com/BilalSsiddique",
    icon: FaGithub,
  },
];

const Contact = () => {
  const {
    register,
    getValues,
    trigger,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
      toast.error(`Form Error: All fields are required!`);
    } else {
      setTimeout(() => {
        const nameValue = getValues("name");
        toast.success(`Thank you ${nameValue}, I will get back to you!`);
        reset({
          name: "",
          email: "",
          message: "",
        });
      }, 10000);
    }
  };

  return (
    <section className="relative">
      <div className="absolute -inset-6 bg-gradient-rainbow opacity-[0.07] blur-3xl -z-10" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-md"
        >
          <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
            Start a conversation
          </p>
          <h2 className="mt-3 font-playfair text-3xl md:text-4xl leading-tight text-white">
            Tell me what you need to ship, automate, or stabilize.
          </h2>
          <p className="mt-5 font-outfit text-base leading-relaxed text-white/60">
            Useful context: current stack, deployment target, timeline, blockers,
            and the outcome you want. I can help with cloud infrastructure,
            CI/CD, observability, dashboards, APIs, or full-stack product work.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3">
            {[
              {
                icon: HiOutlineLocationMarker,
                label: "Location",
                value: "Karachi, Pakistan - remote friendly",
              },
              {
                icon: HiOutlineClock,
                label: "Best fit",
                value: "DevOps, cloud, dashboards, APIs",
              },
              {
                icon: HiOutlineShieldCheck,
                label: "Working style",
                value: "Practical scope, clear handoff, production focus",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-deep-blue/45 p-4"
              >
                <Icon className="mt-0.5 shrink-0 text-xl text-yellow" />
                <div>
                  <p className="font-outfit text-sm font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-1 font-outfit text-sm leading-relaxed text-white/50">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3">
            {contactChannels.map(({ label, value, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-blue/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-deep-blue/70 text-blue">
                  <Icon className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="font-outfit text-xs uppercase tracking-[0.16em] text-white/35">
                    {label}
                  </p>
                  <p className="truncate font-outfit text-sm text-white/75 group-hover:text-white">
                    {value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 md:p-8 backdrop-blur-md"
        >
          <div className="mb-6">
            <p className="font-outfit text-sm uppercase tracking-[0.18em] text-blue">
              Project inquiry
            </p>
            <h3 className="mt-2 font-playfair text-3xl text-white">
              Send the brief
            </h3>
          </div>

          <form
            method="POST"
            action="https://formsubmit.co/dd4d0b8ba0db45f077d53e1ff5d2c38f"
            target="_blank"
            onSubmit={onSubmit}
            className="font-outfit space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70">
                  Name
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-deep-blue/55 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue/50"
                  type="text"
                  placeholder="Your name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red text-sm">
                    {errors.name.type === "required" && "Name is required"}
                    {errors.name.type === "maxLength" && "Name is too long"}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70">
                  Email
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-deep-blue/55 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue/50"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red text-sm">
                    {errors.email.type === "required" && "Email is required"}
                    {errors.email.type === "pattern" && "Invalid email address"}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-white/70">
                What are we building or fixing?
              </label>
              <textarea
                className="min-h-[190px] w-full resize-y rounded-xl border border-white/10 bg-deep-blue/55 px-4 py-3 text-black outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue/50"
                placeholder="Example: Need AWS ECS deployment automation, observability setup, admin dashboard, backend API, or a full-stack product build..."
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red text-sm">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" && "Message is too long"}
                </p>
              )}
            </div>

            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-rainblue px-6 py-3 font-semibold text-deep-blue transition duration-300 hover:shadow-[0_0_30px_rgba(36,203,255,0.35)] md:w-auto">
              Send message
              <HiOutlineArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
