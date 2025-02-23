import { FaFlutter, FaReact, FaNodeJs } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react";
const TechStack = () => {
  const animeVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1
        whileInView={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        className="my-20 text-center text-4xl">Tech <span className="text-neutral-500">Stack</span></motion.h1>
      <motion.div
        initial={{
          x: - 100,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={animeVariants(2.5)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-neutral-800 border-4 p-4">
          <FaFlutter className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={animeVariants(1)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={animeVariants(3.5)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <FaNodeJs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={animeVariants(6)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <SiExpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={animeVariants(3.5)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <RiFirebaseFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={animeVariants(1.5)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={animeVariants(1)}
          animate="animate"
          initial="initial"

          className="rounded-2xl border-neutral-800 border-4 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

      </motion.div>
    </div >
  )
}

export default TechStack
