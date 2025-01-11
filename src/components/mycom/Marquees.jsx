import React from 'react';
import Marquee from './Marquee';
import { technologies } from '../../constants';
import RetroGrid from '../ui/retro-grid';
import { textVariant } from '../../utils/motion';
import { styles } from '../../styles';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { cn } from '@/lib/utils';

const Marquees = () => {
  return (
    <div className="py-5 w-full relative overflow-hidden">
      <div variants={textVariant()}>
        <AnimatedGradientText>
          <span
            className={cn(
              `max-sm:text-lg text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-1 font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Tools and Technologies I Specialize In
          </span>
        </AnimatedGradientText>
        <h2 className={`${styles.sectionHeadText} my-5 text-center flux`}>
          Technical Expertise
        </h2>
      </div>
      <RetroGrid></RetroGrid>
      <Marquee imagesUrls={technologies} direction={'left'} />
      <Marquee imagesUrls={technologies} direction={'right'} />
    </div>
  );
};

export default Marquees;
