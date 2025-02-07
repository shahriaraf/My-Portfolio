import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="text-[#698580] py-6 mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
