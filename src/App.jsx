import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Footer from "./Footer";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";





function App() {
  const [activeSection, setActiveSection] = useState(""); // Track active section

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  // Animation settings
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden">


      <Navbar onSetActive={handleSetActive} />

      <div id="profile"><Profile /></div>
      <div id="banner"><Banner /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact></Contact></div>
      <Footer></Footer>



    </div>
  );
}

export default App;
