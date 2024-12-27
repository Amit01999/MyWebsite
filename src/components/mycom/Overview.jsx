import React, { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '../ui/animated-beam';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { RiNextjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import img from '../../assets/company/amit1.png';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { SectionWrapper } from '../../hoc';
const Circle = forwardRef(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center bg-[#AE54F0] justify-center rounded-full border-[#DC4BB0] border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className
      )}
      style={{ width: '60px', height: '60px' }}
    >
      {children}
    </div>
  );
});

const Overview = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const iconStyle = { fontSize: '38px' };
  return (
    <div className="flex flex-col gap-0">
      <div className="relative flex items-center justify-center overflow-hidden  ">
        <section className="relative mt-14 z-10 flex flex-col items-center justify-center text-white p-2 ">
          <AnimatedGradientText>
            <span
              className={cn(
                `text-5xl p-1 font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              About Me - MERN Stack Developer
            </span>
          </AnimatedGradientText>
          <p className=" mt-10 text-lg text-center max-w-3xl leading-relaxed text-gray-300">
            I’m a passionate and versatile{' '}
            <span className="text-purple-300 font-semibold">
              MERN Stack Developer
            </span>{' '}
            with a focus on building dynamic and scalable web applications. With
            proficiency in <strong className="text-indigo-400">React</strong>,{' '}
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
      <div
        className="relative flex h-[400px] w-full items-center justify-center overflow-hidden "
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-lg max-h-[200px] justify-between items-center gap-10">
          <div className="w-[700px] flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <FaReact style={iconStyle} />
            </Circle>
            <Circle ref={div5Ref}>
              <SiExpress style={iconStyle} />
            </Circle>
          </div>
          <div className="w-[800px] flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <IoLogoNodejs style={iconStyle} />
            </Circle>
            <div ref={div4Ref} className="size-16">
              <div className=" z-10  relative w-[200px] h-[200px] flex items-center justify-center">
                <img
                  src={img}
                  alt=""
                  className="absolute top-8 left-4 transform -translate-x-1/2 -translate-y-1/2 object-contain rounded-full border-4 border-[#D82E81]"
                />
              </div>
            </div>
            <Circle ref={div6Ref}>
              <SiMongodb style={iconStyle} />
            </Circle>
          </div>

          <div className=" w-[700px] flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <RiNextjsLine style={iconStyle} />
            </Circle>
            <Circle ref={div7Ref}>
              <TbBrandTypescript style={iconStyle} />
            </Circle>
          </div>
        </div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-95}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={95}
          endYOffset={25}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-95}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={95} // Adjusted curvature to match div3Ref
          endYOffset={25} // Aligned the beam endpoint vertically
          reverse
        />
      </div>
    </div>
  );
};
export default SectionWrapper(Overview, 'Overview');
