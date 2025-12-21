import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaDownload } from "react-icons/fa";

// --- DATA FOR WEB PROJECTS ---
const webProjects = [
  {
    name: "Aaryan Sourcing",
    image:
      "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1580 x 1080 px) (1780 x 1080 px) (1).png",
    liveLink: "https://aaryansourcing.com/",
    githubLink: "https://github.com/shahriaraf/Aariyan-Sourching-Client",
    description:
      "A platform that connects buyers with reliable suppliers, streamlining the procurement process for businesses worldwide.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase", "JWT"],
  },
  {
    name: "Rentechify",
    image: "/asset/Modern Neutral Digital Product Computer Mockup Promotional Instagram Post (1780 x 1080 px) (1).png",
    liveLink: "https://rentechify.web.app/",
    githubLink: "https://github.com/codegeeksteam/RentifyTech",
    description:
      "Rentechify revolutionizes tech rentals with a seamless platform for on-demand access to premium gadgets and electronics.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe", "Node.js"],
  },
   {
    name: "Leading University",
    image: "/asset/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://leading-university-jet.vercel.app/",
    githubLink: "https://github.com/shahriaraf/Leading-University",
    description:
      "Discover what studying at Leading University is really like. Explore our campus and find out more about our admission process and get to know our community.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Vercel"],
  },
  {
    name: "Home Bite",
    image: "/asset/Beige Minimalist Computer Mock Up Website Launch Instagram Post (1780 x 1080 px).png",
    liveLink: "https://foodistic-3494a.web.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "A food delivery app that connects users with local restaurants for quick and easy meal orders.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
  },
  {
    name: "Pet Haven",
    image:
      "/asset/Beige Soft Mockup Launching New Website Facebook Post (1780 x 1080 px).png",
    liveLink: "https://pet-haven-8d5ba.web.app/",
    githubLink: "https://github.com/shahriaraf/pet-haven-client",
    description: "Platform to adopt and donate for pets. Your trusted pet companion.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
  },
   {
    name: "Phermacon",
    image: "/asset/Minimalist Website Launch Computer Mockup Instagram Post (1780 x 1080 px) (2).png",
    liveLink: "https://pharmacon-theta.vercel.app/",
    githubLink: "https://github.com/shahriaraf/foodistic-client",
    description:
      "The Pharmacon platform streamlines pharmaceutical management, enhancing efficiency and patient care through innovative technology.",
    technologies: ["React", "Redux", "Stripe", "Node.js", "Express"],
  },
];

// --- DATA FOR APP PROJECTS ---
const appProjects = [
    {
        name: "FitOn",
        image: "/asset/your-phone-mockup-image.png",
        githubLink: "https://github.com/shahriaraf/FitOn",
        apkLink: "/apk/application-419a7113-685e-484c-82f3-0410fcc6dcde (1).apk", // IMPORTANT: Make sure this path is correct!
        description: "A sleek e-commerce app built with React Native, offering a seamless shopping experience on both iOS and Android.",
        technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
    },
    // You can add more app projects here
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  const currentProjects = activeTab === "web" ? webProjects : appProjects;

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center lg:pl-45 xl:pl-85 px-4 py-12">
      <h2 className="bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent text-2xl md:text-4xl font-bold text-center mb-8">
        What I Have Built
      </h2>

      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-l-full font-semibold transition-all duration-300 ${
            activeTab === "web"
              ? "bg-[#7AE2CF] text-black"
              : "bg-[#0A0A0A] text-[#7AE2CF] border border-[#7AE2CF] hover:bg-gray-800"
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setActiveTab("app")}
          className={`px-6 py-2 rounded-r-full font-semibold transition-all duration-300 ${
            activeTab === "app"
              ? "bg-[#7AE2CF] text-black"
              : "bg-[#0A0A0A] text-[#7AE2CF] border border-[#7AE2CF] hover:bg-gray-800"
          }`}
        >
          Apps
        </button>
      </div>

      <Swiper
        key={activeTab}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="lg:w-[520px] xl:w-[700px] lg:h-full w-[300px] h-full"
      >
        {currentProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-[#0A0A0A] border-2 border-[#7AE2CF] rounded-xl p-5 flex flex-col justify-between text-white shadow-lg">
              {/* Top Section */}
              <div>
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 lg:h-84 object-cover rounded-xl mb-4"
                />
                <h3 className="text-[#7AE2CF] text-2xl font-bold mb-2 text-center">
                    {project.name}
                </h3>
                <p className="md:text-sm text-[12px] text-gray-300 mb-4 text-center">
                    {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 my-4">
                    {project.technologies?.map((tech, i) => (
                        <span key={i} className="bg-gray-800 text-teal-300 text-xs font-medium px-4 py-1 mb-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>

              {/* Bottom Section (Links) */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                {activeTab === 'web' ? (
                   <>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:text-xl text-md text-[#7AE2CF] font-semibold hover:underline">
                            <CgWebsite /> Live
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:text-xl text-md text-gray-400 font-semibold hover:underline">
                            <FaGithub /> Code
                        </a>
                   </>
                ) : (
                   <>
                        <a href={project.apkLink} download className="flex items-center gap-1 md:text-xl text-md text-[#7AE2CF] font-semibold hover:underline">
                            <FaDownload className="text-[16px]" /> Download
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:text-xl text-md text-gray-400 font-semibold hover:underline">
                            <FaGithub /> Code
                        </a>
                   </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Security warning for APK downloads */}
      {activeTab === 'app' && (
        <p className="text-gray-500 text-xs mt-4 text-center max-w-lg">
          Note: To install the APK, you may need to enable "Install from unknown sources" in your Android settings.
        </p>
      )}
    </div>
  );
};

export default Projects;