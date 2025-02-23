import { motion } from 'motion/react'
import { ABOUT_TEXT } from '../constants/contents'
const About = () => {
  return (
    <div className='border-b border-neutral-900 p-4'>
      <div>
        <motion.h1
          whileInView={{
            y: -10
          }}

          transition={{
            duration: 1,
          }}

          className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-1/2 lg:p-8' >
          <div className='flex justify-center items-center'>
            <motion.img
              whileInView={{
                x: 10,
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


              className='rounded-2xl' src="https://wallpaperaccess.com/full/4910984.gif" />
          </div>
        </div>
        <div className='w-full pt-4 lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-start'>
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
                duration: 1,
                delay: 1
              }}
              className='max-w-2xl font-light tracking-tight'> {
                ABOUT_TEXT
              }</motion.p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
