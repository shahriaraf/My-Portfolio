import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'Home Bite',
    image: 'https://i.ibb.co/8LLtXnXn/foodistic-3494a-web-app-2.png',
    liveLink: 'https://foodistic-3494a.web.app/',
    githubLink: 'https://github.com/shahriaraf/foodistic-client',
    description: 'A food sharing website. Explore and share food with others.',
  },
    {
    name: 'Rentechify',
    image: 'https://i.ibb.co/WWSX7vq1/rentechify-web-app.png',
    liveLink: 'https://rentechify.web.app/',
    githubLink: 'https://github.com/codegeeksteam/RentifyTech',
    description: 'Rentechify revolutionizes tech rentals with a seamless platform for on-demand access to premium gadgets and electronics.',
  },
  {
    name: 'Pet Haven',
    image: 'https://i.ibb.co/WWY2xwpT/pet-haven-8d5ba-web-app-1.png',
    liveLink: 'https://pet-haven-8d5ba.web.app/',
    githubLink: 'https://github.com/shahriaraf/pet-haven-client',
    description: 'Platform to adopt and donate for pets.',
  },

];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center md:pl-85 px-4">
      <h2 className="text-4xl font-bold text-center text-[#7AE2CF] bg-clip-text mb-12">
        What I Have Built
      </h2>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[700px] md:h-[520px] w-[300px] h-[500px]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-[#0A0A0A] border-2 border-[#7AE2CF] rounded-xl p-5 flex flex-col justify-between text-white shadow-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-84 object-cover rounded-xl mb-4"
              />
              <h3 className="text-[#7AE2CF] text-2xl font-bold mb-2 text-center">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4 text-center">
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
