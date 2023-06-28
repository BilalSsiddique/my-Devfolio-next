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
    <section className="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ durationa: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-outfit font-semibold text-xl xs:text-3xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex my-5">
            {/* Line */}
            <div className="h-0.5 bg-gradient-rainblue w-2/4 mr-auto"></div>
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ durationa: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image className="w-full rounded-sm" src={contact} alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, durationa: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            method="POST"
            action="https://formsubmit.co/dd4d0b8ba0db45f077d53e1ff5d2c38f"
            target="_blank"
            onSubmit={onSubmit}
            className="font-outfit"
          >
            <input
              className=" rounded-sm w-full text-black outline-0 font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="text-black rounded-sm w-full outline-0  bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1 ">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="text-black rounded-sm w-full outline-0 bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1 font-outfit">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              className="font-outfit mt-5 text-sm xs:text-lg bg-gradient-rainblue text-deep-blue rounded-sm  xs:w-[50%] py-3 px-5 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            >
              SEND ME MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
