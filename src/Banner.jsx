import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import myPhoto from './assets/1738929235905-removebg-preview.png';
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
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Hello! <br />I'm <span className='text-[#DAFF98]'>Shahriar Araf</span></h1>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6">Web Developer</h1>
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
                            href="https://github.com/shahriaraf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/shoumo-shahriar-araf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                        {/* Facebook Link */}
                        <a
                            href="https://www.facebook.com/shahriar.araf.3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#DAFF98] text-3xl sm:text-4xl p-4 rounded-full shadow-lg transition duration-300"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image with Animated Border as Background */}
                <div
                    className="relative w-[250px] h-[250px] sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-cover bg-center border-2 sm:border-2 border-[#DAFF98] shadow-lg"
                    style={{ backgroundImage: `url(${myPhoto})` }}
                >
                </div>
                <div className="lg:hidden inline mt-5">
                    <button className="border-[1px] px-4 py-2 hover:text-black border-[#698580] text-[#DAFF98]">
                        Resume
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Banner;
