import React from "react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Home Bite",
      image: "https://i.ibb.co.com/0RvPhb33/foodistic-3494a-web-app-1.png",
      liveLink: "https://foodistic-3494a.web.app/",
      githubLink: "https://github.com/shahriaraf/foodistic-client",
      description: "A food sharing website. Explore and share food to us.",
    },
    {
      name: "Pet Haven",
      image: "https://i.ibb.co.com/vCPgRbVV/pet-haven-8d5ba-web-app.png",
      liveLink: "https://pet-haven-8d5ba.web.app/",
      githubLink: "https://github.com/shahriaraf/pet-haven-client",
      description: "This is about adopting pets and donating for pets.",
    },
    {
      name: "Movie Mania",
      image: "https://i.ibb.co.com/0RvPhb33/foodistic-3494a-web-app-1.png",
      liveLink: "https://movie-mania-4fc5b.web.app/",
      githubLink: "https://github.com/shahriaraf/movie-mania-client",
      description: "A movie database app for browsing and watching trailers.",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 100 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <motion.div
      className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-30 rounded-4xl border border-[#1e3640] mt-20 py-20'
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="pl-[350px] pt-5 text-white flex justify-start items-center">
        <p className="uppercase text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
          {/* Project Icon */}
          <i className="fas fa-project-diagram bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i>
          {/* You can change the icon to something else like fa-cogs or fa-briefcase */}
          Projects
        </p>
      </div>
      <hr className="border-t border-[#077A7D] my-4 w-1/5 ml-80" /><br /><br />


      <div className="pb-20 pl-[350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-[#7AE2CF] shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-cover transition-transform duration-[2s] group-hover:scale-110"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 20 }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <motion.h3
                className="text-2xl text-[#7AE2CF] font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {project.name}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm mb-4"
                whileHover={{ scale: 1.02 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#7AE2CF] font-semibold hover:underline"
                >
                  <CgWebsite />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 font-semibold hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default Projects;
