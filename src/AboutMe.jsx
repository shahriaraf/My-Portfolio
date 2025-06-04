import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fade-section',
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 60%',
            toggleActions: 'restart none none none',
          },
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'back.out(1.7)',
          stagger: 0.3,
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={aboutRef}
      className='bg-black mx-5 lg:mx-20 xl:mx-25 mt-20 py-30'
    >
      <div className="fade-section flex items-center justify-center sm:justify-start sm:pl-10 lg:pl-[200px] xl:pl-[350px]">
        <p className="uppercase oxanium text-xl px-4 py-1 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
          <i className="fas fa-info-circle bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> About
        </p>
      </div>

      <hr className="fade-section border-t border-[#077A7D] my-4 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 ml-auto mr-auto sm:ml-10 lg:ml-[200px] xl:ml-[320px]" />

      <p className='fade-section text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mt-6 px-5 sm:px-10 lg:pl-[160px] xl:pl-[320px] pt-10 text-justify'>
        I’m a passionate web developer and a Computer Science & Engineering student.
        My journey began with curiosity and a deep love for building things that live on the web.
        Over time, I’ve grown confident in working with technologies like React, Node.js, Firebase, and MongoDB —
        crafting responsive and meaningful user experiences. Whether it’s a pet adoption platform,
        a tech rental site, or a donation system, I enjoy solving real-world problems through code.
        I’m always eager to learn, experiment, and contribute — one project at a time.
      </p>

    </div>
  );
};

export default AboutMe;
