import profile from "../assets/profile.png";
import { HERO_CONTENT } from '../constants/contents';
import { motion } from "motion/react"
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <div className=' flex flex-col lg:flex-row justify-between items-center'> {/* Removed lg:items-start */}
        <div className=' flex flex-col items-center lg:items-start lg:w-auto w-full mb-8 lg:mb-0'> {/* Added w-full for smaller screens */}
          <motion.h1
            initial={{
              x: -100,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
            Abhishek Bagdiya
          </motion.h1>
          <motion.span
            initial={{
              x: -100,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 1.2
            }}

            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent'>
            Full Stack App developer
          </motion.span>
          <motion.p
            initial={{
              x: -100,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 1.
            }}
            className="my-2 max-w-2xl font-light tracking-tight text-center lg:text-left"> {/* Added text alignment */}
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className=" w-full lg:w-1/2 flex justify-center order-first lg:order-last">
          <div className="relative w-50 h-60 lg:w-84 lg:h-100 rounded-full overflow-hidden"> {/* Responsive image dimensions */}
            <motion.div
              initial={{
                y: -200,
                x: -200
              }}
              animate={{
                y: 10,
                x: 0
              }}
              transition={{
                duration: 1,
              }}
              className="h-50 lg:h-90 absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></motion.div>
            <img
              src={profile}
              className="absolute inset-0 w-full h-full  object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div >
  );
};
export default Hero;

