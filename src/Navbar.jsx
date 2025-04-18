import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { Menu, X } from "lucide-react"; // Mobile menu icon and close icon
import "./App.css";

const Navbar = ({ onSetActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const logoRef = useRef(null);

  useLayoutEffect(() => {
    let ltx = gsap.context(() => {
      const t2 = gsap.timeline({ repeat: -1, yoyo: true, delay: 2 });
      t2.to(".A", {
        x: -30,
        ease: "power1.inOut",
        duration: 0.6,
        stagger: 0.1,
        color: "red",
        opacity: 0,
      })
        .to(".R", {
          rotate: 360,
          x: -68,
          ease: "power1.inOut",
          duration: 0.6,
          stagger: 0.1,
          color: "green",
          opacity: 0,
        })
        .to(".B", {
          y: 30,
          x: -40,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          color: "green",
        })
        .to(".F", {
          x: 25,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          color: "green",
        })
        .to(".A", {
          x: 0,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        })
        .to(".R", {
          rotate: 360,
          x: -38,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          color: "red",
        })
        .to(".B", {
          y: 0,
          x: -76,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        })
        .to(".F", {
          x: -40,
          ease: "power1.inOut",
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          color: "green",
        });
    }, logoRef);
    return () => ltx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="md:fixed top-0 right-0 h-[600px] my-auto mt-20 w-16 rounded-full bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] border-2 border-[#1e3640] z-10 pl-3 mr-5 pt-12 flex flex-col items-start gap-10"
    >
      {/* Logo */}
      <div ref={logoRef} id="araf" className="text-3xl text-[#777777] tiny5-regular ml-2">
        <span className="logo-char inline-block A">A</span>
        <span className="logo-char inline-block R">R</span>
        <span className="logo-char inline-block B">A</span>
        <span className="logo-char inline-block F">F</span>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col justify-center items-center gap-8 text-[#077A7D] mr-20">
        <li id="nav1">
          <Link
            to="banner"
            smooth={true}
            duration={500}
            onSetActive={() => onSetActive("banner")}
            className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#7AE2CF]"
          >
            <i className="text-2xl las la-home"></i>
          </Link>
        </li>
        <li id="nav2">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onSetActive={() => onSetActive("about")}
            className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#7AE2CF]"
          >
            <i className="text-2xl lar la-user"></i>
          </Link>
        </li>
        <li id="nav3">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onSetActive={() => onSetActive("skills")}
            className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#7AE2CF]"
          >
            <i className="text-2xl las la-shapes"></i>
          </Link>
        </li>
        <li id="nav4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onSetActive={() => onSetActive("projects")}
            className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#7AE2CF]"
          >
            <i className="text-2xl las la-grip-vertical"></i>
          </Link>
        </li>
        <li id="nav5">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onSetActive={() => onSetActive("contact")}
            className="cursor-pointer font-semibold text-sm uppercase tracking-wide p-2 hover:text-[#7AE2CF]"
          >
            <i className="text-2xl las la-envelope"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
