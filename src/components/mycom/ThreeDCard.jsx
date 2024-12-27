import React from 'react';
import { SectionWrapper } from '../../hoc';
import { delay, motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '../ui/3dCard';
import ShimmerButton from '../ui/shimmer-button';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import p2 from '../../assets/projects/p2.png';
import p1 from '../../assets/projects/p1.png';
import p3 from '../../assets/projects/p3.png';
import p4 from '../../assets/projects/p4.png';
import p5 from '../../assets/projects/p5.png';
import p6 from '../../assets/projects/p6.png';

const ThreeDCard = () => {
  const cardData = [
    {
      title: 'Eat&Meet',
      subtitle: 'A food ordering website.',
      image: p1,
      tags: [
        {
          name: 'HTML',
          color: 'blue-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'green-text-gradient',
        },
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'NodeJS',
          color: 'pink-text-gradient',
        },
        {
          name: 'Express',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'orange-text-gradient',
        },
      ],
      link: ' https://eatandmeet-frontend.onrender.com/',
      git: 'https://github.com/Amit01999/EatandMeet/tree/main',
    },
    {
      title: 'BestBuyShoop',
      subtitle: 'A e-commers platfrom',
      image: p2,
      tags: [
        {
          name: 'HTML',
          color: 'blue-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'green-text-gradient',
        },
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'NodeJS',
          color: 'pink-text-gradient',
        },
        {
          name: 'Express',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'orange-text-gradient',
        },
      ],
      link: 'https://best-buy-shope-krgy.vercel.app/',
      git: 'https://github.com/Amit01999/BestBuyShope/tree/main',
    },
    {
      title: 'StudyBoost',
      subtitle:
        'StudyBoost is a fully functional ed-tech learning platform that enables users to create, consume, and rate educational content. ',
      image: p3,
      tags: [
        {
          name: 'ReactJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'NodeJS',
          color: 'green-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'pink-text-gradient',
        },
        {
          name: 'ExpressJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'orange-text-gradient',
        },
      ],
      link: 'https://study-boost-client.vercel.app/',
      git: 'https://github.com/Amit01999/StudyBoost-client/tree/main',
    },
    {
      title: 'WanderPlace',
      subtitle:
        'This project buliding idea is to list the hotels of different cities globally so that it can easily accessible to your vacation place.',
      image: p4,
      tags: [
        {
          name: 'Ejs',
          color: 'blue-text-gradient',
        },
        {
          name: 'NodeJS',
          color: 'green-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'pink-text-gradient',
        },
        {
          name: 'ExpressJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'orange-text-gradient',
        },
      ],
      link: 'https://wanderplace-gxnn.onrender.com/',
      git: 'https://github.com/Amit01999/WanderPlace/tree/main',
    },
    {
      title: 'NetflixGPT',
      subtitle:
        'Netflix GPT is a cutting-edge project that combines the power of Netflix-style movie browsing with the intelligence of OpenAIs GPT technology.',
      image: p6,
      tags: [
        {
          name: 'Redux',
          color: 'green-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'pink-text-gradient',
        },
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
      ],
      link: 'https://netflix-gpt-rust-delta.vercel.app/#/',
      git: 'https://github.com/Amit01999/NetflixGPT',
    },
    {
      title: 'DentalPortal',
      subtitle:
        'This project buliding idea is to create a paltfrom where a pasint can book a doctor for teeth.',
      image: p5,
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'Redux',
          color: 'green-text-gradient',
        },
        {
          name: 'TailwindCSS',
          color: 'pink-text-gradient',
        },
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'NodeJS',
          color: 'pink-text-gradient',
        },
        {
          name: 'Express',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'orange-text-gradient',
        },
      ],
      link: 'https://dental-portal-csmi.vercel.app/',
      git: 'https://github.com/Amit01999/DentalPortal/tree/main',
    },
  ];

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
    <div className="p-14 overflow-x-hidden">
      <AnimatedGradientText>
        <span
          className={cn(
            `text-5xl p-3 font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
          >
            {row.map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
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
                  <CardBody className="bg-[#111827] relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-gray-300 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    {/* Title */}
                    <CardItem
                      translateZ={50}
                      className="text-xl font-bold text-white dark:text-black"
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
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>

                    {/* Tags */}
                    <CardItem translateZ={60}>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {card.tags.map(tag => (
                          <p
                            key={tag.name}
                            className={`text-[14px] ${tag.color}`}
                          >
                            {' '}
                            #{tag.name}{' '}
                          </p>
                        ))}
                      </div>
                    </CardItem>

                    {/* Buttons */}
                    <div className="flex justify-between items-center mt-4">
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
                      <CardItem translateZ={20} as="button" className="">
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
