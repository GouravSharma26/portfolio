import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gourav Sharma. All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-3 text-xl">
          {/* Email */}
          <a
            href="mailto:gouravXXXXX@gmail.com"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gourav-sharma-4919862a7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/GouravSharma26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
