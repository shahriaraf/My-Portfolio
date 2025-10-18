import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using your original image import
import myPhoto from './assets/IMG_20250418_215624.jpg';


const RotatingText = ({ texts, rotationInterval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className="relative h-7 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -50, opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center text-[#7AE2CF] font-medium"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Profile = () => {
  const bannerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const elements = bannerRef.current?.querySelectorAll('.stagger-animate');
    elements?.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      setTimeout(() => {
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 150 + 200);
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = bannerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <div>
      {/* --- RESPONSIVE LOGIC IS HERE --- */}
      <motion.div
        ref={bannerRef}
        className="
          relative w-full
          
          /* === MOBILE STYLES (< 768px) === */
          /* Centered, in-flow content with vertical margin */
          max-w-sm mx-auto my-16
          
          /* === TABLET STYLES (768px -> 1024px) === */
          /* Still centered, but a little wider */
          md:max-w-md
          
          /* === LAPTOP STYLES (1024px -> 1280px) === */
          /* Switch to a SMALLER fixed sidebar */
          lg:fixed lg:left-5 lg:top-24 lg:max-w-[280px] lg:mx-0 lg:my-0
          
          /* === DESKTOP STYLES (1280px+) === */
          /* Make the sidebar a bit WIDER on large screens */
          xl:max-w-[350px]
        "
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main container with enhanced border effect */}
        <div className="relative bg-black border-2 border-[#1e3640] rounded-[30px] overflow-hidden backdrop-blur-sm">
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#7AE2CF] rounded-tl-[30px] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#7AE2CF] rounded-br-[30px] opacity-60"></div>
          
          {/* Subtle glow effect on hover */}
          <div 
            className={`absolute inset-0 rounded-[30px] transition-all duration-700 ${
              isHovered ? 'shadow-[0_0_30px_rgba(122,226,207,0.15)]' : ''
            }`}
          />

          {/* Dynamic gradient line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7AE2CF] to-transparent opacity-50"></div>

          {/* Profile Image with creative framing */}
          <div className="flex justify-center items-center pt-8 sm:pt-10 stagger-animate">
            <div className="relative group">
              {/* Animated border frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#077A7D] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-black rounded-md"></div>
              
              <motion.img
                className="relative w-48 sm:w-52 md:w-50 xl:w-60 rounded-md scale-110 z-10"
                src={myPhoto}
                width={240}
                height={320}
                alt="Shoumo Shahriar Araf"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle overlay effects */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            </div>
          </div>

          {/* Enhanced Info Section */}
          <div className="text-center mt-10 sm:mt-14 text-gray-400 font-bold px-4 stagger-animate">
            <motion.p 
              className="bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent text-lg hover:text-[#7AE2CF] transition-all duration-300 break-words relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              shahriaraf01@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#7AE2CF] group-hover:w-full transition-all duration-300"></span>
            </motion.p>
            
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-1 h-1 bg-[#7AE2CF] rounded-full"></div>
              <p className="text-gray-300">Sylhet, Bangladesh</p>
              <div className="w-1 h-1 bg-[#7AE2CF] rounded-full"></div>
            </div>
          </div>


          {/* Social Links with creative hover effects */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-5 mt-8 lg:mt-3 stagger-animate"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { icon: "fa-github", link: "https://github.com/shahriaraf", label: "Github account" },
              { icon: "fa-linkedin", link: "https://www.linkedin.com/in/shoumo-shahriar-araf", label: "Linkedin account" },
              { icon: "fa-facebook", link: "https://www.facebook.com/shahriar.araf.3", label: "Facebook account" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="relative group text-2xl sm:text-3xl p-3 sm:p-4 rounded-full overflow-hidden"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-black rounded-full transform scale-95 group-hover:scale-90 transition-transform duration-300"></div>
                <i className={`fa-brands ${social.icon} relative z-10 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent group-hover:text-black/80 transition-all duration-300`}></i>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Resume Button */}
          <div className="flex justify-center mb-10 mt-8 lg:mt-4 stagger-animate">
            <motion.a
              href="/shoumo-shahriar-araf.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="group relative rounded-full bg-transparent border-2 border-[#7AE2CF] text-base sm:text-lg font-semibold px-6 sm:px-12 py-2 text-[#7AE2CF] hover:text-black transition-colors duration-300 overflow-hidden"
                style={{ 
                  boxShadow: '0 0 20px rgba(122, 226, 207, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(122, 226, 207, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(122, 226, 207, 0.3)';
                }}
              >
                <span className="absolute inset-0 bg-[#7AE2CF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Resume 
                  <motion.i 
                    className="fa-solid fa-arrow-down"
                    animate={{ 
                      y: [0, 3, 0],
                      rotate: [0, 0, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </button>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* FontAwesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
};

export default Profile;