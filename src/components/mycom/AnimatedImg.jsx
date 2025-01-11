import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import './AnimateImg.css';

const AnimatedImg = ({ index }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tilt className="xs:w-[200px] w-full">
        <motion.div
          drag
          dragConstraints={{
            left: -200,
            top: -200,
            right: 100,
            down: -100,
          }}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.2}
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className=""
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="w-full"
          >
            <div className="abhishek hover:hoverAbhishekbg flex items-center justify-center w-[13rem] h-[13rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card">
              <div className="bgamit Abhishekbg hover:bg-bgavatar bg-cover bg-no-repeat bg-[50%] w-52 h-48 hero-animation will-change-transform" />
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default AnimatedImg;
