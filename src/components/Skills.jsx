import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Backend & Database</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Django & REST API</li>
            <li>PostgreSQL</li>
            <li>SQL</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
