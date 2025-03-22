import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Profile Image */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0 flex justify-center">
          <img
            src="/abme.png" // Replace with your image path (put in public folder)
            alt="Gourav Sharma"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-2/3 md:pl-12">
         
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            Aspiring Software Developer currently pursuing a B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology.
            Skilled in C++, Python, React, Django, and SQL, with experience in full-stack web development and building scalable digital solutions.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Passionate about problem-solving, creating user-friendly applications, and continuously learning new technologies. My focus is on developing efficient, scalable software solutions that solve real-world problems.
          </p>

          <a
            href="#skills"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            View My Skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
