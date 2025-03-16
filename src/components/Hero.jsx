import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.div
        className="text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Gourav Sharma
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Aspiring Software Developer | Problem Solver | Full Stack Enthusiast
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/GouravSharma26"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="/Gourav_Sharma_Resume.pdf"
            download
            className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
