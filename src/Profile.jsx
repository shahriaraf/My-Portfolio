import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import myPhoto from './assets/IMG_20250418_010520.jpg';
import './App.css';
import gsap from 'gsap';

const Profile = () => {
  const bannerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-text1", {
        xPercent: "-100",
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
      t1.from("#intro-text2", {
        xPercent: "100",
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full max-w-sm md:max-w-[350px] mx-auto mt-10 mb-16 md:mt-20 md:mb-44 bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] text-gray-400 border-2 border-[#1e3640] rounded-[30px] overflow-hidden z-10 md:fixed md:ml-5"
    >
      {/* Profile Image */}
      <div className="flex justify-center items-center pt-8 sm:pt-10">
        <img
          className="w-40 sm:w-48 md:w-60 rounded-md scale-110"
          src={myPhoto}
          alt="Shoumo Shahriar Araf"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-10 sm:mt-14 text-[#777777] font-bold px-4">
        <p className="text-[#077A7D] hover:text-[#7AE2CF] hover:underline break-words">
          shahriaraf01@gmail.com
        </p>
        <p>Sylhet, Bangladesh</p>
        <br />
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Shoumo Shahriar Araf. All rights reserved.
        </p>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-4 sm:gap-5 mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="https://github.com/shahriaraf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#077A7D] hover:text-[#7AE2CF] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shoumo-shahriar-araf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#077A7D] hover:text-[#7AE2CF] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/shahriar.araf.3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#077A7D] hover:text-[#7AE2CF] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </motion.div>

      {/* Resume Button */}
      <div className="flex justify-center mb-10 mt-6 sm:mt-8">
        <a
          href="/shoumo-shahriar-araf.pdf" // ✅ Adjust this path as needed
          download
        >
          <button
            id="resumeBtn"
            className="border bg-transparent text-base sm:text-lg font-semibold px-6 sm:px-12 py-2 border-[#7AE2CF] text-[#7AE2CF] hover:text-black hover:bg-[#7AE2CF] transition-colors duration-300"
            onTouchStart={(e) => e.currentTarget.classList.add("text-black", "bg-[#7AE2CF]")}
            onTouchEnd={(e) => e.currentTarget.classList.remove("text-black", "bg-[#7AE2CF]")}
          >
            Resume <i className="fa-solid fa-arrow-down ml-2"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
