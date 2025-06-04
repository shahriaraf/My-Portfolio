import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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

  return (
    <motion.div
      className="bg-black mx-4 md:mx-25 mt-20 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="pl-6 md:pl-[350px] pt-5 text-white flex justify-start items-center">
        <p className="uppercase oxanium text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2">
          <i className="fas fa-project-diagram bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i>
          Projects
        </p>
      </div>
      <hr className="border-t border-[#077A7D] my-4 w-1/5 ml-6 md:ml-80" />
      <h2 className="text-2xl md:pl-80 md:text-4xl font-bold text-center bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent mb-12">
          What I Have Build
        </h2>
      <br />
      <br />

      {/* Mobile Slider View */}
      <div className="md:hidden relative px-4">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] max-w-[300px] rounded-[2rem] bg-[#0A0A0A] border border-[#7AE2CF] shadow-2xl flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover rounded-t-[2rem]"
              />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold text-[#7AE2CF] mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-10 transform -translate-y-1/2 z-10 text-white p-2 rounded-full shadow-lg"
        >
          <IoIosArrowBack size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-10 transform -translate-y-1/2 z-10 text-white p-2 rounded-full shadow-lg"
        >
          <IoIosArrowForward size={24} />
        </button>
        </div>

       
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pl-[350px] pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-[#7AE2CF] shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-cover transition-transform duration-[2s] group-hover:scale-110"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 20 }}
            />

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
