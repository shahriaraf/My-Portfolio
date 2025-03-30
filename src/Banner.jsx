import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import myPhoto from './assets/1738929235905-removebg-preview.png';
import './App.css';

const Banner = () => {
    const roles = ["Frontend Developer",
        "MERN Stack Developer",
        "Open Source Contributor", "Competitive Programmer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = roles[currentRoleIndex];

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100); // Typing speed

            return () => clearTimeout(timeout);
        } else {
            const hold = setTimeout(() => {
                setDisplayedText("");
                setCharIndex(0);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }, 2000); // Wait before switching to next role

            return () => clearTimeout(hold);
        }
    }, [charIndex, currentRoleIndex, roles]);
    const backgroundImageu = {
        backgroundImage: "url('https://i.ibb.co.com/Hf6xBZCq/Lovepik-com-605760272-Black-technology-sense-grid-dotted-line.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };


    return (
        <div className="flex items-center justify-center text-white pt-32 pb-32" style={backgroundImageu}>
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 max-w-screen-xl mx-auto">
                {/* Animated Designation Text */}
                <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
                        Hello! <br />I'm <span className='text-[#85C5FF]'>Shahriar Araf</span>
                    </h1>

                    {/* Animated Role Text with Fade-In & Fade-Out */}
                    <motion.div
                        className="inline-flex text-2xl md:text-5xl gap-2 sm:gap-3 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {displayedText}
                        <span className="animate-pulse ml-1 text-[#85C5FF]">|</span> {/* Blinking cursor */}
                    </motion.div>


                    <p className="text-sm md:text-xl w-3/4 md:w-full m-auto text-[#5c81a3]">
                        Building sleek, user-friendly interfaces for a better web experience.
                    </p>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center sm:justify-start gap-3 sm:gap-5 mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <a href="https://github.com/shahriaraf" target="_blank" rel="noopener noreferrer" className="text-[#85C5FF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shoumo-shahriar-araf" target="_blank" rel="noopener noreferrer" className="text-[#85C5FF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/shahriar.araf.3" target="_blank" rel="noopener noreferrer" className="text-[#85C5FF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <div className="relative profile-img w-[200px] h-[200px] md:w-[250px] md:h-[250px] sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-cover bg-center border-2 border-[#DAFF98] shadow-lg"
                    style={{ backgroundImage: `url(${myPhoto})` }}>
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
