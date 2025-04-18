import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { div } from 'framer-motion/client';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-section', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-30 rounded-4xl border border-[#1e3640] mt-20 py-10'>
      <div className="pl-[350px] text-white flex items-center">
        <p className="uppercase text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
          <i className="fas fa-info-circle bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> About
        </p>
      </div>
      <hr className="border-t border-[#077A7D] my-4 w-1/5 ml-80" />


      <p className='text-2xl text-[#777777] mt-6 pl-[320px] pt-10'>Every great design begin with
        an even better story
        Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>

    </div>

  );
};

export default AboutMe;
