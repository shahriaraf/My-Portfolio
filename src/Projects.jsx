import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Aaryan Sourching",
    image:
      "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1580 x 1080 px) (1780 x 1080 px) (1).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "Buying House Project. A platform that connects buyers with reliable suppliers, streamlining the procurement process for businesses worldwide.",
  },
  {
    name: "Rentechify",
    image: "/asset/Modern Neutral Digital Product Computer Mockup Promotional Instagram Post (1780 x 1080 px) (1).png",
    liveLink: "https://rentechify.web.app/",
    githubLink: "https://github.com/codegeeksteam/RentifyTech",
    description:
      "Rentechify revolutionizes tech rentals with a seamless platform for on-demand access to premium gadgets and electronics.",
  },

   {
    name: "Leading University",
    image: "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "A food delivery app that connects users with local restaurants for quick and easy meal orders.",
  },

  {
    name: "Home Bite",
    image: "/asset/Beige Minimalist Computer Mock Up Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "A food delivery app that connects users with local restaurants for quick and easy meal orders.",
  },
  {
    name: "Pet Haven",
    image:
      "/asset/Beige Soft Mockup Launching New Website Facebook Post (1780 x 1080 px).png",
    liveLink: "https://pet-haven-8d5ba.web.app/",
    githubLink: "https://github.com/shahriaraf/pet-haven-client",
    description: "Platform to adopt and donate for pets.",
  },
   {
    name: "Phermacon",
    image: "/asset/Minimalist Website Launch Computer Mockup Instagram Post (1780 x 1080 px) (2).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "A food delivery app that connects users with local restaurants for quick and easy meal orders.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center lg:pl-45 xl:pl-85 px-4">
      <h2 className="bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent text-2xl md:text-4xl font-bold text-center mb-12">
        What I Have Built
      </h2>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="lg:w-[520px] xl:w-[700px] lg:h-[520px] w-[300px] h-[500px]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full lg:h-full h-[500px] bg-[#0A0A0A] border-2 border-[#7AE2CF] rounded-xl p-5 flex flex-col justify-between text-white shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain lg:object-cover rounded-xl mb-4"
              />
              <h3 className="text-[#7AE2CF] text-2xl font-bold mb-2 text-center">
                {project.name}
              </h3>
              <p className="md:text-sm text-[12px] text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:text-xl text-md text-[#7AE2CF] font-semibold hover:underline"
                >
                  <CgWebsite />
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:text-xl text-md text-gray-400 font-semibold hover:underline"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
