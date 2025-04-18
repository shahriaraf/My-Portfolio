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
      className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-5 lg:mx-20 xl:mx-30 rounded-4xl border border-[#1e3640] mt-20 py-10'
    >
      <div className="fade-section text-white flex items-center justify-center sm:justify-start sm:pl-10 lg:pl-[200px] xl:pl-[350px]">
        <p className="uppercase text-base sm:text-lg lg:text-xl px-4 py-1 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
          <i className="fas fa-info-circle bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> About
        </p>
      </div>

      <hr className="fade-section border-t border-[#077A7D] my-4 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 ml-auto mr-auto sm:ml-10 lg:ml-[200px] xl:ml-[320px]" />

      <p className='fade-section text-sm sm:text-base md:text-lg lg:text-xl text-[#777777] mt-6 px-5 sm:px-10 lg:pl-[160px] xl:pl-[320px] pt-10 text-justify'>
        Every great design begins with an even better story. <br />
        Since beginning my journey as a freelance designer nearly 8 years ago,
        I've done remote work for agencies, consulted for startups, and collaborated
        with talented people to create digital products for both business and consumer use.
        I'm quietly confident, naturally curious, and perpetually working on improving
        my chops — one design problem at a time.
      </p>
    </div>
  );
};

export default AboutMe;
