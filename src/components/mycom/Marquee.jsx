import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ imagesUrls, direction }) => {
  return (
    <div className=" w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-5 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <div className=" w-full green-pink-gradient rounded-lg p-[1px] shadow-card select-none  h-[150px]">
            <p className="text-center">{url.name}</p>
            <div className="bg-tertiary rounded-lg p-5 flex justify-evenly items-center flex-col h-[122px]">
              <img src={url.icon} className="w-16 h-16 object-contain" />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-5 pr-40"
      >
        {imagesUrls.map((url, index) => (
          <div className=" w-full  h-[150px] green-pink-gradient rounded-lg p-[1px] shadow-card select-none">
            <p className="text-center">{url.name}</p>
            <div className="bg-tertiary  h-[122px] rounded-lg p-5 flex justify-evenly items-center flex-col">
              <img src={url.icon} className="w-16 h-16 object-contain" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
