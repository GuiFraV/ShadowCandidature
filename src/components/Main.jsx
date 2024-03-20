import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Features from './Features';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Main = () => {
  const headingRef = useRef(null);
  const videoId = "Nc7tV0lRfYY";

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2.2,
    });

    gsap.to('.box', {
      y: -20,
      stagger: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <main>
      <div className="mt-28 flex items-center justify-between">
        <h1
          ref={headingRef}
          className="w-3/6 text-left text-5xl clip-path-polygon opacity-0 transform translate-y-25"
        >
          Front End Developer, Franguiadakis Guillaume
        </h1>
        <div className="box flex flex-col md:flex-row opacity-0 w-48">
          <a
            href='/src/assets/CV/CV-Guillaume_FRANGUIADAKIS.pdf'
            download="CV-Guillaume_Franguiadakis.pdf"
            className="flex justify-center w-full px-6 py-2 bg-[#3853c9] text-white font-bold rounded-md cursor-pointer hover:bg-[#4c63c9] transition duration-300"
          >Mon CV</a>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Features />
    </main>
  );
};

export default Main;