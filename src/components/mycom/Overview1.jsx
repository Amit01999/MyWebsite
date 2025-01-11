import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { SectionWrapper } from '../../hoc';
import { ImgCircle1 } from './ImgCircle1';

const Overview1 = () => {
  return (
    <div>
      <AnimatedGradientText>
        <span
          className={cn(
            `max-sm:text-lg text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-1 font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          About Me - MERN Stack Developer
        </span>
      </AnimatedGradientText>
      <div className="flex flex-col xl:flex-row xl:gap-10 mt-6">
        <div className="w-full p-4 xl:w-[55%] flex items-center overflow-hidden">
          <section className="z-10 flex flex-col items-center text-white p-2">
            <p className="text-base sm:text-lg mx-auto md:text-xl text-center leading-relaxed text-gray-300">
              I’m a passionate and versatile{' '}
              <span className="text-purple-300 font-semibold">
                MERN Stack Developer
              </span>{' '}
              with a focus on building dynamic and scalable web applications.
              With proficiency in{' '}
              <strong className="text-indigo-400">React</strong>,{' '}
              <strong className="text-indigo-400">Node.js</strong>,{' '}
              <strong className="text-indigo-400">MongoDB</strong>, and{' '}
              <strong className="text-indigo-400">Express.js</strong>, I craft
              full-stack solutions that deliver exceptional user experiences. I
              thrive in collaborative environments, continuously improving my
              skills and staying up to date with industry trends. My goal is to
              bring innovative ideas to life and solve complex problems with
              elegant solutions.
            </p>
          </section>
        </div>
        <div className="w-full xl:w-[45%] flex justify-center items-center">
          <ImgCircle1 />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Overview1, 'Overview1');
