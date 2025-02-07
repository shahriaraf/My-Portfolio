import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      className="text-[#698580] mt-40 pb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-6">Contact Information</h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-envelope text-2xl text-[#DAFF98]"></i>
            <a href="shahriaraf01@gmail.com" className="text-lg hover:underline">
              shahriaraf01@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-phone text-2xl text-[#DAFF98]"></i>
            <a href="01726649175" className="text-lg hover:underline">
                01726649175
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <i className="fa-brands fa-whatsapp text-2xl text-[#DAFF98]"></i>
            <a href="https://wa.me/11234567890" className="text-lg hover:underline">
              WhatsApp: +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
