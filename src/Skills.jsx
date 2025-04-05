import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import html from '../public/asset/html5.svg'
import css from '../public/asset/css3.svg'
import js from '../public/asset/javascript.svg'
import react from '../public/asset/react.svg'
import next from '../public/asset/nextdotjs.svg'
import express from '../public/asset/express.svg'
import redux from '../public/asset/redux.svg'
import mongodb from '../public/asset/mongodb.svg'
import node from '../public/asset/nodedotjs.svg'
import mysql from '../public/asset/mysql.svg'
import tailwind from '../public/asset/tailwindcss.svg'
import bootstrap from '../public/asset/bootstrap.svg'
import firebase from '../public/asset/firebase.svg'
import github from '../public/asset/github.svg'
import framer from '../public/asset/framer.svg'
import Lottie from 'react-lottie';
import animation from '../public/asset/Animation - 1743324470182.json'

const skills = [
  { name: 'HTML', logo: html, bg:'#E34F26' },
  { name: 'CSS', logo: css, bg:'#1572B6' },
  { name: 'JavaScript', logo: js, bg:'#F7DF1E' },
  { name: 'React', logo: react, bg:'#61DAFB' },
  { name: 'Framer Motion', logo: framer, bg:'#0055FF' },
  { name: 'Express.js', logo: express, bg:'#FFFFFF' },
  { name: 'MySQL', logo: mysql, bg:'#4479A1' },
  { name: 'MongoDB', logo: mongodb, bg:'#47A248' },
  { name: 'Node.js', logo: node, bg:'#5FA04E' },
  { name: 'GitHub', logo: github, bg:'#FFFFFF' },
  { name: 'Tailwind CSS', logo: tailwind, bg:'#06B6D4' },
  { name: 'Bootstrap', logo: bootstrap, bg:'#7952B3'},
  { name: 'Firebase', logo: firebase, bg:'#DD2C00' },
  { name: 'Redux', logo: redux, bg:'#764ABC' },
  { name: 'Next.js', logo: next, bg:'#FFFFFF' }
];

const backgroundImageu = {
  backgroundImage: "url('https://i.ibb.co.com/ynf2kph9/starsky1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const options = {
  animationData: animation,
  loop: true,
  autoplay: true, // Set to true if you want the animation to play automatically
};

const Skills = () => {
  const [radius, setRadius] = useState(280); // Default radius

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(140); // Mobile radius
      } else {
        setRadius(280); // Desktop radius
      }
    };

    updateRadius(); // Initial check
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className='pt-20' style={backgroundImageu}>
      <p className='text-center text-4xl text-[#85C5FF]'>Skills</p>
      <div className="flex items-center justify-center h-screen text-white relative">
        <div className="absolute w-60 h-60 flex items-center justify-center rounded-full text-center text-xl font-bold shadow-lg z-10">
          <div className='w-36 h-36 md:w-full md:h-full'>
          <Lottie options={options} />
          </div>
         
        </div>
        {/* Rotating Skills */}
        <div className="relative w-[450px] h-[450px] flex items-center justify-center">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <motion.div
                key={skill.name}
                className="absolute"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              >
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 md:w-11 md:h-11 rounded-xl" style={{ backgroundColor: skill.bg }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;