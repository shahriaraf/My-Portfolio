import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import "./App.css";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";





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
    <div>
     
    
      <Navbar onSetActive={handleSetActive} />

      <Element name="banner">
        <motion.div
          key={activeSection === "banner" ? "banner-reset" : "banner"}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Banner />
        </motion.div>
      </Element>

      <Element name="about">
        <motion.div
          key={activeSection === "about" ? "about-reset" : "about"}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <AboutMe />
        </motion.div>
      </Element>

      <Element name="skills">
        <motion.div
          key={activeSection === "skills" ? "skills-reset" : "skills"}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Skills />
        </motion.div>
      </Element>

      <Element name="projects">
        <motion.div
          key={activeSection === "projects" ? "projects-reset" : "projects"}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Projects />
        </motion.div>
      </Element>

      <Element name="contact">
        <motion.div
          key={activeSection === "contact" ? "contact-reset" : "contact"}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Contact />
        </motion.div>
      </Element>

      <Footer />
    </div>
  );
}

export default App;
