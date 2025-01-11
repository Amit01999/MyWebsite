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
export function ImgCircle() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <img src={pic} className="w-[250px] h-[250px]" alt="Amit" />
      <OrbitingCircles iconSize={50} radius={150}>
        <FaReact className="text-6xl text-[#58C4DC]" />
        <FaNodeJs className="text-5xl text-[#56A545]" />
        <SiExpress className="text-6xl" />
        <SiMongodb className="text-6xl text-[#47A539]" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={50} radius={200} reverse speed={2}>
        <RiNextjsLine className="text-6xl" />
        <TbBrandTypescript className="text-6xl text-[#2D79C7]" />
        <RiTailwindCssFill className="text-6xl text-[#38BDF8]" />
        <FaDocker className="text-6xl text-[#1D63ED]" />
      </OrbitingCircles>
    </div>
  );
}
