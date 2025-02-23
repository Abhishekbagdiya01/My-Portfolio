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
      <div className="container mx-auto"> {/* Added container for responsiveness */}
        {PROJECTS.map((project, index) => (
          <div
            className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-14" // Changed to flex-col on small screens
            key={index}
          >
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0"> {/* Added margin bottom for small screens */}
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                className="object-cover w-full rounded" // Added w-full for image responsiveness
              />
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4" // Added w-full
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <h3 className="mb-4 text-neutral-400 text-sm">{project.description}</h3>
              <a
                className="text-neutral-400"
                href={project.url}
                target="_blank"
                title="Visit the project on GitHub"
              >
                <FaGithub size={30} />
              </a>
              <div className="pt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded px-2 py-1 text-purple-400 bg-neutral-800 text-sm font-medium"
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
