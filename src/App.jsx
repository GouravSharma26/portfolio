import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-all">
        <header className="flex justify-between p-4">
          <h1 className="text-2xl font-bold">Gourav Sharma</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>

        {/* Other Components */}
        
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        

        <footer className="text-center p-4">
          © 2025 Gourav Sharma. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App
