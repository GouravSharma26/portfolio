import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Gourav Sharma</h1>
        <p className="text-2xl mb-6">Aspiring Software Developer | Problem Solver | Full Stack Enthusiast</p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/GouravSharma26" target="_blank" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">GitHub</a>
          <a href="#projects" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">View Projects</a>
          <a
  href="/Gourav_Sharma_Resume.pdf"
  download
  className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
>
  Download Resume
</a>
        </div>
      </motion.div>
    </section>
  )
}
