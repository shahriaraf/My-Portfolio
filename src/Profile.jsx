import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import myPhoto from './assets/IMG_20250418_010520.jpg';
import './App.css';
import gsap from 'gsap';


const Profile = () => {

    const bannerRef = useRef(null);
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-text1", {
                xPercent: "-100",
                opacity: 0,
                duration: 1,
                delay: 0.2,
            })
            t1.from("#intro-text2", {
                xPercent: "100",
                opacity: 0,
                duration: 1,
                delay: 0.2,
            })
        }, bannerRef)

        return () => ctx.revert()
    }, [])



    // .left-sidebar {
    //     max-width: 485px;
    //     width: 100%;
    //     border-radius: 30px;
    //     border: 1px solid #565656;
    //     position: fixed;
    //     left: 20px;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     padding: 50px;
    //     z-index: 10;
    // }
    return (
        <div ref={bannerRef} className="items-center md:fixed max-w-[350px] max-h-[600px] z-10 w-full m-auto justify-center bg-black text-gray-400 mb-44 mt-20 overflow-hidden rounded-[30px] ml-5 border-2 border-[#1e3640]">
            {/* Profile Image */}
            <div className='flex justify-center items-center pt-10'>

            <img className='w-60 h-full rounded-md scale-150' src={myPhoto} alt="" />
            </div>
         
            <div className='text-center mt-16 text-[#777777] font-bold'>
                <p className='text-[#077A7D] hover:text-[#7AE2CF] hover:underline'>shahriaraf01@gmail.com</p>
                <p>Sylhet, Bangladesh</p><br />
                <p className='text-sm'>&copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.</p>
            </div>
            {/* Social Links */}
            <motion.div
                className="flex justify-center gap-3 sm:gap-5 mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <a href="https://github.com/shahriaraf" target="_blank" rel="noopener noreferrer" className="text-[#077A7D] hover:text-[#7AE2CF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/shoumo-shahriar-araf" target="_blank" rel="noopener noreferrer" className="text-[#077A7D] hover:text-[#7AE2CF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/shahriar.araf.3" target="_blank" rel="noopener noreferrer" className="text-[#077A7D] hover:text-[#7AE2CF] text-3xl sm:text-4xl p-4 rounded-full shadow-lg">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </motion.div>
             {/* Resume Button */}
             <div className="flex justify-center mb-10 mt-5">
                    <div className="hidden sm:block">
                        <a
                            href="/public/shoumo-shahriar-araf.pdf.pdf" // <-- replace with the correct path to your resume file
                            download
                        >
                            <button id="resumeBtn"
                                className="border flex bg-transparent text-xl font-semibold items-center gap-2 px-20 tracking-widest py-2 
                border-[#7AE2CF] text-[#7AE2CF] hover:text-black
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
        </div>
    );
};

export default Profile;

