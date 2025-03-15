import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">GitHub Repo</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
