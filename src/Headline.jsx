import { useEffect, useRef } from "react";
import gsap from "gsap";

const Headline = () => {
    const tickerContainerRef = useRef(null);
    const tickerContentRef = useRef(null);

    useEffect(() => {
        const container = tickerContainerRef.current;
        const content = tickerContentRef.current;

        const width = content.offsetWidth;

        gsap.to(content, {
            x: -width,
            duration: 80,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % width) // seamless loop
            }
        });
    }, []);

    return (
        <div className="w-[350px] m-auto py-2 overflow-hidden z-50" ref={tickerContainerRef}>
            <div
                className="flex gap-10 text-[#7AE2CF] font-semibold md:text-lg text-sm whitespace-nowrap w-max"
                ref={tickerContentRef}
            >
                <span>Hello! I’m Shoumo Shahriar Araf — Web Developer & Problem Solver</span>
                <span>I build modern, responsive web apps with React, Node.js & MongoDB</span>
                <span>Passionate about clean code, pixel-perfect UI, and smooth animations</span>
                <span>Always learning, always growing — currently exploring Three.js & GSAP</span>
                <span>From full-stack development to UI polish — I bring ideas to life</span>
                <span>Open to new opportunities — Let's build something amazing together</span>
                <span>Focused on performance, accessibility, and user experience</span>
                <span>Love turning complex ideas into elegant digital solutions</span>
                <span>My goal? Become a software engineer and lead with innovation</span>
                <span>Let’s connect — I’m just a message away!</span>

            </div>
        </div>
    );
};

export default Headline;
