import React, { useEffect } from 'react';
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
import gsap from 'gsap'
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
  // Animating Frontend, Backend, and Tools icons
  gsap.fromTo(
    '.skill-icon',
    { y: 0, scale: 1 },
    {
      scale: 1.8, // Increase size
      duration: 2,
      repeat: -1, // Repeat infinitely
      yoyo: true, // Alternate back and forth
      ease: 'power1.inOut', // Smooth ease for animation
      stagger: 0.1, // Add a slight delay between each icon animation
    }
  );
}, []);
  return (
    <section className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-30 rounded-4xl border border-[#1e3640] mt-20 py-10'>
      <div className='pl-[350px] pt-5 text-white flex justify-start items-center'>
        <p className='uppercase text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2'>
          <i className="fas fa-briefcase bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> Skills
        </p>

      </div><hr className="border-t border-[#077A7D] my-4 w-1/5 ml-80" /><br /><br />

      <div className="pl-[320px] mx-3 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Frontend */}
        <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
          <i className="fas fa-laptop-code bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent mr-2"></i>
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
        <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent">
          <i className="fas fa-cogs bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent mr-2"></i>

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
        <div className="bg-black rounded-4xl border border-[#1e3640] p-6 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"><i className="fa-solid bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent mr-2 fa-screwdriver-wrench"></i>
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
    </section>
  );
};

export default Skills;
