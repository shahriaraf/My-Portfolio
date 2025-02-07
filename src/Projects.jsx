import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Example project data
  const projects = [
    {
      name: "Movie Mania",
      image: "https://i.ibb.co.com/SwNGsR06/movie-mania-screenshot.png",
      liveLink: "https://movie-mania-4fc5b.web.app/",
      githubLink: "https://github.com/shahriaraf/movie-mania-client",
      techStack: "React, Node.js, Express, JavaScript, Firebase, MongoDB",
      description: "A web application for managing tasks and schedules.",
      challenges: "A Movie sharing website. Explore the updated movies and series.",
      improvements: "Adding more features like notifications and user roles.",
    },
    {
      name: "Foodistic",
      image: "https://i.ibb.co.com/3mM1tRZz/foodistic-screenshot.png",
      liveLink: "https://foodistic-3494a.web.app/",
      githubLink: "https://github.com/shahriaraf/foodistic-client",
      techStack: "React, Express, Node.js, JavaScript, Firebase, MongoDB",
      description: "A food sharing website. Explore and share food to us.",
      challenges: "Managing foods for different users",
      improvements: "Improving performance and adding search filters.",
    },
    {
      name: "Pet Haven",
      image: "https://i.ibb.co.com/8ns6s0k7/pet-haven-screenshot.png",
      liveLink: "https://pet-haven-8d5ba.web.app/",
      githubLink: "https://github.com/shahriaraf/pet-haven-client",
      techStack: "React, Express, Node.js, JavaScript, Firebase, MongoDB",
      description: "This is about adopting pets and donating for pets.",
      challenges: "Building a responsive layout and handling media uploads.",
      improvements: "Implementing messaging features and real-time updates.",
    },
  ];

  return (
    <motion.section
      className=" text-[#698580] py-16 mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-screen-xl mx-auto px-6 pt-10">
        <h2 className="text-4xl font-semibold text-center mb-20">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-2 border-transparent hover:border-[#DAFF98] p-4 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.name} className="w-full h-60 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
              <p className="text-md mt-2 text-[#698580]">{project.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
              <div className="mt-6">
                <a
                  href={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#DAFF98] text-[#052E25] py-2 font-semibold px-6 rounded-lg mt-4 inline-block"
                >
                  View More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
