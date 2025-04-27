import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const AnimateName = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    let ltx = gsap.context(() => {
      const t2 = gsap.timeline({ repeat: -1, delay: 2 });
  
      t2
        .to("#A", {
          y: 48,
          x: 20,
          scale: 1.6,
          opacity: 0,
          color: "#FF4C29",
          textShadow: "0px 0px 8px #FF4C29",
          ease: "power4.inOut",
          duration: 0.9,
          stagger: 0.18,
        })
        .to("#letter", {
          opacity: 0,
          color: "#FFD93D",
          textShadow: "0px 0px 6px #FFD93D",
          ease: "back.in(1.5)",
          duration: 0.6,
          stagger: 0.18,
        })
        .to("#A", {
          opacity: 1,
          scale: 1.6,
          color: "#6BCB77",
          textShadow: "0px 0px 8px #6BCB77",
          ease: "elastic.out(1, 0.6)",
          duration: 0.7,
          stagger: 0.15,
        })
        .to("#A", {
          y: 96,
          x: 5,
          opacity: 0,
          ease: "circ.out",
          duration: 0.6,
          stagger: 0.15,
        })
        .to("#letter2", {
          opacity: 0,
          color: "#4D96FF",
          textShadow: "0px 0px 6px #4D96FF",
          ease: "back.inOut(1.5)",
          duration: 0.6,
          stagger: 0.15,
        })
        .to("#A", {
          opacity: 1,
          color: "#FF6B6B",
          textShadow: "0px 0px 10px #FF6B6B",
          ease: "bounce.out",
          duration: 0.8,
          stagger: 0.2,
        })
        .to("#A", {
          x: 200,
          ease: "expo.out",
          duration: 0.6,
          stagger: 0.1,
        })
        .to("#R", {
          y: 48,
          scale: 1.6,
          color: "#3AB0FF",
          textShadow: "0px 0px 8px #3AB0FF",
          ease: "power4.out",
          duration: 0.8,
          stagger: 0.15,
        })
        .to("#R", {
          y: 96,
          x: -20,
          color: "#F7B32B",
          textShadow: "0px 0px 8px #F7B32B",
          ease: "circ.inOut",
          duration: 0.6,
          stagger: 0.15,
        })
        .to("#R", {
          x: 190,
          opacity: 1,
          ease: "expo.out",
          duration: 0.5,
          stagger: 0.1,
        })
        .to("#B", {
          y: 48,
          x: -30,
          scale: 1.6,
          color: "#FF6B6B",
          textShadow: "0px 0px 8px #FF6B6B",
          ease: "power4.inOut",
          duration: 0.8,
          stagger: 0.18,
        })
        .to("#B", {
          y: 96,
          x: -50,
          color: "#6BCB77",
          textShadow: "0px 0px 8px #6BCB77",
          ease: "back.inOut(1.8)",
          duration: 0.6,
          stagger: 0.18,
        })
        .to("#B", {
          x: 180,
          opacity: 1,
          ease: "expo.out",
          duration: 0.5,
          stagger: 0.1,
        })
        .to("#F", {
          y: 48,
          x: -60,
          scale: 1.6,
          color: "#FFD93D",
          textShadow: "0px 0px 8px #FFD93D",
          ease: "power4.inOut",
          duration: 0.8,
          stagger: 0.18,
        })
        .to("#F", {
          y: 96,
          x: -70,
          color: "#4D96FF",
          textShadow: "0px 0px 8px #4D96FF",
          ease: "back.inOut(1.8)",
          duration: 0.6,
          stagger: 0.18,
        })
        .to("#F", {
          x: 170,
          opacity: 1,
          ease: "expo.out",
          duration: 0.5,
          stagger: 0.1,
        });
    }, logoRef);
  
    return () => ltx.revert();
  }, []);
  

  return (
    <div>
      <div ref={logoRef} className="text-white">
        <p>
          const name = [
          <span className="inline-block" id="A">
            A
          </span>
          ,{" "}
          <span className="inline-block" id="R">
            R
          </span>
          ,{" "}
          <span className="inline-block" id="B">
            A
          </span>
          ,{" "}
          <span className="inline-block" id="F">
            F
          </span>
          ];
        </p>
        <br />
        <code>
          name.forEach((<span className="inline-block" id="letter">
            letter
          </span>
          ) =&gt; {"{"}
        </code>
        <br />
        <br />
        <code>
          {"console.log("}
          <span className="inline-block" id="letter2">
            letter
          </span>
          );
          <br />
          <br />
          {"});"}
        </code>
      </div>
    </div>
  );
};

export default AnimateName;
