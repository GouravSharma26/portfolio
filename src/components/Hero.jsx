import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gray-900 text-white py-10 px-4">
      <div className="bg-gray-800 rounded-xl shadow-xl p-10 flex flex-col items-center max-w-xl w-full text-center">
        
        {/* Profile Image */}
        <div className="relative w-40 h-40 mb-6">
          <div className="rounded-full border-8 border-yellow-400 w-full h-full overflow-hidden">
            <img
              src="/profile.jpg" // Replace with your photo URL
              alt="Gourav Sharma"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-extrabold mb-2 text-white">
          Hi, I'm Gourav Sharma
        </h1>

        {/* Typewriter Animation */}
        <div className="text-xl text-blue-400 mb-4">
          <Typewriter
            words={[
              "Aspiring Software Developer",
              "Full Stack Web Developer",
              "React & Django Enthusiast",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base mb-8 px-4">
          Crafting user-friendly and scalable digital solutions with React,
          Django, and PostgreSQL. Let's build something great!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-8 text-2xl">
          <a
            href="mailto:gouravXXXXX@gmail.com"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/gourav-sharma-4919862a7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GouravSharma26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yourtwitterhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/yourinstagramhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition text-sm sm:text-base"
          >
            Contact Me
          </a>
          <a
            href="Gourav_Sharma_Resume.pdf"
            download
            className="bg-transparent border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
