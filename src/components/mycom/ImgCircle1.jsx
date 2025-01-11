import { OrbitingCircles } from '../ui/orbiting-circles';
import pic from '../../assets/company/amit1.png';
import { FaReact } from 'react-icons/fa6';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaDocker } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import AnimatedImg from './AnimatedImg';
export function ImgCircle1() {
  const smallScreenRadius1 = 125;
  const defaultRadius1 = 150;
  const currentRadius1 =
    window.innerWidth <= 485 ? smallScreenRadius1 : defaultRadius1;
  const smallScreenRadius2 = 155;
  const defaultRadius2 = 200;
  const currentRadius2 =
    window.innerWidth <= 485 ? smallScreenRadius2 : defaultRadius2;
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="mx-auto">
        <AnimatedImg></AnimatedImg>
      </div>
      <OrbitingCircles iconSize={50} radius={currentRadius1}>
        <FaReact className="text-6xl text-[#58C4DC]" />
        <FaNodeJs className="text-5xl text-[#56A545]" />
        <SiExpress className="text-6xl" />
        <SiMongodb className="text-6xl text-[#47A539]" />
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={50}
        radius={currentRadius2}
        reverse
        speed={1.5}
      >
        <RiNextjsLine className="text-6xl" />
        <TbBrandTypescript className="text-6xl text-[#2D79C7]" />
        <RiTailwindCssFill className="text-6xl text-[#38BDF8]" />
        <FaDocker className="text-6xl text-[#1D63ED]" />
      </OrbitingCircles>
    </div>
  );
}
