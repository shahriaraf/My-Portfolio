import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] text-[#7AE2CF] border border-[#1e3640] rounded-t-full mt-20 py-12 pt-24"
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
