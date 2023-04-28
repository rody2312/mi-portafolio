import React from "react";
import { FaReact, FaPython, FaHtml5, FaCss3, FaGit, FaCode } from "react-icons/fa";

import { TbBrandVscode, TbBrandRedux } from "react-icons/tb"

import { SiDjango, SiJavascript, SiMysql } from "react-icons/si";

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

const SkillGroup = ({ group, items, description }) => {
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
        <p className="text-center text-lg leading-relaxed mb-4">
          {description}
        </p>
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
      group: "Desarrollo Backend",
      description:
        "Tengo experiencia en desarrollo backend utilizando Python y Django para crear aplicaciones web.",
      items: [
        { Icon: FaPython, label: "Python", color: "#3776AB" },
        { Icon: SiDjango, label: "Django", color: "#092E20" },
        { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
      ],
    },
    {
      group: "Desarrollo Frontend",
      description:
        "Actualmente me estoy capacitando en JavaScript, React y Redux para complementar en mis conocimientos como desarrollador.",
      items: [
        { Icon: FaReact, label: "React", color: "#61DAFB" },
        { Icon: SiJavascript, label: "JavaScript", color: "#F0DB4F" },
        { Icon: TbBrandRedux, label: "Redux Toolkit", color: "#764abc" },
      ],
    },
    {
      group: "Lenguajes de marcado y estilos",
      description:
        "Tengo un buen conocimiento debido a que es algo que se utiliza siempre.",
      items: [
        { Icon: FaHtml5, label: "HTML", color: "#E34F26" },
        { Icon: FaCss3, label: "CSS", color: "#264DE4" },
      ],
    },
    {
      group: "Herramientas",
      description:
        "Git y VS Code son algunas de las herramientas que utilizo en mi flujo de trabajo diario.",
      items: [
        { Icon: FaGit, label: "Git", color: "#F1502F" },
        { Icon: TbBrandVscode, label: "VSCode", color: "#007ACC" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-8 lg:px-20 md:px-10 px-5 text-white flex items-center justify-center"
    >
      <div className="card bg-section mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">
          <FaCode className="section-icon inline-block text-4xl mr-2" />
          <span className="section-title">Habilidades</span>
        </h2>   
        <p className="text-center text-lg leading-relaxed mb-4">
          Como desarrollador de software, he adquirido habilidades técnicas en
          varias tecnologías y herramientas. Aquí hay una lista de las que he
          utilizado recientemente:
        </p>
        <div className="container mx-auto m-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {skills.map((skillGroup, index) => (
              <SkillGroup
                key={index}
                group={skillGroup.group}
                description={skillGroup.description}
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
