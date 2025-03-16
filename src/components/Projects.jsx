import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "HealthTech Website",
    description: "An appointment booking and doctor consultation platform featuring user roles for Patients and Doctors, interactive listings, scheduling, maps, reviews, and secure logins.",
    techStack: "React.js, Django, PostgreSQL, Tailwind CSS",
    github: "https://github.com/GouravSharma26/HealthTechWebsite-Basic-.git",
  },
  {
    title: "E-Book Management System",
    description: "An online book shopping platform allowing users to browse, purchase, and manage e-books. Includes admin panel, cart, and payment integration. Revamped with React.",
    techStack: "React.js, Django, PostgreSQL",
    github: "https://github.com/GouravSharma26/E-Book-System.git",
  },
  {
    title: "Chat Bot Application",
    description: "An intelligent chatbot capable of responding to user queries with natural language processing, REST API backend, and user authentication.",
    techStack: "React.js, Django, PostgreSQL",
    github: "https://github.com/GouravSharma26/Chat_Bot.git",
  },
  {
    title: "Old Newspaper Archive",
    description: "A digital archive platform that collects and displays old newspaper editions with filters, uploads, admin dashboard, and a responsive interface.",
    techStack: "React.js, Django, PostgreSQL, Tailwind CSS",
    github: "https://github.com/GouravSharma26/Old_Newspaper.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap text-xs text-gray-500 mb-4">
                  {project.techStack.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-left">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
