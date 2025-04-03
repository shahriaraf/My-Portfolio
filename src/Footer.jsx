import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const backgroundImageu = {
    backgroundImage: "url('https://i.ibb.co.com/ynf2kph9/starsky1.jpg')",
    backgroundSize: "contain",
    backgroundPosition: "center",
};
  return (
    <motion.footer
      className="text-[#6498c9] py-6 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={backgroundImageu}
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
