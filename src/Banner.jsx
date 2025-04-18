import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import gsap from 'gsap'

const Banner = () => {
    const roles = ["Frontend Developer",
        "MERN Stack Developer", "Web Designer",
        "Open Source Contributor"];
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



    const banRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to("#spinner", {
                rotate: 360,
                duration: 8,
                repeat: -1,
                ease: "linear" // important to keep speed consistent
            });
        }, banRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-30 rounded-4xl border border-[#1e3640] mt-10'>
            <div className='pl-[350px] pt-5 text-white flex justify-start items-center'>
                <p className='uppercase text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2'>
                    <i className="fas fa-handshake bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> Introduce
                </p>
            </div><hr className="border-t border-[#077A7D] my-4 w-1/5 ml-80" />

            <div className="gap-10 sm:gap-20 pl-[320px] pt-10">
                {/* Animated Designation Text */}
                <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
                        <span id='intro-text1' className='inline-block'>Hello!</span><br /><span id='intro-text2' className='inline-block'>I'm Shoumo Shahriar Araf</span>
                    </h1>

                    {/* Animated Role Text with Fade-In & Fade-Out */}

                    {/* Animated Role Text with Fade-In & Fade-Out */}
                    <motion.div
                        className="inline-flex text-3xl md:text-5xl gap-2 sm:gap-3 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 backdrop-blur-sm bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {displayedText}
                        <span className="animate-pulse ml-1 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">|</span> {/* Blinking cursor */}
                    </motion.div>


                    <p className="text-lg md:text-[22px] w-3/4 md:w-[700px] text-[#777777]">
                    Crafting clean code, with a designer’s soul. Turning ideas into interactive, elegant experiences.
                    </p>
                </motion.div>


                <div className="md:hidden inline-block">
                    <div className="md:hidden inline-block">
                        <a
                            href="/public/shoumo-shahriar-araf.pdf.pdf" // <-- replace with the correct path to your resume file
                            download
                        >
                            <button
                                className="border-[1px] flex bg-transparent items-center gap-2 px-4 py-2 
                border-[#5c81a3] text-[#85C5FF] hover:text-black
                focus:text-black active:text-black"
                                onTouchStart={(e) => e.currentTarget.classList.add("text-black")}
                                onTouchEnd={(e) => e.currentTarget.classList.remove("text-black")}
                            >
                                Resume
                                <span><i className="fa-solid fa-arrow-down"></i></span>
                            </button>
                        </a>
                    </div>
                </div>
                <div ref={banRef} className='flex justify-end pr-30 pt-16 pb-10'>
                    <div className='relative'>
                        <a href=""><img id='spinner' src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png" alt="" /><i className="fa-solid absolute top-15 right-14 fa-arrow-down text-gray-200 text-4xl"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;