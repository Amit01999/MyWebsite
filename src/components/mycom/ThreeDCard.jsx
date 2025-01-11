import React from 'react';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '../ui/3dCard';
import ShimmerButton from '../ui/shimmer-button';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { cardData } from '../../constants/Pojectdata';

const ThreeDCard = () => {
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    visibleLeft: {
      duration: 1,
      delay: 0.2,
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hiddenRight: { opacity: 0, x: 100 },
    visibleRight: {
      duration: 1,
      delay: 0.2,
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="p-5 overflow-x-hidden">
      <AnimatedGradientText>
        <span
          className={cn(
            `text-3xl sm:text-4xl md:text-5xl p-2 sm:p-3 font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          My Projects
        </span>
      </AnimatedGradientText>

      {cardData
        .reduce((rows, card, index) => {
          if (index % 2 === 0) rows.push([card]);
          else rows[rows.length - 1].push(card);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
          >
            {row.map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="flex justify-center"
                variants={
                  cardIndex === 0
                    ? {
                        hidden: cardVariants.hiddenLeft,
                        visible: cardVariants.visibleLeft,
                      }
                    : {
                        hidden: cardVariants.hiddenRight,
                        visible: cardVariants.visibleRight,
                      }
                }
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-[#111827] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-gray-300 w-full sm:w-[90%] md:w-[100%] lg:w-[25rem] xl:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
                    {/* Title */}
                    <CardItem
                      translateZ={50}
                      className="text-lg sm:text-xl font-bold text-white dark:text-black"
                    >
                      {card.title}
                    </CardItem>

                    {/* Subtitle */}
                    <CardItem
                      as="p"
                      translateZ={60}
                      className="text-neutral-500 text-sm max-w-sm mt-2"
                    >
                      {card.subtitle}
                    </CardItem>

                    {/* Image */}
                    <CardItem translateZ={100} className="w-full mt-4">
                      <img
                        src={card.image}
                        className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={card.title}
                      />
                    </CardItem>

                    {/* Tags */}
                    <CardItem translateZ={60}>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.tags.map(tag => (
                          <p
                            key={tag.name}
                            className={`text-[12px] sm:text-[14px] ${tag.color}`}
                          >
                            #{tag.name}
                          </p>
                        ))}
                      </div>
                    </CardItem>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
                      {/* View Source Code Button */}
                      <CardItem translateZ={20}>
                        <ShimmerButton
                          onClick={() =>
                            card.git && window.open(card.git, '_blank')
                          }
                        >
                          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#C379EC] dark:from-white dark:to-slate-900/10 lg:text-sm">
                            <a href={card.link}>View Source Code</a>
                          </span>
                        </ShimmerButton>
                      </CardItem>

                      {/* View Website Button */}
                      <CardItem translateZ={20} as="button">
                        <ShimmerButton
                          onClick={() =>
                            card.link && window.open(card.link, '_blank')
                          }
                        >
                          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#C379EC] dark:from-white dark:to-slate-900/10 lg:text-sm">
                            View Website
                          </span>
                        </ShimmerButton>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>
        ))}
    </div>
  );
};
export default SectionWrapper(ThreeDCard, 'ThreeDCard');
