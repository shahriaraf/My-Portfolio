import React from 'react';
import myPhoto from './assets/1738690845720.jpg';

const AboutMe = () => {
  const backgroundImageu = {
    backgroundImage: "url('https://i.ibb.co.com/ynf2kph9/starsky1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="text-[#6498c9] pt-32 pb-32" style={backgroundImageu}>
      <h2 className="text-4xl text-[#85C5FF] text-center mb-8">
        About
      </h2>
      <div className="max-w-screen-xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image */}
        <div className="hidden lg:flex justify-center ">
          <img
            src={myPhoto}
            alt="Shahriar Araf"
            className="w-96 h-96 object-cover rounded-lg border-2 border-[#85C5FF] shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>


          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-[#85C5FF]">Shahriar Araf</span>, a passionate Web Developer dedicated to crafting engaging and dynamic digital experiences.
          </p>

          {/* What I Do */}
          <h3 className="text-2xl text-[#85C5FF] font-semibold mb-4">What I Do:</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Specialized in <span className="font-semibold text-[#85C5FF]">JavaScript, React, and Tailwind CSS</span>.</li>
            <li>Passionate about creating sleek, intuitive, and responsive user interfaces.</li>
            <li>Constantly learning and exploring new web technologies.</li>
          </ul>

          {/* Interests & Hobbies */}
          <h3 className="text-2xl text-[#85C5FF] font-semibold mt-6 mb-4">Beyond Coding:</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>📸 Photography enthusiast, capturing moments through my lens.</li>
            <li>🎮 Gamer who enjoys strategic games like Chess.</li>
            <li>✈️ Love traveling, exploring new cultures, and experiencing diverse perspectives.</li>
            <li>🎨 Passionate about painting and creative arts.</li>
            <li>🏏 Sports lover—Cricket, Football, and Chess keep me active.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
