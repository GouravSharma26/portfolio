import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <p>Email: <a href="mailto:gouravsharma262@gmail.com" className="text-blue-500">gouravsharma262@gmail.com</a></p>
        <p>Location: Jaipur, Rajasthan, India</p>

        <div className="flex justify-center space-x-4 mt-6">
          <motion.a
            href="https://github.com/GouravSharma26"
            target="_blank"
            className="text-gray-600 hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/gourav-sharma26/"
            target="_blank"
            className="text-gray-600 hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
