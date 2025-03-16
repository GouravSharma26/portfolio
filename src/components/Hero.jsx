import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Gourav Sharma
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Aspiring Software Developer
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-8 text-gray-300 text-sm sm:text-base md:text-lg">
          Crafting user-friendly and scalable digital solutions with React,
          Django, and PostgreSQL. Let's build something great!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8 text-2xl md:text-3xl">
          <a
            href="mailto:gouravXXXXX@gmail.com"
            className="transition-transform transform hover:scale-110"
          >
            <FaEnvelope className="hover:text-[#EA4335]" />
          </a>
          <a
            href="https://www.linkedin.com/in/gourav-sharma-4919862a7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="hover:text-[#0A66C2]" />
          </a>
          <a
            href="https://github.com/GouravSharma26"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub className="hover:text-[#333333]" />
          </a>
          <a
            href="https://twitter.com/yourtwitterhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaTwitter className="hover:text-[#1DA1F2]" />
          </a>
          <a
            href="https://instagram.com/yourinstagramhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram className="hover:text-[#E1306C]" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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
