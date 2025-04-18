import React from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

interface handler {
  handleCloseMessage: () => void;
}

const MessageBox: React.FC<handler> = ({ handleCloseMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -20, y: 20 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="relative sm:block hidden max-w-sm"
    >
      {/* Message Container */}
      <div className="relative glass-card backdrop-blur-md bg-white-5 border border-white-10 rounded-2xl overflow-hidden">
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-3 p-1 rounded-full bg-white-10 hover:bg-white-20 transition-colors duration-300 z-20"
          onClick={handleCloseMessage}
        >
          <IoIosClose className="text-white text-xl" />
        </motion.button>

        {/* Message Content */}
        <div className="p-6 pr-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-white text-sm leading-relaxed">
              Hello! <span className="inline-block animate-wave">👋</span> Looking to transform your ideas into reality? With expertise across the entire tech stack, I can help bring your vision to life.
            </p>
            
            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2">
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 text-blue-400"
              >
                Frontend
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-400"
              >
                Backend
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 text-purple-400"
              >
                DevOps
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400"
              >
                Cloud
              </motion.span>
            </div>

            <p className="text-gray-300 text-sm">
              Let&apos;s collaborate on your next project - from architecture to deployment, I&apos;ve got you covered! <span className="inline-block animate-bounce">🚀</span>
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-yellow font-medium text-sm">#FullStackDeveloper</span>
              <span className="text-xs text-white-50">•</span>
              <span className="text-yellow font-medium text-sm">#CloudArchitect</span>
            </div>
          </motion.div>
        </div>

        {/* Rainbow Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rainbow opacity-75" />

        {/* Chat Arrow */}
        <div className="absolute -left-2 bottom-6">
          <div className="relative h-4 w-4">
            <div className="absolute transform rotate-45 h-4 w-4 bg-white-5 border-l border-t border-white-10 backdrop-blur-md" />
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-rainbow opacity-0 group-hover:opacity-20 blur transition duration-500 rounded-2xl -z-10" />
    </motion.div>
  );
};

export default MessageBox;
