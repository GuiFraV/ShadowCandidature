import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Features from './Features';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Main = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 2.2,
    });
  }, []);

  return (
    <main>
      <div className="mt-32 flex items-center justify-between">
        <h1
          ref={headingRef}
          className="w-3/6 text-left text-5xl clip-path-polygon opacity-0 transform translate-y-25"
        >
          Front End Developer, Franguiadakis Guillaume
        </h1>
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            className="w-full md:w-auto mb-2 md:mb-0 md:mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="submit"
            value="Add me"
            className="w-full md:w-auto px-6 py-2 bg-[#923ADB] text-white font-bold rounded-md cursor-pointer hover:bg-[#7e32b8] transition duration-300"
          />
        </div>
      </div>

      <Features />
    </main>
  );
};

export default Main;
