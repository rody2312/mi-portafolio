import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-in-out ${
        inView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="space-x-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Vue", "Firebase"],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      technologies: ["Vue", "Firebase"],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      technologies: ["Vue", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="h-screen py-8 px-20 text-white flex items-center justify-center">
      <div className="card bg-gray-900 mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">Proyectos</h2>
        <p className="text-center text-lg leading-relaxed mb-4">
          Estos son algunos de mis proyectos recientes. Siéntase libre de
          revisar el código fuente y ver cómo funcionan.
        </p>
        <div className="container mx-auto text-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
