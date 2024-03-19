import { useEffect, useRef } from "react";
import { gitLogo } from "../utils";
import gsap from "gsap";

const Footer = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const underlineWidth = underline.offsetWidth;

    gsap.set(underline, {
      position: "relative",
      display: "inline-block",
    });

    const underlineTl = gsap.timeline({ paused: true });

    underlineTl.to(underline, {
      "--underline-width": `${underlineWidth}px`,
      duration: 0.1,
      ease: "power2.out",
    });

    const handleMouseEnter = () => {
      underlineTl.play();
    };

    const handleMouseLeave = () => {
      underlineTl.reverse();
    };

    underline.addEventListener("mouseenter", handleMouseEnter);
    underline.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      underline.removeEventListener("mouseenter", handleMouseEnter);
      underline.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <footer className="w-full opacity-100 bg-gradient-to-r from-[#87a3e3] to-[#a185e7] p-4 text-[#1A1A1A] font-bold lg:m-0">
      <div className="flex flex-col md:flex-row md:justify-between md:max-w-[1150px] md:mx-auto">
        <div className="flex items-center">
          <svg className="mr-2 mt-3" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3536 16.3536C17.5488 16.1583 17.5488 15.8417 17.3536 15.6464L14.1716 12.4645C13.9763 12.2692 13.6597 12.2692 13.4645 12.4645C13.2692 12.6597 13.2692 12.9763 13.4645 13.1716L16.2929 16L13.4645 18.8284C13.2692 19.0237 13.2692 19.3403 13.4645 19.5355C13.6597 19.7308 13.9763 19.7308 14.1716 19.5355L17.3536 16.3536ZM0 16.5H17V15.5H0V16.5Z" fill="black"></path>
            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="black"></line>
          </svg>
          <p className="mt-1 ml-2 text-xl font-normal leading-5 text-white inline-flex items-center cursor-pointer gap-2">
            👉
            <a
              id="underline"
              href="https://portefolio-3d.vercel.app/"
              target="_blank"
              ref={underlineRef}
              style={{ "--underline-width": "0px" }}
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[var(--underline-width)] after:h-[2px] after:bg-white after:transition-all after:duration-10 after:ease-in-out"
            >
              J'ai un portefolio, ici 
            </a>
            👈
          </p>
        </div>
        <div className="flex items-center mt-8 md:mt-0">
          <p className="md:mr-4 text-xl font-normal leading-5 text-white inline-flex items-center cursor-pointer gap-2">N'hésitez pas à visiter aussi mon github</p>
          <a href="https://github.com/GuiFraV" target="_blank" className="flex items-center text-black no-underline">
            <img
              src={gitLogo}
              alt="github logo"
              className="w-8 ml-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;