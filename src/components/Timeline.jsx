import React, { useRef, useEffect } from "react";
import { FaGraduationCap, FaUsers, FaCode, FaLaptopCode, FaBook, FaRobot, FaArchive } from "react-icons/fa";

const timelineData = [
  { year: "2023", event: "Started B.Tech in Computer Science @ SRM IST", icon: <FaGraduationCap /> },
  { year: "2023", event: "Joined Aarush Envision Club", icon: <FaUsers /> },
  { year: "2024", event: "Learned Python, built first CLI tools", icon: <FaCode /> },
  { year: "2024", event: "Completed Django Full-Stack Course", icon: <FaLaptopCode /> },
  { year: "2024", event: "Built HealthTech Website", icon: <FaLaptopCode /> },
  { year: "2024", event: "Published E-Book Management System", icon: <FaBook /> },
  { year: "2024", event: "Developed Chat Bot Application", icon: <FaRobot /> },
  { year: "2024", event: "Created Old Newspaper Archive", icon: <FaArchive /> },
];

const Timeline = () => {
    return (
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-12">My Timeline</h2>
  
          {/* Scrollable container */}
          <div className="horizontal-scrollbar custom-scrollbar">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 md:w-80 p-6 bg-white border-t-4 border-blue-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 scroll-snap-align-center"
              >
                {/* Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex justify-center items-center shadow-md">
                  <div className="text-blue-600 text-xl">{item.icon}</div>
                </div>
  
                {/* Card Content */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-blue-600">{item.year}</h3>
                  <p className="mt-2 text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Timeline;
