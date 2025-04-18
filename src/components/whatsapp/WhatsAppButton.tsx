import React, { useEffect, useState } from "react";
import Image from "next/image";
import MessageBox from "./MessageBox";
import { motion, AnimatePresence } from "framer-motion";

const Message = "Hello, Bilal. I have a project and I need you to develop it!";

const WhatsAppButton = () => {
  const [displayMessage, setDisplayMessage] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setDisplayMessage(true);

      setTimeout(() => {
        setDisplayMessage(false);
      }, 10000);
    }, 20000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleCloseMessage = () => {
    setDisplayMessage(false);
  };

  return (
    <div className="fixed flex z-50 bottom-5 left-5 items-end gap-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <div className="absolute -inset-2 bg-gradient-rainbow opacity-0 group-hover:opacity-70 rounded-full blur transition duration-500" />
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${923082177221}&amp;text=${Message}`}
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0.5 bg-white rounded-full" />
          <Image
            src="./whatsapp-logo.svg"
            alt="WhatsApp Logo"
            height={40}
            width={40}
            className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300"
          />
          
          {/* Ping Animation */}
          <span className="absolute inset-0 border-2 border-green-500 rounded-full animate-ping opacity-75" />
        </a>
      </motion.div>

      <AnimatePresence>
        {displayMessage && (
          <MessageBox handleCloseMessage={handleCloseMessage} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton; 