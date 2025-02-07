import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className="text-[#698580] py-16 mt-24">
      <div className="max-w-screen-xl mx-auto px-6 pt-10">
        <h2 className="text-4xl font-semibold mb-20 text-[#698580] text-center">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* HTML Icon */}
          <motion.div 
            className="flex flex-col items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-html5 text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>

          {/* CSS Icon */}
          <motion.div 
            className="flex flex-col items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-css3-alt text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>

          {/* JavaScript Icon */}
          <motion.div 
            className="flex flex-col items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-js-square text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>

          {/* React Icon */}
          <motion.div 
            className="flex flex-col animate-spin-slow items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-react text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>

          {/* Node.js Icon */}
          <motion.div 
            className="flex flex-col items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-node text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>

          {/* Git Icon */}
          <motion.div 
            className="flex flex-col items-center" 
            whileHover={{ scale: 1.2, rotate: 180 }} 
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-brands fa-git-alt text-4xl sm:text-6xl text-[#DAFF98]"></i>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
