import { useEffect } from 'react';
import html from '../public/asset/html5.svg';
import css from '../public/asset/css3.svg';
import js from '../public/asset/javascript.svg';
import reactLogo from '../public/asset/react.svg';
import next from '../public/asset/nextdotjs.svg';
import tailwind from '../public/asset/tailwindcss.svg';
import bootstrap from '../public/asset/bootstrap.svg';
import redux from '../public/asset/redux.svg';
import express from '../public/asset/express.svg';
import node from '../public/asset/nodedotjs.svg';
import mongodb from '../public/asset/mongodb.svg';
import mysql from '../public/asset/mysql.svg';
import firebase from '../public/asset/firebase.svg';
import github from '../public/asset/github.svg';
import framer from '../public/asset/framer.svg';
import gsap from 'gsap';

const frontendSkills = [
  { name: 'HTML', logo: html, bg: '#7AE2CF' },
  { name: 'CSS', logo: css, bg: '#7AE2CF' },
  { name: 'JavaScript', logo: js, bg: '#7AE2CF' },
  { name: 'React', logo: reactLogo, bg: '#7AE2CF' },
  { name: 'Next.js', logo: next, bg: '#7AE2CF' },
  { name: 'Tailwind CSS', logo: tailwind, bg: '#7AE2CF' },
  { name: 'Bootstrap', logo: bootstrap, bg: '#7AE2CF' },
];

const backendSkills = [
  { name: 'Node.js', logo: node, bg: '#7AE2CF' },
  { name: 'Express.js', logo: express, bg: '#7AE2CF' },
  { name: 'MongoDB', logo: mongodb, bg: '#7AE2CF' },
  { name: 'MySQL', logo: mysql, bg: '#7AE2CF' },
  { name: 'Firebase', logo: firebase, bg: '#7AE2CF' },
];

const toolSkills = [
  { name: 'Redux', logo: redux, bg: '#7AE2CF' },
  { name: 'Framer Motion', logo: framer, bg: '#7AE2CF' },
  { name: 'GitHub', logo: github, bg: '#7AE2CF' },
];

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      '.skill-icon',
      { y: 0, scale: 1 },
      {
        scale: 1.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="bg-black mx-5 md:mx-10 md:pl-[320px] lg:mx-25 mt-20 py-10">
      <div className="container mx-auto px-4 py-10">
        <div className="text-white flex items-center justify-start ">
          <p className="uppercase oxanium text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
            <i className="fas fa-briefcase bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> Skills
          </p>
        </div>

        <hr className="border-t border-[#077A7D] my-4 w-1/2 sm:w-1/3 md:w-1/4" />
        <h2 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent mb-12">
          My Advantages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 pt-10">
          {/* Frontend */}
          <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center" style={{ boxShadow: '0 0 15px 0.5px #7AE2CF' }}>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
              <i className="fas fa-laptop-code mr-2"></i>
              Frontend
            </h3><br />
            <div className="flex flex-wrap justify-center gap-4">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition"
                  style={{ backgroundColor: skill.bg }}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center" style={{ boxShadow: '0 0 15px 0.5px #7AE2CF' }}>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
              <i className="fas fa-cogs mr-2"></i>
              Backend
            </h3><br />
            <div className="flex flex-wrap justify-center gap-4">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition"
                  style={{ backgroundColor: skill.bg }}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center" style={{ boxShadow: '0 0 15px 0.5px #7AE2CF' }}>
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
              <i className="fa-solid fa-screwdriver-wrench mr-2"></i>
              Tools
            </h3><br />
            <div className="flex flex-wrap justify-center gap-4">
              {toolSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition"
                  style={{ backgroundColor: skill.bg }}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
