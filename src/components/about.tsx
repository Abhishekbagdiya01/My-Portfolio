import { motion } from 'motion/react'
import { ABOUT_TEXT } from '../constants/contents'
const About = () => {
  return (
    <div className='border-b border-neutral-900'>
      <motion.h1
        whileInView={{
          y: -10
        }}

        transition={{
          duration: 0.5,
        }}

        className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h1>
      <div className='flex flex-wrap lg:flex-row justify-between'>
        <div className='w-full lg:w-1/2 lg:p-8' >
          <div className='flex justify-center items-center'>
            <motion.img
              whileInView={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: -100,
                opacity: 0
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className='rounded-2xl object-cover'
              src="https://wallpaperaccess.com/full/4910984.gif"
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2 '>
          <motion.p
            whileInView={{
              x: 0,
              opacity: 1
            }}
            initial={{
              x: 100,
              opacity: 0
            }}
            transition={{
              duration: 0.5,
            }}
            className='my-2 max-w-xl font-light py-6'> {
              ABOUT_TEXT
            }</motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
