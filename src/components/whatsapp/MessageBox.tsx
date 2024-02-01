import React from "react";
import { motion } from "framer-motion";
const MessageBox = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -350 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="container sm:block hidden  text-black z-50 bottom-0 shadow-2xl font-outfit"
    >
      <div className="arrow  ">
        <div className="outer"></div>
        <div className="inner border-r-[20px] border-solid border-b-amber-200"></div>
      </div>
      <div className=" message-body  bg-deep-blue ">
        <p>
          Hello! 👋 Aspiring for innovation or need technical assistance? Feel
          free to reach out to discuss software solutions, tech collaborations,
          or any queries you might have. I&quot;m here to help! 🚀
          #TechEnthusiast.
        </p>
      </div>
    </motion.div>
  );
};

export default MessageBox;
