import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero1.css';
import { Tilt } from 'react-tilt';

const codeText = `
<span class="keyword">const</span> coder = {
  <span class="property">name</span>: <span class="string">'Amit Kumar Bishwas'</span>,
  <span class="property">skills</span>: [<span class="string">'React'</span>, <span class="string">'Node.js'</span>, <span class="string">'Next.js'</span>, <span class="string">'MongoDB'</span>, <span class="string">'Express'</span>],
  <span class="property">hardWorker</span>: <span class="boolean">true</span>,
  <span class="property">problemSolver</span>: <span class="boolean">true</span>,
  <span class="property">collaborative</span>: <span class="boolean">true</span>,
  <span class="property">passionateLearner</span>: <span class="boolean">true</span>,
  <span class="property">hireable</span>: <span class="keyword">function</span>() {
    <span class="keyword">return</span> (
      <span class="this">this</span>.hardWorker &&
      <span class="this">this</span>.problemSolver &&
      <span class="this">this</span>.collaborative &&
      <span class="this">this</span>.passionateLearner &&
      <span class="this">this</span>.skills.length >= <span class="number">5</span>
    );
  }
};
`;

export default function CodeInfo() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(codeText.slice(0, index));
      index++;
      if (index > codeText.length) {
        clearInterval(intervalId);
      }
    }, 3);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Tilt className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 green-pink-gradient md:mx-auto sm:mx-auto sm:w-auto shadow-card p-[1px] rounded-[20px]"
        style={{ width: '600px', height: '500px' }}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col"
          style={{ height: '100%' }}
        >
          <div className="codeblock1"></div>
          <div className="flex items-center justify-between w-full px-4 py-2 border-b border-[#944BDB]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <p className="text-sm text-gray-400 font-mono">coder.js</p>
          </div>
          <div className="code-content p-3 font-mono text-sm text-gray-300 whitespace-pre-wrap leading-relaxed w-full h-full">
            <pre>
              <code dangerouslySetInnerHTML={{ __html: displayedText }} />
            </pre>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './Hero1.css';
// import { Tilt } from 'react-tilt';

// const codeText = `
// <span class="keyword">const</span> coder = {
//   <span class="property">name</span>: <span class="string">'Amit Kumar Bishwas'</span>,
//   <span class="property">skills</span>: [<span class="string">'React'</span>, <span class="string">'Node.js'</span>, <span class="string">'Next.js'</span>, <span class="string">'MongoDB'</span>, <span class="string">'Express'</span>],
//   <span class="property">hardWorker</span>: <span class="boolean">true</span>,
//   <span class="property">problemSolver</span>: <span class="boolean">true</span>,
//   <span class="property">collaborative</span>: <span class="boolean">true</span>,
//   <span class="property">passionateLearner</span>: <span class="boolean">true</span>,
//   <span class="property">hireable</span>: <span class="keyword">function</span>() {
//     <span class="keyword">return</span> (
//       <span class="this">this</span>.hardWorker &&
//       <span class="this">this</span>.problemSolver &&
//       <span class="this">this</span>.collaborative &&
//       <span class="this">this</span>.passionateLearner &&
//       <span class="this">this</span>.skills.length >= <span class="number">5</span>
//     );
//   }
// };
// `;

// export default function CodeInfo() {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setDisplayedText(codeText.slice(0, index));
//       index++;
//       if (index > codeText.length) {
//         clearInterval(intervalId);
//       }
//     }, 3);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <Tilt className="mx-auto w-full max-w-xl">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="mt-10 green-pink-gradient shadow-card p-[1px] rounded-[20px]"
//       >
//         <div
//           options={{ max: 45, scale: 1, speed: 450 }}
//           className="bg-tertiary rounded-[20px] py-5 px-4 sm:px-6 flex flex-col items-center"
//           style={{
//             height: 'auto', // Default for smaller screens
//             maxHeight: '100%', // Prevent overflow
//           }}
//         >
//           <div className="flex items-center justify-between w-full px-4 py-2 border-b border-[#944BDB]">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
//               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
//               <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
//             </div>
//             <p className="text-xs sm:text-sm text-gray-400 font-mono">
//               coder.js
//             </p>
//           </div>
//           <div className="code-content p-3 font-mono text-xs sm:text-sm text-gray-300 whitespace-pre-wrap leading-relaxed w-full overflow-auto lg:h-[500px]">
//             <pre>
//               <code dangerouslySetInnerHTML={{ __html: displayedText }} />
//             </pre>
//           </div>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// }
