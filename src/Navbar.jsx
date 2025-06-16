import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import "./App.css";

const Navbar = ({ onSetActive }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#araf", {
                yPercent: "-100",
                opacity: 0,
                duration: 1,
                delay: 0.3,
            }).from(
                ["#nav1", "#nav2", "#nav3", "#nav4", "#nav5", "#resumeBtn"],
                {
                    opacity: 0,
                    y: "90",
                    stagger: 0.1,
                }
            );
        }, navRef);
        return () => ctx.revert();
    }, []);

    const menuItems = [
        { id: "nav1", to: "home", icon: "las la-home" },
        { id: "nav2", to: "about", icon: "lar la-user" },
        { id: "nav3", to: "skills", icon: "las la-shapes" },
        { id: "nav4", to: "projects", icon: "las la-grip-vertical" },
        { id: "nav5", to: "contact", icon: "las la-envelope" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                ref={navRef}
                className="hidden md:flex fixed top-0 right-0 h-[600px] w-16 rounded-full bg-black border-2 border-[#1e3640] z-10 pl-3 mt-20 mr-5 pt-40 flex-col items-start gap-10"
            >
                <ul className="flex flex-col justify-center items-center gap-8 text-[#7AE2CF] mr-20">
                    {menuItems.map((item) => (
                        <li key={item.id} id={item.id}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onSetActive={() => onSetActive(item.to)}
                                className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#077A7D]"
                            >
                                <i className={`text-2xl ${item.icon}`}></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="fixed top-5 left-5 md:hidden z-50">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#7AE2CF]" aria-label="Menu">
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 text-[#7AE2CF] z-40">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-semibold uppercase tracking-wider hover:text-[#7AE2CF]"
                        >
                            <i className={`mr-3 ${item.icon}`}></i>
                            {item.to}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
