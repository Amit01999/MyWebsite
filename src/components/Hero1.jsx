import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import CodeInfo from './CodeInfo';
import FlickeringGrid from './ui/flickering-grid';

export default function Component() {
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-25">
      {/* Background */}
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={15}
        color="#AD54F0"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={2000}
      />

      <div className="relative container w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5 lg:px-8 z-10">
        {/* Left Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[45%] mb-6 sm:mt-5 max-sm:mt-8  lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="relative">
            <div className="absolute left-0 ml-[-18px] top-0 w-2 h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
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
          </div>
        </motion.div>

        {/* Right Part */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[45%]"
        >
          <CodeInfo />
        </motion.div>
      </div>
    </section>
  );
}
