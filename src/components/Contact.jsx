import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Contact Me</h2>

        <div className="flex flex-col items-center space-y-6 text-gray-700 text-lg">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <a href="mailto:gouravXXXXX@gmail.com" className="hover:text-blue-600 transition duration-300">
              gouravXXXXX@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-600 text-2xl" />
            <span>+91 XXXXXXXX</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/gourav-sharma-4919862a7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              linkedin.com/in/gourav-sharma-4919862a7
            </a>
          </div>
        </div>

        {/* Optional: Contact Form */}
        {/* <form className="mt-12 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
