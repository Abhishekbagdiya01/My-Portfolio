import { motion } from "motion/react"
import { EXPERIENCES } from "../constants/contents"

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{
          y: -100,
          opacity: 0
        }}
        whileInView={
          {
            y: 0,
            opacity: 1
          }}
        transition={{
          duration: 1.5
        }}

        className="my-20 text-center text-4xl">Experiences</motion.h1>
      <div className=" m-4">
        {
          EXPERIENCES.map((exp, index) => (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
              <motion.div
                initial={{
                  x: -100,
                  opacity: 0
                }}
                whileInView={
                  {
                    x: 0,
                    opacity: 1
                  }}
                transition={{
                  duration: 1
                }}


                className="w-full lg:w-1/4">
                <p className="mb-8 text-sm text-neutral-400 ">{exp.year}</p>
              </motion.div>
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0
                }}
                whileInView={
                  {
                    x: 0,
                    opacity: 1
                  }}
                transition={{
                  duration: 1
                }}

                className="w-full max-w-xl lg:w-3/4">

                <h6 className="font-bold text-neutral-400">{exp.role} - {" "} <span className="text-sm text-purple-400">{exp.company}</span> </h6>
                <ul className="mb-4 text-neutral-400">{
                  exp.description.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))


                }</ul>
                <div className="mb-4 flex flex-wrap">
                  {
                    exp.technologies.map((tech, index) => (
                      <div className="flex flex-wrap" key={index}>
                        <span className="mr-2 rounded px-2 py-1 text-purple-400 p-4 bg-neutral-800 text-sm font-medium">{tech}</span>
                      </div>
                    ))
                  }
                </div>
              </motion.div>

            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Experiences
