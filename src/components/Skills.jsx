import React from "react";
import { FaCode, FaDatabase, FaTools, FaUsers } from "react-icons/fa";
import { SiReact, SiDjango, SiPython, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiGit } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-12">Skills</h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

          {/* Programming Languages */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-600">Programming Languages</h3>
            </div>
            <SkillProgress icon={<SiCplusplus />} skill="C++" percent={90} />
            <SkillProgress icon={<SiPython />} skill="Python" percent={85} />
            <SkillProgress icon={<SiPostgresql />} skill="SQL" percent={80} />
          </div>

          {/* Web Development */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <SiReact className="text-3xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-600">Web Development</h3>
            </div>
            <SkillProgress icon={<SiReact />} skill="React.js" percent={90} />
            <SkillProgress icon={<SiDjango />} skill="Django" percent={85} />
            <SkillProgress icon={<SiHtml5 />} skill="HTML" percent={95} />
            <SkillProgress icon={<SiCss3 />} skill="CSS" percent={90} />
            <SkillProgress icon={<SiJavascript />} skill="JavaScript" percent={85} />
          </div>

          {/* Database Management */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-3xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-600">Database Management</h3>
            </div>
            <SkillProgress icon={<SiPostgresql />} skill="PostgreSQL" percent={85} />
            <SkillProgress icon={<SiPostgresql />} skill="SQL" percent={80} />
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-600">Tools & Technologies</h3>
            </div>
            <SkillProgress icon={<SiGit />} skill="Git & GitHub" percent={85} />
            <SkillProgress icon={<FaTools />} skill="VS Code" percent={90} />
          </div>

          {/* Soft Skills */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-600">Soft Skills</h3>
            </div>
            <SkillProgress icon={<FaUsers />} skill="Problem-solving" percent={90} />
            <SkillProgress icon={<FaUsers />} skill="Teamwork" percent={85} />
            <SkillProgress icon={<FaUsers />} skill="Communication" percent={80} />
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillProgress = ({ icon, skill, percent }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <span className="text-xl text-gray-600 mr-2">{icon}</span>
          <span className="text-sm font-medium text-gray-700">{skill}</span>
        </div>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
