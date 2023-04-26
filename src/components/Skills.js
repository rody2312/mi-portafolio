import React from "react";
import { FaReact, FaPython, FaHtml5, FaCss3, FaGit } from "react-icons/fa";

import { SiDjango, SiJavascript } from "react-icons/si";

import { useInView } from "react-intersection-observer";

const Skill = ({ Icon, label, color }) => {
  return (
    <div className="flex flex-col items-center m-2">
      <div className="p-4 bg-white rounded-full shadow-md mb-2 w-24 h-24 flex items-center justify-center">
        <Icon
          className={`text-6xl transform transition-all duration-300 hover:scale-125`}
          style={{ color: color }}
        />
      </div>
      <p className="text-lg">{label}</p>
    </div>
  );
};

const SkillGroup = ({ group, items }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <div
        className={`card p-4 bg-blue-975 rounded-md shadow-md transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4 text-center">{group}</h3>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((skill, index) => (
              <Skill
                key={index}
                Icon={skill.Icon}
                label={skill.label}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const Skills = () => {
  const skills = [
    {
      group: "Desarrollo web",
      items: [
        { Icon: SiDjango, label: "Django", color: "#092E20" },
        { Icon: FaReact, label: "React", color: "#61DAFB" },
        { Icon: SiJavascript, label: "Javascript", color: "#F0DB4F" },
      ],
    },
    {
      group: "Lenguajes de marcado y estilos",
      items: [
        { Icon: FaHtml5, label: "HTML", color: "#E34F26" },
        { Icon: FaCss3, label: "CSS", color: "#264DE4" },
      ],
    },
    {
      group: "Control de versiones",
      items: [{ Icon: FaGit, label: "Git", color: "#F1502F" }],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-8 lg:px-20 px-10 text-white flex items-center justify-center"
    >
      <div className="card bg-section mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">
          <FaPython className="section-icon inline-block text-4xl mr-2" />
          <span className="section-title">Habilidades</span>
        </h2>
        <p className="text-center text-lg leading-relaxed mb-4">
          Como desarrollador de software, he adquirido habilidades técnicas en
          varias tecnologías y herramientas. Aquí hay una lista de las que he
          utilizado recientemente:
        </p>
        <div className="container mx-auto m-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {skills.map((skillGroup, index) => (
              <SkillGroup
                key={index}
                group={skillGroup.group}
                items={skillGroup.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
