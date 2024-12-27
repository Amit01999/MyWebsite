import React from 'react';
import Marquee from './Marquee';
import { technologies } from '../../constants';
import RetroGrid from '../ui/retro-grid';

const Marquees = () => {
  return (
    <div className="py-5 w-full relative overflow-hidden">
      <RetroGrid></RetroGrid>
      <Marquee imagesUrls={technologies} direction={'left'} />
      <Marquee imagesUrls={technologies} direction={'right'} />
    </div>
  );
};

export default Marquees;
