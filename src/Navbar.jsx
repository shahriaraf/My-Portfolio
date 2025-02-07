import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Mobile menu icon and close icon
import "./App.css";

const Navbar = ({ onSetActive }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling mobile menu visibility

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu state

    return (
        <nav className="sticky top-0 w-full bg-black z-50 px-6 sm:px-28 pt-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 w-full">
                    <div className="text-3xl text-[#DAFF98] tiny5-regular">ARAF</div>

                    {/* Desktop Menu */}
                    <ul className="hidden sm:flex justify-center space-x-6 py-4">
                        <li className="li"> 
                            <Link
                                to="banner"
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive("banner")}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li  className="li">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive("about")}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2"
                            >
                                About
                            </Link>
                        </li>
                        <li  className="li">
                            <Link
                                to="skills"
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive("skills")}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2"
                            >
                                Skills
                            </Link>
                        </li>
                        <li  className="li">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive("projects")}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2"
                            >
                                Projects
                            </Link>
                        </li>
                        <li  className="li">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive("contact")}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>


                </div>
                {/* Resume Button */}
                <div className="hidden sm:block">
                    <button className="border-[1px] px-4 py-2 hover:text-black border-[#698580] text-[#DAFF98]">
                        Resume
                    </button>
                </div>
                {/* Mobile Menu Icon */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <X className="text-white" size={32} />
                        ) : (
                            <Menu className="text-white" size={32} />
                        )}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Links */}
            {isMenuOpen && (
                <div className="sm:hidden flex flex-col items-center py-4 bg-black">
                    <Link
                        to="banner"
                        smooth={true}
                        duration={500}
                        onSetActive={() => onSetActive("banner")}
                        className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 text-[#DAFF98]"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        onSetActive={() => onSetActive("about")}
                        className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 text-[#DAFF98]"
                    >
                        About
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        onSetActive={() => onSetActive("skills")}
                        className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 text-[#DAFF98]"
                    >
                        Skills
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        onSetActive={() => onSetActive("projects")}
                        className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 text-[#DAFF98]"
                    >
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        onSetActive={() => onSetActive("contact")}
                        className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 text-[#DAFF98]"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
