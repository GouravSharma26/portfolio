import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-xl font-bold text-blue-600">
            Gourav Sharma
          </span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Mobile menu placeholder */}
        <div className="md:hidden text-2xl cursor-pointer">&#9776;</div>
      </div>
    </nav>
  );
};

export default Navbar;
