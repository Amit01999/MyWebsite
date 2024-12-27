import { useEffect, useState } from 'react';

import Particles from '../ui/particles';

export function Partical() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent ">
        About Me - MERN Stack Developer
      </span>
      <p className="text-lg text-center max-w-3xl leading-relaxed text-gray-300">
        I’m a passionate and versatile{' '}
        <span className="text-purple-300 font-semibold">
          MERN Stack Developer
        </span>{' '}
        with a focus on building dynamic and scalable web applications. With
        proficiency in <strong className="text-indigo-400">React</strong>,{' '}
        <strong className="text-indigo-400">Node.js</strong>,{' '}
        <strong className="text-indigo-400">MongoDB</strong>, and{' '}
        <strong className="text-indigo-400">Express.js</strong>, I craft
        full-stack solutions that deliver exceptional user experiences. I thrive
        in collaborative environments, continuously improving my skills and
        staying up to date with industry trends. My goal is to bring innovative
        ideas to life and solve complex problems with elegant solutions.
      </p>

      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={'#6C39A4'}
        size={0.8}
      />
    </div>
  );
}
