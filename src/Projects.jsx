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
      description: "A food sharing website. Explore and share food to us.",
    }
  ];
  const backgroundImageu = {
    backgroundImage: "url('https://i.ibb.co.com/Hf6xBZCq/Lovepik-com-605760272-Black-technology-sense-grid-dotted-line.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "start",
  };

  return (
    <div className="py-40" style={backgroundImageu}>
      <p className="text-4xl text-[#85C5FF] text-center">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-8 mx-auto px-8 md:px-20 ">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="relative w-full rounded-lg rounded-bl-[60px] border-[#85C5FF] border cursor-pointer group bg-black shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {/* Image Container with Full Height Scroll on Hover */}
          <div className="relative w-full h-80 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.name}
              className="absolute rounded-t-lg top-0 left-0 w-full h-auto bg-black"
              initial={{ y: 0 }}
              whileHover={{ y: "-100%" }} // Move up to reveal full height
              transition={{ duration: 5, ease: "easeInOut" }} // Smooth scrolling effect
            />
          </div>

          {/* Project Info */}
          <div className="text-center mt-4">
            <h3 className="text-xl text-[#85C5FF] font-semibold">{project.name}</h3>
            <p className="text-sm text-[#5c81a3] mt-2 mb-4">{project.description}</p>
          </div>

          {/* Links at the Bottom */}
          <div className="flex border-[#85C5FF] border-t items-center justify-around ">
          <div className="mt-4 flex justify-center items-center gap-2 pt-3 pb-6">
            <CgWebsite className="text-xl"></CgWebsite>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            > Live Demo
            </a>
          </div>
          <div className="mt-4 flex justify-center items-center gap-2 pt-3 pb-6">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-semibold hover:underline"
            >
              GitHub
            </a>
            <FaGithub className="text-xl text-gray-400" />

          </div>
          </div>
         
        </motion.div>
      ))}
    </div>
    </div>
  
  );
};

export default Projects;
