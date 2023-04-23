import React from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3,
  FaGit,
} from "react-icons/fa";

import { SiDjango, SiJavascript } from "react-icons/si";


const Skill = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-white rounded-full shadow-md mb-2 w-20 h-20 flex items-center justify-center">
        <Icon className="text-3xl text-blue-500 transform transition-all duration-300 hover:scale-125" />
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { Icon: SiDjango, label: "Django" },
    { Icon: FaReact, label: "React" },
    { Icon: SiJavascript, label: "Javascript" },
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3, label: "CSS3" },
    { Icon: FaGit, label: "Git" },
  ];

  return (
    <section id="skills" className="min-h-screen py-8 px-20 text-white flex items-center justify-center">
      <div className="card bg-gray-900 mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">Habilidades</h2>
        <p className="text-center text-lg leading-relaxed mb-4">
          Como desarrollador de software, he adquirido habilidades técnicas en
          varias tecnologías y herramientas. Aquí hay una lista de las que he
          utilizado recientemente:
        </p>
        <div className="container mx-auto m-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Skill key={index} Icon={skill.Icon} label={skill.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
