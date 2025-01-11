import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import CodeInfo from './CodeInfo';
import FlickeringGrid from './ui/flickering-grid';

import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

export default function ResponsivePortfolio() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = '/Amit-Resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden px-4 sm:px-6 py-8 lg:py-12">
      {/* Background */}
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full h-full"
        squareSize={windowWidth < 640 ? 2 : 4}
        gridGap={windowWidth < 640 ? 10 : 15}
        color="#AD54F0"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={windowWidth >= 1024 ? 850 : 1050}
        width={windowWidth}
      />

      <div className="relative container lg:mt-5 h-fit w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-12 z-10">
        {/* Left Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[50%] lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="relative  mt-20 lg:mt-2">
            <div className=" absolute left-0 -ml-8 -top-4 flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-72 h-52 violet-gradient"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Amit
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
              I am a{' '}
              <TypeWriter
                options={{
                  strings: ['MERN Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <button
              onClick={onButtonClick}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </button>
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 items-center mt-8 md:mt-10 mb-10 lg:mb-0">
              {[
                {
                  Icon: BsLinkedin,
                  href: 'https://www.linkedin.com/in/amit-kumar-bishwas/',
                },
                { Icon: BsGithub, href: 'https://github.com/Amit01999' },
                { Icon: BsTwitter, href: 'https://x.com/Amitkum00343781' },
                {
                  Icon: BsDiscord,
                  href: 'https://discordapp.com/users/1313879326785011835',
                },
                {
                  Icon: BsInstagram,
                  href: 'https://www.instagram.com/amit_srkar/',
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="text-2xl sm:text-3xl md:text-4xl hover:text-purple-400 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Part */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[50%] lg:mt-10 lg:w-3/5"
        >
          <CodeInfo />
        </motion.div>
      </div>
    </section>
  );
}
