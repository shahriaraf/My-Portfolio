import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import myPhoto from './assets/1738690845720.jpg';
import './App.css';

const Banner = () => {
    return (
        <div className="flex items-center justify-center text-white pt-32 pb-32">
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 max-w-screen-xl mx-auto">
                {/* Animated Designation Text */}
                <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6">Web Developer</h1>
                    <p className="text-lg sm:text-xl text-[#698580]">Building sleek, user-friendly interfaces for a better web experience.</p>
                    {/* Animated Social Links */}
                    <motion.div
                        className="flex justify-center sm:justify-start gap-3 sm:gap-5 mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                        {/* Facebook Link */}
                        <a
                            href="https://facebook.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image with Animated Border as Background */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-md bg-cover bg-center border-2 sm:border-4 border-[#DAFF98] shadow-lg" style={{ backgroundImage: `url(${myPhoto})` }}>
                </div>
            </div>
        </div>
    );
};

export default Banner;
