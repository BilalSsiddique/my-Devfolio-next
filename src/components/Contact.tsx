import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import contact from "../assets/contact-image.jpeg";
import { toast } from "react-toastify";

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
      {/* Background Gradient */}
      <div className="absolute -inset-4 bg-gradient-rainbow opacity-10 blur-3xl -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center mb-12"
      >
        <h2 className="font-outfit font-bold text-3xl xs:text-4xl mb-6">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>
        <div className="flex justify-center items-center gap-3">
          <div className="h-0.5 w-12 bg-gradient-rainblue opacity-50" />
          <p className="font-outfit text-lg text-white/70">Get in touch for opportunities or just to say hi!</p>
          <div className="h-0.5 w-12 bg-gradient-rainblue opacity-50" />
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative w-full overflow-hidden rounded-xl glass-card backdrop-blur-md bg-white/5 border border-white/10 p-2">
            <Image 
              className="w-full rounded-lg transition-transform duration-500 hover:scale-105" 
              src={contact} 
              alt="contact"
              placeholder="blur"
            />
            {/* Rainbow Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-1 bg-gradient-rainblue opacity-75" />
          </div>
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            method="POST"
            action="https://formsubmit.co/dd4d0b8ba0db45f077d53e1ff5d2c38f"
            target="_blank"
            onSubmit={onSubmit}
            className="font-outfit space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  className="w-full px-4 py-3 rounded-lg glass-card backdrop-blur-md bg-white/5 border border-white/10 
                    text-white outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/50"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </motion.div>
              {errors.name && (
                <p className="text-red text-sm pl-1">
                  {errors.name.type === "required" && "Name is required"}
                  {errors.name.type === "maxLength" && "Name is too long"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  className="w-full px-4 py-3 rounded-lg glass-card backdrop-blur-md bg-white/5 border border-white/10 
                    text-white outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/50"
                  type="text"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </motion.div>
              {errors.email && (
                <p className="text-red text-sm pl-1">
                  {errors.email.type === "required" && "Email is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  className="w-full px-4 py-3 rounded-lg glass-card backdrop-blur-md bg-white/5 border border-white/10 
                    text-white outline-none focus:border-white/20 transition-all duration-300 placeholder:text-white/50 min-h-[150px] resize-y"
                  placeholder="Your Message"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
              </motion.div>
              {errors.message && (
                <p className="text-red text-sm pl-1">
                  {errors.message.type === "required" && "Message is required"}
                  {errors.message.type === "maxLength" && "Message is too long"}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden px-8 py-3 rounded-lg font-semibold 
                glass-card backdrop-blur-md bg-white/5 border border-white/10 
                transition-all duration-300 hover:border-white/20"
            >
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                Send Message
              </span>
              <div className="absolute inset-0 bg-gradient-rainblue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
