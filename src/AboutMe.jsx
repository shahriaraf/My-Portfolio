import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion for animations

const AboutMe = () => {
  return (
    <div className="text-[#698580] py-16 mt-24">
      <div className="max-w-screen-xl mx-auto px-6 pt-10">
        
        {/* Title with animation */}
        <motion.h2
          className="text-4xl text-center text-[#698580] font-semibold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        
        {/* Introduction paragraph with animation */}
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm [Your Name], a passionate Web Developer with a love for crafting engaging and dynamic digital experiences. My programming journey began a few years ago when I decided to combine my creative problem-solving skills with technology to build useful and user-friendly websites. What started as a curiosity quickly turned into a full-fledged passion for frontend development.
        </motion.p>

        {/* Work type and tech stack paragraph with animation */}
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I enjoy working with JavaScript and React to bring innovative ideas to life. There's something satisfying about building sleek, intuitive interfaces that users can easily interact with. I find the challenge of creating responsive designs and optimizing user experience to be both rewarding and exciting. I love keeping up with new web technologies and continuously learning to improve my skills.
        </motion.p>

        {/* Hobbies and interests paragraph with animation */}
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Outside of coding, I’m an avid [insert hobby, e.g., photographer, gamer, traveler, painter, etc.]. Whether it's spending time in nature, playing [insert sport, e.g., basketball], or experimenting with new creative projects, I believe it's important to maintain a healthy balance between work and play. These activities fuel my creativity and allow me to approach challenges with fresh perspectives.
        </motion.p>

        {/* Closing paragraph with animation */}
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I'm always open to new projects and collaborations, and I’m looking forward to connecting with others who share my passion for building meaningful web experiences. If you're interested in working together or just want to chat about web development, feel free to reach out. Let's create something amazing together!
        </motion.p>
        
      </div>
    </div>
  );
};

export default AboutMe;
