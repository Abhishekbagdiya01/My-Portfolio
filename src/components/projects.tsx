import { motion } from "framer-motion";
import { PROJECTS } from "../constants/contents";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="container mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-14"
            key={index}
          >
            <div className=" lg:w-1/4 mb-4 ">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                // height={100}
                // width={100}
                className="object-cover  rounded"
              />
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <h3 className="mb-4 text-neutral-400 text-sm">{project.description}</h3>
              <a
                href={project.url}
                target="_blank"
                title="Visit the project on GitHub"
              >
                <FaGithub size={30} />
              </a>
              <div className="flex flex-wrap pt-2 gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded px-2 text-purple-400 bg-neutral-800 text-sm font-medium"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
